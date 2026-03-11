// ── DOCTOR ──────────────────────────────────────────────────
export const doctor = {
  name: 'Jordan Smith, MD',
  role: 'Primary Care Physician',
  noteShort: 'Your heart, liver, blood and everything else is in great shape. Keep up the good work with your overall health. You are on...',
  noteFull: 'Your heart, liver, blood and everything else is in great shape. Keep up the good work with your overall health. You are on a strong trajectory. Your LDL is slightly elevated — consider reducing saturated fat intake and increasing aerobic activity 3–4 times per week. Your Triglycerides remain high; limiting refined carbohydrates and alcohol may help. Follow up in 3 months to recheck these values.',
}

// ── TEST RESULTS ─────────────────────────────────────────────
export const testResults = [
  {
    id: 'ldl',
    status: 'out',
    delta: '-10 mg/dL',
    deltaDir: 'down',
    name: 'LDL Cholesterol',
    normal: 'Less than 120 mg/dl',
    result: '130 mg/dL - High',
    markerLabel: '130',
    markerPct: 63,
    tickLabel: '120',
    tickPct: 55,
    gradient: 'linear-gradient(to right, #3F9F90 0%, #3F9F90 55%, #FEE9BC 55%, #FEE9BC 100%)',
  },
  {
    id: 'trig',
    status: 'out',
    delta: '-15 mg/dL',
    deltaDir: 'down',
    name: 'Triglycerides',
    normal: 'Less than 150 mg/dl',
    result: '300 mg/dL - High',
    markerLabel: '300',
    markerPct: 86,
    tickLabel: '150',
    tickPct: 38,
    gradient: 'linear-gradient(to right, #3F9F90 0%, #3F9F90 38%, #FEE9BC 38%, #FEE9BC 100%)',
  },
  {
    id: 'hdl',
    status: 'in',
    delta: '+5 mg/dL',
    deltaDir: 'up',
    name: 'HDL Cholesterol',
    normal: 'Greater than 40 mg/dl',
    result: '55 mg/dL - Normal',
    markerLabel: '55',
    markerPct: 52,
    tickLabel: '40',
    tickPct: 38,
    gradient: 'linear-gradient(to right, #FEE9BC 0%, #FEE9BC 38%, #3F9F90 38%, #3F9F90 100%)',
  },
  {
    id: 'total',
    status: 'in',
    delta: '-8 mg/dL',
    deltaDir: 'up',
    name: 'Total Cholesterol',
    normal: 'Less than 200 mg/dl',
    result: '185 mg/dL - Normal',
    markerLabel: '185',
    markerPct: 44,
    tickLabel: '200',
    tickPct: 75,
    gradient: 'linear-gradient(to right, #3F9F90 0%, #3F9F90 75%, #FEE9BC 75%, #FEE9BC 100%)',
  },
  {
    id: 'vldl',
    status: 'in',
    delta: '-3 mg/dL',
    deltaDir: 'up',
    name: 'VLDL Cholesterol',
    normal: 'Less than 30 mg/dl',
    result: '22 mg/dL - Normal',
    markerLabel: '22',
    markerPct: 38,
    tickLabel: '30',
    tickPct: 70,
    gradient: 'linear-gradient(to right, #3F9F90 0%, #3F9F90 70%, #FEE9BC 70%, #FEE9BC 100%)',
  },
]

// ── DETAIL SCREEN DATA ────────────────────────────────────────
// yLabels: 5 evenly-spaced Y-axis entries [{text, y}]
// normalBand: {y, height} rectangle in SVG coords, or null
// Chart SVG viewBox: 0 0 320 210. Usable Y range: 18–170.
// X positions for 5 data points: 52, 112, 172, 232, 292
// Each test has a `ranges` array (oldest → newest). The component
// defaults to the last range and lets the user navigate with ‹/›.

