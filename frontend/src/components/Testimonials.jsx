const testimonialsData = [
  {
    name: "Andrea Andy, 35",
    text: "I had a great experience at this clinic. The doctors were knowledgeable and caring throughout my treatment.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Ricky Reynold, 27",
    text: "The clinic provided a comfortable and welcoming atmosphere. Booking appointments online was effortless.",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Grelish David, 30",
    text: "The diagnostic lab results were quick and accurate. Highly recommend their healthcare network.",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
];

const Testimonials = () => {
  return (
    <section style={{ padding: "4rem 5%", textAlign: "center", background: "var(--bg)" }}>
      <h2 style={{ fontSize: "2rem", color: "var(--primary)", marginBottom: "2.5rem" }}>What People Say</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "2rem",
        justifyItems: "center"
      }}>
        {testimonialsData.map((item, idx) => (
          <div key={idx} style={{
            background: "var(--card-bg)",
            padding: "2rem 1.5rem",
            borderRadius: "12px",
            boxShadow: "0 8px 20px var(--card-shadow)",
            border: "1px solid var(--border)",
            maxWidth: "340px",
            textAlign: "center"
          }}>
            <img
              src={item.avatar}
              alt={item.name}
              style={{ width: "70px", height: "70px", borderRadius: "50%", marginBottom: "1rem", border: "2px solid var(--primary)" }}
            />
            <h3 style={{ fontSize: "1.1rem", color: "var(--text)", marginBottom: "0.5rem" }}>{item.name}</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text)", opacity: 0.85, lineHeight: "1.5" }}>"{item.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;