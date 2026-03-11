import React from 'react'
import styles from './LabInsightsScreen.module.css'

const findings = [
  { name: 'LDL Cholesterol',   value: '130 mg/dL', status: 'high',   label: 'Elevated'   },
  { name: 'Triglycerides',     value: '300 mg/dL', status: 'high',   label: 'Very High'  },
  { name: 'HDL Cholesterol',   value: '55 mg/dL',  status: 'normal', label: 'Healthy'    },
  { name: 'Total Cholesterol', value: '185 mg/dL', status: 'normal', label: 'Normal'     },
  { name: 'VLDL Cholesterol',  value: '22 mg/dL',  status: 'normal', label: 'Normal'     },
]

const nextSteps = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007EB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    text: 'Schedule a follow-up with Dr. Smith in 3 months to recheck LDL and Triglyceride levels.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007EB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    text: 'Reduce saturated fats and refined carbohydrates. Focus on lean proteins, vegetables, and whole grains.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007EB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    text: 'Aim for 150 minutes of moderate aerobic exercise per week — brisk walking, cycling, or swimming.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007EB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/>
      </svg>
    ),
    text: 'Discuss medication adjustment with Dr. Smith. Given your family history and current LDL, a higher statin dose may be appropriate.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007EB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    text: 'Limit alcohol to fewer than 7 drinks per week. Alcohol significantly raises Triglyceride levels.',
  },
]

export default function LabInsightsScreen() {
  return (
    <div className={`${styles.screen} screen`}>

      {/* AI Hero */}
      <div className={styles.heroSection}>
        <div className={styles.heroLabel}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10 3L11.34 8.37L17 10L11.34 11.63L10 17L8.66 11.63L3 10L8.66 8.37L10 3Z" fill="#8F659C"/>
            <path d="M18 14L18.89 17.11L22 18L18.89 18.89L18 22L17.11 18.89L14 18L17.11 17.11L18 14Z" fill="#8F659C"/>
          </svg>
          AI-Generated Summary · Dec 1, 2025
        </div>
        <p className={styles.heroText}>
          Your Lipid Panel shows meaningful progress, but elevated LDL and very high Triglycerides remain your primary cardiovascular concerns — especially given your family history.
        </p>
      </div>

      <div className={styles.divider} />


      {/* What this means */}
      <div className={styles.sectionHeading}>What this means for your health</div>
      <div className={styles.meaningsCard}>
        <div className={styles.riskRow}>
          <span className={styles.riskLabel}>Cardiovascular Risk</span>
          <span className={styles.riskBadge}>Moderate–High</span>
        </div>
        <div className={styles.divider} />
        <p className={styles.meaningsText}>
          Your LDL has declined from a peak of 140 mg/dL in early 2024, but at 130 mg/dL it still exceeds the recommended threshold of 120 mg/dL. Combined with your father's history of heart attack at 58 and persistently high Triglycerides of 300 mg/dL, your overall cardiovascular risk is elevated.
        </p>
        <p className={styles.meaningsText}>
          On the positive side, your HDL of 55 mg/dL is in a healthy range and has been trending upward — this is protective against heart disease. Your Total Cholesterol and VLDL are both within normal limits.
        </p>
      </div>

      {/* Key Findings */}
      <div className={styles.sectionHeading}>Key findings</div>
      <div className={styles.findingsCard}>
        {findings.map((f, i) => (
          <div key={f.name} className={styles.findingRow} style={{ borderBottom: i === findings.length - 1 ? 'none' : undefined }}>
            <div className={styles.findingDot} data-status={f.status} />
            <div className={styles.findingName}>{f.name}</div>
            <div className={styles.findingRight}>
              <span className={styles.findingValue}>{f.value}</span>
              <span className={`${styles.findingBadge} ${f.status === 'high' ? styles.findingBadgeHigh : styles.findingBadgeNormal}`}>
                {f.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Next Steps */}
      <div className={styles.sectionHeading}>Recommended next steps</div>
      <div className={styles.stepsCard}>
        {nextSteps.map((s, i) => (
          <div key={i} className={styles.stepRow} style={{ borderBottom: i === nextSteps.length - 1 ? 'none' : undefined }}>
            <div className={styles.stepIcon}>{s.icon}</div>
            <p className={styles.stepText}>{s.text}</p>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className={styles.disclaimer}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8F659C" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        This summary was generated by AI and is for informational purposes only. Always consult your healthcare provider before making changes to your treatment plan.
      </div>

    </div>
  )
}
