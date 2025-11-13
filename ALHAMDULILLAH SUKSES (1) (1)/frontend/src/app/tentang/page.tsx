import Image from "next/image";

const team = [
  { name: "Vana Prastha Sulthon Naillendra Agung", role: "Backend Developer & Deployment", photo: "/assets/team/athaa.webp" },
  { name: "Anas Wicaksono", role: "Frontend Developer", photo: "/assets/team/budi.webp" },
  { name: "Dea Kayla Putri Darusman", role: "Machine Learning Developer", photo: "/assets/team/citra.webp" },
  { name: "Muhammad Zaki Zain Fanuruddin Putra", role: "Data Analyst", photo: "/assets/team/dwi.webp" },
];

export default function TentangPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold drop-shadow-md">Tentang</h1>

      <section className="glass-4 p-4 rounded-2xl space-y-2 text-sm text-neutral-200/90 leading-relaxed">
        <p>
          <b>Dashboard SDGs Pemda</b> adalah web app untuk memantau capaian indikator SDGs daerah, lengkap dengan modul clustering otomatis, Smart Insight Card, dan chatbot LLM.
        </p>
      </section>

      <section className="glass-4 p-4 rounded-2xl">
        <h2 className="font-semibold mb-4 drop-shadow">Tim Pengembang</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((m) => (
            <div key={m.name} className="p-3 rounded-2xl bg-black/40 border border-white/10 text-center">
              <Image
                src={m.photo}
                alt={m.name}
                width={160}
                height={160}
                className="mx-auto rounded-full border border-white/20"
              />
              <p className="mt-3 font-semibold">{m.name}</p>
              <p className="text-xs text-neutral-300">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-4 p-4 rounded-2xl">
        <h2 className="font-semibold mb-3 drop-shadow">Fitur Utama Web App</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-neutral-200/90">
          <li className="bg-black/35 p-3 rounded-xl border border-white/10">
            🌍 <b>Monitoring SDGs 1–17:</b> Menampilkan capaian indikator tiap tujuan pembangunan berkelanjutan dengan visualisasi kartu dan peta berwarna sesuai palet resmi SDGs.
          </li>
          <li className="bg-black/35 p-3 rounded-xl border border-white/10">
            🤖 <b>Auto-ML Engine:</b> Sistem Machine Learning yang dapat direplikasi dan diperbarui otomatis setiap kali data baru masuk — menjaga hasil analisis tetap akurat dan relevan.
          </li>
          <li className="bg-black/35 p-3 rounded-xl border border-white/10">
            🧩 <b>Clustering Otomatis:</b> Model K-Means / K-Prototypes dijalankan terjadwal untuk memperbarui segmentasi wilayah berdasarkan data terkini, dengan hasil tersinkron langsung ke database Supabase.
          </li>
          <li className="bg-black/35 p-3 rounded-xl border border-white/10">
            💡 <b>Smart Insight Card:</b> Modul analisis otomatis yang menampilkan ringkasan tren, anomali, dan insight utama hasil pembaruan clustering — sehingga pengguna langsung mendapat konteks tanpa analisis manual.
          </li>
          <li className="bg-black/35 p-3 rounded-xl border border-white/10">
            💬 <b>TanyaSDGs (Chatbot LLM):</b> Asisten AI yang menjawab pertanyaan seputar indikator, definisi, dan kebijakan SDGs dengan basis dokumen lokal dan konteks daerah.
          </li>
          <li className="bg-black/35 p-3 rounded-xl border border-white/10">
            🗺️ <b>Visualisasi Real-Time:</b> Dashboard interaktif yang langsung menampilkan hasil clustering terbaru dan insight otomatis dari backend FastAPI.
          </li>
        </ul>
      </section>
    </div>
  );
}
