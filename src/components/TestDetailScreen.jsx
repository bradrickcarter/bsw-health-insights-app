import React, { useState, useEffect } from 'react'
import styles from './TestDetailScreen.module.css'
import GaugeBar from './GaugeBar'
import DeltaArrow from './DeltaArrow'
import { detailData } from '../data/labData'

function TrendChart({ points, yLabels, normalBand }) {
  const polylinePoints = points.map(p => `${p.x},${p.y}`).join(' ')

  return (
    <svg width="100%" viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      {/* Y axis labels */}
      {yLabels.map((label, i) => (
        <text key={i} x="0" y={label.y} fontSize="11" fill="#586F78" fontFamily="Plus Jakarta Sans">{label.text}</text>
      ))}

      {/* Normal range band */}
      {normalBand && (
        <rect x="28" y={normalBand.y} width="292" height={normalBand.height} fill="#E8F6F2" rx="2"/>
      )}

      {/* Grid lines */}
      {yLabels.map((label, i) => (
        <line key={i} x1="28" y1={label.y} x2="320" y2={label.y}
          stroke="#DDDDDD" strokeWidth="1"
          strokeDasharray={i === 1 || i === 3 ? '4,3' : undefined}
        />
      ))}

      {/* Line */}
      <polyline
        points={polylinePoints}
        fill="none"
        stroke="#3BAA8A"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Dots & value labels */}
      {points.map((p, i) => (
        <g key={i}>
          <circle
            cx={p.x} cy={p.y} r="5"
            fill={p.outOfRange ? '#F5C842' : '#3BAA8A'}
            stroke="white" strokeWidth="2"
          />
          <rect
            x={p.x - 19} y={p.y - 30}
            width={p.value.length > 4 ? 42 : 32}
            height="18" rx="4"
            fill={p.outOfRange ? '#F5C842' : '#3BAA8A'}
          />
          <text
            x={p.x} y={p.y - 17}
            fontSize="10"
            fill={p.outOfRange ? '#364248' : 'white'}
            fontFamily="Plus Jakarta Sans"
            fontWeight="700"
            textAnchor="middle"
          >
            {p.value}
          </text>
        </g>
      ))}

      {/* X axis labels */}
      {points.map((p, i) => {
        const [line1, line2] = p.label.split('\n')
        return (
          <g key={i}>
            <text x={p.x} y="188" fontSize="10" fill="#586F78" fontFamily="Plus Jakarta Sans" textAnchor="middle">{line1}</text>
            <text x={p.x} y="200" fontSize="10" fill="#586F78" fontFamily="Plus Jakarta Sans" textAnchor="middle">{line2}</text>
          </g>
        )
      })}
    </svg>
  )
}

