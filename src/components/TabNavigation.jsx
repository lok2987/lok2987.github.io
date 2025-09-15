import React from 'react'

export default function TabNavigation({ tabs, active, onChange }) {
  return (
    <div className="tab-list" role="tablist" aria-label="Profile sections">
      {tabs.map((t) => (
        <button
          key={t.id}
          className={`tab ${active === t.id ? 'active' : ''}`}
          role="tab"
          aria-selected={active === t.id}
          aria-controls={`panel-${t.id}`}
          onClick={() => onChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}
