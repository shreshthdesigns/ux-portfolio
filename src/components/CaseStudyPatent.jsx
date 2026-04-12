import { useEffect, useState, useRef } from "react";

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
          <div className="ws-status-badge" style={{ background: p.color }}>
            {p.status}
          </div>
          <div className="ws-status-title">
            <span style={{ marginRight: '.5rem' }}>{p.icon}</span>{p.title}
          </div>
          <div className="ws-status-desc">{p.desc}</div>

          {/* Pipeline Progress */}
          <div className="ws-pipeline">
            {phases.map((step, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div className={`ws-pipeline-dot${i <= phase ? ' active' : ''}`} style={{ background: i <= phase ? phases[i].color : '#e2e8f0' }}>
                  {i < phase ? '✓' : i + 1}
                </div>
                {i < 4 && <div className="ws-pipeline-line" style={{ background: i < phase ? phases[i].color : '#e2e8f0' }}></div>}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.65rem', color: '#a0aec0', marginTop: '.25rem' }}>
            <span>Idle</span><span>Detect</span><span>Process</span><span>Deploy</span><span>Safe</span>
          </div>

          {/* Live Data */}
          <div className="ws-live-data">
            <div className="ws-data-row">
              <span>Angular Velocity</span>
              <span style={{ color: phase >= 1 && phase <= 2 ? '#e53e3e' : '#2b5440', fontWeight: 600 }}>
                {phase === 0 ? '12°/s' : phase === 1 ? '187°/s' : phase === 2 ? '165°/s' : phase === 3 ? '45°/s' : '8°/s'}
              </span>
            </div>
            <div className="ws-data-row">
              <span>System State</span>
              <span style={{ fontWeight: 600, color: p.color }}>{p.status}</span>
            </div>
            <div className="ws-data-row">
              <span>Response Time</span>
              <span style={{ fontWeight: 600 }}>{phase >= 4 ? '0.38s' : phase >= 3 ? '0.31s' : '—'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function CaseStudyPatent({ onBack, activeSection, displaySections }) {
  const placeholderBox = (label) => (
    <div style={{ border: '2px dashed #cbd5e0', borderRadius: '12px', padding: '3rem 2rem', textAlign: 'center', margin: '2rem 0', background: 'rgba(0,0,0,0.01)' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a0aec0" strokeWidth="1.5" style={{ marginBottom: '0.75rem' }}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
      <div style={{ color: '#a0aec0', fontSize: '.85rem', fontWeight: 500 }}>{label}</div>
    </div>
  );

  const marketBenchmarks = [
    {
      group: 'Impact protection',
      examples: 'Hip pads, protective belts, fall jackets',
      behavior: 'Reduces injury after impact',
      strength: 'Useful for fracture protection',
      gap: 'Reactive only; does not prevent the fall moment',
      signal: 'Post-fall protection',
      image: '/Walksafe/Impact.png'
    },
    {
      group: 'Detection wearables',
      examples: 'Fall sensors, alarm pendants, detector belts',
      behavior: 'Detects a fall and triggers notification',
      strength: 'Improves response and caregiver awareness',
      gap: 'After-the-fact intervention; user still hits the ground',
      signal: 'Notification system',
      image: '/Walksafe/Detection.png'
    },
    {
      group: 'Guidance aids',
      examples: 'Laser guide, audio cue, gait feedback devices',
      behavior: 'Gives cues while walking',
      strength: 'Supports gait rhythm and user awareness',
      gap: 'Depends on user attention and does not stabilize hardware',
      signal: 'User-led correction',
      image: '/Walksafe/Guidance.png'
    },
    {
      group: 'Mobility devices',
      examples: 'Smart walkers, motorized rollators',
      behavior: 'Assists movement and navigation',
      strength: 'Improves mobility support',
      gap: 'Can add functional complexity; no automatic anti-tip response',
      signal: 'Walking assistance',
      image: '/Walksafe/Mobility.png'
    }
  ];

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
            <div style={{ marginBottom: '1.5rem', fontSize: '.8rem', color: '#2b5440', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase' }}>
              Research-Led Systems Design
            </div>
            <h1 className="cs-title">
              Walksafe — Designing for Safer Mobility in Elderly
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#4a5568', marginBottom: '2rem', maxWidth: '1200px', lineHeight: 1.6 }}>
              Designing for fall prevention is not just about detecting motion — it's about addressing <strong>fear, confidence, and independence</strong> in everyday movement.
            </p>

            <div className="cs-meta-grid">
              {[
                { label: 'Role', value: 'UX Researcher / Systems Designer' },
                { label: 'Duration', value: '5 months' },
                { label: 'Outcome', value: 'US Patent Granted' }
              ].map((m, i) => (
                <div key={i} className="cs-meta-item">
                  <div className="cs-meta-label">{m.label}</div>
                  <div className="cs-meta-value">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Full-width animated product intro */}
            <WALKsafeDemo />
          </section>

          {/* ─── SECTION 2: PATENT SNAPSHOT ─── */}
          <section id="snapshot" className="cs-section cs-snapshot">
            <div style={{ marginBottom: '2rem' }}>
              <h2 className="cs-section-title">Patent Snapshot</h2>
              <p style={{ color: '#718096' }}>How research into elderly mobility and fall-risk led to a system-level intervention.</p>
            </div>

            <div className="cs-snapshot-grid">
              {/* LEFT — Product Visualization */}
              <div className="cs-snapshot-visual">
                <img src="/WS PATENT INTRO.png" alt="WALKsafe System" className="cs-main-img" />
                <div className="cs-pill-tags">
                  {[
                    { label: 'Instability Detection', icon: '📡' },
                    { label: 'Real-time Processing', icon: '⚡' },
                    { label: 'Rapid Stabilization', icon: '🛡️' }
                  ].map((tag, i) => (
                    <div key={i} className="cs-pill-tag">
                      <span>{tag.icon}</span>{tag.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — Innovation Summary Cards */}
              <div className="cs-snapshot-cards">
                {[
                  { title: 'Problem', body: 'Falls among elderly are deeply tied to behavior, emotion, and reduced confidence — not just physical imbalance.' },
                  { title: 'Insight', body: 'Users preferred passive safety systems that work invisibly. Trust comes from reliability, not features.' },
                  { title: 'Approach', body: 'A research-driven exploration across prediction, detection, and protection — leading to a system-level intervention.' },
                  { title: 'System', body: 'Real-time motion sensing · Threshold-based fall prediction · Automatic mechanical stabilization' },
                  { title: 'Outcome', body: 'Functional prototype validated · Detection <0.4s · Deployment <0.7s · US Patent Granted' }
                ].map((card, i) => (
                  <div key={i} className="cs-snapshot-card">
                    <div className="cs-snapshot-card-title">{card.title}</div>
                    <div className="cs-snapshot-card-body">{card.body}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Flow + Impact Side-by-Side */}
            <div className="cs-mechanism-impact-row">

              {/* LEFT — Mechanism Flowchart */}
              <div className="cs-mechanism-visual">
                <div className="cs-white-card">
                  <img src="/Mechanism Flowchart.png" alt="System Flow — From user movement to fall prevention" className="cs-flow-img" />
                </div>
              </div>

              {/* RIGHT — Compact Impact */}
              <div className="cs-impact-summary">

                {/* Label */}
                <div className="cs-impact-label">Impact</div>

                {/* Headline */}
                <h3 className="cs-impact-title">
                  Real-time fall prevention system
                </h3>

                {/* Metrics Row */}
                <div className="cs-impact-metrics">
                  {[
                    { value: '0.4s', label: 'Detection' },
                    { value: '0.7s', label: 'Response' },
                    { value: 'Patent', label: 'US Granted' }
                  ].map((m, i) => (
                    <div key={i} className="cs-impact-metric-item">
                      <div className="cs-metric-value">{m.value}</div>
                      <div className="cs-metric-label">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Keyword Tags */}
                <div className="cs-pill-tags">
                  {['Instability Detection', 'Real-time Processing', 'Passive Safety', 'Low Cognitive Load'].map((tag, i) => (
                    <span key={i} className="cs-pill-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Micro Line */}
                <p className="cs-ital-muted">
                  Prevents falls before impact
                </p>

                {/* Explore CTA */}
                <div className="cs-impact-cta">
                  <a href="#timeline" className="cs-text-cta">
                    Explore Full Case Study →
                  </a>
                </div>

              </div>
            </div>
          </section>

          {/* ─── SECTION 3: RESEARCH TIMELINE (GANTT) ─── */}
          <section id="timeline" className="cs-section">
            <h2 className="cs-section-title">Research & Design Journey</h2>
            <p>A 12-month structured exploration — from observing real-world failure patterns to delivering a validated system-level intervention.</p>

            <div className="cs-timeline-container">

              {/* TIME AXIS — Desktop Only */}
              <div className="cs-timeline-axis desktop-only">
                <div className="cs-axis-labels">
                  {[0, 3, 6, 9, 12].map((m) => (
                    <div key={m} className="cs-axis-marker">
                      <div className="cs-marker-label">{m === 0 ? 'Start' : `${m}mo`}</div>
                      <div className="cs-marker-tick"></div>
                    </div>
                  ))}
                </div>
                <div className="cs-axis-line"></div>
              </div>

              {/* PHASE ROWS — Transformed for Desktop/Mobile via CSS */}
              <div className="cs-timeline-phases">

                {/* Phase 1: Understanding */}
                <div className="cs-timeline-phase-row p1">
                  <div className="cs-phase-info">
                    <div className="cs-phase-label">Phase 1</div>
                    <div className="cs-phase-name">Understanding</div>
                  </div>
                  <div className="cs-phase-track-wrapper">
                    <div className="cs-phase-track">
                      {['Observation', 'Framing', 'Research'].map((t, i) => (
                        <span key={i} className="cs-track-tag">{t}</span>
                      ))}
                    </div>
                    <div className="cs-phase-details">
                        Identified predictable fall patterns through field observation
                    </div>
                  </div>
                </div>

                {/* Phase 2: Defining & Exploring */}
                <div className="cs-timeline-phase-row p2">
                  <div className="cs-phase-info">
                    <div className="cs-phase-label">Phase 2</div>
                    <div className="cs-phase-name">Defining</div>
                  </div>
                  <div className="cs-phase-track-wrapper">
                    <div className="cs-phase-track">
                      {['Validation', 'Exploration'].map((t, i) => (
                        <span key={i} className="cs-track-tag">{t}</span>
                      ))}
                    </div>
                    <div className="cs-phase-details">
                        40 interviews across users, physicians & caregivers
                    </div>
                  </div>
                </div>

                {/* Phase 3: Validation */}
                <div className="cs-timeline-phase-row p3">
                  <div className="cs-phase-info">
                    <div className="cs-phase-label">Phase 3</div>
                    <div className="cs-phase-name">Validation</div>
                  </div>
                  <div className="cs-phase-track-wrapper">
                    <div className="cs-phase-track">
                      {['System Design', 'Testing'].map((t, i) => (
                        <span key={i} className="cs-track-tag">{t}</span>
                      ))}
                    </div>
                    <div className="cs-phase-details">
                        Fall simulations & sensor threshold calibration
                    </div>
                  </div>
                </div>

                {/* Phase 4: Delivery */}
                <div className="cs-timeline-phase-row p4">
                  <div className="cs-phase-info">
                    <div className="cs-phase-label">Phase 4</div>
                    <div className="cs-phase-name">Delivery</div>
                  </div>
                  <div className="cs-phase-track-wrapper">
                    <div className="cs-phase-track">
                      {['Prototype', 'TRL-3', 'Patent'].map((t, i) => (
                        <span key={i} className="cs-track-tag">{t}</span>
                      ))}
                    </div>
                    <div className="cs-phase-details highlighted">
                        Functional prototype validated · US Patent Granted
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ─── SECTION 3: PROBLEM DISCOVERY ─── */}
          <section id="problem" className="cs-section">
            <h2 className="cs-section-title">Understanding Fall Risk — Beyond the Physical</h2>
            <p>Falls among elderly are not just physical incidents — they are deeply tied to <strong>behavior and emotion</strong>. Reduced balance, low awareness of risk, and fear of falling create a self-reinforcing cycle.</p>

            <div className="cs-storyboard-v2">
              {[
                { 
                  num: '1', 
                  label: 'Walking normally', 
                  danger: false,
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 4v4M10.5 9.5L12 8l1.5 1.5M12 8v13m-4 0h8" />
                      <circle cx="12" cy="3" r="1" />
                      <rect x="6" y="10" width="12" height="1" rx="0.5" fill="currentColor" fillOpacity="0.1" />
                    </svg>
                  )
                },
                { 
                  num: '2', 
                  label: 'Walker begins to tilt', 
                  danger: false,
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(12deg)' }}>
                      <path d="M12 4v4M10.5 9.5L12 8l1.5 1.5M12 8v13m-4 0h8" />
                      <circle cx="12" cy="3" r="1" />
                      <rect x="6" y="10" width="12" height="1" rx="0.5" fill="currentColor" fillOpacity="0.1" />
                    </svg>
                  )
                },
                { 
                  num: '3', 
                  label: 'User loses balance', 
                  danger: false,
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(25deg)' }}>
                      <path d="M12 4v4M10.5 9.5L12 8l1.5 1.5M12 8v13m-4 0h8" />
                      <circle cx="12" cy="3" r="1" />
                      <rect x="6" y="10" width="12" height="1" rx="0.5" fill="currentColor" fillOpacity="0.1" />
                      <path d="M19 5l2 2m0-2l-2 2" stroke="#e53e3e" strokeWidth="1" />
                    </svg>
                  )
                },
                { 
                  num: '4', 
                  label: 'Fall occurs', 
                  danger: true,
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(70deg) translate(4px, 8px)' }}>
                      <path d="M12 4v4M10.5 9.5L12 8l1.5 1.5M12 8v13m-4 0h8" />
                      <circle cx="12" cy="3" r="1" />
                      <rect x="6" y="10" width="12" height="1" rx="0.5" fill="currentColor" fillOpacity="0.1" />
                    </svg>
                  )
                }
              ].map((f, i) => (
                <div key={i} className="cs-storyboard-item">
                  <div className={`cs-storyboard-card${f.danger ? ' danger' : ''}`}>
                    <div className="frame-number">{f.num}</div>
                    <div className="frame-svg">{f.svg}</div>
                  </div>
                  <div className="cs-storyboard-caption">{f.label}</div>
                </div>
              ))}
            </div>

            <img src="/walksafe_biomechanics.png" alt="Center of Mass vs Base of Support" style={{ width: '100%', maxWidth: '650px', margin: '3rem auto', display: 'block', borderRadius: '12px', border: '1px solid var(--border)' }} />

            <div style={{ background: '#fff5f5', border: '1px solid #feb2b2', borderRadius: '12px', padding: '1.5rem 2rem', textAlign: 'center' }}>
              <p style={{ margin: 0, fontWeight: 600, color: '#c53030', fontSize: '1rem' }}>Fear → Reduced movement → Lower strength → Higher fall risk. The opportunity: not just detecting falls, but <strong>preventing them while restoring confidence</strong>.</p>
            </div>

            <div style={{ margin: '4rem 0', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div style={{ 
                width: '100%', 
                maxWidth: '1200px', 
                background: 'white', 
                border: '1px solid var(--border)', 
                borderRadius: '24px', 
                padding: '2.5rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.03)' 
              }}>
                <img 
                  src="/Fall research.png" 
                  alt="Fall Research Diagrams" 
                  style={{ 
                    width: '100%', 
                    display: 'block', 
                    borderRadius: '12px' 
                  }} 
                />
              </div>
            </div>
          </section>

          {/* ─── SECTION 4: USER RESEARCH ─── */}
          <section id="research" className="cs-section">
            <h2 className="cs-section-title">Research & Validation</h2>
            <p>We conducted 40 interviews across three stakeholder groups in assisted living environments to validate assumptions around assistive devices and map real-world failure points.</p>

            <div className="cs-stakeholder-grid">
              {[
                { img: '/old%20lady.jpg', title: 'Elderly Users', count: '20', desc: 'Mobility anxiety, device abandonment, fear-driven inactivity.' },
                { img: '/Doctor.png', title: 'Physicians', count: '12', desc: 'Fracture patterns, recovery timelines, readmission insights.' },
                { img: '/caretaker.jpg', title: 'Caregivers', count: '8', desc: 'Supervision burden, desire for proactive safety systems.' }
              ].map((card, i) => (
                <div key={i} className="cs-stakeholder-card">
                  <div className="stakeholder-img-wrapper">
                    <img src={card.img} alt={card.title} className="stakeholder-portrait" />
                  </div>
                  <div className="stakeholder-count">{card.count}</div>
                  <div className="stakeholder-title">{card.title}</div>
                  <div className="stakeholder-desc">{card.desc}</div>
                </div>
              ))}
            </div>

            <div className="cs-grid-3" style={{ marginTop: '2rem' }}>
              {[
                { title: 'Passive safety > Active interaction', desc: 'Users preferred systems that work automatically in the background', color: '#2b5440' },
                { title: 'Visibility creates discomfort', desc: 'Highly visible devices negatively affect social confidence', color: '#dd6b20' },
                { title: 'Trust comes from reliability', desc: 'Consistency matters far more than feature complexity', color: '#e53e3e' }
              ].map((insight, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid var(--border)', borderLeft: `4px solid ${insight.color}`, borderRadius: '8px', padding: '1.25rem 1.5rem' }}>
                  <div style={{ fontWeight: 600, marginBottom: '.4rem', fontSize: '.95rem' }}>{insight.title}</div>
                  <div style={{ fontSize: '.85rem', color: '#4a5568' }}>{insight.desc}</div>
                </div>
              ))}
            </div>

            <div className="cs-research-evidence-grid">
              {[
                { img: '/Interviewpic.png', title: 'Interview Sessions', caption: 'Field interview photos from assisted living research.' },
                { img: '/Research%20Questions.png', title: 'Research Questions', caption: 'Question framework used to structure stakeholder conversations.' },
                { img: '/Survey.png', title: 'Survey Findings', caption: 'Survey responses mapped into key behavioral and adoption patterns.' }
              ].map((item) => (
                <figure key={item.title} className="cs-research-evidence-card" tabIndex="0">
                  <img src={item.img} alt={item.title} />
                  <figcaption>
                    <span>{item.title}</span>
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* ─── SECTION 5: MARKET LANDSCAPE ─── */}
          <section id="market" className="cs-section">
            <h2 className="cs-section-title">Existing Solutions Miss the Real Moment</h2>
            <p>We mapped every commercially available fall-related product and found a critical gap in the market.</p>

            <table className="cs-comparison-table">
              <thead><tr><th>Category</th><th>Example</th><th>Approach</th><th>Limitation</th></tr></thead>
              <tbody>
                <tr><td>Protection Gear</td><td>Hip pads, helmets</td><td>Absorb impact</td><td style={{ color: '#e53e3e' }}>Reactive only</td></tr>
                <tr><td>Detection Wearables</td><td>Fall sensors, alerts</td><td>Notify post-fall</td><td style={{ color: '#e53e3e' }}>After-the-fact</td></tr>
                <tr><td>Smart Walkers</td><td>Motorized rollators</td><td>Assist walking</td><td style={{ color: '#e53e3e' }}>No stabilization</td></tr>
              </tbody>
            </table>

            <div style={{ background: '#e8f0ec', borderRadius: '12px', padding: '2rem', textAlign: 'center', border: '1px solid rgba(43,84,64,0.15)' }}>
              <p style={{ margin: 0, fontWeight: 600, color: '#2b5440', fontSize: '1.05rem' }}>
                Most solutions detect falls after they happen. No existing system prevents the walker from tipping itself. <strong>The real opportunity is intervention, not notification.</strong>
              </p>
            </div>

            <div className="cs-market-benchmark">
              <div className="cs-market-benchmark-head">
                <div>
                  <div className="cs-market-kicker">Market Benchmarking Synthesis</div>
                  <h3>Products clustered by the moment they intervene</h3>
                </div>
                <p>
                  The benchmark showed a crowded space around protection, detection, and walking assistance,
                  but a clear gap before impact: automatic stabilization at the walker level.
                </p>
              </div>

              <div className="cs-market-visual-grid" aria-label="Market benchmarking categories">
                {marketBenchmarks.map((item) => (
                  <article key={item.group} className="cs-market-card">
                    <div className="cs-market-card-media" aria-hidden="true">
                      <img className="cs-market-product-img" src={item.image} alt="" />
                    </div>
                    <div className="cs-market-card-body">
                      <div className="cs-market-signal">{item.signal}</div>
                      <h4>{item.group}</h4>
                      <dl>
                        <div>
                          <dt>Examples</dt>
                          <dd>{item.examples}</dd>
                        </div>
                        <div>
                          <dt>How it works</dt>
                          <dd>{item.behavior}</dd>
                        </div>
                        <div>
                          <dt>Strength</dt>
                          <dd>{item.strength}</dd>
                        </div>
                        <div className="cs-market-gap">
                          <dt>Gap</dt>
                          <dd>{item.gap}</dd>
                        </div>
                      </dl>
                    </div>
                  </article>
                ))}
              </div>

              <div className="cs-market-opportunity">
                <div>
                  <span>WALKsafe design opportunity</span>
                  <strong>Move the intervention earlier: from detect/protect to prevent and stabilize.</strong>
                </div>
                <p>
                  This reframed the product direction from another wearable alert system to a passive
                  walker-integrated mechanism that can act without adding cognitive load.
                </p>
              </div>
            </div>
          </section>

          {/* ─── SECTION 6: DESIGN REQUIREMENTS ─── */}
          <section id="requirements" className="cs-section">
            <h2 className="cs-section-title">Prioritizing System Behaviors</h2>
            <p>
              Using a structured decision-making approach, I translated research insights into measurable system requirements and evaluated them using matrix analysis and quality frameworks.
              This ensured that final design decisions were driven by <strong>impact, feasibility, and user relevance</strong> — not assumptions.
            </p>
            <p className="cs-requirements-emphasis">
              Protection and functional integration emerged as the highest priorities, while user feedback ranked lowest — indicating that the system should act passively and reliably without requiring user interaction.
            </p>

            <div className="cs-framework-label">Decision Framework Outcome</div>
            <div className="cs-priority-score-label">Priority Score (0–5 · Derived from Matrix Analysis)</div>
            <div className="cs-radar-panel">
              {[
                { label: 'Protection', score: 5.00, subtext: 'Highest priority for preventing fall impact' },
                { label: 'Functional Integration', score: 4.64, subtext: 'Critical for passive system-level response' },
                { label: 'Prediction Reliability', score: 4.28, subtext: 'Needed to distinguish instability from normal use' },
                { label: 'Easy to Understand', score: 3.93, subtext: 'Supports user trust without additional instruction' },
                { label: 'Unobtrusive', score: 3.93, subtext: 'Minimizes visual and cognitive presence' },
                { label: 'Easy to Use', score: 3.57, subtext: 'Keeps interaction simple for everyday adoption' },
                { label: 'Detection', score: 2.86, subtext: 'Useful, but secondary to active prevention' },
                { label: 'Aesthetics', score: 2.50, subtext: 'Relevant for acceptance, but not the core safety driver' },
                { label: 'Sense of Security', score: 1.43, subtext: 'Emerges from reliable behavior rather than explicit feedback' },
                { label: 'Feedback from User', score: 0.36, subtext: 'Lowest priority to preserve passive operation' }
              ].map((bar, i) => (
                <div key={i} className="cs-radar-bar">
                  <div className="bar-label-row">
                    <div className="bar-label">{bar.label}</div>
                    <div className="bar-score">{bar.score.toFixed(2)} / 5</div>
                  </div>
                  <div className="bar-subtext">{bar.subtext}</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: `${(bar.score / 5) * 100}%` }}></div></div>
                </div>
              ))}
            </div>

            <p className="cs-priority-note">Scores derived from pairwise matrix evaluation of system requirements</p>

            <div className="cs-requirement-evidence-grid">
              {[
                {
                  img: '/Walksafe/House%20of%20quality.png',
                  title: 'House of Quality',
                  caption: 'Mapped user needs to engineering characteristics to reveal which system behaviors mattered most.'
                },
                {
                  img: '/Walksafe/Relative%20Importance.png',
                  title: 'Relative Importance',
                  caption: 'Priority values from matrix analysis, highlighting protection and integration as decision drivers.'
                },
                {
                  img: '/Walksafe/Competetive%20benchmarking.png',
                  title: 'Competitive Benchmarking',
                  caption: 'Compared existing solutions against requirement scores to identify the prevention gap.'
                }
              ].map((item) => (
                <figure key={item.title} className="cs-requirement-evidence-card">
                  <img src={item.img} alt={item.title} />
                  <figcaption>
                    <span>{item.title}</span>
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* ─── SECTION 7: EXPERIMENTS ─── */}
          <section id="experiments" className="cs-section">
            <h2 className="cs-section-title">Validating Detection Behavior</h2>
            <p>We conducted controlled fall experiments across five scenarios to validate that the system could reliably distinguish genuine instability from normal movement.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', margin: '3rem 0' }}>
              {[
                { icon: '⬅️', label: 'Side Fall' },
                { icon: '⬆️', label: 'Front Fall' },
                { icon: '⬇️', label: 'Backward Fall' },
                { icon: '🧱', label: 'Obstacle Collision' },
                { icon: '📐', label: 'Slope Instability' }
              ].map((s, i) => (
                <div key={i} className="cs-storyboard-frame">
                  <div className="frame-icon">{s.icon}</div>
                  <div className="frame-label">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Angular velocity graph */}
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem' }}>
              <div style={{ fontSize: '.75rem', textTransform: 'uppercase', letterSpacing: '.06em', color: '#a0aec0', marginBottom: '1.25rem', fontWeight: 600 }}>IMU Sensor Data — Angular Velocity Spikes Over Time</div>
              <svg width="100%" height="120" viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="100" x2="600" y2="100" stroke="#edf2f7" strokeWidth="1" />
                <line x1="0" y1="60" x2="600" y2="60" stroke="#edf2f7" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="20" x2="600" y2="20" stroke="#edf2f7" strokeWidth="1" strokeDasharray="4 4" />
                <polyline points="0,90 50,88 100,85 130,80 150,70 160,25 170,15 180,30 190,65 220,80 280,85 320,82 350,78 370,30 380,10 390,35 410,75 460,85 520,88 560,80 570,20 580,40 590,80 600,85" stroke="#2b5440" strokeWidth="2" fill="none" />
                <text x="148" y="10" fill="#e53e3e" fontSize="9" fontWeight="600">SPIKE</text>
                <text x="360" y="6" fill="#e53e3e" fontSize="9" fontWeight="600">SPIKE</text>
                <text x="560" y="15" fill="#e53e3e" fontSize="9" fontWeight="600">SPIKE</text>
              </svg>
              <div style={{ fontSize: '.8rem', color: '#718096', marginTop: '.75rem' }}>Angular velocity exceeds 150°/s threshold — marking detection trigger points.</div>
            </div>

            <div className="cs-experiment-evidence-grid">
              {[
                { img: '/Walksafe/Side%20Fall.png', title: 'Side Fall Test', caption: 'Controlled side-fall scenario used to validate lateral instability detection.' },
                { img: '/Walksafe/Front%20fall.png', title: 'Front Fall Test', caption: 'Forward fall scenario used to compare normal movement against trigger thresholds.' }
              ].map((item) => (
                <figure key={item.title} className="cs-experiment-evidence-card">
                  <div className="cs-experiment-image-wrap">
                    <img
                      src={item.img}
                      alt={item.title}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    <span className="cs-experiment-image-fallback">Image pending</span>
                  </div>
                  <figcaption>
                    <span>{item.title}</span>
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>

            <figure className="cs-experiment-evidence-card cs-experiment-evidence-card-wide">
              <div className="cs-experiment-image-wrap">
                <img src="/Walksafe/Arduino.png" alt="Arduino testing setup" />
              </div>
              <figcaption>
                <span>Arduino Testing Setup</span>
                Sensor wiring and bench testing setup used to validate detection thresholds before final mechanism integration.
              </figcaption>
            </figure>
          </section>

          {/* ─── SECTION 8: CONCEPT EXPLORATION ─── */}
          <section id="concepts" className="cs-section">
            <h2 className="cs-section-title">Exploring System Concepts</h2>
            <p>Instead of jumping to solutions, we explored at a functional level — breaking the system into sub-functions, generating multiple approaches, and evaluating each against adoption and trust.</p>

            <div className="cs-concept-scroll" aria-label="Concept exploration scroll">
              {[
                { title: 'Counter Torque', status: 'Rejected', img: '/Walksafe/Rej%201.png', note: 'Heavy, complex, intimidating to users' },
                { title: 'Weight Transfer', status: 'Rejected', img: '/Walksafe/Rej%202.png', note: 'Slow response with a noticeable form factor' },
                { title: 'External Stabilizer Frame', status: 'Rejected', img: '/Walksafe/Rej%203.png', note: 'Increased footprint and reduced everyday usability' },
                { title: 'Wearable Trigger System', status: 'Rejected', img: '/Walksafe/Rej%204.png', note: 'Added user dependency instead of passive protection' },
                { title: 'Deployable Support Legs', status: 'Selected', img: '/Walksafe/Select.png', note: 'Fast, familiar, passive, and integrated into the walker form' }
              ].map((concept, i) => (
                <article key={concept.title} className={`cs-concept-card ${concept.status === 'Selected' ? 'selected' : 'rejected'}`}>
                  <div className="cs-concept-card-head">
                    <h4>{`Concept ${i + 1}: ${concept.title}`}</h4>
                    <span>{concept.status}</span>
                  </div>
                  <div className="cs-concept-image-frame">
                    <img src={concept.img} alt={`${concept.title} concept sketch`} />
                  </div>
                  <p>{concept.note}</p>
                </article>
              ))}
            </div>

            <table className="cs-matrix-table">
              <thead><tr><th>Criteria</th><th>Counter Torque</th><th>Weight Transfer</th><th>Deployable Legs</th></tr></thead>
              <tbody>
                <tr><td>Speed</td><td>★★</td><td>★</td><td style={{ color: '#2b5440', fontWeight: 600 }}>★★★</td></tr>
                <tr><td>Weight</td><td>★</td><td>★</td><td style={{ color: '#2b5440', fontWeight: 600 }}>★★★</td></tr>
                <tr><td>Complexity</td><td>★</td><td>★★</td><td style={{ color: '#2b5440', fontWeight: 600 }}>★★★</td></tr>
                <tr><td>Reliability</td><td>★★</td><td>★★</td><td style={{ color: '#2b5440', fontWeight: 600 }}>★★★</td></tr>
              </tbody>
            </table>
          </section>

          {/* ─── SECTION 9: DESIGN INTELLIGENCE ─── */}
          <section id="tradeoffs" className="cs-section">
            <h2 className="cs-section-title">Design Intelligence — Navigating Tradeoffs</h2>
            <p>The core design challenge: increase safety <strong>without increasing physical or cognitive effort</strong> for elderly users. Every decision balanced competing dimensions.</p>

            <img src="/walksafe_tradeoff.png" alt="Design Tradeoff Radar" style={{ width: '100%', maxWidth: '500px', margin: '3rem auto', display: 'block', borderRadius: '12px', border: '1px solid var(--border)' }} />

            <div className="cs-two-col" style={{ marginTop: '2rem' }}>
              <div className="cs-card" style={{ background: 'white' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '.75rem' }}>Safety versus Weight</h3>
                <p style={{ fontSize: '.9rem', margin: 0 }}>Stronger mechanisms increase protection but add mass. The spring-loaded system achieves <strong>maximum safety at minimal weight</strong>.</p>
              </div>
              <div className="cs-card" style={{ background: 'white' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '.75rem' }}>Complexity versus Adoption</h3>
                <p style={{ fontSize: '.9rem', margin: 0 }}>The system must require zero user intervention — <strong>fully automatic with no learning curve</strong>. This is a UX decision, not just an engineering one.</p>
              </div>
            </div>

            <div className="cs-tradeoff-evidence-grid">
              {[
                {
                  img: '/Walksafe/Cal.png',
                  title: 'Engineering Calculations',
                  caption: 'Force, load, and spring-response calculations used to balance stabilization strength against added weight.'
                },
                {
                  img: '/Walksafe/leg%20design.png',
                  title: 'Deployable Leg Design',
                  caption: 'Mechanism exploration for compact support legs that deploy quickly while preserving the familiar walker form.'
                }
              ].map((item) => (
                <figure key={item.title} className="cs-tradeoff-evidence-card">
                  <img src={item.img} alt={item.title} />
                  <figcaption>
                    <span>{item.title}</span>
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* ─── SECTION 10: FINAL SYSTEM ARCHITECTURE ─── */}
          <section id="architecture" className="cs-section">
            <h2 className="cs-section-title">System Model</h2>
            <p>We modeled the problem as a <strong>system of safety</strong> — input, processing, and output — not just a product. This defined how the system behaves in real-world scenarios.</p>

            <div className="cs-system-model-panel">
              <div className="cs-system-model-header">
                <div>
                  <div className="cs-system-model-kicker">Behavioral Architecture</div>
                  <h3>From instability signal to passive stabilization</h3>
                </div>
                <p>
                  The model separates sensing, decision logic, and mechanical response so the system can act
                  quickly without asking the user to interpret warnings or trigger safety behavior.
                </p>
              </div>

              <div className="cs-system-flow">
                {[
                  { phase: '01', title: 'Sense movement', body: 'IMU captures angular velocity and tilt change from walker motion.', parts: ['User movement', 'MPU6050 sensor'] },
                  { phase: '02', title: 'Validate risk', body: 'Microcontroller checks thresholds and filters false positives before triggering.', parts: ['ATmega MCU', 'Signal verification'] },
                  { phase: '03', title: 'Trigger response', body: 'Actuator releases the mechanical support sequence once instability is confirmed.', parts: ['Solenoid actuator', 'Spring release'] },
                  { phase: '04', title: 'Stabilize walker', body: 'Deployable legs increase base support before the walker tips beyond recovery.', parts: ['Support legs', 'Passive stabilization'] }
                ].map((step, i) => (
                  <article key={step.title} className="cs-system-step">
                    <div className="cs-system-step-index">{step.phase}</div>
                    <h4>{step.title}</h4>
                    <p>{step.body}</p>
                    <div className="cs-system-parts">
                      {step.parts.map((part) => (
                        <span key={part}>{part}</span>
                      ))}
                    </div>
                    {i < 3 && <div className="cs-system-step-arrow">→</div>}
                  </article>
                ))}
              </div>

              <div className="cs-system-placeholder-grid">
                {[
                  { title: 'System Architecture Diagram', caption: 'Placeholder for refined input-processing-output diagram.' },
                  { title: 'Electronics Layout', caption: 'Placeholder for sensor, MCU, actuator, and wiring schematic.' },
                  { title: 'PCB / Circuit Detail', caption: 'Placeholder for board-level implementation and component mapping.' }
                ].map((item) => (
                  <figure key={item.title} className="cs-system-placeholder-card">
                    <div className="cs-system-placeholder-visual">
                      <span>Image Placeholder</span>
                    </div>
                    <figcaption>
                      <span>{item.title}</span>
                      {item.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          {/* ─── SECTION 11: PROTOTYPE & INTERACTIVE WORKFLOW ─── */}
          <section id="prototype" className="cs-section">
            <h2 className="cs-section-title">Final Direction & Validation</h2>
            <p>We chose to enhance an <strong>existing mental model — the walker</strong>. No learning curve, already trusted, seamlessly fits into daily routines. This is a UX decision, not just a product decision.</p>

            {/* 3D Prototype Image */}
            <div style={{ background: 'white', borderRadius: '16px', border: '1px solid var(--border)', padding: '2.5rem', marginTop: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <img src="/walksafe_mechanism.png" alt="Mechanism Close-up" style={{ width: '100%', borderRadius: '10px' }} />
                  <div style={{ fontSize: '.8rem', color: '#718096', textAlign: 'center', marginTop: '.75rem' }}>Spring-loaded deployment mechanism — exploded view</div>
                </div>
                <div>
                  <img src="/walksafe_prototype.png" alt="Full Walker Prototype" style={{ width: '100%', borderRadius: '10px' }} />
                  <div style={{ fontSize: '.8rem', color: '#718096', textAlign: 'center', marginTop: '.75rem' }}>Full prototype with integrated stabilization system</div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="cs-proto-metrics" style={{ marginTop: '3rem' }}>
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
              <h3>US Patent Granted</h3>
              <p>A research-driven assistive technology system combining real-time instability detection with automatic mechanical stabilization — designed around trust, invisibility, and zero cognitive load.</p>
            </div>

            <div className="cs-grid-3" style={{ marginTop: '3rem' }}>
              {[
                { title: 'From Fear to Confidence', desc: 'Transformed the core user experience from anxiety-driven avoidance to supported, independent movement.' },
                { title: 'Invisible Safety System', desc: 'Developed a sub-0.4s detection system that works without any user interaction or awareness.' },
                { title: 'Research-Led Innovation', desc: 'Bridged the gap between passive mobility aids and active safety systems through user-centered, systems-level design.' }
              ].map((c, i) => (
                <div key={i} className="cs-card" style={{ background: 'white', borderLeft: '4px solid #2b5440' }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: '.5rem' }}>{c.title}</h3>
                  <p style={{ fontSize: '.85rem', margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '12px', padding: '3rem', textAlign: 'center', marginTop: '3rem' }}>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--ink)', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto', fontStyle: 'italic' }}>
                "Designing assistive technology is not only about preventing injuries — it is about moving people from fear-driven movement to supported independence."
              </p>
            </div>
          </section>

          {/* ─── SECTION 13: FULL RESEARCH REPORT ─── */}
          <section id="report" className="cs-section">
            <h2 className="cs-section-title">Full Research Documentation</h2>
            <p>The complete project report contains detailed research methodology, user insights, system modeling, sensor data analysis, and design rationale.</p>

            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '16px', padding: '4rem', textAlign: 'center', marginTop: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2b5440" strokeWidth="1.5" style={{ marginBottom: '1.5rem' }}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Complete Project Report</h3>
              <p style={{ color: '#718096', fontSize: '.95rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
                Detailed research documentation including user insights, systems modeling, sensor validation, and full design methodology.
              </p>
              <div style={{ display: 'inline-block', background: '#2b5440', color: 'white', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: 600, fontSize: '.95rem', cursor: 'pointer', boxShadow: '0 4px 12px rgba(43,84,64,0.2)' }}>
                View Complete Project Report →
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
