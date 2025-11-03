// src/pages/Galeri.jsx
import React, { useState } from "react";

// ganti sesuai aset asli kamu
import g1 from "../assets/galeri1.jpeg";
import g2 from "../assets/galeri2.jpeg";
import g3 from "../assets/galeri3.jpeg";
import g4 from "../assets/galeri3.jpeg";
import g5 from "../assets/galeri3.jpeg";
import g6 from "../assets/galeri3.jpeg";

const DATA = [
  {
    src: g1,
    title: "Outbond",
    desc: "Kegiatan outbond rutin setiap 3 bulan sekali untuk mempererat kebersamaan dan teamwork peserta ITC.",
  },
  {
    src: g2,
    title: "Seminar Rutin",
    desc: "Seminar bersama tokoh usaha atau motivator untuk menumbuhkan semangat dan wawasan kewirausahaan peserta.",
  },
  {
    src: g3,
    title: "Program Jumat Berkah",
    desc: "Kegiatan berbagi nasi dan minuman setiap Jumat sebagai bentuk kepedulian sosial terhadap masyarakat sekitar.",
  },
  {
    src: g4,
    title: "Wisuda Peserta ITC",
    desc: "Momen sakral kelulusan peserta setelah menyelesaikan program pelatihan dan uji kompetensi.",
  },
  {
    src: g5,
    title: "Berbagi Bukaan Puasa",
    desc: "Program berbagi takjil dan bukaan puasa di bulan Ramadan untuk mempererat kebersamaan antar sesama.",
  },
  {
    src: g6,
    title: "Peduli Masjid & Mushalla Pedalaman",
    desc: "Program sosial membantu penyediaan sarana ibadah bagi masjid dan mushalla di daerah pedalaman.",
  },
];

export default function Galeri() {
  const [viewer, setViewer] = useState(null);

  return (
    <main>
      {/* HERO */}
      <section className="py-5" style={{ backgroundColor: "#E0F2FE" }}>
        <div className="container text-center">
          <h1 className="h2 fw-bold mb-2">Galeri Kegiatan ITC</h1>
          <p className="text-secondary mb-0" style={{ maxWidth: 800, margin: "0 auto" }}>
            Dokumentasi kegiatan inti Intermedia Training Center (ITC) yang mencerminkan nilai kebersamaan, sosial, dan prestasi peserta.
          </p>
        </div>
      </section>

      {/* GALERI */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {DATA.map((it, i) => (
              <div key={i} className="col-12 col-md-6">
                <div
                  className="card border-0 shadow-sm overflow-hidden gallery-item h-100"
                  role="button"
                  onClick={() => setViewer(i)}
                >
                  <div className="ratio ratio-16x9">
                    <img
                      src={it.src}
                      alt={it.title}
                      className="w-100 h-100 object-fit-cover"
                      style={{ filter: "brightness(0.95)", transition: ".3s" }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="fw-bold text-itc mb-2">{it.title}</h5>
                    <p className="text-muted mb-0">{it.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          {/* <div className="text-center mt-5">
            <a href="/program" className="btn btn-itc text-white me-2">Lihat Program</a>
            <a href="/kontak" className="btn btn-outline-itc">Daftar / Konsultasi</a>
          </div> */}
        </div>
      </section>

      {/* MODAL VIEWER */}
      {viewer !== null && viewer >= 0 && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,.6)" }}
          onClick={() => setViewer(null)}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content border-0 rounded-4 overflow-hidden">
              <img
                src={DATA[viewer].src}
                alt={DATA[viewer].title}
                className="w-100"
                style={{ maxHeight: "75vh", objectFit: "cover" }}
              />
              <div className="p-3 bg-white">
                <h5 className="fw-bold text-itc mb-1">{DATA[viewer].title}</h5>
                <p className="small text-muted mb-3">{DATA[viewer].desc}</p>
                <button className="btn btn-outline-itc" onClick={() => setViewer(null)}>
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STYLE */}
      <style>{`
        :root {
          --itc-primary:#0284C7;
          --itc-primary-700:#0369A1;
          --itc-soft:#E0F2FE;
        }
        .text-itc { color: var(--itc-primary); }
        .btn-itc { background: var(--itc-primary); border-color: var(--itc-primary); }
        .btn-itc:hover { background: var(--itc-primary-700); border-color: var(--itc-primary-700); }
        .btn-outline-itc { color: var(--itc-primary); border-color: var(--itc-primary); background: transparent; }
        .btn-outline-itc:hover { color:#fff; background: var(--itc-primary); border-color: var(--itc-primary); }
        .gallery-item { border-radius: 1rem; transition: transform .25s, box-shadow .25s; }
        .gallery-item:hover { transform: translateY(-5px); box-shadow: 0 0.75rem 1.5rem rgba(0,0,0,0.12); }
      `}</style>
    </main>
  );
}
