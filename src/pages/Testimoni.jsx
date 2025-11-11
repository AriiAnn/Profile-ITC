// src/pages/Testimoni.jsx
import React from "react";
import suci from "../assets/testimoni/suci.jpeg";
import dea from "../assets/testimoni/dea.jpeg";
import tuah from "../assets/testimoni/tuah.jpeg";
import febriela from "../assets/testimoni/febriela.jpeg";
import mahjiro from "../assets/testimoni/mahjiro.jpeg";
import nurhalimah from "../assets/testimoni/nurhalimah.jpeg";
import sri from "../assets/testimoni/sri.jpeg";
import winda from "../assets/testimoni/winda.jpeg"; // pastikan nama file benar

const DATA_TESTIMONI = [
  {
    nama: "Winda Karunia Tanjung",
    kerja: "Bekerja di Percetakan Jaya Utama Grafika",
    img: winda,
    kutipan:
      "Belajar di ITC Business School itu bener-bener ngebantu banget. Materinya mudah dipahami, instrukturnya ramah, sudah terakreditasi, dan program kursusnya cocok buat nambah skill. Pas banget buat yang pengen upgrade diri. Terima kasih, dan sukses selalu ITC Business School!",
  },
  {
    nama: "Mahjuro",
    kerja: "Bekerja di LKP. Intermedia Training Center",
    img: mahjiro,
    kutipan:
      "Awalnya saya sama sekali tidak mengerti tentang komputer, semenjak bergabung di ITC alhamdulillah sekarang saya sudah memiliki skill komputer yang sangat bermanfaat dan bahkan mengubah kehidupan saya menjadi lebih baik. Saya sangat senang dan berterimakasih kepada instruktur atas bimbingan dan ilmu yang telah saya peroleh selama ini. Berkat pelatihan ini saya mendapatkan pengalaman yang sangat berharga dan membuka banyak kesempatan baru bagi saya. Instruktur juga ramah dan ceria. Berkat ilmu yang saya dapatkan, sekarang saya bisa mengajarkan komputer kepada mereka yang ingin belajar dan menjadi lebih baik lagi. Semoga ITC sukses selalu.",
  },
  {
    nama: "Nurhalimah Tusakdiah",
    kerja: "Bekerja di Home Beauty",
    img: nurhalimah,
    kutipan:
      "Saya Nurhalimah Tusakdiah, alumni ITC Business School. Saya merasa sangat puas pernah belajar di ITC, instruktur sangat profesional dan sangat ramah. Pengalaman belajar di ITC ini sangatlah menyenangkan. Terima kasih ITC Business School sudah pernah mengajarkan saya komputer.",
  },
  {
    nama: "Tuah Purnama Wati",
    kerja: "Bekerja di FIF Group Negeri Lama",
    img: tuah,
    kutipan:
      "Berkat saya kursus komputer di ITC, Alhamdulillah saya sudah mendapatkan jenjang karir yang baik dengan adanya pelatihan yang terbaik yang diajarkan oleh instruktur yang ramah dan baik hati. Saya kursus komputer di ITC Profesi 1 Tahun Siap Kerja, 10 bulan kursus 2 bulan magang di kantor FIF GROUP Rantauprapat. Alhamdulillah dalam pelatihan ini saya dapat mengasah kemampuan khususnya di bidang digital marketing agar siap bekerja di lapangan. Terimakasih ITC Business School.",
  },
  {
    nama: "Dea Adinda",
    kerja: "Bekerja di Aisyah Hijab Collection B. Batu",
    img: dea,
    kutipan:
      "Haii everyone! Saya Dea Adinda dari Alumni ITC Business School. Berkat saya kursus komputer di ITC saya mendapatkan potensi atau arah jenjang karir yang sangat baik dari adanya pelatihan ini dengan instruktur yang ramah, berdedikasi dan baik hati. Alhamdulillah sekarang saya sudah mendapatkan pekerjaan. Berkat ITC Profesi 1 Tahun Siap Kerja, pelatihan 10 bulan dan 2 bulan magang. Saya sangat berterimakasih kepada ITC karena sudah memberikan ilmu, wawasan dan kemampuan untuk menjadikan saya lebih siap bekerja di lapangan. Terimakasih ITC Business School, Jaya Jaya Jaya.",
  },
  {
    nama: "Suci Ramadhani",
    kerja: "Bekerja di PT. Istana Deli Kencana",
    img: suci,
    kutipan:
      "Hallo semuanya, saya Suci Ramadhani dari Alumni ITC Business School. Berkat saya kursus komputer di ITC, Alhamdulillah saya sudah mendapatkan jenjang karir yang baik dengan adanya pelatihan yang terbaik yang diajarkan oleh instruktur yang ramah dan baik hati. Saya kursus komputer di ITC Profesi 1 Tahun Siap Kerja, 10 bulan kursus 2 bulan magang di kantor PLN UP3 Rantauprapat. Alhamdulillah dalam pelatihan ini saya dapat mengasah kemampuan di bidang keuangan dan juga administrasi. Terimakasih ITC Business School.",
  },
  {
    nama: "Febriela Wida Br. Pasaribu",
    kerja: "Bekerja di PT. Perawang Agro Sejahtera, Tualang, Siak – Riau",
    img: febriela,
    kutipan:
      "Halo semua, saya Febriela Wida Br Pasaribu. Saya alumni dari ITC Business School. Alhamdulillah setelah mengikuti pelatihan 1 Tahun Siap Kerja di ITC saya mempunyai kemampuan di bidang komputer dan mendapatkan pengalaman dari magang selama 2 bulan. Setelah saya magang, saya mempunyai keberanian untuk melamar di berbagai pekerjaan sampai akhirnya saya keterima di sebuah PT. Perusahaan. Terimakasih buat bapak/ibu yang sudah sabar dalam melatih kami.",
  },
  {
    nama: "Sri Fadilla Hutahean",
    kerja: "Bekerja di Royal Permata Hotel",
    img: sri,
    kutipan:
      "Halo semuanya, saya Sri Fadilla Hutahean dari alumni ITC Business School. Alhamdulillah saya akhirnya mendapatkan jenjang karir yang sangat bagus dan baik. Sebelumnya saya kursus di ITC, di sana saya diajarkan dengan pelatihan terbaik oleh instruktur yang ramah dan baik. Saya kursus komputer di ITC Profesi 1 Tahun Siap Kerja, 2 bulan saya magang di Kantor Bappeda Kotapinang. Alhamdulillah saya di sana diajarkan sebaik mungkin dan mendapatkan ilmu yang sangat baik. Terimakasih ITC Business School.",
  },
];

