export default function About() {
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
                src="/Selfpotrait1.jpeg"
                alt="Shubham Shreshth"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
              />
            </div>

            <div className="about-identity-info">
              <h3 className="about-name">Shubham Shreshth</h3>
              <p className="about-role">UX Designer — Systems &amp; Enterprise</p>
              <p className="about-location">Bangalore</p>
            </div>

            <div className="about-tags">
              <span className="impact-tag">Systems UX</span>
              <span className="impact-tag">Engineering Tools</span>
              <span className="impact-tag">AI-Assisted Design</span>
            </div>
          </div>

          {/* ================= RIGHT – NARRATIVE & TIMELINE ================= */}
          <div className="about-narrative-col">

            {/* Narrative Story */}
            <div className="about-story">
              <h3 className="narrative-heading">My Journey into Systems UX</h3>

              <div className="narrative-body">
                <p>
                  I began my career as a Solution Consultant at Godrej & Boyce, engaging with enterprise users to uncover needs, navigate constraints, and shape solutions grounded in real-world workflows.
                </p>
                <p>
                  At MathWorks, I realized usability issues often stem from deeper system behavior — not just the interface. I focus on turning that complexity into clear, predictable experiences.
                </p>
                <p>
                  Today, I design for scale — simplifying engineering workflows and making complex systems understandable.
                </p>
              </div>
            </div>

            {/* Design Philosophy Blocks */}
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
                    <div className="tl-org">MathWorks · Bangalore</div>
                    <p className="tl-detail">Designing engineering tools used by global teams. Focused on workflow optimization and discoverability.</p>
                  </div>
                </div>

                <div className="timeline-node">
                  <div className="node-dot"></div>
                  <div className="node-content">
                    <div className="tl-year">2021 — 2023</div>
                    <div className="tl-role">M.Des Product Design</div>
                    <div className="tl-org">Indian Institute of Science, Bangalore</div>
                    <p className="tl-detail">Research focused on cognitive load in engineering interfaces.</p>
                  </div>
                </div>

                <div className="timeline-node">
                  <div className="node-dot"></div>
                  <div className="node-content">
                    <div className="tl-year">2018 — 2021</div>
                    <div className="tl-role">Solution Consultant (Enterprise Systems)</div>
                    <div className="tl-org">Godrej & Boyce </div>
                    <p className="tl-detail">Engaged with users to uncover needs, pain points, and real-world workflows.
                      Synthesized insights into actionable solutions balancing usability, technical feasibility, and business goals</p>
                  </div>
                </div>

                <div className="timeline-node">
                  <div className="node-dot"></div>
                  <div className="node-content">
                    <div className="tl-year">2014 — 2018</div>
                    <div className="tl-role">B.Tech Mechanical Engineering</div>
                    <div className="tl-org">SLIET</div>
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