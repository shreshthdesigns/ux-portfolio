import { useEffect, useState } from "react";
import "../styles/patent-editorial.css";

/* ── Animated demo widget ── */
const WALKsafeDemo = () => {
  const [phase, setPhase] = useState(0);

  const phases = [
    { title: 'Normal Walking',      status: 'IDLE',       color: '#1B4332', desc: 'Walker upright. All systems monitoring. IMU sampling at 100 Hz.' },
    { title: 'Tilt Detected',       status: 'ALERT',      color: '#B45309', desc: 'Angular velocity spike exceeds 150°/s. Instability confirmed.' },
    { title: 'Processing Signal',   status: 'PROCESSING', color: '#92400E', desc: 'MCU verifying tilt pattern and filtering false positives. Decision in 0.2 s.' },
    { title: 'Deploying Legs',      status: 'DEPLOY',     color: '#B91C1C', desc: 'Solenoid triggered. Spring mechanism releasing. Legs extending laterally.' },
    { title: 'Walker Stabilized',   status: 'SAFE',       color: '#1B4332', desc: 'Support legs locked. Center of mass within base of support. Fall prevented.' },
  ];

  useEffect(() => {
    const durations = [3000, 2500, 2500, 2500, 3000];
    const t = setTimeout(() => setPhase(p => (p + 1) % 5), durations[phase]);
    return () => clearTimeout(t);
  }, [phase]);

  const p = phases[phase];

  return (
    <div className="ws2-demo">
      <div className="ws2-demo-chrome">
        <div className="ws2-chrome-dot" style={{ background: '#F87171' }} />
        <div className="ws2-chrome-dot" style={{ background: '#FBBF24' }} />
        <div className="ws2-chrome-dot" style={{ background: '#34D399' }} />
        <span className="ws2-chrome-title">WALKsafe · Live System State</span>
      </div>
      <div className="ws2-demo-body">
        {/* Walker illustration */}
        <div className="ws2-demo-visual">
          <svg viewBox="0 0 200 260" width="180" height="230" xmlns="http://www.w3.org/2000/svg"
            style={{ transform: phase === 1 ? 'rotate(6deg)' : phase === 2 ? 'rotate(10deg)' : 'none', transition: 'transform 0.5s ease' }}>
            <rect x="50" y="30" width="100" height="8" rx="4" fill="#CBD5E0" />
            <rect x="55" y="30" width="6" height="120" rx="3" fill="#D1D5DB" />
            <rect x="139" y="30" width="6" height="120" rx="3" fill="#D1D5DB" />
            <rect x="50" y="80" width="100" height="6" rx="3" fill="#E5E7EB" />
            <circle cx="58" cy="155" r="12" fill="none" stroke="#9CA3AF" strokeWidth="2.5" />
            <circle cx="142" cy="155" r="12" fill="none" stroke="#9CA3AF" strokeWidth="2.5" />
            <rect x="88" y="25" width="24" height="10" rx="3" fill={phase >= 1 ? '#B45309' : '#1B4332'} opacity={phase >= 1 ? 1 : 0.7}>
              {phase >= 1 && phase <= 2 && <animate attributeName="opacity" values="1;0.3;1" dur="0.7s" repeatCount="indefinite" />}
            </rect>
            <rect x="80" y="72" width="40" height="14" rx="4" fill={phase >= 2 ? '#92400E' : '#4B5563'} opacity={phase >= 2 ? 1 : 0.5}>
              {phase === 2 && <animate attributeName="opacity" values="1;0.2;1" dur="0.45s" repeatCount="indefinite" />}
            </rect>
            <line x1="45" y1="150" x2={phase >= 3 ? "12" : "45"} y2={phase >= 3 ? "182" : "150"}
              stroke={phase >= 3 ? '#B91C1C' : '#D1D5DB'} strokeWidth={phase >= 3 ? "4" : "2"} strokeLinecap="round"
              style={{ transition: 'all 0.4s ease' }} />
            <line x1="155" y1="150" x2={phase >= 3 ? "188" : "155"} y2={phase >= 3 ? "182" : "150"}
              stroke={phase >= 3 ? '#B91C1C' : '#D1D5DB'} strokeWidth={phase >= 3 ? "4" : "2"} strokeLinecap="round"
              style={{ transition: 'all 0.4s ease' }} />
            {phase >= 3 && <circle cx="12" cy="185" r="5" fill="#B91C1C" />}
            {phase >= 3 && <circle cx="188" cy="185" r="5" fill="#B91C1C" />}
            <text x="100" y="17" textAnchor="middle" fontSize="7.5" fill="#9CA3AF" fontWeight="600" letterSpacing="0.05em">IMU SENSOR</text>
            <text x="100" y="100" textAnchor="middle" fontSize="7" fill="#9CA3AF">MCU</text>
          </svg>
        </div>

        {/* Status panel */}
        <div className="ws2-demo-panel">
          <div className="ws2-status-chip" style={{ color: p.color, borderColor: p.color, background: `${p.color}12` }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: p.color, display: 'inline-block' }} />
            {p.status}
          </div>
          <div className="ws2-status-title">{p.title}</div>
          <div className="ws2-status-desc">{p.desc}</div>

          <div className="ws2-pipeline">
            {phases.map((step, i) => (
              <div key={i} className="ws2-pipeline-step">
                <div className="ws2-pipeline-dot" style={{ background: i <= phase ? step.color : '#E5E7EB' }}>
                  {i < phase ? '✓' : i + 1}
                </div>
                {i < 4 && (
                  <div className="ws2-pipeline-line"
                    style={{ background: i < phase ? step.color : '#E5E7EB' }} />
                )}
              </div>
            ))}
          </div>
          <div className="ws2-pipeline-labels">
            <span>Idle</span><span>Detect</span><span>Process</span><span>Deploy</span><span>Safe</span>
          </div>

          <div className="ws2-live-data">
            <div className="ws2-data-row">
              <span className="ws2-data-key">Angular Velocity</span>
              <span style={{ fontWeight: 600, color: phase >= 1 && phase <= 2 ? '#B91C1C' : '#1B4332' }}>
                {phase === 0 ? '12°/s' : phase === 1 ? '187°/s' : phase === 2 ? '165°/s' : phase === 3 ? '45°/s' : '8°/s'}
              </span>
            </div>
            <div className="ws2-data-row">
              <span className="ws2-data-key">System State</span>
              <span style={{ fontWeight: 600, color: p.color }}>{p.status}</span>
            </div>
            <div className="ws2-data-row">
              <span className="ws2-data-key">Response Time</span>
              <span style={{ fontWeight: 600, color: '#374151' }}>{phase >= 4 ? '0.38 s' : phase >= 3 ? '0.31 s' : 'Monitoring'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Main component ── */
export default function CaseStudyPatent({ onBack, activeSection, displaySections }) {

  const marketBenchmarks = [
    {
      group: 'Impact protection',
      examples: 'Hip pads, protective belts, fall jackets',
      behavior: 'Reduces injury after the fall has already happened',
      strength: 'Useful for fracture protection',
      gap: 'Reactive only. The person still hits the ground.',
      signal: 'Post-fall protection',
      image: '/Walksafe/Impact.png'
    },
    {
      group: 'Detection wearables',
      examples: 'Fall sensors, alarm pendants, detector belts',
      behavior: 'Detects a fall and triggers a caregiver notification',
      strength: 'Improves response time and caregiver awareness',
      gap: 'Still after-the-fact. The user has already fallen.',
      signal: 'Notification system',
      image: '/Walksafe/Detection.png'
    },
    {
      group: 'Guidance aids',
      examples: 'Laser guides, audio cues, gait feedback devices',
      behavior: 'Provides rhythmic cues during walking',
      strength: 'Supports gait rhythm and user awareness',
      gap: 'Depends entirely on user attention. No hardware stabilization.',
      signal: 'User-led correction',
      image: '/Walksafe/Guidance.png'
    },
    {
      group: 'Mobility devices',
      examples: 'Smart walkers, motorized rollators',
      behavior: 'Assists movement and navigation',
      strength: 'Improves general mobility support',
      gap: 'No automatic anti-tip response. Can add functional complexity.',
      signal: 'Walking assistance',
      image: '/Walksafe/Mobility.png'
    }
  ];

  return (
    <div className="cs-patent-v2">

      {/* ── Sticky Nav ── */}
      <nav className="ws-nav">
        <div className="ws-nav-inner">
          <button className="ws-nav-back" onClick={onBack}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Work
          </button>
          <div className="ws-nav-divider" />
          <nav className="ws-nav-links">
            {displaySections.map(s => {
              let active = false;
              if (s.id === 'overview') active = ['overview', 'snapshot', 'timeline'].includes(activeSection);
              else if (s.id === 'problem') active = ['problem', 'research', 'market', 'requirements'].includes(activeSection);
              else if (s.id === 'experiments') active = ['experiments', 'concepts', 'tradeoffs'].includes(activeSection);
              else if (s.id === 'architecture') active = ['architecture', 'prototype'].includes(activeSection);
              else if (s.id === 'impact') active = ['impact', 'report'].includes(activeSection);
              return (
                <a key={s.id} href={`#${s.id}`} className={`ws-nav-link${active ? ' active' : ''}`}>
                  {s.label}
                </a>
              );
            })}
          </nav>
        </div>
      </nav>

      <div className="ws-wrap">

        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section id="overview" className="ws-hero">
          <div className="ws-hero-kicker">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Research-Led Systems Design · Indian Patent
          </div>

          <h1 className="ws-hero-h1">
            Walksafe<br />
            Designing for Safer Mobility in Old Age
          </h1>

          <p className="ws-hero-sub">
            Designing for fall prevention is not just about detecting motion.
            It is about addressing fear, confidence, and independence in everyday movement.
            This project started with people and ended with a patent.
          </p>

          <div className="ws-meta-row">
            <div className="ws-meta-item">
              <div className="ws-meta-label">Role</div>
              <div className="ws-meta-value">UX Researcher, Systems Designer</div>
            </div>
            <div className="ws-meta-sep" />
            <div className="ws-meta-item">
              <div className="ws-meta-label">Duration</div>
              <div className="ws-meta-value">5 months</div>
            </div>
            <div className="ws-meta-sep" />
            <div className="ws-meta-item">
              <div className="ws-meta-label">Outcome</div>
              <div className="ws-meta-value">Indian Patent Granted</div>
            </div>
            <div className="ws-meta-badge">
              <span className="ws-meta-badge-dot" />
              Patent Granted
            </div>
          </div>

          <WALKsafeDemo />
        </section>

        {/* ══════════════════════════════════════════
            SNAPSHOT
        ══════════════════════════════════════════ */}
        <section id="snapshot" className="ws-section">
          <div className="ws-kicker">Overview</div>
          <h2 className="ws-section-h2">What this project is, and why it matters</h2>

          <div className="ws-snapshot-grid">
            <div>
              <img src="/WS PATENT INTRO.png" alt="WALKsafe System" className="ws-snapshot-img" />
            </div>
            <div className="ws-snapshot-facts">
              {[
                { label: 'Problem', body: 'Falls among the elderly are tied to behavior and emotion, not just physical imbalance. Fear of falling creates a cycle that reduces movement and increases risk.' },
                { label: 'Insight', body: 'People preferred safety systems that work invisibly in the background. Trust comes from consistency, not from features they have to learn.' },
                { label: 'Approach', body: 'A structured exploration across prediction, detection, and protection that led to a system-level intervention rather than another wearable.' },
                { label: 'System', body: 'Real-time motion sensing, threshold-based fall prediction, and automatic mechanical stabilization, all integrated into the walker itself.' },
                { label: 'Outcome', body: 'Functional prototype validated. Detection under 0.4 s, deployment under 0.7 s. Indian Patent granted.' }
              ].map((f, i) => (
                <div key={i} className="ws-fact-row">
                  <div className="ws-fact-label">{f.label}</div>
                  <div className="ws-fact-body">{f.body}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="ws-metrics-strip">
            {[
              { value: '<0.4s', label: 'Fall Detection' },
              { value: '<0.7s', label: 'Leg Deployment' },
              { value: 'Patent', label: 'Indian Granted' }
            ].map((m, i) => (
              <div key={i} className="ws-metric-cell">
                <div className="ws-metric-val">{m.value}</div>
                <div className="ws-metric-lbl">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="ws-mech-row">
            <div className="ws-mech-img-frame">
              <img src="/Mechanism Flowchart.png" alt="System flow from user movement to fall prevention" />
            </div>
            <div>
              <div className="ws-kicker">System Flow</div>
              <h3 style={{ fontFamily: 'var(--ws-serif)', fontWeight: 400, fontSize: '1.3rem', color: 'var(--ws-ink)', marginBottom: '1rem', lineHeight: 1.3 }}>
                From instability signal to passive stabilization
              </h3>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--ws-muted)', marginBottom: '1.5rem' }}>
                The system senses motion, validates the signal, and triggers a mechanical response
                before the walker tips beyond the point of recovery. No user action required.
              </p>
              <div className="ws-mech-tags">
                {['Instability Detection', 'Real-time Processing', 'Passive Safety', 'Low Cognitive Load'].map(t => (
                  <span key={t} className="ws-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            TIMELINE
        ══════════════════════════════════════════ */}
        <section id="timeline" className="ws-section">
          <div className="ws-kicker">Research Journey</div>
          <h2 className="ws-section-h2">Research and Design Journey</h2>
          <p className="ws-section-lead">
            A 12-month structured exploration from observing real-world failure patterns to delivering
            a validated system-level intervention.
          </p>

          <div className="ws-timeline">
            {[
              {
                phase: 'Phase 1', name: 'Understanding',
                tags: ['Observation', 'Framing', 'Research'], accent: false,
                desc: 'Identified predictable fall patterns through field observation'
              },
              {
                phase: 'Phase 2', name: 'Defining',
                tags: ['Validation', 'Exploration'], accent: false,
                desc: '40 interviews across users, physicians, and caregivers'
              },
              {
                phase: 'Phase 3', name: 'Validation',
                tags: ['System Design', 'Testing'], accent: false,
                desc: 'Fall simulations and sensor threshold calibration'
              },
              {
                phase: 'Phase 4', name: 'Delivery',
                tags: ['Prototype', 'TRL-3', 'Patent'], accent: true,
                desc: 'Functional prototype validated. Indian Patent granted.'
              }
            ].map((row, i) => (
              <div key={i} className="ws-timeline-row">
                <div className="ws-tl-left">
                  <div className="ws-tl-phase">{row.phase}</div>
                  <div className="ws-tl-name">{row.name}</div>
                </div>
                <div className="ws-tl-right">
                  <div className="ws-tl-tags">
                    {row.tags.map(t => (
                      <span key={t} className={`ws-tl-tag${row.accent ? ' accent' : ''}`}>{t}</span>
                    ))}
                  </div>
                  <div className={`ws-tl-desc${row.accent ? ' highlighted' : ''}`}>{row.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            PROBLEM
        ══════════════════════════════════════════ */}
        <section id="problem" className="ws-section">
          <div className="ws-kicker">Problem Discovery</div>
          <h2 className="ws-section-h2">Fall risk, beyond the physical</h2>
          <p className="ws-section-lead">
            Falls among the elderly are not just physical incidents. They are tied to behavior and emotion.
            Reduced balance, low awareness of risk, and fear of falling create a self-reinforcing cycle
            that is harder to break than the fall itself.
          </p>

          <div className="ws-storyboard">
            {[
              {
                num: '01', label: 'Walking normally', danger: false,
                svg: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="3" r="1.2" /><path d="M12 4.5v4.5M10.5 10.5l1.5-1.5 1.5 1.5M12 9v12M8 21h8" />
                  </svg>
                )
              },
              {
                num: '02', label: 'Walker begins to tilt', danger: false,
                svg: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ transform: 'rotate(12deg)' }}>
                    <circle cx="12" cy="3" r="1.2" /><path d="M12 4.5v4.5M10.5 10.5l1.5-1.5 1.5 1.5M12 9v12M8 21h8" />
                  </svg>
                )
              },
              {
                num: '03', label: 'Balance is lost', danger: false,
                svg: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ transform: 'rotate(28deg)' }}>
                    <circle cx="12" cy="3" r="1.2" /><path d="M12 4.5v4.5M10.5 10.5l1.5-1.5 1.5 1.5M12 9v12M8 21h8" />
                    <path d="M19 5l1.5 1.5M19 6.5L20.5 5" stroke="#B91C1C" strokeWidth="1.2" />
                  </svg>
                )
              },
              {
                num: '04', label: 'Fall occurs', danger: true,
                svg: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ transform: 'rotate(72deg) translate(3px, 6px)' }}>
                    <circle cx="12" cy="3" r="1.2" /><path d="M12 4.5v4.5M10.5 10.5l1.5-1.5 1.5 1.5M12 9v12M8 21h8" />
                  </svg>
                )
              }
            ].map((f, i) => (
              <div key={i} className={`ws-sb-frame${f.danger ? ' danger' : ''}`}>
                <div className="ws-sb-num">{f.num}</div>
                <div className="ws-sb-icon" style={{ width: 60, height: 60 }}>{f.svg}</div>
                <div className="ws-sb-label">{f.label}</div>
              </div>
            ))}
          </div>

          <div className="ws-insight-callout">
            <p>
              Fear leads to reduced movement. Reduced movement leads to weaker muscles.
              Weaker muscles increase fall risk. The opportunity was not just to detect falls,
              but to <strong>prevent them while restoring confidence in movement.</strong>
            </p>
          </div>

          <div className="ws-biomech-wrap">
            <img src="/walksafe_biomechanics.png" alt="Center of mass versus base of support diagram" />
          </div>

          <div className="ws-research-img-card">
            <img src="/Fall research.png" alt="Fall research diagrams" />
          </div>
        </section>

        {/* ══════════════════════════════════════════
            RESEARCH
        ══════════════════════════════════════════ */}
        <section id="research" className="ws-section">
          <div className="ws-kicker">User Research</div>
          <h2 className="ws-section-h2">Research and Validation</h2>
          <p className="ws-section-lead">
            We spoke to 40 people across three groups in assisted living environments.
            The goal was to validate what we suspected from observation and find the gaps
            where real-world behavior diverged from what the products assumed.
          </p>

          <div className="ws-stakeholder-grid">
            {[
              { img: '/old%20lady.jpg', title: 'Elderly Users', count: '20', desc: 'Mobility anxiety, device abandonment, fear-driven inactivity.' },
              { img: '/Doctor.png', title: 'Physicians', count: '12', desc: 'Fracture patterns, recovery timelines, readmission insights.' },
              { img: '/caretaker.jpg', title: 'Caregivers', count: '8', desc: 'Supervision burden, desire for proactive safety systems.' }
            ].map((card, i) => (
              <div key={i} className="ws-stakeholder-card">
                <img src={card.img} alt={card.title} className="ws-stakeholder-img" />
                <div className="ws-stakeholder-body">
                  <div className="ws-stakeholder-count">{card.count}</div>
                  <div className="ws-stakeholder-title">{card.title}</div>
                  <div className="ws-stakeholder-desc">{card.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="ws-findings-list">
            {[
              { title: 'Passive safety over active interaction', desc: 'People preferred systems that work automatically in the background. They did not want to learn a new device.' },
              { title: 'Visibility creates discomfort', desc: 'Assistive devices that look medical affect social confidence. The less noticeable, the more likely adoption.' },
              { title: 'Trust comes from reliability', desc: 'Consistency mattered far more than feature richness. One failure in a safety context erodes trust completely.' }
            ].map((f, i) => (
              <div key={i} className="ws-finding-row">
                <div style={{ paddingTop: '0.15rem' }}>
                  <div className="ws-finding-dot" />
                </div>
                <div>
                  <div className="ws-finding-title">{f.title}</div>
                  <div className="ws-finding-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="ws-evidence-grid">
            {[
              { img: '/Interviewpic.png', title: 'Interview Sessions', caption: 'Field interviews conducted in assisted living environments.' },
              { img: '/Research Questions.png', title: 'Research Questions', caption: 'Question framework used to structure stakeholder conversations.' },
              { img: '/Survey.png', title: 'Survey Findings', caption: 'Survey responses mapped into behavioral and adoption patterns.' }
            ].map(item => (
              <div key={item.title} className="ws-evidence-card">
                <img src={item.img} alt={item.title} />
                <div className="ws-evidence-caption">
                  <strong>{item.title}</strong>
                  <span>{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            MARKET
        ══════════════════════════════════════════ */}
        <section id="market" className="ws-section">
          <div className="ws-kicker">Market Landscape</div>
          <h2 className="ws-section-h2">Every existing solution misses the real moment</h2>
          <p className="ws-section-lead">
            We mapped every commercially available fall-related product. The pattern was consistent:
            they all intervene after the fall has already started.
          </p>

          <table className="ws-compare-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Example Products</th>
                <th>Approach</th>
                <th>Limitation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Protection Gear</td><td>Hip pads, helmets</td><td>Absorb impact</td>
                <td className="ws-gap-cell">Reactive only</td>
              </tr>
              <tr>
                <td>Detection Wearables</td><td>Fall sensors, alert pendants</td><td>Notify after fall</td>
                <td className="ws-gap-cell">After-the-fact</td>
              </tr>
              <tr>
                <td>Smart Walkers</td><td>Motorized rollators</td><td>Assist walking</td>
                <td className="ws-gap-cell">No automatic stabilization</td>
              </tr>
            </tbody>
          </table>

          <div className="ws-market-cards">
            {marketBenchmarks.map(item => (
              <div key={item.group} className="ws-market-card">
                <img className="ws-market-card-img" src={item.image} alt={item.group} />
                <div className="ws-market-card-body">
                  <div className="ws-market-signal">{item.signal}</div>
                  <h4>{item.group}</h4>
                  <dl className="ws-market-dl">
                    <div><dt>Examples</dt><dd>{item.examples}</dd></div>
                    <div><dt>Approach</dt><dd>{item.behavior}</dd></div>
                    <div><dt>Strength</dt><dd>{item.strength}</dd></div>
                    <div className="ws-market-gap-row"><dt>Gap</dt><dd>{item.gap}</dd></div>
                  </dl>
                </div>
              </div>
            ))}
          </div>

          <div className="ws-opportunity-strip">
            <div>
              <strong>The WALKsafe opportunity</strong>
              <p>
                Move the intervention earlier: from detect and protect to prevent and stabilize.
                This reframed the product direction from another wearable alert to a passive
                walker-integrated mechanism that acts without adding cognitive load.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            REQUIREMENTS
        ══════════════════════════════════════════ */}
        <section id="requirements" className="ws-section">
          <div className="ws-kicker">Design Requirements</div>
          <h2 className="ws-section-h2">Prioritizing what the system actually needs to do</h2>
          <p className="ws-section-lead">
            Using pairwise matrix analysis, I translated research insights into measurable system
            requirements. Protection and functional integration emerged as the highest priorities.
            User feedback ranked lowest, confirming that the system should act passively
            and not require any interaction to function.
          </p>

          <div className="ws-priority-bars">
            {[
              { label: 'Protection', score: 5.00, sub: 'Highest priority for preventing fall impact' },
              { label: 'Functional Integration', score: 4.64, sub: 'Critical for passive system-level response' },
              { label: 'Prediction Reliability', score: 4.28, sub: 'Needed to distinguish instability from normal use' },
              { label: 'Easy to Understand', score: 3.93, sub: 'Supports user trust without additional instruction' },
              { label: 'Unobtrusive', score: 3.93, sub: 'Minimizes visual and cognitive presence' },
              { label: 'Easy to Use', score: 3.57, sub: 'Keeps interaction simple for everyday adoption' },
              { label: 'Detection', score: 2.86, sub: 'Useful, but secondary to active prevention' },
              { label: 'Aesthetics', score: 2.50, sub: 'Relevant for acceptance, but not the core safety driver' },
              { label: 'Sense of Security', score: 1.43, sub: 'Emerges from reliable behavior rather than explicit feedback' },
              { label: 'Feedback from User', score: 0.36, sub: 'Lowest priority to preserve passive operation' }
            ].map((bar, i) => (
              <div key={i} className="ws-priority-bar">
                <div className="ws-priority-bar-top">
                  <span className="ws-priority-bar-label">{bar.label}</span>
                  <span className="ws-priority-bar-score">{bar.score.toFixed(2)} / 5</span>
                </div>
                <div className="ws-priority-bar-sub">{bar.sub}</div>
                <div className="ws-bar-track">
                  <div className="ws-bar-fill" style={{ width: `${(bar.score / 5) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.74rem', color: 'var(--ws-muted-2)', textAlign: 'center', marginBottom: '2rem' }}>
            Scores derived from pairwise matrix evaluation of system requirements
          </p>

          <div className="ws-req-evidence-grid">
            {[
              { img: '/Walksafe/House%20of%20quality.png', title: 'House of Quality', caption: 'Mapped user needs to engineering characteristics to reveal which system behaviors mattered most.' },
              { img: '/Walksafe/Relative%20Importance.png', title: 'Relative Importance', caption: 'Priority values from matrix analysis, highlighting protection and integration as decision drivers.' },
              { img: '/Walksafe/Competetive%20benchmarking.png', title: 'Competitive Benchmarking', caption: 'Compared existing solutions against requirement scores to identify the prevention gap.' }
            ].map(item => (
              <div key={item.title} className="ws-req-card">
                <img src={item.img} alt={item.title} />
                <div className="ws-req-caption">
                  <strong>{item.title}</strong>
                  <span>{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            EXPERIMENTS
        ══════════════════════════════════════════ */}
        <section id="experiments" className="ws-section">
          <div className="ws-kicker">Engineering Validation</div>
          <h2 className="ws-section-h2">Validating detection behavior</h2>
          <p className="ws-section-lead">
            We ran controlled fall experiments across five scenarios to confirm the system could
            reliably distinguish genuine instability from normal movement. This was the threshold
            calibration phase before the mechanism could be trusted.
          </p>

          <div className="ws-scenario-grid">
            {[
              { icon: '⬅', label: 'Side Fall' },
              { icon: '↑', label: 'Front Fall' },
              { icon: '↓', label: 'Backward Fall' },
              { icon: '▪', label: 'Obstacle Collision' },
              { icon: '◤', label: 'Slope Instability' }
            ].map((s, i) => (
              <div key={i} className="ws-scenario-cell">
                <div className="ws-scenario-icon">{s.icon}</div>
                <div className="ws-scenario-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="ws-chart-card">
            <div className="ws-chart-label">IMU Sensor Data — Angular Velocity Spikes Over Time</div>
            <svg width="100%" height="100" viewBox="0 0 600 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="80" x2="600" y2="80" stroke="#F3F4F6" strokeWidth="1" />
              <line x1="0" y1="50" x2="600" y2="50" stroke="#F3F4F6" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="20" x2="600" y2="20" stroke="#F3F4F6" strokeWidth="1" strokeDasharray="4 4" />
              <polyline
                points="0,72 50,70 100,68 130,62 150,52 160,18 170,10 180,24 190,50 220,62 280,68 320,65 350,60 370,22 380,8 390,28 410,58 460,68 520,70 560,62 570,14 580,30 590,62 600,68"
                stroke="#1B4332" strokeWidth="2" fill="none" strokeLinejoin="round" />
              <text x="145" y="8" fill="#B91C1C" fontSize="8" fontWeight="700">SPIKE</text>
              <text x="358" y="4" fill="#B91C1C" fontSize="8" fontWeight="700">SPIKE</text>
              <text x="555" y="10" fill="#B91C1C" fontSize="8" fontWeight="700">SPIKE</text>
            </svg>
            <div className="ws-chart-note">Angular velocity exceeds 150°/s threshold, marking the detection trigger points across three fall scenarios.</div>
          </div>

          <div className="ws-exp-grid">
            {[
              { img: '/Walksafe/Side%20Fall.png', title: 'Side Fall Test', caption: 'Controlled side-fall scenario used to validate lateral instability detection.' },
              { img: '/Walksafe/Front%20fall.png', title: 'Front Fall Test', caption: 'Forward fall scenario compared against normal movement to calibrate trigger thresholds.' }
            ].map(item => (
              <div key={item.title} className="ws-exp-card">
                <img src={item.img} alt={item.title} onError={e => { e.currentTarget.style.display = 'none'; }} />
                <div className="ws-exp-caption">
                  <strong>{item.title}</strong>
                  <span>{item.caption}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="ws-exp-card-wide">
            <img src="/Walksafe/Arduino.png" alt="Arduino testing setup" style={{ width: '100%', display: 'block' }} />
            <div className="ws-exp-caption">
              <strong>Arduino Testing Setup</strong>
              <span>Sensor wiring and bench testing used to validate detection thresholds before integrating the final mechanism.</span>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CONCEPTS
        ══════════════════════════════════════════ */}
        <section id="concepts" className="ws-section">
          <div className="ws-kicker">Concept Exploration</div>
          <h2 className="ws-section-h2">Exploring system concepts</h2>
          <p className="ws-section-lead">
            Instead of jumping to a solution, we worked at a functional level. We broke the system
            into sub-functions, generated multiple approaches, and evaluated each one against
            adoption likelihood and user trust.
          </p>

          <div className="ws-concept-scroll">
            {[
              { title: 'Counter Torque',             status: 'Rejected', img: '/Walksafe/Rej%201.png', note: 'Heavy, mechanically complex, and intimidating for elderly users' },
              { title: 'Weight Transfer',             status: 'Rejected', img: '/Walksafe/Rej%202.png', note: 'Slow response time with a noticeable form factor' },
              { title: 'External Stabilizer Frame',  status: 'Rejected', img: '/Walksafe/Rej%203.png', note: 'Increased footprint and reduced everyday usability' },
              { title: 'Wearable Trigger System',    status: 'Rejected', img: '/Walksafe/Rej%204.png', note: 'Added user dependency instead of enabling passive protection' },
              { title: 'Deployable Support Legs',    status: 'Selected', img: '/Walksafe/Select.png',  note: 'Fast, familiar, passive, and fully integrated into the walker form' }
            ].map((c, i) => (
              <div key={i} className={`ws-concept-card${c.status === 'Selected' ? ' selected' : ''}`}>
                <div className="ws-concept-card-head">
                  <h4>Concept {i + 1}: {c.title}</h4>
                  <span className={`ws-concept-status ${c.status.toLowerCase()}`}>{c.status}</span>
                </div>
                <img src={c.img} alt={`${c.title} concept sketch`} className="ws-concept-img" />
                <p className="ws-concept-note">{c.note}</p>
              </div>
            ))}
          </div>

          <table className="ws-matrix-table">
            <thead>
              <tr>
                <th>Evaluation Criteria</th>
                <th>Counter Torque</th>
                <th>Weight Transfer</th>
                <th>Deployable Legs</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Speed</td><td>★★</td><td>★</td><td className="winner">★★★</td></tr>
              <tr><td>Weight</td><td>★</td><td>★</td><td className="winner">★★★</td></tr>
              <tr><td>Complexity</td><td>★</td><td>★★</td><td className="winner">★★★</td></tr>
              <tr><td>Reliability</td><td>★★</td><td>★★</td><td className="winner">★★★</td></tr>
            </tbody>
          </table>
        </section>

        {/* ══════════════════════════════════════════
            TRADEOFFS
        ══════════════════════════════════════════ */}
        <section id="tradeoffs" className="ws-section">
          <div className="ws-kicker">Design Intelligence</div>
          <h2 className="ws-section-h2">Navigating the tradeoffs</h2>
          <p className="ws-section-lead">
            The core design challenge was increasing safety without increasing physical or cognitive
            effort. Every decision had a tension built into it.
          </p>

          <img src="/walksafe_tradeoff.png" alt="Design tradeoff radar chart" className="ws-tradeoff-img" />

          <div className="ws-tradeoff-grid">
            <div className="ws-tradeoff-card">
              <h3>Safety versus Weight</h3>
              <p>Stronger stabilization mechanisms add mass. The spring-loaded system achieves maximum protection at minimal weight. This was the central engineering tradeoff.</p>
            </div>
            <div className="ws-tradeoff-card">
              <h3>Complexity versus Adoption</h3>
              <p>The system must require zero user intervention. Fully automatic, no learning curve. That is a UX decision before it is an engineering one.</p>
            </div>
          </div>

          <div className="ws-tradeoff-evidence">
            {[
              { img: '/Walksafe/Cal.png', title: 'Engineering Calculations', caption: 'Force, load, and spring-response calculations used to balance stabilization strength against added weight.' },
              { img: '/Walksafe/leg%20design.png', title: 'Deployable Leg Design', caption: 'Mechanism exploration for compact support legs that deploy quickly while preserving the familiar walker form.' }
            ].map(item => (
              <div key={item.title} className="ws-tradeoff-ev-card">
                <img src={item.img} alt={item.title} />
                <div className="ws-tradeoff-ev-caption">
                  <strong>{item.title}</strong>
                  <span>{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            ARCHITECTURE
        ══════════════════════════════════════════ */}
        <section id="architecture" className="ws-section">
          <div className="ws-kicker">System Model</div>
          <h2 className="ws-section-h2">From instability signal to passive stabilization</h2>
          <p className="ws-section-lead">
            We modeled this as a system of safety, not just a product. Input, decision logic, and
            mechanical output, each separated so the system can act quickly without asking the user
            to interpret warnings or trigger any safety behavior.
          </p>

          <div className="ws-system-flow">
            {[
              { num: '01', title: 'Sense movement', body: 'IMU captures angular velocity and tilt change from walker motion.', parts: ['User movement', 'MPU6050 sensor'] },
              { num: '02', title: 'Validate risk', body: 'Microcontroller checks thresholds and filters false positives before triggering.', parts: ['ATmega MCU', 'Signal verification'] },
              { num: '03', title: 'Trigger response', body: 'Actuator releases the mechanical support sequence once instability is confirmed.', parts: ['Solenoid actuator', 'Spring release'] },
              { num: '04', title: 'Stabilize walker', body: 'Deployable legs extend the base of support before the walker tips beyond recovery.', parts: ['Support legs', 'Passive stabilization'] }
            ].map((step, i) => (
              <div key={i} className="ws-system-step">
                <div className="ws-system-step-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
                <div className="ws-system-parts">
                  {step.parts.map(p => <span key={p} className="ws-system-part">{p}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="ws-placeholder-grid">
            {[
              { title: 'System Architecture Diagram', caption: 'Input, processing, and output flow diagram.' },
              { title: 'Electronics Layout', caption: 'Sensor, MCU, actuator, and wiring schematic.' },
              { title: 'PCB Circuit Detail', caption: 'Board-level implementation and component mapping.' }
            ].map(item => (
              <div key={item.title} className="ws-placeholder-card">
                <div className="ws-placeholder-visual">
                  <span>Image Placeholder</span>
                </div>
                <div className="ws-placeholder-caption">
                  <strong>{item.title}</strong>
                  <span>{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            PROTOTYPE
        ══════════════════════════════════════════ */}
        <section id="prototype" className="ws-section">
          <div className="ws-kicker">Final Direction</div>
          <h2 className="ws-section-h2">Built on a familiar mental model</h2>
          <p className="ws-section-lead">
            We chose to enhance an existing trusted object, the walker itself, rather than
            introduce a new device. No learning curve. Already accepted. Seamlessly part of daily routine.
            That is a UX decision before it is a product decision.
          </p>

          <div className="ws-proto-img-card">
            <img src="/Walksafe/Final Product.png" alt="WALKsafe final prototype" />
          </div>
          <p className="ws-img-caption">
            Spring-loaded deployment mechanism, exploded view (left) and the full prototype with integrated stabilization system (right).
          </p>

          <div className="ws-proto-metrics">
            {[
              { val: '<0.4s', lbl: 'Fall Detection' },
              { val: '<0.7s', lbl: 'Leg Deployment' },
              { val: 'PC', lbl: 'Polycarbonate Build' }
            ].map((m, i) => (
              <div key={i} className="ws-proto-metric">
                <div className="ws-proto-metric-val">{m.val}</div>
                <div className="ws-proto-metric-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            IMPACT
        ══════════════════════════════════════════ */}
        <section id="impact" className="ws-section">
          <div className="ws-kicker">Outcomes</div>
          <h2 className="ws-section-h2">Impact and outcome</h2>

          <div className="ws-patent-banner">
            <div className="ws-patent-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div>
              <h3>Indian Patent Granted</h3>
              <p>
                A research-driven assistive technology system combining real-time instability detection
                with automatic mechanical stabilization. Designed around trust, invisibility,
                and zero cognitive load.
              </p>
            </div>
          </div>

          <div className="ws-impact-cards">
            {[
              { title: 'From Fear to Confidence', desc: 'Transformed the core user experience from anxiety-driven avoidance to supported, independent movement.' },
              { title: 'Invisible Safety System', desc: 'A sub-0.4 s detection system that works without any user interaction or awareness.' },
              { title: 'Research-Led Innovation', desc: 'Bridged the gap between passive mobility aids and active safety systems through user-centered, systems-level design.' }
            ].map((c, i) => (
              <div key={i} className="ws-impact-card">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="ws-quote-block">
            <p className="ws-quote-text">
              "Designing assistive technology is not only about preventing injuries.
              It is about moving people from fear-driven movement to supported independence."
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            REPORT
        ══════════════════════════════════════════ */}
        <section id="report" className="ws-section">
          <div className="ws-kicker">Documentation</div>
          <h2 className="ws-section-h2">Full Research Documentation</h2>
          <p className="ws-section-lead">
            The complete project report covers research methodology, user insights, system modeling,
            sensor data analysis, and design rationale.
          </p>

          <div className="ws-report-card">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#1B4332" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            <h3>Complete Project Report</h3>
            <p>
              Detailed research documentation including user insights, systems modeling,
              sensor validation, and the full design methodology behind the patent.
            </p>
            <a
              href="/Walksafe/Major Project Report.pdf"
              download="Walksafe_Major_Project_Report.pdf"
              className="ws-report-btn"
            >
              View Full Report
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
