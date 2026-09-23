// ==========================================
// Health Partners Data
// ==========================================
const partners = [
  "Max Healthcare",
  "Fortis Hospital",
  "Apollo Hospitals",
  "Medanta The Medicity",
  "AIIMS"
];

// ==========================================
// Partners Component
// ==========================================
const Partners = () => {
  return (
    <section style={{ padding: "4rem 5%", textAlign: "center", background: "var(--bg)" }}>
      <h2 style={{ fontSize: "2rem", color: "var(--primary)", marginBottom: "0.8rem" }}>
        Our Health Partners
      </h2>
      <p style={{ maxWidth: "750px", margin: "0 auto 2.5rem", color: "var(--text)", opacity: 0.85, fontSize: "1rem" }}>
        Collaborating with premier hospital networks and medical institutions on healthcare innovation, diagnostics, and clinical excellence.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {partners.map((partner, index) => (
          <div
            key={index}
            style={{
              padding: "1rem 2rem",
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: "10px",
              fontWeight: "700",
              fontSize: "1rem",
              color: "var(--text)",
              boxShadow: "0 4px 12px var(--card-shadow)",
              transition: "all 0.2s ease"
            }}
          >
            {partner}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;