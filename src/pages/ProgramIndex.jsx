import React from "react";
import { Link } from "react-router-dom";
import regulerImg from "../assets/galeri2.jpeg"; // Program Reguler
import profesiImg from "../assets/profesi-4.jpeg"; // Program Profesi

export default function ProgramIndex() {
  return (
    <main>
      {/* HERO */}
      <section className="py-5" style={{ backgroundColor: "#e6f4ef"}}>
        <div className="container py-3 text-center">
          <h1 className="h2 fw-bold mb-2">Program ITC</h1>
          <p className="lead text-secondary mb-0" style={{ maxWidth: 900, margin: "0 auto" }}>
            Pilih jalur yang sesuai kebutuhanmu. Ringkasan tersedia di sini, dan untuk info lengkap
            silakan kunjungi halaman masing-masing program.
          </p>
        </div>
      </section>

      {/* DAFTAR PROGRAM */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Program Reguler */}
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm overflow-hidden rounded-4">
                <div
                  className="ratio ratio-16x9"
                  style={{
                    height: "230px",
                    overflow: "hidden",
                    backgroundColor: "#f1f5f9",
                  }}
                >
                  <img
                    src={regulerImg}
                    alt="Program Reguler"
                    className="w-100 h-100"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <div className="card-body">
                  <h3 className="h5 fw-bold mb-2 text-dark">Program Reguler</h3>
                  <p className="text-secondary mb-3">
                    Kelas fleksibel & full praktik: Administrasi Perkantoran, Desain Grafis,
                    dan Teknisi Komputer & Jaringan.
                  </p>
                  <ul className="small ps-3 mb-3 text-secondary">
                    <li>Mulai bulanan, 2–4x per minggu</li>
                    <li>1 peserta 1 komputer • Bersertifikat</li>
                    <li>WiFi, AC, modul, fasilitas lengkap</li>
                  </ul>
                  <div className="d-flex gap-2">
                    <Link to="/program/reguler" className="btn btn-success px-3 fw-semibold">
                      Lihat Detail
                    </Link>
                    {/* <Link
                      to="/kontak"
                      className="btn btn-outline-success px-3 fw-semibold"
                    >
                      Daftar / Konsultasi
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Program Profesi */}
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm overflow-hidden rounded-4">
                <div
                  className="ratio ratio-16x9"
                  style={{
                    height: "230px",
                    overflow: "hidden",
                    backgroundColor: "#f1f5f9",
                  }}
                >
                  <img
                    src={profesiImg}
                    alt="Program Profesi"
                    className="w-100 h-100"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <div className="card-body">
                  <h3 className="h5 fw-bold mb-2 text-dark">
                    Program Profesi (1 Tahun Siap Kerja)
                  </h3>
                  <p className="text-secondary mb-3">
                    10 bulan pendidikan + 2 bulan magang. Termasuk Uji Kompetensi.
                  </p>
                  <ul className="small ps-3 mb-3 text-secondary">
                    <li>Office • Desain Grafis (Corel/PS/Canva) • Videografi (CapCut)</li>
                    <li>Job-ready, jaringan mitra industri</li>
                    <li>“Jalur Cepat Dapat Kerja”</li>
                  </ul>
                  <div className="d-flex gap-2">
                    <Link to="/program/profesional" className="btn btn-success px-3 fw-semibold">
                      Lihat Detail
                    </Link>
                    {/* <Link
                      to="/kontak"
                      className="btn btn-outline-success px-3 fw-semibold"
                    >
                      Daftar / Konsultasi
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PERBANDINGAN SINGKAT */}
          <div className="table-responsive mt-5">
            <table className="table table-bordered align-middle shadow-sm">
              <thead className="table-success">
                <tr>
                  <th style={{ width: "30%" }}>Aspek</th>
                  <th>Program Reguler</th>
                  <th>Program Profesi 1 Tahun</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Durasi</td>
                  <td>Bulanan (fleksibel)</td>
                  <td>10 bln belajar + 2 bln magang</td>
                </tr>
                <tr>
                  <td>Fokus</td>
                  <td>Skill spesifik per bidang</td>
                  <td>Paket lengkap + kesiapan kerja</td>
                </tr>
                <tr>
                  <td>Sertifikasi</td>
                  <td>Sertifikat internal</td>
                  <td>Termasuk Uji Kompetensi</td>
                </tr>
                <tr>
                  <td>Output</td>
                  <td>Portofolio dasar–menengah</td>
                  <td>Portofolio kerja + pengalaman magang</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
