import React from "react";
import { Link } from "react-router-dom";
import admImg from "../assets/galeri2.jpeg";     // ganti sesuai asetmu
import desainImg from "../assets/galeri3.jpeg";  // ganti sesuai asetmu
import teknisiImg from "../assets/galeri3.jpeg"; // disarankan beda gambar

const WA_NUMBER = "6285218803835"; // nomor WA tanpa + (pakai 62)
const WA_TEXT = encodeURIComponent("Halo ITC, saya ingin konsultasi Program Reguler.");
const waUrl = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-4">
    <h2 className="h4 fw-bold mb-1">{title}</h2>
    {subtitle && <p className="text-secondary mb-0">{subtitle}</p>}
  </div>
);

const PriceBadge = ({ children }) => (
  <span className="badge rounded-pill bg-success-subtle text-success-emphasis border border-success">
    {children}
  </span>
);

const Card = ({ heading, price, items }) => (
  <div className="col-md-6">
    <div className="card h-100 shadow-sm border-0">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title fw-bold mb-0">{heading}</h5>
          <PriceBadge>{price}</PriceBadge>
        </div>
        <ul className="mb-0 ps-3">
          {items.map((it, i) => (
            <li key={i} className="mb-1">{it}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const CtaButtons = () => (
  <div className="d-flex flex-wrap gap-2">
    <Link to="/kontak" className="btn btn-success fw-semibold">Daftar Sekarang</Link>
    <a href={waUrl} className="btn btn-outline-success fw-semibold" target="_blank" rel="noreferrer">
      Konsultasi via WhatsApp
    </a>
  </div>
);

export default function ProgramReguler() {
  return (
    <main>
      {/* HERO */}
      <section className="py-5" style={{ backgroundColor: "#e6f4ef"}}>
        <div className="container py-3">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <h1 className="h2 fw-bold mb-2">Program Reguler</h1>
              <p className="lead text-secondary mb-3" style={{ maxWidth: 900 }}>
                Menerima pendaftaran siswa/siswi baru (SMA/SMK/Pesantren/Umum). Program
                belajar fleksibel, <strong>full praktik</strong>, dan <strong>bersertifikat</strong>.
              </p>
              <CtaButtons />
            </div>
          </div>
        </div>
      </section>

      {/* ADMINISTRASI PERKANTORAN */}
      <section className="py-5">
        <div className="container">
          <SectionTitle title="Administrasi Perkantoran" subtitle="Reguler & Express" />
          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <img src={admImg} alt="Administrasi Perkantoran" className="img-fluid rounded-3 shadow-sm" />
            </div>
            <div className="col-lg-7">
              <div className="row g-3">
                <Card
                  heading="Reguler"
                  price="Rp 200.000 / bulan"
                  items={[
                    "Microsoft Office (Word, Excel, Ppt, Internet, dll)",
                    "2 kali pertemuan dalam seminggu",
                    "Bersertifikat",
                  ]}
                />
                <Card
                  heading="Express"
                  price="Rp 1.000.000"
                  items={[
                    "Microsoft Office (Word, Excel, Ppt, Internet, dll)",
                    "Belajar selama 1,5 bulan",
                    "4 kali pertemuan dalam seminggu",
                    "Bersertifikat",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESAIN GRAFIS */}
      <section className="py-5 bg-light">
        <div className="container">
          <SectionTitle title="Desain Grafis" subtitle="Reguler & Express" />
          <div className="row g-4 align-items-center flex-lg-row-reverse">
            <div className="col-lg-5">
              <img src={desainImg} alt="Desain Grafis" className="img-fluid rounded-3 shadow-sm" />
            </div>
            <div className="col-lg-7">
              <div className="row g-3">
                <Card
                  heading="Reguler"
                  price="Rp 250.000 / bulan"
                  items={[
                    "CorelDraw & Photoshop (Desain vektor, logo, brosur, stempel, spanduk, kaos, dll)",
                    "2 kali pertemuan dalam seminggu",
                    "Bersertifikat",
                  ]}
                />
                <Card
                  heading="Express"
                  price="Rp 1.100.000"
                  items={[
                    "CorelDraw & Photoshop (Desain vektor, logo, brosur, stempel, spanduk, kaos, dll)",
                    "Belajar selama 1,5 bulan",
                    "4 kali pertemuan dalam seminggu",
                    "Bersertifikat",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEKNISI KOMPUTER & JARINGAN */}
      <section className="py-5">
        <div className="container">
          <SectionTitle title="Teknisi Komputer & Jaringan" subtitle="Reguler & Express" />
        <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <img src={teknisiImg} alt="Teknisi Komputer dan Jaringan" className="img-fluid rounded-3 shadow-sm" />
            </div>
            <div className="col-lg-7">
              <div className="row g-3">
                <Card
                  heading="Reguler"
                  price="Rp 300.000 / bulan"
                  items={[
                    "Cisco, Maintenance, Repaired (Instalasi jaringan, merakit komputer, instalasi sistem operasi, instalasi CCTV)",
                    "2 kali pertemuan dalam seminggu",
                    "Bersertifikat",
                  ]}
                />
                <Card
                  heading="Express"
                  price="Rp 1.200.000"
                  items={[
                    "Cisco, Maintenance, Repaired (Instalasi jaringan, merakit komputer, instalasi sistem operasi, instalasi CCTV)",
                    "Belajar selama 1,5 bulan",
                    "4 kali pertemuan dalam seminggu",
                    "Bersertifikat",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FASILITAS */}
      <section className="py-5 bg-light">
        <div className="container">
          <SectionTitle title="Fasilitas" />
          <div className="row g-3">
            {[
              "Pelatihan full praktik",
              "Bersertifikat",
              "Ruang sholat",
              "Ruangan full AC",
              "Parkiran aman",
              "Waktu pembelajaran fleksibel",
              "Modul pembelajaran",
              "1 peserta 1 komputer",
              "Ruang belajar nyaman",
              "Free Internet WiFi Area",
              "Peralatan praktik lengkap",
            ].map((f, i) => (
              <div key={i} className="col-md-6">
                <div className="d-flex align-items-start gap-2">
                  <span className="badge bg-success-subtle text-success-emphasis">✓</span>
                  <span>{f}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYARAT PENDAFTARAN */}
      <section className="py-5">
        <div className="container">
          <SectionTitle title="Syarat Pendaftaran" />
          <ol className="ps-3">
            <li>Warga Negara Indonesia</li>
            <li>Mengisi formulir pendaftaran</li>
            <li>Fotokopi ijazah atau Surat Keterangan Lulus: 2 lembar</li>
            <li>Fotokopi KTP dan Kartu Keluarga: 2 lembar</li>
            <li>Pas foto hitam putih 3×4: 3 lembar</li>
            <li>Pas foto berwarna latar merah 3×4: 1 lembar</li>
          </ol>
        </div>
      </section>

      {/* BIAYA & CTA PENDAFTARAN */}
      <section className="py-5 bg-light">
        <div className="container">
          <SectionTitle title="Biaya Pendaftaran & Biaya Perlengkapan" />
          <ul className="ps-3 mb-4">
            <li>Uang pendaftaran: <strong>Rp 50.000</strong></li>
            <li>Uang almamater: <strong>Rp 130.000</strong></li>
            <li>Uang sertifikat: <strong>Rp 50.000</strong></li>
          </ul>

          <div className="border rounded-3 p-3 bg-white mb-3">
            <p className="mb-1"><strong>Alamat:</strong> Jl. Padang Bulan No. 13 A – C Rantauprapat</p>
            <p className="mb-0"><strong>Contact Person:</strong> 0852 1880 3835 (Bapak Fandu)</p>
          </div>

          {/* CTA bawah */}
          <CtaButtons />
        </div>
      </section>
    </main>
  );
}
