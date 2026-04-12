export default function Contact() {
  const links = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shubham-shreshth/",
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0Z" />
        </svg>
      )
    },
    {
      label: "Behance",
      href: "https://www.behance.net/shubhamshreshth",
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9.6 11.26c.8-.38 1.5-1.17 1.5-2.55 0-2.2-1.64-3.25-4.07-3.25H0v12.96h7.2c2.57 0 4.39-1.28 4.39-3.72 0-1.72-.84-2.92-1.99-3.44ZM3.02 7.94h3.47c.94 0 1.59.39 1.59 1.32 0 1.02-.78 1.35-1.72 1.35H3.02V7.94Zm3.65 7.99H3.02v-3.56h3.72c1.14 0 1.82.51 1.82 1.74 0 1.25-.9 1.82-1.89 1.82ZM19.2 8.53c-2.92 0-4.91 2.2-4.91 5.18 0 3.08 1.88 4.98 4.91 4.98 2.18 0 3.75-.97 4.5-3.23h-2.45c-.18.62-1.08 1.18-1.96 1.18-1.38 0-2.16-.72-2.24-2.3h6.81c.21-2.89-1.36-5.81-4.66-5.81Zm-2.15 4.17c.04-.72.49-2.11 2.07-2.11 1.21 0 1.75.67 1.98 2.11h-4.05ZM16.37 6.05h5.5V7.4h-5.5V6.05Z" />
        </svg>
      )
    },
    {
      label: "+91 88474 76431",
      href: "tel:+918847476431",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="wrap">
        <div className="contact-grid">

          {/* LEFT SIDE */}
          <div className="contact-left">
            <div className="contact-eyebrow">
              Let’s Work Together
            </div>

            <h2 className="contact-title">
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
            <div className="contact-block">
              <div className="contact-label">Location</div>
              <div className="contact-value">Bangalore, India</div>
            </div>

            {/* Connect */}
            <div className="contact-block">
              <div className="contact-label">Connect</div>

              <div className="contact-socials">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="contact-social-link"
                    aria-label={link.label}
                  >
                    <span className="contact-social-icon">{link.icon}</span>
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
