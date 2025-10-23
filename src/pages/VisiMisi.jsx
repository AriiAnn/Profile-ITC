import React from "react";

export default function VisiMisi() {
  return (
    <main>
      {/* HERO */}
      <section className="py-5" style={{ backgroundColor: "#e6f4ef" }}>
        <div className="container py-3">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <h1 className="h2 fw-bold mb-2">Visi & Misi</h1>
              <p className="lead text-secondary mb-0" style={{ maxWidth: 900 }}>
                Arah dan tujuan strategis LKP Intermedia Training Center (ITC)
                untuk menghasilkan talenta digital yang kompeten, beretika, dan siap kerja.
              </p>
            </div>
            {/* <div className="col-lg-4 text-lg-end">
              <a
                href="/program"
                className="btn text-white me-2"
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
            </div> */}
          </div>
        </div>
      </section>

      {/* VISI */}
      <section className="py-5">
        <div className="container">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h2 className="h5 fw-bold mb-3" style={{ color: "#047857" }}>
                Visi
              </h2>
              <p className="mb-0 text-muted fs-5">
                <strong>
                  Menjadi lembaga kursus unggulan yang melahirkan talenta digital
                  kompeten, berkarakter, dan relevan dengan kebutuhan industri.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISI */}
      <section className="py-5" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <h2 className="h5 fw-bold mb-3" style={{ color: "#047857" }}>
            Misi
          </h2>
          <div className="row g-3">
            {[
              {
                t: "Pembelajaran Terapan",
                d: "Menerapkan kurikulum berorientasi praktik, mini-project, dan portofolio.",
              },
              {
                t: "Pembimbingan Karier",
                d: "Menyediakan pendampingan karier, simulasi interview, dan penulisan CV/LinkedIn.",
              },
              {
                t: "Kemitraan Industri",
                d: "Membangun kolaborasi dengan sekolah, UMKM, dan perusahaan untuk link & match.",
              },
              {
                t: "Kedisiplinan & Etos Kerja",
                d: "Menanamkan nilai integritas, tanggung jawab, dan komunikasi profesional.",
              },
              {
                t: "Aksesibel & Adaptif",
                d: "Menyediakan jadwal fleksibel dan pembaruan materi sesuai tren teknologi.",
              },
              {
                t: "Mutu Berkelanjutan",
                d: "Melakukan evaluasi rutin terhadap pengajaran, fasilitas, dan layanan peserta.",
              },
            ].map((m, i) => (
              <div className="col-md-6" key={i}>
                <div className="p-4 rounded-3 h-100 bg-white shadow-sm border-start border-4"
                     style={{ borderColor: "#047857" }}>
                  <div className="fw-semibold mb-1">{m.t}</div>
                  <div className="text-muted mb-0">{m.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* TARGET HASIL (OUTCOMES) */}
      <section className="py-5" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <h2 className="h5 fw-bold mb-3" style={{ color: "#047857" }}>
            Target Hasil
          </h2>
          <div className="row g-3">
            {[
              { t: "Siap Kerja", d: "Lulusan mampu mengerjakan tugas praktis dan siap ditempatkan." },
              { t: "Portofolio Nyata", d: "Setiap peserta memiliki karya/portofolio yang dapat ditunjukkan." },
              { t: "Etika & Komunikasi", d: "Lulusan berperilaku profesional dan komunikatif di tempat kerja." },
              { t: "Peningkatan Karier", d: "Alumni merasakan peningkatan peluang kerja/usaha setelah pelatihan." },
            ].map((o, i) => (
              <div className="col-md-6" key={i}>
                <div className="p-4 rounded-3 h-100 bg-white shadow-sm">
                  <div className="fw-semibold">{o.t}</div>
                  <div className="text-muted mb-0">{o.d}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <a
              href="/program"
              className="btn text-white me-2"
              style={{ backgroundColor: "#047857" }}
            >
              Jelajahi Program
            </a>
            {/* <a
              href="/kontak"
              className="btn btn-outline-success"
              style={{ borderColor: "#047857", color: "#047857" }}
            >
              Konsultasi
            </a> */}
          </div>
        </div>
      </section>
    </main>
  );
}
