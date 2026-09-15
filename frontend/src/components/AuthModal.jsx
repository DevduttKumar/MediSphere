import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AuthModal = ({ type, onClose }) => {
  const { loginUser } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(type === "login");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)",
      display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000
    }}>
      <div style={{
        background: "var(--bg)", padding: "2rem", borderRadius: "12px",
        width: "90%", maxWidth: "400px", border: "1px solid var(--border)"
      }}>
        <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>
        {error && <p style={{ color: "red", marginTop: "0.5rem" }}>{error}</p>}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid var(--border)" }}
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid var(--border)" }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid var(--border)" }}
          />
          <button type="submit" className="primary-btn" disabled={loading}>
            {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.9rem" }}>
          {isLogin ? "Need an account? " : "Already have an account? "}
          <span onClick={() => setIsLogin(!isLogin)} style={{ color: "var(--primary)", cursor: "pointer", fontWeight: 600 }}>
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
        <button onClick={onClose} style={{ marginTop: "0.5rem", width: "100%", background: "none", border: "none", color: "var(--text)" }}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AuthModal;