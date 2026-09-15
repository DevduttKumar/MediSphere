import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "2rem",
      padding: "4rem 5%",
      background: "var(--bg)",
      color: "var(--text)",
      flexWrap: "wrap"
    }}>
      <div style={{ flex: "1", minWidth: "300px" }}>
        <h1 style={{ fontSize: "2.8rem", fontWeight: "700", lineHeight: "1.3", marginBottom: "1rem" }}>
          Every good thing<br />
          starts with good<br />
          <span style={{ color: "var(--primary)" }}>health</span>
        </h1>
        <p style={{ fontSize: "1.1rem", maxWidth: "500px", marginBottom: "2rem", color: "var(--text)", opacity: 0.9 }}>
          We are here to serve people with patient-centered care to deliver outstanding healthcare for better lives.
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
            Learn More
          </a>
        </div>
      </div>

      <div style={{ flex: "1", display: "flex", justifyContent: "center", alignItems: "center", minWidth: "280px" }}>
        <img
          src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
          alt="Healthcare doctor"
          style={{ width: "100%", maxWidth: "380px", borderRadius: "20px", boxShadow: "0 10px 30px var(--card-shadow)" }}
        />
      </div>
    </section>
  );
};

export default Banner;