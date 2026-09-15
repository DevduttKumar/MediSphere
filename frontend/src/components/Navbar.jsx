import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import Logo from "./Logo";

const Navbar = ({ onOpenAuth }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logoutUser } = useContext(AuthContext);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 1000,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 5%",
      background: "var(--nav-bg)",
      borderBottom: "1px solid var(--border)",
      backdropFilter: "blur(8px)"
    }}>
      <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <Logo size="36px" />
      </div>

      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <span 
          onClick={() => navigate("/hospital")} 
          style={{ cursor: "pointer", fontWeight: 600, color: "var(--text)" }}
        >
          Hospitals
        </span>

        {/* Medicine Dropdown */}
        <div 
          onMouseEnter={() => setActiveDropdown("medicine")} 
          onMouseLeave={() => setActiveDropdown(null)}
          style={{ position: "relative", cursor: "pointer" }}
        >
          <span style={{ fontWeight: 600, color: "var(--text)" }}>Medicine ▾</span>
          {activeDropdown === "medicine" && (
            <div style={{
              position: "absolute",
              top: "100%",
              left: 0,
              background: "var(--card-bg)",
              boxShadow: "0 8px 20px var(--card-shadow)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "0.5rem 0",
              minWidth: "180px",
              display: "flex",
              flexDirection: "column"
            }}>
              <a href="#medicines" style={{ padding: "0.6rem 1rem", textDecoration: "none", color: "var(--text)", fontSize: "0.9rem" }}>Pharmacy List</a>
              <a href="#medicines" style={{ padding: "0.6rem 1rem", textDecoration: "none", color: "var(--text)", fontSize: "0.9rem" }}>Prescription Drugs</a>
              <a href="#medicines" style={{ padding: "0.6rem 1rem", textDecoration: "none", color: "var(--text)", fontSize: "0.9rem" }}>Healthcare Essentials</a>
            </div>
          )}
        </div>

        {/* Medical Test Dropdown */}
        <div 
          onMouseEnter={() => setActiveDropdown("test")} 
          onMouseLeave={() => setActiveDropdown(null)}
          style={{ position: "relative", cursor: "pointer" }}
        >
          <span style={{ fontWeight: 600, color: "var(--text)" }}>Medical Test ▾</span>
          {activeDropdown === "test" && (
            <div style={{
              position: "absolute",
              top: "100%",
              left: 0,
              background: "var(--card-bg)",
              boxShadow: "0 8px 20px var(--card-shadow)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "0.5rem 0",
              minWidth: "160px",
              display: "flex",
              flexDirection: "column"
            }}>
              <span style={{ padding: "0.6rem 1rem", fontSize: "0.9rem" }}>Blood Test</span>
              <span style={{ padding: "0.6rem 1rem", fontSize: "0.9rem" }}>X-Ray & MRI</span>
              <span style={{ padding: "0.6rem 1rem", fontSize: "0.9rem" }}>Full Body Checkup</span>
            </div>
          )}
        </div>

        {/* Doctors Dropdown */}
        <div 
          onMouseEnter={() => setActiveDropdown("doctors")} 
          onMouseLeave={() => setActiveDropdown(null)}
          style={{ position: "relative", cursor: "pointer" }}
        >
          <span style={{ fontWeight: 600, color: "var(--text)" }}>Doctors ▾</span>
          {activeDropdown === "doctors" && (
            <div style={{
              position: "absolute",
              top: "100%",
              left: 0,
              background: "var(--card-bg)",
              boxShadow: "0 8px 20px var(--card-shadow)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "0.5rem 0",
              minWidth: "160px",
              display: "flex",
              flexDirection: "column"
            }}>
              <span style={{ padding: "0.6rem 1rem", fontSize: "0.9rem" }}>Cardiology</span>
              <span style={{ padding: "0.6rem 1rem", fontSize: "0.9rem" }}>Neurology</span>
              <span style={{ padding: "0.6rem 1rem", fontSize: "0.9rem" }}>Orthopedics</span>
            </div>
          )}
        </div>

        <a 
          href="#footer"
          style={{ textDecoration: "none", fontWeight: 600, color: "var(--text)" }}
        >
          Contact
        </a>
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <button 
          onClick={toggleTheme} 
          style={{ background: "transparent", border: "1px solid var(--border)", padding: "0.4rem 0.8rem", color: "var(--text)" }}
        >
          {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>

        {user ? (
          <div style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
            <span style={{ fontSize: "0.9rem" }}>Hi, {user.name || user.email}</span>
            <button onClick={logoutUser} style={{ background: "none", border: "1px solid var(--border)", color: "var(--text)", padding: "0.4rem 0.8rem" }}>
              Logout
            </button>
          </div>
        ) : (
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button 
              onClick={() => onOpenAuth("login")} 
              style={{ background: "transparent", border: "1px solid var(--primary)", color: "var(--primary)", padding: "0.4rem 0.8rem" }}
            >
              Login
            </button>
            <button 
              onClick={() => onOpenAuth("signup")} 
              className="primary-btn" 
              style={{ padding: "0.4rem 0.8rem" }}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;