import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// ==========================================
// Hospital Directory Page Component
// Fetches & displays medical centers with search
// ==========================================
const HospitalPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("search") || "";

  const [hospitals, setHospitals] = useState([]);
  const [search, setSearch] = useState(queryParam);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch hospital data from backend API
  const fetchHospitals = (query = "") => {
    setLoading(true);
    setError(null);

    fetch(`http://127.0.0.1:5000/api/hospitals?search=${encodeURIComponent(query)}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Server returned error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setHospitals(data);
        } else {
          throw new Error(data.error || "Failed to load medical centers");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Hospitals API Error:", err);
        setError(err.message);
        setLoading(false);
      });
  };

  // Sync with URL search parameter
  useEffect(() => {
    fetchHospitals(queryParam);
    setSearch(queryParam);
  }, [queryParam]);

  // Handle search submission
  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    setSearchParams(search ? { search } : {});
  };

  return (
    <div style={{ padding: "2.5rem 5%", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header */}
      <h2 style={{ fontSize: "2rem", color: "var(--primary)", marginBottom: "0.5rem" }}>
        Find Hospitals
      </h2>
      <p style={{ color: "var(--text)", opacity: 0.85, marginBottom: "1.5rem" }}>
        Search through our verified network of partner hospitals and clinics across major cities.
      </p>

      {/* Search Input Bar */}
      <form
        onSubmit={handleSearchSubmit}
        style={{ display: "flex", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}
      >
        <input
          type="text"
          placeholder="Search by hospital name or city..."
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

      {/* Loading State */}
      {loading && (
        <p style={{ color: "var(--text)", opacity: 0.8, fontSize: "1.05rem" }}>
          Loading Hospitals...
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
            Unable to load hospitals: {error}
          </p>
          <button className="primary-btn" onClick={() => fetchHospitals(search)}>
            Try Again
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && hospitals.length === 0 && (
        <p style={{ opacity: 0.8, fontSize: "1.05rem", padding: "1rem 0" }}>
          No medical centers found matching "{search}". Try searching for another city or hospital.
        </p>
      )}

      {/* Hospital Cards Grid */}
      {!loading && !error && hospitals.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem"
          }}
        >
          {hospitals.map((h) => (
            <div
              key={h.hospital_id}
              style={{
                background: "var(--card-bg)",
                padding: "1.5rem",
                borderRadius: "12px",
                boxShadow: "0 4px 16px var(--card-shadow)",
                border: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--primary)",
                    fontWeight: 700,
                    letterSpacing: "0.5px"
                  }}
                >
                  {h.hospital_id}
                </span>
                <h3 style={{ color: "var(--primary)", fontSize: "1.25rem", margin: "0.3rem 0 0.8rem" }}>
                  {h.hospital_name}
                </h3>
                <p style={{ fontSize: "0.95rem", marginBottom: "0.4rem", color: "var(--text)" }}>
                  <strong>City:</strong> {h.city}, {h.state}
                </p>
                <p style={{ fontSize: "0.95rem", marginBottom: "0.4rem", color: "var(--text)" }}>
                  <strong>Address:</strong> {h.location} ({h.pincode})
                </p>
              </div>

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
                <span style={{ fontSize: "0.9rem", color: "var(--text)", opacity: 0.9 }}>
                  📞 {h.contact_num}
                </span>
                <a
                  href={`tel:${h.contact_num}`}
                  style={{
                    textDecoration: "none",
                    color: "var(--primary)",
                    fontSize: "0.85rem",
                    fontWeight: 600
                  }}
                >
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HospitalPage;
