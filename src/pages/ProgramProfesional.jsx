import React from "react";

// ====== GANTI nama file sesuai aset kamu di src/assets ======
import hero1 from "../assets/profesi-1.jpeg";
import hero2 from "../assets/profesi-2.jpeg";
import hero3 from "../assets/profesi-3.jpeg";
import hero4 from "../assets/profesi-4.jpeg";
// ============================================================

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-4">
    <h2 className="h4 fw-bold mb-1">{title}</h2>
    {subtitle && <p className="text-secondary mb-0">{subtitle}</p>}
  </div>
);
const WA_NUMBER = "6285362518120"; // nomor WA tanpa + (pakai 62)
const WA_TEXT = encodeURIComponent("Halo ITC, saya ingin konsultasi Program Reguler.");
const waUrl = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;

export default function ProgramProfesional() {
  return (
    <main>
      {/* HERO */}
      <section className="py-5" style={{ backgroundColor: "#E0F2FE" }}>
        <div className="container py-3">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <h1 className="h2 fw-bold mb-2">Program Profesi Komputer – 1 Tahun Siap Kerja</h1>
              <p className="lead text-secondary mb-2" style={{ maxWidth: 940 }}>
                <strong>Masa Pelatihan:</strong> 10 Bulan Pendidikan + 2 Bulan Magang. <br />
                Kurikulum terapan berstandar industri, fokus kemampuan kerja nyata.
              </p>
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <span className="badge bg-warning text-dark fw-semibold">Jalur Cepat Dapat Kerja</span>
                <span className="badge-soft-itc">Termasuk Uji Kompetensi</span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden shadow-sm">
                <img src={hero1} alt="Program Profesi Komputer" className="w-100 h-100 object-fit-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE / MATA PELAJARAN */}
      <section className="py-5">
        <div className="container">
          <SectionTitle title="Course (Materi Pembelajaran)" />
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold mb-2">Administrasi Perkantoran</h5>
                  <ul className="mb-0 ps-3">
                    <li>Microsoft Office Word</li>
                    <li>Microsoft Excel</li>
                    <li>Microsoft PowerPoint</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold mb-2">Desain Grafis</h5>
                  <ul className="mb-0 ps-3">
                    <li>CorelDraw</li>
                    <li>Adobe Photoshop</li>
                    <li>Canva</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold mb-2">Videografi</h5>
                  <ul className="mb-0 ps-3">
                    <li>Dasar pengambilan gambar</li>
                    <li>Editing dengan CapCut</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Uji Kompetensi */}
          <div className="alert-itc mt-4 mb-0">
            <strong>Uji Kompetensi:</strong> Peserta mengikuti asesmen kompetensi sebagai syarat kelulusan program.
          </div>
        </div>
      </section>

      {/* POTENSI KEAHLIAN / KARIER */}
      <section className="py-5 bg-light">
        <div className="container">
          <SectionTitle title="Potensi Keahlian & Karier" />
          <div className="row g-3">
            {[
              "Administrasi Perkantoran",
              "Pengembangan Produk",
              "Pengusaha (Entrepreneur)",
              "Pemasaran Digital",
            ].map((item, i) => (
              <div key={i} className="col-md-6">
                <div className="d-flex align-items-start gap-2">
                  <span className="badge-soft-itc">✓</span>
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEUNTUNGAN MEMILIH PROGRAM (dari brosur) */}
      <section className="py-5">
        <div className="container">
          <SectionTitle title="Keuntungan Memilih Program Profesi 1 Tahun" subtitle="Ringkasan poin dari brosur" />
          <div className="row g-3">
            {[
              "Lembaga Pendidikan Komputer pertama di Sumut yang bersertifikat internasional.",
              "Telah mendapatkan penilaian kinerja lembaga.",
              "Kursus & pelatihan berbasis dunia kerja (Kategori A).",
              "Dibimbing instruktur profesional, berpengalaman, dan kompeten; banyak yang bersertifikat (termasuk BNSP).",
              "Alumni berkesempatan bergabung menjadi instruktur/berkarier profesional.",
              "Biaya pelatihan bisa diangsur.",
              "Sistem pembelajaran disiplin & berorientasi dunia industri.",
              "Magang industri/instansi; dukungan penempatan & jejaring mitra.",
              "Seminar, sharing session, motivasi karier, dan job matching.",
              "Kerja sama luas dengan dunia usaha/industri, instansi, dan pemerintahan setempat.",
            ].map((t, i) => (
              <div key={i} className="col-md-6">
                <div className="d-flex align-items-start gap-2">
                  <span className="badge-soft-itc">★</span>
                  <span>{t}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FASILITAS (dari brosur) */}
      <section className="py-5 bg-light">
        <div className="container">
          <SectionTitle title="Fasilitas Pendidikan" />
          <div className="row g-3">
            {[
              "Ruang belajar nyaman, aman, sehat, kondusif, dan berdayaguna.",
              "Ruang full AC.",
              "Baju dinas harian & atribut; Almamater.",
              "1 peserta 1 komputer; modul pembelajaran.",
              "Peralatan praktik lengkap.",
              "Free Internet WiFi Hotspot Area, termasuk Self Learning.",
              "Parkiran aman; lingkungan diawasi (CCTV/satpam).",
              "Ruang sholat; ruang tunggu peserta & orang tua; ruang UKS.",
              "Front office dan pendidikan yang ramah tamah.",
              "ATK, ID Card, dan perlengkapan belajar standar.",
              "Peraturan lingkungan ‘Zero Tolerance’: bebas rokok, alkohol, narkoba, senjata tajam, dll.",
            ].map((t, i) => (
              <div key={i} className="col-md-6">
                <div className="d-flex align-items-start gap-2">
                  <span className="badge-soft-itc">✓</span>
                  <span>{t}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERI 4 FOTO */}
      <section className="py-5">
        <div className="container">
          <SectionTitle title="Suasana Kegiatan & Fasilitas" subtitle="Galeri program profesi" />
          <div className="row g-3">
            {[hero1, hero2, hero3, hero4].map((src, i) => (
              <div key={i} className="col-6 col-lg-3">
                <div className="ratio ratio-4x3 rounded-3 overflow-hidden shadow-sm">
                  <img src={src} alt={`Galeri ${i + 1}`} className="w-100 h-100 object-fit-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / INFORMASI PENDAFTARAN */}
      <section className="py-5 bg-light">
        <div className="container">
          <SectionTitle title="Informasi Pendaftaran" />
          <div className="border rounded-4 p-4 bg-white shadow-sm">
            <p className="mb-1">
              <strong>Lokasi Kampus:</strong> Jl. Padang Bulan No. 13 B–C, Rantauprapat, Kab. Labuhanbatu, Sumatera Utara
            </p>
            <p className="mb-4">
              <strong>Kontak Kantor:</strong> 0852 1880 3835
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a href="/kontak" className="btn btn-itc-custom d-flex align-items-center gap-2">
                <i className="bi bi-envelope-fill"></i>
                <span>Hubungi Kami</span>
              </a>
              <a
                href={waUrl}
                className="btn btn-wa-custom d-flex align-items-center gap-2 fw-semibold"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
                <span>Konsultasi via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <style>{`
    .btn-itc-custom {
      background-color: #0284C7;
      color: #fff;
      border: none;
      padding: 0.6rem 1.2rem;
      font-weight: 600;
      border-radius: 0.6rem;
      transition: all 0.25s ease;
    }
    .btn-itc-custom:hover {
      background-color: #0369A1;
      transform: translateY(-2px);
      box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
    }

    .btn-wa-custom {
      background-color: #25D366;
      color: #fff;
      border: none;
      padding: 0.6rem 1.2rem;
      border-radius: 0.6rem;
      transition: all 0.25s ease;
    }
    .btn-wa-custom:hover {
      background-color: #1ebe5d;
      transform: translateY(-2px);
      box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
    }

    .bi {
      font-size: 1.2rem;
    }
  `}</style>
      </section>


      {/* THEME (khusus halaman ini; pindahkan ke global jika sudah ada) */}
      <style>{`
        :root{
          --itc-primary: #0284C7;    /* sky blue dark */
          --itc-primary-700: #0369A1;/* hover */
          --itc-primary-800: #075985;/* darker text */
          --itc-soft: #E0F2FE;       /* soft blue */
        }

        /* Buttons */
        .btn-itc{
          background-color: var(--itc-primary);
          border-color: var(--itc-primary);
          color:#fff;
        }
        .btn-itc:hover{
          background-color: var(--itc-primary-700);
          border-color: var(--itc-primary-700);
          color:#fff;
        }

        /* Subtle blue badge for lists and highlights */
        .badge-soft-itc{
          display:inline-block;
          background-color: var(--itc-soft);
          color: var(--itc-primary-800);
          border: 1px solid rgba(2,132,199,.25);
          border-radius: 999px;
          padding: .3rem .6rem;
          font-weight: 600;
          line-height: 1;
          white-space: nowrap;
        }

        /* Blue alert (replace alert-success) */
        .alert-itc{
          background-color: var(--itc-soft);
          border-left: 4px solid var(--itc-primary);
          color: var(--itc-primary-800);
          padding: .9rem 1rem;
          border-radius: .5rem;
          box-shadow: 0 .25rem .5rem rgba(0,0,0,.04);
        }
      `}</style>
    </main>
  );
}
