// ==========================================
// Medical Specialists Data
// ==========================================
const doctorsData = [
  {
    name: "Dr. Andrew White, 32",
    department: "Orthopedic Surgeon",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&auto=format&fit=crop&q=80"
  },
  {
    name: "Dr. Sakshi Mishra, 40",
    department: "Senior Neurologist",
    image: "https://images.unsplash.com/photo-1594824813589-9189035276e0?w=300&auto=format&fit=crop&q=80"
  },
  {
    name: "Dr. Steve Johnson, 49",
    department: "Lead Pediatrician",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&auto=format&fit=crop&q=80"
  }
];

// ==========================================
// Doctors Component
// ==========================================
const Doctors = () => {
  return (
    <section id="doctors" style={{ padding: "4.5rem 5%", textAlign: "center", background: "var(--card-bg)" }}>
      {/* Header */}
      <h2 style={{ fontSize: "2.2rem", color: "var(--primary)", marginBottom: "0.8rem" }}>
        Our Specialist Doctors
      </h2>
      <p style={{ maxWidth: "700px", margin: "0 auto 3rem", color: "var(--text)", opacity: 0.85, fontSize: "1.05rem" }}>
        Compassionate communication and clinical expertise define our medical staff, providing high-quality care for positive patient outcomes.
      </p>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "2rem",
          justifyItems: "center"
        }}
      >
        {doctorsData.map((doc, idx) => (
          <div
            key={idx}
            style={{
              background: "var(--bg)",
              color: "var(--text)",
              borderRadius: "16px",
              boxShadow: "0 8px 24px var(--card-shadow)",
              padding: "2rem 1.5rem",
              textAlign: "center",
              width: "100%",
              maxWidth: "280px",
              border: "1px solid var(--border)"
            }}
          >
            <img
              src={doc.image}
              alt={doc.name}
              style={{
                width: "130px",
                height: "130px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "1.2rem",
                border: "3px solid var(--primary)"
              }}
            />
            <h3 style={{ fontSize: "1.2rem", color: "var(--primary)", marginBottom: "0.4rem" }}>
              {doc.name}
            </h3>
            <p style={{ fontSize: "0.95rem", opacity: 0.85 }}>
              {doc.department}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;