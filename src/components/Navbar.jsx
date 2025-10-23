import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navItems = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/tentang" },
    { name: "Visi & Misi", path: "/visi-misi" },
    { name: "Pengurus", path: "/pengurus" },
    { name: "Program", path: "/program" },
    { name: "Hubungi Kami", path: "/kontak" },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm"
      style={{ backgroundColor: "#047857" }}
    >
      <div className="container">
        {/* Brand */}
        <a
          href="/"
          className="navbar-brand d-flex align-items-center gap-2"
          title="Intermedia Training Center"
        >
          <img
            src={logo}
            alt="Logo Intermedia Jaya Utama"
            width="42"
            height="42"
            className="rounded-circle border border-light"
          />
          <span
            className="fw-bold text-uppercase"
            style={{ letterSpacing: "1px" }}
          >
            INTERMEDIA TRAINING CENTER
          </span>
        </a>

        {/* Toggler mobile */}
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
            {navItems.map((item) => (
              <li className="nav-item" key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    "nav-link px-3 fw-semibold" +
                    (isActive ? " active-nav" : " hover-nav")
                  }
                  end
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
