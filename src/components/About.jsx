import { useState } from "react";

export default function About() {
  const [activeLens, setActiveLens] = useState(null);

  const toggleLens = (lens) => {
    setActiveLens(activeLens === lens ? null : lens);
  };

  return (
    <section id="about">
      <div className="wrap">

        {/* Section Heading */}
        <div className="section-head">
          <div className="section-label">
            How I See the World
          </div>
        </div>

        <div className="about-grid-new">

          {/* ================= LEFT – DESIGN LENSES ================= */}
          <div className="lenses-col">

            {/* SYSTEMS LENS */}
            <div
              className={`lens-card expandable ${activeLens === "systems" ? "active" : ""}`}
              onClick={() => toggleLens("systems")}
            >
              <div className="lens-header">
                <h3>Systems Lens</h3>
                <span className={`lens-arrow ${activeLens === "systems" ? "open" : ""}`}>
                  →
                </span>
              </div>

              <p>
                I don’t see UI problems. I see system behaviors with UI symptoms.
              </p>

              {activeLens === "systems" && (
                <div className="lens-expanded">
                  <p>
                    I map structural dependencies before touching interface layers.
                    My focus is on interaction architecture, feedback loops,
                    and behavioral signals that drive usage patterns.
                  </p>
                  <p className="lens-quote">
                    “Low usage is a signal, not a diagnosis.”
                  </p>
                </div>
              )}
            </div>

            {/* EMPATHY FRAMEWORK */}
            <div
              className={`lens-card expandable ${activeLens === "empathy" ? "active" : ""}`}
              onClick={() => toggleLens("empathy")}
            >
              <div className="lens-header">
                <h3>Empathy Framework</h3>
                <span className={`lens-arrow ${activeLens === "empathy" ? "open" : ""}`}>
                  →
                </span>
              </div>

              <p>
                Enterprise UX is precision empathy — understanding invisible friction.
              </p>

              {activeLens === "empathy" && (
                <div className="lens-expanded">
                  <p>
                    I analyze hesitation moments, confidence drops,
                    and mental overhead experienced by expert users
                    in high-complexity engineering workflows.
                  </p>
                </div>
              )}
            </div>

            {/* BUSINESS SENSIBILITY */}
            <div
              className={`lens-card expandable ${activeLens === "business" ? "active" : ""}`}
              onClick={() => toggleLens("business")}
            >
              <div className="lens-header">
                <h3>Business Sensibility</h3>
                <span className={`lens-arrow ${activeLens === "business" ? "open" : ""}`}>
                  →
                </span>
              </div>

              <p>
                Stakeholder constraints shape better design decisions.
              </p>

              {activeLens === "business" && (
                <div className="lens-expanded">
                  <p>
                    I align UX improvements with roadmap feasibility,
                    engineering bandwidth, and measurable product impact —
                    ensuring clarity scales sustainably.
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* ================= RIGHT – TIMELINE ================= */}
          <div className="timeline-col">

            <div className="timeline-item">
              <div className="tl-year">2022 — Present</div>
              <div className="tl-role">UX Designer</div>
              <div className="tl-org">MathWorks · Bangalore</div>
              <div className="tl-detail">
                Workflow optimization, accessibility, and generative research.
              </div>
            </div>

            <div className="timeline-item">
              <div className="tl-year">2020 — 2022</div>
              <div className="tl-role">M.Des, Product Design</div>
              <div className="tl-org">IISc Bangalore</div>
              <div className="tl-detail">
                Thesis on cognitive load in engineering interfaces.
              </div>
            </div>

            <div className="timeline-item">
              <div className="tl-year">2018 — 2020</div>
              <div className="tl-role">Technical Sales</div>
              <div className="tl-org">Industry</div>
              <div className="tl-detail">
                Stakeholder management and solution scoping.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}