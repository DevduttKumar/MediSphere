import { useNavigate } from "react-router-dom";

// ==========================================
// Facilities Component
// Details medical campus facilities & ICUs
// ==========================================
const Facilities = () => {
  const navigate = useNavigate();

  return (
    <section style={{ padding: "4.5rem 5%", background: "var(--card-bg)" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "3rem",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        {/* Left Information */}
        <div style={{ flex: "1", minWidth: "280px" }}>
          <h2 style={{ fontSize: "2rem", color: "var(--primary)", marginBottom: "0.8rem" }}>
            Our Facilities
          </h2>
          <h3 style={{ fontSize: "1.45rem", color: "var(--text)", marginBottom: "1rem", lineHeight: "1.3" }}>
            World-class infrastructure engineered for superior clinical care
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "var(--text)", opacity: 0.85, marginBottom: "1.8rem" }}>
            Equipped with state-of-the-art diagnostic imaging, round-the-clock emergency ICUs, clean operating theatres, and dedicated consultation suites, our facilities support rapid diagnosis and comprehensive rehabilitation.
          </p>
          <button className="primary-btn" onClick={() => navigate("/hospital")}>
            Explore Facilities & Centers
          </button>
        </div>

        {/* Right Facility Photos */}
        <div
          style={{
            flex: "1",
            display: "flex",
            gap: "1.2rem",
            justifyContent: "center",
            flexWrap: "wrap",
            minWidth: "280px"
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=350&auto=format&fit=crop&q=80"
            alt="Modern Hospital Room Facility"
            style={{
              width: "100%",
              maxWidth: "260px",
              borderRadius: "14px",
              objectFit: "cover",
              boxShadow: "0 8px 24px var(--card-shadow)"
            }}
          />
          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=350&auto=format&fit=crop&q=80"
            alt="Clinical Laboratory Facility"
            style={{
              width: "100%",
              maxWidth: "260px",
              borderRadius: "14px",
              objectFit: "cover",
              boxShadow: "0 8px 24px var(--card-shadow)"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Facilities;