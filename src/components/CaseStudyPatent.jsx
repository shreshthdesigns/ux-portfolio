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
            <h1 className="cs-title" style={{ fontSize: '3.25rem', lineHeight: 1.08, marginBottom: '1.5rem', letterSpacing: '-0.03em', maxWidth: '900px' }}>
              Walksafe — Designing for Safer Mobility in Elderly
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#4a5568', marginBottom: '2rem', maxWidth: '1200px', lineHeight: 1.6 }}>
              Designing for fall prevention is not just about detecting motion — it's about addressing <strong>fear, confidence, and independence</strong> in everyday movement.
            </p>

            <div style={{ display: 'flex', gap: '3rem', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)', padding: '1.5rem 0', marginBottom: '3rem', flexWrap: 'wrap' }}>
              {[
                { label: 'Role', value: 'UX Researcher / Systems Designer' },
                { label: 'Duration', value: '5 months' },
                { label: 'Outcome', value: 'US Patent Granted' }
              ].map((m, i) => (
                <div key={i}>
                  <div style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: '.1em', color: '#a0aec0', marginBottom: '.35rem' }}>{m.label}</div>
                  <div style={{ fontWeight: 500, fontSize: '.95rem' }}>{m.value}</div>
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
                <img src="/WS PATENT INTRO.png" alt="WALKsafe System" style={{ width: '100%', borderRadius: '12px', marginBottom: '2rem' }} />
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {[
                    { label: 'Instability Detection', icon: '📡' },
                    { label: 'Real-time Processing', icon: '⚡' },
                    { label: 'Rapid Stabilization', icon: '🛡️' }
                  ].map((tag, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '.5rem', background: '#e8f0ec', border: '1px solid rgba(43,84,64,0.15)', borderRadius: '100px', padding: '.5rem 1rem', fontSize: '.8rem', fontWeight: 600, color: '#2b5440' }}>
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
            <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>

              {/* LEFT — Mechanism Flowchart */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ background: 'white', borderRadius: '16px', border: '1px solid var(--border)', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
                  <img src="/Mechanism Flowchart.png" alt="System Flow — From user movement to fall prevention" style={{ maxWidth: '400px', width: '100%', display: 'block', borderRadius: '8px' }} />
                </div>
              </div>

              {/* RIGHT — Compact Impact */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                {/* Label */}
                <div style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: '.14em', color: '#a0aec0', fontWeight: 600 }}>Impact</div>

                {/* Headline */}
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.2, margin: 0 }}>
                  Real-time fall prevention system
                </h3>

                {/* Metrics Row */}
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                  {[
                    { value: '0.4s', label: 'Detection' },
                    { value: '0.7s', label: 'Response' },
                    { value: 'Patent', label: 'US Granted' }
                  ].map((m, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                      <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#2b5440', lineHeight: 1 }}>{m.value}</div>
                      <div style={{ fontSize: '.75rem', color: '#718096', marginTop: '.25rem', fontWeight: 500 }}>{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Keyword Tags */}
                <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
                  {['Instability Detection', 'Real-time Processing', 'Passive Safety', 'Low Cognitive Load'].map((tag, i) => (
                    <span key={i} style={{ background: '#e8f0ec', border: '1px solid rgba(43,84,64,0.12)', borderRadius: '100px', padding: '.35rem .85rem', fontSize: '.72rem', fontWeight: 600, color: '#2b5440' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Micro Line */}
                <p style={{ fontSize: '.85rem', color: '#a0aec0', margin: 0, fontStyle: 'italic' }}>
                  Prevents falls before impact
                </p>

                {/* Explore CTA */}
                <div>
                  <a href="#timeline" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', color: '#2b5440', fontWeight: 600, fontSize: '.95rem', textDecoration: 'none', borderBottom: '2px solid #2b5440', paddingBottom: '.25rem' }}>
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

            <div style={{ marginTop: '3rem' }}>

              {/* TIME AXIS */}
              <div style={{ position: 'relative', marginBottom: '0.5rem', paddingLeft: '140px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                  {[0, 3, 6, 9, 12].map((m) => (
                    <div key={m} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '0' }}>
                      <div style={{ fontSize: '.65rem', color: '#a0aec0', fontWeight: 600, marginBottom: '.35rem' }}>{m === 0 ? 'Start' : `${m}mo`}</div>
                      <div style={{ width: '1px', height: '8px', background: '#cbd5e0' }}></div>
                    </div>
                  ))}
                </div>
                <div style={{ height: '1px', background: '#e2e8f0', marginTop: '-1px' }}></div>
              </div>

              {/* PHASE ROWS */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                {/* Phase 1: Understanding — Month 0–3 (25% width) */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0' }}>
                  <div style={{ width: '140px', flexShrink: 0, paddingRight: '1rem', paddingTop: '.6rem' }}>
                    <div style={{ fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.1em', color: '#a0aec0', fontWeight: 600, marginBottom: '.2rem' }}>Phase 1</div>
                    <div style={{ fontSize: '.85rem', fontWeight: 600, color: 'var(--ink)' }}>Understanding</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ width: '25%', background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '.6rem 1rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                      {['Observation', 'Framing', 'Research'].map((t, i) => (
                        <span key={i} style={{ fontSize: '.72rem', color: '#64748b', fontWeight: 500 }}>{t}{i < 2 ? <span style={{ color: '#cbd5e0', margin: '0 .15rem' }}> · </span> : ''}</span>
                      ))}
                    </div>
                    {/* Detail cards */}
                    <div style={{ width: '25%', display: 'flex', gap: '.5rem', marginTop: '.5rem' }}>
                      <div style={{ flex: 1, fontSize: '.68rem', color: '#94a3b8', lineHeight: 1.4 }}>
                        Identified predictable fall patterns through field observation
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 2: Defining & Exploring — Month 3–7 (33% width, offset 25%) */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0' }}>
                  <div style={{ width: '140px', flexShrink: 0, paddingRight: '1rem', paddingTop: '.6rem' }}>
                    <div style={{ fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.1em', color: '#a0aec0', fontWeight: 600, marginBottom: '.2rem' }}>Phase 2</div>
                    <div style={{ fontSize: '.85rem', fontWeight: 600, color: 'var(--ink)' }}>Defining</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ marginLeft: '25%', width: '33.3%', background: '#eef2f6', border: '1px solid #dce3ea', borderRadius: '8px', padding: '.6rem 1rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                      {['Validation', 'Exploration'].map((t, i) => (
                        <span key={i} style={{ fontSize: '.72rem', color: '#475569', fontWeight: 500 }}>{t}{i < 1 ? <span style={{ color: '#cbd5e0', margin: '0 .15rem' }}> · </span> : ''}</span>
                      ))}
                    </div>
                    <div style={{ marginLeft: '25%', width: '33.3%', display: 'flex', gap: '.5rem', marginTop: '.5rem' }}>
                      <div style={{ flex: 1, fontSize: '.68rem', color: '#94a3b8', lineHeight: 1.4 }}>
                        40 interviews across users, physicians & caregivers
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 3: Validation — Month 7–9 (16.6% width, offset 58.3%) */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0' }}>
                  <div style={{ width: '140px', flexShrink: 0, paddingRight: '1rem', paddingTop: '.6rem' }}>
                    <div style={{ fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.1em', color: '#a0aec0', fontWeight: 600, marginBottom: '.2rem' }}>Phase 3</div>
                    <div style={{ fontSize: '.85rem', fontWeight: 600, color: 'var(--ink)' }}>Validation</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ marginLeft: '58.3%', width: '16.6%', background: '#e5ede8', border: '1px solid #c8d9cf', borderRadius: '8px', padding: '.6rem 1rem', minWidth: '120px' }}>
                      <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                        {['System Design', 'Testing'].map((t, i) => (
                          <span key={i} style={{ fontSize: '.72rem', color: '#374a3e', fontWeight: 500 }}>{t}{i < 1 ? <span style={{ color: '#a3bfad', margin: '0 .15rem' }}> · </span> : ''}</span>
                        ))}
                      </div>
                    </div>
                    <div style={{ marginLeft: '58.3%', width: '16.6%', display: 'flex', gap: '.5rem', marginTop: '.5rem', minWidth: '120px' }}>
                      <div style={{ flex: 1, fontSize: '.68rem', color: '#94a3b8', lineHeight: 1.4 }}>
                        Fall simulations & sensor threshold calibration
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 4: Delivery — Month 9–12 (25% width, offset 75%) */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0' }}>
                  <div style={{ width: '140px', flexShrink: 0, paddingRight: '1rem', paddingTop: '.6rem' }}>
                    <div style={{ fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.1em', color: '#a0aec0', fontWeight: 600, marginBottom: '.2rem' }}>Phase 4</div>
                    <div style={{ fontSize: '.85rem', fontWeight: 600, color: '#2b5440' }}>Delivery</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ marginLeft: '75%', width: '25%', background: '#e8f0ec', border: '1px solid rgba(43,84,64,0.2)', borderRadius: '8px', padding: '.6rem 1rem', minWidth: '160px' }}>
                      <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                        {['Prototype', 'TRL-3', 'Patent'].map((t, i) => (
                          <span key={i} style={{ fontSize: '.72rem', color: '#2b5440', fontWeight: 600 }}>{t}{i < 2 ? <span style={{ color: '#8ab59c', margin: '0 .15rem' }}> · </span> : ''}</span>
                        ))}
                      </div>
                    </div>
                    <div style={{ marginLeft: '75%', width: '25%', display: 'flex', gap: '.5rem', marginTop: '.5rem', minWidth: '160px' }}>
                      <div style={{ flex: 1, fontSize: '.68rem', color: '#94a3b8', lineHeight: 1.4 }}>
                        Functional prototype validated · US Patent Granted
                      </div>
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

            <div className="cs-storyboard">
              {[
                { num: '1', icon: '🚶', label: 'Walking normally', danger: false },
                { num: '2', icon: '↗️', label: 'Walker begins to tilt', danger: false },
                { num: '3', icon: '⚠️', label: 'User loses balance', danger: false },
                { num: '4', icon: '💥', label: 'Fall occurs', danger: true }
              ].map((f, i) => (
                <div key={i} className={`cs-storyboard-frame${f.danger ? ' danger' : ''}`}>
                  <div className="frame-number">{f.num}</div>
                  <div className="frame-icon">{f.icon}</div>
                  <div className="frame-label">{f.label}</div>
                </div>
              ))}
            </div>

            <img src="/walksafe_biomechanics.png" alt="Center of Mass vs Base of Support" style={{ width: '100%', maxWidth: '650px', margin: '3rem auto', display: 'block', borderRadius: '12px', border: '1px solid var(--border)' }} />

            <div style={{ background: '#fff5f5', border: '1px solid #feb2b2', borderRadius: '12px', padding: '1.5rem 2rem', textAlign: 'center' }}>
              <p style={{ margin: 0, fontWeight: 600, color: '#c53030', fontSize: '1rem' }}>Fear → Reduced movement → Lower strength → Higher fall risk. The opportunity: not just detecting falls, but <strong>preventing them while restoring confidence</strong>.</p>
            </div>

            {placeholderBox('Add fall research diagrams / observations')}
          </section>

          {/* ─── SECTION 4: USER RESEARCH ─── */}
          <section id="research" className="cs-section">
            <h2 className="cs-section-title">Research & Validation</h2>
            <p>We conducted 40 interviews across three stakeholder groups in assisted living environments to validate assumptions around assistive devices and map real-world failure points.</p>

            <div className="cs-grid-3" style={{ marginTop: '3rem' }}>
              {[
                { icon: '👴', title: 'Elderly Users', count: '20', desc: 'Mobility anxiety, device abandonment, fear-driven inactivity.' },
                { icon: '👩‍⚕️', title: 'Physicians', count: '12', desc: 'Fracture patterns, recovery timelines, readmission insights.' },
                { icon: '👨', title: 'Caregivers', count: '8', desc: 'Supervision burden, desire for proactive safety systems.' }
              ].map((card, i) => (
                <div key={i} className="cs-card" style={{ background: 'white', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '.75rem' }}>{card.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: '1.5rem', color: '#2b5440', marginBottom: '.25rem' }}>{card.count}</div>
                  <div style={{ fontWeight: 600, marginBottom: '.5rem', fontSize: '.95rem' }}>{card.title}</div>
                  <div style={{ fontSize: '.85rem', color: '#4a5568', lineHeight: 1.5 }}>{card.desc}</div>
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

            <div className="cs-grid-3" style={{ marginTop: '2rem' }}>
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

            {placeholderBox('Add market research visuals')}
          </section>

          {/* ─── SECTION 6: DESIGN REQUIREMENTS ─── */}
          <section id="requirements" className="cs-section">
            <h2 className="cs-section-title">Prioritizing System Behaviors</h2>
            <p>Using a structured matrix, we ranked system requirements. <strong>Protection and integration ranked highest; user feedback ranked lowest</strong> — the system should act silently and intelligently.</p>

            <div className="cs-radar-panel">
              {[
                { label: 'Fall Prevention Speed', pct: '95' },
                { label: 'System Response Time', pct: '88' },
                { label: 'Weight & Portability', pct: '72' },
                { label: 'Unobtrusiveness', pct: '80' },
                { label: 'Zero Learning Curve', pct: '92' },
                { label: 'Low Maintenance', pct: '85' }
              ].map((bar, i) => (
                <div key={i} className="cs-radar-bar">
                  <div className="bar-label">{bar.label}</div>
                  <div className="bar-track"><div className="bar-fill" style={{ width: `${bar.pct}%` }}></div></div>
                </div>
              ))}
            </div>

            {placeholderBox('Add requirement tables / technical benchmarks')}
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

            <div className="cs-two-col" style={{ marginTop: '2rem' }}>
              {placeholderBox('Add experiment photos')}
              {placeholderBox('Add Arduino testing setup images')}
            </div>
            {placeholderBox('Add sensor graphs')}
          </section>

          {/* ─── SECTION 8: CONCEPT EXPLORATION ─── */}
          <section id="concepts" className="cs-section">
            <h2 className="cs-section-title">Exploring System Concepts</h2>
            <p>Instead of jumping to solutions, we explored at a functional level — breaking the system into sub-functions, generating multiple approaches, and evaluating each against adoption and trust.</p>

            <div className="cs-concept-grid">
              <div className="cs-concept-card">
                <h4>Concept 1: Counter Torque</h4>
                <div style={{ fontSize: '.9rem', color: '#4a5568', marginBottom: '1rem', lineHeight: 1.5 }}>Gyroscopic motors apply counter-rotational force to resist tipping.</div>
                <div style={{ color: '#e53e3e', fontWeight: 600, fontSize: '.8rem' }}>✕ Heavy, complex, intimidating to users</div>
              </div>
              <div className="cs-concept-card">
                <h4>Concept 2: Weight Transfer</h4>
                <div style={{ fontSize: '.9rem', color: '#4a5568', marginBottom: '1rem', lineHeight: 1.5 }}>Shifting internal weight to counterbalance the tilt direction.</div>
                <div style={{ color: '#e53e3e', fontWeight: 600, fontSize: '.8rem' }}>✕ Slow response, noticeable form factor</div>
              </div>
              <div className="cs-concept-card selected">
                <h4>Concept 3: Deployable Support Legs</h4>
                <div style={{ fontSize: '.9rem', color: '#4a5568', marginBottom: '1rem', lineHeight: 1.5 }}>Spring-loaded legs deploy laterally upon instability detection — enhancing an existing, trusted form factor.</div>
                <div style={{ color: '#2b5440', fontWeight: 600, fontSize: '.8rem' }}>✓ Fast &nbsp;&nbsp; ✓ Invisible &nbsp;&nbsp; ✓ Familiar &nbsp;&nbsp; ✓ Zero learning curve</div>
              </div>
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

            {placeholderBox('Add concept sketches')}
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

            <div className="cs-two-col" style={{ marginTop: '1.5rem' }}>
              {placeholderBox('Add engineering calculations')}
              {placeholderBox('Add mechanism diagrams')}
            </div>
          </section>

          {/* ─── SECTION 10: FINAL SYSTEM ARCHITECTURE ─── */}
          <section id="architecture" className="cs-section">
            <h2 className="cs-section-title">System Model</h2>
            <p>We modeled the problem as a <strong>system of safety</strong> — input, processing, and output — not just a product. This defined how the system behaves in real-world scenarios.</p>

            <img src="/walksafe_system_arch.png" alt="System Architecture Diagram" style={{ width: '100%', maxWidth: '800px', margin: '3rem auto 2rem', display: 'block', borderRadius: '12px', border: '1px solid var(--border)', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }} />

            <div className="cs-patent-flow" style={{ maxWidth: '420px' }}>
              {['User Movement', 'IMU Motion Sensing', 'Risk Analysis', 'Signal Verification', 'Solenoid Trigger', 'Spring Mechanism', 'Support Legs Deploy', 'Walker Stabilizes'].map((step, i) => (
                <div key={i}>
                  <div className={`cs-patent-flow-node${i >= 4 ? ' highlight' : ''}`}>{step}</div>
                  {i < 7 && <div className="cs-patent-flow-arrow">↓</div>}
                </div>
              ))}
            </div>

            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem', marginTop: '3rem' }}>
              <div style={{ fontSize: '.75rem', textTransform: 'uppercase', letterSpacing: '.06em', color: '#a0aec0', marginBottom: '1rem', fontWeight: 600 }}>Hardware Stack</div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {['MPU6050 Sensor', 'ATmega MCU', 'Solenoid Actuator', 'Spring Mechanism'].map((c, i) => (
                  <div key={i} style={{ background: i < 2 ? '#f7fafc' : '#e8f0ec', border: '1px solid var(--border)', borderRadius: '8px', padding: '.75rem 1.25rem', fontWeight: 500, fontSize: '.85rem', color: i < 2 ? '#4a5568' : '#2b5440' }}>{c}</div>
                ))}
              </div>
            </div>

            <div className="cs-two-col" style={{ marginTop: '2rem' }}>
              {placeholderBox('Add electronics diagrams')}
              {placeholderBox('Add PCB designs')}
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
