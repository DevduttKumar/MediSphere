import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Medicines from "./components/Medicines";
import Doctors from "./components/Doctors";
import Partners from "./components/Partners";
import Facilities from "./components/Facilities";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import AppointmentPage from "./pages/AppointmentPage";
import HospitalPage from "./pages/HospitalPage";

const HomePage = () => (
  <>
    <Banner />
    <Services />
    <Medicines />
    <Doctors />
    <Partners />
    <Facilities />
    <Testimonials />
  </>
);

const App = () => {
  const [authModal, setAuthModal] = useState(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar onOpenAuth={(type) => setAuthModal(type)} />
      
      {authModal && <AuthModal type={authModal} onClose={() => setAuthModal(null)} />}

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hospital" element={<HospitalPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;