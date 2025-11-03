/* src/pages/Tentang.jsx */
import React from "react";
import Navbar from "../components/Navbar";
import NavbarBanner from "../components/NavbarBanner";
import logo from "../assets/logo.PNG";

// === Import gambar lokal untuk galeri ===
import foto1 from "../assets/galeri1.jpeg";
import foto2 from "../assets/galeri2.jpeg";
import foto3 from "../assets/galeri3.jpeg";

/** Data yayasan */
const orgInfo = {
  nama: "LKP Intermedia Training Center (ITC) – Rantau Prapat",
  alamat:
    "Jl. Padang Bulan No.13 A–C, Kel. Cendana, Kec. Rantau Utara, Kab. Labuhanbatu, Sumatera Utara",
  telepon: "+62 853-6251-8120",
  email: "Intermediatcrap@gmail.com",
  website: "www.intermediajuyutama.ac.id",
  tahunBerdiri: "2017",
  npsn: "K5668343",
  skNo: "421.9/2314.PAUD DIKMAS/2017",
  skTanggal: "08 November 2017",
  legalitas: "Lembaga Kursus & Pelatihan (DIKMAS)",
};

// === Koordinat lokasi ITC ===
const lat = 2.092678;
const lng = 99.833186;

// === URL Google Maps ===
const gmapsEmbed = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;
const gmapsPlace = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
const gmapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`; // otomatis arah dari posisi user

export default function Tentang() {
  const galeri = [foto1, foto2, foto3];

  return (
    <main>
      {/* HERO */}
      <section style={{ backgroundColor: "#E0F2FE" }} className="py-5">
        <div className="container py-3">
          <div className="row g-4 align-items-center">
            <div className="col-md-2 text-center">
              <img
                src={logo}
                alt="Logo ITC"
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
                Lembaga Pelatihan Kerja Swasta Intermedia Training Center (ITC) berdiri pada Tanggal 25 Juli 2016, beralamat di Jl. Padang Bulan No 13 C Kota Rantauprapat, Kabupaten Labuhanbatu, Provinsi Sumatera Utara, juga merupakan salah satu Lembaga Pelatihan Kerja Swasta (LPKS) yang sudah terakreditasi baik dari BAN PAUD dan PNF (Badan Akreditasi Nasional Pendidikan Anak Usia Dini dan Pendidikan Non Formal) maupun dari LA-LPK (Lembaga Akreditasi – Lembaga Pelatihan Kerja) Nomor : 623/LA-LPK/XII/2020. yang bergerak di bidang Jasa Pendidikan Pelatihan Komputer. Dididik oleh tenaga pendidik/instruktur-instruktur yang professional, Berpengalaman dan kompeten dibidangnya, Juga bersertfikasi oleh BNSP (Badan Nasional Sertifikasi Profesi) Serta Seminar Rutin oleh motivator dan pemateri yang berpengalaman.
              
              </p>
              <br />

              <p className="mb-0 text-muted">
                ITC menyediakan Pelatihan Kursus 1 Bulan, 3 Bulan untuk anak-anak Sekolah yaitu Program Administrasi Perkantoran, Desain Grafis, Teknik Komputer dan Jaringan Serta Kejuruan Unggulan yaitu Pelatihan Profesi Komputer 1 Tahun Siap Kerja (10 Bulan Pelatihan dan 2 Bulan Magang Di Dunia Usaha/Industri, Perusahaan, dan Instansi Pemerintahan/Swasta) khusus para Peserta yang baru tamat sekolah, pencari kerja, ataupun yang sudah tidak bekerja lagi, . Setelah menyelesaikan Pelatihan tentunya siswa/i akan diberikan sertifikat pelatihan kompetensi sesuai program yang diikuti dan Diwisudakan.
              
              </p>
<br />
              <p className="mb-0 text-muted">
                Fasilitas yang didapat ketika belajar di ITC yaitu adalah Ruang Belajar nyaman, aman, sehat dan kondusif serta berdayaguna, Parkiran aman yang dilenkapi CCTV dan pelayanan Satpam, Ruang Full AC, Baju Dinas dan Atribut untuk Peserta Profesi Komputer Siap Kerja (10 Bulan Pelatihan dan 2 Bulan Magang Di Dunia Usaha/Industri, Perusahaan, dan Instansi Pemerintahan ataupun Swasta) , Ruang Ibadah Manajemen dan Peserta Pelatihan, Ruang Tunggu, Peralatan Praktek yang memadai, juga terbentuknya kawasan “Zero Tolerance” yaitu kawasan tanpa rokok, alkohol dan napza, serta kawasan bebas kekerasan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERI & MAPS */}
      <section className="py-5" style={{ backgroundColor: "#FAFAFA" }}>
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
                  {galeri.map((src, i) => (
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
            </div>

            {/* Maps */}
            <div className="col-lg-6">
              <h2 className="h5 fw-bold mb-3">Lokasi Kami</h2>
              <div className="ratio ratio-16x9 shadow-sm rounded-3 overflow-hidden">
                <iframe
                  title="Peta ITC Rantau Prapat"
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

                <a href="/kontak" className="btn btn-light border">
                  Hubungi Kami
                </a>
              </div>

              <div className="small text-muted mt-2">
                Petunjuk arah otomatis terbuka di aplikasi Google Maps dengan
                rute dari lokasi Anda ke LKP Intermedia Training Center (ITC)
                Rantau Prapat.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THEME (khusus halaman ini, aman digabung dengan global) */}
      <style>{`
        :root{
          --itc-primary: #0284C7;   /* sky blue dark */
          --itc-primary-700: #0369A1;
          --itc-soft: #E0F2FE;      /* light sky */
        }

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
