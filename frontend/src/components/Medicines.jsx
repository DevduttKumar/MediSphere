// ==========================================
// Pharmacy & Medicine Catalog Data
// ==========================================
const medicinesData = [
  { id: "MED001", name: "Paracetamol 650mg", category: "Analgesic / Antipyretic", mfg: "GlaxoSmithKline", inStock: true },
  { id: "MED002", name: "Amoxicillin 500mg", category: "Antibiotic", mfg: "Pfizer", inStock: true },
  { id: "MED003", name: "Cetirizine 10mg", category: "Antihistamine", mfg: "Sun Pharma", inStock: true },
  { id: "MED004", name: "Ibuprofen 400mg", category: "Pain Relief", mfg: "Dr. Reddy", inStock: true },
  { id: "MED005", name: "Metformin 500mg", category: "Diabetes Support", mfg: "Cipla", inStock: false },
  { id: "MED006", name: "Azithromycin 500mg", category: "Antibiotic", mfg: "Mankind", inStock: true }
];

// ==========================================
// Medicines Component (Pharmacy Section)
// ==========================================
const Medicines = () => {
  return (
    <section id="medicines" style={{ padding: "4.5rem 5%", background: "var(--card-bg)" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "2.2rem", color: "var(--primary)", marginBottom: "0.6rem" }}>
          Clinical Pharmacy & Medicine
        </h2>
        <p style={{ maxWidth: "650px", margin: "0 auto", opacity: 0.85, fontSize: "1.05rem" }}>
          Authorized medicines directly supplied by partner hospital networks and verified pharmaceutical laboratories.
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem"
        }}
      >
        {medicinesData.map((item) => (
          <div
            key={item.id}
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: "14px",
              padding: "1.8rem",
              boxShadow: "0 6px 16px var(--card-shadow)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: "bold" }}>
                  {item.id}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    padding: "0.25rem 0.6rem",
                    borderRadius: "6px",
                    background: item.inStock ? "rgba(40, 167, 69, 0.15)" : "rgba(220, 53, 69, 0.15)",
                    color: item.inStock ? "#28a745" : "#dc3545",
                    fontWeight: "bold"
                  }}
                >
                  {item.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.4rem", color: "var(--text)" }}>
                {item.name}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text)", opacity: 0.8 }}>
                Category: {item.category}
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--text)", opacity: 0.65, marginTop: "0.2rem" }}>
                Manufacturer: {item.mfg}
              </p>
            </div>

            <button
              className="primary-btn"
              disabled={!item.inStock}
              style={{
                marginTop: "1.4rem",
                padding: "0.6rem",
                fontSize: "0.9rem",
                borderRadius: "8px",
                opacity: item.inStock ? 1 : 0.5,
                cursor: item.inStock ? "pointer" : "not-allowed"
              }}
            >
              {item.inStock ? "Request Supply" : "Unavailable"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Medicines;