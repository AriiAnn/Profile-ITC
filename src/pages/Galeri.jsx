// src/pages/Galeri.jsx
import React, { useState } from "react";

// ganti sesuai aset asli kamu
import g1 from "../assets/galeri1.jpeg";
import g2 from "../assets/galeri2.jpeg";
import g3 from "../assets/galeri3.jpeg";
import g4 from "../assets/galeri3.jpeg";
import g5 from "../assets/galeri3.jpeg";
import g6 from "../assets/galeri3.jpeg";

/**
 * Satu judul bisa punya beberapa foto
 */
const DATA = [
  {
    title: "Outbond",
    desc: "Kegiatan outbond rutin setiap 3 bulan sekali untuk mempererat kebersamaan dan teamwork peserta ITC.",
    photos: [g1, g2, g3],
  },
  {
    title: "Seminar Rutin",
    desc: "Seminar bersama tokoh usaha atau motivator untuk menumbuhkan semangat dan wawasan kewirausahaan peserta.",
    photos: [g2],
  },
  {
    title: "Program Jumat Berkah",
    desc: "Kegiatan berbagi nasi dan minuman setiap Jumat sebagai bentuk kepedulian sosial terhadap masyarakat sekitar.",
    photos: [g3, g4],
  },
  {
    title: "Wisuda Peserta ITC",
    desc: "Momen sakral kelulusan peserta setelah menyelesaikan program pelatihan dan uji kompetensi.",
    photos: [g4, g5, g6],
  },
  {
    title: "Berbagi Bukaan Puasa",
    desc: "Program berbagi takjil dan bukaan puasa di bulan Ramadan untuk mempererat kebersamaan antar sesama.",
    photos: [g5, g2],
  },
  {
    title: "Peduli Masjid & Mushalla Pedalaman",
    desc: "Program sosial membantu penyediaan sarana ibadah bagi masjid dan mushalla di daerah pedalaman.",
    photos: [g6, g1, g2],
  },
];

export default function Galeri() {
  // viewer: { group: index DATA, photo: index foto } atau null
  const [viewer, setViewer] = useState(null);

  const closeViewer = () => setViewer(null);

  const showPrev = () => {
    if (!viewer) return;
    const group = DATA[viewer.group];
    const total = group.photos.length;
    setViewer((prev) => ({
      ...prev,
      photo: (prev.photo - 1 + total) % total,
    }));
  };

  const showNext = () => {
    if (!viewer) return;
    const group = DATA[viewer.group];
    const total = group.photos.length;
    setViewer((prev) => ({
      ...prev,
      photo: (prev.photo + 1) % total,
    }));
  };

  return (
    <main>
      {/* HERO */}
      <section className="py-5" style={{ backgroundColor: "#E0F2FE" }}>
        <div className="container text-center">
          <h1 className="h2 fw-bold mb-2">Galeri Kegiatan ITC</h1>
          <p
            className="text-secondary mb-0"
            style={{ maxWidth: 800, margin: "0 auto" }}
          >
            Dokumentasi kegiatan inti Intermedia Training Center (ITC) yang
            mencerminkan nilai kebersamaan, sosial, dan prestasi peserta.
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
                  className="card border-0 shadow-sm gallery-item h-100"
                  role="button"
                  onClick={() => setViewer({ group: i, photo: 0 })}
                >
                  {/* THUMB FOTO TANPA OVERLAY */}
                  <div className="gallery-thumb">
                    <img
                      src={it.photos[0]}
                      alt={it.title}
                      className="gallery-img"
                    />
                    {it.photos.length > 1 && (
                      <span className="badge-foto-small">
                        {it.photos.length} foto
                      </span>
                    )}
                  </div>

                  <div className="card-body">
                    <h5 className="fw-bold text-itc mb-2">{it.title}</h5>
                    <p className="text-muted mb-0">{it.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL VIEWER */}
      {viewer !== null && viewer.group >= 0 && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,.6)" }}
          onClick={closeViewer}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content border-0 rounded-4 overflow-hidden">
              <div className="position-relative">
                <img
                  src={DATA[viewer.group].photos[viewer.photo]}
                  alt={DATA[viewer.group].title}
                  className="w-100"
                  style={{ maxHeight: "75vh", objectFit: "cover" }}
                />
                {DATA[viewer.group].photos.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="btn viewer-nav viewer-prev"
                      onClick={showPrev}
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      className="btn viewer-nav viewer-next"
                      onClick={showNext}
                    >
                      ›
                    </button>
                    <span className="viewer-indicator">
                      {viewer.photo + 1} / {DATA[viewer.group].photos.length}
                    </span>
                  </>
                )}
              </div>

              <div className="p-3 bg-white">
                <h5 className="fw-bold text-itc mb-1">
                  {DATA[viewer.group].title}
                </h5>
                <p className="small text-muted mb-3">
                  {DATA[viewer.group].desc}
                </p>

                {DATA[viewer.group].photos.length > 1 && (
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    {DATA[viewer.group].photos.map((p, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={
                          "thumb-btn" +
                          (idx === viewer.photo ? " thumb-btn-active" : "")
                        }
                        onClick={() =>
                          setViewer((prev) => ({ ...prev, photo: idx }))
                        }
                      >
                        <img src={p} alt={`thumb-${idx}`} />
                      </button>
                    ))}
                  </div>
                )}

                <button
                  className="btn btn-outline-itc"
                  onClick={closeViewer}
                >
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

        .gallery-item {
          border-radius: 1rem;
          overflow: hidden;
          transition: transform .25s, box-shadow .25s;
        }
        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.75rem 1.5rem rgba(0,0,0,0.12);
        }

        /* Container gambar tanpa .ratio, tidak ada overlay */
        .gallery-thumb{
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 1rem 1rem 0 0;
          overflow: hidden;
          background:#f3f4f6;
        }
        .gallery-img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          display:block;
          transition: transform .35s ease;
        }
        .gallery-item:hover .gallery-img{
          transform: scale(1.03);
        }

        /* Info jumlah foto kecil di pojok kiri atas */
        .badge-foto-small{
          position:absolute;
          left: 10px;
          top: 8px;
          font-size: .7rem;
          color: #ffffff;
          text-shadow: 0 1px 3px rgba(0,0,0,.9);
          font-weight: 600;
        }

        /* Navigasi modal */
        .viewer-nav{
          position:absolute;
          top:50%;
          transform:translateY(-50%);
          background:rgba(0,0,0,.5);
          color:#fff;
          border:none;
          width:40px;
          height:40px;
          border-radius:999px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:1.4rem;
        }
        .viewer-prev{ left:12px; }
        .viewer-next{ right:12px; }
        .viewer-nav:hover{ background:rgba(0,0,0,.7); }

        .viewer-indicator{
          position:absolute;
          right:12px;
          top:12px;
          background:rgba(0,0,0,.6);
          color:#fff;
          padding:.15rem .5rem;
          border-radius:999px;
          font-size:.75rem;
        }

        .thumb-btn{
          border:none;
          padding:0;
          background:transparent;
          border-radius:.5rem;
          overflow:hidden;
          width:60px;
          height:40px;
          opacity:.7;
          outline:none;
        }
        .thumb-btn img{
          width:100%;
          height:100%;
          object-fit:cover;
        }
        .thumb-btn-active{
          opacity:1;
          box-shadow:0 0 0 2px var(--itc-primary);
        }
      `}</style>
    </main>
  );
}
