// ==========================================
// Patient Testimonials Data
// ==========================================
const testimonialsData = [
  {
    name: "Andrea Andy, 35",
    city: "New Delhi",
    text: "I had a wonderful experience at MediSphere. Booking an appointment was effortless and the specialist was attentive and reassuring.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Ricky Reynold, 27",
    city: "Mumbai",
    text: "The clinic network provided a comfortable and welcoming environment. Getting prescriptions delivered quickly made recovery smooth.",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Grelish David, 30",
    city: "Hyderabad",
    text: "The diagnostics lab results arrived within hours. Accurate, fast, and completely reliable. Highly recommended for family care.",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
];

// ==========================================
// Testimonials Component
// ==========================================
const Testimonials = () => {
  return (
    <section style={{ padding: "4.5rem 5%", textAlign: "center", background: "var(--bg)" }}>
      {/* Title */}
      <h2 style={{ fontSize: "2.2rem", color: "var(--primary)", marginBottom: "0.8rem" }}>
        What Our Patients Say
      </h2>
      <p style={{ maxWidth: "600px", margin: "0 auto 3rem", opacity: 0.85, fontSize: "1rem" }}>
        Real reviews from patients who trust MediSphere for their clinical consultations and healthcare needs.
      </p>

      {/* Reviews Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          justifyItems: "center"
        }}
      >
        {testimonialsData.map((item, idx) => (
          <div
            key={idx}
            style={{
              background: "var(--card-bg)",
              padding: "2.2rem 1.8rem",
              borderRadius: "16px",
              boxShadow: "0 8px 24px var(--card-shadow)",
              border: "1px solid var(--border)",
              maxWidth: "360px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <img
              src={item.avatar}
              alt={item.name}
              style={{
                width: "75px",
                height: "75px",
                borderRadius: "50%",
                marginBottom: "1rem",
                border: "3px solid var(--primary)",
                objectFit: "cover"
              }}
            />
            <h3 style={{ fontSize: "1.15rem", color: "var(--text)", marginBottom: "0.2rem" }}>
              {item.name}
            </h3>
            <span style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1rem" }}>
              {item.city}
            </span>
            <p style={{ fontSize: "0.95rem", color: "var(--text)", opacity: 0.9, lineHeight: "1.6", fontStyle: "italic" }}>
              "{item.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;