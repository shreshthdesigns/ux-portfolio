import { useState } from "react";

export default function About() {
  const [isNarrativeExpanded, setIsNarrativeExpanded] = useState(false);

  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">How I See the World</div>
        </div>

        <div className="about-editorial-grid">

          {/* ================= LEFT – IDENTITY ================= */}
          <div className="about-identity-col">
            <div className="about-portrait-wrap">
              <img
                src="/self portrait.jpeg"
                alt="Shubham Shreshth"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
              />
            </div>

            <div className="about-identity-info">
              <h3 className="about-name">Shubham Shreshth</h3>
              <p className="about-role">UX Designer — Systems &amp; Enterprise</p>
              <p className="about-location desktop-only">Bangalore</p>
            </div>

            <div className="about-tags">
              <span className="impact-tag">Systems UX</span>
              <span className="impact-tag">Engineering Tools</span>
              <span className="impact-tag">AI-Assisted Design</span>
            </div>

            <div className="about-tools-section desktop-only">
              <div className="about-tools-label">Tools I Use</div>
              <div className="about-tools-grid">
                <div className="tool-icon-item" title="Figma">
                  <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 28.5C19 25.8478 20.0536 23.3043 21.9289 21.4289C23.8043 19.5536 26.3478 18.5 29 18.5C31.6522 18.5 34.1957 19.5536 36.0711 21.4289C37.9464 23.3043 39 25.8478 39 28.5C39 31.1522 37.9464 33.6957 36.0711 35.5711C34.1957 37.4464 31.6522 38.5 29 38.5C26.3478 38.5 23.8043 37.4464 21.9289 35.5711C20.0536 33.6957 19 31.1522 19 28.5V28.5Z" fill="#1ABCFE"/>
                    <path d="M0 47.5C0 44.8478 1.05357 42.3043 2.92893 40.4289C4.8043 38.5536 7.34784 37.5 10 37.5C12.6522 37.5 15.1957 38.5536 17.0711 40.4289C18.9464 42.3043 20 44.8478 20 47.5C20 50.1522 18.9464 52.6957 17.0711 54.5711C15.1957 56.4464 12.6522 57.5 10 57.5C7.34784 57.5 4.8043 56.4464 2.92893 54.5711C1.05357 52.6957 0 50.1522 0 47.5V47.5Z" fill="#0ACF83"/>
                    <path d="M19 0V19H29C31.6522 19 34.1957 17.9464 36.0711 16.0711C37.9464 14.1957 39 11.6522 39 9C39 6.34784 37.9464 3.8043 36.0711 1.92893C34.1957 0.0535692 31.6522 -1.13133e-07 29 -1.13133e-07H19V0Z" fill="#FF7262"/>
                    <path d="M0 9C0 11.6522 1.05357 14.1957 2.92893 16.0711C4.8043 17.9464 7.34784 19 10 19H20V0H10C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 9V9Z" fill="#F24E1E"/>
                    <path d="M0 28.5C0 31.1522 1.05357 33.6957 2.92893 35.5711C4.8043 37.4464 7.34784 38.5 10 38.5H20V19H10C7.34784 19 4.8043 20.0536 2.92893 21.9289C1.05357 23.8043 0 26.3478 0 28.5V28.5Z" fill="#A259FF"/>
                  </svg>
                </div>
                {/* ... existing tool icons ... */}
              </div>
            </div>
          </div>

          {/* ================= RIGHT – NARRATIVE & TIMELINE ================= */}
          <div className="about-narrative-col">

            {/* Narrative Story - Condensed on Mobile */}
            <div className={`about-story ${!isNarrativeExpanded ? 'mobile-collapsed' : ''}`}>
              <h3 className="narrative-heading">My Journey into Systems UX</h3>

              <div className="narrative-body">
                <p>
                  I began my career as a Solution Consultant at Godrej & Boyce, engaging with enterprise users to uncover needs, navigate constraints, and shape solutions grounded in real-world workflows.
                </p>
                <div className="desktop-only">
                  <p>
                    At MathWorks, I realized usability issues often stem from deeper system behavior — not just the interface. I focus on turning that complexity into clear, predictable experiences.
                  </p>
                  <p>
                    Today, I design for scale — simplifying engineering workflows and making complex systems understandable.
                  </p>
                </div>
                {isNarrativeExpanded && (
                  <div className="mobile-only">
                    <p>
                      At MathWorks, I realized usability issues often stem from deeper system behavior — not just the interface. I focus on turning that complexity into clear, predictable experiences.
                    </p>
                    <p>
                      Today, I design for scale — simplifying engineering workflows and making complex systems understandable.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <button 
              className="mobile-only btn-read-more" 
              onClick={() => setIsNarrativeExpanded(!isNarrativeExpanded)}
              style={{
                background: "none",
                border: "none",
                color: "var(--accent)",
                fontWeight: "600",
                fontSize: "0.85rem",
                padding: "0.5rem 0",
                cursor: "pointer",
                marginBottom: "2rem"
              }}
            >
              {isNarrativeExpanded ? "↑ Show less" : "↓ Read more about my journey"}
            </button>

            {/* Design Philosophy Blocks - Hidden on Mobile unless expanded */}
            {(isNarrativeExpanded || window.innerWidth > 1024) && (
              <div className="about-philosophy">
                <h3 className="narrative-heading">Design Philosophy</h3>

                <div className="philosophy-grid">
                  <div className="philosophy-card">
                    <h4>Systems Lens</h4>
                    <p>I approach UX problems by understanding the larger system behind the interface.</p>
                  </div>

                  <div className="philosophy-card">
                    <h4>Precision Empathy</h4>
                    <p>Enterprise UX requires identifying friction that expert users rarely articulate.</p>
                  </div>

                  <div className="philosophy-card">
                    <h4>Business Sensibility</h4>
                    <p>Good design balances user needs, technical realities, and business goals.</p>
                  </div>
                </div>
              </div>
            )}

            <div className="about-timeline">
              <div className="about-timeline-header">
                <h3 className="narrative-heading">Experience</h3>
                <span className="experience-pill">5+ Years Industry Experience</span>
              </div>

              <div className="timeline-container">
                <div className="timeline-node">
                  <div className="node-dot"></div>
                  <div className="node-content">
                    <div className="tl-year">2023 — Present</div>
                    <div className="tl-role">UX Designer</div>
                    <div className="tl-org-row">
                      <img src="/Mathworks.png" alt="MathWorks" className="tl-logo" />
                      <div className="tl-org">MathWorks · Bangalore</div>
                    </div>
                    <p className="tl-detail">Designing engineering tools used by global teams. Focused on workflow optimization and discoverability.</p>
                  </div>
                </div>

                <div className="timeline-node">
                  <div className="node-dot"></div>
                  <div className="node-content">
                    <div className="tl-year">2021 — 2023</div>
                    <div className="tl-role-row">
                      <div className="tl-role">M.Des Product Design</div>
                      <span className="patent-granted-pill">Patent Granted</span>
                    </div>
                    <div className="tl-org-row">
                      <img src="/IISC.png" alt="IISc" className="tl-logo" />
                      <div className="tl-org">Indian Institute of Science, Bangalore</div>
                    </div>
                    <p className="tl-detail">Research focused on cognitive load in engineering interfaces.</p>
                  </div>
                </div>

                <div className="timeline-node">
                  <div className="node-dot"></div>
                  <div className="node-content">
                    <div className="tl-year">2018 — 2021</div>
                    <div className="tl-role">Solution Consultant (Enterprise Systems)</div>
                    <div className="tl-org-row">
                      <img src="/Godrej.png" alt="Godrej & Boyce" className="tl-logo" />
                      <div className="tl-org">Godrej & Boyce </div>
                    </div>
                    <p className="tl-detail">Engaged with users to uncover needs, pain points, and real-world workflows.
                      Synthesized insights into actionable solutions balancing usability, technical feasibility, and business goals</p>
                  </div>
                </div>

                <div className="timeline-node">
                  <div className="node-dot"></div>
                  <div className="node-content">
                    <div className="tl-year">2014 — 2018</div>
                    <div className="tl-role">B.Tech Mechanical Engineering</div>
                    <div className="tl-org-row">
                      <img src="/sliet.png" alt="SLIET" className="tl-logo" />
                      <div className="tl-org">SLIET</div>
                    </div>
                    <p className="tl-detail">Technical foundation in engineering systems, mechanics, and design thinking.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>



      </div>
    </section>
  );
}