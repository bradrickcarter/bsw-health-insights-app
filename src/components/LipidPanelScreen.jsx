import React, { useState } from 'react'
import styles from './LipidPanelScreen.module.css'
import DoctorCard from './DoctorCard'
import TestResultCard from './TestResultCard'
import { testResults } from '../data/labData'

export default function LipidPanelScreen({ onViewTrends, onViewInsights }) {
  const [activeFilter, setActiveFilter] = useState('out')

  const outCount = testResults.filter(r => r.status === 'out').length
  const inCount  = testResults.filter(r => r.status === 'in').length
  const filtered = testResults.filter(r => r.status === activeFilter)

  return (
    <>
      {/* Scrollable content */}
      <div className={`${styles.screen} screen`}>
        <h1 className={styles.panelTitle}>Lipid Panel</h1>
        <p className={styles.panelDesc}>
          A blood test that measures fats in your blood. High levels can increase your risk of heart disease and stroke.
        </p>

        <div className={styles.divider} />

        <div className={styles.drawDate}>Labs drawn Dec 1, 2025</div>

        <DoctorCard />

        {/* Filter Buttons */}
        <div className={styles.rangeSummary}>
          <div
            className={`${styles.rangeCard} ${activeFilter === 'out' ? styles.active : ''}`}
            onClick={() => setActiveFilter('out')}
          >
            <div className={styles.rangeNum} style={{ color: activeFilter === 'out' ? '#364248' : '#586F78' }}>
              {outCount}
            </div>
            <div className={styles.rangeLabel}>Out of range</div>
          </div>
          <div
            className={`${styles.rangeCard} ${activeFilter === 'in' ? styles.active : ''}`}
            onClick={() => setActiveFilter('in')}
          >
            <div className={styles.rangeNum} style={{ color: activeFilter === 'in' ? '#364248' : '#586F78' }}>
              {inCount}
            </div>
            <div className={styles.rangeLabel}>In range</div>
          </div>
        </div>

        {/* Test Result Cards */}
        {filtered.map(result => (
          <TestResultCard
            key={result.id}
            result={result}
            onViewTrends={onViewTrends}
          />
        ))}

        <div className={styles.divider} />

        {/* Lab Insights Card */}
        <div className={styles.insightsCard} onClick={onViewInsights}>
          <div className={styles.insightsLeft}>
            <div className={styles.insightsTitle}>Lab insights</div>
            <div className={styles.insightsSub}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M10 3L11.34 8.37L17 10L11.34 11.63L10 17L8.66 11.63L3 10L8.66 8.37L10 3Z" fill="#8F659C"/>
                <path d="M18 14L18.89 17.11L22 18L18.89 18.89L18 22L17.11 18.89L14 18L17.11 17.11L18 14Z" fill="#8F659C"/>
              </svg>
              Summary created using AI
            </div>
          </div>
          <span className={styles.insightsChevron}>›</span>
        </div>
      </div>
    </>
  )
}
