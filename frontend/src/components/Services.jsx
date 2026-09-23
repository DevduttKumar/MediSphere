// ==========================================
// Services Data List
// Highlights key clinical capabilities
// ==========================================
const servicesData = [
  {
    name: "Immunization & Vaccines",
    body: "Stay protected with safe, up-to-date vaccines for all age groups, administered by licensed healthcare professionals.",
    icon: "💉"
  },
  {
    name: "24/7 Online Consultation",
    body: "Instant access to certified medical practitioners anytime, anywhere. Receive clinical guidance without travelling.",
    icon: "🩺"
  },
  {
    name: "Personal Self-Care",
    body: "Comprehensive wellness guidance, mental health support, preventive diagnostics, and tailored clinical nutrition tips.",
    icon: "🧘"
  },
  {
    name: "Advanced Diagnostics Lab",
    body: "Fast, accurate test results powered by state-of-the-art pathology labs. Book blood tests and clinical scans easily.",
    icon: "🔬"
  }
];

// ==========================================
// Services Component
// Displays grid of clinical offerings
// ==========================================
const Services = () => {
  return (
    <section id="services" style={{ padding: "4.5rem 5%", textAlign: "center", background: "var(--bg)" }}>
      <h2 style={{ fontSize: "2.2rem", color: "var(--primary)", marginBottom: "0.8rem" }}>
        Our Services
      </h2>
      <p style={{ maxWidth: "620px", margin: "0 auto 3rem", color: "var(--text)", opacity: 0.85, fontSize: "1.05rem" }}>
        Comprehensive and accessible healthcare services designed to support every stage of your health journey.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "2rem",
          justifyItems: "center"
        }}
      >
        {servicesData.map((service, index) => (
          <div
            key={index}
            style={{
              background: "var(--card-bg)",
              color: "var(--text)",
              borderRadius: "14px",
              padding: "2rem 1.5rem",
              textAlign: "center",
              boxShadow: "0 8px 20px var(--card-shadow)",
              border: "1px solid var(--border)",
              maxWidth: "300px",
              transition: "transform 0.2s ease"
            }}
          >
            <div style={{ fontSize: "2.8rem", marginBottom: "1rem" }}>{service.icon}</div>
            <h3 style={{ fontSize: "1.2rem", color: "var(--primary)", marginBottom: "0.6rem" }}>
              {service.name}
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.6", opacity: 0.9 }}>
              {service.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;