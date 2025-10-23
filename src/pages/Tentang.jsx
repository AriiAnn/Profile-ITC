/* src/pages/Tentang.jsx */
import React from "react";
import Navbar from "../components/Navbar";
import NavbarBanner from "../components/NavbarBanner";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";

/** Data yayasan */
const orgInfo = {
  nama: "LKP Intermedia Training Center (ITC) – Rantau Prapat",
  alamat:
    "Jl. Padang Bulan No.13 A–C, Kel. Cendana, Kec. Rantau Utara, Kab. Labuhanbatu, Sumatera Utara",
  telepon: "+62 8536-2823-434",
  email: "info@intermediajuyutama.ac.id",
  website: "www.intermediajuyutama.ac.id",
  tahunBerdiri: "2017",
  npsn: "K5668343",
  skNo: "421.9/2314.PAUD DIKMAS/2017",
  skTanggal: "08 November 2017",
  legalitas: "Lembaga Kursus & Pelatihan (DIKMAS)",
};

export default function Tentang() {
  return (
    <main>
      <Navbar />
      <NavbarBanner />

      {/* HERO */}
      <section style={{ backgroundColor: "#e6f4ef" }} className="py-5">
        <div className="container py-3">
          <div className="row g-4 align-items-center">
            <div className="col-md-2 text-center">
              <img
                src={logo}
                alt="Logo"
                className="img-fluid rounded-circle border"
                style={{ maxWidth: 120 }}
              />
            </div>
            <div className="col-md-10">
              <h1 className="h2 fw-bold mb-2">{orgInfo.nama}</h1>
              <p className="lead text-secondary mb-0" style={{ maxWidth: 900 }}>
                Lembaga kursus komputer bersertifikat yang berfokus pada
                pembelajaran praktik, mini-project, dan pembekalan karier agar
                lulusan siap kerja di industri digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROFIL & LEGALITAS */}
      <section className="py-5">
        <div className="container">
          <h2 className="h4 fw-bold mb-3">Profil & Legalitas</h2>
          <div className="row g-3">
            {[
              { label: "Tahun Berdiri", value: orgInfo.tahunBerdiri },
              { label: "Nomor SK Operasional", value: orgInfo.skNo },
              { label: "Tanggal SK", value: orgInfo.skTanggal },
              { label: "NPSN", value: orgInfo.npsn },
              { label: "Legalitas", value: orgInfo.legalitas },
              { label: "Alamat", value: orgInfo.alamat },
              { label: "Telepon", value: orgInfo.telepon },
              { label: "Email", value: orgInfo.email },
              { label: "Website", value: orgInfo.website },
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <div className="small text-muted">{item.label}</div>
                    <div className="fw-semibold">{item.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card border-0 shadow-sm mt-4">
            <div className="card-body">
              <p className="mb-0 text-muted">
                ITC berdiri sebagai lembaga pelatihan berbasis teknologi yang
                menghadirkan kurikulum adaptif terhadap kebutuhan dunia kerja.
                Kami memberikan pelatihan praktis seperti Microsoft Office
                Advanced, Desain Grafis, Multimedia, Jaringan, dan Digital
                Marketing. Setiap peserta difasilitasi dengan mini-project dan
                pembimbingan karier agar siap bersaing di era digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERI & MAPS */}
      <section className="py-5" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <div className="row g-4">
            {/* Galeri */}
            <div className="col-lg-6">
              <h2 className="h5 fw-bold mb-3">Galeri</h2>
              <div
                id="galeriTentang"
                className="carousel slide shadow-sm rounded-3 overflow-hidden"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {[
                    "https://picsum.photos/seed/lab/1200/600",
                    "https://picsum.photos/seed/kelas/1200/600",
                    "https://picsum.photos/seed/event/1200/600",
                  ].map((src, i) => (
                    <div
                      className={`carousel-item ${i === 0 ? "active" : ""}`}
                      key={i}
                    >
                      <img
                        src={src}
                        className="d-block w-100"
                        alt={`galeri-${i}`}
                        style={{ objectFit: "cover", height: 350 }}
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#galeriTentang"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#galeriTentang"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="small text-muted mt-2">
                *Ganti dengan foto kegiatan asli (lab, kelas, wisuda, pelatihan).
              </div>
            </div>

            {/* Maps */}
            <div className="col-lg-6">
              <h2 className="h5 fw-bold mb-3">Lokasi Kami</h2>
              <div className="ratio ratio-16x9 shadow-sm rounded-3 overflow-hidden">
                <iframe
                  title="Peta ITC Rantau Prapat"
                  src={
                    "https://www.google.com/maps?q=" +
                    encodeURIComponent(orgInfo.alamat) +
                    "&output=embed"
                  }
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-3">
                <a
                  href="/kontak"
                  className="btn btn-success"
                  style={{ backgroundColor: "#047857", border: "none" }}
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
