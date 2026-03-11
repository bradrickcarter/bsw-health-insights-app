import React from 'react'
import styles from './StatusBar.module.css'

export default function StatusBar() {
  return (
    <div className={styles.statusBar}>
      <span className={styles.time}>9:41</span>
      <div className={styles.icons}>
        {/* Signal */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
          <rect x="0" y="6" width="3" height="6" rx="1"/>
          <rect x="4.5" y="4" width="3" height="8" rx="1"/>
          <rect x="9" y="2" width="3" height="10" rx="1"/>
          <rect x="13.5" y="0" width="3" height="12" rx="1"/>
        </svg>
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
          <path d="M3.5 6.5a6.5 6.5 0 0 1 9 0" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M1 3.5a10.5 10.5 0 0 1 14 0" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
        {/* Battery */}
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="currentColor" strokeOpacity="0.35"/>
          <rect x="2" y="2" width="17" height="8" rx="2" fill="currentColor"/>
          <path d="M23 4v4a2 2 0 0 0 0-4z" fill="currentColor" fillOpacity="0.4"/>
        </svg>
      </div>
    </div>
  )
}
