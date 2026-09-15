const servicesData = [
  {
    name: "Immunization & Vaccines",
    body: "Stay protected with safe, up-to-date vaccines for all age groups, administered by licensed professionals.",
    icon: "💉"
  },
  {
    name: "24/7 Online Consultation",
    body: "Instant access to certified doctors anytime, anywhere. Get expert advice without visiting a clinic.",
    icon: "🩺"
  },
  {
    name: "Personal Self-Care",
    body: "Wellness starts with you. Explore lifestyle guidance, mental health support, and tailored nutrition tips.",
    icon: "🧘"
  },
  {
    name: "Advanced Diagnostics Lab",
    body: "Fast and reliable test results powered by cutting-edge technology. Book blood tests and imaging with ease.",
    icon: "🔬"
  }
];

const Services = () => {
  return (
    <section id="services" style={{ padding: "4rem 5%", textAlign: "center", background: "var(--bg)" }}>
      <h2 style={{ fontSize: "2.2rem", color: "var(--primary)", marginBottom: "1rem" }}>Our Services</h2>
      <p style={{ maxWidth: "600px", margin: "0 auto 2.5rem", color: "var(--text)", opacity: 0.85 }}>
        Comprehensive and accessible clinical services designed to support every step of your health journey.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "2rem",
        justifyItems: "center"
      }}>
        {servicesData.map((service, index) => (
          <div key={index} style={{
            background: "var(--card-bg)",
            color: "var(--text)",
            borderRadius: "12px",
            padding: "2rem 1.5rem",
            textAlign: "center",
            boxShadow: "0 8px 16px var(--card-shadow)",
            border: "1px solid var(--border)",
            maxWidth: "300px"
          }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{service.icon}</div>
            <h3 style={{ fontSize: "1.2rem", color: "var(--primary)", marginBottom: "0.5rem" }}>{service.name}</h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.5", opacity: 0.9 }}>{service.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;