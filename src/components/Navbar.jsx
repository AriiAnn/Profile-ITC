// src/components/Navbar.jsx
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { pathname } = useLocation();
  const isProgramActive = pathname.startsWith("/program");

  const closeCollapse = () => {
    const el = document.getElementById("mainNav");
    try { window.bootstrap?.Collapse.getInstance(el)?.hide?.(); } catch {}
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
        style={{ backgroundColor: "#0284C7" }} // PRIMARY BLUE
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
            {/* Versi panjang (tampil ≥576px) */}
            <span
              className="brand-full fw-bold text-uppercase d-none d-sm-inline"
              style={{ letterSpacing: "1px" }}
            >
              INTERMEDIA TRAINING CENTER
            </span>
            {/* Versi pendek (tampil <576px) */}
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

              <li className="nav-item dropdown nav-program">
                <button
                  className={
                    "nav-link btn w-100 text-start px-3 fw-semibold dropdown-toggle nav-program-toggle" +
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
                  Tentang Kami
                </button>

                <ul id="programMenu" className="dropdown-menu border-0 shadow-sm rounded-3 program-menu">
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

           

              {/* PROGRAM */}
              <li className="nav-item dropdown nav-program">
                <button
                  className={
                    "nav-link btn w-100 text-start px-3 fw-semibold dropdown-toggle nav-program-toggle" +
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

                <ul id="programMenu" className="dropdown-menu border-0 shadow-sm rounded-3 program-menu">
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
  --itc-primary: #0284C7;  /* sky blue dark (match footer) */
  --itc-primary-700: #0369A1;
  --itc-primary-800: #075985;
  --itc-soft: #E0F2FE;     /* light sky (match footer bg) */
}

/* ----- GLOBAL FIX untuk navbar fixed-top ----- */
body { padding-top: 76px; }
@media (max-width: 991.98px) { body { padding-top: 68px; } }
.navbar { z-index: 1040; }

/* ----- CHIP aktif/hover (gaya "pill") ----- */
.navbar .nav-link.hover-nav:hover,
.nav-program-toggle:hover{
  background-color: rgba(2,132,199,.25);   /* was green -> blue */
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
  color: var(--itc-primary-800) !important; /* teks biru gelap agar kontras */
}

/* ===== DESKTOP (≥992px): dropdown di BAWAH teks Program ===== */
@media (min-width: 992px){
  .nav-program{ position: relative; }
  .program-menu{
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
  .nav-program:hover > .program-menu,
  .nav-program:focus-within > .program-menu{
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

/* ===== MOBILE (<992px): dropdown TURUN + warna tema ===== */
@media (max-width: 991.98px){
  .program-menu{
    position: static !important;
    display: none;
    background: var(--itc-primary-700);   /* was green -> blue */
    border-radius: .5rem;
    overflow: hidden;
    box-shadow: none;
    margin: .25rem 0 0;
    padding: .25rem 0;
  }
  .dropdown-menu.show{ display:block; }

  .program-menu .dropdown-item{ color:#E6F6FF; } /* teks terang */
  .program-menu .dropdown-item + .dropdown-item{
    border-top: 1px solid rgba(255,255,255,.08);
  }

  /* klik area lebih nyaman */
  .navbar .nav-link,
  .nav-program-toggle{ padding: .8rem .9rem; }
}

/* ----- Banner promosi (kalau dipakai) match tema ----- */
.promo-banner-fixed{
  position: fixed;
  top: var(--nav-h, 64px);
  left: 0; right: 0;
  z-index: 1039;
  background-color: var(--itc-soft);             /* #E0F2FE */
  border-bottom: 3px solid var(--itc-primary);   /* #0284C7 */
  margin: 0; padding: 0;
}

/* Cegah brand membungkus & tabrakan di mobile */
.navbar-brand { min-width: 0; }
.brand-full { white-space: nowrap; }
.brand-short { white-space: nowrap; }

/* Tinggi navbar stabil */
.navbar { min-height: 56px; }

/* Sedikit perbaikan klik-area toggler biar lebih enak */
.navbar-toggler { padding: .45rem .6rem; }
`}</style>
    </>
  );
}
