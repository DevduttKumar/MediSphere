import { useState } from "react";

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    department: "General Medicine",
    message: ""
  });
  const [status, setStatus] = useState({ loading: false, msg: "", error: false });

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
      if (!res.ok) throw new Error(data.error || "Failed to submit");

      setStatus({ loading: false, msg: "Appointment confirmed successfully!", error: false });
      setFormData({ name: "", email: "", phone: "", date: "", department: "General Medicine", message: "" });
    } catch (err) {
      setStatus({ loading: false, msg: err.message, error: true });
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "3rem auto", padding: "2rem", background: "var(--card-bg)", borderRadius: "12px", boxShadow: "0 8px 24px var(--card-shadow)" }}>
      <h2 style={{ textAlign: "center", color: "var(--primary)", marginBottom: "0.5rem" }}>Book an Appointment</h2>
      <p style={{ textAlign: "center", marginBottom: "1.5rem" }}>Fill details below for hospital scheduling.</p>

      {status.msg && (
        <p style={{ color: status.error ? "red" : "green", textAlign: "center", fontWeight: "bold", marginBottom: "1rem" }}>
          {status.msg}
        </p>
      )}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text" placeholder="Patient Full Name" required
          value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid var(--border)" }}
        />
        <input
          type="email" placeholder="Email Address" required
          value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid var(--border)" }}
        />
        <input
          type="tel" placeholder="Phone Number" required
          value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid var(--border)" }}
        />
        <input
          type="date" required
          value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid var(--border)" }}
        />
        <select
          value={formData.department} onChange={(e) => setFormData({ ...formData, department: e.target.value })}
          style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--bg)", color: "var(--text)" }}
        >
          <option value="General Medicine">General Medicine</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Dermatology">Dermatology</option>
          <option value="Pediatrics">Pediatrics</option>
        </select>
        <textarea
          placeholder="Describe symptoms (Optional)" rows={3}
          value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid var(--border)" }}
        />
        <button type="submit" className="primary-btn" disabled={status.loading}>
          {status.loading ? "Scheduling..." : "Confirm Appointment"}
        </button>
      </form>
    </div>
  );
};

export default AppointmentPage;