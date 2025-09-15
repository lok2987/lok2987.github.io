import React from 'react'

export default function Education() {
  return (
    <div className="card-grid">
      <div className="card grid-6">
        <h3>MSc / BSc in Computer Science</h3>
        <p><em>Your University</em></p>
        <p>Focus: Distributed Systems, Cryptography, Databases</p>
      </div>
      <div className="card grid-6">
        <h3>Certifications</h3>
        <ul>
          <li>Certified Kubernetes Administrator (CKA)</li>
          <li>AWS Certified Solutions Architect</li>
        </ul>
      </div>
    </div>
  )
}
