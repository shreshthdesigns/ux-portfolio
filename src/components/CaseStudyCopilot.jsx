import React, { useEffect, useState } from 'react';

/* ─────────────────────────────────────────────────────────
   CAROUSEL — research session slides
───────────────────────────────────────────────────────── */
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
            <div className="cp-carousel-img-placeholder" />
          </div>
        ))}
        <button className="cp-carousel-btn cp-carousel-btn--prev" onClick={prev} aria-label="Previous">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button className="cp-carousel-btn cp-carousel-btn--next" onClick={next} aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
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

/* ─────────────────────────────────────────────────────────
   ADAPTATION DATA
───────────────────────────────────────────────────── */
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
    beforeImg: "/Polyspace/Card 3.1.svg",
    afterAlt: "Approval modal with Approve, Modify, Cancel buttons",
    afterImg: "/Polyspace/Card3.2.svg",
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

/* ─────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────── */
export default function CaseStudyCopilot({ onBack, activeSection, displaySections }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study-page cs-copilot-editorial">

      {/* ════════════════════════════════════════════════════ */}
      {/* TOP NAV                                             */}
      {/* ════════════════════════════════════════════════════ */}
      <nav className="cp-nav">
        <div className="cp-nav-inner">
          <button className="cp-nav-back" onClick={onBack}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Back to Work
          </button>
          <div className="cp-nav-links">
            {displaySections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`cp-nav-link${activeSection === section.id ? ' cp-nav-link--active' : ''}`}
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="wrap">
        <main className="cs-content">

          {/* ════════════════════════════════════════════════ */}
          {/* SECTION 1 — HERO                                */}
          {/* ════════════════════════════════════════════════ */}
          <section id="overview" className="cp-hero-s1">
            <div className="cp-s1-tags">
              <span>AI Systems</span>
              <span>Agentic UX</span>
              <span className="cp-s1-tag--accent">Trust &amp; Control</span>
              <span>Engineering UX</span>
            </div>

            <h1 className="cp-s1-h1">
              AI-assisted engineering,<br />without losing control.
            </h1>

            <div className="cp-s1-meta-row">
              <p className="cp-s1-subtitle">
                Designing an Agentic Copilot for Polyspace that lets engineers debug, verify, and trace
                complex systems with AI — while staying fully accountable for every decision.
              </p>
              <div className="cp-s1-aside">
                <div className="cp-s1-badge">
                  <span className="cp-s1-badge-dot" />
                  Ongoing Project
                </div>
                <p className="cp-s1-aside-note">Defining AI capabilities<br/>and interaction models</p>
                <div className="cp-s1-meta-chips">
                  <div className="cp-s1-chip"><span>Role</span> Senior UX Designer</div>
                  <div className="cp-s1-chip"><span>Company</span> MathWorks</div>
                  <div className="cp-s1-chip"><span>Status</span> In Progress</div>
                </div>
              </div>
            </div>
          </section>

          {/* ── VIDEO FRAME ── */}
          <div className="cp-video-frame">
            <div className="cp-video-chrome">
              <div className="cp-chrome-dots">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
              </div>
              <span className="cp-chrome-title">Polyspace Code Prover &nbsp;·&nbsp; Copilot</span>
              <div className="cp-chrome-actions">
                <span /><span />
              </div>
            </div>
            <div className="cp-video-body">
              <video
                src="/Polyspace Copilot.mp4"
                autoPlay loop muted playsInline preload="auto"
                className="cp-hero-video"
              />
            </div>
            <div className="cp-video-footer">
              <span>Designed for trust in complex systems</span>
            </div>
          </div>

          {/* ════════════════════════════════════════════════ */}
          {/* SECTION 2 — CONTEXT                             */}
          {/* ════════════════════════════════════════════════ */}
          <section className="cp-context-section">
            <p className="cp-section-label">CONTEXT</p>
            <div className="cp-context-grid">
              <div className="cp-context-tile">
                <div className="cp-context-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <p className="cp-context-tile-label">The Tool</p>
                <p className="cp-context-tile-body">
                  Polyspace is a formal verification and static analysis tool by MathWorks — used to mathematically
                  prove the absence of runtime errors in embedded software.
                </p>
              </div>
              <div className="cp-context-divider" />
              <div className="cp-context-tile">
                <div className="cp-context-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </div>
                <p className="cp-context-tile-label">The Stakes</p>
                <p className="cp-context-tile-body">
                  Used in automotive (ISO&nbsp;26262), aerospace (DO&#8209;178C), and industrial systems — environments
                  where a software defect can have safety consequences.
                </p>
              </div>
              <div className="cp-context-divider" />
              <div className="cp-context-tile">
                <div className="cp-context-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                  </svg>
                </div>
                <p className="cp-context-tile-label">The Users</p>
                <p className="cp-context-tile-body">
                  Software engineers and safety leads who spend hours tracing false positives, reviewing MISRA
                  violations, and verifying code coverage — manually.
                </p>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* SECTION 3 — THE CENTRAL QUESTION                */}
          {/* ════════════════════════════════════════════════ */}
          <section className="cp-question-section">
            <p className="cp-section-label">THE QUESTION THAT STARTED IT ALL</p>

            <h2 className="cp-question-h2">
              MATLAB already has a Copilot.<br />
              Why build a separate one for Polyspace?
            </h2>

            <p className="cp-question-body">
              MATLAB Copilot was designed for exploratory, open-ended computation. Engineers type what
              they need. The AI responds broadly. Speed is the metric.
            </p>
            <p className="cp-question-body" style={{ marginTop: '1rem' }}>
              Polyspace engineers work differently. Their workflows are deterministic. Their outputs are
              audited. Their mistakes have certification consequences.
            </p>

            <div className="cp-contrast-table">
              <div className="cp-contrast-header">
                <span />
                <span>MATLAB Copilot</span>
                <span>Polyspace Copilot</span>
              </div>
              <div className="cp-contrast-row">
                <span className="cp-contrast-dimension">Entry point</span>
                <span className="cp-contrast-before">Open chat prompt</span>
                <span className="cp-contrast-after">Inline action triggers</span>
              </div>
              <div className="cp-contrast-row">
                <span className="cp-contrast-dimension">Context model</span>
                <span className="cp-contrast-before">Broad, implicit</span>
                <span className="cp-contrast-after">Explicitly scoped by user</span>
              </div>
              <div className="cp-contrast-row">
                <span className="cp-contrast-dimension">Success metric</span>
                <span className="cp-contrast-before">Speed of response</span>
                <span className="cp-contrast-after">Correctness + traceability</span>
              </div>
            </div>

            <p className="cp-question-closing">
              Porting MATLAB Copilot to Polyspace would be like giving a surgeon a consumer wellness app.
              The domain changes everything.
            </p>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* SECTION 4 — CORE PROBLEM                        */}
          {/* ════════════════════════════════════════════════ */}
          <section id="problem" className="cp-problem-section">
            <p className="cp-section-label">THE CORE PROBLEM</p>

            <h2 className="cp-problem-h2">
              Engineers don't distrust AI<br />because it's wrong.<br />
              <span className="cp-problem-h2-accent">They distrust it because they<br />can't tell when it is.</span>
            </h2>

            <p className="cp-problem-body">
              Polyspace workflows are deterministic — every result is traceable, every decision is auditable.
              Introducing AI into that environment doesn't just add capability. It adds uncertainty.
              And for engineers working in safety-critical systems, uncertainty is the enemy.
            </p>

            <div className="cp-failure-grid">
              <div className="cp-failure-card">
                <span className="cp-failure-num">01</span>
                <h3 className="cp-failure-title">Unpredictable Behavior</h3>
                <p className="cp-failure-body">
                  The AI makes different decisions for the same input across sessions. In formal verification,
                  this destroys confidence in the entire workflow — even when the AI is correct.
                </p>
              </div>
              <div className="cp-failure-card">
                <span className="cp-failure-num">02</span>
                <h3 className="cp-failure-title">Hidden Reasoning</h3>
                <p className="cp-failure-body">
                  Engineers can't trace why the AI suggested something. In safety-critical code,
                  "the AI recommended it" is not a valid justification in a certification audit.
                </p>
              </div>
              <div className="cp-failure-card">
                <span className="cp-failure-num">03</span>
                <h3 className="cp-failure-title">Loss of Accountability</h3>
                <p className="cp-failure-body">
                  When AI acts silently and engineers accept without reviewing, they become accountable
                  for outcomes they didn't own. That's the fundamental trust-killer.
                </p>
              </div>
            </div>

            {/* Design Intent callout */}
            <div className="cp-design-intent">
              <div className="cp-design-intent-label">DESIGN INTENT</div>
              <p className="cp-design-intent-text">
                Build a Copilot that assists without replacing — one that engineers can trust precisely
                because it never acts without their explicit understanding and approval.
              </p>
              <div className="cp-design-intent-chips">
                <span>AI Suggests · Never Assumes</span>
                <span>Every Output Is Traceable</span>
                <span>Actions Require Approval</span>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* SECTION 5 — RESEARCH & DISCOVERY                */}
          {/* ════════════════════════════════════════════════ */}
          <section id="research" className="cp-research-section">
            <div className="cp-research-header">
              <p className="cp-section-label">RESEARCH &amp; DISCOVERY</p>
              <h2 className="cp-research-h2">Three findings that shaped<br />every design decision</h2>
              <p className="cp-research-sub">
                Interviews with embedded software engineers, safety leads, and Polyspace power users
                across automotive and aerospace teams. In-person sessions, workflow shadowing, and
                structured synthesis.
              </p>
            </div>

            <div className="cp-research-grid">
              <div className="cp-research-card">
                <div className="cp-research-card-top">
                  <span className="cp-research-finding">Finding 01</span>
                  <h3 className="cp-research-title">Prompting is a foreign concept</h3>
                </div>
                <p className="cp-research-body">
                  Engineers think in operations, not conversations. Asking them to "prompt" an AI mid-workflow
                  is like asking a surgeon to write a request form before making an incision.
                  They want actions, not interfaces.
                </p>
                <div className="cp-research-quote">
                  "I don't want to describe what I see — I want the AI to see it with me."
                </div>
              </div>

              <div className="cp-research-card">
                <div className="cp-research-card-top">
                  <span className="cp-research-finding">Finding 02</span>
                  <h3 className="cp-research-title">Context is always fragmented</h3>
                </div>
                <p className="cp-research-body">
                  A Polyspace workflow spans multiple files, run configurations, result states, and
                  execution histories. Engineers can't summarize that in a chat window — and shouldn't
                  have to. Context must be automatic and scoped.
                </p>
                <div className="cp-research-quote">
                  "By the time I've explained the context, I've already solved the problem."
                </div>
              </div>

              <div className="cp-research-card">
                <div className="cp-research-card-top">
                  <span className="cp-research-finding">Finding 03</span>
                  <h3 className="cp-research-title">Trust is earned per-decision</h3>
                </div>
                <p className="cp-research-body">
                  One bad AI suggestion doesn't just lose one task. It poisons all future interactions.
                  Engineers need to see reasoning before they'll accept outcomes — and they need
                  a clear path to override when they disagree.
                </p>
                <div className="cp-research-quote">
                  "I'll use it — but I need to know I can ignore it when I have to."
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* NON-OBVIOUS INSIGHT — dark green section         */}
          {/* ════════════════════════════════════════════════ */}
          <div id="insight" className="cp-dark-section">
            <p className="cp-dark-label">THE NON-OBVIOUS INSIGHT</p>
            <h2 className="cp-dark-heading">
              Control is not interaction.<br />
              It is how the system behaves<br />under uncertainty.
            </h2>

            <p className="cp-dark-body">
              Users don't feel "in control" because of buttons or UI.<br />
              They feel in control when:
            </p>

            <div className="cp-insight-cards">
              <div className="cp-insight-card">
                <div className="cp-insight-card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
                    <circle cx="12" cy="4" r="2"/><circle cx="6" cy="12" r="2"/>
                    <circle cx="18" cy="12" r="2"/><circle cx="12" cy="20" r="2"/>
                    <path d="M12 6v2M12 16v2M8 11l-2 1M16 11l2 1M8 13l2-1M16 13l-2-1"/>
                  </svg>
                </div>
                <p>They can predict system behavior</p>
              </div>
              <div className="cp-insight-card">
                <div className="cp-insight-card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/>
                  </svg>
                </div>
                <p>They understand why something happened</p>
              </div>
              <div className="cp-insight-card">
                <div className="cp-insight-card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
                  </svg>
                </div>
                <p>They can interrupt or override decisions</p>
              </div>
            </div>

            <InsightCarousel />
          </div>

          {/* ════════════════════════════════════════════════ */}
          {/* SECTION 8 — DESIGN PRINCIPLES                   */}
          {/* ════════════════════════════════════════════════ */}
          <section id="principles" className="cp-principles-section">
            <div className="cp-principles-header">
              <p className="cp-section-label">DESIGN PRINCIPLES</p>
              <h2 className="cp-principles-h2">Five principles for controlled intelligence</h2>
              <p className="cp-principles-sub">
                Not rules imposed after the fact — constraints that shaped every interaction decision from the start.
              </p>
            </div>

            <div className="cp-principles-flex">
              <div className="cp-principle-new-card">
                <h3>AI Suggests — Never Assumes</h3>
                <div className="cp-new-media">
                  <img src="/Polyspace/CP1.svg" alt="AI Suggests — Never Assumes" />
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

          {/* ════════════════════════════════════════════════ */}
          {/* ADAPTATION SECTION                              */}
          {/* ════════════════════════════════════════════════ */}
          <section id="adaptation" className="cp-adaptation-section">
            <p className="cp-section-label">HOW WE ADAPTED COPILOT</p>
            <h2 className="cp-adaptation-h2">Adapting Copilot for Polyspace Workflows</h2>
            <p className="cp-adaptation-intro">
              Generic Copilot systems optimize for capability.<br />
              Polyspace requires systems optimized for correctness, traceability, and control.
            </p>

            <div className="cp-adaptation-container" style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '-2rem', bottom: '-2rem',
                left: 'calc(50% + 1rem)', right: '-2rem',
                border: '1px solid #eaeaea',
                borderRadius: '24px',
                background: '#fafbfc',
                zIndex: 0,
                pointerEvents: 'none'
              }}/>

              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '6rem', width: '100%' }}>
                <div className="cp-adaptation-visuals" style={{ marginBottom: '-3.5rem', padding: '0', alignItems: 'center' }}>
                  <div className="cp-adaptation-col" style={{ fontSize: '13px', fontFamily: 'var(--sans)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', textAlign: 'center' }}>
                    Generic AI Copilot
                  </div>
                  <div className="cp-adaptation-arrow" style={{ opacity: 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M0 0h24v24H0z"/></svg>
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
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                      <div className="cp-adaptation-col">
                        <div className="cp-adaptation-after">
                          <img src={ad.afterImg} alt={ad.afterAlt} />
                        </div>
                      </div>
                    </div>
                    <div className="cp-adaptation-content">
                      <p className="cp-adaptation-caption">{ad.caption}</p>
                      <div className="cp-adaptation-meta">
                        <div className="cp-adaptation-micro">
                          {ad.microLeft} &nbsp;→&nbsp; <strong style={{ color: 'var(--accent)' }}>{ad.microRight}</strong>
                        </div>
                        <div className="cp-adaptation-callout">{ad.callout}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cp-adaptation-footer-banner">
              Adapting Copilot for Polyspace was not about adding features — it was about redefining
              how AI behaves in systems where correctness and control are critical.
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* SECTION 9 — SYSTEM DESIGN                       */}
          {/* ════════════════════════════════════════════════ */}
          <section id="system" className="cp-system-section">
            <p className="cp-section-label">THE MODEL</p>
            <h2 className="cp-system-h2">Designing the Copilot as a system</h2>
            <p className="cp-system-sub">
              Not a chatbot — a system that understands, plans, and acts within control boundaries.
              Every interaction is a loop, not a transaction.
            </p>

            <div className="cp-system-flow-wrap">
              <div className="cp-system-flow">
                {[
                  { label: 'User', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
                  { label: 'Context', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg> },
                  { label: 'Plan', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg> },
                  { label: 'Suggest', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
                  { label: 'Approve', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>, highlight: true },
                  { label: 'Act', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
                  { label: 'Feedback', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6"/><polyline points="22 4 12 14.01 9 11.01"/></svg> }
                ].map((node, i) => (
                  <React.Fragment key={i}>
                    <div className={`cp-flow-node${node.highlight ? ' cp-flow-node--approval' : ''}`}>
                      <div className="cp-flow-icon">{node.icon}</div>
                      <span>{node.label}</span>
                    </div>
                    {i < 6 && <div className="cp-flow-arrow">→</div>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="cp-layers-row">
              <div className="cp-layer-card">
                <div className="cp-layer-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                </div>
                <h4>Context Layer</h4>
                <p>Code, results, and workflow state — captured automatically, never guessed.</p>
              </div>
              <div className="cp-layer-card">
                <div className="cp-layer-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/></svg>
                </div>
                <h4>Reasoning Layer</h4>
                <p>Intent understanding and plan generation — always visible to the engineer.</p>
              </div>
              <div className="cp-layer-card">
                <div className="cp-layer-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h4>Control Layer</h4>
                <p>Approval gates, override paths, and explicit scope boundaries at every step.</p>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* SECTION 10 — EXPERIENCE MODULES                 */}
          {/* ════════════════════════════════════════════════ */}
          <section id="experiences" className="cp-experiences-section">
            <p className="cp-section-label">WHERE THIS SHOWS UP</p>
            <h2 className="cp-experiences-h2">Experience modules</h2>
            <p className="cp-experiences-sub">
              Four core workflows where the Copilot principles come to life.
              Each module is designed around a real engineer task — not an AI capability.
            </p>

            {/* Hero module — Explaining Errors */}
            <div className="cp-exp-hero">
              <div className="cp-exp-hero-label">PRIMARY MODULE</div>
              <div className="cp-exp-hero-content">
                <div className="cp-exp-hero-left">
                  <h3 className="cp-exp-hero-title">Explaining Errors</h3>
                  <p className="cp-exp-hero-body">
                    The most time-consuming task in any Polyspace workflow. Engineers spend hours manually
                    tracing why a check fails — reading code, cross-referencing documentation, and
                    following call chains across files. The Copilot compresses this to seconds.
                  </p>

                  <div className="cp-exp-steps">
                    {[
                      { n: '1', text: 'Engineer triggers "Explain Error" on any result row — no prompting required' },
                      { n: '2', text: 'Copilot surfaces the file, line, and violated rule in structured context' },
                      { n: '3', text: 'AI explains the error in plain language, grounded in the specific code path' },
                      { n: '4', text: 'Copilot traces the root cause through the call chain with visible reasoning' },
                      { n: '5', text: 'Engineer reviews the full reasoning before choosing to accept or dismiss' },
                      { n: '6', text: 'If accepted, a fix suggestion is shown with an approval checkpoint — never auto-applied' },
                    ].map((step) => (
                      <div key={step.n} className="cp-exp-step">
                        <span className="cp-exp-step-num">{step.n}</span>
                        <p className="cp-exp-step-text">{step.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="cp-exp-hero-right">
                  <div className="cp-exp-hero-visual">
                    <div className="cp-exp-visual-header">
                      <span className="cp-exp-visual-badge">Polyspace Copilot</span>
                      <span className="cp-exp-visual-tag">Explaining Error</span>
                    </div>
                    <div className="cp-exp-visual-body">
                      <div className="cp-exp-visual-item cp-exp-visual-item--rule">
                        <span>Rule</span>
                        <strong>MISRA C 2012 · Rule 14.4</strong>
                      </div>
                      <div className="cp-exp-visual-item cp-exp-visual-item--file">
                        <span>Location</span>
                        <strong>sensor_init.c : line 247</strong>
                      </div>
                      <div className="cp-exp-visual-divider"/>
                      <div className="cp-exp-visual-explanation">
                        <div className="cp-exp-visual-ai-badge">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                          AI Explanation
                        </div>
                        <p>The condition in the if-statement evaluates a non-boolean expression. The assignment <code>x = get_sensor()</code> returns an integer — this is not a valid boolean context under MISRA C 2012.</p>
                      </div>
                      <div className="cp-exp-visual-reasoning">
                        <div className="cp-exp-visual-ai-badge cp-exp-visual-ai-badge--trace">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                          Trace
                        </div>
                        <p>Called from <code>main.c:89</code> → <code>hal_setup.c:34</code> → <code>sensor_init.c:247</code></p>
                      </div>
                      <div className="cp-exp-visual-actions">
                        <button className="cp-exp-visual-btn cp-exp-visual-btn--accept">Review Fix</button>
                        <button className="cp-exp-visual-btn cp-exp-visual-btn--dismiss">Dismiss</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other modules */}
            <div className="cp-exp-modules">
              <div className="cp-exp-module">
                <div className="cp-exp-module-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                </div>
                <h3>Tracing Bugs</h3>
                <p>Guided navigation across file dependencies and call chains. The AI surfaces the path — the engineer walks it.</p>
              </div>
              <div className="cp-exp-module">
                <div className="cp-exp-module-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                </div>
                <h3>Generating Tests</h3>
                <p>Structured test suggestions with full preview and context disclosure. Nothing is written until the engineer approves.</p>
              </div>
              <div className="cp-exp-module">
                <div className="cp-exp-module-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
                </div>
                <h3>Contextual Guidance</h3>
                <p>Inline prompts that align with the current task — surfaced by the system, not searched by the user.</p>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* SECTION 11 — TRADE-OFFS                         */}
          {/* ════════════════════════════════════════════════ */}
          <section className="cp-tradeoffs-section">
            <p className="cp-section-label">STRATEGIC DECISIONS</p>
            <h2 className="cp-tradeoffs-h2">The deliberate trade-offs</h2>
            <p className="cp-tradeoffs-sub">
              Designing for trust meant intentionally choosing less-capable AI
              in places where more capability would undermine engineer confidence.
            </p>

            <div className="cp-tradeoff-stack">
              <div className="cp-tradeoff-card">
                <div className="cp-tradeoff-header">
                  <div className="cp-tradeoff-poles">
                    <span className="cp-tradeoff-side cp-tradeoff-side--left">Automation</span>
                    <span className="cp-tradeoff-vs">↔</span>
                    <span className="cp-tradeoff-side cp-tradeoff-side--right">Control</span>
                  </div>
                </div>
                <p className="cp-tradeoff-decision">We chose not to auto-apply fixes even when confidence is high.</p>
                <p className="cp-tradeoff-why">Engineers in certified workflows must own every code change. Silent automation creates audit gaps and erodes trust faster than any bad suggestion.</p>
              </div>
              <div className="cp-tradeoff-card">
                <div className="cp-tradeoff-header">
                  <div className="cp-tradeoff-poles">
                    <span className="cp-tradeoff-side cp-tradeoff-side--left">Speed</span>
                    <span className="cp-tradeoff-vs">↔</span>
                    <span className="cp-tradeoff-side cp-tradeoff-side--right">Transparency</span>
                  </div>
                </div>
                <p className="cp-tradeoff-decision">Every AI response shows its reasoning trace before the answer.</p>
                <p className="cp-tradeoff-why">Adding a reasoning layer slows the response. But engineers told us they would rather wait 2 seconds and understand, than get an instant answer they can't verify.</p>
              </div>
              <div className="cp-tradeoff-card">
                <div className="cp-tradeoff-header">
                  <div className="cp-tradeoff-poles">
                    <span className="cp-tradeoff-side cp-tradeoff-side--left">Open-Ended AI</span>
                    <span className="cp-tradeoff-vs">↔</span>
                    <span className="cp-tradeoff-side cp-tradeoff-side--right">Structured Workflows</span>
                  </div>
                </div>
                <p className="cp-tradeoff-decision">No free-form chat. Every entry point is a defined action.</p>
                <p className="cp-tradeoff-why">Open prompts create unpredictable scope. Structured entry points ensure the AI always operates with the right context — and within understood boundaries.</p>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* SECTION 12 — IMPACT                             */}
          {/* ════════════════════════════════════════════════ */}
          <section id="impact" className="cp-impact-section">
            <p className="cp-section-label">OUTCOMES</p>
            <h2 className="cp-impact-h2">Validation signals</h2>
            <p className="cp-impact-sub">
              Early testing and internal pilot with Polyspace users.
              Qualitative signals — this is an ongoing project.
            </p>

            <div className="cp-signal-grid">
              <div className="cp-signal-card">
                <div className="cp-signal-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <h3>Reduced error resolution time</h3>
                <p>Engineers in pilot sessions resolved complex false positives significantly faster. The trace from error to root cause — previously manual — became a guided, single-action flow.</p>
              </div>
              <div className="cp-signal-card">
                <div className="cp-signal-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3>Trust without over-reliance</h3>
                <p>Engineers used the dismissal and override paths regularly — a positive signal. The system was designed for this. Active rejection means engineers are reviewing, not blindly accepting.</p>
              </div>
              <div className="cp-signal-card">
                <div className="cp-signal-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                </div>
                <h3>Vocabulary alignment with PMs</h3>
                <p>The system design artifacts — principles, layers, approval model — became a shared language between UX, engineering, and product management for scoping AI capabilities.</p>
              </div>
            </div>

            <div className="cp-impact-quote">
              <svg className="cp-impact-quote-mark" width="32" height="24" viewBox="0 0 32 24" fill="none">
                <path d="M0 24V14.4C0 6.08 4.8 1.28 14.4 0l1.6 2.72C10.56 3.68 7.84 6.24 7.04 10.4H14.4V24H0zm17.6 0V14.4C17.6 6.08 22.4 1.28 32 0l1.6 2.72c-5.44.96-8.16 3.52-8.96 7.68H32V24H17.6z" fill="#E8E8E8"/>
              </svg>
              <p className="cp-impact-quote-text">It feels like guidance — but I'm still in control.</p>
              <span className="cp-impact-quote-attr">— Embedded software engineer, pilot session</span>
            </div>
          </section>

          {/* ════════════════════════════════════════════════ */}
          {/* SECTION 13 — REFLECTION                         */}
          {/* ════════════════════════════════════════════════ */}
          <section id="reflection" className="cp-reflection-section">
            <p className="cp-section-label">REFLECTION</p>

            <div className="cp-reflection-layout">
              <div className="cp-reflection-left">
                <h2 className="cp-reflection-h2">
                  The challenge wasn't making AI powerful.<br />
                  It was making it <em>predictable enough</em> to be trusted.
                </h2>
              </div>
              <div className="cp-reflection-right">
                <p className="cp-reflection-body">
                  Working on this project changed how I think about AI system design. The temptation
                  in agentic UX is always to demonstrate capability — to show what the AI <em>can</em> do.
                </p>
                <p className="cp-reflection-body" style={{ marginTop: '1.5rem' }}>
                  The harder, more valuable work is designing the boundaries of what it <em>should</em> do,
                  and making those boundaries visible, predictable, and recoverable.
                </p>
                <p className="cp-reflection-body" style={{ marginTop: '1.5rem' }}>
                  Polyspace engineers don't need a smarter AI. They need one they can explain to
                  their safety team, trace in a certification audit, and override without friction.
                  That's a different product.
                </p>
              </div>
            </div>

            <div className="cp-reflection-close">
              <p>The future of AI in engineering is not autonomy — it is controlled intelligence.</p>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
