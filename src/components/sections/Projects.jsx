import React from 'react'

const Project = ({ title, subtitle, links=[], bullets=[] }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{subtitle}</p>
    {links.length > 0 && (
      <p>
        {links.map((l, i) => <a key={i} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>).reduce((prev, curr) => [prev, ' · ', curr])}
      </p>
    )}
    <ul>{bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
  </div>
)

export default function Projects() {
  return (
    <div className="card-grid">
      <Project
        title="ChainIndex"
        subtitle="Minimal, modular on-chain indexer with pluggable decoders and sinks."
        links={[{href:"#", label:"Code"}, {href:"#", label:"Docs"}]}
        bullets={[
          "Streams logs and traces to Postgres/ClickHouse; exactly-once delivery semantics.",
          "Backfills via block-range workers with adaptive concurrency.",
          "Health checks, metrics, alerting, and replay tooling included.",
        ]}
      />
      <Project
        title="GasGazer"
        subtitle="Smart fee estimator & Tx bundler for cost-optimized submissions."
        links={[{href:"#", label:"Code"}]}
        bullets={[
          "Learns fee regimes by chain/time; supports fee-capped bursts under congestion.",
          "Supports EIP-1559, replaces stuck txs safely with bumping strategies.",
        ]}
      />
    </div>
  )
}
