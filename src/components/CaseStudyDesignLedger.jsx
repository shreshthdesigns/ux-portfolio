import React, { useEffect, useRef, useState } from 'react';
import '../styles/design-ledger-editorial.css';

/* ── Count-up hook ── */
function useCountUp(target, duration = 1800, trigger = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, target, duration]);
  return value;
}

/* ── Plugin Mockup ── */
function PluginMockup() {
  return (
    <div className="dl-plugin-frame">
      {/* Window chrome */}
      <div className="dl-plugin-chrome">
        <div className="dl-chrome-dot" style={{ background: '#F85149' }} />
        <div className="dl-chrome-dot" style={{ background: '#E3B341' }} />
        <div className="dl-chrome-dot" style={{ background: '#3FB950' }} />
        <span className="dl-chrome-title">Figma Plugin · Design Ledger</span>
      </div>

      {/* Plugin header */}
      <div className="dl-plugin-header">
        <div className="dl-plugin-logo">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#E05438">
            <path d="M22,12.72c0-1.74-1.22-3.32-3.48-4.14L12,5.28l-6.52,3.3C3.22,9.4,2,10.98,2,12.72c0,3.14,3.15,6.56,10,10.28 C18.85,19.28,22,15.86,22,12.72z M12,7.24l4.5,2.28L12,11.8L7.5,9.52L12,7.24z M4,12.72c0-0.78,0.59-1.5,1.74-2.09l5.26,2.66v6.24 C6.08,16.89,4,14.61,4,12.72z M13,19.53v-6.24l5.26-2.66c1.15,0.58,1.74,1.3,1.74,2.09C20,14.61,17.92,16.89,13,19.53z"/>
          </svg>
          Design<span>Ledger</span>
        </div>
        <span style={{ fontSize: '11px', color: '#3FB950', fontWeight: '700', background: 'rgba(63,185,80,0.1)', border: '1px solid rgba(63,185,80,0.25)', padding: '3px 8px', borderRadius: '4px' }}>● Live</span>
      </div>

      {/* Plugin nav */}
      <div className="dl-plugin-nav">
        <div className="dl-plugin-nav-tab active">Log</div>
        <div className="dl-plugin-nav-tab">Repository</div>
        <div className="dl-plugin-nav-tab">Export</div>
      </div>

      {/* Plugin body */}
      <div className="dl-plugin-body">
        <div className="dl-plugin-left">
          {/* Breadcrumb */}
          <div style={{ fontSize: '11px', color: '#6E7681', borderBottom: '1px solid #30363D', paddingBottom: '12px' }}>
            <span style={{ color: '#0076A8', fontWeight: '700' }}>CORE-402</span>
            <span style={{ margin: '0 6px', opacity: 0.4 }}>›</span>
            <span>Data Viz Panel Redesign</span>
            <span style={{ margin: '0 6px', opacity: 0.4 }}>›</span>
            <span style={{ color: '#E6EDF3', fontWeight: '600' }}>Iteration 3</span>
          </div>
          <div className="dl-plugin-section-title">Versions</div>
          <div className="dl-version-grid">
            <div className="dl-version-slot">
              <div className="dl-version-thumb captured">
                <svg width="28" height="20" viewBox="0 0 28 20" fill="none" style={{ position: 'relative', zIndex: 1 }}>
                  <rect x="0" y="0" width="28" height="20" rx="2" fill="rgba(0,118,168,0.2)" />
                  <rect x="2" y="2" width="10" height="8" rx="1" fill="rgba(0,118,168,0.4)" />
                  <rect x="2" y="12" width="24" height="2" rx="1" fill="rgba(255,255,255,0.1)" />
                  <rect x="2" y="16" width="16" height="2" rx="1" fill="rgba(255,255,255,0.08)" />
                  <rect x="14" y="2" width="12" height="8" rx="1" fill="rgba(0,118,168,0.25)" />
                </svg>
                <span className="dl-v-badge">V1</span>
              </div>
              <div className="dl-version-info">
                <div className="dl-version-label">V1</div>
                <div className="dl-version-name">Card layout, dense</div>
                <div className="dl-capture-btn captured">✓ Captured</div>
              </div>
            </div>
            <div className="dl-version-slot">
              <div className="dl-version-thumb captured">
                <svg width="28" height="20" viewBox="0 0 28 20" fill="none" style={{ position: 'relative', zIndex: 1 }}>
                  <rect x="0" y="0" width="28" height="20" rx="2" fill="rgba(0,118,168,0.15)" />
                  <rect x="2" y="2" width="24" height="5" rx="1" fill="rgba(0,118,168,0.35)" />
                  <rect x="2" y="9" width="24" height="5" rx="1" fill="rgba(0,118,168,0.2)" />
                  <rect x="2" y="16" width="12" height="2" rx="1" fill="rgba(255,255,255,0.08)" />
                </svg>
                <span className="dl-v-badge">V2</span>
              </div>
              <div className="dl-version-info">
                <div className="dl-version-label">V2</div>
                <div className="dl-version-name">List layout, scannable</div>
                <div className="dl-capture-btn captured">✓ Captured</div>
              </div>
            </div>
          </div>
        </div>

        <div className="dl-plugin-right">
          <div className="dl-field-group">
            <div className="dl-field-label">Decision Taken</div>
            <div className="dl-field-box focused" style={{ color: '#E6EDF3' }}>
              Chose V2 list layout for data-dense review contexts
            </div>
          </div>
          <div className="dl-field-group">
            <div className="dl-field-label">Rationale</div>
            <div className="dl-field-box" style={{ minHeight: '56px' }}>
              Engineers scan results vertically. Card grid creates false visual hierarchy for sequential data.
            </div>
          </div>
          <div className="dl-field-group">
            <div className="dl-field-label">Trade-offs</div>
            <div className="dl-field-box">
              Reduced glanceability for 3+ column comparisons
            </div>
          </div>
          <div className="dl-commit-btn">✓ Commit Decision</div>
        </div>
      </div>
    </div>
  );
}

