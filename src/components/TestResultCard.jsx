import React from 'react'
import styles from './TestResultCard.module.css'
import GaugeBar from './GaugeBar'
import DeltaArrow from './DeltaArrow'

export default function TestResultCard({ result, onViewTrends }) {
  return (
    <div className={styles.card}>
      {/* Delta Row */}
      <div className={styles.deltaRow}>
        <div className={styles.deltaIcon}>
          <DeltaArrow direction={result.deltaDir} />
        </div>
        <div className={styles.deltaText}>
          <strong>{result.delta}</strong> Since previous test
        </div>
      </div>

      {/* Test Info */}
      <div className={styles.testName}>{result.name}</div>
      <div className={styles.testMeta}>
        <strong>Normal:</strong> {result.normal}
      </div>
      <div className={styles.testResult}>
        <strong>Your result:</strong> {result.result}
      </div>

      {/* Gauge Bar */}
      <GaugeBar
        markerLabel={result.markerLabel}
        markerPct={result.markerPct}
        tickLabel={result.tickLabel}
        tickPct={result.tickPct}
        gradient={result.gradient}
      />

      {/* View Trends Link */}
      <div className={styles.viewTrends} onClick={() => onViewTrends(result.id)}>
        View trends &amp; details ›
      </div>
    </div>
  )
}
