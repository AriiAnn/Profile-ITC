// src/components/Navbar.jsx
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { pathname } = useLocation();

  // ==== ACTIVE FLAGS TERPISAH ====
  const isProgramActive = pathname.startsWith("/program");
  const isTentangActive = [
    "/tentang",
    "/visi-misi",
    "/pengurus",
    "/galeri",
    "/testimoni",
  ].some((p) => pathname.startsWith(p));

  const closeCollapse = () => {
    const el = document.getElementById("mainNav");
    try { window.bootstrap?.Collapse.getInstance(el)?.hide?.(); } catch {}
    // Tutup dropdown yang sedang terbuka (kalau ada)
    try {
      document.querySelectorAll(".dropdown-menu.show").forEach((dm) => {
        const toggler = dm.closest(".dropdown")?.querySelector("[data-bs-toggle='dropdown']");
        const inst = window.bootstrap?.Dropdown.getInstance(toggler);
        inst?.hide?.();
      });
    } catch {}
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm"
        style={{ backgroundColor: "#0284C7" }}
      >
        <div className="container">
          {/* Brand */}
          <NavLink
            to="/"
            className="navbar-brand d-flex align-items-center gap-2 me-2"
            title="Intermedia Training Center"
            onClick={closeCollapse}
          >
            <img
              src={logo}
              alt="Logo Intermedia Jaya Utama"
              width="42"
              height="42"
              className="rounded-circle border border-light flex-shrink-0"
            />
            <span
              className="brand-full fw-bold text-uppercase d-none d-sm-inline"
              style={{ letterSpacing: "1px" }}
            >
              INTERMEDIA TRAINING CENTER
            </span>
            <span className="brand-short fw-bold text-uppercase d-inline d-sm-none">
              ITC
            </span>
          </NavLink>

          {/* Toggler */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" end className="nav-link px-3 fw-semibold hover-nav" onClick={closeCollapse}>
                  Beranda
                </NavLink>
              </li>

              {/* ====== TENTANG KAMI (ID & ACTIVE TERPISAH) ====== */}
              <li className="nav-item dropdown nav-hasmenu">
                <button
                  className={
                    "nav-link btn w-100 text-start px-3 fw-semibold dropdown-toggle nav-menu-toggle" +
                    (isTentangActive ? " active-nav" : " hover-nav")
                  }
                  type="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  data-bs-display="static"
                  aria-expanded="false"
                  aria-haspopup="true"
                  aria-controls="tentangMenu"
                >
                  Tentang Kami
                </button>

                <ul id="tentangMenu" className="dropdown-menu border-0 shadow-sm rounded-3 menu-fly">
                  <li>
                    <NavLink to="/tentang" className="dropdown-item py-2 fw-semibold" onClick={closeCollapse}>
                      Tentang Kami
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/visi-misi" className="dropdown-item py-2 fw-semibold" onClick={closeCollapse}>
                      Visi & Misi
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/pengurus" className="dropdown-item py-2 fw-semibold" onClick={closeCollapse}>
                      Pengurus
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/galeri" className="dropdown-item py-2 fw-semibold" onClick={closeCollapse}>
                      Galeri
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/testimoni" className="dropdown-item py-2 fw-semibold" onClick={closeCollapse}>
                      Testimoni
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* ====== PROGRAM (ID & ACTIVE TERPISAH) ====== */}
              <li className="nav-item dropdown nav-hasmenu">
                <button
                  className={
                    "nav-link btn w-100 text-start px-3 fw-semibold dropdown-toggle nav-menu-toggle" +
                    (isProgramActive ? " active-nav" : " hover-nav")
                  }
                  type="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  data-bs-display="static"
                  aria-expanded="false"
                  aria-haspopup="true"
                  aria-controls="programMenu"
                >
                  Program
                </button>

                <ul id="programMenu" className="dropdown-menu border-0 shadow-sm rounded-3 menu-fly">
                  <li>
                    <NavLink to="/program" className="dropdown-item py-2 fw-semibold" onClick={closeCollapse}>
                      Program
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/program/reguler" className="dropdown-item py-2 fw-semibold" onClick={closeCollapse}>
                      Program Reguler
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/program/profesional" className="dropdown-item py-2 fw-semibold" onClick={closeCollapse}>
                      Program Profesi
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink to="/kontak" className="nav-link px-3 fw-semibold hover-nav" onClick={closeCollapse}>
                  Hubungi Kami
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* STYLE */}
      <style>{`
/* ================== THEME COLORS ================== */
:root{
  --itc-primary: #0284C7;
  --itc-primary-700: #0369A1;
  --itc-primary-800: #075985;
  --itc-soft: #E0F2FE;
}

/* ----- GLOBAL FIX untuk navbar fixed-top ----- */
body { padding-top: 76px; }
@media (max-width: 991.98px) { body { padding-top: 68px; } }
.navbar { z-index: 1040; }

/* ----- CHIP aktif/hover (gaya "pill") ----- */
.navbar .nav-link.hover-nav:hover,
.nav-menu-toggle:hover{
  background-color: rgba(2,132,199,.25);
  border-radius: .5rem;
  color: #fff !important;
}
.navbar .active-nav{
  background-color: rgba(2,132,199,.35);
  border-radius: .5rem;
  color:#fff !important;
}

/* ----- Dropdown item: nuansa biru ----- */
.dropdown-item:hover,
.dropdown-item:focus,
.dropdown-item.active,
.dropdown-item:active{
  background-color: rgba(2,132,199,.18);
  color: var(--itc-primary-800) !important;
}

/* ===== DESKTOP (≥992px): dropdown tepat di bawah nav ===== */
@media (min-width: 992px){
  .nav-hasmenu{ position: relative; }
  .menu-fly{
    position: absolute;
    top: 100%;
    left: 0;
    right: auto;
    margin-top: 0;
    min-width: 220px;
    display: block;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-6px);
    transition: all .18s ease;
  }
  .nav-hasmenu:hover > .menu-fly,
  .nav-hasmenu:focus-within > .menu-fly{
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

/* ===== MOBILE (<992px): dropdown TURUN + warna tema ===== */
@media (max-width: 991.98px){
  .menu-fly{
    position: static !important;
    display: none;
    background: var(--itc-primary-700);
    border-radius: .5rem;
    overflow: hidden;
    box-shadow: none;
    margin: .25rem 0 0;
    padding: .25rem 0;
  }
  .dropdown-menu.show{ display:block; }

  .menu-fly .dropdown-item{ color:#E6F6FF; }
  .menu-fly .dropdown-item + .dropdown-item{
    border-top: 1px solid rgba(255,255,255,.08);
  }

  /* klik area lebih nyaman */
  .navbar .nav-link,
  .nav-menu-toggle{ padding: .8rem .9rem; }
}

/* Cegah brand membungkus & tabrakan di mobile */
.navbar-brand { min-width: 0; }
.brand-full { white-space: nowrap; }
.brand-short { white-space: nowrap; }

/* Tinggi navbar stabil */
.navbar { min-height: 56px; }

/* Perbaikan klik-area toggler */
.navbar-toggler { padding: .45rem .6rem; }
`}</style>
    </>
  );
}
