# Health Insights — React App

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Project Structure

```
src/
  App.jsx               # Root component — phone frame + navigation state
  App.module.css        # Phone frame styles

  components/
    StatusBar.jsx/.css  # iOS status bar (time, signal, wifi, battery)
    NavBar.jsx/.css     # Navigation bar with optional back button
    HomeIndicator.jsx   # iOS home indicator bar
    DoctorCard.jsx      # Doctor note with expand/collapse
    GaugeBar.jsx        # Range bar with floating marker
    DeltaArrow.jsx      # Up/down arrow SVG
    TestResultCard.jsx  # Individual lab result card (used in filter list)
    LipidPanelScreen.jsx  # Main screen (Lipid Panel overview)
    TestDetailScreen.jsx  # Detail screen (trends chart + list view)

  data/
    labData.js          # All data in one place — test results, chart points, doctor info

  styles/
    global.css          # Body background, font, scrollbar reset
```

## Adding a New Test Result

Open `src/data/labData.js` and add an entry to the `testResults` array:

```js
{
  id: 'my-test',
  status: 'out',            // 'out' | 'in'
  delta: '-5 mg/dL',
  deltaDir: 'down',         // 'up' | 'down'
  name: 'My Test',
  normal: 'Less than 100 mg/dl',
  result: '120 mg/dL - High',
  markerLabel: '120',
  markerPct: 70,            // 0-100, where the marker sits on the bar
  tickLabel: '100',
  tickPct: 60,              // 0-100, where the threshold label sits (null = left-aligned)
  gradient: 'linear-gradient(to right, #3BAA8A 0%, #3BAA8A 60%, #F5D878 60%, #F5D878 100%)',
}
```

## Adding a New Screen

1. Create `src/components/MyScreen.jsx` and `MyScreen.module.css`
2. Add a new state value in `App.jsx` (e.g. `'insights'`)
3. Add a new `{screen === 'insights' && <MyScreen />}` block in `App.jsx`
4. Pass `onNavigate` props to trigger the transition
