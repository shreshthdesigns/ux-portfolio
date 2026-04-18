import React, { useEffect } from 'react';
import ModelFinderProblemVis from './case-study/ModelFinderProblemVis';


export default function CaseStudyModelFinder({ onBack, activeSection, displaySections }) {

  // Auto-scroll to top on mount for deep-linked editorial loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study-page cs-modelfinder-editorial">
      {/* 
        NOTE: The global topbar is defined externally, but we hide floating 
        purple buttons (if they bleed through) in our editorial css (or you can fix globally).
      */}
      <div className="cs-topbar" style={{ background: 'rgba(255,255,255,0.95)', borderBottom: '1px solid #f1f1f1' }}>
        <div className="cs-topbar-inner">
          <button className="cs-back" onClick={onBack} style={{ color: '#2B5440' }}>
            <span className="cs-back-arrow">←</span>
            Back to Work
          </button>
          <div className="cs-section-nav">
            {displaySections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={activeSection === section.id ? "active" : ""}
                style={{ color: '#2B5440' }}
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap">
        <main className="cs-content">
          
          {/* SECTION 1 — HERO — PREMIUM FOREST GREEN */}
          <section id="overview" className="cs-ed-section cs-ed-hero mf-hero-bleed">
            <div className="hero-text">
              <div className="cs-minimal-label">Case Study</div>
              <h1 className="cs-ed-h1">
                Model Finder — From CLI Chaos to Visual Discovery
              </h1>
              <p className="cs-ed-hero-subtitle">
                Helping engineers find the right model across 10K+ assets in seconds instead of minutes.
              </p>
              <div className="cs-v2-metadata" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "none", color: "rgba(255,255,255,0.8)" }}>
                <div className="meta-item"><span style={{color: "rgba(255,255,255,0.5)"}}>Duration:</span> 10 weeks</div>
                <div className="meta-item"><span style={{color: "rgba(255,255,255,0.5)"}}>Role:</span> End-to-end UX</div>
              </div>
            </div>
            
            <div className="hero-visual cs-ed-zoom-wrap">
              {/* Premium 3-pane SVG visual reflecting real UI, not empty text */}
              <div className="cs-ed-visual" style={{ background: "#F1F5F9", position: "relative" }}>
                <svg width="100%" height="auto" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style={{ display: "block" }}>
                  <rect x="0" y="0" width="600" height="400" fill="#E2E8F0" />
                  <rect x="0" y="32" width="600" height="368" fill="#F8FAFC" />
                  {/* Top Bar */}
                  <rect x="0" y="0" width="600" height="32" fill="#334155" />
                  <circle cx="20" cy="16" r="4" fill="#64748B" />
                  <circle cx="32" cy="16" r="4" fill="#64748B" />
                  <circle cx="44" cy="16" r="4" fill="#64748B" />
                  
                  {/* Left Pane (Filters) */}
                  <rect x="0" y="32" width="140" height="368" fill="#FFFFFF" />
                  <path d="M 140 32 L 140 400" stroke="#E2E8F0" strokeWidth="1" />
                  <rect x="16" y="48" width="80" height="8" rx="4" fill="#CBD5E1" />
                  <rect x="16" y="68" width="100" height="6" rx="3" fill="#E2E8F0" />
                  <rect x="16" y="84" width="70" height="6" rx="3" fill="#E2E8F0" />
                  
                  {/* Main Results Grid */}
                  <rect x="160" y="52" width="120" height="80" rx="6" fill="#FFFFFF" stroke="#CBD5E1" />
                  <rect x="160" y="52" width="120" height="40" rx="6" fill="#E2E8F0" />
                  
                  <rect x="290" y="52" width="120" height="80" rx="6" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="2" />
                  <rect x="290" y="52" width="120" height="40" rx="6" fill="#93C5FD" />
                  
                  <rect x="160" y="142" width="120" height="80" rx="6" fill="#FFFFFF" stroke="#CBD5E1" />
                  <rect x="160" y="142" width="120" height="40" rx="6" fill="#E2E8F0" />

                  {/* Right Pane (Details) */}
                  <rect x="440" y="32" width="160" height="368" fill="#FFFFFF" />
                  <path d="M 440 32 L 440 400" stroke="#E2E8F0" strokeWidth="1" />
                  <rect x="456" y="48" width="120" height="80" rx="4" fill="#DBEAFE" />
                  <rect x="456" y="140" width="100" height="12" rx="4" fill="#64748B" />
                  <rect x="456" y="160" width="130" height="6" rx="3" fill="#CBD5E1" />
                  <rect x="456" y="172" width="90" height="6" rx="3" fill="#CBD5E1" />
                </svg>
              </div>
            </div>
          </section>

          {/* SECTION 2 — DRAMA (PROBLEM) */}
          <section id="problem" className="cs-ed-section cs-ed-split">
            <div className="split-text">
              <h2 className="cs-ed-h2">The Problem</h2>
              <p className="cs-ed-drama-text">
                Search wasn’t broken — discovery was.
              </p>
              <p className="cs-ed-body" style={{ marginTop: '2rem' }}>
                Engineers spent over 15 minutes per search running command-line queries across massive, unstructured repositories. There was no visibility before opening a file, leading to constant duplicate work and abandoned IP.
              </p>
            </div>
            
            <div className="split-visual">
              <ModelFinderProblemVis />
            </div>
          </section>

          {/* SECTION 3 — REFRAMING (FULL WIDTH TYPO) */}
          <section className="cs-ed-section" style={{ textAlign: 'center', padding: '8rem 0' }}>
            <h2 className="cs-ed-h2">Reframing the Focus</h2>
            <div className="cs-ed-quote" style={{ maxWidth: 900, margin: '0 auto' }}>
              “Users don’t look for a model — they look for a model with specific properties.”
            </div>
          </section>

          {/* SECTION 4 — SYSTEM W/ FULL HORIZONTAL FLOW */}
          <section id="system" className="cs-ed-section">
             <h2 className="cs-ed-h2" style={{ textAlign: "center", marginBottom: "4rem" }}>System Architecture</h2>
             
             {/* Big horizontal flow SVG */}
             <div className="cs-ed-visual-flat" style={{ padding: "4rem 2rem", marginBottom: "4rem" }}>
               <svg width="100%" height="auto" viewBox="0 0 1000 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Connections */}
                  <path d="M 120 60 L 920 60" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6 6" />
                  
                  <g transform="translate(60, 20)">
                    <rect width="120" height="80" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                    <circle cx="60" cy="30" r="10" fill="#E2E8F0" />
                    <text x="60" y="60" fill="#475569" fontSize="14" fontWeight="600" textAnchor="middle">1. Select</text>
                  </g>

                  <g transform="translate(240, 20)">
                    <rect width="120" height="80" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                    <circle cx="60" cy="30" r="10" fill="#E2E8F0" />
                    <text x="60" y="60" fill="#475569" fontSize="14" fontWeight="600" textAnchor="middle">2. Search</text>
                  </g>

                  <g transform="translate(420, 20)">
                    <rect width="120" height="80" rx="12" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="2" />
                    <circle cx="60" cy="30" r="10" fill="#DBEAFE" />
                    <text x="60" y="60" fill="#1E3A8A" fontSize="14" fontWeight="600" textAnchor="middle">3. Filter</text>
                  </g>

                  <g transform="translate(600, 20)">
                    <rect width="120" height="80" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                    <circle cx="60" cy="30" r="10" fill="#E2E8F0" />
                    <text x="60" y="60" fill="#475569" fontSize="14" fontWeight="600" textAnchor="middle">4. Evaluate</text>
                  </g>

                  <g transform="translate(780, 20)">
                    <rect width="120" height="80" rx="12" fill="#2B5440" />
                    <circle cx="60" cy="30" r="10" fill="rgba(255,255,255,0.2)" />
                    <text x="60" y="60" fill="#FFFFFF" fontSize="14" fontWeight="600" textAnchor="middle">5. Act</text>
                  </g>
               </svg>
             </div>

             <div className="cs-ed-zoom-wrap" style={{ margin: "0 auto", maxWidth: "1000px" }}>
                <div className="cs-ed-visual">
                   <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2Y4ZmFmYyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzk0YTNiOCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+W0RldGFpbGVkIDMtUGFuZSBVaSBWaXN1YWwgSGVyZV08L3RleHQ+PC9zdmc+" alt="UI Representation Placeholder" style={{ width: "100%", display: "block" }} />
                </div>
             </div>
          </section>

          {/* SECTION 5 — EXPLORATION (NEW CRITICAL ALTERNATING VISUALS) */}
          <section id="exploration" className="cs-ed-section">
            <h2 className="cs-ed-h2" style={{ textAlign: "center", marginBottom: "4rem" }}>Exploration & Decisions</h2>
            
            {/* Iteration 1 */}
            <div className="cs-ed-exploration-row">
              <div className="cs-ed-exploration-desc">
                <div className="tradeoff-label reject">Iteration 1 — Rejected</div>
                <h3>Filter Overload</h3>
                <p className="cs-ed-body">Early designs exposed all metadata taxonomy tags at once. User testing showed immediate cognitive overload and scroll fatigue within the left panel.</p>
              </div>
              <div className="cs-ed-visual-flat" style={{ minHeight: "250px", background: "#FFFFFF", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRERFMjQ5Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNzEzQjUzIiAgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+W01lc3N5IEZpbHRlciBVSV08L3RleHQ+PC9zdmc+" style={{ width: "100%", height: "auto" }} alt="Messy UI"/>
              </div>
            </div>

            {/* Iteration 2 */}
            <div className="cs-ed-exploration-row" style={{ direction: 'rtl' }}>
              <div className="cs-ed-exploration-desc" style={{ direction: 'ltr' }}>
                <div className="tradeoff-label accept">Iteration 2 — Chosen</div>
                <h3>Progressive Disclosure</h3>
                <p className="cs-ed-body">We shifted to entirely collapsible taxonomy groups, locking the "Applied Filters" block to the top. Users could now track exactly what parameters bounded their search.</p>
              </div>
              <div className="cs-ed-visual-flat" style={{ minHeight: "250px", background: "#FFFFFF", display: "flex", justifyContent: "center", alignItems: "center", direction: 'ltr' }}>
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRTBGOEZBIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMkI1NDQwIiAgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+W1JlZmluZWQgVWldPC90ZXh0Pjwvc3ZnPg==" style={{ width: "100%", height: "auto" }} alt="Refined UI"/>
              </div>
            </div>
          </section>

          {/* SECTION 6 — FILTERS HERO */}
          <section className="cs-ed-section mf-gray-bleed">
             <h2 className="cs-ed-h2">Designing for Precision</h2>
             
             {/* Row 1: Split */}
             <div className="cs-ed-split" style={{ marginBottom: "6rem", alignItems: "flex-start" }}>
                <div className="split-text">
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "2.5rem", marginBottom: "1.5rem" }}>Filters as the core interaction model.</h3>
                  <p className="cs-ed-body">Keyword search completely fails in engineering repositories where structural relationships (metadata) matter more than arbitrary variable names. My solution anchored the entire experience around intent-driven narrowing instead of classic query parsing.</p>
                </div>
                <div className="split-visual">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI0YxRjVGMSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzY0NzQ4QiIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+W0NvcmUgRmlsdGVyIFVJIFNob3RdPC90ZXh0Pjwvc3ZnPg==" style={{ display: "block", width: "100%", borderRadius: "8px" }} alt="Core Filter UI"/>
                </div>
             </div>

             {/* Row 2: Grid of 3 images highlighting states */}
             <div className="mf-filter-states-grid">
                <div className="cs-ed-visual-flat"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIyNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI0VGRjZFRSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzI1NjM0OCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+W1BhbmVsIFN0YXRlXTwvdGV4dD48L3N2Zz4=" style={{width: "100%", display: "block"}} alt="1" /></div>
                <div className="cs-ed-visual-flat"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIyNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI0VGRjZFRSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzI1NjM0OCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+W0FwcGxpZWQgU3RhdGVdPC90ZXh0Pjwvc3ZnPg==" style={{width: "100%", display: "block"}} alt="2" /></div>
                <div className="cs-ed-visual-flat"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIyNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI0VGRjZFRSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzI1NjM0OCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+W0lubGluZSBTZWFyY2ggU3RhdGVdPC90ZXh0Pjwvc3ZnPg==" style={{width: "100%", display: "block"}} alt="3" /></div>
             </div>
          </section>

          {/* SECTION 7 — RESULTS (REAL UI SVG) */}
          <section className="cs-ed-section cs-ed-split reverse">
            <div className="split-visual">
               <div className="cs-ed-visual">
                   {/* Realistic UI Wireframe for Results */}
                   <svg width="100%" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
                      <rect width="500" height="300" fill="#F8FAFC" />
                      {/* Card */}
                      <rect x="40" y="40" width="200" height="220" rx="8" fill="#FFFFFF" stroke="#E2E8F0" />
                      <rect x="56" y="56" width="168" height="100" rx="4" fill="#E2E8F0" />
                      <rect x="56" y="172" width="120" height="12" rx="4" fill="#64748B" />
                      <rect x="56" y="196" width="80" height="8" rx="4" fill="#94A3B8" />
                      
                      {/* Details Panel Right */}
                      <rect x="270" y="0" width="230" height="300" fill="#FFFFFF" strokeLeft="#E2E8F0" />
                      <path d="M270 0 L270 300" stroke="#E2E8F0" strokeWidth="2" />
                      <rect x="290" y="40" width="160" height="16" rx="4" fill="#475569" />
                      <rect x="290" y="80" width="190" height="8" rx="4" fill="#CBD5E1" />
                      <rect x="290" y="100" width="190" height="8" rx="4" fill="#CBD5E1" />
                      <rect x="290" y="120" width="140" height="8" rx="4" fill="#CBD5E1" />

                      <rect x="290" y="160" width="190" height="100" rx="6" fill="#F1F5F9" />
                   </svg>
               </div>
            </div>
            
            <div className="split-text">
              <h2 className="cs-ed-h2">Evaluation Engine</h2>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "2.5rem", marginBottom: "1.5rem" }}>Evaluating before opening.</h3>
              <p className="cs-ed-body">
                Since Simulink models can take intense processing power to load, launching the wrong model was a known user frustration. We engineered metadata-rich result cards side-by-side with a granular properties panel. Users could entirely evaluate the system logic architecture without ever opening the file natively.
              </p>
            </div>
          </section>

          {/* SECTION 8 — TRADEOFFS (HORIZONTAL STEPS) */}
          <section className="cs-ed-section">
            <h2 className="cs-ed-h2" style={{ textAlign: "center", marginBottom: "4rem" }}>Architectural Tradeoffs</h2>
            
            <div className="cs-ed-tradeoff-row">
              <div className="cs-ed-tradeoff-title">Natural Language vs Filters</div>
              <div className="cs-ed-tradeoff-box">
                <div className="tradeoff-label reject">Rejected: Command Line NLP</div>
                <p className="cs-ed-body" style={{ fontSize: "1rem" }}>Building an intelligent search bar that parsed complex engineering vernacular resulted in high cognitive load and inaccurate parsing. Users couldn't trust invisible AI boundaries.</p>
              </div>
              <div className="cs-ed-tradeoff-box chosen">
                <div className="tradeoff-label accept">Chosen: Hybrid Properties Layout</div>
                <p className="cs-ed-body" style={{ fontSize: "1rem" }}>A pure UI-filter approach backed by a simpler search fallback. Engineers trusted explicitly ticked boxes more than natural language interpretation.</p>
              </div>
            </div>

            <div className="cs-ed-tradeoff-row">
              <div className="cs-ed-tradeoff-title">Tool Integration vs New Native App</div>
              <div className="cs-ed-tradeoff-box">
                <div className="tradeoff-label reject">Rejected: Inline Menu Panels</div>
                <p className="cs-ed-body" style={{ fontSize: "1rem" }}>Forcing this intense search interface into existing toolbars cramped the viewport and broke the complex 3-pane workflow design.</p>
              </div>
              <div className="cs-ed-tradeoff-box chosen">
                <div className="tradeoff-label accept">Chosen: Standalone Deep Focus App</div>
                <p className="cs-ed-body" style={{ fontSize: "1rem" }}>Creating a dedicated window application launched from the central hub allowed full viewport dedication for deep data evaluation.</p>
              </div>
            </div>

          </section>

          {/* SECTION 9 — IMPACT */}
          <section className="cs-ed-section mf-gray-bleed mf-impact-section">
            <h2 className="cs-ed-h2" style={{ marginBottom: "2rem" }}>Validation & Impact</h2>
            
            <div className="cs-ed-impact-statement">
              "Users were able to locate relevant architectural models <span>significantly faster</span> during benchmarked usability sessions."
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "3rem", color: "var(--ink2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Time to Discovery Reduced
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Duplicate IP Avoided
              </div>
            </div>
          </section>

          {/* SECTION 10 — REFLECTION */}
          <section id="reflection" className="cs-ed-section" style={{ textAlign: "center" }}>
            <h2 className="cs-ed-h2">Reflection & Next Steps</h2>
            
            <p className="cs-ed-reflection-para">
              <strong>Scaling enterprise complexity requires visual architecture.</strong> This project reinforced that enterprise users, regardless of technical capability, benefit immensely from graphical abstraction. Abstract CLI commands into visual toggle structures drastically reduces syntax recall errors and shifts the user intent from 'remembering how to search' to 'identifying the correct data pattern'.
            </p>
            
            <p className="cs-ed-reflection-para">
              <strong>What I would improve next:</strong> My next area of focus would involve introducing collaborative "workspace snapshots", allowing lead engineers to bundle an active filtering array and share a direct link to junior engineers, further standardizing asset discovery across sprawling remote divisions.
            </p>
          </section>

        </main>
      </div>
    </div>
  );
}
