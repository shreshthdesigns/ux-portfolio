export default function Patent({ setActiveProject }) {
  return (
    <section id="patent">
      {/* Decorative Technical Background Elements */}
      <div className="patent-bg-decor">
        <svg width="100%" height="100%" style={{ position: 'absolute' }}>
          <circle cx="10%" cy="20%" r="150" fill="none" stroke="white" strokeDasharray="8 8" opacity="0.2" />
          <circle cx="90%" cy="80%" r="200" fill="none" stroke="white" strokeDasharray="4 12" opacity="0.15" />
          <line x1="0" y1="40%" x2="100%" y2="45%" stroke="white" opacity="0.1" />
          <line x1="20%" y1="0" x2="25%" y2="100%" stroke="white" opacity="0.1" />
          {/* Small technical markers */}
          <rect x="5%" y="10%" width="20" height="2" fill="white" opacity="0.3" />
          <rect x="5%" y="10%" width="2" height="20" fill="white" opacity="0.3" />
          <rect x="95%" y="90%" width="20" height="2" fill="white" opacity="0.3" />
          <rect x="95%" y="90%" width="2" height="20" fill="white" opacity="0.3" />
        </svg>
        <div className="schematic-circle" style={{ width: '400px', height: '400px', top: '-100px', right: '-100px' }}></div>
        <div className="schematic-line" style={{ width: '1px', height: '100%', left: '15%', top: '0' }}></div>
        <div className="schematic-line" style={{ width: '100%', height: '1px', left: '0', top: '25%' }}></div>
      </div>

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