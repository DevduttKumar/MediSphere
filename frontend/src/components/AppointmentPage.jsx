import { useState } from "react";

// ==========================================
// Appointment Booking Page Component
// Patient consultation scheduling form
// ==========================================
const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    department: "General Medicine",
    message: ""
  });

  const [status, setStatus] = useState({
    loading: false,
    msg: "",
    error: false
  });

  // Handle appointment form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: "", error: false });

    try {
      const res = await fetch("http://127.0.0.1:5000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to confirm appointment");

      setStatus({
        loading: false,
        msg: "Appointment booked successfully! We will contact you shortly.",
        error: false
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        department: "General Medicine",
        message: ""
      });
    } catch (err) {
      console.error("Booking Error:", err);
      setStatus({ loading: false, msg: err.message, error: true });
    }
  };

  return (
    <div style={{ padding: "3rem 5%", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "100%",
          maxWidth: "580px",
          background: "var(--card-bg)",
          padding: "2.5rem",
          borderRadius: "16px",
          boxShadow: "0 10px 30px var(--card-shadow)",
          border: "1px solid var(--border)"
        }}
      >
        {/* Header */}
        <h2 style={{ textAlign: "center", color: "var(--primary)", fontSize: "2rem", marginBottom: "0.5rem" }}>
          Book an Appointment
        </h2>
        <p style={{ textAlign: "center", color: "var(--text)", opacity: 0.85, marginBottom: "2rem" }}>
          Fill in your clinical details below to schedule a visit with our specialist doctors.
        </p>

        {/* Status Message */}
        {status.msg && (
          <div
            style={{
              padding: "0.85rem 1rem",
              borderRadius: "8px",
              marginBottom: "1.5rem",
              textAlign: "center",
              fontWeight: 600,
              fontSize: "0.95rem",
              background: status.error ? "rgba(220, 53, 69, 0.1)" : "rgba(40, 167, 69, 0.1)",
              color: status.error ? "#dc3545" : "#28a745",
              border: `1px solid ${status.error ? "#dc3545" : "#28a745"}`
            }}
          >
            {status.msg}
          </div>
        )}

        {/* Booking Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          {/* Patient Name */}
          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.4rem" }}>
              Patient Full Name *
            </label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                width: "100%",
                padding: "0.8rem",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                background: "var(--bg)",
                color: "var(--text)",
                outline: "none"
              }}
            />
          </div>

          {/* Email & Phone */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.4rem" }}>
                Email Address *
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  background: "var(--bg)",
                  color: "var(--text)",
                  outline: "none"
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.4rem" }}>
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  background: "var(--bg)",
                  color: "var(--text)",
                  outline: "none"
                }}
              />
            </div>
          </div>

          {/* Date & Department */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.4rem" }}>
                Preferred Date *
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  background: "var(--bg)",
                  color: "var(--text)",
                  outline: "none"
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.4rem" }}>
                Department *
              </label>
              <select
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  background: "var(--bg)",
                  color: "var(--text)",
                  outline: "none"
                }}
              >
                <option value="General Medicine">General Medicine</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Neurology">Neurology</option>
              </select>
            </div>
          </div>

          {/* Message / Symptoms */}
          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.4rem" }}>
              Symptoms / Health Notes (Optional)
            </label>
            <textarea
              placeholder="Briefly describe your symptoms or reason for appointment..."
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                width: "100%",
                padding: "0.8rem",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                background: "var(--bg)",
                color: "var(--text)",
                outline: "none",
                resize: "vertical"
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="primary-btn"
            disabled={status.loading}
            style={{
              padding: "0.85rem",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: 600,
              marginTop: "0.5rem"
            }}
          >
            {status.loading ? "Scheduling..." : "Confirm Appointment"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentPage;
