import React from "react";

// Ganti data di sini sesuai nama/foto asli
const pengurus = [
  {
    jabatan: "Ketua Yayasan",
    nama: "Nama Ketua Yayasan",
    foto: "https://picsum.photos/seed/ketua/600/400",
    periode: "Periode 2023–2027",
    deskripsi:
      "Memimpin arah kebijakan yayasan, memastikan tata kelola yang baik, serta sinergi program dengan kebutuhan masyarakat dan dunia usaha.",
    kontak: {
      email: "ketua@intermediajuyutama.ac.id",
      tel: "+62 812-xxxx-xxxx",
    },
  },
  {
    jabatan: "Direktur LKP",
    nama: "Nama Direktur",
    foto: "https://picsum.photos/seed/direktur/600/400",
    periode: "Periode 2023–2027",
    deskripsi:
      "Bertanggung jawab terhadap implementasi program pelatihan, mutu pembelajaran, dan pengembangan kurikulum terapan.",
    kontak: {
      email: "direktur@intermediajuyutama.ac.id",
      tel: "+62 813-xxxx-xxxx",
    },
  },

  // Tambahkan pengurus lain di bawah ini bila perlu
  // {
  //   jabatan: "Kepala Program",
  //   nama: "Nama Kepala Program",
  //   foto: "https://picsum.photos/seed/kapprog/600/400",
  //   periode: "Periode 2024–2028",
  //   deskripsi: "Mengelola operasional program pelatihan & evaluasi pembelajaran.",
  //   kontak: {
  //     email: "kapprog@intermediajuyutama.ac.id",
  //     tel: "+62 8xx-xxxx-xxxx",
  //   },
  // },
];

export default function Pengurus() {
  return (
    <main>
      {/* HERO */}
      <section
  className="py-5"
  style={{ backgroundColor: "#e6f4ef", marginTop: "1.5rem" }}
>

        <div className="container">
          <h1 className="h2 fw-bold mb-2">Pengurus Yayasan</h1>
          <p className="text-secondary mb-0" style={{ maxWidth: 820 }}>
            Struktur kepemimpinan yang mendukung tata kelola yayasan secara profesional
            dan memastikan mutu layanan pendidikan dan pelatihan berjalan optimal.
          </p>
        </div>
      </section>

      {/* DAFTAR PENGURUS */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {pengurus.map((p, i) => (
              <div className="col-md-6" key={i}>
                <div className="card border-0 shadow-sm h-100">
                  <div className="row g-0 h-100">
                    <div className="col-sm-5">
                      <img
                        src={p.foto}
                        alt={p.nama}
                        className="img-fluid h-100 w-100"
                        style={{ objectFit: "cover", minHeight: 240 }}
                      />
                    </div>
                    <div className="col-sm-7">
                      <div className="card-body d-flex flex-column">
                        <span className="badge rounded-pill mb-2" style={{ backgroundColor: "#047857", color: "#fff" }}>
                          {p.jabatan}
                        </span>
                        <h5 className="card-title mb-1">{p.nama}</h5>
                        <small className="text-muted mb-2">{p.periode}</small>
                        <p className="card-text text-muted" style={{ flexGrow: 1 }}>
                          {p.deskripsi}
                        </p>

                        {(p.kontak?.email || p.kontak?.tel) && (
                          <div className="mt-2 small">
                            {p.kontak?.email && (
                              <div className="text-muted">
                                Email:{" "}
                                <a href={`mailto:${p.kontak.email}`} className="text-decoration-none">
                                  {p.kontak.email}
                                </a>
                              </div>
                            )}
                            {p.kontak?.tel && (
                              <div className="text-muted">
                                Tel/WA:{" "}
                                <a href={`tel:${p.kontak.tel}`} className="text-decoration-none">
                                  {p.kontak.tel}
                                </a>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Kartu info tambahan (opsional) */}
            {/* <div className="col-12">
              <div className="alert alert-success border-0 shadow-sm mb-0">
                Ingin melihat bagan organisasi lengkap?{" "}
                <a href="/struktur" className="alert-link">
                  Lihat Struktur Organisasi
                </a>{" "}
                (jika tersedia).
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
