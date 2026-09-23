import Logo from "./Logo";

// ==========================================
// Footer Component
// Brand footer with quick navigation links
// ==========================================
const Footer = () => {
  return (
    <footer
      id="footer"
      style={{
        backgroundColor: "var(--footer-bg)",
        color: "#ffffff",
        padding: "3.5rem 5% 1.5rem",
        marginTop: "auto"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2.5rem",
          marginBottom: "2.5rem",
          maxWidth: "1200px",
          margin: "0 auto 2.5rem"
        }}
      >
        {/* Brand Information */}
        <div>
          <div style={{ marginBottom: "1rem" }}>
            <Logo size="40px" />
          </div>
          <p style={{ fontSize: "0.9rem", lineHeight: "1.7", opacity: 0.85 }}>
            MediSphere is a modern healthcare network connecting patients with trusted hospital centers, clinical tests, and verified pharmacy essentials.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "#ffffff" }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: "none", fontSize: "0.9rem", lineHeight: "2.2", opacity: 0.85 }}>
            <li><a href="/hospital" style={{ color: "inherit", textDecoration: "none" }}>Hospital Centers</a></li>
            <li><a href="/appointment" style={{ color: "inherit", textDecoration: "none" }}>Book Appointment</a></li>
            <li><a href="/#services" style={{ color: "inherit", textDecoration: "none" }}>Clinical Services</a></li>
            <li><a href="/pharmacy" style={{ color: "inherit", textDecoration: "none" }}>Pharmacy Essentials</a></li>
          </ul>
        </div>

        {/* About Info */}
        <div>
          <h4 style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "#ffffff" }}>
            About MediSphere
          </h4>
          <ul style={{ listStyle: "none", fontSize: "0.9rem", lineHeight: "2.2", opacity: 0.85 }}>
            <li>Vision & Healthcare Mission</li>
            <li>Partner Hospital Network</li>
            <li>Security & Privacy Policy</li>
            <li>Careers & Fellowships</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "#ffffff" }}>
            Contact & Support
          </h4>
          <ul style={{ listStyle: "none", fontSize: "0.9rem", lineHeight: "2.2", opacity: 0.85 }}>
            <li>📍 Saket, New Delhi, India</li>
            <li>📞 +91 7839 36 8724</li>
            <li>✉️ support@medisphere.com</li>
            <li>⏰ 24/7 Clinical Assistance</li>
          </ul>
        </div>
      </div>

      {/* Copyright Line */}
      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.15)",
          paddingTop: "1.5rem",
          textAlign: "center",
          fontSize: "0.85rem",
          opacity: 0.75
        }}
      >
        &copy; {new Date().getFullYear()} MediSphere. All Rights Reserved. Patient Care & Medical Connectivity.
      </div>
    </footer>
  );
};

export default Footer;