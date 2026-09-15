const Facilities = () => {
  return (
    <section style={{ padding: "4rem 5%", background: "var(--card-bg)" }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "3rem",
        flexWrap: "wrap"
      }}>
        <div style={{ flex: "1", minWidth: "280px" }}>
          <h2 style={{ fontSize: "2rem", color: "var(--primary)", marginBottom: "1rem" }}>Our Facilities</h2>
          <h3 style={{ fontSize: "1.4rem", color: "var(--text)", marginBottom: "1rem" }}>
            Clinical facilities are the backbone of modern healthcare systems
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "var(--text)", opacity: 0.85, marginBottom: "1.5rem" }}>
            Providing essential resources for the diagnosis, treatment, and management of various medical conditions. Our facilities encompass dedicated clinics, high-tech diagnostic laboratories, and intensive care units designed for optimal recovery.
          </p>
          <button className="primary-btn">Find Out More</button>
        </div>

        <div style={{ flex: "1", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", minWidth: "280px" }}>
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=350&auto=format&fit=crop&q=80"
            alt="Hospital Facility 1"
            style={{ width: "100%", maxWidth: "260px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 6px 18px var(--card-shadow)" }}
          />
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=350&auto=format&fit=crop&q=80"
            alt="Hospital Facility 2"
            style={{ width: "100%", maxWidth: "260px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 6px 18px var(--card-shadow)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Facilities;