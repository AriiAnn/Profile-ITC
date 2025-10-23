import React, { useState } from "react";

export default function NavbarBanner() {
  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <div
      className="w-100 position-sticky"
      style={{
        top: "64px",          // tinggi navbar bootstrap default
        zIndex: 1029,         // di atas konten biasa
        backgroundColor: "#e6f4ef",
        borderBottom: "3px solid #047857",
      }}
    >
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{
          gap: ".75rem",
          minHeight: "44px",
          padding: ".5rem 0",
          lineHeight: 1.6,
        }}
      >
        <span className="small text-dark text-center">
          Selamat datang di{" "}
          <strong style={{ color: "#065f46" }}>
            Intermedia Training Center (ITC)
          </strong>{" "}
          — program profesi komputer 1 tahun & pelatihan digital profesional.
        </span>

        {/* CTA kecil opsional */}
        <a
          href="/program"
          className="btn btn-sm text-white"
          style={{ backgroundColor: "#047857", border: "none" }}
        >
          Lihat Program
        </a>

        {/* Tombol close */}
        <button
          type="button"
          className="btn-close ms-2"
          aria-label="Tutup pengumuman"
          onClick={() => setShow(false)}
          style={{ filter: "invert(40%)", transform: "scale(.9)" }}
        />
      </div>
    </div>
  );
}
