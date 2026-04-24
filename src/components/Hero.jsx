import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section id="hero">
      <div className="wrap hero-grid">

        <div className="hero-content">

          <div className="section-label">
            UX Designer | Systems & Enterprise
          </div>

          <h1 className="hero-hl">
            <span className="hero-line-1">I design</span> <br className="mobile-only-br" />
            <span className="hero-emphasis hero-line-2">clarity</span> <br className="mobile-only-br" />
            <span className="hero-line-3">inside complex systems.</span>
          </h1>

          <p className="hero-sub">
            Designing for engineers who reason through products, not just use them. 
            Specialised in cognitive load reduction and systems level UX for high complexity workflows.
          </p>

          {/* 🔹 Highlights — moved outside CTA */}
          <div className="hero-highlights">
            <div className="hero-nugget">Empathy-led Initiatives</div>
            <div className="hero-nugget">Engineer-aligned Decisions</div>
            <div className="hero-nugget">Data & AI-Led Design</div>
          </div>

          <div className="hero-cta">
            <a href="#work" className="btn-primary">
              → View Selected Work
            </a>

            <div className="hero-secondary-group">
              <a href="#about" className="btn-secondary">
                → My Approach to Systems Design
              </a>
              
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-resume-pill">
                → Download Resume
              </a>
            </div>
          </div>

        </div>

        <div className="hero-right">
          <HeroVisual />
        </div>

      </div>
    </section>
  );
}