import React from "react";
import { FaClock } from "react-icons/fa";

// ⚠️ Sesuaikan dengan nama file di /src/assets (perhatikan huruf besar-kecil)
import logo from "../assets/logo.PNG";

// === Import foto lokal untuk galeri mini ===
import gal1 from "../assets/galeri2.jpeg";
import gal2 from "../assets/SARPRAS/gal6.jpg";
import gal3 from "../assets/SARPRAS/gal2.jpg";
import gal4 from "../assets/SARPRAS/gal3.jpg";
import { FaShieldAlt, FaAward, FaCheckCircle } from "react-icons/fa";
import isoo from "../assets/isoo.png";
import regulerImg from "../assets/galeri2.jpeg";
import profesiImg from "../assets/galeri1.jpeg";
import akreditasi from "../assets/akreditasi.png";

// Kumpulan foto galeri mini (lokal / bisa dicampur dengan URL online)
const GALERI_MINI = [ gal2, gal3, gal4 ,gal1];
// === Helper: Reveal on scroll (animasi muncul saat discroll) ===
function RevealOnScroll() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal-up");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}

// === Helper: CountTo (angka berjalan tanpa library) ===
function CountTo({ end, duration = 1000 }) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setVal(Math.floor(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);
  return <>{val.toLocaleString("id-ID")}</>;
}

