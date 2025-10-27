import React from "react";
import {
  FaClock,
} from "react-icons/fa";

// ⚠️ Sesuaikan dengan nama file di /src/assets (perhatikan huruf besar-kecil)
import logo from "../assets/logo.PNG";

// === Import foto lokal untuk galeri mini ===
import gal1 from "../assets/galeri2.jpeg";
import gal2 from "../assets/galeri1.jpeg";
// di paling atas Dashboard.jsx
import regulerImg from "../assets/galeri2.jpeg";
import profesiImg from "../assets/galeri1.jpeg";

// kalau mau tambah: import gal3 from "../assets/nama-file.jpg";

// Kumpulan foto galeri mini (lokal / bisa dicampur dengan URL online)
const GALERI_MINI = [
  gal1,
  gal2,
  // "https://picsum.photos/seed/itc-event/800/450", // opsional campur online
  // gal3,
];

export default function Dashboard() {
  return (
    <main>
      {/* HERO */}
      <section className="py-5" style={{ backgroundColor: "#e6f4ef"}}>
        <div className="container py-4">
          <h1 className="display-6 fw-bold text-center text-dark">
            LKP Intermedia Training Center (ITC) – Rantau Prapat
          </h1>
          <p
            className="lead mt-3 text-center text-secondary mx-auto"
            style={{ maxWidth: 900 }}
          >
            Lembaga kursus & pelatihan komputer bersertifikat di Rantau Prapat.
            Berfokus pada pembelajaran praktik dan proyek nyata agar peserta
            <strong> siap kerja</strong> di dunia digital.
          </p>

          <div className="d-flex justify-content-center gap-2 mt-2">
            <a
              href="/program"
              className="btn text-white"
              style={{ backgroundColor: "#047857" }}
            >
              Lihat Program
            </a>
            <a
              href="/kontak"
              className="btn btn-outline-success"
              style={{ borderColor: "#047857", color: "#047857" }}
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* SEKILAS ITC */}
      <section className="py-5" style={{ backgroundColor: "#e6f4ef" }}>
        <div className="container">
          <div className="row g-4 align-items-center">
            {/* Logo */}
            <div className="col-md-3 text-center">
              <div
                className="p-3 rounded-3 shadow-sm bg-white"
                style={{ border: "2px solid #047857" }}
              >
                <img
                  src={logo}
                  alt="Logo ITC"
                  className="img-fluid"
                  style={{
                    maxWidth: "140px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            {/* Card Deskripsi */}
            <div className="col-md-9">
              <div
                className="card border-0 shadow-sm"
                style={{
                  backgroundColor: "white",
                  borderLeft: "5px solid #047857",
                }}
              >
                <div className="card-body">
                  <h2
                    className="h5 mb-3 fw-bold"
                    style={{ color: "#047857", letterSpacing: "0.5px" }}
                  >
                    Sekilas ITC Rantau Prapat
                  </h2>
                  <p className="text-muted mb-3">
                    ITC merupakan lembaga kursus komputer yang menyediakan pelatihan
                    terapan seperti Microsoft Office Advanced, desain grafis dasar,
                    jaringan & troubleshooting, multimedia, serta digital marketing.
                    Pembelajaran dirancang <strong>berorientasi praktik</strong> dengan
                    mini-project dan pendampingan karier.
                  </p>

                  {/* Badge / Highlight */}
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    <span
                      className="badge rounded-pill px-3 py-2"
                      style={{ backgroundColor: "#047857", color: "white", fontWeight: 500 }}
                    >
                      Praktik & Mini-Project
                    </span>
                    <span
                      className="badge rounded-pill px-3 py-2"
                      style={{ backgroundColor: "#065f46", color: "white", fontWeight: 500 }}
                    >
                      Link & Match
                    </span>
                    <span
                      className="badge rounded-pill px-3 py-2"
                      style={{ backgroundColor: "#059669", color: "white", fontWeight: 500 }}
                    >
                      Jadwal Fleksibel
                    </span>
                  </div>

                  <a
                    href="/tentang"
                    className="btn btn-success px-4"
                    style={{ backgroundColor: "#047857", border: "none" }}
                  >
                    Lebih Lengkap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* PROGRAM UNGGULAN */}
      <section className="py-5" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-3">
            <h2 className="h4 mb-0">Program</h2>
            <a href="/program" className="small text-success">Lihat semua program →</a>
          </div>

          <div className="row g-4">
            {/* Program Reguler */}
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="ratio ratio-16x9 rounded-top overflow-hidden">
                  <img
                    src={regulerImg}
                    alt="Program Reguler"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-1 fw-bold">Program Reguler</h5>
                  <small className="text-muted d-block mb-2">
                    Administrasi Perkantoran • Desain Grafis • Teknisi Komputer & Jaringan
                  </small>
                  <span className="badge bg-success text-white me-2">Fleksibel / Bulanan</span>
                  <span className="badge bg-secondary text-white">Full Praktik</span>
                  <div className="mt-3 d-flex gap-2">
                    <a href="/program/reguler" className="btn btn-success">Lihat Detail</a>
                    <a href="/kontak" className="btn btn-outline-success">Daftar / Konsultasi</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Profesi */}
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="ratio ratio-16x9 rounded-top overflow-hidden">
                  <img
                    src={profesiImg}
                    alt="Program Profesi"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-1 fw-bold">Program Profesi Komputer (1 Tahun)</h5>
                  <small className="text-muted d-block mb-2">
                    10 Bulan Pendidikan + 2 Bulan Magang • Termasuk Uji Kompetensi
                  </small>
                  <span className="badge bg-success text-white me-2">Jalur Cepat Dapat Kerja</span>
                  <span className="badge bg-secondary text-white">Job-Ready</span>
                  <div className="mt-3 d-flex gap-2">
                    <a href="/program/profesional" className="btn btn-success">Lihat Detail</a>
                    <a href="/kontak" className="btn btn-outline-success">Daftar / Konsultasi</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* PETA + SAMPINGNYA */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* MAPS */}
            <div className="col-lg-7">
              <h2 className="h4 mb-3">Lokasi ITC Rantau Prapat</h2>
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <iframe
                  title="Peta ITC Rantau Prapat"
                  src={
                    "https://www.google.com/maps?q=" +
                    encodeURIComponent("Jl. Padang Bulan No.13 A–C, Rantau Prapat, Kabupaten Labuhanbatu, Sumatera Utara") +
                    "&output=embed"
                  }
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <small className="text-muted d-block mt-2">
                *Jika peta belum tampil, pastikan koneksi internet aktif atau ijinkan load dari Google Maps.
              </small>
            </div>

            {/* SAMPING MAP: Tentang + Galeri Mini (pakai foto lokal) */}
            <div className="col-lg-5">
              {/* Kartu Tentang Singkat */}
              <div className="card border-0 shadow-sm mb-3" style={{ backgroundColor: "#e6f4ef" }}>
                <div className="card-body">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <img
                      src={logo}
                      alt="Logo ITC"
                      className="rounded-circle border"
                      style={{ width: 56, height: 56, objectFit: "cover" }}
                    />
                    <div>
                      <div className="fw-semibold">Tentang Singkat</div>
                      <small className="text-muted">ITC – Lembaga Kursus & Pelatihan Komputer</small>
                    </div>
                  </div>
                  <p className="mb-3">
                    Berlokasi strategis di Jl. Padang Bulan No.13 A–C, ITC mendampingi peserta dari dasar
                    hingga siap kerja melalui bimbingan instruktur berpengalaman dan metode praktik.
                  </p>
                  <a href="/tentang" className="btn btn-sm text-white" style={{ backgroundColor: "#047857" }}>
                    Baca Profil Lengkap
                  </a>
                </div>
              </div>

              {/* Galeri Mini - SEKARANG pakai foto lokal dari assets */}
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <div id="galeriMini" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner rounded">
                      {GALERI_MINI.map((src, i) => (
                        <div
                          key={i}
                          className={`carousel-item ${i === 0 ? "active" : ""}`}
                        >
                          <img
                            src={src}
                            className="d-block w-100"
                            alt={`Galeri ${i + 1}`}
                            style={{ objectFit: "cover", height: 220 }}
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#galeriMini"
                      data-bs-slide="prev"
                    >
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#galeriMini"
                      data-bs-slide="next"
                    >
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                  {/* <div className="small text-muted mt-2">
                    *Tambahkan foto lain dengan meng-import file baru dari <code>src/assets</code> dan masukkan ke array <code>GALERI_MINI</code>.
                  </div> */}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
