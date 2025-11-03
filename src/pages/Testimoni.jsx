// src/pages/Testimoni.jsx
import React from "react";
import gal1 from "../assets/galeri2.jpeg";
import gal2 from "../assets/galeri1.jpeg";

const DATA_TESTIMONI = [
  {
    nama: "Dahlia Nasution",
    kerja: "CV. HSR – Padang Lawas Utara",
    img: "/assets/alumni-dahlia.png", // ganti jika kamu punya foto aslinya
    kutipan:
      "Belajar di ITC bikin saya siap kerja. Instruktur sabar, dan praktiknya langsung sesuai dunia kerja!",
  },
  {
    nama: "Rudi Hartono",
    kerja: "PT. Digital Indo",
    img: gal1,
    kutipan:
      "Program profesi ITC membantu saya punya skill teknis dan cepat diterima kerja.",
  },
  {
    nama: "Siti Amalia",
    kerja: "Studio Grafis Mandiri",
    img: gal2,
    kutipan:
      "Instruktur profesional, fasilitas lengkap, dan suasana belajarnya menyenangkan!",
  },
  {
    nama: "Ahmad Fauzan",
    kerja: "PT. Media Solusi Digital",
    img: gal1,
    kutipan:
      "Saya belajar editing video dan langsung diterima di perusahaan media, keren banget!",
  },
  {
    nama: "Nur Aini",
    kerja: "Percetakan Prima Jaya",
    img: gal2,
    kutipan:
      "Berkat bimbingan instruktur, saya bisa desain sendiri brosur dan banner profesional.",
  },
  {
    nama: "Indra Gunawan",
    kerja: "PT. Sinar Labuhan Sejahtera",
    img: gal1,
    kutipan:
      "Fasilitas lengkap, suasana nyaman, dan pembelajaran langsung praktik.",
  },
];

export default function Testimoni() {
  const [show, setShow] = React.useState(6); // tampilkan 6 dulu

  const visible = DATA_TESTIMONI.slice(0, show);
  const canLoadMore = show < DATA_TESTIMONI.length;

  return (
    <main>
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-4">
            <h1 className="h3 fw-bold text-itc mb-2">Testimoni Alumni</h1>
            <p className="text-muted" style={{ maxWidth: 760, margin: "0 auto" }}>
              Cerita nyata dari alumni kami yang sudah merasakan manfaat belajar di ITC.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {visible.map((t, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <div className="card border-0 shadow-sm h-100 text-center p-3 alumni-card">
                  <div
                    className="mx-auto mb-3 rounded-4 overflow-hidden shadow-sm"
                    style={{ width: 200, height: 260 }}
                  >
                    <img
                      src={t.img}
                      alt={t.nama}
                      className="w-100 h-100 object-fit-cover"
                      style={{ borderRadius: "12px" }}
                    />
                  </div>
                  <h6 className="fw-bold mb-0">{t.nama}</h6>
                  <small className="text-muted d-block mb-2">{t.kerja}</small>
                  <p className="small text-secondary fst-italic px-3 mb-0">“{t.kutipan}”</p>
                </div>
              </div>
            ))}
          </div>

          {canLoadMore && (
            <div className="text-center mt-4">
              <button
                className="btn btn-outline-itc"
                onClick={() => setShow((s) => Math.min(s + 6, DATA_TESTIMONI.length))}
              >
                Muat lebih banyak
              </button>
            </div>
          )}
        </div>

        <style>{`
          .alumni-card {
            transition: transform 0.25s ease, box-shadow 0.25s ease;
            border-radius: 1rem;
          }
          .alumni-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 0.75rem 1.25rem rgba(0,0,0,0.08);
          }
          .text-itc { color: var(--itc-primary); }
        `}</style>
      </section>
    </main>
  );
}
