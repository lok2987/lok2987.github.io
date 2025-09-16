import React from 'react'
import TabNavigation from './components/TabNavigation'
import Summary from './components/sections/Summary'
import Work from './components/sections/Work'
import Education from './components/sections/Education'
import Projects from './components/sections/Projects'
import Research from './components/sections/Research'
import Unique from './components/sections/Unique'

export default function App() {
  const [active, setActive] = React.useState('summary')
  const tabs = [
    { id: 'summary', label: 'Summary' },
    { id: 'work', label: 'Work' },
    { id: 'projects', label: 'Projects' },
    { id: 'research', label: 'Research' },
    { id: 'education', label: 'Education' },
    { id: 'unique', label: 'Unique' },
  ]

  return (
    <div className="container">
      <header className="hero" role="banner">
        <div className="avatar">DEV</div>
        <div className="hero-meta">
          <h1>Lau Yi Lok Trevor</h1>
          <p>Blockchain • Distributed Systems • Backend Development</p>
          <p style={{marginTop: 6}}>
            <span className="badge"><span className="dot warning" /> Currently Unavailable</span>
          </p>
        </div>
        <div className="hero-cta">
          <a className="btn" href="#" download>Download Résumé</a>
          <a className="btn secondary" href="mailto:trevorlauyl@gmail.com">Email Me</a>
        </div>
      </header>

      <main className="tabs" role="main">
        <TabNavigation tabs={tabs} active={active} onChange={setActive} />
        <section className="tab-panel">
          {active === 'summary' && <Summary />}
          {active === 'work' && <Work />}
          {active === 'projects' && <Projects />}
          {active === 'research' && <Research />}
          {active === 'education' && <Education />}
          {active === 'unique' && <Unique />}
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} TrevLau — React + Vite + CSS
      </footer>
    </div>
  )
}
