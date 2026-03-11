import React from 'react'
import styles from './TabBar.module.css'

function IconHome() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z" stroke="#8A9BA8" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M9 21V12h6v9" stroke="#8A9BA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconStethoscope() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M7 3v5a5 5 0 0010 0V3" stroke="#3D2C1E" strokeWidth="1.9" strokeLinecap="round"/>
      <path d="M12 13v3.5a3.5 3.5 0 003.5 3.5v0a3.5 3.5 0 003.5-3.5V15" stroke="#3D2C1E" strokeWidth="1.9" strokeLinecap="round"/>
      <circle cx="19.5" cy="14" r="1.5" fill="#3D2C1E"/>
    </svg>
  )
}

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <line x1="3" y1="7" x2="21" y2="7" stroke="#8A9BA8" strokeWidth="2" strokeLinecap="round"/>
      <line x1="3" y1="12" x2="21" y2="12" stroke="#8A9BA8" strokeWidth="2" strokeLinecap="round"/>
      <line x1="3" y1="17" x2="21" y2="17" stroke="#8A9BA8" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export default function TabBar() {
  return (
    <div className={styles.tabBar}>
      <div className={styles.tabs}>
        {/* Home */}
        <div className={styles.tab}>
          <IconHome />
          <span className={styles.label}>Home</span>
        </div>

        {/* Get Care */}
        <div className={styles.tabCenter}>
          <div className={styles.getCareWrapper}>
            <div className={styles.getCareRing} />
            <div className={styles.getCareBtn}>
              <IconStethoscope />
            </div>
          </div>
          <span className={styles.label}>Get Care</span>
        </div>

        {/* Menu */}
        <div className={styles.tab}>
          <IconMenu />
          <span className={styles.label}>Menu</span>
        </div>
      </div>
    </div>
  )
}
