// src/pages/Kontak.jsx
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTiktok,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaClock,
  FaUserTie,
} from "react-icons/fa";

// === Koordinat lokasi ITC (sama seperti di Tentang.jsx) ===
const lat = 2.092678;
const lng = 99.833186;

// === URL Google Maps ===
const gmapsEmbed = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;
const gmapsPlace = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
const gmapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`; // otomatis arah dari posisi user

export default function Kontak() {
  return (
    <main>
      {/* HERO */}
      <section className="py-5" style={{ backgroundColor: "#E0F2FE" }}>
        <div className="container text-center">
          <h1 className="fw-bold mb-3">Hubungi Kami</h1>
          <p className="text-secondary mx-auto" style={{ maxWidth: 700 }}>
            Kami siap membantu memberikan informasi seputar program pelatihan,
            jadwal, atau kerja sama dengan Yayasan Pendidikan Intermedia Jaya Utama (ITC).
          </p>
        </div>
      </section>

      {/* KONTAK CARD */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <FaMapMarkerAlt size={28} className="mb-2 icon-itc" />
                <h6 className="fw-bold mb-1">Alamat</h6>
                <p className="text-muted mb-0 small">
                  Jl. Padang Bulan No.13 A–C, Kel. Padang Bulan, Rantau Utara,
                  Kab. Labuhanbatu, Sumatera Utara
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <FaPhoneAlt size={26} className="mb-2 icon-itc" />
                <h6 className="fw-bold mb-1">Telepon / WhatsApp</h6>
                <p className="text-muted mb-0 small">+62 8536-2823-434</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <FaEnvelope size={26} className="mb-2 icon-itc" />
                <h6 className="fw-bold mb-1">Email</h6>
                <p className="text-muted mb-0 small">
                  Intermediatcrap@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA SOSIAL */}
      <section className="py-5" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container text-center">
          <h2 className="h5 fw-bold mb-4 text-itc">
            Temukan Kami di Media Sosial
          </h2>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a
              href="https://www.tiktok.com/@ITC.Business.School"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark text-decoration-none"
            >
              <FaTiktok size={32} className="me-1" />
              <span className="d-block small mt-1">TikTok</span>
            </a>
            <a
              href="https://www.instagram.com/itcbusinessschool/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark text-decoration-none"
            >
              <FaInstagram size={32} className="text-danger" />
              <span className="d-block small mt-1">Instagram</span>
            </a>
            <a
              href="https://facebook.com/intermediabusiness"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark text-decoration-none"
            >
              <FaFacebook size={32} className="text-primary" />
              <span className="d-block small mt-1">Facebook</span>
            </a>
            <a
              href="https://youtube.com/@intermedia.tc.9738"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark text-decoration-none"
            >
              <FaYoutube size={32} className="text-danger" />
              <span className="d-block small mt-1">YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* INFORMASI TAMBAHAN + MAPS */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* INFO */}
            <div className="col-lg-6">
              <h2 className="h5 fw-bold mb-3 text-itc">
                Jam Operasional & Layanan
              </h2>
              <div className="p-4 bg-white shadow-sm rounded-3 mb-4">
                <FaClock className="icon-itc mb-2" size={24} />
                <p className="mb-0 fw-semibold">
                  Senin – Kamis: 08.00 – 21.00 WIB
                </p>
                <p className="mb-0 fw-semibold">
                  Jumat: 14.00 – 17.00 WIB
                </p>
                <p className="text-muted small mb-0">
                  Sabtu, Minggu dan hari libur: Tutup
                </p>
              </div>

              <h6 className="fw-bold mb-3 text-itc">Admin & Pendaftaran</h6>
              <div className="d-flex align-items-start gap-3">
                <FaUserTie className="icon-itc mt-1" size={28} />
                <div>
                  <p className="mb-1 fw-semibold">Admin ITC</p>
                  <p className="text-muted mb-0 small">
                    Telepon/WhatsApp: 0853-6251-8120
                    <br />
                    Email: Intermediatcrap@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* MAPS + PETUNJUK ARAH (seperti di Tentang.jsx) */}
            <div className="col-lg-6">
              <h2 className="h5 fw-bold mb-3 text-itc">Lokasi Kami</h2>
              <div className="ratio ratio-16x9 shadow-sm rounded-3 overflow-hidden">
                <iframe
                  title="Lokasi ITC Rantau Prapat"
                  src={gmapsEmbed}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-3 d-flex flex-wrap gap-2">
                <a
                  href={gmapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-itc text-white"
                >
                  Petunjuk Arah (Google Maps)
                </a>

                <a
                  href={gmapsPlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-itc"
                >
                  Buka di Google Maps
                </a>

              </div>

              <div className="small text-muted mt-2">
                Tombol <strong>Petunjuk Arah</strong> akan membuka aplikasi
                Google Maps dengan rute dari lokasi Anda ke LKP Intermedia
                Training Center (ITC) Rantau Prapat.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THEME (khusus halaman ini; pindahkan ke global bila sudah ada) */}
      <style>{`
        :root{
          --itc-primary: #0284C7;   /* sky blue dark */
          --itc-primary-700: #0369A1;
          --itc-soft: #E0F2FE;      /* light sky */
        }
        .text-itc{ color: var(--itc-primary); }
        .icon-itc{ color: var(--itc-primary); }

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
      `}</style>
    </main>
  );
}
