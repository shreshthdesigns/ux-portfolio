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
            I design <span className="hero-emphasis">clarity</span> inside complex systems.
          </h1>

          <p className="hero-sub">
            Designing engineering tools at MathWorks used by global teams.
            Focused on reducing cognitive load and improving system-level usability.
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

        <HeroVisual />

      </div>
    </section>
  );
}