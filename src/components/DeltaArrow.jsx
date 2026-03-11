import React from 'react'

export default function DeltaArrow({ direction }) {
  return direction === 'up' ? (
    <svg width="24" height="24" viewBox="0 0 12 12" fill="none" stroke="#364248" strokeWidth="2" strokeLinecap="round">
      <path d="M6 10V2M3 5l3-3 3 3"/>
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 12 12" fill="none" stroke="#364248" strokeWidth="2" strokeLinecap="round">
      <path d="M6 2v8M3 7l3 3 3-3"/>
    </svg>
  )
}
