import { useState, useEffect } from "react";

const HospitalPage = () => {
  const [hospitals, setHospitals] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHospitals = (query = "") => {
    setLoading(true);
    setError(null);
    fetch(`http://127.0.0.1:5000/api/hospitals?search=${encodeURIComponent(query)}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Server returned ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setHospitals(data);
        } else {
          throw new Error(data.error || "Failed to load hospitals");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchHospitals();
  }, []);

  return (
    <div style={{ padding: "2rem 5%" }}>
      <h2 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Find Medical Centers</h2>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Search by hospital name or city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchHospitals(search)}
          style={{ padding: "0.75rem", width: "100%", maxWidth: "400px", borderRadius: "6px", border: "1px solid var(--border)" }}
        />
        <button className="primary-btn" onClick={() => fetchHospitals(search)}>
          Search
        </button>
      </div>

      {loading && <p>Loading medical centers...</p>}

      {error && (
        <div style={{ padding: "1rem", background: "rgba(220, 53, 69, 0.1)", border: "1px solid #dc3545", borderRadius: "8px", maxWidth: "500px", marginBottom: "1.5rem" }}>
          <p style={{ color: "#dc3545", marginBottom: "0.5rem" }}>Error: {error}</p>
          <button className="primary-btn" onClick={() => fetchHospitals(search)}>
            Retry
          </button>
        </div>
      )}

      {!loading && !error && hospitals.length === 0 && (
        <p style={{ opacity: 0.8 }}>No medical centers found matching your query.</p>
      )}

      {!loading && !error && hospitals.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {hospitals.map((h) => (
            <div key={h.hospital_id} style={{
              background: "var(--card-bg)",
              padding: "1.5rem",
              borderRadius: "12px",
              boxShadow: "0 4px 12px var(--card-shadow)",
              border: "1px solid var(--border)"
            }}>
              <h3 style={{ color: "var(--primary)", marginBottom: "0.5rem" }}>{h.hospital_name}</h3>
              <p><strong>City:</strong> {h.city}, {h.state}</p>
              <p><strong>Address:</strong> {h.location} ({h.pincode})</p>
              <p><strong>Phone:</strong> {h.contact_num}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HospitalPage;