export const detailData = {

  ldl: {
    name: 'LDL Cholesterol',
    description: 'Known as "bad" cholesterol, LDL can build up on the walls of your arteries, forming plaque and increasing the risk of heart disease and stroke. Lower LDL levels are generally better.',
    recentDate: 'Dec 1, 2025',
    recentResult: {
      delta: '-10 mg/dL',
      deltaDir: 'down',
      normal: '80 – 120 mg/dL',
      result: '130 mg/dL – High',
      markerLabel: '130',
      markerPct: 63,
      tickLabel: '120',
      tickPct: 55,
      gradient: 'linear-gradient(to right, #3F9F90 0%, #3F9F90 55%, #FEE9BC 55%, #FEE9BC 100%)',
    },
    // Scale: range 60–140, y = 18 + (140–val) * 1.9
    yLabels: [
      { text: '140', y: 18  },
      { text: '120', y: 56  },
      { text: '100', y: 94  },
      { text: '80',  y: 132 },
      { text: '60',  y: 170 },
    ],
    normalBand: { y: 56, height: 76 },
    normalRangeLabel: 'Normal range: 80 – 120 mg/dL',
    ranges: [
      {
        dateRange: 'Jan 8, 2024 – Jun 5, 2024',
        chartPoints: [
          { x: 52,  y: 22, value: '138', outOfRange: true,  label: 'Jan 8\n2024'  },
          { x: 112, y: 28, value: '135', outOfRange: true,  label: 'Feb 14\n2024' },
          { x: 172, y: 18, value: '140', outOfRange: true,  label: 'Mar 22\n2024' },
          { x: 232, y: 33, value: '132', outOfRange: true,  label: 'Apr 18\n2024' },
          { x: 292, y: 37, value: '130', outOfRange: true,  label: 'Jun 5\n2024'  },
        ],
        listRows: [
          { date: 'Jun 5, 2024',  value: '130 mg/dL', status: 'High' },
          { date: 'Apr 18, 2024', value: '132 mg/dL', status: 'High' },
          { date: 'Mar 22, 2024', value: '140 mg/dL', status: 'High' },
          { date: 'Feb 14, 2024', value: '135 mg/dL', status: 'High' },
          { date: 'Jan 8, 2024',  value: '138 mg/dL', status: 'High' },
        ],
      },
      {
        dateRange: 'Jun 15, 2024 – Dec 3, 2024',
        chartPoints: [
          { x: 52,  y: 45, value: '126', outOfRange: true,  label: 'Jun 15\n2024' },
          { x: 112, y: 52, value: '122', outOfRange: true,  label: 'Jul 20\n2024' },
          { x: 172, y: 60, value: '118', outOfRange: true,  label: 'Sep 8\n2024'  },
          { x: 232, y: 71, value: '112', outOfRange: false, label: 'Oct 25\n2024' },
          { x: 292, y: 79, value: '108', outOfRange: false, label: 'Dec 3\n2024'  },
        ],
        listRows: [
          { date: 'Dec 3, 2024',  value: '108 mg/dL', status: 'Normal' },
          { date: 'Oct 25, 2024', value: '112 mg/dL', status: 'Normal' },
          { date: 'Sep 8, 2024',  value: '118 mg/dL', status: 'High'   },
          { date: 'Jul 20, 2024', value: '122 mg/dL', status: 'High'   },
          { date: 'Jun 15, 2024', value: '126 mg/dL', status: 'High'   },
        ],
      },
      {
        dateRange: 'Jun 22, 2025 – Dec 1, 2025',
        chartPoints: [
          { x: 52,  y: 105, value: '94',  outOfRange: false, label: 'Jun 22\n2025' },
          { x: 112, y: 136, value: '78',  outOfRange: false, label: 'Jul 12\n2025' },
          { x: 172, y: 31,  value: '133', outOfRange: true,  label: 'Aug 11\n2025' },
          { x: 232, y: 102, value: '96',  outOfRange: false, label: 'Sep 30\n2025' },
          { x: 292, y: 105, value: '94',  outOfRange: false, label: 'Dec 1\n2025'  },
        ],
        listRows: [
          { date: 'Dec 1, 2025',  value: '94 mg/dL',  status: 'Normal' },
          { date: 'Sep 30, 2025', value: '96 mg/dL',  status: 'Normal' },
          { date: 'Aug 11, 2025', value: '133 mg/dL', status: 'High'   },
          { date: 'Jul 12, 2025', value: '78 mg/dL',  status: 'Normal' },
          { date: 'Jun 22, 2025', value: '94 mg/dL',  status: 'Normal' },
        ],
      },
    ],
  },

  trig: {
    name: 'Triglycerides',
    description: 'Triglycerides are a type of fat found in your blood. High levels — especially above 150 mg/dL — can increase the risk of heart disease and pancreatitis, particularly when combined with low HDL or high LDL.',
    recentDate: 'Dec 1, 2025',
    recentResult: {
      delta: '-15 mg/dL',
      deltaDir: 'down',
      normal: '< 150 mg/dL',
      result: '300 mg/dL – High',
      markerLabel: '300',
      markerPct: 86,
      tickLabel: '150',
      tickPct: 38,
      gradient: 'linear-gradient(to right, #3F9F90 0%, #3F9F90 38%, #FEE9BC 38%, #FEE9BC 100%)',
    },
    // Scale: range 100–400, y = 18 + (400–val) * 0.5067
    yLabels: [
      { text: '400', y: 18  },
      { text: '325', y: 56  },
      { text: '250', y: 94  },
      { text: '175', y: 132 },
      { text: '100', y: 170 },
    ],
    normalBand: { y: 145, height: 25 },
    normalRangeLabel: 'Normal range: < 150 mg/dL',
    ranges: [
      {
        dateRange: 'Jan 8, 2024 – Jun 5, 2024',
        chartPoints: [
          { x: 52,  y: 26, value: '385', outOfRange: true, label: 'Jan 8\n2024'  },
          { x: 112, y: 32, value: '372', outOfRange: true, label: 'Feb 14\n2024' },
          { x: 172, y: 28, value: '380', outOfRange: true, label: 'Mar 22\n2024' },
          { x: 232, y: 36, value: '365', outOfRange: true, label: 'Apr 18\n2024' },
          { x: 292, y: 39, value: '358', outOfRange: true, label: 'Jun 5\n2024'  },
        ],
        listRows: [
          { date: 'Jun 5, 2024',  value: '358 mg/dL', status: 'High' },
          { date: 'Apr 18, 2024', value: '365 mg/dL', status: 'High' },
          { date: 'Mar 22, 2024', value: '380 mg/dL', status: 'High' },
          { date: 'Feb 14, 2024', value: '372 mg/dL', status: 'High' },
          { date: 'Jan 8, 2024',  value: '385 mg/dL', status: 'High' },
        ],
      },
      {
        dateRange: 'Jun 15, 2024 – Dec 3, 2024',
        chartPoints: [
          { x: 52,  y: 41, value: '355', outOfRange: true, label: 'Jun 15\n2024' },
          { x: 112, y: 47, value: '342', outOfRange: true, label: 'Jul 20\n2024' },
          { x: 172, y: 54, value: '330', outOfRange: true, label: 'Sep 8\n2024'  },
          { x: 232, y: 60, value: '318', outOfRange: true, label: 'Oct 25\n2024' },
          { x: 292, y: 64, value: '310', outOfRange: true, label: 'Dec 3\n2024'  },
        ],
        listRows: [
          { date: 'Dec 3, 2024',  value: '310 mg/dL', status: 'High' },
          { date: 'Oct 25, 2024', value: '318 mg/dL', status: 'High' },
          { date: 'Sep 8, 2024',  value: '330 mg/dL', status: 'High' },
          { date: 'Jul 20, 2024', value: '342 mg/dL', status: 'High' },
          { date: 'Jun 15, 2024', value: '355 mg/dL', status: 'High' },
        ],
      },
      {
        dateRange: 'Jun 22, 2025 – Dec 1, 2025',
        chartPoints: [
          { x: 52,  y: 59, value: '320', outOfRange: true, label: 'Jun 22\n2025' },
          { x: 112, y: 48, value: '340', outOfRange: true, label: 'Jul 12\n2025' },
          { x: 172, y: 40, value: '356', outOfRange: true, label: 'Aug 11\n2025' },
          { x: 232, y: 65, value: '308', outOfRange: true, label: 'Sep 30\n2025' },
          { x: 292, y: 69, value: '300', outOfRange: true, label: 'Dec 1\n2025'  },
        ],
        listRows: [
          { date: 'Dec 1, 2025',  value: '300 mg/dL', status: 'High' },
          { date: 'Sep 30, 2025', value: '308 mg/dL', status: 'High' },
          { date: 'Aug 11, 2025', value: '356 mg/dL', status: 'High' },
          { date: 'Jul 12, 2025', value: '340 mg/dL', status: 'High' },
          { date: 'Jun 22, 2025', value: '320 mg/dL', status: 'High' },
        ],
      },
    ],
  },

  hdl: {
    name: 'HDL Cholesterol',
    description: 'Known as "good" cholesterol, HDL helps remove other forms of cholesterol from your bloodstream. Higher levels are protective — low HDL raises the risk of heart disease.',
    recentDate: 'Dec 1, 2025',
    recentResult: {
      delta: '+5 mg/dL',
      deltaDir: 'up',
      normal: '> 40 mg/dL',
      result: '55 mg/dL – Normal',
      markerLabel: '55',
      markerPct: 52,
      tickLabel: '40',
      tickPct: 38,
      gradient: 'linear-gradient(to right, #FEE9BC 0%, #FEE9BC 38%, #3F9F90 38%, #3F9F90 100%)',
    },
    // Scale: range 32–80, y = 18 + (80–val) * 3.1667
    yLabels: [
      { text: '80', y: 18  },
      { text: '68', y: 56  },
      { text: '56', y: 94  },
      { text: '44', y: 132 },
      { text: '32', y: 170 },
    ],
    normalBand: { y: 18, height: 127 },
    normalRangeLabel: 'Normal range: > 40 mg/dL',
    ranges: [
      {
        dateRange: 'Jan 8, 2024 – Jun 5, 2024',
        chartPoints: [
          { x: 52,  y: 151, value: '38', outOfRange: true,  label: 'Jan 8\n2024'  },
          { x: 112, y: 161, value: '35', outOfRange: true,  label: 'Feb 14\n2024' },
          { x: 172, y: 157, value: '36', outOfRange: true,  label: 'Mar 22\n2024' },
          { x: 232, y: 145, value: '40', outOfRange: false, label: 'Apr 18\n2024' },
          { x: 292, y: 151, value: '38', outOfRange: true,  label: 'Jun 5\n2024'  },
        ],
        listRows: [
          { date: 'Jun 5, 2024',  value: '38 mg/dL', status: 'Low'    },
          { date: 'Apr 18, 2024', value: '40 mg/dL', status: 'Normal' },
          { date: 'Mar 22, 2024', value: '36 mg/dL', status: 'Low'    },
          { date: 'Feb 14, 2024', value: '35 mg/dL', status: 'Low'    },
          { date: 'Jan 8, 2024',  value: '38 mg/dL', status: 'Low'    },
        ],
      },
      {
        dateRange: 'Jun 15, 2024 – Dec 3, 2024',
        chartPoints: [
          { x: 52,  y: 145, value: '40', outOfRange: false, label: 'Jun 15\n2024' },
          { x: 112, y: 132, value: '44', outOfRange: false, label: 'Jul 20\n2024' },
          { x: 172, y: 123, value: '47', outOfRange: false, label: 'Sep 8\n2024'  },
          { x: 232, y: 113, value: '50', outOfRange: false, label: 'Oct 25\n2024' },
          { x: 292, y: 107, value: '52', outOfRange: false, label: 'Dec 3\n2024'  },
        ],
        listRows: [
          { date: 'Dec 3, 2024',  value: '52 mg/dL', status: 'Normal' },
          { date: 'Oct 25, 2024', value: '50 mg/dL', status: 'Normal' },
          { date: 'Sep 8, 2024',  value: '47 mg/dL', status: 'Normal' },
          { date: 'Jul 20, 2024', value: '44 mg/dL', status: 'Normal' },
          { date: 'Jun 15, 2024', value: '40 mg/dL', status: 'Normal' },
        ],
      },
      {
        dateRange: 'Jun 22, 2025 – Dec 1, 2025',
        chartPoints: [
          { x: 52,  y: 119, value: '48', outOfRange: false, label: 'Jun 22\n2025' },
          { x: 112, y: 151, value: '38', outOfRange: true,  label: 'Jul 12\n2025' },
          { x: 172, y: 107, value: '52', outOfRange: false, label: 'Aug 11\n2025' },
          { x: 232, y: 113, value: '50', outOfRange: false, label: 'Sep 30\n2025' },
          { x: 292, y: 97,  value: '55', outOfRange: false, label: 'Dec 1\n2025'  },
        ],
        listRows: [
          { date: 'Dec 1, 2025',  value: '55 mg/dL', status: 'Normal' },
          { date: 'Sep 30, 2025', value: '50 mg/dL', status: 'Normal' },
          { date: 'Aug 11, 2025', value: '52 mg/dL', status: 'Normal' },
          { date: 'Jul 12, 2025', value: '38 mg/dL', status: 'Low'    },
          { date: 'Jun 22, 2025', value: '48 mg/dL', status: 'Normal' },
        ],
      },
    ],
  },

  total: {
    name: 'Total Cholesterol',
    description: 'Total cholesterol is the sum of all cholesterol types in your blood — including LDL, HDL, and VLDL. Levels below 200 mg/dL are considered healthy for most adults.',
    recentDate: 'Dec 1, 2025',
    recentResult: {
      delta: '-8 mg/dL',
      deltaDir: 'up',
      normal: '< 200 mg/dL',
      result: '185 mg/dL – Normal',
      markerLabel: '185',
      markerPct: 44,
      tickLabel: '200',
      tickPct: 75,
      gradient: 'linear-gradient(to right, #3F9F90 0%, #3F9F90 75%, #FEE9BC 75%, #FEE9BC 100%)',
    },
    // Scale: range 150–250, y = 18 + (250–val) * 1.52
    yLabels: [
      { text: '250', y: 18  },
      { text: '225', y: 56  },
      { text: '200', y: 94  },
      { text: '175', y: 132 },
      { text: '150', y: 170 },
    ],
    normalBand: { y: 94, height: 76 },
    normalRangeLabel: 'Normal range: < 200 mg/dL',
    ranges: [
      {
        dateRange: 'Jan 8, 2024 – Jun 5, 2024',
        chartPoints: [
          { x: 52,  y: 36, value: '238', outOfRange: true, label: 'Jan 8\n2024'  },
          { x: 112, y: 27, value: '244', outOfRange: true, label: 'Feb 14\n2024' },
          { x: 172, y: 30, value: '242', outOfRange: true, label: 'Mar 22\n2024' },
          { x: 232, y: 39, value: '236', outOfRange: true, label: 'Apr 18\n2024' },
          { x: 292, y: 45, value: '232', outOfRange: true, label: 'Jun 5\n2024'  },
        ],
        listRows: [
          { date: 'Jun 5, 2024',  value: '232 mg/dL', status: 'High' },
          { date: 'Apr 18, 2024', value: '236 mg/dL', status: 'High' },
          { date: 'Mar 22, 2024', value: '242 mg/dL', status: 'High' },
          { date: 'Feb 14, 2024', value: '244 mg/dL', status: 'High' },
          { date: 'Jan 8, 2024',  value: '238 mg/dL', status: 'High' },
        ],
      },
      {
        dateRange: 'Jun 15, 2024 – Dec 3, 2024',
        chartPoints: [
          { x: 52,  y: 51, value: '228', outOfRange: true, label: 'Jun 15\n2024' },
          { x: 112, y: 67, value: '218', outOfRange: true, label: 'Jul 20\n2024' },
          { x: 172, y: 73, value: '214', outOfRange: true, label: 'Sep 8\n2024'  },
          { x: 232, y: 82, value: '208', outOfRange: true, label: 'Oct 25\n2024' },
          { x: 292, y: 88, value: '204', outOfRange: true, label: 'Dec 3\n2024'  },
        ],
        listRows: [
          { date: 'Dec 3, 2024',  value: '204 mg/dL', status: 'High' },
          { date: 'Oct 25, 2024', value: '208 mg/dL', status: 'High' },
          { date: 'Sep 8, 2024',  value: '214 mg/dL', status: 'High' },
          { date: 'Jul 20, 2024', value: '218 mg/dL', status: 'High' },
          { date: 'Jun 15, 2024', value: '228 mg/dL', status: 'High' },
        ],
      },
      {
        dateRange: 'Jun 22, 2025 – Dec 1, 2025',
        chartPoints: [
          { x: 52,  y: 102, value: '195', outOfRange: false, label: 'Jun 22\n2025' },
          { x: 112, y: 82,  value: '208', outOfRange: true,  label: 'Jul 12\n2025' },
          { x: 172, y: 99,  value: '197', outOfRange: false, label: 'Aug 11\n2025' },
          { x: 232, y: 109, value: '190', outOfRange: false, label: 'Sep 30\n2025' },
          { x: 292, y: 117, value: '185', outOfRange: false, label: 'Dec 1\n2025'  },
        ],
        listRows: [
          { date: 'Dec 1, 2025',  value: '185 mg/dL', status: 'Normal' },
          { date: 'Sep 30, 2025', value: '190 mg/dL', status: 'Normal' },
          { date: 'Aug 11, 2025', value: '197 mg/dL', status: 'Normal' },
          { date: 'Jul 12, 2025', value: '208 mg/dL', status: 'High'   },
          { date: 'Jun 22, 2025', value: '195 mg/dL', status: 'Normal' },
        ],
      },
    ],
  },

  vldl: {
    name: 'VLDL Cholesterol',
    description: 'VLDL (very low density lipoprotein) carries triglycerides through the blood to tissues. High VLDL levels contribute to plaque buildup in arteries and are often associated with elevated triglycerides.',
    recentDate: 'Dec 1, 2025',
    recentResult: {
      delta: '-3 mg/dL',
      deltaDir: 'up',
      normal: '< 30 mg/dL',
      result: '22 mg/dL – Normal',
      markerLabel: '22',
      markerPct: 38,
      tickLabel: '30',
      tickPct: 70,
      gradient: 'linear-gradient(to right, #3F9F90 0%, #3F9F90 70%, #FEE9BC 70%, #FEE9BC 100%)',
    },
    // Scale: range 12–60, y = 18 + (60–val) * 3.1667
    yLabels: [
      { text: '60', y: 18  },
      { text: '48', y: 56  },
      { text: '36', y: 94  },
      { text: '24', y: 132 },
      { text: '12', y: 170 },
    ],
    normalBand: { y: 113, height: 57 },
    normalRangeLabel: 'Normal range: < 30 mg/dL',
    ranges: [
      {
        dateRange: 'Jan 8, 2024 – Jun 5, 2024',
        chartPoints: [
          { x: 52,  y: 69, value: '44', outOfRange: true, label: 'Jan 8\n2024'  },
          { x: 112, y: 56, value: '48', outOfRange: true, label: 'Feb 14\n2024' },
          { x: 172, y: 66, value: '45', outOfRange: true, label: 'Mar 22\n2024' },
          { x: 232, y: 75, value: '42', outOfRange: true, label: 'Apr 18\n2024' },
          { x: 292, y: 81, value: '40', outOfRange: true, label: 'Jun 5\n2024'  },
        ],
        listRows: [
          { date: 'Jun 5, 2024',  value: '40 mg/dL', status: 'High' },
          { date: 'Apr 18, 2024', value: '42 mg/dL', status: 'High' },
          { date: 'Mar 22, 2024', value: '45 mg/dL', status: 'High' },
          { date: 'Feb 14, 2024', value: '48 mg/dL', status: 'High' },
          { date: 'Jan 8, 2024',  value: '44 mg/dL', status: 'High' },
        ],
      },
      {
        dateRange: 'Jun 15, 2024 – Dec 3, 2024',
        chartPoints: [
          { x: 52,  y: 88,  value: '38', outOfRange: true,  label: 'Jun 15\n2024' },
          { x: 112, y: 94,  value: '36', outOfRange: true,  label: 'Jul 20\n2024' },
          { x: 172, y: 100, value: '34', outOfRange: true,  label: 'Sep 8\n2024'  },
          { x: 232, y: 113, value: '30', outOfRange: true,  label: 'Oct 25\n2024' },
          { x: 292, y: 119, value: '28', outOfRange: false, label: 'Dec 3\n2024'  },
        ],
        listRows: [
          { date: 'Dec 3, 2024',  value: '28 mg/dL', status: 'Normal' },
          { date: 'Oct 25, 2024', value: '30 mg/dL', status: 'High'   },
          { date: 'Sep 8, 2024',  value: '34 mg/dL', status: 'High'   },
          { date: 'Jul 20, 2024', value: '36 mg/dL', status: 'High'   },
          { date: 'Jun 15, 2024', value: '38 mg/dL', status: 'High'   },
        ],
      },
      {
        dateRange: 'Jun 22, 2025 – Dec 1, 2025',
        chartPoints: [
          { x: 52,  y: 129, value: '25', outOfRange: false, label: 'Jun 22\n2025' },
          { x: 112, y: 119, value: '28', outOfRange: false, label: 'Jul 12\n2025' },
          { x: 172, y: 107, value: '32', outOfRange: true,  label: 'Aug 11\n2025' },
          { x: 232, y: 126, value: '26', outOfRange: false, label: 'Sep 30\n2025' },
          { x: 292, y: 138, value: '22', outOfRange: false, label: 'Dec 1\n2025'  },
        ],
        listRows: [
          { date: 'Dec 1, 2025',  value: '22 mg/dL', status: 'Normal' },
          { date: 'Sep 30, 2025', value: '26 mg/dL', status: 'Normal' },
          { date: 'Aug 11, 2025', value: '32 mg/dL', status: 'High'   },
          { date: 'Jul 12, 2025', value: '28 mg/dL', status: 'Normal' },
          { date: 'Jun 22, 2025', value: '25 mg/dL', status: 'Normal' },
        ],
      },
    ],
  },
}

// Keep backwards-compatible export
export const ldlDetail = detailData.ldl
