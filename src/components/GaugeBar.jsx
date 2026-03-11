import React from 'react'
import styles from './GaugeBar.module.css'

export default function GaugeBar({ markerLabel, markerPct, tickLabel, tickPct, gradient }) {
  const tickStyle = tickPct !== null
    ? { left: `${tickPct}%`, transform: 'translateX(-50%)' }
    : { left: 0 }

  return (
    <div className={styles.gaugeWrap}>
      <div className={styles.barArea}>
        <div
          className={styles.marker}
          style={{ left: `${markerPct}%` }}
        >
          {markerLabel}
        </div>
        <div
          className={styles.track}
          style={{ background: gradient }}
        />
      </div>
      <div className={styles.tick}>
        <span className={styles.tickLabel} style={tickStyle}>
          {tickLabel}
        </span>
      </div>
    </div>
  )
}
