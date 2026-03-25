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
                  I began my career in technical sales at Godrej &amp; Boyce, working with B2B clients to solve complex, real-world problems across stakeholders and constraints.
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

            {/* Experience Timeline */}
            <div className="about-timeline">
              <h3 className="narrative-heading">Experience</h3>

              <div className="timeline-container">
                <div className="timeline-node">
                  <div className="node-dot"></div>
                  <div className="node-content">
                    <div className="tl-year">2022 — Present</div>
                    <div className="tl-role">UX Designer</div>
                    <div className="tl-org">MathWorks · Bangalore</div>
                    <p className="tl-detail">Designing engineering tools used by global teams. Focused on workflow optimization and discoverability.</p>
                  </div>
                </div>

                <div className="timeline-node">
                  <div className="node-dot"></div>
                  <div className="node-content">
                    <div className="tl-year">2020 — 2022</div>
                    <div className="tl-role">M.Des Product Design</div>
                    <div className="tl-org">Indian Institute of Science, Bangalore</div>
                    <p className="tl-detail">Research focused on cognitive load in engineering interfaces.</p>
                  </div>
                </div>

                <div className="timeline-node">
                  <div className="node-dot"></div>
                  <div className="node-content">
                    <div className="tl-year">2018 — 2020</div>
                    <div className="tl-role">Technical Sales</div>
                    <div className="tl-org">Industry</div>
                    <p className="tl-detail">Worked with enterprise clients on solution scoping and stakeholder alignment.</p>
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