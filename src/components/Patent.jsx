export default function Patent({ setActiveProject }) {
  return (
    <section id="patent">
      <div className="wrap">
        <div
          className="patent-impact-card"
          onClick={() => setActiveProject({ id: "patent", nda: false })}
        >
          {/* Left: Content */}
          <div className="patent-impact-content">
            <div className="patent-eyebrow">PATENT GRANTED</div>
            
            <div className="patent-headline">
              Designing a Patented Fall-Prevention System for Walkers
            </div>
            
            <div className="patent-system-name">System: WALKsafe</div>
            
            <div className="patent-metadata">
              Patent No. 11986423 &middot; Granted May 2024
            </div>
            
            <div className="patent-desc">
              A responsive stabilization system that detects walker instability and deploys support legs to prevent falls.
            </div>

            <div className="patent-tags">
              <span className="impact-tag">Assistive Technology</span>
              <span className="impact-tag">Embedded Systems UX</span>
              <span className="impact-tag">Hardware Interaction</span>
            </div>

            <div className="patent-footer">
              <span className="patent-title-foot">
                Explore the Patent Case Study
              </span>
              <span className="patent-arrow">→</span>
            </div>
          </div>

          {/* Right: Visual with Overlay Annotation */}
          <div className="patent-impact-visual">
            <div className="patent-image-wrap annotated">
              <img src="/WS main.png" alt="WALKsafe Prototype" />
              
              {/* Overlay Annotations */}
              <div className="patent-annotation a-sensor">
                <div className="annot-dot"></div>
                <span>Sensor Module</span>
              </div>
              <div className="patent-annotation a-control">
                <div className="annot-dot"></div>
                <span>Control Unit</span>
              </div>
              <div className="patent-annotation a-legs">
                <div className="annot-dot"></div>
                <span>Deployable Stabilizers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}