import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'

// iOS-style scrollbar: show on scroll, hide after idle
;(function () {
  const timers = new WeakMap()
  document.addEventListener('scroll', e => {
    const el = e.target
    if (!(el instanceof Element) || !el.classList.contains('screen')) return
    el.classList.add('is-scrolling')
    clearTimeout(timers.get(el))
    timers.set(el, setTimeout(() => el.classList.remove('is-scrolling'), 800))
  }, { capture: true, passive: true })
})()

// Drag-to-scroll with iOS momentum for .screen elements
;(function () {
  const DECEL = 0.94       // friction per frame (~iOS feel)
  const MIN_VEL = 0.5      // px/frame threshold to stop
  const SAMPLE_MS = 80     // look back window for velocity calc

  let dragging = null      // { el, startY, startScrollTop }
  let didDrag = false
  let raf = null
  let trail = []           // [{ y, t }, ...] recent pointer positions

  function cancelMomentum() {
    if (raf) { cancelAnimationFrame(raf); raf = null }
  }

  function momentum(el, velocity) {
    cancelMomentum()
    function step() {
      velocity *= DECEL
      if (Math.abs(velocity) < MIN_VEL) return
      el.scrollTop += velocity
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
  }

  document.addEventListener('mousedown', e => {
    const el = e.target.closest('.screen')
    if (!el) return
    cancelMomentum()
    dragging = { el, startY: e.clientY, startScrollTop: el.scrollTop }
    didDrag = false
    trail = [{ y: e.clientY, t: performance.now() }]
    el.style.userSelect = 'none'
  })

  document.addEventListener('mousemove', e => {
    if (!dragging) return
    const delta = dragging.startY - e.clientY
    if (Math.abs(delta) > 3) didDrag = true
    dragging.el.scrollTop = dragging.startScrollTop + delta
    const now = performance.now()
    trail.push({ y: e.clientY, t: now })
    // Keep only the recent sample window
    while (trail.length > 1 && now - trail[0].t > SAMPLE_MS) trail.shift()
  })

  document.addEventListener('mouseup', e => {
    if (!dragging) return
    const { el } = dragging
    el.style.userSelect = ''

    if (didDrag) {
      // Calculate velocity from recent trail
      const now = performance.now()
      trail.push({ y: e.clientY, t: now })
      const old = trail[0]
      const dt = now - old.t
      const dy = old.y - e.clientY  // positive = scrolled down
      const velocity = dt > 0 ? (dy / dt) * 16 : 0  // scale to ~px/frame @60fps
      momentum(el, velocity)

      e.stopPropagation()
      window.addEventListener('click', ev => ev.stopPropagation(), { capture: true, once: true })
    }

    dragging = null
    trail = []
  })
})()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
