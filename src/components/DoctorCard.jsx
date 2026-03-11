import React, { useState } from 'react'
import styles from './DoctorCard.module.css'
import { doctor } from '../data/labData'

const DoctorAvatarSVG = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="49" height="49" rx="7.5" fill="white"/>
    <rect x="0.5" y="0.5" width="49" height="49" rx="7.5" stroke="#DDDDDD"/>
    <path d="M25 31.6562H48V38.0749H25V31.6562Z" fill="#FEE9BC" stroke="#FEE9BC"/>
    <path d="M2 31.6562H25V38.0749H2L2 31.6562Z" fill="#FFC342" stroke="#FFC342"/>
    <path d="M29.494 26.3012H29.4124L24.9619 28.8352L20.564 26.3273C15.264 26.296 12.7267 28.8352 12.1629 31.2896V38.0762H37.5356L37.5357 33.0882C37.5357 29.1278 33.9212 26.296 29.4999 26.296L29.494 26.3012Z" fill="#FFF8E6"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M29.4353 25.9C29.4565 25.8966 29.4781 25.8948 29.4999 25.8948C34.0676 25.8948 37.9369 28.8379 37.9369 33.0882L37.9368 38.0762C37.9368 38.2978 37.7572 38.4774 37.5356 38.4774H12.1629C11.9413 38.4774 11.7617 38.2978 11.7617 38.0762V31.2896C11.7617 31.2594 11.7651 31.2292 11.7719 31.1998C12.3878 28.5186 15.1274 25.894 20.5663 25.9262C20.6352 25.9266 20.7028 25.9447 20.7627 25.9788L24.9621 28.3735L29.2139 25.9526C29.2744 25.9181 29.3428 25.9 29.4124 25.9H29.4353ZM29.5201 26.7015C29.5327 26.7007 29.5452 26.6993 29.5576 26.6973C33.8049 26.7216 37.1346 29.4342 37.1346 33.0882L37.1345 37.6751H12.564V31.3361C13.0924 29.1352 15.4023 26.7311 20.4571 26.7282L24.7632 29.1837C24.8863 29.2539 25.0373 29.2539 25.1604 29.1838L29.5201 26.7015Z" fill="#364248"/>
    <path d="M12.1629 31.1292L19.0828 38.049H12.1629V31.1292Z" fill="#364248"/>
    <path d="M30.8905 18.4423C30.8905 21.7788 28.1858 24.4835 24.8493 24.4835C21.5129 24.4835 18.8082 21.7788 18.8082 18.4423C18.8082 15.1059 21.5129 12.4012 24.8493 12.4012C28.1858 12.4012 30.8905 15.1059 30.8905 18.4423Z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M24.8493 12.8023C21.7344 12.8023 19.2093 15.3274 19.2093 18.4423C19.2093 21.5572 21.7344 24.0823 24.8493 24.0823C27.9642 24.0823 30.4893 21.5572 30.4893 18.4423C30.4893 15.3274 27.9642 12.8023 24.8493 12.8023ZM18.407 18.4423C18.407 14.8843 21.2913 12 24.8493 12C28.4073 12 31.2916 14.8843 31.2916 18.4423C31.2916 22.0003 28.4073 24.8846 24.8493 24.8846C21.2913 24.8846 18.407 22.0003 18.407 18.4423Z" fill="#364248"/>
  </svg>
)

export default function DoctorCard() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <DoctorAvatarSVG />
        </div>
        <div>
          <div className={styles.name}>{doctor.name}</div>
          <div className={styles.role}>{doctor.role}</div>
        </div>
      </div>

      <div className={styles.noteWrap}>
        <div className={`${styles.note} ${expanded ? styles.noteExpanded : ''}`}>
          {doctor.noteFull}
        </div>
        <div className={styles.noteFade} />
      </div>

      <div
        className={`${styles.readMore} ${expanded ? styles.open : ''}`}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Read less' : 'Read more'}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M3 5l4 4 4-4" />
        </svg>
      </div>
    </div>
  )
}
