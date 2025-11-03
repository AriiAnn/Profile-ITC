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
                  Jl. Padang Bulan No.13 A–C, Kel. Cendana, Rantau Utara,
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
                <p className="mb-0 fw-semibold">Senin – Jumat: 08.00 – 17.00 WIB</p>
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
                    Telepon/WhatsApp: 0853-6251-8120<br />
                    Email: Intermediatcrap@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* MAPS */}
            <div className="col-lg-6">
              <div className="ratio ratio-16x9 shadow-sm rounded-3 overflow-hidden">
                <iframe
                  title="Lokasi ITC Rantau Prapat"
                  src="https://www.google.com/maps?q=LKP+Intermedia+Training+Center,+Rantau+Prapat&output=embed"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THEME (khusus halaman ini; pindahkan ke global bila sudah ada) */}
      <style>{`
        :root{
          --itc-primary: #0284C7;   /* sky blue dark */
          --itc-soft: #E0F2FE;      /* light sky */
        }
        .text-itc{ color: var(--itc-primary); }
        .icon-itc{ color: var(--itc-primary); }
      `}</style>
    </main>
  );
}
