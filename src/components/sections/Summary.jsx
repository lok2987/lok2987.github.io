import React from 'react'

export default function Summary() {
  return (
    <div className="card-grid">
      <section className="card grid-8">
        <h3>Executive Summary</h3>
        <p>
          Backend engineer focused on blockchain infrastructure, with experience across smart contract integrations, data pipelines,
          and high-throughput services. Replace this with a crisp, human executive summary.
        </p>
        <ul>
          <li>Core strengths: distributed systems, API design, security-first engineering.</li>
          <li>EVM & non-EVM experience, RPC optimization, indexers, event streaming.</li>
          <li>Passionate about reliability, documentation, and developer experience.</li>
        </ul>
      </section>
      <aside className="card grid-4">
        <h3>Contact</h3>
        <p>Email: <a href="mailto:you@example.com">trevorlauyl@gmail.com</a></p>
        <p>Location: Hong Kong / Toronto, ON</p>
        {/* <p>Links: <a href="https://github.com/lok2987" target="_blank" rel="noreferrer">GitHub</a> · <a href="https://www.linkedin.com/in/trevlau/" target="_blank" rel="noreferrer">LinkedIn</a> · <a href="#" target="_blank" rel="noreferrer">X</a></p> */}
        <p>Links: <a href="https://github.com/lok2987" target="_blank" rel="noreferrer">GitHub</a> · <a href="https://www.linkedin.com/in/trevlau/" target="_blank" rel="noreferrer">LinkedIn</a></p>
      </aside>
      <section className="card grid-12">
        <h3>Highlights</h3>
        <p>Show 3–6 concise bullet points with quantifiable impact and unique proof-of-work.</p>
        <ul>
          <li>Reduced chain query latency by 42% by implementing batched multicall and memoized decoding.</li>
          <li>Designed event-driven pipeline to index 50M+ on-chain events/day across 4 networks.</li>
          <li>Led migration from monolith to microservices with gRPC; 99.95% monthly API uptime.</li>
        </ul>
      </section>
    </div>
  )
}
