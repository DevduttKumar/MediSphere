// ==========================================
// MediSphere Logo Component
// SVG brand icon with custom orbital gradients
// ==========================================
const Logo = ({ size = "36px", showText = true }) => {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.7rem", cursor: "pointer" }}>
      {/* 3D Orbital Healthcare Icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="msSphereGrad" x1="15%" y1="15%" x2="85%" y2="85%">
            <stop offset="0%" stopColor="#00d2ff" />
            <stop offset="55%" stopColor="#0072ff" />
            <stop offset="100%" stopColor="#0047cc" />
          </linearGradient>
          <linearGradient id="msOrbitGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0056b3" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00d2ff" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>

        {/* Back Orbital Arc */}
        <path
          d="M 10 32 C 6 25, 12 14, 26 10 C 37 7, 43 13, 42 20"
          stroke="url(#msOrbitGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />

        {/* Central Luminous Sphere */}
        <circle cx="24" cy="24" r="16" fill="url(#msSphereGrad)" />

        {/* Medical Cross */}
        <path
          d="M 21.5 15 H 26.5 V 21.5 H 33 V 26.5 H 26.5 V 33 H 21.5 V 26.5 H 15 V 21.5 H 21.5 Z"
          fill="#ffffff"
        />

        {/* Vital Pulse Rhythm */}
        <path
          d="M 13 24 H 19 L 22 17 L 26 31 L 29 23 L 31 25 H 35"
          stroke="#0072ff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Front Orbital Arc */}
        <path
          d="M 42 22 C 44 28, 38 38, 23 40 C 12 41, 6 36, 7 30"
          stroke="url(#msOrbitGrad)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Orbital Health Node */}
        <circle cx="39" cy="15" r="2.5" fill="#00d2ff" />
      </svg>

      {/* Brand Typography */}
      {showText && (
        <span
          style={{
            fontSize: "1.35rem",
            fontWeight: "800",
            letterSpacing: "-0.5px",
            color: "var(--primary)",
            display: "flex",
            alignItems: "center"
          }}
        >
          Medi<span style={{ color: "var(--text)", fontWeight: "600" }}>Sphere</span>
        </span>
      )}
    </div>
  );
};

export default Logo;