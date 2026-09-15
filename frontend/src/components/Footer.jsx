import Logo from "./Logo";

const Footer = () => {
    return (
        <footer id="footer" style={{
            backgroundColor: "var(--footer-bg)",
            color: "#ffffff",
            padding: "3rem 5% 1rem",
            marginTop: "auto"
        }}>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "2rem",
                marginBottom: "2rem"
            }}>
                <div>
                    <div style={{ marginBottom: "1rem" }}>
                        <Logo size="42px" />
                    </div>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.6", opacity: 0.9 }}>
                        We are a medical network committed to providing accessible, high-quality patient care and diagnostics.
                    </p>
                </div>

                <div>
                    <h4 style={{ marginBottom: "0.75rem" }}>Quick Links</h4>
                    <ul style={{ listStyle: "none", fontSize: "0.9rem", lineHeight: "2", opacity: 0.85 }}>
                        <li>Medical Care</li>
                        <li>Diagnostics Lab</li>
                        <li>Doctors Directory</li>
                        <li>Online Pharmacy</li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ marginBottom: "0.75rem" }}>About</h4>
                    <ul style={{ listStyle: "none", fontSize: "0.9rem", lineHeight: "2", opacity: 0.85 }}>
                        <li>Vision & Mission</li>
                        <li>Careers</li>
                        <li>Support</li>
                        <li>Privacy Policies</li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ marginBottom: "0.75rem" }}>Contact</h4>
                    <ul style={{ listStyle: "none", fontSize: "0.9rem", lineHeight: "2", opacity: 0.85 }}>
                        <li>Saket, New Delhi, India</li>
                        <li>+91 7839 36 8724</li>
                        <li>contact@medisphere.com</li>
                    </ul>
                </div>
            </div>

            <div style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.15)",
                paddingTop: "1.5rem",
                textAlign: "center",
                fontSize: "0.85rem",
                opacity: 0.75
            }}>
                &copy; 2026 MediSphere. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;