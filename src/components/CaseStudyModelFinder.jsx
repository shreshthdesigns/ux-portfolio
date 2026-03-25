export default function CaseStudyModelFinder({ onBack, activeSection, displaySections }) {

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
            {/* HERO */}
            <section id="overview" className="cs-hero">
              <div className="cs-label" style={{ marginBottom: "1.5rem", fontSize: ".85rem", color: "var(--accent)", fontWeight: "600", letterSpacing: ".1em", textTransform: "uppercase" }}>
                Case Study
              </div>

              <h1 className="cs-title" style={{ fontSize: "4rem", lineHeight: "1.1", marginBottom: "2rem" }}>
                Model Finder for Enterprises
              </h1>

              <p className="cs-tagline" style={{ fontSize: "1.5rem", color: "var(--ink2)", marginBottom: "3rem", maxWidth: "800px" }}>
                Creating a UI for finding Simulink Models conveniently within enterprise databases.
              </p>

              <div className="cs-grid-3" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "2rem 0", marginBottom: "4rem" }}>
                <div>
                  <div style={{ fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink3)", marginBottom: ".5rem" }}>Role</div>
                  <div style={{ fontWeight: "500" }}>UX Designer</div>
                </div>
                <div>
                  <div style={{ fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink3)", marginBottom: ".5rem" }}>Focus</div>
                  <div style={{ fontWeight: "500" }}>Workflow Design, UI Framework, Search Architecture</div>
                </div>
                <div>
                  <div style={{ fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink3)", marginBottom: ".5rem" }}>Task</div>
                  <div style={{ fontWeight: "500" }}>Transform CLI indexing to a GUI App</div>
                </div>
              </div>

              <p className="cs-intro" style={{ fontSize: "1.2rem", lineHeight: "1.8", maxWidth: "800px" }}>
                My primary role was to review the existing indexing API and build upon the workflow to create a standalone App in compliance with MathWorks Design Standards. This project bridges the gap between complex terminal-based database queries and an accessible user interface for locating engineering intellectual property.
              </p>

              <div className="cs-image-placeholder tall">
                <span>Hero Mockup: Model Finder Launch Screen</span>
              </div>
            </section>

            {/* PROBLEM */}
            <section id="problem" className="cs-section">
              <h2 className="cs-section-title">The Context & Problem</h2>

              <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "800px", color: "var(--ink2)" }}>
                Simulink Models are a great asset for Enterprises to simulate their complex engineering processes and Test before going into production. On average, an enterprise deals with multiple numbers of these models (Internal and External) to continuously refer to and use in their daily technical processes.
              </p>

              <div className="cs-quote">
                "Finding a specific model hidden deep in an enterprise Git repository often takes over 15 minutes of unorganized searching."
              </div>

              <div className="cs-grid-3" style={{ marginTop: "4rem" }}>
                <div>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", marginBottom: "1rem" }}>Unorganized Search</h3>
                  <p style={{ color: "var(--ink2)", fontSize: ".95rem" }}>Searching for assets locally without centralized indexing leads to duplicated effort and lost models.</p>
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", marginBottom: "1rem" }}>Database Fragmentation</h3>
                  <p style={{ color: "var(--ink2)", fontSize: ".95rem" }}>Metadata tracking (owners, purposes, domains) was inconsistent across teams.</p>
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", marginBottom: "1rem" }}>CLI Dependency</h3>
                  <p style={{ color: "var(--ink2)", fontSize: ".95rem" }}>The only way to search the index efficiently involved knowing complex command-line arguments.</p>
                </div>
              </div>
            </section>

            {/* SYSTEM & RESEARCH / USERS */}
            <section id="system" className="cs-section">
              <h2 className="cs-section-title">Users & Use Cases</h2>

              <p style={{ fontSize: "1.1rem", marginBottom: "3rem", maxWidth: "800px", color: "var(--ink2)" }}>
                Through contextual interviews, we identified two primary overarching personas, split into four specific functional roles utilizing the database system.
              </p>

              <div className="cs-two-col" style={{ marginBottom: "4rem" }}>
                <div className="cs-card">
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", marginBottom: ".5rem", color: "var(--accent)" }}>The Expert User</h3>
                  <p style={{ color: "var(--ink2)" }}>Developers and Enterprise professionals who have a thorough understanding of the product and its functionalities.</p>
                </div>
                <div className="cs-card">
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", marginBottom: ".5rem", color: "var(--accent)" }}>The New User</h3>
                  <p style={{ color: "var(--ink2)" }}>Students and Engineers who are exploring Simulink and are not 100% aware of all Simulink functionalities and affordances.</p>
                </div>
              </div>

              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", marginBottom: "1.5rem" }}>Functional Needs</h3>
              <div className="cs-grid-3">
                <div className="insight-card">
                  <strong style={{ display: "block", marginBottom: ".5rem" }}>Simulink Model Authors</strong>
                  "Search for a model fitting relevant search criteria."
                </div>
                <div className="insight-card">
                  <strong style={{ display: "block", marginBottom: ".5rem" }}>Enterprise Modelling Engineer</strong>
                  "Search for a specific model in Simulink from their database."
                </div>
                <div className="insight-card">
                  <strong style={{ display: "block", marginBottom: ".5rem" }}>CLI Power User</strong>
                  "Search for models in a quicker, visual way rather than command line."
                </div>
              </div>
            </section>

            {/* STRATEGY & REQUIREMENTS */}
            <section id="strategy" className="cs-section">
              <h2 className="cs-section-title">Requirements & Architecture</h2>

              <div style={{ marginBottom: "3rem" }}>
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

              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", marginBottom: "1.5rem" }}>The 10-Week Execution Plan</h3>
              <div className="cs-grid-5">
                <div style={{ textAlign: "center" }}>
                  <div style={{ color: "var(--accent)", fontWeight: "600" }}>Weeks 1-2</div>
                  <div style={{ fontSize: ".85rem", color: "var(--ink2)", marginTop: ".5rem" }}>Background Research & Requirements</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ color: "var(--accent)", fontWeight: "600" }}>Weeks 3-4</div>
                  <div style={{ fontSize: ".85rem", color: "var(--ink2)", marginTop: ".5rem" }}>Contextual Interviews & Benchmarking</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ color: "var(--accent)", fontWeight: "600" }}>Weeks 5-7</div>
                  <div style={{ fontSize: ".85rem", color: "var(--ink2)", marginTop: ".5rem" }}>Functional Design & UI Proposal</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ color: "var(--accent)", fontWeight: "600" }}>Weeks 8-10</div>
                  <div style={{ fontSize: ".85rem", color: "var(--ink2)", marginTop: ".5rem" }}>Feedback Review & Final UI Delivery</div>
                </div>
              </div>
            </section>

            {/* EXPLORATION */}
            <section id="exploration" className="cs-section">
              <h2 className="cs-section-title">Filter UI Iterations</h2>

              <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "800px", color: "var(--ink2)" }}>
                Through user testing, the deepest friction was how users interacted with massive taxonomies. I analyzed a matrix of options to handle thousands of tags:
              </p>

              <div className="cs-two-col">
                <div className="cs-card">
                  <h4 style={{ fontFamily: "var(--sans)", color: "var(--accent)", marginBottom: ".5rem" }}>Debate 1: Scroll Behavior</h4>
                  <p style={{ fontSize: ".9rem", color: "var(--ink2)" }}>
                    Users hated infinite independent scroll areas. We pivoted to a global scroll with "show more" expanding links to ensure the page layout remained predictable.
                  </p>
                </div>
                <div className="cs-card">
                  <h4 style={{ fontFamily: "var(--sans)", color: "var(--accent)", marginBottom: ".5rem" }}>Debate 2: Filter Visibility</h4>
                  <p style={{ fontSize: ".9rem", color: "var(--ink2)" }}>
                    Applied filters needed to be visible simultaneously without hiding them deep in menus. We structured a top-level "Applied Filters" flex area above the results.
                  </p>
                </div>
              </div>
            </section>

            {/* SOLUTION */}
            <section id="solution" className="cs-section">
              <h2 className="cs-section-title">The Final Interface Matrix</h2>

              <div style={{ marginBottom: "5rem" }}>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.8rem", marginBottom: "1rem" }}>1. Core Hub Integration</h3>
                <p style={{ color: "var(--ink2)", fontSize: "1.05rem", maxWidth: "800px", marginBottom: "2rem" }}>
                  Model Finder was integrated as an App Toolstrip in Simulink and a dedicated tab linked directly through the Library Browser, offering multiple paths of entry.
                </p>
                <div className="cs-image-placeholder">
                  <span>Diagram: Toolstrip vs Library Browser Integration Paths</span>
                </div>
              </div>

              <div style={{ marginBottom: "5rem" }}>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.8rem", marginBottom: "1rem" }}>2. The 3-Pane Layout</h3>
                <p style={{ color: "var(--ink2)", fontSize: "1.05rem", maxWidth: "800px", marginBottom: "2rem" }}>
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

              <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--ink2)", marginBottom: "1.5rem" }}>
                Transitioning a complex CLI-based system into a GUI wasn't just about putting buttons on scripts; it required an ontological map of how enterprise developers think about their assets. Defining the architecture—specifically the right-hand preview panel—ultimately mitigated the 15-minute search penalty engineers faced entirely.
              </p>
            </section>
          </main>
        </div>
      </div>
  );
}
