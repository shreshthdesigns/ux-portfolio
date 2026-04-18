import React, { useEffect, useState } from 'react';

const CAROUSEL_ITEMS = [
  { caption: "Interviewing engineers about how they trace false positives through complex code hierarchies" },
  { caption: "Brainstorming session on AI decision transparency with the Polyspace product team" },
  { caption: "Workshop on control handoff — when should AI suggest vs. act autonomously?" },
  { caption: "User testing session observing how engineers react to unexpected AI suggestions" },
  { caption: "Synthesis of key tensions between automation expectations and accountability needs" },
];

function InsightCarousel() {
  const [active, setActive] = useState(2);

  const prev = () => setActive(i => (i - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length);
  const next = () => setActive(i => (i + 1) % CAROUSEL_ITEMS.length);

  // Returns style for each card based on distance from active
  const cardStyle = (idx) => {
    const dist = idx - active;
    const absDist = Math.abs(dist);
    const scale = absDist === 0 ? 1.0 : absDist === 1 ? 0.87 : 0.74;
    const opacity = absDist === 0 ? 1 : absDist === 1 ? 0.55 : 0.28;
    const translateX = dist * 220;
    const zIndex = 10 - absDist;
    return {
      position: 'absolute',
      left: '50%',
      top: 0,
      transform: `translateX(calc(-50% + ${translateX}px)) scale(${scale})`,
      opacity,
      zIndex,
      transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease',
      cursor: absDist === 0 ? 'default' : 'pointer',
    };
  };

  return (
    <div className="cp-carousel-wrap">
      <p className="cp-carousel-source">In person Interviews, Discussions and Brainstorming with Polyspace Users.</p>

      <div className="cp-carousel-stage">
        {CAROUSEL_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className={`cp-carousel-card${idx === active ? ' cp-carousel-card--active' : ''}`}
            style={cardStyle(idx)}
            onClick={() => setActive(idx)}
          >
            {/* Placeholder — user will replace with actual images */}
            <div className="cp-carousel-img-placeholder" />
          </div>
        ))}
        {/* Arrows */}
        <button className="cp-carousel-btn cp-carousel-btn--prev" onClick={prev} aria-label="Previous">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button className="cp-carousel-btn cp-carousel-btn--next" onClick={next} aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>

      {/* Caption — only shown for active card */}
      <div className="cp-carousel-caption-wrap">
        {CAROUSEL_ITEMS.map((item, idx) => (
          <p
            key={idx}
            className="cp-carousel-caption-text"
            style={{
              opacity: idx === active ? 1 : 0,
              position: idx === active ? 'relative' : 'absolute',
              transition: 'opacity 0.4s ease',
            }}
          >
            {item.caption}
          </p>
        ))}
      </div>

      {/* Dots */}
      <div className="cp-carousel-dots">
        {CAROUSEL_ITEMS.map((_, idx) => (
          <button
            key={idx}
            className={`cp-carousel-dot${idx === active ? ' cp-carousel-dot--active' : ''}`}
            onClick={() => setActive(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const COPILOT_ADAPTATIONS = [
  {
    id: 1,
    title: "CHAT → ACTIONS",
    beforeAlt: "Chat UI mock with user typing Explain this error",
    beforeImg: "/Polyspace/Card 1.1.svg",
    afterAlt: "Polyspace UI with Inline Explain Error button",
    afterImg: "/Polyspace/Card 1.2.svg",
    caption: "Users struggle to frame the right prompt in complex verification workflows",
    microLeft: "Chat-based interaction",
    microRight: "Action-based entry points",
    callout: "Reduces prompt dependency and cognitive load"
  },
  {
    id: 2,
    title: "IMPLICIT CONTEXT → EXPLICIT CONTEXT",
    beforeAlt: "Multiple UI panels disconnected with AI guessing context",
    beforeImg: "/Polyspace/Card 2.1.svg",
    afterAlt: "Context selector UI showing selected files",
    afterImg: "/Polyspace/Card 2.2.svg",
    caption: "Context is fragmented across files, results, and execution states",
    microLeft: "Implicit context assumption",
    microRight: "User-scoped context",
    callout: "Ensures relevance, privacy, and predictability"
  },
  {
    id: 3,
    title: "UNPREDICTABLE → CONTROLLED EXECUTION",
    beforeAlt: "AI output applied automatically",
    beforeImg: "/Polyspace/unpredictable-before.png",
    afterAlt: "Approval modal with Approve, Modify, Cancel buttons",
    afterImg: "/Polyspace/controlled-after.png",
    caption: "Inconsistent outputs reduce confidence in AI-assisted workflows",
    microLeft: "Unpredictable outputs",
    microRight: "Approval checkpoints",
    callout: "Maintains user ownership of decisions"
  },
  {
    id: 4,
    title: "BLACK BOX → VISIBLE REASONING",
    beforeAlt: "AI output without explanation",
    beforeImg: "/Polyspace/blackbox-before.png",
    afterAlt: "Reasoning panel showing step-by-step trace",
    afterImg: "/Polyspace/reasoning-after.png",
    caption: "Lack of transparency makes AI decisions difficult to trust",
    microLeft: "Black-box behavior",
    microRight: "Visible reasoning",
    callout: "Makes AI explainable within engineering workflows"
  },
  {
    id: 5,
    title: "UNBOUNDED → SCOPED AI",
    beforeAlt: "AI accessing full system",
    beforeImg: "/Polyspace/unbounded-before.png",
    afterAlt: "Scoped context UI highlighting boundary limits",
    afterImg: "/Polyspace/scoped-after.png",
    caption: "Uncontrolled AI access creates risk in enterprise environments",
    microLeft: "Unbounded AI behavior",
    microRight: "Scoped AI boundaries",
    callout: "Aligns with enterprise privacy and control requirements"
  }
];

export default function CaseStudyCopilot({ onBack, activeSection, displaySections }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study-page cs-copilot-editorial">
      <div className="cs-topbar">
        <div className="cs-topbar-inner">
          <button className="cs-back" onClick={onBack}>
            <span className="cs-back-arrow">←</span>
            Back to Work
          </button>
          <div className="cs-section-nav">
            {displaySections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={activeSection === section.id ? "active" : ""}
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap">
        <main className="cs-content">

          {/* ═══════════════════════════════════════ */}
          {/* HERO                                   */}
          {/* ═══════════════════════════════════════ */}
          <section id="overview" className="cp-hero">
            <div className="cp-tags">
              <span className="cp-tag">AI Systems</span>
              <span className="cp-tag">Agentic UX</span>
              <span className="cp-tag cp-tag--filled">Trust & Control</span>
              <span className="cp-tag">Engineering UX</span>
            </div>

            <h1 className="cp-h1">AI-assisted engineering, without losing control</h1>

            <p className="cp-subtitle">
              Designing an <strong>Agentic Copilot</strong> for Polyspace that enables engineers to reason, debug, and
              validate complex systems with AI — while maintaining control, transparency, and trust.
            </p>

            <span className="cp-meta-badge">Ongoing Project: Defining AI capabilities and interaction models</span>
          </section>

          {/* Hero Video Card */}
          <div className="cp-hero-mockup">
            <div className="cp-hero-glow cp-hero-glow--1"></div>
            <div className="cp-hero-glow cp-hero-glow--2"></div>
            <div className="cp-mockup-inner">
              <video 
                src="/Polyspace Copilot.mov" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="cp-hero-video"
              ></video>
            </div>
            <p className="cp-hero-video-caption">Designed for trust in complex systems</p>
          </div>

          {/* ═══════════════════════════════════════ */}
          {/* CORE PROBLEM                           */}
          {/* ═══════════════════════════════════════ */}
          <section id="intro" className="cp-section">
            <p className="cp-label">CORE PROBLEM</p>
            <h2 className="cp-heading">Complexity leads to Uncertainty</h2>

            <p className="cp-body">Polyspace workflows are complex — but engineers are used to complexity.</p>
            <p className="cp-body" style={{ marginTop: '0.5rem' }}>What they are not comfortable with is:</p>
            <ul className="cp-bullets">
              <li>Unpredictable system behavior</li>
              <li>Hidden decision-making</li>
              <li>Loss of traceability</li>
            </ul>
          </section>

          {/* Quote banner */}
          <div className="cp-quote-banner">
            <p className="cp-quote-text">" AI doesn't just reduce effort. It also introduces uncertainty into deterministic workflows"</p>
          </div>

          {/* Design Intent + Role */}
          <section className="cp-section">
            <div className="cp-text-block" style={{ marginTop: 0 }}>
              <p className="cp-label">DESIGN INTENT</p>
              <p className="cp-body">
                I designed Polyspace Copilot as an agentic system that assists, not replaces but enables the users
                to leverage AI while staying fully in control of decisions and actions.
              </p>
            </div>

            <div className="cp-text-block">
              <p className="cp-label">MY ROLE</p>
              <div className="cp-role-chips">
                <div className="cp-role-chip">
                  <div className="cp-chip-icon">
                    <svg width="25" height="27" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
                  </div>
                  <span>Defined AI capabilities and behaviors</span>
                </div>
                <div className="cp-role-chip">
                  <div className="cp-chip-icon">
                    <svg width="25" height="27" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
                  </div>
                  <span>Designed interaction patterns for human & AI collaboration</span>
                </div>
                <div className="cp-role-chip">
                  <div className="cp-chip-icon">
                    <svg width="25" height="27" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
                  </div>
                  <span>Shaped system level requirements driving architecture</span>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════ */}
          {/* INSIGHT — dark green section            */}
          {/* ═══════════════════════════════════════ */}
          <div id="insight" className="cp-dark-section">
            <p className="cp-label">THE NON OBVIOUS INSIGHT</p>
            <h2 className="cp-heading">
              Control is not interaction...<br />
              It is how the system behaves under uncertainty
            </h2>

            <p className="cp-body">
              Users don't feel "in control" because of buttons or UI.<br />
              They feel in control when:
            </p>

            <div className="cp-insight-cards">
              <div className="cp-insight-card">
                <div className="cp-insight-card-icon">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.2">
                    <circle cx="12" cy="4" r="2" /><circle cx="6" cy="12" r="2" /><circle cx="18" cy="12" r="2" /><circle cx="12" cy="20" r="2" />
                    <path d="M12 6v2M12 16v2M8 11l-2 1M16 11l2 1M8 13l2-1M16 13l-2-1" />
                  </svg>
                </div>
                <p>They can predict system behavior</p>
              </div>

              <div className="cp-insight-card">
                <div className="cp-insight-card-icon">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.2">
                    <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" />
                  </svg>
                </div>
                <p>They understand why something happened</p>
              </div>

              <div className="cp-insight-card">
                <div className="cp-insight-card-icon">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.2">
                    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                  </svg>
                </div>
                <p>They can interrupt or override decisions</p>
              </div>
            </div>

            {/* ─── Carousel ─── */}
            <InsightCarousel />
          </div>

          {/* ═══════════════════════════════════════ */}
          {/* SYSTEM CONSTRAINTS                     */}
          {/* ═══════════════════════════════════════ */}
          <section id="constraints" className="cp-section">
            <p className="cp-label">SYSTEM CONSTRAINTS</p>
            <h2 className="cp-heading">Why Designing AI for Engineering Workflows is Hard</h2>
            <p className="cp-body">AI introduces uncertainty into systems that demand precision, predictability, and accountability.</p>

            <div className="cp-constraints-visual">
              <img src="/Polyspace/Ai for engineering.svg" alt="AI Constraints in Engineering Workflows" className="cp-constraints-image" />
            </div>
          </section>

          {/* Quote banner */}
          <div className="cp-quote-banner">
            <p className="cp-quote-text">" Designing AI for engineering workflows means balancing competing expectations between precision and adaptability, automation and accountability, intelligence and trust "</p>
          </div>

          {/* ═══════════════════════════════════════ */}
          {/* SECTION 1: PRINCIPLES                  */}
          {/* ═══════════════════════════════════════ */}
          <section id="principles" className="cp-section cp-principles-section" style={{ textAlign: 'center', background: '#F8F9FA' }}>
            <p className="cp-label">PRINCIPLES</p>
            <h2 className="cp-heading" style={{ margin: '0 auto 1.5rem', color: '#2B5441' }}>Designing for Controlled Intelligence</h2>
            
            <p className="cp-body" style={{ margin: '0 auto 4rem', textAlign: 'center', color: '#4A5568' }}>
              Modern AI requires a shift from black-box automation to observable, human-centric<br />guidance within the development loop.
            </p>

            <div className="cp-principles-flex">
              {/* Top Row: 3 Cards */}
              <div className="cp-principle-new-card">
                <h3>AI Suggests — Never Assumes</h3>
                <div className="cp-new-media">
                  <img src="/Polyspace/CP1.svg" alt="AI Suggests - Never Assumes" />
                </div>
                <p className="cp-principle-caption">Outputs are always suggestions. No silent execution.</p>
              </div>
              <div className="cp-principle-new-card">
                <h3>Every Output Is Traceable</h3>
                <div className="cp-new-media">
                  <img src="/Polyspace/CP2.svg" alt="Every Output Is Traceable" />
                </div>
                <p className="cp-principle-caption">Responses are grounded in context, code, and system state.</p>
              </div>
              <div className="cp-principle-new-card">
                <h3>Actions Require Approval</h3>
                <div className="cp-new-media">
                  <img src="/Polyspace/CP3.svg" alt="Actions Require Approval" />
                </div>
                <p className="cp-principle-caption">Critical actions introduce human-in-the-loop checkpoints.</p>
              </div>

              {/* Bottom Row: 2 Cards */}
              <div className="cp-principle-new-card cp-principle-new-card--wide">
                <h3>Reasoning Is Visible</h3>
                <div className="cp-new-media">
                  <img src="/Polyspace/CP4.svg" alt="Reasoning Is Visible" />
                </div>
                <p className="cp-principle-caption">The system exposes how it interprets and plans.</p>
              </div>
              <div className="cp-principle-new-card cp-principle-new-card--wide">
                <h3>Context Is Scoped</h3>
                <div className="cp-new-media">
                  <img src="/Polyspace/CP5.svg" alt="Context Is Scoped" />
                </div>
                <p className="cp-principle-caption">AI operates only within explicitly defined inputs.</p>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════ */}
          {/* ADAPTATION SECTION                      */}
          {/* ═══════════════════════════════════════ */}
          <section id="adaptation" className="cp-section">
            <p className="cp-label">ADAPTATION</p>
            <h2 className="cp-heading">Adapting Copilot for Polyspace Workflows</h2>
            <p className="cp-body">
              Generic Copilot systems optimize for capability.<br />
              Polyspace requires systems optimized for correctness, traceability, and control.
            </p>

            <div className="cp-adaptation-container" style={{ position: 'relative' }}>
              
              {/* Subtle Bounding Box for Right Section */}
              <div style={{
                position: 'absolute',
                top: '-2rem',
                bottom: '-2rem',
                left: 'calc(50% + 1rem)',
                right: '-2rem',
                border: '1px solid #eaeaea',
                borderRadius: '24px',
                background: '#fafbfc',
                zIndex: 0,
                pointerEvents: 'none'
              }}></div>

              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '6rem', width: '100%' }}>
                <div className="cp-adaptation-visuals" style={{ marginBottom: '-3.5rem', padding: '0', alignItems: 'center' }}>
                  <div className="cp-adaptation-col" style={{ fontSize: '13px', fontFamily: 'var(--sans)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', textAlign: 'center' }}>
                    Generic AI Copilot
                  </div>
                  <div className="cp-adaptation-arrow" style={{ opacity: 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M0 0h24v24H0z" /></svg>
                  </div>
                  <div className="cp-adaptation-col" style={{ fontSize: '13px', fontFamily: 'var(--sans)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', textAlign: 'center' }}>
                    Polyspace Copilot
                  </div>
                </div>

              {COPILOT_ADAPTATIONS.map((ad) => (
                <div key={ad.id} className="cp-adaptation-row">
                  <div className="cp-adaptation-visuals">
                    <div className="cp-adaptation-col">
                      <div className="cp-adaptation-before">
                        <img src={ad.beforeImg} alt={ad.beforeAlt} />
                      </div>
                    </div>

                    <div className="cp-adaptation-arrow">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>

                    <div className="cp-adaptation-col">
                      <div className="cp-adaptation-after">
                        <img src={ad.afterImg} alt={ad.afterAlt} />
                      </div>
                    </div>
                  </div>

                  <div className="cp-adaptation-content">
                    <p className="cp-adaptation-caption">
                      {ad.caption}
                    </p>
                    
                    <div className="cp-adaptation-meta">
                      <div className="cp-adaptation-micro">
                        {ad.microLeft} &nbsp;→&nbsp; <strong style={{color: 'var(--accent)'}}>{ad.microRight}</strong>
                      </div>
                      <div className="cp-adaptation-callout">
                        {ad.callout}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>

            <div className="cp-adaptation-footer-banner">
              Adapting Copilot for Polyspace was not about adding features — it was about redefining how AI behaves in systems where correctness and control are critical.
            </div>
          </section>

          {/* ═══════════════════════════════════════ */}
          {/* SECTION 4: SYSTEM DESIGN                */}
          {/* ═══════════════════════════════════════ */}
          <section id="system" className="cp-section" style={{ textAlign: 'center' }}>
            <p className="cp-label">THE MODEL</p>
            <h2 className="cp-heading" style={{ margin: '0 auto 1rem' }}>Designing the Copilot as a System</h2>
            <p className="cp-subtitle" style={{ margin: '0 auto 4rem' }}>
              Not a chatbot — but a system that understands, plans, and acts within control boundaries.
            </p>

            <div className="cp-system-visual-dominant" style={{ background: '#fff', borderRadius: '24px', border: '1px solid #E0E0E0', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', marginBottom: '4rem' }}>
              <div className="cp-system-flow" style={{ background: 'transparent', padding: 0 }}>
                {[
                  { label: 'User', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg> },
                  { label: 'Context', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /></svg> },
                  { label: 'Plan', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg> },
                  { label: 'Suggest', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg> },
                  { label: 'Approve', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg> },
                  { label: 'Act', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
                  { label: 'Feedback', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6" /><polyline points="22 4 12 14.01 9 11.01" /></svg> }
                ].map((node, i) => (
                  <React.Fragment key={i}>
                    <div className="cp-flow-node">
                      <div className="cp-flow-icon" style={node.label === 'Approve' ? { borderColor: 'var(--accent)', borderWidth: '2px' } : {}}>{node.icon}</div>
                      <span>{node.label}</span>
                    </div>
                    {i < 6 && <div className="cp-flow-arrow">→</div>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="cp-layers-row">
              <div className="cp-layer-card">
                <h4>Context Layer</h4>
                <p style={{ textTransform: 'none', letterSpacing: 'normal', color: '#333', marginTop: '0.5rem' }}>Code, results, and workflow state</p>
              </div>
              <div className="cp-layer-card">
                <h4>Reasoning Layer</h4>
                <p style={{ textTransform: 'none', letterSpacing: 'normal', color: '#333', marginTop: '0.5rem' }}>Intent understanding and planning</p>
              </div>
              <div className="cp-layer-card">
                <h4>Control Layer</h4>
                <p style={{ textTransform: 'none', letterSpacing: 'normal', color: '#333', marginTop: '0.5rem' }}>Approval, interruption, and boundaries</p>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════ */}
          {/* SECTION 5: EXPERIENCES                 */}
          {/* ═══════════════════════════════════════ */}
          <section id="experiences" className="cp-section">
            <p className="cp-label">WHERE THIS SHOWS UP</p>
            <h2 className="cp-heading">Experience Modules</h2>

            <div className="cp-exp-grid" style={{ marginTop: '3rem' }}>
              <div className="cp-exp-card">
                <h3>Explaining Errors</h3>
                <p>AI interprets failures and explains root causes</p>
              </div>
              <div className="cp-exp-card">
                <h3>Tracing Bugs</h3>
                <p>Guided navigation across dependencies</p>
              </div>
              <div className="cp-exp-card">
                <h3>Generating Tests</h3>
                <p>Structured test suggestions with preview</p>
              </div>
              <div className="cp-exp-card">
                <h3>Contextual Guidance</h3>
                <p>Prompts aligned with user workflow</p>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════ */}
          {/* SECTION 6: TRADE-OFFS                  */}
          {/* ═══════════════════════════════════════ */}
          <section id="tradeoffs" className="cp-section">
            <p className="cp-label">STRATEGIC DECISIONS</p>
            <h2 className="cp-heading">Balancing Intelligence with Control</h2>

            <div className="cp-tradeoff-stack" style={{ marginTop: '3rem' }}>
              <div className="cp-tradeoff-card">
                <div className="cp-tradeoff-poles">
                  <span className="cp-tradeoff-pole">Automation</span>
                  <span className="cp-tradeoff-divider">↔</span>
                  <span className="cp-tradeoff-pole">Control</span>
                </div>
                <p>Reduced autonomy to maintain trust</p>
              </div>
              <div className="cp-tradeoff-card">
                <div className="cp-tradeoff-poles">
                  <span className="cp-tradeoff-pole">Speed</span>
                  <span className="cp-tradeoff-divider">↔</span>
                  <span className="cp-tradeoff-pole">Transparency</span>
                </div>
                <p>Slower but explainable responses</p>
              </div>
              <div className="cp-tradeoff-card">
                <div className="cp-tradeoff-poles">
                  <span className="cp-tradeoff-pole">Flexibility</span>
                  <span className="cp-tradeoff-divider">↔</span>
                  <span className="cp-tradeoff-pole">Predictability</span>
                </div>
                <p>Structured workflows over open-ended AI</p>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════ */}
          {/* SECTION 7: IMPACT                      */}
          {/* ═══════════════════════════════════════ */}
          <section id="impact" className="cp-section">
            <p className="cp-label">OUTCOMES</p>
            
            <div className="cp-impact-grid" style={{ alignItems: 'center', marginTop: '3rem' }}>
              <div>
                <h2 className="cp-heading" style={{ marginBottom: '2.5rem' }}>Impact</h2>
                <div className="cp-impact-list">
                  <div className="cp-impact-item"><span className="cp-impact-dot" /><p>Faster understanding of system behavior</p></div>
                  <div className="cp-impact-item"><span className="cp-impact-dot" /><p>Reduced reliance on documentation</p></div>
                  <div className="cp-impact-item"><span className="cp-impact-dot" /><p>Increased confidence in AI workflows</p></div>
                </div>
              </div>
              <div className="cp-impact-quote-card" style={{ background: '#F4F4F4', borderRadius: '24px', textAlign: 'center' }}>
                <p style={{ fontSize: '24px', fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--accent)', lineHeight: 1.4 }}>
                  “It feels like guidance — but I’m still in control.”
                </p>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════ */}
          {/* SECTION 8: REFLECTION                  */}
          {/* ═══════════════════════════════════════ */}
          <section id="reflection" className="cp-section" style={{ textAlign: 'center' }}>
            <p className="cp-label">FINAL THOUGHTS</p>
            <h2 className="cp-heading" style={{ margin: '0 auto 2rem' }}>Reflection</h2>
            
            <p className="cp-reflection-text" style={{ margin: '0 auto', textAlign: 'center' }}>
              The challenge wasn’t making AI powerful.<br />
              It was making it predictable enough to be trusted.
            </p>

            <div className="cp-reflection-highlight">
              The future of AI in engineering is not autonomy —<br />
              it is controlled intelligence.
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
