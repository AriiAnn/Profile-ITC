import React from "react";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";

// ===== Layout Global =====
import Navbar from "./components/Navbar";
import NavbarBanner from "./components/NavbarBanner";
import Footer from "./components/Footer";

// ===== Halaman =====
import Dashboard from "./pages/Dashboard";
import Tentang from "./pages/Tentang";
import VisiMisi from "./pages/VisiMisi";
import Kontak from "./pages/Kontak";
import Pengurus from "./pages/Pengurus";
import ProgramReguler from "./pages/ProgramReguler";
import ProgramProfesional from "./pages/ProgramProfesional";
import ProgramIndex from "./pages/ProgramIndex";
import Galeri from "./pages/Galeri";

// ===== Scroll to Top saat route berubah =====
function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  React.useEffect(() => {
    // Jika ada anchor #section, biarkan browser yang handle
    if (hash) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, search, hash]);

  return null;
}

// ===== Layout Wrapper =====
function Layout() {
  return (
    <>
      <Navbar />
      <NavbarBanner />
      <Outlet />
      <Footer />
    </>
  );
}

// ===== App =====
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/visi-misi" element={<VisiMisi />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/pengurus" element={<Pengurus />} />
          <Route path="/program/reguler" element={<ProgramReguler />} />
          <Route path="/program/profesional" element={<ProgramProfesional />} />
          <Route path="/program" element={<ProgramIndex />} />
          <Route path="/galeri" element={<Galeri />} />

          {/* Redirect unknown route ke Beranda */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}