// === Helper: StatCounters (baris statistik singkat) ===
function StatCounters() {
  const [start, setStart] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const items = [
    { label: "Alumni Terserap", value: 1200, suffix: "+", duration: 1100 },
    { label: "Instruktur Aktif", value: 12, suffix: "", duration: 1000 },
    // { label: "Kelas/Tahun", value: 35, suffix: "+", duration: 1050 },
    { label: "Kepuasan Peserta", value: 98, suffix: "%", duration: 1200 },
  ];

  return (
    <div className="container mb-4">
      <div ref={ref} className="row g-3 justify-content-center">
        {items.map((it, i) => (
          <div key={i} className="col-6 col-md-3 text-center reveal-up">
            <strong className="d-block display-6 fw-bold" style={{ letterSpacing: ".5px" }}>
              {start ? <CountTo end={it.value} duration={it.duration} /> : 0}
              {it.suffix}
            </strong>
            <small className="text-secondary">{it.label}</small>
          </div>
        ))}
      </div>
    </div>
  );
}


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
                    Sekilas ITC Business School
                  </h2>

                  <p className="text-muted mb-3">
                    ITC Business School adalah lembaga pendidikan dan pelatihan di bawah
                    naungan Yayasan Pendidikan Komputer Intermedia Jaya Utama yang berfokus
                    pada pengembangan kompetensi di bidang teknologi, bisnis, dan administrasi
                    modern. Kami hadir sebagai solusi bagi generasi muda yang ingin siap
                    menghadapi dunia kerja dengan keterampilan nyata dan sertifikasi resmi.
                  </p>

                  <p className="text-muted mb-3">
                    Di era persaingan global saat ini, ijazah saja tidak lagi cukup. Setiap
                    individu dituntut untuk kompeten, terampil, dan memiliki sertifikat
                    keahlian yang diakui. Melalui program unggulan seperti{" "}
                    <strong>Administrasi Perkantoran</strong>,{" "}
                    <strong>Teknik Komputer</strong>, <strong>Desain Grafis</strong>,{" "}
                    <strong>Digital Marketing</strong>, dan{" "}
                    <strong>Operator Komputer Muda</strong>, ITC Business School membantu
                    peserta didik menyesuaikan diri dengan kebutuhan industri masa kini.
                  </p>

                  <p className="text-muted mb-3">
                    Bagi lulusan baru atau pencari kerja yang masih bingung menentukan arah
                    karier, ITC Business School menjadi tempat terbaik untuk menemukan potensi
                    diri, meningkatkan keahlian, dan mempersiapkan masa depan yang lebih pasti.
                  </p>

                  {/* Badge / Highlight */}
                  <div className="d-flex flex-wrap gap-2 mb-2">
                    <span className="badge-itc">Praktik & Mini-Project</span>
                    <span className="badge-itc-dark">Link & Match</span>
                    <span className="badge-itc-soft">Jadwal Fleksibel</span>
                  </div>

                  {/* Hashtag / tagline */}
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {[
                      "#BelajarBerkaryaBerkarier",
                      "#SiapKerjaSiapUsaha",
                      "#GenerasiKompeten",
                      "#PelatihanKerjaBersertifikat",
                      "#LembagaPelatihanProfesional",
                      "#PendidikanBerkualitas",
                      "#SkillUntukMasaDepan",
                    ].map((tag) => (
                      <span key={tag} className="hashtag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href="/tentang" className="btn btn-itc text-white px-4 mt-3">
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
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="h4 fw-bold mb-4 text-center text-itc">Kegiatan di ITC</h2>

          <div id="carouselKegiatan" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner rounded-4 shadow-sm">

              {[
                [
                  {
                    img: gal1,
                    title: "Outbond",
                    desc: "Kegiatan outbond rutin setiap 3 bulan sekali untuk mempererat kebersamaan dan teamwork peserta ITC.",
                  },
                  {
                    img: gal2,
                    title: "Seminar Rutin",
                    desc: "Seminar bersama tokoh usaha atau motivator untuk menumbuhkan semangat dan wawasan kewirausahaan peserta.",
                  },
                ],
                [
                  {
                    img: gal1,
                    title: "Program Jumat Berkah",
                    desc: "Kegiatan berbagi nasi dan minuman setiap Jumat sebagai bentuk kepedulian sosial terhadap masyarakat sekitar.",
                  },
                  {
                    img: gal2,
                    title: "Wisuda Peserta ITC",
                    desc: "Momen sakral kelulusan peserta setelah menyelesaikan program pelatihan dan uji kompetensi.",
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
          {/* Judul + Link "Lihat selengkapnya" */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h4 fw-bold mb-0 text-itc">Testimoni Alumni</h2>
            <a href="/testimoni" className="small link-itc">Lihat selengkapnya →</a>
          </div>

          <div id="carouselTestimoni" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
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

          {/* Tombol besar opsional di bawah carousel */}
          <div className="text-center mt-3">
            <a href="/testimoni" className="btn btn-outline-itc">Lihat semua testimoni</a>
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




      {/* === KENAPA HARUS PERCAYA KAMI (Fokus Akreditasi & ISO) === */}
      <section className="py-5 bg-light" id="trust">
        {/* Komponen helper untuk animasi scroll & counter */}
        <RevealOnScroll />
        <StatCounters />

        <div className="container text-center">
          <h2 className="h4 fw-bold mb-2 text-itc reveal-up">
            Kenapa Harus Percaya Kami?
          </h2>
          <p
            className="text-muted mb-5 reveal-up"
            style={{ maxWidth: 760, margin: "0 auto" }}
          >
            Akreditasi resmi & sertifikasi ISO memastikan mutu pembelajaran
            yang konsisten, terukur, dan profesional di setiap program ITC
            Business School.
          </p>

          <div className="row justify-content-center g-4">
            {/* Card: Terakreditasi A */}
            <div className="col-md-5 reveal-up">
              <div className="trust-card p-4 bg-white rounded-4 shadow-sm h-100 border-start border-success border-4">
                <div className="trust-media mb-3">
                  <img
                    src={akreditasi}
                    alt="Sertifikat Akreditasi ITC"
                    className="trust-img"
                  />
                </div>

                <h5 className="fw-bold text-itc mb-2 d-flex align-items-center justify-content-center gap-2">
                  <FaShieldAlt aria-hidden /> Terakreditasi “A”
                </h5>
                <p className="text-muted mb-3">
                  Penjaminan mutu pembelajaran dan pengajar profesional sesuai
                  standar lembaga pemerintah, melalui evaluasi berkala dan
                  instrumen penilaian yang terukur.
                </p>

                <div className="d-flex flex-wrap justify-content-center gap-2">
                  <span className="badge-soft">
                    <FaCheckCircle /> Kurikulum Terstruktur
                  </span>
                  <span className="badge-soft">
                    <FaCheckCircle /> Evaluasi Berkala
                  </span>
                </div>
              </div>
            </div>

            {/* Card: Sertifikasi ISO */}
            <div className="col-md-5 reveal-up">
              <div className="trust-card p-4 bg-white rounded-4 shadow-sm h-100 border-start border-info border-4">
                <div className="trust-media mb-3">
                  <img
                    src={isoo}
                    alt="Logo ISO"
                    className="trust-img"
                  />
                </div>

                <h5 className="fw-bold text-itc mb-2 d-flex align-items-center justify-content-center gap-2">
                  <FaAward aria-hidden /> Sertifikasi ISO
                </h5>
                <p className="text-muted mb-3">
                  Proses lembaga terdokumentasi & konsisten, mengacu standar
                  manajemen mutu internasional sehingga layanan pelatihan tetap
                  stabil dan terus ditingkatkan.
                </p>

                <div className="d-flex flex-wrap justify-content-center gap-2">
                  <span className="badge-soft">
                    <FaCheckCircle /> SOP & Audit Internal
                  </span>
                  <span className="badge-soft">
                    <FaCheckCircle /> Perbaikan Berkelanjutan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Style khusus section ini (aman ditempel di sini) */}
        <style>{`
          .text-itc{
            color: #0284C7;
          }

          /* Reveal on scroll */
          .reveal-up{
            opacity:0;
            transform: translateY(16px);
            transition: all .6s ease;
          }
          .reveal-up.show{
            opacity:1;
            transform: translateY(0);
          }

          /* Kartu utama */
          .trust-card{
            position:relative;
            border-radius:1rem;
            transition: transform .25s ease, box-shadow .25s ease;
          }
          .trust-card:hover{
            transform: translateY(-4px);
            box-shadow: 0 1rem 2rem rgba(2,132,199,.12);
          }

          /* Wrapper logo */
          .trust-media{
            display:flex;
            justify-content:center;
            align-items:center;
            min-height: 200px;
          }

          /* Ukuran gambar diseragamkan */
          .trust-img{
            width: 180px;
            height: 180px;
            object-fit: contain;
            animation: float 6s ease-in-out infinite;
            filter: drop-shadow(0 6px 14px rgba(0,0,0,.08));
          }

          @keyframes float{
            0%{ transform: translateY(0px); }
            50%{ transform: translateY(-6px); }
            100%{ transform: translateY(0px); }
          }

          /* Badge soft (chip kecil biru lembut) */
          .badge-soft{
            display:inline-flex;
            align-items:center;
            gap:.4rem;
            padding:.45rem .75rem;
            border-radius:999px;
            background:#E0F2FE;
            color:#075985;
            font-weight:600;
            font-size:.85rem;
            border:1px solid rgba(2,132,199,.2);
          }

          /* Responsif: kecilkan logo di HP */
          @media (max-width: 576px){
            .trust-img{
              width: 140px;
              height: 140px;
            }
            .trust-media{
              min-height: 160px;
            }
          }
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
          .hashtag-pill{
  font-size: .75rem;
  padding: .2rem .6rem;
  border-radius: 999px;
  background-color: rgba(2,132,199,.06);
  color: #0369A1;
  border: 1px dashed rgba(2,132,199,.35);
}

      `}</style>
    </main>
  );
}
