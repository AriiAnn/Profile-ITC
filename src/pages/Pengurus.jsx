import React from "react";
import fitra from "../assets/pengurus/yayasan.jpeg";
import hadi from "../assets/pengurus/hadi.jpeg";
import hafifa from "../assets/pengurus/hafifa.jpeg";
import mahjuro from "../assets/pengurus/mahjuro.jpeg";
import mustapa from "../assets/pengurus/mustapa.jpeg";
import nazwa from "../assets/pengurus/nazwa.jpeg";
import novika from "../assets/pengurus/novika.jpeg";
import sheila from "../assets/pengurus/sheila.jpeg";
import cici from "../assets/pengurus/cici.jpeg";
import devi from "../assets/pengurus/devi.jpeg";
import fandu from "../assets/pengurus/fandu.jpeg";
import febri from "../assets/pengurus/febri.jpeg";
import geo from "../assets/pengurus/geo.jpeg";
import trisa from "../assets/pengurus/trisa.jpeg";
import zulham from "../assets/pengurus/zulham.jpeg";

const pengurus = [
  { nama: "Muhammad Fitra, S.E., M.M., C.STMI., C.SM", jabatan: "Ketua Dewan Pembina Yayasan", foto: fitra },
  { nama: "Fandu Oktori Sukoto, A.Md.Kom", jabatan: "Direktur", foto: fandu },
  { nama: "Zulham Ali Irwansyah, S.S", jabatan: "Sekretaris", foto: zulham },
  { nama: "Trisa Retnawati", jabatan: "Bendahara", foto: trisa },
  { nama: "Sheila Farda Murti", jabatan: "Ka. Prog. Prfesi 1 tahun siap kerja", foto: sheila },
  { nama: "Cici Dinda Anggriani, S.M", jabatan: "Ka. Prog. Manajemen Bisnis dan Teknologi Informasi", foto: cici },
  { nama: "Sri Devi Pasaribu, S.E", jabatan: "Administrasi Umum", foto: devi },
  { nama: "Mustapa Ali Hasibuan", jabatan: "Instruktur Profesi", foto: mustapa },
  { nama: "Hafifa Nurul Kinasih", jabatan: "Instruktur Profesi", foto: hafifa },
  { nama: "Geo Fanny Alan Syahputra", jabatan: "Instruktur Profesi", foto: geo },
  { nama: "Novika Rhami", jabatan: "Instruktur Reguler", foto: novika },
  { nama: "Nazwa Prilya Andita S", jabatan: "Instruktur Reguler", foto: nazwa },
  { nama: "Mahjuro", jabatan: "Instruktur Reguler", foto: mahjuro },
  { nama: "Mhd. Febry Wijaya", jabatan: "Instruktur Teknik Komputer dan Jaringan", foto: febri },
  { nama: "Samsul Hadi", jabatan: "Security", foto: hadi },
];

export default function Pengurus() {
  return (
    <main>
      {/* HERO */}
      <section className="py-5" style={{ backgroundColor: "#E0F2FE" }}>
        <div className="container text-center">
          <h1 className="h2 fw-bold mb-2">Struktur Pengurus</h1>
          <p className="text-secondary mb-0">
            Daftar pimpinan dan tenaga pengajar di Intermedia Training Center (ITC) Rantau Prapat.
          </p>
        </div>
      </section>

      {/* GRID PENGURUS */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {pengurus.map((p, i) => (
              <div className="col-6 col-md-4 col-lg-3 text-center" key={i}>
                <div
                  className="pengurus-card d-flex flex-column align-items-center p-3 rounded bg-white h-100 shadow-sm"
                >
                  <div
                    className="rounded overflow-hidden border mb-3"
                    style={{
                      width: "100%",
                      aspectRatio: "3 / 4",
                      backgroundColor: "#f8f9fa",
                      maxWidth: "180px",
                    }}
                  >
                    <img
                      src={p.foto}
                      alt={p.nama}
                      className="w-100 h-100"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/default/300/400"; }}
                    />
                  </div>
                  <h6 className="fw-bold mb-1" style={{ fontSize: "0.95rem", lineHeight: "1.3em" }}>
                    {p.nama}
                  </h6>
                  <span className="text-muted small" style={{ fontSize: "0.85rem" }}>
                    {p.jabatan}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THEME & CARD EFFECT */}
      <style>{`
        :root{
          --itc-primary: #0284C7;   /* sky blue dark */
          --itc-primary-700: #0369A1;
          --itc-soft: #E0F2FE;      /* light sky */
        }

        .pengurus-card{
          border: 1px solid #ddd;
          transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
        }
        .pengurus-card:hover{
          transform: translateY(-2px);
          box-shadow: 0 .5rem 1rem rgba(0,0,0,.08);
          border-color: rgba(2,132,199,.35); /* aksen biru saat hover */
        }
      `}</style>
    </main>
  );
}
