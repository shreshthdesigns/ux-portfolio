export default function Patent({ setActiveProject }) {
  return (
    <section id="patent">
      <div className="wrap">

        <div
          className="patent-block"
          onClick={() =>
            setActiveProject({ id: "patent", nda: false })
          }
        >

          <div className="patent-content">

            {/* LEFT SIDE */}
            <div className="patent-left">
              <div className="patent-eyebrow">
                Patent & Recognition
              </div>

              <div className="patent-title">
                Interaction Framework for Workflow Discoverability
              </div>

              <div className="patent-desc">
                A patented interaction system reducing cognitive overload and
                improving discoverability in complex engineering tools.
              </div>

              <div className="patent-meta">
                USPTO Patent #: XXXXXXX
              </div>
            </div>

            {/* RIGHT SIDE CTA */}
            <div className="patent-cta">
              →
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}