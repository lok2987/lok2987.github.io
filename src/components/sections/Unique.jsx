import React from 'react'

export default function Unique() {
  return (
    <div className="card-grid">
      <div className="card grid-6">
        <h3>Live On-Chain Footprint</h3>
        <p>Addresses, ENS, contracts you authored, audit badges, testnets you contribute to. (Optional)</p>
        <ul>
          <li>Primary ENS: yourname.eth</li>
          <li>Public dev address: 0x0000…</li>
        </ul>
      </div>
      <div className="card grid-6">
        <h3>Now / Availability</h3>
        <p>What you're focusing on this month; open to advisory? speaking? part-time?</p>
        <div className="badge"><span className="dot" /> Available for consulting</div>
      </div>
      <div className="card grid-12">
        <h3>Principles & Playbooks</h3>
        <p>Short notes that don’t fit a CV: code review heuristics, security checklists, incident process, RPC selection rubric.</p>
        <ul>
          <li>Prefer explicitness over magic. Ship observability with features.</li>
          <li>Security as a habit: keys, secrets, SBOM, dependency hygiene.</li>
          <li>APIs as products: docs, examples, SLAs.</li>
        </ul>
      </div>
    </div>
  )
}
