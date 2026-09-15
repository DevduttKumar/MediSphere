const doctorsData = [
  {
    name: "Dr. Andrew White, 32",
    department: "Orthopedic",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&auto=format&fit=crop&q=80"
  },
  {
    name: "Dr. Sakshi Mishra, 40",
    department: "Neurologist",
    image: "https://images.unsplash.com/photo-1594824813589-9189035276e0?w=300&auto=format&fit=crop&q=80"
  },
  {
    name: "Dr. Steve Johnson, 49",
    department: "Pediatrician",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&auto=format&fit=crop&q=80"
  }
];

const Doctors = () => {
  return (
    <section style={{ padding: "4rem 5%", textAlign: "center", background: "var(--card-bg)" }}>
      <h2 style={{ fontSize: "2.2rem", color: "var(--primary)", marginBottom: "1rem" }}>Our Doctors</h2>
      <p style={{ maxWidth: "700px", margin: "0 auto 2.5rem", color: "var(--text)", opacity: 0.85 }}>
        Teamwork and effective communication among our medical staff is critical to providing high-quality patient care and ensuring positive health outcomes.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "2rem",
        justifyItems: "center"
      }}>
        {doctorsData.map((doc, idx) => (
          <div key={idx} style={{
            background: "var(--bg)",
            color: "var(--text)",
            borderRadius: "12px",
            boxShadow: "0 8px 20px var(--card-shadow)",
            padding: "1.5rem",
            textAlign: "center",
            maxWidth: "260px",
            border: "1px solid var(--border)"
          }}>
            <img
              src={doc.image}
              alt={doc.name}
              style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", marginBottom: "1rem" }}
            />
            <h3 style={{ fontSize: "1.1rem", color: "var(--primary)", marginBottom: "0.25rem" }}>{doc.name}</h3>
            <p style={{ fontSize: "0.95rem", opacity: 0.85 }}>{doc.department}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;