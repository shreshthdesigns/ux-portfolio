export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="wrap">
        <div className="contact-grid">

          {/* LEFT SIDE */}
          <div className="contact-left">
            <div className="contact-eyebrow">
              Let’s Work Together
            </div>

            <h2 className="contact-title desktop-only">
              Designing clarity
              <br />
              for complex systems.
            </h2>

            <p className="contact-body">
              I’m currently open to Senior UX Designer roles in product-led
              organizations — especially where engineering workflows,
              systems thinking, and cognitive research intersect.
            </p>

            <a
              href="mailto:shubhamshreshthsingh@gmail.com"
              className="contact-email"
            >
              shubhamshreshthsingh@gmail.com
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-right">

            {/* Location */}
            <div className="contact-block desktop-only">
              <div className="contact-label">Location</div>
              <div className="contact-value">Bangalore, India</div>
            </div>

            {/* Connect */}
            <div className="contact-block">
              <div className="contact-label">Connect</div>

              <a
                href="https://www.linkedin.com/in/YOUR-LINKEDIN"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                LinkedIn →
              </a>

              <a
                href="https://www.behance.net/YOUR-BEHANCE"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link desktop-only"
              >
                Behance →
              </a>

              <a
                href="tel:+91XXXXXXXXXX"
                className="contact-phone desktop-only"
              >
                +91 XXXXX XXXXX
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}