import React, { useState } from "react";

export default function NavbarBanner() {
  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <div
      className="w-100 text-dark text-center small position-sticky"
      style={{
        top: "56px",            // tetap menempel di bawah navbar
        zIndex: 1029,
        backgroundColor: "#e6f4ef",
        padding: "0.6rem 1rem", // 💡 sedikit lebih besar dari py-2
        lineHeight: "1.6",      // teks jadi lebih enak dibaca
      }}
    >
      Selamat datang di{" "}
      <strong>Yayasan Pendidikan Intermedia Jaya Utama</strong> — program profesi komputer 1 tahun & pelatihan digital profesional.
      <button
        type="button"
        className="btn-close ms-2 align-middle"
        aria-label="Close"
        onClick={() => setShow(false)}
        style={{ transform: "scale(0.9)" }}
      />
    </div>
  );
}
