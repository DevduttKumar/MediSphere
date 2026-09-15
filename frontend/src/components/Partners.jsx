const partners = ["Max Healthcare", "Fortis", "Apollo Hospitals", "Medanta", "AIIMS"];

const Partners = () => {
  return (
    <section style={{ padding: "4rem 5%", textAlign: "center", background: "var(--bg)" }}>
      <h2 style={{ fontSize: "2rem", color: "var(--primary)", marginBottom: "1rem" }}>Our Health Partners</h2>
      <p style={{ maxWidth: "750px", margin: "0 auto 2.5rem", color: "var(--text)", opacity: 0.85 }}>
        Research organizations and premier institutions that collaborate on medical research, healthcare innovation, and clinical treatments.
      </p>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "center"
      }}>
        {partners.map((partner, index) => (
          <div key={index} style={{
            padding: "1rem 2rem",
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            fontWeight: "bold",
            color: "var(--text)",
            boxShadow: "0 4px 10px var(--card-shadow)"
          }}>
            {partner}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;