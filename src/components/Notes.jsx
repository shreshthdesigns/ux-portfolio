export default function Notes() {
  return (
    <section id="notes">
      <div className="wrap">

        {/* SECTION LABEL (matches Patent & Recognition style) */}
        <div className="section-block">
          <div className="section-label">
            Design Notes
          </div>
        </div>

        {/* SECTION HEADING */}
        <h2 className="sec-title">
          Thinking out loud,
          <br />
          with structure.
        </h2>

        <p className="sec-sub">
          Short essays on design systems, cognition and enterprise UX.
        </p>

        {/* NOTES GRID */}
        <div className="notes-grid">

          <div className="note-card">
            <div className="note-num">01</div>
            <div className="note-title">
              Discoverability Is a Mental Model Problem
            </div>
            <div className="note-excerpt">
              Moving features rarely fixes structural misunderstanding.
            </div>
            <span className="note-tag">Feature Design</span>
          </div>

          <div className="note-card">
            <div className="note-num">02</div>
            <div className="note-title">
              Naming Shapes Expert Workflows
            </div>
            <div className="note-excerpt">
              Terminology silently influences confidence.
            </div>
            <span className="note-tag">Language & UX</span>
          </div>

          <div className="note-card">
            <div className="note-num">03</div>
            <div className="note-title">
              Emotional Friction in Technical Tools
            </div>
            <div className="note-excerpt">
              The hesitation before clicking is the real UX problem.
            </div>
            <span className="note-tag">Enterprise UX</span>
          </div>

        </div>

      </div>
    </section>
  );
}