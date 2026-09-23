import { createContext, useEffect, useState } from "react";

// ==========================================
// Theme Context & Provider
// Manages light / dark theme & body styling
// ==========================================
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Read saved theme from localStorage or default to light
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Apply dark class to document root whenever theme changes
  useEffect(() => {
    document.documentElement.className = theme === "dark" ? "dark" : "";
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between light and dark modes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
