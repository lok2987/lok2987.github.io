import React from 'react'

export default function Research() {
  return (
    <div className="card-grid">
      <div className="card grid-12">
        <h3>Past Research</h3>
        <p>Summarize relevant writing or experiments—consensus, MEV, indexing patterns, formal verification, etc.</p>
      </div>
      <div className="card grid-6">
        <h3>Publications & Talks</h3>
        <ul>
          <li>Talk: "Designing Robust Indexers" — DevCon YY (2024)</li>
          <li>Paper: "Eventual Consistency for On-chain Data Lake" — Your Blog</li>
        </ul>
      </div>
      <div className="card grid-6">
        <h3>Open-Source</h3>
        <ul>
          <li>Maintainer — Awesome-EVM-Tools</li>
          <li>Contributor — ethers.js, web3py</li>
        </ul>
      </div>
    </div>
  )
}
