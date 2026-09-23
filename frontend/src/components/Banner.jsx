import { useNavigate } from "react-router-dom";

// ==========================================
// Banner Component (Hero Section)
// Introduces MediSphere with quick action buttons
// ==========================================
const Banner = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "2.5rem",
        padding: "4rem 5%",
        background: "var(--bg)",
        color: "var(--text)",
        flexWrap: "wrap",
        minHeight: "480px"
      }}
    >
      {/* Left Text & Call to Action */}
      <div style={{ flex: "1", minWidth: "300px" }}>
        <h1 style={{ fontSize: "2.8rem", fontWeight: "800", lineHeight: "1.25", marginBottom: "1.2rem" }}>
          Every good thing<br />
          starts with good<br />
          <span style={{ color: "var(--primary)" }}>health</span>
        </h1>
        <p style={{ fontSize: "1.1rem", maxWidth: "520px", marginBottom: "2rem", opacity: 0.9, lineHeight: "1.6" }}>
          We are here to serve patients with personalized care, connecting you with premier hospital networks, specialist appointments, and pharmacy essentials.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button className="primary-btn" onClick={() => navigate("/appointment")}>
            Request Appointment
          </button>
          <a
            href="#services"
            style={{
              padding: "0.75rem 1.5rem",
              background: "transparent",
              color: "var(--primary)",
              border: "2px solid var(--primary)",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center"
            }}
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Right Hero Image */}
      <div style={{ flex: "1", display: "flex", justifyContent: "center", alignItems: "center", minWidth: "280px" }}>
        <img
          src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
          alt="Healthcare Specialist Doctor"
          style={{
            width: "100%",
            maxWidth: "380px",
            borderRadius: "20px",
            boxShadow: "0 12px 32px var(--card-shadow)",
            objectFit: "cover"
          }}
        />
      </div>
    </section>
  );
};

export default Banner;