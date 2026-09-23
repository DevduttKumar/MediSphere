import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

// ==========================================
// Authentication Modal Component
// Supports both Login & Sign Up workflows
// ==========================================
const AuthModal = ({ type = "login", onClose }) => {
  const { loginUser } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(type === "login");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Submit credentials to backend API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/signup";
    try {
      const res = await fetch(`http://127.0.0.1:5000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Authentication failed");

      loginUser(data.user);
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
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
          padding: "2.5rem 2rem",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "420px",
          border: "1px solid var(--border)",
          boxShadow: "0 12px 36px var(--card-shadow)"
        }}
      >
        {/* Title */}
        <h2 style={{ fontSize: "1.75rem", color: "var(--primary)", textAlign: "center", marginBottom: "0.5rem" }}>
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>
        <p style={{ textAlign: "center", fontSize: "0.9rem", opacity: 0.8, marginBottom: "1.5rem" }}>
          {isLogin ? "Sign in to access your appointments and care records" : "Register to start your personalized health journey"}
        </p>

        {/* Error Alert */}
        {error && (
          <div
            style={{
              padding: "0.75rem",
              borderRadius: "8px",
              background: "rgba(220, 53, 69, 0.12)",
              color: "#dc3545",
              fontSize: "0.9rem",
              textAlign: "center",
              marginBottom: "1rem",
              border: "1px solid #dc3545"
            }}
          >
            {error}
          </div>
        )}

        {/* Form Fields */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {!isLogin && (
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  background: "var(--bg)",
                  color: "var(--text)",
                  outline: "none"
                }}
              />
            </div>
          )}

          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.3rem" }}>
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                background: "var(--bg)",
                color: "var(--text)",
                outline: "none"
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.3rem" }}>
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                background: "var(--bg)",
                color: "var(--text)",
                outline: "none"
              }}
            />
          </div>

          <button
            type="submit"
            className="primary-btn"
            disabled={loading}
            style={{
              padding: "0.85rem",
              borderRadius: "8px",
              marginTop: "0.5rem",
              fontWeight: 600,
              fontSize: "1rem"
            }}
          >
            {loading ? "Processing..." : isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        {/* Toggle Login / Sign Up */}
        <p style={{ marginTop: "1.2rem", textAlign: "center", fontSize: "0.9rem" }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            style={{ color: "var(--primary)", cursor: "pointer", fontWeight: 700 }}
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </span>
        </p>

        {/* Close Modal Button */}
        <button
          onClick={onClose}
          style={{
            marginTop: "0.8rem",
            width: "100%",
            background: "transparent",
            border: "none",
            color: "var(--text)",
            opacity: 0.7,
            padding: "0.4rem",
            cursor: "pointer"
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AuthModal;