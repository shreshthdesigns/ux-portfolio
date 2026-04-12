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
              <img src="/Hard problem.png" alt="Engineering Workflow Paradox" className="cp-constraints-image" />
            </div>
          </section>

          {/* Quote banner */}
          <div className="cp-quote-banner">
            <p className="cp-quote-text">" Designing AI for engineering workflows means balancing competing expectations between precision and adaptability, automation and accountability, intelligence and trust "</p>
          </div>

          {/* ═══════════════════════════════════════ */}
          {/* PRINCIPLES                             */}
          {/* ═══════════════════════════════════════ */}
          <section id="principles" className="cp-section">
            <p className="cp-label">WHAT I DID</p>
            <h2 className="cp-heading">Designing for Controlled Intelligence</h2>

            <ul className="cp-principles-intro">
              <li>AI systems cannot be designed purely for capability, they must be designed within clear behavioral boundaries.</li>
              <li>Based on user tensions and system constraints, I defined a set of principles to guide how the Copilot operates within engineering workflows.</li>
            </ul>

            <div className="cp-principle-item">
              <h3 className="cp-principle-title">1. AI Suggests, Never Assumes</h3>
              <p className="cp-principle-desc">System outputs are always presented as suggestions. No silent execution. Users remain in control.</p>
              <div className="cp-principle-placeholder" />
            </div>

            <div className="cp-principle-item">
              <h3 className="cp-principle-title">2. Every Output is Traceable</h3>
              <p className="cp-principle-desc">Responses are grounded in user context, code, and system data. Users can always understand where outputs come from.</p>
              <div className="cp-principle-placeholder" />
            </div>

            <div className="cp-principle-item">
              <h3 className="cp-principle-title">3. Actions Require Approval</h3>
              <p className="cp-principle-desc">Critical actions introduce human-in-the-loop checkpoints. Execution is always user-governed.</p>
              <div className="cp-principle-placeholder" />
            </div>

            <div className="cp-principle-item">
              <h3 className="cp-principle-title">4. Reasoning is Visible</h3>
              <p className="cp-principle-desc">The system exposes how it interprets problems and plans actions. Not just answers — but thinking.</p>
              <div className="cp-principle-placeholder" />
            </div>

            <div className="cp-principle-item">
              <h3 className="cp-principle-title">5. Context is Scoped</h3>
              <p className="cp-principle-desc">AI operates only within explicitly provided inputs. No hidden data usage or assumptions.</p>
              <div className="cp-principle-placeholder" />
            </div>
          </section>

          {/* ═══════════════════════════════════════ */}
          {/* SYSTEM DESIGN                          */}
          {/* ═══════════════════════════════════════ */}
          <section id="system" className="cp-section">
            <p className="cp-label">SYSTEM DESIGN</p>
            <h2 className="cp-heading">Designing the Copilot as a System</h2>
            <p className="cp-body">
              Instead of a chat interface, the Copilot was designed as a system that understands context, plans actions, and operates within control boundaries.
            </p>

            <div className="cp-layers-row">
              <div className="cp-layer-card"><h4>Context Layer</h4><p>Context-aware</p></div>
              <div className="cp-layer-card"><h4>Reasoning Layer</h4><p>Traceable</p></div>
              <div className="cp-layer-card"><h4>Control Layer</h4><p>Human-in-loop</p></div>
            </div>

            <div className="cp-system-flow">
              <div className="cp-flow-node"><div className="cp-flow-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-7 8-7s8 3 8 7" /></svg></div><span>User Intent</span></div>
              <div className="cp-flow-arrow">→</div>
              <div className="cp-flow-node"><div className="cp-flow-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M3 9h18" /></svg></div><span>Context</span></div>
              <div className="cp-flow-arrow">→</div>
              <div className="cp-flow-node cp-flow-node--agent"><div className="cp-flow-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></div><span>Agent</span></div>
              <div className="cp-flow-arrow">→</div>
              <div className="cp-flow-node"><div className="cp-flow-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" /><rect x="9" y="3" width="6" height="4" rx="1" /></svg></div><span>Plan</span></div>
              <div className="cp-flow-arrow">→</div>
              <div className="cp-flow-node cp-flow-node--approval"><div className="cp-flow-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg></div><span>Approval</span></div>
              <div className="cp-flow-arrow">→</div>
              <div className="cp-flow-node"><div className="cp-flow-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></div><span>Action</span></div>
              <div className="cp-flow-arrow">→</div>
              <div className="cp-flow-node"><div className="cp-flow-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></div><span>Feedback</span></div>
            </div>
          </section>

          {/* ═══════════════════════════════════════ */}
          {/* EXPERIENCES                            */}
          {/* ═══════════════════════════════════════ */}
          <section id="experiences" className="cp-section">
            <p className="cp-label">EXPERIENCES</p>
            <h2 className="cp-heading">Where This Shows Up</h2>

            <div className="cp-exp-grid">
              <div className="cp-exp-card"><h3>Explaining Errors</h3><p>AI interprets system outputs and provides clear reasoning behind failures.</p></div>
              <div className="cp-exp-card"><h3>Tracing Bugs</h3><p>Users can trace issues across files and dependencies with guided steps.</p></div>
              <div className="cp-exp-card"><h3>Generating Tests</h3><p>AI suggests test cases with preview before execution.</p></div>
              <div className="cp-exp-card"><h3>Contextual Guidance</h3><p>Smart prompts guide users through workflows without breaking context.</p></div>
            </div>
          </section>

          {/* ═══════════════════════════════════════ */}
          {/* TRADE-OFFS                             */}
          {/* ═══════════════════════════════════════ */}
          <section id="tradeoffs" className="cp-section">
            <p className="cp-label">TRADE-OFFS</p>
            <h2 className="cp-heading">Balancing Intelligence with Control</h2>

            <div className="cp-tradeoff-stack">
              <div className="cp-tradeoff-card">
                <div className="cp-tradeoff-poles"><span className="cp-tradeoff-pole">Automation</span><span className="cp-tradeoff-divider">↔</span><span className="cp-tradeoff-pole">Accountability</span></div>
                <p>Reduced autonomy to maintain user ownership</p>
              </div>
              <div className="cp-tradeoff-card">
                <div className="cp-tradeoff-poles"><span className="cp-tradeoff-pole">Speed</span><span className="cp-tradeoff-divider">↔</span><span className="cp-tradeoff-pole">Transparency</span></div>
                <p>Slower but explainable interactions</p>
              </div>
              <div className="cp-tradeoff-card">
                <div className="cp-tradeoff-poles"><span className="cp-tradeoff-pole">Flexibility</span><span className="cp-tradeoff-divider">↔</span><span className="cp-tradeoff-pole">Predictability</span></div>
                <p>Structured workflows over open-ended AI</p>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════ */}
          {/* IMPACT                                 */}
          {/* ═══════════════════════════════════════ */}
          <section id="impact" className="cp-section">
            <p className="cp-label">IMPACT</p>
            <h2 className="cp-heading">Impact</h2>

            <div className="cp-impact-list">
              <div className="cp-impact-item"><span className="cp-impact-dot" /><p>Faster understanding of errors and system behavior</p></div>
              <div className="cp-impact-item"><span className="cp-impact-dot" /><p>Reduced reliance on documentation and peer support</p></div>
              <div className="cp-impact-item"><span className="cp-impact-dot" /><p>Increased confidence in using AI within workflows</p></div>
            </div>
          </section>

          {/* Impact quote */}
          <div className="cp-quote-banner">
            <p className="cp-quote-text" style={{ fontStyle: 'italic' }}>" It feels like having guidance — but I'm still in control. "</p>
          </div>

          {/* ═══════════════════════════════════════ */}
          {/* REFLECTION                             */}
          {/* ═══════════════════════════════════════ */}
          <section id="reflection" className="cp-section">
            <p className="cp-label">REFLECTION</p>
            <p className="cp-reflection-text">
              The challenge wasn't making AI powerful.<br />
              It was making it predictable enough to be trusted.
            </p>
          </section>

          {/* Final green highlight */}
          <div className="cp-quote-banner" style={{ marginBottom: '4rem' }}>
            <p className="cp-quote-text">The future of AI in engineering is not autonomy — it is controlled intelligence.</p>
          </div>

        </main>
      </div>
    </div>
  );
}
