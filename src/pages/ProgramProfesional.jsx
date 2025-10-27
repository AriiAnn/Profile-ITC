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

export default function ProgramProfesional() {
  return (
    <main>
      {/* HERO */}
      <section className="py-5" style={{ backgroundColor: "#e6f4ef"}}>
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
                <span className="badge bg-success-subtle text-success-emphasis border border-success">
                  Termasuk Uji Kompetensi
                </span>
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
          <div className="alert alert-success mt-4 mb-0 border-0 shadow-sm">
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
                  <span className="badge bg-primary-subtle text-primary-emphasis">✓</span>
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
                  <span className="badge bg-success-subtle text-success-emphasis">★</span>
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
                  <span className="badge bg-info-subtle text-info-emphasis">✓</span>
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
          <div className="border rounded-3 p-3 bg-white shadow-sm">
            <p className="mb-1">
              <strong>Lokasi Kampus:</strong> Jl. Padang Bulan No. 13 B–C, Rantauprapat, Kab. Labuhanbatu, Sumatera Utara
            </p>
            <p className="mb-2">
              <strong>Kontak Kantor:</strong> 0852 1880 3835
            </p>
            <a href="/kontak" className="btn btn-success">
              Daftar / Konsultasi Program
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