export default function Testimoni() {
  return (
    <main>
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-4">
            <h1 className="h3 fw-bold text-itc mb-2">Testimoni Alumni</h1>
            <p className="text-muted" style={{ maxWidth: 760, margin: "0 auto" }}>
              Cerita nyata dari alumni kami yang sudah merasakan manfaat belajar di ITC.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {DATA_TESTIMONI.map((t, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <div className="card border-0 shadow-sm h-100 text-center p-3 alumni-card">
                  <div
                    className="mx-auto mb-3 rounded-4 overflow-hidden shadow-sm"
                    style={{ width: 200, height: 260 }}
                  >
                    <img
                      src={t.img}
                      alt={t.nama}
                      className="w-100 h-100 object-fit-cover"
                      style={{ borderRadius: "12px" }}
                    />
                  </div>
                  <h6 className="fw-bold mb-0">{t.nama}</h6>
                  <small className="text-muted d-block mb-2">{t.kerja}</small>
                  <p className="small text-secondary fst-italic px-3 mb-0">“{t.kutipan}”</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .alumni-card {
            transition: transform 0.25s ease, box-shadow 0.25s ease;
            border-radius: 1rem;
          }
          .alumni-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 0.75rem 1.25rem rgba(0,0,0,0.08);
          }
          .text-itc { color: var(--itc-primary); }
        `}</style>
      </section>
    </main>
  );
}
