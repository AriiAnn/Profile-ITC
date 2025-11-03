import React from "react";

export default function VisiMisi() {
  return (
    <main>
      {/* HERO */}
      <section className="py-5" style={{ backgroundColor: "#E0F2FE" }}>
        <div className="container py-3">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <h1 className="h2 fw-bold mb-2">Visi & Misi</h1>
              <p className="lead text-secondary mb-0" style={{ maxWidth: 900 }}>
                Arah dan tujuan strategis LKP Intermedia Training Center (ITC)
                untuk menghasilkan talenta digital yang kompeten, beretika, dan siap kerja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISI */}
      <section className="py-5">
        <div className="container">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h2 className="h5 fw-bold mb-3" style={{ color: "#0284C7" }}>
                Visi
              </h2>
              <p className="mb-0 text-muted fs-5">
                <strong>
                  Menjadi Lembaga Pendidikan berkualitas, menciptakan wirausaha yang sukses.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISI */}
      <section className="py-5" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container">
          <h2 className="h5 fw-bold mb-3" style={{ color: "#0284C7" }}>
            Misi
          </h2>
          <div className="row g-3">
            {[
              {
                t: "Menyiapkan sumber daya yang handal dibidang komputer baik instruktur maupun media pembelajaran yang sesuai dengan tuntutan zaman.",
              },
              {
                t: "Menjadi lembaga pendidikan berskala nasional, mengajarkan teknologi terapan yang bermanfaat langsung bagi masyarakat.",
              },
              {
                t: "Menjadi lembaga pendidikan yang membentuk manusia kerja cerdas, kerja keras, kerja tuntas, dan kerja ikhlas.",
              },
              {
                t: "Menjadi pusat pendidikan yang melayani lifelong learning dan menjadi pusat informasi teknologi bagi masyarakat.",
              },
              {
                t: "Menyelenggarakan pendidikan, penelitian, dan pengabdian kepada masyarakat yang relevan dengan kebutuhan masyarakat secara efektif dan efisien.",
              },
              {
                t: "Membentuk insan yang beretika, profesional, dan mengembangkan budaya pendidikan yang kondusif dan dinamis.",
              },
              {
                t: "Membina peserta didik untuk berkembang menjadi tenaga profesional di bidang teknologi informasi.",
              },
              {
                t: "Melakukan kerjasama kemitraan yang sinergis dengan berbagai pihak.",
              },
            ].map((m, i) => (
              <div className="col-md-6" key={i}>
                <div
                  className="p-4 rounded-3 h-100 bg-white shadow-sm border-start border-4"
                  style={{ borderColor: "#0284C7" }}
                >
                  <div className="fw-semibold mb-1">{m.t}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARGET HASIL */}
      <section className="py-5" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container">
          <h2 className="h5 fw-bold mb-3" style={{ color: "#0284C7" }}>
            Target Hasil
          </h2>
          <div className="row g-3">
            {[
              {
                t: "Siap Kerja",
                d: "Lulusan mampu mengerjakan tugas praktis dan siap ditempatkan di dunia kerja.",
              },
              {
                t: "Portofolio Nyata",
                d: "Setiap peserta memiliki karya atau portofolio yang dapat ditunjukkan.",
              },
              {
                t: "Etika & Komunikasi",
                d: "Lulusan berperilaku profesional dan komunikatif di tempat kerja.",
              },
              {
                t: "Peningkatan Karier",
                d: "Alumni merasakan peningkatan peluang kerja dan usaha setelah pelatihan.",
              },
            ].map((o, i) => (
              <div className="col-md-6" key={i}>
                <div className="p-4 rounded-3 h-100 bg-white shadow-sm border-start border-4"
                  style={{ borderColor: "#0284C7" }}>
                  <div className="fw-semibold">{o.t}</div>
                  <div className="text-muted mb-0">{o.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THEME STYLE */}
      <style>{`
        :root {
          --itc-primary: #0284C7;
          --itc-primary-700: #0369A1;
          --itc-soft: #E0F2FE;
        }

        .btn-itc {
          background-color: var(--itc-primary);
          border-color: var(--itc-primary);
          color: #fff;
        }

        .btn-itc:hover {
          background-color: var(--itc-primary-700);
          border-color: var(--itc-primary-700);
        }

        .btn-outline-itc {
          border-color: var(--itc-primary);
          color: var(--itc-primary);
        }

        .btn-outline-itc:hover {
          background-color: var(--itc-primary);
          color: #fff;
          border-color: var(--itc-primary);
        }
      `}</style>
    </main>
  );
}