/* ── Plugin Window Shell ── */
function PluginWindowShell({ activeTab, children }) {
  const tabs = ['Log', 'Repository', 'Export'];
  return (
    <div className="dl-pw">
      <div className="dl-pw-titlebar">
        <div className="dl-pw-icon-btn">&lt;/&gt;</div>
        <span className="dl-pw-window-title">Design Ledger</span>
        <span className="dl-pw-close-btn">✕</span>
      </div>
      <div className="dl-pw-app-hdr">
        <div className="dl-pw-logo-row">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#E05438">
            <path d="M22,12.72c0-1.74-1.22-3.32-3.48-4.14L12,5.28l-6.52,3.3C3.22,9.4,2,10.98,2,12.72c0,3.14,3.15,6.56,10,10.28 C18.85,19.28,22,15.86,22,12.72z"/>
          </svg>
          Design<span className="dl-pw-logo-accent">Ledger</span>
        </div>
        <div className="dl-pw-tools">
          <button className="dl-pw-tool-btn" aria-label="clear">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>
          </button>
          <div className="dl-pw-tool-sep" />
          <button className="dl-pw-tool-btn" aria-label="expand">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
          </button>
        </div>
      </div>
      <div className="dl-pw-tab-bar">
        {tabs.map(t => (
          <div key={t} className={`dl-pw-tab${t === activeTab ? ' active' : ''}`}>{t}</div>
        ))}
      </div>
      {children}
    </div>
  );
}

/* ── Step 1: Landing Screen ── */
function OWStep1Visual() {
  return (
    <PluginWindowShell activeTab="Log">
      <div className="dl-pw-landing">
        <div className="dl-pw-landing-hero">
          <div className="dl-pw-landing-name">Design Ledger</div>
          <div className="dl-pw-landing-tagline">Capture your design decisions with precision.</div>
        </div>
        <div className="dl-pw-log-cards">
          <div className="dl-pw-log-card">
            <div className="dl-pw-log-card-icon">📁</div>
            <div>
              <div className="dl-pw-log-card-name">Log by Requirement</div>
              <div className="dl-pw-log-card-hint">Link iterations to specific requirements (e.g. CORE-101).</div>
            </div>
          </div>
          <div className="dl-pw-log-card">
            <div className="dl-pw-log-card-icon">📋</div>
            <div>
              <div className="dl-pw-log-card-name">Log Task Only</div>
              <div className="dl-pw-log-card-hint">Fast, standalone logging for ad-hoc design refinements.</div>
            </div>
          </div>
        </div>
        <div className="dl-pw-tips-block">
          <div className="dl-pw-tips-lbl">Quick Tips</div>
          <div className="dl-pw-tip-line">· Capture <strong>V1 vs V2</strong> to document evolution.</div>
          <div className="dl-pw-tip-line">· Sync to <strong>Confluence</strong> for official documentation.</div>
        </div>
      </div>
    </PluginWindowShell>
  );
}

/* ── Step 3: Repository View ── */
function OWStep3Visual() {
  return (
    <PluginWindowShell activeTab="Repository">
      <div className="dl-pw-subtab-bar">
        <div className="dl-pw-subtab active">By Requirement</div>
        <div className="dl-pw-subtab">Standalone</div>
      </div>
      <div className="dl-pw-repo-layout">
        <div className="dl-pw-repo-sidebar">
          <div className="dl-pw-sidebar-hdr">
            <span className="dl-pw-sidebar-lbl">Requirements</span>
            <span className="dl-pw-sidebar-add">+</span>
          </div>
          <div className="dl-pw-req-row">
            <span>📁</span> R1
            <div className="dl-pw-req-acts">
              <span className="dl-pw-req-act">+</span>
              <span className="dl-pw-req-act">🗑</span>
            </div>
          </div>
          <div className="dl-pw-task-item active">Design a w...</div>
        </div>
        <div className="dl-pw-repo-main">
          <div className="dl-pw-repo-task-title">T1: Design a way of differentiating different result status</div>
          <div className="dl-pw-repo-task-sub">Part of R1</div>
          <div className="dl-pw-repo-actions">
            <div className="dl-pw-repo-btn primary">+ Add Iteration</div>
            <div className="dl-pw-repo-btn secondary">Sync Task</div>
          </div>
          <div className="dl-pw-iter-card">
            <div className="dl-pw-iter-hdr">
              <span className="dl-pw-iter-name">Iteration 1</span>
              <span className="dl-pw-iter-date">20/04/2026 · 20:20</span>
            </div>
            <div className="dl-pw-iter-frames-row">
              {['V1', 'V2'].map(v => (
                <div key={v} className="dl-pw-iter-frame-item">
                  <div className="dl-pw-iter-thumb">
                    <span className="dl-pw-iter-thumb-focus">↗</span>
                    <span className="dl-pw-iter-thumb-label">{v}</span>
                  </div>
                  <span className="dl-pw-iter-v-tag">{v}</span>
                </div>
              ))}
            </div>
            <div className="dl-pw-focus-callout">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{flexShrink:0, marginTop:'1px'}}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Click any frame thumbnail to focus it in the Figma canvas instantly
            </div>
            <div className="dl-pw-meta-key">Decision</div>
            <div className="dl-pw-meta-val">Using filter option rather than independent Tabs</div>
            <div className="dl-pw-meta-key">Rationale</div>
            <div className="dl-pw-meta-val">Independent tabs break the user's scanning workflow.</div>
          </div>
        </div>
      </div>
    </PluginWindowShell>
  );
}

