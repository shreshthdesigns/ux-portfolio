import { useEffect, useState } from "react";

export default function CaseStudy({ project, onBack }) {

  const sections = [
    "overview",
    "problem",
    "system",
    "insights",
    "strategy",
    "exploration",
    "solution",
    "impact",
    "reflection"
  ];

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

              <div className="cs-label">
                Flagship Case Study
              </div>

              <h1 className="cs-title">
                Project Advisor
              </h1>

              <p className="cs-tagline">
                Designing clarity in complex engineering workflows
              </p>

              <p className="cs-intro">
                Project Advisor is a workflow tool within the MATLAB / Simulink ecosystem that allows engineers to run validation checks across multiple models simultaneously. As models scale in complexity, engineers must evaluate many checks across many models, making it difficult to maintain visibility of system health.
              </p>

            </section>


            {/* PROBLEM */}
            <section id="problem" className="cs-section">

              <h2>The Problem</h2>

              <p>
                Engineers working within large model-based systems must validate multiple models against many checks. The workflow often becomes fragmented across views, making it difficult to understand the health of a project.
              </p>

              <div className="placeholder">
                Engineering Workflow Diagram
                <br/>
                Models → Run Checks → Failures → Fix → Re-run
              </div>

            </section>


            {/* SYSTEM */}
            <section id="system" className="cs-section">

              <h2>Understanding the System</h2>

              <p>
                Workflow mapping revealed that engineers reason about validation primarily at the project and model-group level rather than individual check results.
              </p>

              <div className="cs-two-col">

                <div className="placeholder">
                  Workflow Mapping Diagram
                </div>

                <div className="placeholder">
                  Validation System Architecture
                </div>

              </div>

            </section>


            {/* INSIGHTS */}
            <section id="insights" className="cs-section">

              <h2>Key Insights</h2>

              <div className="cs-grid-3">

                <div className="insight-card">
                  Engineers think in model groups
                </div>

                <div className="insight-card">
                  Failures act as decision signals
                </div>

                <div className="insight-card">
                  Workflow visibility is critical
                </div>

              </div>

            </section>


            {/* STRATEGY */}
            <section id="strategy" className="cs-section">

              <h2>Design Strategy</h2>

              <div className="cs-grid-3">

                <div className="strategy-card">
                  Surface system status clearly
                </div>

                <div className="strategy-card">
                  Align with engineering mental models
                </div>

                <div className="strategy-card">
                  Reduce navigation friction
                </div>

              </div>

            </section>


            {/* EXPLORATION */}
            <section id="exploration" className="cs-section">

              <h2>Design Exploration</h2>

              <div className="cs-grid-3">

                <div className="placeholder">
                  Concept A Sketch
                </div>

                <div className="placeholder">
                  Concept B Sketch
                </div>

                <div className="placeholder">
                  Concept C Sketch
                </div>

              </div>

            </section>


            {/* SOLUTION */}
            <section id="solution" className="cs-section">

              <h2>Final Solution</h2>

              <div className="cs-grid-3">

                <div>
                  <h3>Model-Centric Workflow</h3>
                  <div className="placeholder">
                    Model Workflow UI
                  </div>
                </div>

                <div>
                  <h3>Failure Visibility</h3>
                  <div className="placeholder">
                    Failure Highlight UI
                  </div>
                </div>

                <div>
                  <h3>Integrated Navigation</h3>
                  <div className="placeholder">
                    Workflow Navigation UI
                  </div>
                </div>

              </div>

            </section>


            {/* IMPACT */}
            <section id="impact" className="cs-section">

              <h2>Impact</h2>

              <div className="cs-metrics">

                <div>
                  <h3>Improved</h3>
                  <p>Workflow Visibility</p>
                </div>

                <div>
                  <h3>Reduced</h3>
                  <p>Navigation Effort</p>
                </div>

                <div>
                  <h3>Better</h3>
                  <p>Decision Clarity</p>
                </div>

              </div>

            </section>


            {/* REFLECTION */}
            <section id="reflection" className="cs-section">

              <h2>Reflection</h2>

              <p>
                Designing Project Advisor reinforced the importance of aligning complex system design with user mental models. By surfacing system status clearly, the validation workflow became easier to interpret and act upon.
              </p>

            </section>

          </main>

        </div>

      </div>

    );
  }

  return null;
}