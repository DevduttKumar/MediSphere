import { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { AuthContext } from "./AuthContext";
import Logo from "./Logo";

// ==========================================
// Navbar Component
// Top navigation bar with dropdowns, expandable search,
// theme toggle, and unified authentication.
// ==========================================
const Navbar = ({ onOpenAuth }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logoutUser } = useContext(AuthContext);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);
  const navigate = useNavigate();

  // Focus input automatically when search is expanded
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Collapse search when clicking outside if query is empty
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target) &&
        !searchQuery
      ) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchQuery]);

  // Submit search query and navigate to hospital directory
  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/hospital?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav
      style={{
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
      }}
    >
      {/* Brand Logo */}
      <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <Logo size="36px" />
      </div>

      {/* Primary Navigation Links */}
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <span
          onClick={() => navigate("/hospital")}
          style={{ cursor: "pointer", fontWeight: 600, color: "var(--text)" }}
        >
          Hospitals
        </span>

        <span
          onClick={() => navigate("/pharmacy")}
          style={{ cursor: "pointer", fontWeight: 600, color: "var(--text)" }}
        >
          Pharmacy
        </span>

        <a
          href="/#doctors"
          style={{ textDecoration: "none", fontWeight: 600, color: "var(--text)" }}
        >
          Doctors
        </a>

        <a
          href="/#services"
          style={{ textDecoration: "none", fontWeight: 600, color: "var(--text)" }}
        >
          Services
        </a>

        <a
          href="#footer"
          style={{ textDecoration: "none", fontWeight: 600, color: "var(--text)" }}
        >
          Contact Us
        </a>
      </div>

      {/* Right Controls: Search, Theme, Auth */}
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
        {/* Expandable Search Bar */}
        <div
          ref={searchContainerRef}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            background: searchOpen ? "var(--card-bg)" : "transparent",
            border: "1px solid var(--border)",
            borderRadius: "30px",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            padding: searchOpen ? "0.25rem 0.6rem 0.25rem 0.8rem" : "0",
            width: searchOpen ? "220px" : "38px",
            height: "38px",
            boxShadow: searchOpen ? "0 2px 8px var(--card-shadow)" : "none",
            overflow: "hidden"
          }}
        >
          <form
            onSubmit={handleSearchSubmit}
            style={{ display: "flex", alignItems: "center", width: "100%", height: "100%" }}
          >
            <button
              type="button"
              onClick={() => {
                if (!searchOpen) {
                  setSearchOpen(true);
                } else if (searchQuery.trim()) {
                  handleSearchSubmit();
                } else {
                  setSearchOpen(false);
                }
              }}
              title="Search"
              aria-label="Search"
              style={{
                background: "transparent",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text)",
                cursor: "pointer",
                padding: 0,
                width: "36px",
                height: "36px",
                flexShrink: 0
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {searchOpen && (
              <>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search hospitals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setSearchOpen(false);
                  }}
                  style={{
                    flex: 1,
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    color: "var(--text)",
                    fontSize: "0.85rem",
                    padding: "0 0.4rem",
                    minWidth: 0
                  }}
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    title="Clear"
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--text)",
                      opacity: 0.6,
                      fontSize: "0.85rem",
                      cursor: "pointer",
                      padding: "0 0.2rem",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    ✕
                  </button>
                )}
              </>
            )}
          </form>
        </div>

        {/* Theme Toggle Button (Icon only) */}
        <button
          onClick={toggleTheme}
          title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          aria-label="Toggle theme"
          style={{
            background: "transparent",
            border: "1px solid var(--border)",
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.05rem",
            color: "var(--text)",
            cursor: "pointer",
            flexShrink: 0,
            padding: 0
          }}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        {/* User Auth Controls */}
        {user ? (
          <div style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
            <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>Hi, {user.name || user.email}</span>
            <button
              onClick={logoutUser}
              style={{
                background: "transparent",
                border: "1px solid var(--border)",
                color: "var(--text)",
                padding: "0.4rem 0.8rem",
                borderRadius: "8px"
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => onOpenAuth("login")}
            className="primary-btn"
            style={{ padding: "0.45rem 1.1rem", borderRadius: "8px", fontSize: "0.9rem", fontWeight: 600 }}
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;