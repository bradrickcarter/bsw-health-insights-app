import React from 'react'
import styles from './NavBar.module.css'

export default function NavBar({ title, onBack }) {
  return (
    <div className={styles.navBar}>
      {onBack && (
        <span className={styles.back} onClick={onBack}>
          <svg width="11" height="18" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 2L2 11L11 20" stroke="#364248" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      )}
      <span className={styles.title}>{title}</span>
    </div>
  )
}
