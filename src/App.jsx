import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

// Layout global
import Navbar from "./components/Navbar";
import NavbarBanner from "./components/NavbarBanner";
import Footer from "./components/Footer";

// Halaman
import Dashboard from "./pages/Dashboard";
import Tentang from "./pages/Tentang"; 
import VisiMisi from "./pages/VisiMisi";    
import Kontak from "./pages/Kontak";
import Pengurus from "./pages/Pengurus";   // pastikan versi "content-only" (tanpa Navbar/Footer)



// Scroll to top saat route berubah
function ScrollToTop() {
  React.useEffect(() => {
    const unlisten = () => window.scrollTo({ top: 0, behavior: "smooth" });
    // dengarkan setiap perubahan pushState/popstate
    window.addEventListener("popstate", unlisten);
    return () => window.removeEventListener("popstate", unlisten);
  }, []);
  return null;
}

// Layout wrapper
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
       
          {/* <Route path="/program" element={<Program />} /> */}
         
          <Route path="/pengurus" element={<Pengurus />} />
         
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}
