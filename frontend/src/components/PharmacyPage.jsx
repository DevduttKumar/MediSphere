import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// ==========================================
// Pharmacy Page Component
// Catalog of clinical medications and supplies
// ==========================================
const PharmacyPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("search") || "";

  const [medicines, setMedicines] = useState([]);
  const [search, setSearch] = useState(queryParam);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Order modal state
  const [selectedMed, setSelectedMed] = useState(null);
  const [orderQty, setOrderQty] = useState(1);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const categories = [
    "All",
    "Antibiotic",
    "Pain Relief",
    "Allergy",
    "Antidiabetic",
    "Gastrointestinal",
    "Nutritional"
  ];

  // Fetch pharmacy medicines from backend API
  const fetchMedicines = (query = "", category = "") => {
    setLoading(true);
    setError(null);

    const params = new URLSearchParams();
    if (query) params.append("search", query);
    if (category && category !== "All") params.append("category", category);

    fetch(`http://127.0.0.1:5000/api/pharmacy?${params.toString()}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Server returned status ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setMedicines(data);
        } else {
          throw new Error(data.error || "Failed to load pharmacy medicines");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Pharmacy API Error:", err);
        setError(err.message);
        setLoading(false);
      });
  };

  // Sync with URL query param on mount or URL change
  useEffect(() => {
    fetchMedicines(queryParam, activeCategory);
    setSearch(queryParam);
  }, [queryParam, activeCategory]);

  // Handle search submission
  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    setSearchParams(search ? { search } : {});
  };

  // Handle category filter switch
  const handleCategorySelect = (cat) => {
    setActiveCategory(cat);
  };

  // Handle order supply confirmation
  const handleConfirmOrder = (e) => {
    e.preventDefault();
    setOrderSuccess(true);
    setTimeout(() => {
      setOrderSuccess(false);
      setSelectedMed(null);
      setOrderQty(1);
    }, 2000);
  };

  return (
    <div style={{ padding: "2.5rem 5%", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header */}
      <h2 style={{ fontSize: "2rem", color: "var(--primary)", marginBottom: "0.5rem" }}>
        Find Pharmacy & Medicine
      </h2>
      <p style={{ color: "var(--text)", opacity: 0.85, marginBottom: "1.5rem" }}>
        Search through authorized pharmaceutical supplies, essential prescription drugs, and medical items.
      </p>

      {/* Search Input Bar */}
      <form
        onSubmit={handleSearchSubmit}
        style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}
      >
        <input
          type="text"
          placeholder="Search by medicine name, type, or manufacturer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: 1,
            minWidth: "260px",
            maxWidth: "450px",
            padding: "0.75rem 1rem",
            borderRadius: "8px",
            border: "1px solid var(--border)",
            background: "var(--bg)",
            color: "var(--text)",
            outline: "none"
          }}
        />
        <button type="submit" className="primary-btn">
          Search
        </button>
        {search && (
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setSearchParams({});
            }}
            style={{
              background: "transparent",
              border: "1px solid var(--border)",
              color: "var(--text)",
              padding: "0.75rem 1rem",
              borderRadius: "8px"
            }}
          >
            Clear
          </button>
        )}
      </form>

      {/* Category Filter Pills */}
      <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "2rem" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => handleCategorySelect(cat)}
            style={{
              padding: "0.4rem 1rem",
              borderRadius: "20px",
              fontSize: "0.85rem",
              border: activeCategory === cat ? "1px solid var(--primary)" : "1px solid var(--border)",
              background: activeCategory === cat ? "var(--primary)" : "var(--card-bg)",
              color: activeCategory === cat ? "#ffffff" : "var(--text)",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Loading State */}
      {loading && (
        <p style={{ color: "var(--text)", opacity: 0.8, fontSize: "1.05rem" }}>
          Loading pharmacy catalog...
        </p>
      )}

      {/* Error State */}
      {error && (
        <div
          style={{
            padding: "1rem 1.5rem",
            background: "rgba(220, 53, 69, 0.1)",
            border: "1px solid #dc3545",
            borderRadius: "8px",
            maxWidth: "500px",
            marginBottom: "1.5rem"
          }}
        >
          <p style={{ color: "#dc3545", marginBottom: "0.5rem", fontWeight: 600 }}>
            Unable to load medicines: {error}
          </p>
          <button className="primary-btn" onClick={() => fetchMedicines(search, activeCategory)}>
            Try Again
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && medicines.length === 0 && (
        <p style={{ opacity: 0.8, fontSize: "1.05rem", padding: "1rem 0" }}>
          No medications found matching "{search}". Try searching with different keywords or categories.
        </p>
      )}

      {/* Medicines Cards Grid */}
      {!loading && !error && medicines.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem"
          }}
        >
          {medicines.map((m) => (
            <div
              key={m.medicine_id}
              style={{
                background: "var(--card-bg)",
                padding: "1.5rem",
                borderRadius: "14px",
                boxShadow: "0 4px 16px var(--card-shadow)",
                border: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                {/* Top ID and Stock Status */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--primary)",
                      fontWeight: 700,
                      letterSpacing: "0.5px"
                    }}
                  >
                    {m.medicine_id}
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "6px",
                      background: m.in_stock ? "rgba(40, 167, 69, 0.15)" : "rgba(220, 53, 69, 0.15)",
                      color: m.in_stock ? "#28a745" : "#dc3545",
                      fontWeight: 700
                    }}
                  >
                    {m.in_stock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>

                {/* Medicine Title & Details */}
                <h3 style={{ color: "var(--primary)", fontSize: "1.25rem", margin: "0.2rem 0 0.5rem" }}>
                  {m.medicine_name}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text)", opacity: 0.8, marginBottom: "0.3rem" }}>
                  <strong>Type:</strong> {m.category}
                </p>
                <p style={{ fontSize: "0.85rem", color: "var(--text)", opacity: 0.8, marginBottom: "0.3rem" }}>
                  <strong>Dosage:</strong> {m.dosage}
                </p>
                <p style={{ fontSize: "0.85rem", color: "var(--text)", opacity: 0.7, marginBottom: "0.5rem" }}>
                  <strong>Mfg:</strong> {m.mfg}
                </p>
                {m.description && (
                  <p style={{ fontSize: "0.85rem", color: "var(--text)", opacity: 0.85, lineHeight: "1.4", margin: "0.5rem 0" }}>
                    {m.description}
                  </p>
                )}
              </div>

              {/* Bottom Price and Action */}
              <div
                style={{
                  marginTop: "1.2rem",
                  paddingTop: "0.8rem",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text)" }}>
                  ₹{Number(m.price).toFixed(2)}
                </span>
                <button
                  type="button"
                  className="primary-btn"
                  disabled={!m.in_stock}
                  onClick={() => setSelectedMed(m)}
                  style={{
                    padding: "0.45rem 1rem",
                    borderRadius: "8px",
                    fontSize: "0.85rem",
                    opacity: m.in_stock ? 1 : 0.5,
                    cursor: m.in_stock ? "pointer" : "not-allowed"
                  }}
                >
                  {m.in_stock ? "Request Supply" : "Unavailable"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Quick Order Modal */}
      {selectedMed && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.55)",
            backdropFilter: "blur(4px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            padding: "1rem"
          }}
        >
          <div
            style={{
              background: "var(--card-bg)",
              color: "var(--text)",
              padding: "2rem",
              borderRadius: "16px",
              width: "100%",
              maxWidth: "420px",
              border: "1px solid var(--border)",
              boxShadow: "0 12px 36px var(--card-shadow)"
            }}
          >
            <h3 style={{ color: "var(--primary)", fontSize: "1.4rem", marginBottom: "0.4rem" }}>
              Request Medication Supply
            </h3>
            <p style={{ fontSize: "0.9rem", opacity: 0.85, marginBottom: "1.2rem" }}>
              Confirm your supply dispatch request for <strong>{selectedMed.medicine_name}</strong>.
            </p>

            {orderSuccess ? (
              <div
                style={{
                  padding: "1rem",
                  borderRadius: "8px",
                  background: "rgba(40, 167, 69, 0.15)",
                  color: "#28a745",
                  fontWeight: 600,
                  textAlign: "center"
                }}
              >
                ✓ Request submitted! A clinical partner will dispatch your supply.
              </div>
            ) : (
              <form onSubmit={handleConfirmOrder} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                    Package Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={orderQty}
                    onChange={(e) => setOrderQty(Math.max(1, parseInt(e.target.value) || 1))}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "8px",
                      border: "1px solid var(--border)",
                      background: "var(--bg)",
                      color: "var(--text)"
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0.8rem",
                    borderRadius: "8px",
                    background: "var(--bg)",
                    border: "1px solid var(--border)"
                  }}
                >
                  <span style={{ fontSize: "0.9rem", opacity: 0.85 }}>Estimated Total:</span>
                  <span style={{ fontWeight: 700, color: "var(--primary)" }}>
                    ₹{(selectedMed.price * orderQty).toFixed(2)}
                  </span>
                </div>

                <div style={{ display: "flex", gap: "0.8rem", marginTop: "0.5rem" }}>
                  <button type="submit" className="primary-btn" style={{ flex: 1, padding: "0.75rem" }}>
                    Confirm Request
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedMed(null)}
                    style={{
                      padding: "0.75rem 1rem",
                      borderRadius: "8px",
                      background: "transparent",
                      border: "1px solid var(--border)",
                      color: "var(--text)"
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PharmacyPage;
