import React, { useState } from 'react'
import styles from './App.module.css'
import StatusBar from './components/StatusBar'
import NavBar from './components/NavBar'
import HomeIndicator from './components/HomeIndicator'
import TabBar from './components/TabBar'
import LipidPanelScreen from './components/LipidPanelScreen'
import TestDetailScreen from './components/TestDetailScreen'
import LabInsightsScreen from './components/LabInsightsScreen'

const NAV_TITLES = {
  main:     'Lab Detail',
  detail:   'Test details',
  insights: 'Lab Insights',
}

const TRACK_CLASS = {
  main:     '',
  detail:   'screenTrackDetail',
  insights: 'screenTrackInsights',
}

export default function App() {
  const [screen, setScreen] = useState('main') // 'main' | 'detail' | 'insights'
  const [testId, setTestId] = useState('ldl')

  const backTarget = screen === 'detail' ? 'main' : screen === 'insights' ? 'main' : null

  return (
    <div className={styles.phone}>
      <div className={styles.dynamicIsland} />
      <StatusBar />
      <NavBar
        key={screen}
        title={NAV_TITLES[screen]}
        onBack={backTarget ? () => setScreen(backTarget) : () => {}}
      />
      <div className={`${styles.screenTrack} ${styles[TRACK_CLASS[screen]] ?? ''}`}>
        <div className={styles.screenPanel}>
          <LipidPanelScreen
            onViewTrends={(id) => { setTestId(id); setScreen('detail') }}
            onViewInsights={() => setScreen('insights')}
          />
        </div>
        <div className={styles.screenPanel}>
          <TestDetailScreen testId={testId} />
        </div>
        <div className={styles.screenPanel}>
          <LabInsightsScreen />
        </div>
      </div>
      <TabBar />
      <HomeIndicator />
    </div>
  )
}