/* ── Step 4: Export Configuration ── */
function OWStep4Visual() {
  return (
    <PluginWindowShell activeTab="Export">
      <div className="dl-pw-export-content">
        <div className="dl-pw-export-tabs">
          <div className="dl-pw-export-tab active">Confluence Sync</div>
          <div className="dl-pw-export-tab">Markdown</div>
        </div>
        <div className="dl-pw-status-row">
          <div className="dl-pw-status-dot-connected" />
          <span className="dl-pw-status-txt">Connected</span>
          <span className="dl-pw-configure-link">Configure</span>
        </div>
        <div className="dl-pw-field-grp">
          <div className="dl-pw-field-lbl">Email</div>
          <div className="dl-pw-field-inp">sshresht@mathworks.com</div>
        </div>
        <div className="dl-pw-field-grp">
          <div className="dl-pw-field-lbl">Token</div>
          <div className="dl-pw-field-inp masked">{'•'.repeat(44)}</div>
        </div>
        <div className="dl-pw-field-grp">
          <div className="dl-pw-field-lbl">Page Title</div>
          <div className="dl-pw-field-inp">
            <span style={{flex:1}}>Plugin: Design Ledger Demo</span>
            <span className="dl-pw-search-icon">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </span>
          </div>
        </div>
        <div className="dl-pw-field-pair">
          <div>
            <div className="dl-pw-field-lbl">Page ID</div>
            <div className="dl-pw-field-inp">1082932308</div>
          </div>
          <div>
            <div className="dl-pw-field-lbl">Space Key</div>
            <div className="dl-pw-field-inp">~sshresht</div>
          </div>
        </div>
        <div className="dl-pw-export-save-btn">Save Settings</div>
      </div>
    </PluginWindowShell>
  );
}

/* ── Step 5: Confluence Output ── */
function OWStep5Visual() {
  return (
    <div className="dl-cf-out">
      <div className="dl-cf-out-header">
        <div className="dl-cf-confluence-icon">C</div>
        <div>
          <div className="dl-cf-page-title">CORE-402: Design Decision Log</div>
          <div className="dl-cf-page-sub">Data Visualization Panel · Polyspace Bug Finder</div>
        </div>
        <div className="dl-cf-generated-badge">Generated in &lt; 5 min</div>
      </div>
      <table className="dl-cf-out-table">
        <colgroup>
          <col style={{width:'170px'}} />
          <col />
          <col />
          <col />
          <col style={{width:'90px'}} />
        </colgroup>
        <thead>
          <tr>
            <th>Image / Video / Prototype</th>
            <th>Decision</th>
            <th>Rationale</th>
            <th>Trade-Off</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr className="dl-cf-req-hdr">
            <td colSpan={5}>Requirement ID: CORE-402 · Data Viz Panel Redesign</td>
          </tr>
          <tr className="dl-cf-task-hdr">
            <td colSpan={5}>T1: Design a way of differentiating different result status</td>
          </tr>
          <tr>
            <td>
              <div className="dl-cf-frame-col">
                {['V1', 'V2'].map((v, vi) => (
                  <div key={v} className="dl-cf-frame-entry">
                    <div className="dl-cf-frame-img-box">
                      <div className="dl-cf-frame-mini-ui">
                        <div className="dl-cf-frame-mini-bar" style={{width: vi === 0 ? '80%' : '100%'}} />
                        <div className="dl-cf-frame-mini-row wide" />
                        <div className="dl-cf-frame-mini-row med" />
                        {vi === 1 && <div className="dl-cf-frame-mini-row wide" />}
                        {vi === 1 && <div className="dl-cf-frame-mini-row short" />}
                      </div>
                    </div>
                    <div className="dl-cf-frame-v-lbl">{v}</div>
                  </div>
                ))}
              </div>
            </td>
            <td>Using filter option rather than independent Tabs</td>
            <td>Independent tabs are causing break in workflow of the user.</td>
            <td>We will need to design filter pills for showing application of result filters</td>
            <td style={{color:'#97A0AF', fontStyle:'italic'}}>—</td>
          </tr>
        </tbody>
      </table>
      <div className="dl-cf-out-footer">
        Generated by Design Ledger · Apr 22, 2026, 21:05:24
      </div>
    </div>
  );
}

