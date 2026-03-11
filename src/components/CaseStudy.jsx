import { useEffect, useState } from "react";

const GeckoDemo = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setPhase((p) => (p + 1) % 4);
    }, 3500);
    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="cs-demo-window">
      <div className="cs-demo-header">
        <div className="cs-demo-dots"><span className="red"/><span className="yellow"/><span className="green"/></div>
        <div className="cs-demo-title">Gecko AI - UX Intelligence Workspace</div>
      </div>
      <div className="cs-demo-body">
        
        {/* Phase 0 & 1: Configuration Form */}
        <div className={`cs-demo-panel ${phase === 0 || phase === 1 ? 'active' : ''}`}>
          <div style={{marginBottom: "2rem"}}>
            <h4 style={{fontSize: "1.2rem", fontWeight: "600", marginBottom: ".5rem"}}>New Analysis Run</h4>
            <p style={{color: "var(--ink2)", fontSize: ".9rem"}}>Configure the parameters for the agentic logs scan.</p>
          </div>
          
          <div className="cs-demo-form-group">
            <label>Target Release Versions</label>
            <div className={`cs-demo-select ${phase === 1 ? 'selected' : ''}`}>
              {phase === 0 ? "Select version..." : "R2024a, R2024b"}
            </div>
          </div>
          
          <div className="cs-demo-form-group">
            <label>Analysis Framework</label>
            <div className={`cs-demo-select ${phase === 1 ? 'selected' : ''}`}>
              {phase === 0 ? "Select objective..." : "Overall Usability & Friction"}
            </div>
          </div>

          <button className={`cs-demo-btn ${phase === 1 ? 'clicked' : ''}`}>
            Run Extraction Engine →
          </button>

          {/* Simulated Cursor */}
          <div className={`cs-demo-cursor phase-${phase}`}>
            <svg width="24" height="36" viewBox="0 0 24 36" fill="none"><path d="M1 1L10.3235 34.1953L13.5678 21.054L23.8347 13.9103L1 1Z" fill="#1a1a1a" stroke="white" strokeWidth="2"/></svg>
          </div>
        </div>

        {/* Phase 2: Processing Animation */}
        <div className={`cs-demo-panel processing ${phase === 2 ? 'active' : ''}`}>
          <div className="cs-demo-spinner"></div>
          <h4 style={{fontSize: "1.1rem", fontWeight: "600", marginTop: "1.5rem"}}>Agent Execution in Progress</h4>
          
          <div className="cs-demo-logs">
            <div className="log-line">[System] 4,192 bug reports loaded.</div>
            <div className="log-line">[Presidio] PII Masking complete (12s).</div>
            <div className="log-line">[AI Agent] Extracting Discoverability signals...</div>
            <div className="log-line active">[AI Agent] Mapping taxonomy nodes ▰▰▰▱▱</div>
          </div>
        </div>

        {/* Phase 3: Dashboard Output */}
        <div className={`cs-demo-panel dashboard ${phase === 3 ? 'active' : ''}`}>
          <div className="dashboard-header">
            <h4>Analysis Complete</h4>
            <span className="badge">18 Critical UX Issues Found</span>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-card stat">
              <div className="stat-value">12</div>
              <div className="stat-label">Discoverability Friction</div>
            </div>
            <div className="dashboard-card stat">
              <div className="stat-value">6</div>
              <div className="stat-label">Mental Model Conflicts</div>
            </div>
            <div className="dashboard-card full">
              <div style={{fontSize: ".8rem", color: "var(--ai-accent)", fontWeight: "600", marginBottom: ".5rem"}}>TOP INSIGHT</div>
              <div style={{fontWeight: "600", fontSize: "1rem"}}>Simulation Target Locator</div>
              <div style={{fontSize: ".85rem", color: "var(--ink2)", marginTop: ".5rem"}}>"Users failed to locate the panel entry point..." (31 reports)</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const WALKsafeDemo = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const durations = [3000, 2500, 2500, 2500, 3000];
    const timer = setTimeout(() => {
      setPhase((p) => (p + 1) % 5);
    }, durations[phase]);
    return () => clearTimeout(timer);
  }, [phase]);

  const phases = [
    { title: 'Normal Walking', status: 'IDLE', color: '#2b5440', desc: 'Walker upright — all systems monitoring. IMU sampling at 100Hz.', icon: '🚶' },
    { title: 'Tilt Detected', status: 'ALERT', color: '#dd6b20', desc: 'Angular velocity spike exceeds 150°/s threshold. Instability confirmed.', icon: '↗️' },
    { title: 'Processing Signal', status: 'PROCESSING', color: '#d69e2e', desc: 'MCU verifying tilt pattern. Filtering false positives. Decision in 0.2s.', icon: '⚡' },
    { title: 'Deploying Support Legs', status: 'DEPLOY', color: '#e53e3e', desc: 'Solenoid triggered. Spring mechanism releasing. Legs extending laterally.', icon: '🔧' },
    { title: 'Walker Stabilized', status: 'SAFE', color: '#2b5440', desc: 'Support legs locked. Center of mass within base of support. Fall prevented.', icon: '✅' }
  ];

  const p = phases[phase];

  return (
    <div className="ws-demo">
      <div className="ws-demo-body">
        {/* Left: Walker Visual */}
        <div className="ws-demo-visual">
          <div className={`ws-walker-container phase-${phase}`}>
            <svg viewBox="0 0 200 260" width="200" height="260" xmlns="http://www.w3.org/2000/svg">
              {/* Walker frame */}
              <rect x="50" y="30" width="100" height="8" rx="4" fill="#718096" />
              <rect x="55" y="30" width="6" height="120" rx="3" fill="#a0aec0" />
              <rect x="139" y="30" width="6" height="120" rx="3" fill="#a0aec0" />
              <rect x="50" y="80" width="100" height="6" rx="3" fill="#cbd5e0" />
              {/* Wheels */}
              <circle cx="58" cy="155" r="12" fill="none" stroke="#718096" strokeWidth="3" />
              <circle cx="142" cy="155" r="12" fill="none" stroke="#718096" strokeWidth="3" />
              {/* IMU sensor */}
              <rect x="88" y="25" width="24" height="10" rx="3" fill={phase >= 1 ? '#dd6b20' : '#2b5440'} opacity={phase >= 1 ? 1 : 0.6}>
                {phase >= 1 && phase <= 2 && <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="indefinite" />}
              </rect>
              {/* Control box */}
              <rect x="80" y="72" width="40" height="14" rx="4" fill={phase >= 2 ? '#d69e2e' : '#4a5568'} opacity={phase >= 2 ? 1 : 0.5}>
                {phase === 2 && <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite" />}
              </rect>
              {/* Support legs - deploy on phase 3+ */}
              <line x1="45" y1="150" x2={phase >= 3 ? "15" : "45"} y2={phase >= 3 ? "180" : "150"} stroke={phase >= 3 ? '#e53e3e' : '#cbd5e0'} strokeWidth={phase >= 3 ? "4" : "2"} strokeLinecap="round" />
              <line x1="155" y1="150" x2={phase >= 3 ? "185" : "155"} y2={phase >= 3 ? "180" : "150"} stroke={phase >= 3 ? '#e53e3e' : '#cbd5e0'} strokeWidth={phase >= 3 ? "4" : "2"} strokeLinecap="round" />
              {/* Ground contact dots */}
              {phase >= 3 && <circle cx="15" cy="183" r="4" fill="#e53e3e" />}
              {phase >= 3 && <circle cx="185" cy="183" r="4" fill="#e53e3e" />}
              {/* Labels */}
              <text x="100" y="18" textAnchor="middle" fontSize="8" fill="#a0aec0" fontWeight="600">IMU SENSOR</text>
              <text x="100" y="100" textAnchor="middle" fontSize="7" fill="#a0aec0">MCU</text>
            </svg>
          </div>
        </div>

        {/* Right: Status Panel */}
        <div className="ws-demo-status">
          <div className="ws-status-badge" style={{background: p.color}}>
            {p.status}
          </div>
          <div className="ws-status-title">
            <span style={{marginRight: '.5rem'}}>{p.icon}</span>{p.title}
          </div>
          <div className="ws-status-desc">{p.desc}</div>

          {/* Pipeline Progress */}
          <div className="ws-pipeline">
            {phases.map((step, i) => (
              <div key={i} style={{display: 'flex', alignItems: 'center'}}>
                <div className={`ws-pipeline-dot${i <= phase ? ' active' : ''}`} style={{background: i <= phase ? phases[i].color : '#e2e8f0'}}>
                  {i < phase ? '✓' : i + 1}
                </div>
                {i < 4 && <div className="ws-pipeline-line" style={{background: i < phase ? phases[i].color : '#e2e8f0'}}></div>}
              </div>
            ))}
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '.65rem', color: '#a0aec0', marginTop: '.25rem'}}>
            <span>Idle</span><span>Detect</span><span>Process</span><span>Deploy</span><span>Safe</span>
          </div>

          {/* Live Data */}
          <div className="ws-live-data">
            <div className="ws-data-row">
              <span>Angular Velocity</span>
              <span style={{color: phase >= 1 && phase <= 2 ? '#e53e3e' : '#2b5440', fontWeight: 600}}>
                {phase === 0 ? '12°/s' : phase === 1 ? '187°/s' : phase === 2 ? '165°/s' : phase === 3 ? '45°/s' : '8°/s'}
              </span>
            </div>
            <div className="ws-data-row">
              <span>System State</span>
              <span style={{fontWeight: 600, color: p.color}}>{p.status}</span>
            </div>
            <div className="ws-data-row">
              <span>Response Time</span>
              <span style={{fontWeight: 600}}>{phase >= 4 ? '0.38s' : phase >= 3 ? '0.31s' : '—'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AIPipelineDiagram = () => {
  const steps = [
    { label: "Gecko API", desc: "Source of issue logs", type: "data" },
    { label: "Data Extraction", desc: "Retrieving logs & metadata", type: "data" },
    { label: "Data Cleaning", desc: "Removing duplicates & formatting text", type: "data" },
    { label: "PII Detection", desc: "Microsoft Presidio engine detecting customer info", type: "security" },
    { label: "Anonymization", desc: "Masking personal customer data", type: "security" },
    { label: "Context Enrichment", desc: "Adding product & workflow context", type: "data" },
    { label: "ChatGPT API", desc: "Analyzing logs with LLM reasoning", type: "ai" },
    { label: "UX Classification", desc: "Mapping issues to usability taxonomy", type: "analytics" },
    { label: "Pattern Detection", desc: "Clustering recurring UX problems", type: "analytics" },
    { label: "Insight Store", desc: "Repository of finalized UX insights", type: "analytics" }
  ];

  const icons = {
    data: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>,
    security: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
    ai: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>,
    analytics: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
  };

  return (
    <div className="cs-ai-pipeline-container" style={{
      width: '100%',
      padding: '2.5rem',
      background: '#fafafa',
      border: '1px solid var(--border)',
      borderRadius: '16px',
      marginTop: '3rem',
      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}>
        {/* Continuous background line */}
        <div style={{ position: 'absolute', top: '16px', bottom: '16px', left: '15px', width: '2px', background: 'rgba(0,0,0,0.06)' }}></div>

        {steps.map((step, index) => {
          let colorTheme = { bg: '#fff', color: '#4a5568', border: '#cbd5e0' };
          if (step.type === 'security') colorTheme = { bg: '#f0fff4', color: '#276749', border: '#48bb78' };
          else if (step.type === 'ai') colorTheme = { bg: 'var(--ai-accent-light)', color: 'var(--ai-accent)', border: 'var(--ai-accent)' };
          else if (step.type === 'analytics') colorTheme = { bg: '#ebf8ff', color: '#2b6cb0', border: '#3182ce' };

          return (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: index === steps.length - 1 ? 0 : '1.25rem',
              position: 'relative',
              zIndex: 1
            }}>
              {/* Icon Circle */}
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: colorTheme.bg,
                border: `2px solid ${colorTheme.border}`,
                color: colorTheme.color,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: 0,
                boxShadow: '0 0 0 4px #fafafa' // match container background to "cut out" the line
              }}>
                {icons[step.type]}
              </div>

              {/* Text Content */}
              <div style={{
                marginLeft: '1.25rem',
                display: 'flex',
                alignItems: 'baseline',
                flexWrap: 'wrap',
                gap: '0.5rem',
                background: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                flex: 1,
                boxShadow: '0 2px 4px rgba(0,0,0,0.01)'
              }}>
                <div style={{ fontWeight: '600', color: 'var(--ink)' }}>{index + 1}. {step.label}</div>
                <div style={{ color: '#cbd5e0' }}>—</div>
                <div style={{ color: 'var(--ink2)', fontSize: '0.9rem' }}>{step.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const GeckoHeroAnim = () => {
  return (
    <div className="cs-hero-anim">
      {/* LEFT: Raw Messy Data */}
      <div className="cs-hero-raw">
        {[...Array(20)].map((_, i) => (
          <div 
            key={`raw-${i}`} 
            className="cs-data-dot raw"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
        <div style={{position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--ink3)', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap'}}>Raw Logs</div>
      </div>

      {/* CENTER: AI Lens */}
      <div className="cs-hero-lens-container">
        <div className="cs-hero-lens">
          <span>AI Engine</span>
        </div>
        
        {/* Animated flow lines */}
        <div className="cs-flow-line left"></div>
        <div className="cs-flow-line right"></div>
      </div>

      {/* RIGHT: Structured Insights */}
      <div className="cs-hero-structured">
        {[...Array(6)].map((_, i) => (
          <div 
            key={`struct-${i}`} 
            className={`cs-struct-line type-${i % 3}`}
            style={{
              top: `${(i * 15) + 15}%`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
        <div style={{position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--ai-accent)', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap'}}>Structured Insights</div>
      </div>
    </div>
  );
};

export default function CaseStudy({ project, onBack }) {

  let sections = [];
  let displaySections = [];

  if (project === "project-advisor") {
    sections = ["overview", "problem", "system", "strategy", "exploration", "solution", "impact", "reflection"];
    displaySections = sections.map(s => ({ id: s, label: s.charAt(0).toUpperCase() + s.slice(1) }));
  } else if (project === "model-finder") {
    sections = ["overview", "problem", "system", "strategy", "exploration", "solution", "reflection"];
    displaySections = sections.map(s => ({ id: s, label: s.charAt(0).toUpperCase() + s.slice(1) }));
  } else if (project === "gecko-ai") {
    sections = ["overview", "problem", "validation", "opportunity", "data", "privacy", "architecture", "agents", "reasoning", "taxonomy", "prompts", "human", "insights", "impact", "future", "demo"];
    
    // Group navigation links to avoid an overwhelmingly long nav bar
    displaySections = [
      { id: "overview", label: "Context" },
      { id: "data", label: "Systems & Data" },
      { id: "reasoning", label: "AI Reasoning" },
      { id: "insights", label: "Outcomes" }
    ];
  } else if (project === "patent") {
    sections = ["overview", "snapshot", "timeline", "problem", "research", "market", "requirements", "experiments", "concepts", "tradeoffs", "architecture", "prototype", "impact", "report"];
    displaySections = [
      { id: "overview", label: "Overview" },
      { id: "problem", label: "Discovery" },
      { id: "experiments", label: "Engineering" },
      { id: "architecture", label: "Solution" },
      { id: "impact", label: "Impact" }
    ];
  }

  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {

    const handleScroll = () => {

      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {

        const element = document.getElementById(section);
        if (!element) return;

        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveSection(section);
        }

      });

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  if (project === "project-advisor") {

    return (

      <div className="case-study-page">

        {/* STICKY NAV BAR */}
        <div className="cs-topbar">

          <div className="cs-topbar-inner">

            <button className="cs-back" onClick={onBack}>
              <span className="cs-back-arrow">←</span>
              Back to Work
            </button>

            <div className="cs-section-nav">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={activeSection === section ? "active" : ""}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>

          </div>

        </div>


        <div className="wrap">

          <main className="cs-content">

            {/* HERO */}
            <section id="overview" className="cs-hero">

              <div className="cs-label" style={{marginBottom: "1.5rem", fontSize: ".85rem", color: "var(--accent)", fontWeight: "600", letterSpacing: ".1em", textTransform: "uppercase"}}>
                Flagship Case Study
              </div>

              <h1 className="cs-title" style={{fontSize: "4rem", lineHeight: "1.1", marginBottom: "2rem"}}>
                Project Advisor
              </h1>

              <p className="cs-tagline" style={{fontSize: "1.20rem", color: "var(--ink2)", marginBottom: "3rem", maxWidth: "1200px"}}>
                Designing clarity in complex engineering workflows by enabling engineers to run validation checks across multiple models and manage failures inside CI/CD pipelines.
              </p>

              <div className="cs-grid-3" style={{borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "2rem 0", marginBottom: "4rem"}}>
                <div>
                  <div style={{fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink3)", marginBottom: ".5rem"}}>Role</div>
                  <div style={{fontWeight: "500"}}>Lead UX Designer</div>
                </div>
                <div>
                  <div style={{fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink3)", marginBottom: ".5rem"}}>Timeline</div>
                  <div style={{fontWeight: "500"}}>8 Months</div>
                </div>
                <div>
                  <div style={{fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink3)", marginBottom: ".5rem"}}>Scope</div>
                  <div style={{fontWeight: "500"}}>Research, Interaction Design, Prototyping</div>
                </div>
              </div>

              <p className="cs-intro" style={{fontSize: "1.2rem", lineHeight: "1.8", maxWidth: "1200px"}}>
                Project Advisor is a core workflow tool within the MATLAB/Simulink ecosystem. As enterprise models scale to millions of blocks, engineers face a critical bottleneck: running validation checks across hundreds of integrated models is slow, fragmented, and lacks systemic visibility. This project reimagined how engineers diagnose and fix model errors at scale.
              </p>

              <div className="cs-image-placeholder tall">
                <span>Hero Mockup: Project Advisor Dashboard</span>
              </div>

            </section>


            {/* PROBLEM */}
            <section id="problem" className="cs-section">

              <h2 className="cs-section-title">The Problem Space</h2>
              
              <p style={{fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "800px", color: "var(--ink2)"}}>
                Engineers working within large model-based systems must validate multiple models against many checks. The existing workflow was deeply fragmented across isolated views, making it virtually impossible to understand the health of a project at a glance.
              </p>
              
              <div className="cs-quote">
                "I spend more time trying to find where the error happened than actually fixing the bug in the model."
                <div style={{fontSize:"1rem", fontFamily:"var(--sans)", color:"var(--ink3)", fontStyle:"normal", marginTop:"1rem", fontWeight:"500"}}>&mdash; Senior Integration Engineer</div>
              </div>

              <div className="cs-image-placeholder">
                <span>Diagram: The Scattered Legacy Workflow</span>
              </div>

              <div className="cs-grid-3" style={{marginTop: "4rem"}}>
                <div>
                  <h3 style={{fontFamily: "var(--serif)", fontSize:"1.25rem", marginBottom: "1rem"}}>Fragmented Context</h3>
                  <p style={{color: "var(--ink2)", fontSize: ".95rem"}}>Checks were tied to individual models. Viewing failures across a system required opening 10+ separate windows.</p>
                </div>
                <div>
                  <h3 style={{fontFamily: "var(--serif)", fontSize:"1.25rem", marginBottom: "1rem"}}>High Cognitive Load</h3>
                  <p style={{color: "var(--ink2)", fontSize: ".95rem"}}>Error messages were deeply nested. Engineers had to hold the system architecture in their heads to trace failures.</p>
                </div>
                <div>
                  <h3 style={{fontFamily: "var(--serif)", fontSize:"1.25rem", marginBottom: "1rem"}}>Lack of Triage</h3>
                  <p style={{color: "var(--ink2)", fontSize: ".95rem"}}>Everything failed at once. There was no way to distinguish critical system blockers from minor warnings.</p>
                </div>
              </div>

            </section>


            {/* SYSTEM & RESEARCH */}
            <section id="system" className="cs-section">

              <h2 className="cs-section-title">System & Research</h2>

              <p style={{fontSize: "1.1rem", marginBottom: "3rem", maxWidth: "800px", color: "var(--ink2)"}}>
                To understand the breakdown, I conducted contextual inquiries with 15 engineers across automotive and aerospace sectors. We mapped their end-to-end validation journey.
              </p>

              <div className="cs-two-col">
                <div>
                  <h3 style={{fontFamily: "var(--serif)", fontSize:"1.5rem", marginBottom:"1.5rem"}}>Key Research Insights</h3>
                  <div className="cs-timeline">
                    <div className="cs-timeline-item">
                      <div className="cs-timeline-title">Mental Model Mismatch</div>
                      <div className="cs-timeline-desc">The UI was organized by "Check Types", but engineers thought in terms of "Model Components".</div>
                    </div>
                    <div className="cs-timeline-item">
                      <div className="cs-timeline-title">The Navigation Tax</div>
                      <div className="cs-timeline-desc">Navigating from a failure log strictly to the offending block diagram took an average of 7 clicks.</div>
                    </div>
                    <div className="cs-timeline-item">
                      <div className="cs-timeline-title">Batch Processing Needs</div>
                      <div className="cs-timeline-desc">Users needed to kick off overnight runs and review prioritized failures in the morning.</div>
                    </div>
                  </div>
                </div>

                <div className="cs-image-placeholder tall">
                  <span>Journey Map: Engineer Validation Workflow</span>
                </div>
              </div>

            </section>

            {/* STRATEGY */}
            <section id="strategy" className="cs-section">

              <h2 className="cs-section-title">Design Strategy</h2>
              
              <p style={{fontSize: "1.1rem", marginBottom: "3rem", maxWidth: "800px", color: "var(--ink2)"}}>
                Moving from isolated validation windows to a unified project-level advisor required a fundamental shift in information architecture.
              </p>

              <div className="cs-grid-3">
                <div className="cs-card">
                  <div style={{fontSize:"2rem", color:"var(--accent)", marginBottom:"1rem"}}>01</div>
                  <h3 style={{fontFamily: "var(--serif)", fontSize:"1.25rem", marginBottom: "1rem"}}>Centralize Status</h3>
                  <p style={{color: "var(--ink2)", fontSize: ".95rem"}}>Create a single pane of glass showing the health of all models in the project repository.</p>
                </div>
                <div className="cs-card">
                  <div style={{fontSize:"2rem", color:"var(--accent)", marginBottom:"1rem"}}>02</div>
                  <h3 style={{fontFamily: "var(--serif)", fontSize:"1.25rem", marginBottom: "1rem"}}>Pivot to Models</h3>
                  <p style={{color: "var(--ink2)", fontSize: ".95rem"}}>Reorganize data around the user's mental model (Models & Folders) instead of backend data structures (Check IDs).</p>
                </div>
                <div className="cs-card">
                  <div style={{fontSize:"2rem", color:"var(--accent)", marginBottom:"1rem"}}>03</div>
                  <h3 style={{fontFamily: "var(--serif)", fontSize:"1.25rem", marginBottom: "1rem"}}>In-Context Fixing</h3>
                  <p style={{color: "var(--ink2)", fontSize: ".95rem"}}>Connect the error report directly to the canvas, allowing instant fixes without losing context.</p>
                </div>
              </div>

            </section>

            {/* EXPLORATION & IDEATION */}
            <section id="exploration" className="cs-section">

              <h2 className="cs-section-title">Ideation & Architecture</h2>

              <p style={{fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "800px", color: "var(--ink2)"}}>
                I explored several structural models for displaying hierarchical failure data. The challenge was balancing density with readability.
              </p>

              <div className="cs-two-col">
                <div className="cs-image-placeholder">
                  <span>Wireframe A: Flat List Concept</span>
                </div>
                <div className="cs-image-placeholder">
                  <span>Wireframe B: Master-Detail Concept</span>
                </div>
              </div>

              <div style={{marginTop: "2rem", padding: "2rem", background: "var(--surface)", borderLeft: "4px solid var(--accent)", borderRadius: "0 var(--r) var(--r) 0"}}>
                <h4 style={{fontFamily: "var(--serif)", fontSize: "1.2rem", marginBottom: ".5rem"}}>Decision Point</h4>
                <p style={{color: "var(--ink2)", fontSize: ".95rem", margin: 0}}>
                  Testing revealed that the Master-Detail pattern (Wireframe B) performed 40% faster in task-completion times because it maintained the directory tree context while displaying deep error logs on the right.
                </p>
              </div>

            </section>


            {/* SOLUTION */}
            <section id="solution" className="cs-section">

              <h2 className="cs-section-title">Final Solution</h2>

              <div style={{marginBottom: "5rem"}}>
                <h3 style={{fontFamily: "var(--serif)", fontSize:"1.8rem", marginBottom:"1rem"}}>1. The Unified Dashboard</h3>
                <p style={{color: "var(--ink2)", fontSize: "1.05rem", maxWidth: "800px", marginBottom: "2rem"}}>
                  A clean, project-level view that aggregates validation states. Engineers can instantly see which models passed, failed, or need attention via a high-density, scannable data table.
                </p>
                <div className="cs-image-placeholder">
                  <span>High-Fi UI: Unified Dashboard Table</span>
                </div>
              </div>

              <div style={{marginBottom: "5rem"}}>
                <h3 style={{fontFamily: "var(--serif)", fontSize:"1.8rem", marginBottom:"1rem"}}>2. Integrated Triage Panel</h3>
                <p style={{color: "var(--ink2)", fontSize: "1.05rem", maxWidth: "800px", marginBottom: "2rem"}}>
                  Selecting a failed model opens a comprehensive triage panel. Errors are grouped semantically (e.g., Performance, Math, Syntax). The panel integrates directly with the Simulink canvas—clicking an error highlights the exact broken block.
                </p>
                <div className="cs-two-col">
                  <div className="cs-image-placeholder tall">
                    <span>High-Fi UI: Triage Panel</span>
                  </div>
                  <div className="cs-image-placeholder tall">
                    <span>High-Fi UI: Canvas Highlighting</span>
                  </div>
                </div>
              </div>

            </section>


            {/* IMPACT */}
            <section id="impact" className="cs-section">

              <h2 className="cs-section-title">Business & User Impact</h2>

              <p style={{fontSize: "1.1rem", marginBottom: "3rem", maxWidth: "800px", color: "var(--ink2)"}}>
                The redesigned Project Advisor launched in the R2023a release, fundamentally changing how enterprise teams approach validation.
              </p>

              <div className="cs-grid-3">
                <div className="cs-metric-card">
                  <div className="cs-metric-value">60%</div>
                  <div className="cs-metric-label">Reduction in Triage Time</div>
                </div>
                <div className="cs-metric-card">
                  <div className="cs-metric-value">85%</div>
                  <div className="cs-metric-label">Increase in Discoverability</div>
                </div>
                <div className="cs-metric-card">
                  <div className="cs-metric-value">4.8</div>
                  <div className="cs-metric-label">SUS Score (up from 3.2)</div>
                </div>
              </div>

            </section>


            {/* REFLECTION */}
            <section id="reflection" className="cs-section">

              <h2 className="cs-section-title">Reflection & Learnings</h2>

              <p style={{fontSize: "1.1rem", lineHeight: "1.8", color: "var(--ink2)", marginBottom: "1.5rem"}}>
                Designing for enterprise engineering tools requires immense respect for density and workflow momentum. 
              </p>
              
              <ul style={{paddingLeft: "1.5rem", color: "var(--ink2)", fontSize: "1.05rem", lineHeight: "1.8"}}>
                <li style={{marginBottom: "1rem"}}><strong>Respecting Mental Models over Data Models:</strong> The biggest friction point in the legacy system was that the UI represented how the backend stored data, not how engineers thought about their projects. Pivoting this perspective was hard technically, but crucial for usability.</li>
                <li style={{marginBottom: "1rem"}}><strong>Density is a Feature, Clutter is a Bug:</strong> Engineers want data on the screen; they hate white space if it means extra clicks. The challenge was structuring high-density information through typography and subtle borders rather than reducing the data shown.</li>
              </ul>

            </section>

          </main>

        </div>

      </div>

    );
  }

  if (project === "model-finder") {
    return (
      <div className="case-study-page">
        {/* STICKY NAV BAR */}
        <div className="cs-topbar">
          <div className="cs-topbar-inner">
            <button className="cs-back" onClick={onBack}>
              <span className="cs-back-arrow">←</span>
              Back to Work
            </button>
            <div className="cs-section-nav">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={activeSection === section ? "active" : ""}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="wrap">
          <main className="cs-content">
            {/* HERO */}
            <section id="overview" className="cs-hero">
              <div className="cs-label" style={{marginBottom: "1.5rem", fontSize: ".85rem", color: "var(--accent)", fontWeight: "600", letterSpacing: ".1em", textTransform: "uppercase"}}>
                Case Study
              </div>

              <h1 className="cs-title" style={{fontSize: "4rem", lineHeight: "1.1", marginBottom: "2rem"}}>
                Model Finder for Enterprises
              </h1>

              <p className="cs-tagline" style={{fontSize: "1.5rem", color: "var(--ink2)", marginBottom: "3rem", maxWidth: "800px"}}>
                Creating a UI for finding Simulink Models conveniently within enterprise databases.
              </p>

              <div className="cs-grid-3" style={{borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "2rem 0", marginBottom: "4rem"}}>
                <div>
                  <div style={{fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink3)", marginBottom: ".5rem"}}>Role</div>
                  <div style={{fontWeight: "500"}}>UX Designer</div>
                </div>
                <div>
                  <div style={{fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink3)", marginBottom: ".5rem"}}>Focus</div>
                  <div style={{fontWeight: "500"}}>Workflow Design, UI Framework, Search Architecture</div>
                </div>
                <div>
                  <div style={{fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink3)", marginBottom: ".5rem"}}>Task</div>
                  <div style={{fontWeight: "500"}}>Transform CLI indexing to a GUI App</div>
                </div>
              </div>

              <p className="cs-intro" style={{fontSize: "1.2rem", lineHeight: "1.8", maxWidth: "800px"}}>
                My primary role was to review the existing indexing API and build upon the workflow to create a standalone App in compliance with MathWorks Design Standards. This project bridges the gap between complex terminal-based database queries and an accessible user interface for locating engineering intellectual property.
              </p>

              <div className="cs-image-placeholder tall">
                <span>Hero Mockup: Model Finder Launch Screen</span>
              </div>
            </section>

            {/* PROBLEM */}
            <section id="problem" className="cs-section">
              <h2 className="cs-section-title">The Context & Problem</h2>
              
              <p style={{fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "800px", color: "var(--ink2)"}}>
                Simulink Models are a great asset for Enterprises to simulate their complex engineering processes and Test before going into production. On average, an enterprise deals with multiple numbers of these models (Internal and External) to continuously refer to and use in their daily technical processes.
              </p>
              
              <div className="cs-quote">
                "Finding a specific model hidden deep in an enterprise Git repository often takes over 15 minutes of unorganized searching."
              </div>

              <div className="cs-grid-3" style={{marginTop: "4rem"}}>
                <div>
                  <h3 style={{fontFamily: "var(--serif)", fontSize:"1.25rem", marginBottom: "1rem"}}>Unorganized Search</h3>
                  <p style={{color: "var(--ink2)", fontSize: ".95rem"}}>Searching for assets locally without centralized indexing leads to duplicated effort and lost models.</p>
                </div>
                <div>
                  <h3 style={{fontFamily: "var(--serif)", fontSize:"1.25rem", marginBottom: "1rem"}}>Database Fragmentation</h3>
                  <p style={{color: "var(--ink2)", fontSize: ".95rem"}}>Metadata tracking (owners, purposes, domains) was inconsistent across teams.</p>
                </div>
                <div>
                  <h3 style={{fontFamily: "var(--serif)", fontSize:"1.25rem", marginBottom: "1rem"}}>CLI Dependency</h3>
                  <p style={{color: "var(--ink2)", fontSize: ".95rem"}}>The only way to search the index efficiently involved knowing complex command-line arguments.</p>
                </div>
              </div>
            </section>

            {/* SYSTEM & RESEARCH / USERS */}
            <section id="system" className="cs-section">
              <h2 className="cs-section-title">Users & Use Cases</h2>

              <p style={{fontSize: "1.1rem", marginBottom: "3rem", maxWidth: "800px", color: "var(--ink2)"}}>
                Through contextual interviews, we identified two primary overarching personas, split into four specific functional roles utilizing the database system.
              </p>

              <div className="cs-two-col" style={{marginBottom: "4rem"}}>
                <div className="cs-card">
                  <h3 style={{fontFamily: "var(--serif)", fontSize: "1.5rem", marginBottom: ".5rem", color: "var(--accent)"}}>The Expert User</h3>
                  <p style={{color: "var(--ink2)"}}>Developers and Enterprise professionals who have a thorough understanding of the product and its functionalities.</p>
                </div>
                <div className="cs-card">
                  <h3 style={{fontFamily: "var(--serif)", fontSize: "1.5rem", marginBottom: ".5rem", color: "var(--accent)"}}>The New User</h3>
                  <p style={{color: "var(--ink2)"}}>Students and Engineers who are exploring Simulink and are not 100% aware of all Simulink functionalities and affordances.</p>
                </div>
              </div>

              <h3 style={{fontFamily: "var(--serif)", fontSize:"1.5rem", marginBottom:"1.5rem"}}>Functional Needs</h3>
              <div className="cs-grid-3">
                <div className="insight-card">
                  <strong style={{display: "block", marginBottom: ".5rem"}}>Simulink Model Authors</strong>
                  "Search for a model fitting relevant search criteria."
                </div>
                <div className="insight-card">
                  <strong style={{display: "block", marginBottom: ".5rem"}}>Enterprise Modelling Engineer</strong>
                  "Search for a specific model in Simulink from their database."
                </div>
                <div className="insight-card">
                  <strong style={{display: "block", marginBottom: ".5rem"}}>CLI Power User</strong>
                  "Search for models in a quicker, visual way rather than command line."
                </div>
              </div>
            </section>

            {/* STRATEGY & REQUIREMENTS */}
            <section id="strategy" className="cs-section">
              <h2 className="cs-section-title">Requirements & Architecture</h2>
              
              <div style={{marginBottom: "3rem"}}>
                <ul className="cs-timeline">
                  <li className="cs-timeline-item">
                    <div className="cs-timeline-title">Allow indexing</div>
                    <div className="cs-timeline-desc">Enable customers to index their own Simulink artifacts (IP) to make them searchable.</div>
                  </li>
                  <li className="cs-timeline-item">
                    <div className="cs-timeline-title">Natural Language</div>
                    <div className="cs-timeline-desc">Improve search experience through Natural Language parsing rather than strictly boolean input.</div>
                  </li>
                  <li className="cs-timeline-item">
                    <div className="cs-timeline-title">Advanced Filtering</div>
                    <div className="cs-timeline-desc">Filter search results using metadata like block parameters, annotations, description, path, etc.</div>
                  </li>
                  <li className="cs-timeline-item">
                    <div className="cs-timeline-title">In-Context Deep Search</div>
                    <div className="cs-timeline-desc">Allow customers to search text within artifacts heavily referenced in the model (data dictionaries, test harnesses).</div>
                  </li>
                </ul>
              </div>

              <h3 style={{fontFamily: "var(--serif)", fontSize:"1.5rem", marginBottom:"1.5rem"}}>The 10-Week Execution Plan</h3>
              <div className="cs-grid-5">
                <div style={{textAlign: "center"}}>
                  <div style={{color: "var(--accent)", fontWeight: "600"}}>Weeks 1-2</div>
                  <div style={{fontSize: ".85rem", color: "var(--ink2)", marginTop: ".5rem"}}>Background Research & Requirements</div>
                </div>
                <div style={{textAlign: "center"}}>
                  <div style={{color: "var(--accent)", fontWeight: "600"}}>Weeks 3-4</div>
                  <div style={{fontSize: ".85rem", color: "var(--ink2)", marginTop: ".5rem"}}>Contextual Interviews & Benchmarking</div>
                </div>
                <div style={{textAlign: "center"}}>
                  <div style={{color: "var(--accent)", fontWeight: "600"}}>Weeks 5-7</div>
                  <div style={{fontSize: ".85rem", color: "var(--ink2)", marginTop: ".5rem"}}>Functional Design & UI Proposal</div>
                </div>
                <div style={{textAlign: "center"}}>
                  <div style={{color: "var(--accent)", fontWeight: "600"}}>Weeks 8-10</div>
                  <div style={{fontSize: ".85rem", color: "var(--ink2)", marginTop: ".5rem"}}>Feedback Review & Final UI Delivery</div>
                </div>
              </div>
            </section>

            {/* EXPLORATION */}
            <section id="exploration" className="cs-section">
              <h2 className="cs-section-title">Filter UI Iterations</h2>

              <p style={{fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "800px", color: "var(--ink2)"}}>
                Through user testing, the deepest friction was how users interacted with massive taxonomies. I analyzed a matrix of options to handle thousands of tags:
              </p>

              <div className="cs-two-col">
                <div className="cs-card">
                  <h4 style={{fontFamily: "var(--sans)", color: "var(--accent)", marginBottom: ".5rem"}}>Debate 1: Scroll Behavior</h4>
                  <p style={{fontSize: ".9rem", color: "var(--ink2)"}}>
                    Users hated infinite independent scroll areas. We pivoted to a global scroll with "show more" expanding links to ensure the page layout remained predictable.
                  </p>
                </div>
                <div className="cs-card">
                  <h4 style={{fontFamily: "var(--sans)", color: "var(--accent)", marginBottom: ".5rem"}}>Debate 2: Filter Visibility</h4>
                  <p style={{fontSize: ".9rem", color: "var(--ink2)"}}>
                    Applied filters needed to be visible simultaneously without hiding them deep in menus. We structured a top-level "Applied Filters" flex area above the results.
                  </p>
                </div>
              </div>
            </section>

            {/* SOLUTION */}
            <section id="solution" className="cs-section">
              <h2 className="cs-section-title">The Final Interface Matrix</h2>

              <div style={{marginBottom: "5rem"}}>
                <h3 style={{fontFamily: "var(--serif)", fontSize:"1.8rem", marginBottom:"1rem"}}>1. Core Hub Integration</h3>
                <p style={{color: "var(--ink2)", fontSize: "1.05rem", maxWidth: "800px", marginBottom: "2rem"}}>
                  Model Finder was integrated as an App Toolstrip in Simulink and a dedicated tab linked directly through the Library Browser, offering multiple paths of entry.
                </p>
                <div className="cs-image-placeholder">
                  <span>Diagram: Toolstrip vs Library Browser Integration Paths</span>
                </div>
              </div>

              <div style={{marginBottom: "5rem"}}>
                <h3 style={{fontFamily: "var(--serif)", fontSize:"1.8rem", marginBottom:"1rem"}}>2. The 3-Pane Layout</h3>
                <p style={{color: "var(--ink2)", fontSize: "1.05rem", maxWidth: "800px", marginBottom: "2rem"}}>
                  The core application features a Left Panel for Database/Filter lists, a Main Canvas for visually rich search results, and a Right Panel that exposes deeper Block Information context without opening the heavy files.
                </p>
                <div className="cs-two-col">
                  <div className="cs-image-placeholder tall">
                    <span>Wireframe: Left Filter Pane</span>
                  </div>
                  <div className="cs-image-placeholder tall">
                    <span>Wireframe: Right Context Pane</span>
                  </div>
                </div>
              </div>
            </section>

            {/* REFLECTION */}
            <section id="reflection" className="cs-section">
              <h2 className="cs-section-title">Takeaway</h2>

              <p style={{fontSize: "1.1rem", lineHeight: "1.8", color: "var(--ink2)", marginBottom: "1.5rem"}}>
                Transitioning a complex CLI-based system into a GUI wasn't just about putting buttons on scripts; it required an ontological map of how enterprise developers think about their assets. Defining the architecture—specifically the right-hand preview panel—ultimately mitigated the 15-minute search penalty engineers faced entirely.
              </p>
            </section>
          </main>
        </div>
      </div>
    );
  }

  if (project === "gecko-ai") {
    return (
      <div className="case-study-page cs-gecko">
        {/* STICKY NAV BAR */}
        <div className="cs-topbar">
          <div className="cs-topbar-inner">
            <button className="cs-back" onClick={onBack}>
              <span className="cs-back-arrow">←</span>
              Back to Work
            </button>
            <div className="cs-section-nav">
              {displaySections.map((section) => {
                let isActive = false;
                if (project === "gecko-ai") {
                  if (section.id === "overview" && ["overview", "problem", "validation", "opportunity"].includes(activeSection)) isActive = true;
                  else if (section.id === "data" && ["data", "privacy", "architecture", "agents"].includes(activeSection)) isActive = true;
                  else if (section.id === "reasoning" && ["reasoning", "taxonomy", "prompts", "human"].includes(activeSection)) isActive = true;
                  else if (section.id === "insights" && ["insights", "impact", "future", "demo"].includes(activeSection)) isActive = true;
                } else {
                  isActive = activeSection === section.id;
                }

                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={isActive ? "active" : ""}
                  >
                    {section.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="wrap">
          <main className="cs-content">
            
            {/* 1. HERO SECTION */}
            <section id="overview" className="cs-hero">
              <div className="cs-label" style={{marginBottom: "1.5rem", fontSize: ".85rem", color: "var(--ai-accent)", fontWeight: "600", letterSpacing: ".1em", textTransform: "uppercase"}}>
                AI Case Study
              </div>

              <h1 className="cs-title" style={{fontSize: "4rem", lineHeight: "1.1", marginBottom: "2rem", letterSpacing: "-0.03em"}}>
                Designing an AI System to Mine UX Insights from Gecko Data
              </h1>

              <p className="cs-tagline" style={{fontSize: "1.5rem", color: "var(--ink2)", marginBottom: "3rem", maxWidth: "800px"}}>
                Transforming thousands of bug reports into actionable UX intelligence using LLMs.
              </p>

              <div className="cs-grid-3" style={{borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "2rem 0", marginBottom: "3rem"}}>
                <div>
                  <div style={{fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink3)", marginBottom: ".5rem"}}>Role</div>
                  <div style={{fontWeight: "500"}}>UX Designer</div>
                </div>
                <div>
                  <div style={{fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink3)", marginBottom: ".5rem"}}>Focus</div>
                  <div style={{fontWeight: "500"}}>AI Workflows, UX Intelligence</div>
                </div>
                <div>
                  <div style={{fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink3)", marginBottom: ".5rem"}}>Timeline</div>
                  <div style={{fontWeight: "500"}}>3–4 months</div>
                </div>
              </div>

              {/* HERO VISUAL (ANIMATED DATA FLOW) */}
              <div className="cs-ai-hero-visual">
                <GeckoHeroAnim />
              </div>
            </section>

            {/* 2. THE PROBLEM */}
            <section id="problem" className="cs-section">
              <h2 className="cs-section-title">The Problem</h2>
              <p>
                MathWorks relies on an internal database called <strong>Gecko</strong>. It houses millions of technical bug reports, but finding latent, systemic UX friction within them is like searching for a needle in a haystack.
              </p>

              <div className="cs-diagram-box" style={{background: "#fafafa", padding: "2rem"}}>
                <div style={{fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".05em", color: "var(--ink2)", marginBottom: "1rem"}}>Raw Gecko Record Example JSON structure</div>
                <div className="cs-code-block" style={{margin: 0, boxShadow: "none"}}>
                  <div className="cs-code-header">
                    <div className="cs-code-dot red"></div><div className="cs-code-dot yellow"></div><div className="cs-code-dot green"></div>
                    <span style={{marginLeft: "1rem", color: "#8b949e", fontSize: ".8rem"}}>bug_record_4192.json</span>
                  </div>
                  <div className="cs-code-body">
                    <div className="cs-code-line"><span className="cs-code-label">"severity":</span><span className="cs-code-value"> "High"</span></div>
                    <div className="cs-code-line"><span className="cs-code-label">"component":</span><span className="cs-code-value"> "UI Frame"</span></div>
                    <div className="cs-code-line"><span className="cs-code-label">"summary":</span><span className="cs-code-value"> "Warning popup unresponsive during specific model setup. User clicked multiple times..."</span></div>
                  </div>
                </div>
              </div>

              <div className="cs-grid-3" style={{marginTop: "3rem"}}>
                <div className="cs-card">
                  <h3 style={{fontSize:"1.1rem", marginBottom: "0.5rem", color: "var(--ink)"}}>Cognitive Overload</h3>
                  <p style={{fontSize: ".9rem", margin: 0}}>Human analysts cannot process the daily volume of incoming technical logs.</p>
                </div>
                <div className="cs-card">
                  <h3 style={{fontSize:"1.1rem", marginBottom: "0.5rem", color: "var(--ink)"}}>Inconsistent Analysis</h3>
                  <p style={{fontSize: ".9rem", margin: 0}}>Different researchers label "discoverability" differently, missing core patterns.</p>
                </div>
                <div className="cs-card">
                  <h3 style={{fontSize:"1.1rem", marginBottom: "0.5rem", color: "var(--ink)"}}>Hidden UX Issues</h3>
                  <p style={{fontSize: ".9rem", margin: 0}}>User friction and mental model failures are filed merely as "technical bugs".</p>
                </div>
              </div>
            </section>

            {/* 2B. SURVEY VALIDATION */}
            <section id="validation" className="cs-section">
              <h2 className="cs-section-title">Validating the Problem</h2>
              <p>
                To ensure this wasn't an isolated frustration, we surveyed Product Managers and UXers at MathWorks regarding their Gecko data workflows. The response confirmed a systemic need for intelligent summarization.
              </p>
              
              <div className="cs-validation-grid" style={{marginTop: "3rem", display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem'}}>
                <div className="cs-demo-window" style={{margin: 0, padding: "2.5rem", height: "100%", border: "1px solid var(--border)", boxShadow: "0 4px 6px rgba(0,0,0,0.02)"}}>
                  <div style={{color: "var(--ink)", fontWeight: "700", fontSize: "3rem", lineHeight: "1", letterSpacing: "-0.04em"}}>100%</div>
                  <div style={{fontSize: "1rem", fontWeight: "600", color: "var(--ink)", marginTop: "0.75rem", marginBottom: "0.5rem"}}>Found mining data challenging.</div>
                  <div style={{fontSize: ".9rem", color: "var(--ink2)", lineHeight: "1.5"}}>Every single respondent found identifying meaningful insights from unstructured text either "Challenging" or "Very Difficult".</div>
                </div>

                <div className="cs-demo-window" style={{margin: 0, padding: "2.5rem", height: "100%", border: "1px solid var(--border)", boxShadow: "0 4px 6px rgba(0,0,0,0.02)"}}>
                  <div style={{color: "var(--ai-accent)", fontWeight: "700", fontSize: "3rem", lineHeight: "1", letterSpacing: "-0.04em"}}>80%</div>
                  <div style={{fontSize: "1rem", fontWeight: "600", color: "var(--ink)", marginTop: "0.75rem", marginBottom: "0.5rem"}}>Reliant on the data.</div>
                  <div style={{fontSize: ".9rem", color: "var(--ink2)", lineHeight: "1.5"}}>A massive majority actively use Gecko for insights, with most analyzing over 50–300 records per project.</div>
                </div>

                <div className="cs-demo-window" style={{margin: 0, gridColumn: "1 / -1", padding: "2.5rem", border: "1px solid var(--border)", boxShadow: "0 4px 6px rgba(0,0,0,0.02)"}}>
                  <div style={{fontSize: "1rem", fontWeight: "600", color: "var(--ink)", marginBottom: "1.5rem"}}>Top User Pain Points Extracted</div>
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.75rem'}}>
                    <span style={{background: "#f4f5f7", color: "var(--ink)", padding: "0.5rem 1rem", borderRadius: "100px", fontSize: ".85rem"}}>“Tedious manual filtering”</span>
                    <span style={{background: "#f4f5f7", color: "var(--ink)", padding: "0.5rem 1rem", borderRadius: "100px", fontSize: ".85rem"}}>“Noise vs Signal imbalance”</span>
                    <span style={{background: "#f4f5f7", color: "var(--ink)", padding: "0.5rem 1rem", borderRadius: "100px", fontSize: ".85rem"}}>“No LLM integration to speed it up”</span>
                    <span style={{background: "#f4f5f7", color: "var(--ink)", padding: "0.5rem 1rem", borderRadius: "100px", fontSize: ".85rem"}}>“No standardized UX priority tags”</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. THE OPPORTUNITY */}
            <section id="opportunity" className="cs-section">
              <h2 className="cs-section-title">The Opportunity</h2>
              <div className="cs-opportunity-panel" style={{display: 'flex', flexDirection: 'column', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)', marginTop: '2.5rem'}}>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                  {/* BEFORE STATE */}
                  <div style={{flex: '1 1 300px', background: 'white', padding: '3.5rem', borderRight: '1px solid rgba(0,0,0,0.04)'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem'}}>
                      <div style={{width: '32px', height: '32px', borderRadius: '8px', background: '#fff5f5', color: '#e53e3e', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #fed7d7'}}>✕</div>
                      <h3 style={{fontSize: '1.25rem', m: 0, color: '#4a5568'}}>Before AI Integration</h3>
                    </div>
                    <ul className="cs-taxonomy-list" style={{opacity: 0.8}}>
                      <li style={{borderBottomColor: '#f7fafc'}}><span style={{color: '#a0aec0', marginRight: '6px'}}>—</span> Manual, tedious log reading</li>
                      <li style={{borderBottomColor: '#f7fafc'}}><span style={{color: '#a0aec0', marginRight: '6px'}}>—</span> Weeks required for analysis</li>
                      <li style={{borderBottomColor: '#f7fafc', borderBottom: 'none'}}><span style={{color: '#a0aec0', marginRight: '6px'}}>—</span> UX signals buried by technical jargon</li>
                    </ul>
                  </div>

                  {/* AFTER STATE */}
                  <div style={{flex: '1 1 300px', background: '#faf5ff', padding: '3.5rem'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem'}}>
                      <div style={{width: '32px', height: '32px', borderRadius: '8px', background: 'var(--ai-accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(107, 70, 193, 0.3)'}}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <h3 style={{fontSize: '1.25rem', m: 0, color: 'var(--ai-accent)'}}>The Agentic Solution</h3>
                    </div>
                    <ul className="cs-taxonomy-list">
                      <li style={{borderBottomColor: 'rgba(107, 70, 193, 0.05)'}}><strong style={{color: 'var(--ai-accent)', marginRight: '8px'}}>01.</strong> Automated natural language parsing</li>
                      <li style={{borderBottomColor: 'rgba(107, 70, 193, 0.05)'}}><strong style={{color: 'var(--ai-accent)', marginRight: '8px'}}>02.</strong> Instant cross-project pattern detection</li>
                      <li style={{borderBottomColor: 'none'}}><strong style={{color: 'var(--ai-accent)', marginRight: '8px'}}>03.</strong> Usability themes extracted in seconds</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. UNDERSTANDING GECKO DATA */}
            <section id="data" className="cs-section">
              <h2 className="cs-section-title">Understanding Gecko Data</h2>
              <p>
                To leverage LLMs effectively, we first had to map the anatomy of a Gecko log, separating rigid technical metadata from messy, unstructured human text.
              </p>

              <div className="cs-diagram-box">
                <div className="cs-two-col">
                  <div>
                    <h3 style={{fontSize: "1.1rem", marginBottom: "1rem", color: "var(--ink)"}}>Structured Data</h3>
                    <div style={{display: "flex", flexWrap: "wrap", gap: ".5rem"}}>
                      <span className="cs-pipeline-node" style={{padding: ".5rem 1rem", fontSize: ".8rem", minWidth: 0}}>Severity</span>
                      <span className="cs-pipeline-node" style={{padding: ".5rem 1rem", fontSize: ".8rem", minWidth: 0}}>Component</span>
                      <span className="cs-pipeline-node" style={{padding: ".5rem 1rem", fontSize: ".8rem", minWidth: 0}}>Owner</span>
                      <span className="cs-pipeline-node" style={{padding: ".5rem 1rem", fontSize: ".8rem", minWidth: 0}}>Version</span>
                    </div>
                  </div>
                  <div>
                    <h3 style={{fontSize: "1.1rem", marginBottom: "1rem", color: "var(--ai-accent)"}}>Unstructured Text (AI Target)</h3>
                    <div style={{display: "flex", flexWrap: "wrap", gap: ".5rem"}}>
                      <span className="cs-pipeline-node" style={{background: "var(--ai-accent-light)", color: "var(--ai-accent)", borderColor: "var(--ai-accent-light)", padding: ".5rem 1rem", fontSize: ".8rem", minWidth: 0}}>Issue Descriptions</span>
                      <span className="cs-pipeline-node" style={{background: "var(--ai-accent-light)", color: "var(--ai-accent)", borderColor: "var(--ai-accent-light)", padding: ".5rem 1rem", fontSize: ".8rem", minWidth: 0}}>Reproduction Steps</span>
                      <span className="cs-pipeline-node" style={{background: "var(--ai-accent-light)", color: "var(--ai-accent)", borderColor: "var(--ai-accent-light)", padding: ".5rem 1rem", fontSize: ".8rem", minWidth: 0}}>Comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. PRIVACY STRATEGY & ARCHITECTURE */}
            <section id="architecture" className="cs-section">
              <h2 className="cs-section-title">Data Processing & Privacy Architecture</h2>
              <p>
                Gecko logs occasionally contain customer PII. Passing raw data directly to an external LLM was strictly prohibited. We designed a robust, scalable data processing pipeline that extracts logs, scrubs sensitive data natively using Microsoft Presidio, injects product metadata, and finally orchestrates structural reasoning via the ChatGPT API.
              </p>

              <AIPipelineDiagram />
            </section>

            {/* 8. REASONING & 9. TAXONOMY */}
            <section id="reasoning" className="cs-section">
              <h2 className="cs-section-title">The Taxonomy Engine</h2>
              <p>
                We established a strict hierarchical UX taxonomy. The AI maps natural language complaints into designated UI failure states like <em>Discoverability, Mental Model Sync,</em> and <em>Learnability.</em>
              </p>

              <div className="cs-two-col" style={{marginTop: "2.5rem"}}>
                <div className="cs-card" style={{border: "none", background: "none", padding: 0}}>
                  <h3 style={{fontSize: "1.1rem", marginBottom: "1rem", color: "var(--ink)"}}>AI Reasoning Chain</h3>
                  <div style={{borderLeft: "2px solid var(--border)", marginLeft: "1rem", paddingLeft: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem"}}>
                    <div style={{position: "relative"}}>
                      <div style={{position: "absolute", left: "-2.4rem", top: "0.2rem", width: "12px", height: "12px", borderRadius: "50%", background: "var(--ai-accent)", boxShadow: "0 0 0 4px var(--bg)"}}></div>
                      <div style={{fontWeight: "500", fontSize: ".95rem", color: "var(--ink)", marginBottom: ".25rem"}}>1. Parse Context</div>
                      <div style={{fontSize: ".9rem", color: "var(--ink2)"}}>Detect underlying signals amidst technical jargon.</div>
                    </div>
                    <div style={{position: "relative"}}>
                      <div style={{position: "absolute", left: "-2.4rem", top: "0.2rem", width: "12px", height: "12px", borderRadius: "50%", background: "var(--ai-accent)", opacity: 0.7, boxShadow: "0 0 0 4px var(--bg)"}}></div>
                      <div style={{fontWeight: "500", fontSize: ".95rem", color: "var(--ink)", marginBottom: ".25rem"}}>2. Map to Taxonomy</div>
                      <div style={{fontSize: ".9rem", color: "var(--ink2)"}}>Align signal against Discoverability or Feedback branches.</div>
                    </div>
                    <div style={{position: "relative"}}>
                      <div style={{position: "absolute", left: "-2.4rem", top: "0.2rem", width: "12px", height: "12px", borderRadius: "50%", background: "var(--ai-accent)", opacity: 0.4, boxShadow: "0 0 0 4px var(--bg)"}}></div>
                      <div style={{fontWeight: "500", fontSize: ".95rem", color: "var(--ink)", marginBottom: ".25rem"}}>3. Score Confidence</div>
                      <div style={{fontSize: ".9rem", color: "var(--ink2)"}}>Require 85%+ certitude, else mark for human review.</div>
                    </div>
                  </div>
                </div>

                <div className="cs-diagram-box" style={{margin: 0, padding: "2rem", background: "#f8f9fa"}}>
                   <h3 style={{fontSize: "1.1rem", marginBottom: "1rem", color: "var(--ink)"}}>Taxonomy Overview</h3>
                   <ul className="cs-taxonomy-list">
                    <li><span className="cs-taxonomy-icon">◇</span> Discoverability (Visibility, Naming)</li>
                    <li><span className="cs-taxonomy-icon">◇</span> Navigation & Architecture</li>
                    <li><span className="cs-taxonomy-icon">◇</span> System Feedback & Errors</li>
                    <li><span className="cs-taxonomy-icon">◇</span> Mental Model Mismatch</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 10. PROMPT ENGINEERING */}
            <section id="prompts" className="cs-section">
              <h2 className="cs-section-title">Prompt Schema</h2>
              <p>
                Consistent output across thousands of logs relies on a highly structured prompt configuration, ensuring valid JSON generation without hallucinations.
              </p>

              <div className="cs-code-block">
                <div className="cs-code-header">
                  <div className="cs-code-dot red"></div><div className="cs-code-dot yellow"></div><div className="cs-code-dot green"></div>
                  <span style={{marginLeft: "1rem", color: "#8b949e", fontSize: ".8rem"}}>system_prompt.ts</span>
                </div>
                <div className="cs-code-body">
                  <div className="cs-code-line"><span style={{color: "#ff7b72"}}>const</span> <span style={{color: "#d2a8ff"}}>systemContext</span> <span style={{color: "#ff7b72"}}>=</span> <span style={{color: "#a5d6ff"}}>\`</span></div>
                  <div className="cs-code-line"><span style={{color: "#a5d6ff"}}>  You are an expert UX Researcher analyzing technical bug logs.</span></div>
                  <div className="cs-code-line"><span style={{color: "#a5d6ff"}}>  Your goal is to extract latent UI friction.</span></div>
                  <div className="cs-code-line"><span style={{color: "#a5d6ff"}}></span></div>
                  <div className="cs-code-line"><span style={{color: "#79c0ff"}}>  [CLASSIFICATION RULES]</span></div>
                  <div className="cs-code-line"><span style={{color: "#a5d6ff"}}>  If a user remarks 'cannot find', map to Discoverability.</span></div>
                  <div className="cs-code-line"><span style={{color: "#a5d6ff"}}>  You must quote the user directly for the 'evidence' field.</span></div>
                  <div className="cs-code-line"><span style={{color: "#a5d6ff"}}></span></div>
                  <div className="cs-code-line"><span style={{color: "#79c0ff"}}>  [OUTPUT SCHEMA]</span></div>
                  <div className="cs-code-line"><span style={{color: "#a5d6ff"}}>  Must be valid JSON matching the strict UI Taxonomy...</span></div>
                  <div className="cs-code-line"><span style={{color: "#a5d6ff"}}>\`;</span></div>
                </div>
              </div>
            </section>

            {/* 11. HUMAN IN THE LOOP */}
            <section id="human" className="cs-section">
              <h2 className="cs-section-title">Human-in-the-Loop Collaboration</h2>
              <p>
                We engineered the system not to replace qualitative research, but to augment it. Analysts act as the ultimate validators of the AI's flagged insights.
              </p>

              <div className="cs-two-lane-diagram">
                <div className="cs-lane ai-lane">
                  <h3 style={{fontSize: "1.1rem", color: "var(--ai-accent)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "8px"}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                    AI Lane
                  </h3>
                  <ul className="cs-taxonomy-list">
                    <li style={{fontSize: ".9rem"}}>1. Parses raw batch logs</li>
                    <li style={{fontSize: ".9rem"}}>2. Flags potential friction points</li>
                    <li style={{fontSize: ".9rem"}}>3. Recommends Taxonomy</li>
                  </ul>
                </div>
                <div className="cs-lane human-lane">
                  <h3 style={{fontSize: "1.1rem", color: "var(--ink)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "8px"}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="7" r="4"></circle><path d="M5.4 20.2a8 8 0 0 1 13.2 0"></path></svg>
                    Human Lane
                  </h3>
                  <ul className="cs-taxonomy-list">
                    <li style={{fontSize: ".9rem"}}>1. Reviews aggregated dashboards</li>
                    <li style={{fontSize: ".9rem"}}>2. Confirms AI rationale & evidence</li>
                    <li style={{fontSize: ".9rem"}}>3. Validates insights for product teams</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 12. UX INSIGHT EXAMPLES */}
            <section id="insights" className="cs-section">
              <h2 className="cs-section-title">Final Output: Actionable Intelligence</h2>
              <p>
                The ultimate output transforms impenetrable code logs into readable, actionable product design deliverables.
              </p>

              <div className="cs-two-col" style={{marginTop: "2.5rem"}}>
                <div className="cs-insight-card">
                  <div style={{fontSize: ".7rem", color: "var(--ai-accent)", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: "1rem"}}>Verified Insight Node</div>
                  <h3 style={{fontSize: "1.25rem", marginBottom: "1.5rem"}}>Model Setup Panel</h3>
                  <div style={{borderBottom: "1px solid rgba(0,0,0,0.06)", paddingBottom: "1rem", marginBottom: "1rem", color: "var(--ink2)", fontSize: ".95rem"}}>
                    <strong>Issue Map:</strong> Discoverability
                  </div>
                  <div style={{color: "var(--ink2)", fontSize: ".95rem", lineHeight: "1.6"}}>
                    <strong>AI Evidence Extracted:</strong> <br/>
                    <em style={{color: "var(--ink)"}}>"Users continuously fail to locate the simulation entry point; 4x clicks logged prior to failure."</em>
                  </div>
                  <div style={{marginTop: "2rem", display: "flex", alignItems: "center", gap: "0.5rem"}}>
                    <span style={{background: "#f4f5f7", padding: "0.25rem 0.75rem", borderRadius: "100px", fontSize: ".8rem", fontWeight: "600", color: "var(--ink)"}}>n = 31 Reports</span>
                  </div>
                </div>
                
                <div className="cs-insight-card">
                  <div style={{fontSize: ".7rem", color: "var(--ai-accent)", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: "1rem"}}>Verified Insight Node</div>
                  <h3 style={{fontSize: "1.25rem", marginBottom: "1.5rem"}}>Error State Navigation</h3>
                  <div style={{borderBottom: "1px solid rgba(0,0,0,0.06)", paddingBottom: "1rem", marginBottom: "1rem", color: "var(--ink2)", fontSize: ".95rem"}}>
                    <strong>Issue Map:</strong> Mental Model Mismatch
                  </div>
                  <div style={{color: "var(--ink2)", fontSize: ".95rem", lineHeight: "1.6"}}>
                    <strong>AI Evidence Extracted:</strong> <br/>
                    <em style={{color: "var(--ink)"}}>"Expected clicking the warning node to open the inspector, but it triggered a system reset."</em>
                  </div>
                  <div style={{marginTop: "2rem", display: "flex", alignItems: "center", gap: "0.5rem"}}>
                    <span style={{background: "#f4f5f7", padding: "0.25rem 0.75rem", borderRadius: "100px", fontSize: ".8rem", fontWeight: "600", color: "var(--ink)"}}>n = 18 Reports</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 13. IMPACT & FUTURE VISION */}
            <section id="impact" className="cs-section">
              <h2 className="cs-section-title">Impact & Horizon</h2>
              
              <div className="cs-grid-3" style={{marginBottom: "4rem"}}>
                <div>
                  <div className="cs-metric-huge">Mins</div>
                  <div style={{fontSize: "1rem", color: "var(--ink2)"}}>Reduction in analysis time (Down from Weeks)</div>
                </div>
                <div>
                  <div className="cs-metric-huge">10k+</div>
                  <div style={{fontSize: "1rem", color: "var(--ink2)"}}>Latent UX Issues Detected Across Logs</div>
                </div>
                <div>
                  <div className="cs-metric-huge">Global</div>
                  <div style={{fontSize: "1rem", color: "var(--ink2)"}}>Cross-Team Knowledge Infrastructure</div>
                </div>
              </div>

              <div className="cs-pipeline-grid" style={{background: "#fafafa", padding: "2rem", border: "1px solid rgba(0,0,0,0.04)", borderRadius: "12px", justifyContent: "space-between"}}>
                <div style={{display: "flex", flexDirection: "column", gap: ".5rem"}}>
                  <div style={{fontWeight: "600", fontSize: ".9rem", color: "var(--ink)"}}>Phase 1 (Current)</div>
                  <div style={{fontSize: ".85rem", color: "var(--ink2)"}}>Standalone Insight Aggregator</div>
                </div>
                <div className="cs-pipeline-arrow">→</div>
                <div style={{display: "flex", flexDirection: "column", gap: ".5rem"}}>
                  <div style={{fontWeight: "600", fontSize: ".9rem", color: "var(--ai-accent)"}}>Phase 2</div>
                  <div style={{fontSize: ".85rem", color: "var(--ink2)"}}>Integrated Gecko Intelligence Layer</div>
                </div>
                <div className="cs-pipeline-arrow">→</div>
                <div style={{display: "flex", flexDirection: "column", gap: ".5rem"}}>
                  <div style={{fontWeight: "600", fontSize: ".9rem", color: "var(--ink)"}}>Phase 3</div>
                  <div style={{fontSize: ".85rem", color: "var(--ink2)"}}>Predictive Product Insights</div>
                </div>
              </div>
            </section>

            {/* 15. INTERACTIVE DEMO PROTOTYPE */}
            <section id="demo" className="cs-section" style={{paddingTop: 0}}>
              <h2 className="cs-section-title">Interactive Prototype Loop</h2>
              <p style={{marginBottom: "2.5rem"}}>
                A conceptualized interaction flow simulating how a Product Designer queries the finalized Gecko AI tooling to generate a usability report.
              </p>
              
              <GeckoDemo />
              
            </section>

          </main>
        </div>
      </div>
    );
  }

  if (project === "patent") {
    const placeholderBox = (label) => (
      <div style={{border: '2px dashed #cbd5e0', borderRadius: '12px', padding: '3rem 2rem', textAlign: 'center', margin: '2rem 0', background: 'rgba(0,0,0,0.01)'}}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a0aec0" strokeWidth="1.5" style={{marginBottom: '0.75rem'}}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
        <div style={{color: '#a0aec0', fontSize: '.85rem', fontWeight: 500}}>{label}</div>
      </div>
    );

    return (
      <div className="case-study-page cs-patent">
        {/* STICKY NAV */}
        <div className="cs-topbar">
          <div className="cs-topbar-inner">
            <button className="cs-back" onClick={onBack}>
              <span className="cs-back-arrow">←</span>
              Back to Work
            </button>
            <div className="cs-section-nav">
              {displaySections.map((section) => {
                let isActive = false;
                if (section.id === "overview" && ["overview", "snapshot", "timeline"].includes(activeSection)) isActive = true;
                else if (section.id === "problem" && ["problem", "research", "market", "requirements"].includes(activeSection)) isActive = true;
                else if (section.id === "experiments" && ["experiments", "concepts", "tradeoffs"].includes(activeSection)) isActive = true;
                else if (section.id === "architecture" && ["architecture", "prototype"].includes(activeSection)) isActive = true;
                else if (section.id === "impact" && ["impact", "report"].includes(activeSection)) isActive = true;
                return (
                  <a key={section.id} href={`#${section.id}`} className={isActive ? "active" : ""}>
                    {section.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="wrap">
          <main className="cs-content">

            {/* ─── SECTION 1: HERO INTRO ─── */}
            <section id="overview" className="cs-hero">
              <div style={{marginBottom: '1.5rem', fontSize: '.8rem', color: '#2b5440', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase'}}>
                Patented Innovation
              </div>
              <h1 className="cs-title" style={{fontSize: '3.25rem', lineHeight: 1.08, marginBottom: '1.5rem', letterSpacing: '-0.03em', maxWidth: '900px'}}>
                Designing a Patented Fall-Prevention System for Elderly Walkers
              </h1>
              <p style={{fontSize: '1.25rem', color: '#4a5568', marginBottom: '2rem', maxWidth: '750px', lineHeight: 1.6}}>
                Transforming a passive mobility aid into a responsive safety system that detects instability and prevents falls.
              </p>

              <div style={{display: 'flex', gap: '3rem', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)', padding: '1.5rem 0', marginBottom: '3rem', flexWrap: 'wrap'}}>
                {[
                  {label: 'Role', value: 'Product Designer / Systems Designer'},
                  {label: 'Duration', value: '5 months'},
                  {label: 'Outcome', value: 'Patent Filed'}
                ].map((m, i) => (
                  <div key={i}>
                    <div style={{fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: '.1em', color: '#a0aec0', marginBottom: '.35rem'}}>{m.label}</div>
                    <div style={{fontWeight: 500, fontSize: '.95rem'}}>{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Full-width animated product intro */}
              <WALKsafeDemo />
            </section>

            {/* ─── SECTION 2: PATENT SNAPSHOT ─── */}
            <section id="snapshot" className="cs-section cs-snapshot">
              <div style={{marginBottom: '2rem'}}>
                <h2 className="cs-section-title">Patent Snapshot</h2>
                <p style={{color: '#718096'}}>A quick overview of the invention before diving into the full case study.</p>
              </div>

              <div className="cs-snapshot-grid">
                {/* LEFT — Product Visualization */}
                <div className="cs-snapshot-visual">
                  <img src="/walksafe_hero.png" alt="WALKsafe System" style={{width: '100%', borderRadius: '12px', marginBottom: '2rem'}} />
                  <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
                    {[
                      {label: 'Instability Detection', icon: '📡'},
                      {label: 'Real-time Processing', icon: '⚡'},
                      {label: 'Rapid Stabilization', icon: '🛡️'}
                    ].map((tag, i) => (
                      <div key={i} style={{display: 'flex', alignItems: 'center', gap: '.5rem', background: '#e8f0ec', border: '1px solid rgba(43,84,64,0.15)', borderRadius: '100px', padding: '.5rem 1rem', fontSize: '.8rem', fontWeight: 600, color: '#2b5440'}}>
                        <span>{tag.icon}</span>{tag.label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT — Innovation Summary Cards */}
                <div className="cs-snapshot-cards">
                  {[
                    {title: 'Problem', body: 'Walkers improve stability while walking, but cannot respond when the walker itself becomes unstable. Falls frequently occur during this tipping moment.'},
                    {title: 'Insight', body: 'If a walker could detect instability and react in real time, it could prevent many falls before they happen.'},
                    {title: 'Innovation', body: 'A sensor-driven stabilization system that detects tipping, analyzes motion patterns, and deploys support legs automatically.'},
                    {title: 'Technology', body: 'IMU sensor · Microcontroller processing · Solenoid-triggered deployment mechanism'},
                    {title: 'Outcome', body: 'Functional prototype developed · Detection <0.4s · Deployment <0.7s · Patent filed'}
                  ].map((card, i) => (
                    <div key={i} className="cs-snapshot-card">
                      <div className="cs-snapshot-card-title">{card.title}</div>
                      <div className="cs-snapshot-card-body">{card.body}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mini System Diagram */}
              <div className="cs-patent-flow" style={{marginTop: '3rem', maxWidth: '360px'}}>
                {['Walker Tilt', 'Sensor Detection', 'Microcontroller Analysis', 'Support Leg Deployment', 'Fall Prevented'].map((step, i) => (
                  <div key={i}>
                    <div className={`cs-patent-flow-node${i >= 3 ? ' highlight' : ''}`} style={{padding: '.75rem 1.5rem', fontSize: '.85rem'}}>{step}</div>
                    {i < 4 && <div className="cs-patent-flow-arrow" style={{fontSize: '1rem'}}>↓</div>}
                  </div>
                ))}
              </div>

              {/* Explore CTA */}
              <div style={{textAlign: 'center', marginTop: '2.5rem'}}>
                <a href="#timeline" style={{display: 'inline-flex', alignItems: 'center', gap: '.5rem', color: '#2b5440', fontWeight: 600, fontSize: '.95rem', textDecoration: 'none', borderBottom: '2px solid #2b5440', paddingBottom: '.25rem'}}>
                  Explore Full Case Study →
                </a>
              </div>
            </section>

            {/* ─── SECTION 3: INNOVATION TIMELINE ─── */}
            <section id="timeline" className="cs-section">
              <h2 className="cs-section-title">Innovation Timeline</h2>
              <p>The invention journey — from observing a real-world failure to filing a patent.</p>

              <div style={{display: 'flex', gap: '0', marginTop: '3rem', overflowX: 'auto', paddingBottom: '1rem'}}>
                {[
                  {icon: '👁', stage: 'Observation', desc: 'Walkers fail during tipping events'},
                  {icon: '💡', stage: 'Insight', desc: 'Walkers support walking, not instability'},
                  {icon: '🔬', stage: 'Research', desc: 'Interviews with elderly users & doctors'},
                  {icon: '⚗️', stage: 'Experiments', desc: 'Fall simulations & sensor testing'},
                  {icon: '🔄', stage: 'Concept Evolution', desc: 'Multiple stabilization approaches'},
                  {icon: '📋', stage: 'Patent Innovation', desc: 'Deployable support-leg system'}
                ].map((item, i) => (
                  <div key={i} style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{
                      minWidth: '160px', background: 'white', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem 1.25rem', textAlign: 'center',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                      ...(i === 5 ? {borderColor: '#2b5440', background: '#e8f0ec'} : {})
                    }}>
                      <div style={{fontSize: '1.75rem', marginBottom: '.75rem'}}>{item.icon}</div>
                      <div style={{fontWeight: 600, fontSize: '.85rem', color: i === 5 ? '#2b5440' : 'var(--ink)', marginBottom: '.35rem'}}>{item.stage}</div>
                      <div style={{fontSize: '.78rem', color: '#718096', lineHeight: 1.4}}>{item.desc}</div>
                    </div>
                    {i < 5 && <div style={{color: '#cbd5e0', fontSize: '1rem', padding: '0 .5rem'}}>→</div>}
                  </div>
                ))}
              </div>
            </section>

            {/* ─── SECTION 3: PROBLEM DISCOVERY ─── */}
            <section id="problem" className="cs-section">
              <h2 className="cs-section-title">Why Walkers Still Fail Elderly Users</h2>
              <p>A fall doesn't happen instantly — it follows a predictable mechanical sequence. The walker becomes unstable before the user can react, and no existing device intervenes.</p>

              <div className="cs-storyboard">
                {[
                  {num: '1', icon: '🚶', label: 'Walking normally', danger: false},
                  {num: '2', icon: '↗️', label: 'Walker begins to tilt', danger: false},
                  {num: '3', icon: '⚠️', label: 'User loses balance', danger: false},
                  {num: '4', icon: '💥', label: 'Fall occurs', danger: true}
                ].map((f, i) => (
                  <div key={i} className={`cs-storyboard-frame${f.danger ? ' danger' : ''}`}>
                    <div className="frame-number">{f.num}</div>
                    <div className="frame-icon">{f.icon}</div>
                    <div className="frame-label">{f.label}</div>
                  </div>
                ))}
              </div>

              <img src="/walksafe_biomechanics.png" alt="Center of Mass vs Base of Support" style={{width: '100%', maxWidth: '650px', margin: '3rem auto', display: 'block', borderRadius: '12px', border: '1px solid var(--border)'}} />

              <div style={{background: '#fff5f5', border: '1px solid #feb2b2', borderRadius: '12px', padding: '1.5rem 2rem', textAlign: 'center'}}>
                <p style={{margin: 0, fontWeight: 600, color: '#c53030', fontSize: '1rem'}}>The instability window is 0.3–0.8 seconds — too fast for elderly users to recover, too short for any existing device to intervene.</p>
              </div>

              {placeholderBox('Add fall research diagrams / observations')}
            </section>

            {/* ─── SECTION 4: USER RESEARCH ─── */}
            <section id="research" className="cs-section">
              <h2 className="cs-section-title">Understanding Fall Behaviour</h2>
              <p>We conducted 40 interviews across three stakeholder groups to map the real-world failure points of current mobility aids.</p>

              <div className="cs-grid-3" style={{marginTop: '3rem'}}>
                {[
                  {icon: '👴', title: 'Elderly Users', count: '20', desc: 'Mobility anxiety, device abandonment, fear-driven inactivity.'},
                  {icon: '👩‍⚕️', title: 'Physicians', count: '12', desc: 'Fracture patterns, recovery timelines, readmission data.'},
                  {icon: '👨', title: 'Caregivers', count: '8', desc: 'Supervision burden, desire for proactive safety tools.'}
                ].map((card, i) => (
                  <div key={i} className="cs-card" style={{background: 'white', textAlign: 'center'}}>
                    <div style={{fontSize: '2.5rem', marginBottom: '.75rem'}}>{card.icon}</div>
                    <div style={{fontWeight: 700, fontSize: '1.5rem', color: '#2b5440', marginBottom: '.25rem'}}>{card.count}</div>
                    <div style={{fontWeight: 600, marginBottom: '.5rem', fontSize: '.95rem'}}>{card.title}</div>
                    <div style={{fontSize: '.85rem', color: '#4a5568', lineHeight: 1.5}}>{card.desc}</div>
                  </div>
                ))}
              </div>

              <div className="cs-grid-3" style={{marginTop: '2rem'}}>
                {[
                  {title: 'Fear of falling', desc: 'Reduces mobility and social engagement', color: '#e53e3e'},
                  {title: 'Social stigma', desc: 'Drives device avoidance and non-compliance', color: '#dd6b20'},
                  {title: 'Confidence gap', desc: 'Users need assurance, not complexity', color: '#2b5440'}
                ].map((insight, i) => (
                  <div key={i} style={{background: 'white', border: '1px solid var(--border)', borderLeft: `4px solid ${insight.color}`, borderRadius: '8px', padding: '1.25rem 1.5rem'}}>
                    <div style={{fontWeight: 600, marginBottom: '.4rem', fontSize: '.95rem'}}>{insight.title}</div>
                    <div style={{fontSize: '.85rem', color: '#4a5568'}}>{insight.desc}</div>
                  </div>
                ))}
              </div>

              <div className="cs-grid-3" style={{marginTop: '2rem'}}>
                {placeholderBox('Add interview photos')}
                {placeholderBox('Add research notes')}
                {placeholderBox('Add survey graphs')}
              </div>
            </section>

            {/* ─── SECTION 5: MARKET LANDSCAPE ─── */}
            <section id="market" className="cs-section">
              <h2 className="cs-section-title">Existing Solutions Miss the Real Moment</h2>
              <p>We mapped every commercially available fall-related product and found a critical gap in the market.</p>

              <table className="cs-comparison-table">
                <thead><tr><th>Category</th><th>Example</th><th>Approach</th><th>Limitation</th></tr></thead>
                <tbody>
                  <tr><td>Protection Gear</td><td>Hip pads, helmets</td><td>Absorb impact</td><td style={{color: '#e53e3e'}}>Reactive only</td></tr>
                  <tr><td>Detection Wearables</td><td>Fall sensors, alerts</td><td>Notify post-fall</td><td style={{color: '#e53e3e'}}>After-the-fact</td></tr>
                  <tr><td>Smart Walkers</td><td>Motorized rollators</td><td>Assist walking</td><td style={{color: '#e53e3e'}}>No stabilization</td></tr>
                </tbody>
              </table>

              <div style={{background: '#e8f0ec', borderRadius: '12px', padding: '2rem', textAlign: 'center', border: '1px solid rgba(43,84,64,0.15)'}}>
                <p style={{margin: 0, fontWeight: 600, color: '#2b5440', fontSize: '1.05rem'}}>
                  Most solutions detect falls after they happen. No system prevents the walker from tipping itself.
                </p>
              </div>

              {placeholderBox('Add market research visuals')}
            </section>

            {/* ─── SECTION 6: DESIGN REQUIREMENTS ─── */}
            <section id="requirements" className="cs-section">
              <h2 className="cs-section-title">System Requirements</h2>
              <p>We defined six critical performance dimensions that the final design must satisfy.</p>

              <div className="cs-radar-panel">
                {[
                  {label: 'Fall Detection Speed', pct: '95'},
                  {label: 'Deployment Speed', pct: '88'},
                  {label: 'Walker Weight Budget', pct: '72'},
                  {label: 'Noise Level', pct: '80'},
                  {label: 'Ease of Use', pct: '92'},
                  {label: 'Maintenance Frequency', pct: '85'}
                ].map((bar, i) => (
                  <div key={i} className="cs-radar-bar">
                    <div className="bar-label">{bar.label}</div>
                    <div className="bar-track"><div className="bar-fill" style={{width: `${bar.pct}%`}}></div></div>
                  </div>
                ))}
              </div>

              {placeholderBox('Add requirement tables / technical benchmarks')}
            </section>

            {/* ─── SECTION 7: EXPERIMENTS ─── */}
            <section id="experiments" className="cs-section">
              <h2 className="cs-section-title">Experiments & System Exploration</h2>
              <p>We conducted controlled fall experiments across five scenarios to characterize angular velocity spikes, acceleration patterns, and define reliable detection thresholds.</p>

              <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', margin: '3rem 0'}}>
                {[
                  {icon: '⬅️', label: 'Side Fall'},
                  {icon: '⬆️', label: 'Front Fall'},
                  {icon: '⬇️', label: 'Backward Fall'},
                  {icon: '🧱', label: 'Obstacle Collision'},
                  {icon: '📐', label: 'Slope Instability'}
                ].map((s, i) => (
                  <div key={i} className="cs-storyboard-frame">
                    <div className="frame-icon">{s.icon}</div>
                    <div className="frame-label">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Angular velocity graph */}
              <div style={{background: 'white', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem'}}>
                <div style={{fontSize: '.75rem', textTransform: 'uppercase', letterSpacing: '.06em', color: '#a0aec0', marginBottom: '1.25rem', fontWeight: 600}}>IMU Sensor Data — Angular Velocity Spikes Over Time</div>
                <svg width="100%" height="120" viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="100" x2="600" y2="100" stroke="#edf2f7" strokeWidth="1" />
                  <line x1="0" y1="60" x2="600" y2="60" stroke="#edf2f7" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="20" x2="600" y2="20" stroke="#edf2f7" strokeWidth="1" strokeDasharray="4 4" />
                  <polyline points="0,90 50,88 100,85 130,80 150,70 160,25 170,15 180,30 190,65 220,80 280,85 320,82 350,78 370,30 380,10 390,35 410,75 460,85 520,88 560,80 570,20 580,40 590,80 600,85" stroke="#2b5440" strokeWidth="2" fill="none" />
                  <text x="148" y="10" fill="#e53e3e" fontSize="9" fontWeight="600">SPIKE</text>
                  <text x="360" y="6" fill="#e53e3e" fontSize="9" fontWeight="600">SPIKE</text>
                  <text x="560" y="15" fill="#e53e3e" fontSize="9" fontWeight="600">SPIKE</text>
                </svg>
                <div style={{fontSize: '.8rem', color: '#718096', marginTop: '.75rem'}}>Angular velocity exceeds 150°/s threshold — marking detection trigger points.</div>
              </div>

              <div className="cs-two-col" style={{marginTop: '2rem'}}>
                {placeholderBox('Add experiment photos')}
                {placeholderBox('Add Arduino testing setup images')}
              </div>
              {placeholderBox('Add sensor graphs')}
            </section>

            {/* ─── SECTION 8: CONCEPT EXPLORATION ─── */}
            <section id="concepts" className="cs-section">
              <h2 className="cs-section-title">Exploring Stabilization Strategies</h2>
              <p>We evaluated three distinct mechanical approaches before converging on the winning concept through a weighted decision matrix.</p>

              <div className="cs-concept-grid">
                <div className="cs-concept-card">
                  <h4>Concept 1: Counter Torque</h4>
                  <div style={{fontSize: '.9rem', color: '#4a5568', marginBottom: '1rem', lineHeight: 1.5}}>Gyroscopic motors apply counter-rotational force to resist tipping.</div>
                  <div style={{color: '#e53e3e', fontWeight: 600, fontSize: '.8rem'}}>✕ Heavy motors &nbsp;&nbsp; ✕ High complexity</div>
                </div>
                <div className="cs-concept-card">
                  <h4>Concept 2: Weight Transfer</h4>
                  <div style={{fontSize: '.9rem', color: '#4a5568', marginBottom: '1rem', lineHeight: 1.5}}>Shifting internal weight to counterbalance the tilt direction.</div>
                  <div style={{color: '#e53e3e', fontWeight: 600, fontSize: '.8rem'}}>✕ Large counterweight &nbsp;&nbsp; ✕ Slow response</div>
                </div>
                <div className="cs-concept-card selected">
                  <h4>Concept 3: Deployable Support Legs</h4>
                  <div style={{fontSize: '.9rem', color: '#4a5568', marginBottom: '1rem', lineHeight: 1.5}}>Spring-loaded legs deploy laterally upon instability detection.</div>
                  <div style={{color: '#2b5440', fontWeight: 600, fontSize: '.8rem'}}>✓ Fast &nbsp;&nbsp; ✓ Simple &nbsp;&nbsp; ✓ Lightweight &nbsp;&nbsp; ✓ Reliable</div>
                </div>
              </div>

              <table className="cs-matrix-table">
                <thead><tr><th>Criteria</th><th>Counter Torque</th><th>Weight Transfer</th><th>Deployable Legs</th></tr></thead>
                <tbody>
                  <tr><td>Speed</td><td>★★</td><td>★</td><td style={{color: '#2b5440', fontWeight: 600}}>★★★</td></tr>
                  <tr><td>Weight</td><td>★</td><td>★</td><td style={{color: '#2b5440', fontWeight: 600}}>★★★</td></tr>
                  <tr><td>Complexity</td><td>★</td><td>★★</td><td style={{color: '#2b5440', fontWeight: 600}}>★★★</td></tr>
                  <tr><td>Reliability</td><td>★★</td><td>★★</td><td style={{color: '#2b5440', fontWeight: 600}}>★★★</td></tr>
                </tbody>
              </table>

              {placeholderBox('Add concept sketches')}
            </section>

            {/* ─── SECTION 9: DESIGN INTELLIGENCE ─── */}
            <section id="tradeoffs" className="cs-section">
              <h2 className="cs-section-title">Design Intelligence — Navigating Tradeoffs</h2>
              <p>The core design challenge: increase safety without increasing physical effort for elderly users. Every decision balanced four competing dimensions.</p>

              <img src="/walksafe_tradeoff.png" alt="Design Tradeoff Radar" style={{width: '100%', maxWidth: '500px', margin: '3rem auto', display: 'block', borderRadius: '12px', border: '1px solid var(--border)'}} />

              <div className="cs-two-col" style={{marginTop: '2rem'}}>
                <div className="cs-card" style={{background: 'white'}}>
                  <h3 style={{fontSize: '1rem', marginBottom: '.75rem'}}>Safety versus Weight</h3>
                  <p style={{fontSize: '.9rem', margin: 0}}>Stronger mechanisms increase protection but add mass. The spring-loaded system achieves maximum safety at minimal weight.</p>
                </div>
                <div className="cs-card" style={{background: 'white'}}>
                  <h3 style={{fontSize: '1rem', marginBottom: '.75rem'}}>Complexity versus Ease of Use</h3>
                  <p style={{fontSize: '.9rem', margin: 0}}>The system must require zero user intervention — fully automatic detection-to-deployment with no learning curve.</p>
                </div>
              </div>

              <div className="cs-two-col" style={{marginTop: '1.5rem'}}>
                {placeholderBox('Add engineering calculations')}
                {placeholderBox('Add mechanism diagrams')}
              </div>
            </section>

            {/* ─── SECTION 10: FINAL SYSTEM ARCHITECTURE ─── */}
            <section id="architecture" className="cs-section">
              <h2 className="cs-section-title">Final System Architecture</h2>
              <p>The complete sensor-actuator chain from instability detection to mechanical stabilization.</p>

              <img src="/walksafe_system_arch.png" alt="System Architecture Diagram" style={{width: '100%', maxWidth: '800px', margin: '3rem auto 2rem', display: 'block', borderRadius: '12px', border: '1px solid var(--border)', boxShadow: '0 10px 30px rgba(0,0,0,0.04)'}} />

              <div className="cs-patent-flow" style={{maxWidth: '420px'}}>
                {['Walker Motion', 'MPU6050 IMU Sensor', 'ATmega Microcontroller', 'Signal Verification', 'Solenoid Trigger', 'Spring Mechanism', 'Support Legs Deploy', 'Walker Stabilizes'].map((step, i) => (
                  <div key={i}>
                    <div className={`cs-patent-flow-node${i >= 4 ? ' highlight' : ''}`}>{step}</div>
                    {i < 7 && <div className="cs-patent-flow-arrow">↓</div>}
                  </div>
                ))}
              </div>

              <div style={{background: 'white', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem', marginTop: '3rem'}}>
                <div style={{fontSize: '.75rem', textTransform: 'uppercase', letterSpacing: '.06em', color: '#a0aec0', marginBottom: '1rem', fontWeight: 600}}>Hardware Stack</div>
                <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                  {['MPU6050 Sensor', 'ATmega MCU', 'Solenoid Actuator', 'Spring Mechanism'].map((c, i) => (
                    <div key={i} style={{background: i < 2 ? '#f7fafc' : '#e8f0ec', border: '1px solid var(--border)', borderRadius: '8px', padding: '.75rem 1.25rem', fontWeight: 500, fontSize: '.85rem', color: i < 2 ? '#4a5568' : '#2b5440'}}>{c}</div>
                  ))}
                </div>
              </div>

              <div className="cs-two-col" style={{marginTop: '2rem'}}>
                {placeholderBox('Add electronics diagrams')}
                {placeholderBox('Add PCB designs')}
              </div>
            </section>

            {/* ─── SECTION 11: PROTOTYPE & INTERACTIVE WORKFLOW ─── */}
            <section id="prototype" className="cs-section">
              <h2 className="cs-section-title">From CAD to Functional Prototype</h2>
              <p>The final design evolved through multiple CAD iterations — from a basic frame concept to a refined mechanism with precision-engineered deployable legs.</p>

              {/* 3D Prototype Image */}
              <div style={{background: 'white', borderRadius: '16px', border: '1px solid var(--border)', padding: '2.5rem', marginTop: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.04)'}}>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
                  <div>
                    <img src="/walksafe_mechanism.png" alt="Mechanism Close-up" style={{width: '100%', borderRadius: '10px'}} />
                    <div style={{fontSize: '.8rem', color: '#718096', textAlign: 'center', marginTop: '.75rem'}}>Spring-loaded deployment mechanism — exploded view</div>
                  </div>
                  <div>
                    <img src="/walksafe_prototype.png" alt="Full Walker Prototype" style={{width: '100%', borderRadius: '10px'}} />
                    <div style={{fontSize: '.8rem', color: '#718096', textAlign: 'center', marginTop: '.75rem'}}>Full prototype with integrated stabilization system</div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="cs-proto-metrics" style={{marginTop: '3rem'}}>
                <div className="cs-proto-metric">
                  <div className="metric-value">&lt;0.4s</div>
                  <div className="metric-label">Fall Detection</div>
                </div>
                <div className="cs-proto-metric">
                  <div className="metric-value">&lt;0.7s</div>
                  <div className="metric-label">Leg Deployment</div>
                </div>
                <div className="cs-proto-metric">
                  <div className="metric-value">PC</div>
                  <div className="metric-label">Polycarbonate Build</div>
                </div>
              </div>


            </section>

            {/* ─── SECTION 12: IMPACT ─── */}
            <section id="impact" className="cs-section">
              <h2 className="cs-section-title">Impact & Outcome</h2>

              <div className="cs-patent-callout">
                <h3>Patent Filed</h3>
                <p>A novel assistive technology system combining real-time instability detection with automatic mechanical stabilization for elderly walkers.</p>
              </div>

              <div className="cs-grid-3" style={{marginTop: '3rem'}}>
                {[
                  {title: 'Mechanical System Design', desc: 'Designed the complete spring-loaded deployable support leg mechanism from concept to working prototype.'},
                  {title: 'Sensor-Based Detection', desc: 'Developed the IMU-based fall detection algorithm with sub-0.4 second response time.'},
                  {title: 'Assistive UX Innovation', desc: 'Bridged the gap between passive mobility aids and active safety systems through user-centered design.'}
                ].map((c, i) => (
                  <div key={i} className="cs-card" style={{background: 'white', borderLeft: '4px solid #2b5440'}}>
                    <h3 style={{fontSize: '1rem', marginBottom: '.5rem'}}>{c.title}</h3>
                    <p style={{fontSize: '.85rem', margin: 0}}>{c.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{background: 'white', border: '1px solid var(--border)', borderRadius: '12px', padding: '3rem', textAlign: 'center', marginTop: '3rem'}}>
                <p style={{fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--ink)', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto', fontStyle: 'italic'}}>
                  "Designing assistive technology is not only about preventing injuries — it is about restoring confidence and independence."
                </p>
              </div>
            </section>

            {/* ─── SECTION 13: FULL RESEARCH REPORT ─── */}
            <section id="report" className="cs-section">
              <h2 className="cs-section-title">Full Research Documentation</h2>
              <p>The complete project report contains detailed technical documentation, calculations, sensor data, CAD models, and research methodology.</p>

              <div style={{background: 'white', border: '1px solid var(--border)', borderRadius: '16px', padding: '4rem', textAlign: 'center', marginTop: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.03)'}}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2b5440" strokeWidth="1.5" style={{marginBottom: '1.5rem'}}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <h3 style={{fontSize: '1.25rem', marginBottom: '1rem'}}>Complete Project Report</h3>
                <p style={{color: '#718096', fontSize: '.95rem', maxWidth: '500px', margin: '0 auto 2rem'}}>
                  Detailed technical documentation including sensor data analysis, mechanical calculations, and full research methodology.
                </p>
                <div style={{display: 'inline-block', background: '#2b5440', color: 'white', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: 600, fontSize: '.95rem', cursor: 'pointer', boxShadow: '0 4px 12px rgba(43,84,64,0.2)'}}>
                  View Complete Project Report →
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    );
  }

  return null;
}