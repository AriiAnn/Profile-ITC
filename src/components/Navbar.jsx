import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navItems = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/tentang" },
    { name: "Visi & Misi", path: "/visi-misi" },
    { name: "Pengurus", path: "/pengurus" },
    {
      name: "Program",
      dropdown: [
        { name: "Program 1 Tahun", path: "/program/1tahun" },
        { name: "Pelatihan Digital", path: "/program/digital" },
        { name: "Kursus Komputer Dasar", path: "/program/dasar" },
        { name: "Program Profesional", path: "/program/profesional" },
      ],
    },
    { name: "Hubungi Kami", path: "/kontak" },
  ];

  const closeCollapse = () => {
    const el = document.getElementById("mainNav");
    try {
      const inst = window.bootstrap?.Collapse.getInstance(el);
      inst?.hide?.();
    } catch {}
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm"
      style={{ backgroundColor: "#047857" }}
    >
      <div className="container">
        {/* Brand -> pakai NavLink agar SPA */}
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center gap-2"
          title="Intermedia Training Center"
          onClick={closeCollapse}
        >
          <img
            src={logo}
            alt="Logo Intermedia Jaya Utama"
            width="42"
            height="42"
            className="rounded-circle border border-light"
          />
          <span className="fw-bold text-uppercase" style={{ letterSpacing: "1px" }}>
            INTERMEDIA TRAINING CENTER
          </span>
        </NavLink>

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

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) =>
              item.dropdown ? (
                <li className="nav-item dropdown" key={item.name}>
                  <a
                    href="#"
                    className="nav-link dropdown-toggle fw-semibold px-3 d-flex align-items-center gap-1"
                    id="programDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {item.name}
                    <span className="dropdown-caret" aria-hidden="true"></span>
                  </a>
                  <ul
                    className="dropdown-menu border-0 shadow-sm dropdown-animate"
                    aria-labelledby="programDropdown"
                  >
                    {item.dropdown.map((sub) => (
                      <li key={sub.path}>
                        <NavLink
                          to={sub.path}
                          className="dropdown-item"
                          end
                          onClick={closeCollapse}
                        >
                          {sub.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nav-item" key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      "nav-link px-3 fw-semibold" + (isActive ? " active-nav" : " hover-nav")
                    }
                    end
                    onClick={closeCollapse}
                  >
                    {item.name}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