export default function TestDetailScreen({ testId = 'ldl' }) {
  const [tab, setTab] = useState('chart')
  const d = detailData[testId] ?? detailData.ldl

  const [rangeIndex, setRangeIndex] = useState(d.ranges.length - 1)
  const [dir, setDir] = useState(null)

  // Reset to most-recent range whenever the test changes
  useEffect(() => {
    setRangeIndex(d.ranges.length - 1)
    setDir(null)
  }, [testId])

  const activeRange = d.ranges[rangeIndex]
  const canGoPrev = rangeIndex > 0
  const canGoNext = rangeIndex < d.ranges.length - 1

  function goPrev() {
    if (!canGoPrev) return
    setDir('left')
    setRangeIndex(i => i - 1)
  }

  function goNext() {
    if (!canGoNext) return
    setDir('right')
    setRangeIndex(i => i + 1)
  }

  const animClass = dir === 'right' ? styles.slideInFromRight
    : dir === 'left' ? styles.slideInFromLeft
    : ''

  return (
    <>
      <div className={`${styles.screen} screen`}>
        <h1 className={styles.title}>{d.name}</h1>
        <p className={styles.desc}>{d.description}</p>

        <div className={styles.divider} />

        <div className={styles.sectionHeading}>Recent result</div>
        <div className={styles.sectionSubheading}>{d.recentDate}</div>

        {/* Recent Result Card */}
        <div className={styles.resultCard}>
          <div className={styles.deltaRow}>
            <DeltaArrow direction={d.recentResult.deltaDir} />
            <div className={styles.deltaText}>
              <strong>{d.recentResult.delta}</strong> Since previous test
            </div>
          </div>
          <div className={styles.testName}>{d.name}</div>
          <div className={styles.testMeta}><strong>Normal:</strong> {d.recentResult.normal}</div>
          <div className={styles.testResult}><strong>Your result:</strong> {d.recentResult.result}</div>
          <GaugeBar
            markerLabel={d.recentResult.markerLabel}
            markerPct={d.recentResult.markerPct}
            tickLabel={d.recentResult.tickLabel}
            tickPct={d.recentResult.tickPct}
            gradient={d.recentResult.gradient}
          />
        </div>

        <div className={styles.sectionHeading}>All results</div>

        {/* Chart/List Toggle */}
        <div className={styles.toggle}>
          <button
            className={tab === 'chart' ? styles.toggleActive : ''}
            onClick={() => setTab('chart')}
          >
            Chart view
          </button>
          <button
            className={tab === 'list' ? styles.toggleActive : ''}
            onClick={() => setTab('list')}
          >
            List view
          </button>
        </div>

        {/* Chart View */}
        {tab === 'chart' && (
          <div className={styles.chartContainer}>
            <div className={styles.dateNav}>
              <span
                className={styles.dateNavArrow}
                onClick={goPrev}
                style={{ opacity: canGoPrev ? 1 : 0.25, cursor: canGoPrev ? 'pointer' : 'default' }}
              >‹</span>
              <span className={styles.dateNavLabel}>{activeRange.dateRange}</span>
              <span
                className={styles.dateNavArrow}
                onClick={goNext}
                style={{ opacity: canGoNext ? 1 : 0.25, cursor: canGoNext ? 'pointer' : 'default' }}
              >›</span>
            </div>
            <div className={styles.dateNavDivider} />
            <div key={`chart-${testId}-${rangeIndex}`} className={`${styles.chartAnimated} ${animClass}`}>
              <div className={styles.chartName}>{d.name}</div>
              <div className={styles.chartRangeLabel}>
                {d.normalRangeLabel}
                <span className={styles.infoIcon}>i</span>
              </div>
              <TrendChart points={activeRange.chartPoints} yLabels={d.yLabels} normalBand={d.normalBand} />
              <div className={styles.legend}>
                <div className={styles.legendItem}>
                  <div className={styles.legendDot} style={{ background: '#3BAA8A' }} />
                  Normal range
                </div>
                <div className={styles.legendItem}>
                  <div className={styles.legendDot} style={{ background: '#F5C842' }} />
                  Out of range
                </div>
              </div>
            </div>
          </div>
        )}

        {/* List View */}
        {tab === 'list' && (
          <div className={styles.chartContainer}>
            <div className={styles.dateNav}>
              <span
                className={styles.dateNavArrow}
                onClick={goPrev}
                style={{ opacity: canGoPrev ? 1 : 0.25, cursor: canGoPrev ? 'pointer' : 'default' }}
              >‹</span>
              <span className={styles.dateNavLabel}>{activeRange.dateRange}</span>
              <span
                className={styles.dateNavArrow}
                onClick={goNext}
                style={{ opacity: canGoNext ? 1 : 0.25, cursor: canGoNext ? 'pointer' : 'default' }}
              >›</span>
            </div>
            <div className={styles.dateNavDivider} />
            <div key={`list-${testId}-${rangeIndex}`} className={`${styles.chartAnimated} ${animClass}`}>
              {activeRange.listRows.map((row, i) => (
                <div
                  key={i}
                  className={styles.listRow}
                  style={{ borderBottom: i === activeRange.listRows.length - 1 ? 'none' : undefined }}
                >
                  <span className={styles.listDate}>{row.date}</span>
                  <span className={styles.listVal}>{row.value}</span>
                  <span className={`${styles.badge} ${
                    row.status === 'High' ? styles.badgeHigh
                    : row.status === 'Low' ? styles.badgeLow
                    : styles.badgeNormal
                  }`}>
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Download Button */}
        <button className={styles.downloadBtn}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#364248" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 2v10M5 8l4 4 4-4"/>
            <path d="M2 14h14"/>
          </svg>
          Download results
        </button>
      </div>
    </>
  )
}