/* ── Output Walkthrough (5 steps) ── */
function OutputWalkthrough() {
  const steps = [
    {
      num: '01',
      tag: 'Log Tab',
      context: 'Every decision needs a home',
      headline: 'Log by Requirement. File it before you forget it.',
      desc: 'Before you log a single decision, you tell Design Ledger what you\'re working on. Link it to a requirement ID (CORE-402, R1, whatever your team uses) and from that point, every iteration you capture belongs somewhere. You\'re not organizing later. You\'re organized now.',
      painSolved: 'No more retroactive sorting. Every decision is filed the moment it\'s made.',
      visual: <OWStep1Visual />,
      visualSide: 'right',
    },
    {
      num: '02',
      tag: 'Iteration Logging',
      context: 'Don\'t let the moment pass',
      headline: 'You\'re already looking at both frames. Log why you chose one.',
      desc: 'You\'re looking at V1 and V2 right now. You know which one you\'re going with and exactly why. Select the frames, assign them to version slots. The plugin grabs them as full-res PNGs without you lifting a finger. Then write the reasoning while it\'s still in your head. Decision. Rationale. Trade-off. Done.',
      painSolved: 'The moment of decision is also the moment of documentation. Nothing gets lost in translation.',
      visual: <PluginMockup />,
      visualSide: 'left',
    },
    {
      num: '03',
      tag: 'Repository',
      context: 'Your decisions, always findable',
      headline: 'Click any version thumbnail. The canvas jumps straight to that frame.',
      desc: 'Three months of iterations. Hundreds of frames. You shouldn\'t have to hunt. The Repository shows everything you\'ve logged, organized by requirement. Click any version thumbnail and the canvas scrolls straight to it. The plugin knows exactly where that frame lives.',
      painSolved: 'From review comment to the exact frame in two seconds, not two minutes.',
      visual: <OWStep3Visual />,
      visualSide: 'right',
    },
    {
      num: '04',
      tag: 'Export Tab',
      context: 'Point it at Confluence, once',
      headline: 'Set your destination once. Design Ledger remembers it forever.',
      desc: 'You configure your Confluence destination once: your email, API token, and the exact page you want the table to land on. Design Ledger remembers all of it. Next time you hit export, it already knows where to go.',
      painSolved: 'Set it once, then forget it. The export knows where it belongs.',
      visual: <OWStep4Visual />,
      visualSide: 'left',
    },
    {
      num: '05',
      tag: 'Output',
      context: 'This is the moment',
      headline: 'Hit sync. A complete Confluence page, ready to share.',
      desc: 'Everything you logged (frames, versions, decisions, rationale, trade-offs) lands in Confluence as a structured, formatted table. Not a draft. Not a skeleton. A complete documentation page, ready to share. What used to take weeks is already done, because you logged it as you went.',
      painSolved: null,
      visual: <OWStep5Visual />,
      visualSide: 'full',
    },
  ];

  return (
    <div className="dl-ow">
      <div className="dl-ow-section-label">The workflow, end to end</div>
      <div className="dl-ow-steps">
        {steps.map((step, i) => (
          <div key={i} className="dl-ow-step dl-reveal" style={{transitionDelay: `${i * 0.05}s`}}>
            {step.visualSide === 'full' ? (
              <div>
                <div className="dl-ow-step-full-text">
                  <div>
                    <div className="dl-ow-eyebrow">
                      <span className="dl-ow-num">{step.num}</span>
                      <span className="dl-ow-tag">{step.tag}</span>
                    </div>
                    <div className="dl-ow-step-context">{step.context}</div>
                    <h3 className="dl-ow-headline">{step.headline}</h3>
                  </div>
                  <p className="dl-ow-desc" style={{margin:0}}>{step.desc}</p>
                </div>
                {step.visual}
              </div>
            ) : (
              <div className={`dl-ow-step-cols${step.visualSide === 'left' ? ' visual-left' : ''}`}>
                <div>
                  <div className="dl-ow-eyebrow">
                    <span className="dl-ow-num">{step.num}</span>
                    <span className="dl-ow-tag">{step.tag}</span>
                  </div>
                  <div className="dl-ow-step-context">{step.context}</div>
                  <h3 className="dl-ow-headline">{step.headline}</h3>
                  <p className="dl-ow-desc">{step.desc}</p>
                  {step.painSolved && (
                    <div className="dl-ow-pain-callout">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3FB950" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>{step.painSolved}</span>
                    </div>
                  )}
                </div>
                <div>{step.visual}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Tech Architecture Diagram ── */
function TechDiagram() {
  const nodes = [
    {
      icon: '🎨',
      color: 'rgba(230, 84, 56, 0.15)',
      border: 'rgba(230, 84, 56, 0.3)',
      title: 'Figma Plugin UI',
      detail: 'HTML/CSS/JS · Figma Plugin API',
      connector: { label: 'exportAsync() → PNG bytes', flow: '↓' }
    },
    {
      icon: '💾',
      color: 'rgba(0, 118, 168, 0.12)',
      border: 'rgba(0, 118, 168, 0.3)',
      title: 'figma.clientStorage',
      detail: 'Persists ledger data across sessions',
      connector: { label: 'REST API · Basic Auth · multipart upload', flow: '↓' }
    },
    {
      icon: '📄',
      color: 'rgba(0, 82, 204, 0.15)',
      border: 'rgba(0, 82, 204, 0.35)',
      title: 'Confluence Cloud',
      detail: 'Atlassian REST API v2 · storage format XML',
      connector: null
    },
  ];

  return (
    <div className="dl-arch-diagram">
      <div style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6E7681', marginBottom: '1.5rem' }}>
        System Architecture
      </div>
      <div className="dl-arch-nodes">
        {nodes.map((node, i) => (
          <React.Fragment key={i}>
            <div className="dl-arch-node">
              <div className="dl-arch-node-icon" style={{ background: node.color, border: `1px solid ${node.border}` }}>
                {node.icon}
              </div>
              <div className="dl-arch-node-text">
                <div className="dl-arch-node-title">{node.title}</div>
                <div className="dl-arch-node-detail">{node.detail}</div>
              </div>
            </div>
            {node.connector && (
              <div className="dl-arch-connector">
                <div className="dl-arch-connector-line" />
                <div className="dl-arch-connector-label">{node.connector.label}</div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════ */
/* MAIN COMPONENT                                                 */
/* ══════════════════════════════════════════════════════════════ */
export default function CaseStudyDesignLedger({ onBack }) {

  const [impactVisible, setImpactVisible] = useState(false);
  const impactRef = useRef(null);
  const [navStuck, setNavStuck] = useState(false);
  const sentinelRef = useRef(null);

  /* Detect when main nav has scrolled away → fix the sub-nav */
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const obs = new IntersectionObserver(
      ([entry]) => setNavStuck(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, []);

  /* Scroll reveal */
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('dl-visible');
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.dl-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Impact count-up trigger */
  useEffect(() => {
    if (!impactRef.current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setImpactVisible(true);
      });
    }, { threshold: 0.3 });
    observer.observe(impactRef.current);
    return () => observer.disconnect();
  }, []);

  const hoursCount = useCountUp(10, 2000, impactVisible);
  const captureCount = useCountUp(100, 1800, impactVisible);

  const displaySections = [
    { id: 'dl-problem', label: 'Problem' },
    { id: 'dl-insight', label: 'Insight' },
    { id: 'dl-solution', label: 'Solution' },
    { id: 'dl-technical', label: 'Technical' },
    { id: 'dl-impact', label: 'Impact' },
    { id: 'dl-reflection', label: 'Reflection' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Sentinel: sits at the bottom of the main nav area. When it leaves the viewport, sub-nav goes fixed. */}
      <div ref={sentinelRef} style={{ height: 0, pointerEvents: 'none' }} />

      {/* Sub-nav: relative by default, fixed once main nav scrolls away */}
      <nav className={`dl-nav${navStuck ? ' dl-nav-stuck' : ''}`}>
        <div className="dl-nav-inner">
          <button className="dl-nav-back" onClick={onBack}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            All Work
          </button>
          <div className="dl-nav-sections">
            {displaySections.map(s => (
              <button key={s.id} className="dl-nav-link" onClick={() => scrollTo(s.id)}>
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

    <div className="dl-page case-study-page">
      {/* Spacer holds the nav's space when it becomes fixed so content doesn't jump */}
      {navStuck && <div style={{ height: 52 }} />}

      {/* ══════════════════════════════════════════════ */}
      {/* HERO                                          */}
      {/* ══════════════════════════════════════════════ */}
      <section className="dl-hero">
        <div className="dl-hero-noise" />
        <div className="dl-hero-orb-1" />
        <div className="dl-hero-orb-2" />
        <div className="dl-wrap" style={{ width: '100%' }}>
          <div className="dl-hero-content">

            <div className="dl-hero-eyebrow dl-reveal">
              <span className="dl-hero-tag accent-tag">Figma Plugin</span>
              <span className="dl-hero-tag">Self-Initiated</span>
              <span className="dl-hero-tag">Design + Engineering</span>
              <span className="dl-hero-tag">Solo Project</span>
            </div>

            <h1 className="dl-hero-headline dl-reveal dl-reveal-delay-1">
              Designers were spending weeks on a task<br />
              that should take <em>minutes.</em>
            </h1>

            <p className="dl-hero-punchline dl-reveal dl-reveal-delay-2">So I built the fix.</p>

            <p className="dl-hero-sub dl-reveal dl-reveal-delay-3">
              Design Ledger started as a personal frustration. It became a Figma plugin
              that captures every design decision the moment it's made, and turns months
              of scattered notes into a clean, structured Confluence page with one click.
            </p>

            <div className="dl-hero-stats dl-reveal dl-reveal-delay-4">
              <div className="dl-hero-stat">
                <div className="dl-hero-stat-number">3 wks → 5 min</div>
                <div className="dl-hero-stat-label">Post-Design Documentation</div>
              </div>
              <div className="dl-hero-stat">
                <div className="dl-hero-stat-number">~10 hrs</div>
                <div className="dl-hero-stat-label">Saved per Design Cycle</div>
              </div>
              <div className="dl-hero-stat">
                <div className="dl-hero-stat-number">100%</div>
                <div className="dl-hero-stat-label">Decision Capture Rate</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* PROBLEM                                       */}
      {/* ══════════════════════════════════════════════ */}
      <section id="dl-problem" className="dl-problem">
        <div className="dl-wrap">

          <div className="dl-section-label dl-reveal">01 / The Problem</div>
          <h2 className="dl-reveal dl-reveal-delay-1" style={{ fontFamily: 'var(--dl-serif)', fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', lineHeight: 1.15, color: '#F0F6FC', maxWidth: '780px', marginBottom: '5rem' }}>
            The Documentation Graveyard
          </h2>

          <div className="dl-problem-grid">
            <div>
              <ul className="dl-problem-bullets dl-reveal">
                <li>
                  At MathWorks, every design decision traces back to a <strong>specific requirement.</strong> One requirement. Dozens of frames. Months of iterations.
                </li>
                <li>
                  In the moment, you know exactly why you chose V2, dropped the sidebar, or changed direction after an engineering review. <strong>That clarity doesn't last.</strong>
                </li>
                <li>
                  Decisions end up scattered across <strong>Figma stickies, Discussion comments, and 11pm notes</strong> that made sense at the time but are impossible to reconstruct later.
                </li>
                <li>
                  When sprint review arrives, you spend days doing archaeology on your own work, rewriting rationale from memory, <strong>not moving forward.</strong>
                </li>
              </ul>

              <blockquote className="dl-pull-quote dl-reveal dl-reveal-delay-1">
                "The best design work was always followed by the worst documentation work. It felt like
                archaeology, but for decisions you'd just made."
              </blockquote>
            </div>

            <div>
              {/* Chaos visualization */}
              <div className="dl-reveal dl-reveal-delay-1">
                <div style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6E7681', marginBottom: '40px' }}>
                  Where decisions actually live
                </div>
                <div className="dl-chaos-grid">
                  {[
                    { source: 'Figma comment', text: 'went with V2, felt cleaner', lost: false },
                    { source: 'Discussion Comment', text: 'PM asked to deprioritize the filter panel for now', lost: false },
                    { source: 'Personal note', text: 'tradeoff: dense vs scannable. engineers preferred list', lost: true },
                    { source: 'Meeting', text: 'Stakeholder review: header too heavy, reduce weight', lost: true },
                    { source: 'Figma sticky', text: 'V3 rejected. too far from dev feasibility', lost: false },
                    { source: 'Memory', text: 'Why we dropped the sidebar... I think?', lost: true },
                  ].map((item, i) => (
                    <div key={i} className={`dl-chaos-item${item.lost ? ' lost' : ''}`} data-source={item.source}>
                      {item.text}
                    </div>
                  ))}
                </div>
                <div className="dl-lost-label">~70% of decisions never reach Confluence</div>
              </div>

              {/* Workflow loss diagram */}
              <div className="dl-workflow-loss dl-reveal dl-reveal-delay-2">
                <div className="dl-workflow-loss-title">How it actually goes</div>
                <div className="dl-loss-flow">
                  {[
                    { state: 'ok', step: 'Design work happens inside Figma', detail: 'Iterations, decisions, pivots. All in real time.' },
                    { state: 'warn', step: 'Design gets approved', detail: 'Now documentation is required. The clock starts.' },
                    { state: 'bad', step: 'Weeks of manual cleanup', detail: 'Screenshotting every frame. Rewriting rationale you already know. Building tables you shouldn\'t have to.' },
                    { state: 'bad', step: 'Something always gets lost', detail: 'The context that was crystal clear in the room doesn\'t survive the reconstruction.' },
                  ].map((item, i) => (
                    <div key={i} className="dl-loss-step">
                      <div className={`dl-loss-step-dot ${item.state}`}>
                        {item.state === 'ok' ? '✓' : item.state === 'warn' ? '!' : '×'}
                      </div>
                      <div className="dl-loss-step-text">
                        <strong>{item.step}</strong><br />{item.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* INSIGHT                                       */}
      {/* ══════════════════════════════════════════════ */}
      <section id="dl-insight" className="dl-insight">
        <div className="dl-wrap">

          <div className="dl-section-label dl-reveal" style={{ textAlign: 'center' }}>02 / The Insight</div>

          <p className="dl-insight-statement dl-reveal dl-reveal-delay-1">
            The decision happens <em>inside</em> Figma.<br />
            The documentation happens <em>outside</em> Figma.<br />
            That gap is the entire problem.
          </p>

          {/* ─── Before → After Visual ─── */}
          <div className="dl-insight-ba dl-reveal dl-reveal-delay-2">

            {/* BEFORE — 3 scattered tools */}
            <div className="dl-ib-before-panel">
              <div className="dl-ib-panel-header before">
                <span className="dl-ib-status-dot before" />
                Before: scattered across tools
              </div>

              <div className="dl-ib-svgs">
                {[
                  { src: '/Design Ledger/Sticky.svg',       label: 'Figma Stickies',    sub: 'FigJam notes & comments' },
                  { src: '/Design Ledger/Custom.svg',       label: 'Custom Log',         sub: 'Spreadsheet workarounds' },
                  { src: '/Design Ledger/Detailed Log.svg', label: 'Manual Confluence',  sub: 'Hand-built tables' },
                ].map((item, i) => (
                  <div key={i} className="dl-ib-svg-card">
                    <div className="dl-ib-svg-img-wrap">
                      <img src={item.src} alt={item.label} />
                    </div>
                    <div className="dl-ib-svg-meta">
                      <div className="dl-ib-svg-label">{item.label}</div>
                      <div className="dl-ib-svg-sub">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="dl-ib-pain-list">
                {[
                  'Writing it from memory, weeks after the fact',
                  'Screenshots grabbed one by one, pasted by hand',
                  'Two to three weeks of work, after the real work was done',
                ].map((pt, i) => (
                  <div key={i} className="dl-ib-pain-item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F85149" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    {pt}
                  </div>
                ))}
              </div>
            </div>

            {/* GAP DIVIDER — horizontal strip between panels */}
            <div className="dl-ib-gap-row">
              <div className="dl-ib-gap-line-h" />
              <div className="dl-ib-gap-badge">The Gap</div>
              <div className="dl-ib-gap-arrow">→</div>
              <div className="dl-ib-gap-line-h" />
            </div>

            {/* AFTER — Design Ledger */}
            <div className="dl-ib-after-panel">
              <div className="dl-ib-panel-header after">
                <span className="dl-ib-status-dot after" />
                After: one unified system
              </div>

              {/* Mini plugin card */}
              <div className="dl-ib-dl-card">
                <div className="dl-ib-dl-header">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#E05438">
                    <path d="M22,12.72c0-1.74-1.22-3.32-3.48-4.14L12,5.28l-6.52,3.3C3.22,9.4,2,10.98,2,12.72c0,3.14,3.15,6.56,10,10.28 C18.85,19.28,22,15.86,22,12.72z M12,7.24l4.5,2.28L12,11.8L7.5,9.52L12,7.24z M4,12.72c0-0.78,0.59-1.5,1.74-2.09l5.26,2.66v6.24 C6.08,16.89,4,14.61,4,12.72z M13,19.53v-6.24l5.26-2.66c1.15,0.58,1.74,1.3,1.74,2.09C20,14.61,17.92,16.89,13,19.53z"/>
                  </svg>
                  <span>Design<span style={{ color: '#0076A8' }}>Ledger</span></span>
                  <span className="dl-ib-live-badge">● Live in Figma</span>
                </div>
                {/* Capture moment illustration */}
                <div className="dl-ib-capture-row">
                  {['V1', 'V2'].map(v => (
                    <div key={v} className="dl-ib-capture-slot">
                      <div className="dl-ib-slot-thumb">
                        <span style={{ fontSize: '8px', fontWeight: 800, color: '#0076A8' }}>{v}</span>
                      </div>
                      <div style={{ fontSize: '9px', color: '#3FB950', fontWeight: 700 }}>✓ Captured</div>
                    </div>
                  ))}
                </div>
                <div className="dl-ib-commit-row">
                  <div className="dl-ib-field-stub" />
                  <div className="dl-ib-field-stub" style={{ opacity: 0.6 }} />
                  <div className="dl-ib-commit-btn">Commit Decision →</div>
                </div>
              </div>

              <div className="dl-ib-outcomes">
                {[
                  { num: '5 min', label: 'Full Confluence table generated' },
                  { num: '100%', label: 'Decision capture rate' },
                  { num: '1 click', label: 'To publish to Confluence' },
                ].map((o, i) => (
                  <div key={i} className="dl-ib-outcome-row">
                    <span className="dl-ib-outcome-num">{o.num}</span>
                    <span className="dl-ib-outcome-label">{o.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <p className="dl-reveal dl-reveal-delay-3" style={{ textAlign: 'center', color: '#8B949E', fontSize: '1rem', lineHeight: 1.7, maxWidth: '1200px', margin: '5rem auto 5rem' }}>
            I kept coming back to one thing: the designer already knows the answer. At the moment they
            pick V2 over V1, they can explain exactly why. The reasoning is right there, fully formed.
            The problem isn't knowledge. <em>It's capture.</em> What if the tool just made space for that
            moment? Right there, before they move to the next frame?
          </p>

        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* SOLUTION                                      */}
      {/* ══════════════════════════════════════════════ */}
      <section id="dl-solution" className="dl-solution">
        <div className="dl-wrap">

          <div className="dl-section-label dl-reveal">03 / The Solution</div>
          <h2 className="dl-reveal dl-reveal-delay-1" style={{ fontFamily: 'var(--dl-serif)', fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', lineHeight: 1.15, color: '#F0F6FC', maxWidth: '720px', marginBottom: '1.75rem' }}>
            Design Ledger, a Figma plugin
          </h2>
          <p className="dl-reveal dl-reveal-delay-2" style={{ color: '#8B949E', fontSize: '1.1rem', maxWidth: '580px', marginBottom: '6rem', lineHeight: 1.85 }}>
            I designed every screen, wrote every line of code, and wired every API. Not because
            I had to, but because I needed to understand what it really took to make the workflow
            feel genuinely frictionless.
          </p>

          <div className="dl-solution-intro">
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6E7681', marginBottom: '2rem' }}>The workflow</div>
              <div className="dl-workflow-steps">
                {[
                  { title: 'Name your requirement and task', desc: 'Start a session with the Requirement ID and task already set. From that point, everything you log is tied to that context. No reorganizing later.' },
                  { title: 'Select frames directly from the canvas', desc: 'Click a frame in Figma and assign it to a version slot. The plugin captures it as a full-resolution PNG. Instantly, quietly, without breaking your flow.' },
                  { title: 'Write the reasoning while it\'s still warm', desc: 'Before you move on, log what you decided and why. There\'s a structured field for decision, rationale, and trade-off right there. Thirty seconds, while everything\'s clear.' },
                  { title: 'Commit it to the ledger', desc: 'Hit commit and it\'s saved, persisted in figma.clientStorage so it survives session restarts, plugin updates, and collaborators opening the file days later.' },
                  { title: 'One click to Confluence', desc: 'When you\'re ready, hit sync. Every frame, every version label, every decision flows into a formatted Confluence table. Already at the right page, already structured correctly.' },
                ].map((step, i) => (
                  <div key={i} className="dl-workflow-step dl-reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                    <div className="dl-step-number">{i + 1}</div>
                    <div className="dl-step-content">
                      <div className="dl-step-title">{step.title}</div>
                      <div className="dl-step-desc">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dl-reveal dl-reveal-delay-2">
              <div className="dl-plugin-label">Live Plugin Interface</div>
              <PluginMockup />
            </div>
          </div>

          <OutputWalkthrough />

        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* TECHNICAL                                     */}
      {/* ══════════════════════════════════════════════ */}
      <section id="dl-technical" className="dl-technical">
        <div className="dl-wrap">

          <div className="dl-section-label dl-reveal">04 / Technical Depth</div>
          <h2 className="dl-reveal dl-reveal-delay-1" style={{ fontFamily: 'var(--dl-serif)', fontSize: 'clamp(1.8rem, 3vw, 3rem)', lineHeight: 1.15, color: '#F0F6FC', maxWidth: '680px', marginBottom: '5rem' }}>
            I didn't just design it. I built it.
          </h2>

          <div className="dl-tech-grid">
            <div className="dl-reveal">
              <TechDiagram />
            </div>

            <div className="dl-tech-bullets">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>
                  ),
                  title: 'Live frame capture via Plugin API',
                  desc: 'The moment you assign a frame to a version slot, node.exportAsync() fires, capturing it at 2× resolution without you touching a screenshot tool. The image exists in the plugin before you\'ve even noticed it\'s there.'
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                  ),
                  title: 'Persistent cross-session storage',
                  desc: 'Design decisions shouldn\'t disappear when a plugin restarts. figma.clientStorage keeps the full ledger as structured JSON. Still there after a reload, a crash, or a plugin update a week later.'
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                  ),
                  title: 'Solving the Confluence image upload wall',
                  desc: "Confluence quietly refuses base64 image data from browser contexts, a CSP restriction that silently blocks uploads. I traced the failure, understood the constraint, and solved it: a lightweight local HTTP server that gives frame images real-URL identities Confluence accepts without complaint."
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  ),
                  title: 'Native Confluence storage format',
                  desc: 'Confluence doesn\'t render Markdown or HTML. It has its own XML-based storage format. The export generates it directly, which is why the tables, images, and hierarchy come out exactly right the first time.'
                },
              ].map((bullet, i) => (
                <div key={i} className={`dl-tech-bullet dl-reveal dl-reveal-delay-${i + 1}`}>
                  <div className="dl-tech-bullet-icon">{bullet.icon}</div>
                  <div>
                    <div className="dl-tech-bullet-title">{bullet.title}</div>
                    <div className="dl-tech-bullet-desc">{bullet.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* IMPACT                                        */}
      {/* ══════════════════════════════════════════════ */}
      <section id="dl-impact" className="dl-impact" ref={impactRef}>
        <div className="dl-wrap">

          <div className="dl-section-label dl-reveal" style={{ textAlign: 'center' }}>05 / Impact</div>
          <h2 className="dl-impact-headline dl-reveal dl-reveal-delay-1">
            Weeks of work.<br />Now done before lunch.
          </h2>

          {/* Big numbers */}
          <div className="dl-impact-numbers dl-reveal dl-reveal-delay-2">
            <div className="dl-impact-number-cell">
              <div className="dl-impact-big-number">3 wks<span className="unit"> → </span>5 min</div>
              <div className="dl-impact-big-label">Post-design documentation time</div>
            </div>
            <div className="dl-impact-number-cell">
              <div className="dl-impact-big-number">~{hoursCount}<span className="unit"> hrs</span></div>
              <div className="dl-impact-big-label">Saved per designer per product cycle</div>
            </div>
            <div className="dl-impact-number-cell">
              <div className="dl-impact-big-number">{captureCount}<span className="unit">%</span></div>
              <div className="dl-impact-big-label">Decision capture rate (vs. ~30% manual)</div>
            </div>
            <div className="dl-impact-number-cell">
              <div className="dl-impact-big-number" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)' }}>First</div>
              <div className="dl-impact-big-label">Tool at MathWorks to close the Figma → Confluence loop natively</div>
            </div>
          </div>

          {/* Before / After */}
          <div className="dl-before-after dl-reveal dl-reveal-delay-2">
            <div className="dl-ba-col before">
              <div className="dl-ba-header">Before Design Ledger</div>
              <div className="dl-ba-items">
                {[
                  "2–3 weeks of documentation, starting after the design was already approved",
                  'Rationale pieced together from memory and month-old Slack threads',
                  'Every screenshot grabbed by hand, pasted into Confluence one at a time',
                  'Context that was crisp in the room became vague on the page',
                  'The hardest creative work, rewarded with the most tedious admin work',
                ].map((item, i) => (
                  <div key={i} className="dl-ba-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F85149" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="dl-ba-col after">
              <div className="dl-ba-header">After Design Ledger</div>
              <div className="dl-ba-items">
                {[
                  'Documentation happens in the moment, not in the aftermath',
                  'A complete Confluence table, with screenshots, in under five minutes',
                  'No screenshotting, no copying, no pasting. The plugin handles all of it.',
                  'Rationale written when the reasoning was clearest, not reconstructed weeks later',
                  'Developers get actual context, not a polished rewrite of what you vaguely remember',
                ].map((item, i) => (
                  <div key={i} className="dl-ba-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3FB950" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="dl-testimonial dl-reveal dl-reveal-delay-3">
            <div className="dl-testimonial-quote">
              "I finished a 3-week design sprint on Friday. By Monday, the Confluence documentation was
              done. Completely, with every version screenshot and rationale, because I'd already logged
              it all as I went. I've never had that happen before."
            </div>
            <div className="dl-testimonial-attr">UX Designer, MathWorks · Design Ledger pilot user</div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* REFLECTION                                    */}
      {/* ══════════════════════════════════════════════ */}
      <section id="dl-reflection" className="dl-reflection">
        <div className="dl-wrap">

          <div className="dl-section-label dl-reveal">06 / Reflection</div>

          <div className="dl-reflection-grid">
            <div className="dl-reveal dl-reveal-delay-1">
              <h3 className="dl-reflection-headline">
                What I learned,<br />and where it goes next.
              </h3>
              <div className="dl-role-tag-row">
                <span className="dl-role-tag">UX Research</span>
                <span className="dl-role-tag">Interaction Design</span>
                <span className="dl-role-tag">Figma Plugin API</span>
                <span className="dl-role-tag">HTML / CSS / JS</span>
                <span className="dl-role-tag">MCP Integration</span>
                <span className="dl-role-tag">Self-Initiated</span>
              </div>
            </div>

            <div className="dl-reveal dl-reveal-delay-2">
              <div className="dl-reflection-content">
                <p>
                  I came into this thinking the solution was a smarter documentation tool.
                  What I built instead was something quieter: a way to make an unavoidable task
                  almost disappear. <strong>The real insight wasn't about documentation at all.</strong>
                  It was that the best time to capture a decision is the exact moment you're making it.
                  Everything else is recovery.
                </p>
                <p>
                  Building it end-to-end (designing the UI, writing the plugin code, solving the API
                  constraints) taught me something you don't get from just designing the surface.
                  A tool used inside another tool is held to a different standard. Every extra click,
                  every modal, every required field is a context switch. <strong>Designing for that
                  sharpened how I think about all of it:</strong> what earns the right to interrupt
                  someone, and what should just stay out of the way.
                </p>
              </div>

              <div className="dl-next-items">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                      </svg>
                    ),
                    title: 'Video & Prototype Capture',
                    desc: 'Some decisions are about motion, not just layout. Attaching a Loom or prototype link to an iteration would bring that whole dimension in.'
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                      </svg>
                    ),
                    title: 'Shared Ledger',
                    desc: 'Right now the ledger belongs to whoever opened the plugin. A shared backend would let an entire design team log against the same requirement. One source of truth for the whole project.'
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 10H6V7h12v12zm-9-6c-.83 0-1.5-.67-1.5-1.5S8.17 10 9 10s1.5.67 1.5 1.5S9.83 13 9 13zm7.5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM8 15h8v2H8v-2z"/>
                      </svg>
                    ),
                    title: 'AI Rationale Drafting',
                    desc: 'The obvious next step: let the model look at both frames and take a first pass at the rationale. The designer reviews it, not starts from zero.'
                  },
                ].map((item, i) => (
                  <div key={i} className="dl-next-item">
                    <div className="dl-next-item-icon">{item.icon}</div>
                    <div className="dl-next-item-title">{item.title}</div>
                    <div className="dl-next-item-desc">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
    </>
  );
}
