import React from "react";
import { FaClock } from "react-icons/fa";

// ⚠️ Sesuaikan dengan nama file di /src/assets (perhatikan huruf besar-kecil)
import logo from "../assets/logo.PNG";

// === Import foto lokal untuk galeri mini ===
import gal1 from "../assets/galeri2.jpeg";
import gal2 from "../assets/galeri1.jpeg";
// di paling atas Dashboard.jsx
import regulerImg from "../assets/galeri2.jpeg";
import profesiImg from "../assets/galeri1.jpeg";

// Kumpulan foto galeri mini (lokal / bisa dicampur dengan URL online)
const GALERI_MINI = [gal1, gal2];

export default function Dashboard() {
  return (
    <main>
      {/* HERO */}
      <section className="py-5" style={{ backgroundColor: "#E0F2FE" }}>
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
            <a href="/program" className="btn btn-itc text-white">
              Lihat Program
            </a>
            <a href="/kontak" className="btn btn-outline-itc">
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* SEKILAS ITC */}
      <section className="py-5" style={{ backgroundColor: "#E0F2FE" }}>
        <div className="container">
          <div className="row g-4 align-items-center">
            {/* Logo */}
            <div className="col-md-3 text-center">
              <div
                className="p-3 rounded-3 shadow-sm bg-white"
                style={{ border: "2px solid #0284C7" }}
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
                  borderLeft: "5px solid #0284C7",
                }}
              >
                <div className="card-body">
                  <h2
                    className="h5 mb-3 fw-bold"
                    style={{ color: "#0284C7", letterSpacing: "0.5px" }}
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
                    <span className="badge-itc">Praktik & Mini-Project</span>
                    <span className="badge-itc-dark">Link & Match</span>
                    <span className="badge-itc-soft">Jadwal Fleksibel</span>
                  </div>

                  <a href="/tentang" className="btn btn-itc text-white px-4">
                    Lebih Lengkap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM UNGGULAN */}
      <section className="py-5" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-3">
            <h2 className="h4 mb-0">Program</h2>
            <a href="/program" className="small link-itc">Lihat semua program →</a>
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
                  <span className="badge-itc me-2">Fleksibel / Bulanan</span>
                  <span className="badge bg-secondary text-white">Full Praktik</span>
                  <div className="mt-3 d-flex gap-2">
                    <a href="/program/reguler" className="btn btn-itc text-white">
                      Lihat Detail
                    </a>
                    <a href="/kontak" className="btn btn-outline-itc">
                      Daftar / Konsultasi
                    </a>
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
                  <span className="badge-itc me-2">Jalur Cepat Dapat Kerja</span>
                  <span className="badge bg-secondary text-white">Job-Ready</span>
                  <div className="mt-3 d-flex gap-2">
                    <a href="/program/profesional" className="btn btn-itc text-white">
                      Lihat Detail
                    </a>
                    <a href="/kontak" className="btn btn-outline-itc">
                      Daftar / Konsultasi
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* === CAROUSEL KEGIATAN === */}
      {/* === CAROUSEL KEGIATAN (2 FOTO/SLIDE, RASIO 4:3) === */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="h4 fw-bold mb-4 text-center text-itc">Kegiatan di ITC</h2>

          <div id="carouselKegiatan" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner rounded-4 shadow-sm">

              {[
                [
                  {
                    img: gal1,
                    title: "Pelatihan Administrasi Perkantoran",
                    desc: "Microsoft Office, surat-menyurat & pengarsipan siap kerja.",
                  },
                  {
                    img: gal2,
                    title: "Workshop Desain Grafis",
                    desc: "Logo, brosur, dan spanduk (CorelDraw & Photoshop).",
                  },
                ],
                [
                  {
                    img: gal1,
                    title: "Magang Industri",
                    desc: "Penempatan peserta di perusahaan mitra, pengalaman nyata.",
                  },
                  {
                    img: gal2,
                    title: "Kegiatan Sosial",
                    desc: "Berbagi & pengabdian masyarakat bersama peserta ITC.",
                  },
                ],
              ].map((slide, i) => (
                <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                  <div className="row g-3">
                    {slide.map((k, idx) => (
                      <div key={idx} className="col-12 col-md-6">
                        <a href="/galeri" className="text-decoration-none">
                          <div className="card h-100 border-0 overflow-hidden kegiatan-card">
                            <div className="ratio ratio-4x3">
                              <img
                                src={k.img}
                                alt={k.title}
                                className="w-100 h-100 object-fit-cover"
                              />
                            </div>
                            {/* Overlay caption */}
                            <div className="kegiatan-overlay">
                              <h5 className="fw-bold mb-1 text-white">{k.title}</h5>
                              <p className="mb-2 small text-white-50">{k.desc}</p>
                              <span className="btn btn-sm btn-itc">Lihat Selengkapnya</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

            </div>

            {/* Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselKegiatan" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselKegiatan" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

            {/* Indicators */}
            <div className="carousel-indicators position-static mt-3">
              <button type="button" data-bs-target="#carouselKegiatan" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselKegiatan" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
          </div>
        </div>

        {/* STYLE khusus section ini */}
        <style>{`
    :root{
      --itc-primary:#0284C7; --itc-primary-700:#0369A1;
    }

    .kegiatan-card{
      border-radius: 1rem;
    }
    .kegiatan-card img{
      display:block;
    }
    /* Overlay di bawah gambar (gradient) */
    .kegiatan-overlay{
      position: absolute;
      left: 0; right: 0; bottom: 0;
      padding: .9rem 1rem;
      background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(3,7,18,0.75) 80%, rgba(3,7,18,0.9) 100%);
      color:#fff;
    }

    /* Indicators lebih manis */
    .carousel-indicators [data-bs-target]{
      width: .7rem; height: .7rem; border-radius: 999px;
      background-color: rgba(2,132,199,.35);
    }
    .carousel-indicators .active{
      background-color: var(--itc-primary);
    }

    /* Arrow sedikit dibesarkan */
    .carousel-control-prev-icon,
    .carousel-control-next-icon{
      filter: drop-shadow(0 2px 6px rgba(0,0,0,.4));
    }

    /* Hover ringan */
    .kegiatan-card:hover{
      transform: translateY(-2px);
      transition: transform .18s ease;
    }
  `}</style>
      </section>
      {/* === TESTIMONI LULUSAN (DENGAN CAROUSEL OTOMATIS) === */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="h4 fw-bold mb-5 text-center text-itc">Testimoni Alumni</h2>

          <div id="carouselTestimoni" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
            <div className="carousel-inner">
              {[
                [
                  {
                    nama: "Dahlia Nasution",
                    kerja: "CV. HSR – Padang Lawas Utara",
                    img: "/assets/alumni-dahlia.png",
                    kutipan: "Belajar di ITC bikin saya siap kerja. Instruktur sabar, dan praktiknya langsung sesuai dunia kerja!",
                  },
                  {
                    nama: "Rudi Hartono",
                    kerja: "PT. Digital Indo",
                    img: gal1,
                    kutipan: "Program profesi ITC membantu saya punya skill teknis dan cepat diterima kerja.",
                  },
                  {
                    nama: "Siti Amalia",
                    kerja: "Studio Grafis Mandiri",
                    img: gal2,
                    kutipan: "Instruktur profesional, fasilitas lengkap, dan suasana belajarnya menyenangkan!",
                  },
                ],
                [
                  {
                    nama: "Ahmad Fauzan",
                    kerja: "PT. Media Solusi Digital",
                    img: gal1,
                    kutipan: "Saya belajar editing video dan langsung diterima di perusahaan media, keren banget!",
                  },
                  {
                    nama: "Nur Aini",
                    kerja: "Percetakan Prima Jaya",
                    img: gal2,
                    kutipan: "Berkat bimbingan instruktur, saya bisa desain sendiri brosur dan banner profesional.",
                  },
                  {
                    nama: "Indra Gunawan",
                    kerja: "PT. Sinar Labuhan Sejahtera",
                    img: gal1,
                    kutipan: "Fasilitas lengkap, suasana nyaman, dan pembelajaran langsung praktik.",
                  },
                ],
              ].map((group, i) => (
                <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                  <div className="row g-4 justify-content-center">
                    {group.map((t, idx) => (
                      <div key={idx} className="col-12 col-md-4">
                        <div className="card border-0 shadow-sm h-100 text-center p-3 alumni-card">
                          <div className="mx-auto mb-3 rounded-4 overflow-hidden shadow-sm" style={{ width: 180, height: 240 }}>
                            <img
                              src={t.img}
                              alt={t.nama}
                              className="w-100 h-100 object-fit-cover"
                              style={{ borderRadius: "10px" }}
                            />
                          </div>
                          <h6 className="fw-bold mb-0">{t.nama}</h6>
                          <small className="text-muted d-block mb-2">{t.kerja}</small>
                          <p className="small text-secondary fst-italic px-3 mb-0">
                            “{t.kutipan}”
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Tombol Navigasi */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselTestimoni" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselTestimoni" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

            {/* Indicator bulat di bawah */}
            <div className="carousel-indicators position-static mt-4">
              <button type="button" data-bs-target="#carouselTestimoni" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselTestimoni" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
          </div>
        </div>

        <style>{`
    .alumni-card {
      transition: transform 0.25s ease, box-shadow 0.25s ease;
      border-radius: 1rem;
    }
    .alumni-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
    }

    .carousel-indicators [data-bs-target]{
      width: .7rem; height: .7rem;
      border-radius: 50%;
      background-color: rgba(2,132,199,.3);
    }
    .carousel-indicators .active{
      background-color: #0284C7;
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon{
      filter: drop-shadow(0 2px 6px rgba(0,0,0,.4));
    }
  `}</style>
      </section>




      {/* === KENAPA HARUS PERCAYA KAMI === */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="h4 fw-bold mb-5 text-itc">Kenapa Harus Percaya Kami?</h2>

          <div className="row justify-content-center g-4">
            <div className="col-md-5">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100 border-start border-success border-4">
                <img
                  src="/assets/akreditasi-A.png"
                  alt="Akreditasi A"
                  className="mb-3 rounded"
                  style={{ maxWidth: "120px" }}
                />
                <h5 className="fw-bold text-itc mb-2">Terakreditasi A</h5>
                <p className="text-muted mb-0">
                  Lembaga kami telah mendapatkan <strong>Akreditasi “A”</strong> dari lembaga resmi pemerintah,
                  menjamin mutu pembelajaran dan tenaga pengajar profesional.
                </p>
              </div>
            </div>

            <div className="col-md-5">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100 border-start border-info border-4">
                <img
                  src="/assets/iso-cert.png"
                  alt="Sertifikat ISO"
                  className="mb-3 rounded"
                  style={{ maxWidth: "120px" }}
                />
                <h5 className="fw-bold text-itc mb-2">Sertifikat ISO</h5>
                <p className="text-muted mb-0">
                  ITC telah tersertifikasi <strong>ISO</strong> sebagai lembaga pendidikan yang memiliki
                  sistem manajemen mutu terstandar internasional.
                </p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
    :root{
      --itc-primary:#0284C7;
    }
    .text-itc{ color: var(--itc-primary); }
  `}</style>
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
                    encodeURIComponent(
                      "Jl. Padang Bulan No.13 A–C, Rantau Prapat, Kabupaten Labuhanbatu, Sumatera Utara"
                    ) +
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

            {/* SAMPING MAP: Tentang + Galeri Mini */}
            <div className="col-lg-5">
              {/* Kartu Tentang Singkat */}
              <div className="card border-0 shadow-sm mb-3" style={{ backgroundColor: "#E0F2FE" }}>
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
                      <small className="text-muted">
                        ITC – Lembaga Kursus & Pelatihan Komputer
                      </small>
                    </div>
                  </div>
                  <p className="mb-3">
                    Berlokasi strategis di Jl. Padang Bulan No.13 A–C, ITC mendampingi peserta dari dasar
                    hingga siap kerja melalui bimbingan instruktur berpengalaman dan metode praktik.
                  </p>
                  <a href="/tentang" className="btn btn-sm btn-itc text-white">
                    Baca Profil Lengkap
                  </a>
                </div>
              </div>

              {/* Galeri Mini */}
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <div id="galeriMini" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner rounded">
                      {GALERI_MINI.map((src, i) => (
                        <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
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
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* THEME STYLES */}
      <style>{`
        :root{
          --itc-primary: #0284C7;   /* sky blue dark */
          --itc-primary-700: #0369A1;
          --itc-primary-800: #075985;
          --itc-soft: #E0F2FE;      /* light sky */
        }

        /* Buttons */
        .btn-itc{
          background-color: var(--itc-primary);
          border-color: var(--itc-primary);
        }
        .btn-itc:hover{
          background-color: var(--itc-primary-700);
          border-color: var(--itc-primary-700);
        }
        .btn-outline-itc{
          color: var(--itc-primary);
          border-color: var(--itc-primary);
          background: transparent;
        }
        .btn-outline-itc:hover{
          color: #fff;
          background-color: var(--itc-primary);
          border-color: var(--itc-primary);
        }

        /* Badges */
        .badge-itc{
          display:inline-block;
          background-color: var(--itc-primary);
          color: #fff;
          font-weight: 500;
          padding: .5rem .75rem;
          border-radius: 999px;
          font-size: .875rem;
        }
        .badge-itc-dark{
          display:inline-block;
          background-color: var(--itc-primary-800);
          color: #fff;
          font-weight: 500;
          padding: .5rem .75rem;
          border-radius: 999px;
          font-size: .875rem;
        }
        .badge-itc-soft{
          display:inline-block;
          background-color: var(--itc-soft);
          color: var(--itc-primary-800);
          font-weight: 600;
          padding: .5rem .75rem;
          border-radius: 999px;
          border: 1px solid rgba(2,132,199,.25);
          font-size: .875rem;
        }

        /* Links */
        .link-itc{
          color: var(--itc-primary);
          text-decoration: none;
        }
        .link-itc:hover{
          color: var(--itc-primary-700);
          text-decoration: underline;
        }
      `}</style>
    </main>
  );
}
