import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FaRoad, FaEnvelope, FaLink, FaTiktok, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="text-dark pt-5 mt-5" style={{ backgroundColor: "#e6f4ef" }}>
      <div className="container pb-4">
        <div className="row g-4">
          {/* ====== Kolom 1: Info Yayasan ====== */}
          <div className="col-md-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <img src={logo} alt="logo" width="45" height="45" />
              <h5 className="fw-bold mb-0" style={{ color: "#047857" }}>
                Intermedia TRAINING CENTER
              </h5>
            </div>
            <p className="small mb-1">
              <FaRoad className="me-2 text-success" />
              Jl. Padang Bulan No.13 A–C, Rantau Prapat, Labuhanbatu, Sumatera Utara
            </p>
            <p className="small mb-1">
              <BsTelephone className="me-2 text-success" /> +62 8536-2823-434
            </p>
            <p className="small mb-1">
              <FaEnvelope className="me-2 text-success" /> Intermediatcrap@gmail.com
            </p>
            <p className="small">
              <FaLink className="me-2 text-success" /> www.intermedia.ac.id
            </p>
          </div>

          {/* ====== Kolom 2: Navigasi ====== */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3" style={{ color: "#047857" }}>
              Navigasi Cepat
            </h6>
            <ul className="list-unstyled small">
              <li><a href="/" className="text-dark text-decoration-none">• Beranda</a></li>
              <li><a href="/tentang" className="text-dark text-decoration-none">• Tentang Kami</a></li>
              <li><a href="/visi-misi" className="text-dark text-decoration-none">• Visi & Misi</a></li>
              <li><a href="/pengurus" className="text-dark text-decoration-none">• Pengurus</a></li>
              <li><a href="/program" className="text-dark text-decoration-none">• Program</a></li>
              <li><a href="/kontak" className="text-dark text-decoration-none">• Hubungi Kami</a></li>
            </ul>
          </div>

          {/* ====== Kolom 3: Tentang & Sosial Media ====== */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3" style={{ color: "#047857" }}>
              Tentang Yayasan
            </h6>
            <p className="small">
              Intermedia Training Center berkomitmen dalam mencetak
              generasi unggul di bidang teknologi, profesional, dan siap kerja.
            </p>

            <div className="d-flex gap-3 mt-3">
              <a
                href="https://www.tiktok.com/@ITC.Business.School"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fs-5"
                title="TikTok"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.instagram.com/itcbusinessschool/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fs-5"
                title="Instagram"
              >
                <FaInstagram className="text-danger" />
              </a>
              <a
                href="https://facebook.com/intermediabusiness"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fs-5"
                title="Facebook"
              >
                <FaFacebook className="text-primary" />
              </a>
              <a
                href="https://youtube.com/@intermedia.tc.9738"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fs-5"
                title="YouTube"
              >
                <FaYoutube className="text-danger" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-white py-3 mt-3" style={{ backgroundColor: "#047857" }}>
        <p className="mb-0 small">
          © 2025 Intermedia Training Center — Rantau Prapat. All rights reserved.
        </p>
        <p className="mb-0 small text-white-50">
          Designed & Developed by Ariansyah
        </p>
      </div>
    </footer>
  );
}
