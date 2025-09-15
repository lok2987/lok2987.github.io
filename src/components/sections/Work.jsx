import React from 'react'

const Item = ({ role, company, time, bullets }) => (
  <div className="card">
    <h3>{role} · {company}</h3>
    <p><em>{time}</em></p>
    <ul>
      {bullets.map((b, i) => <li key={i}>{b}</li>)}
    </ul>
  </div>
)

export default function Work() {
  return (
    <div className="card-grid">
      <Item
        role="Senior Backend Engineer (Blockchain)"
        company="Acme Labs"
        time="2023 — Present"
        bullets={[
          "Architected indexer service to stream logs from multiple RPC providers with automatic failover.",
          "Hardened wallet signing flows and secrets management; championed threat modeling.",
          "Delivered SLA-backed analytics API used by 30+ enterprise clients.",
        ]}
      />
      <Item
        role="Backend Engineer"
        company="NodeForge"
        time="2021 — 2023"
        bullets={[
          "Implemented EVM log decoding at scale with ABI registry and codegen.",
          "Owned CI/CD pipelines (GitHub Actions) and implemented canary deploys.",
          "Optimized Postgres + timeseries schema; 5x faster queries for dashboards.",
        ]}
      />
    </div>
  )
}
