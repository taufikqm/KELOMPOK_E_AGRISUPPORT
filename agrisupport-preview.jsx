import { useState } from "react";

/* ─── SIDEBAR MENU ─── */
const menuItems = [
  { key: "dashboard", label: "Dashboard", icon: "⊞" },
  { key: "wilayah", label: "Wilayah Lahan", icon: "📍" },
  { key: "cuaca", label: "Cuaca & Prediksi", icon: "☁️" },
  { key: "waktu-tanam", label: "Waktu Tanam", icon: "📅" },
  { key: "peta-risiko", label: "Peta Risiko", icon: "🗺️" },
  { key: "input-kondisi", label: "Input Kondisi", icon: "✏️" },
  { key: "riwayat", label: "Riwayat Lahan", icon: "🕐" },
  { key: "insight", label: "Insight Historis", icon: "📊" },
];

/* ─── LAYOUT ─── */
function Layout({ children, activePage, onNav, title, badge }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans overflow-hidden text-sm">
      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ${collapsed ? "w-16" : "w-56"} shrink-0`}
      >
        <div className="h-14 flex items-center justify-between px-3 border-b border-gray-100">
          {!collapsed && (
            <div>
              <div className="font-extrabold text-[#2D5A27] text-base leading-none">AgriSupport</div>
              <div className="text-[9px] text-gray-400 tracking-widest uppercase mt-0.5">Smart Farming</div>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-[#2D5A27] ml-auto"
          >
            {collapsed ? "»" : "«"}
          </button>
        </div>
        <nav className="flex-1 px-2 py-3 space-y-0.5 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => onNav(item.key)}
              className={`flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg text-[12px] font-medium transition-all ${
                activePage === item.key
                  ? "bg-[#2D5A27] text-white"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              } ${collapsed ? "justify-center" : ""}`}
            >
              <span className="text-base shrink-0">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
        <div className="px-2 py-3 border-t border-gray-100 space-y-0.5">
          <button className="flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg text-[12px] text-gray-500 hover:bg-gray-50">
            <span className="text-base">⚙️</span>
            {!collapsed && "Pengaturan"}
          </button>
          <button className="flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg text-[12px] text-red-500 hover:bg-red-50">
            <span className="text-base">🚪</span>
            {!collapsed && "Keluar"}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-5 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-bold text-gray-800">{title}</span>
            {badge && (
              <span className="px-2 py-0.5 rounded-full bg-[#2D5A27]/10 text-[#2D5A27] text-[10px] font-bold">
                {badge}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-[12px] font-bold text-gray-800">Taufik</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-wide">Petani</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#2D5A27]/10 flex items-center justify-center border border-[#2D5A27]/20 text-[#2D5A27]">
              👤
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

/* ─── PAGE: DASHBOARD ─── */
function Dashboard({ onNav }) {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-slate-800">Selamat Datang, Taufik! 👨‍🌾</h1>
        <p className="text-slate-400 mt-1">Berikut ringkasan aktivitas pertanian Anda hari ini.</p>
      </div>
      <div className="grid grid-cols-3 gap-5 mb-8">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-[#3D6E42]/10 p-3 rounded-xl text-xl">📍</div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase">Wilayah Kelola</p>
            <p className="text-xl font-black text-slate-800">Aktif</p>
          </div>
        </div>
        <button
          onClick={() => onNav("input-kondisi")}
          className="bg-[#3D6E42] p-5 rounded-2xl shadow-md flex items-center gap-4 hover:scale-[1.02] transition-transform text-left"
        >
          <div className="bg-white/10 p-3 rounded-xl text-xl">➕</div>
          <div>
            <p className="text-xs font-bold text-white/70 uppercase">Tindakan Cepat</p>
            <p className="text-lg font-black text-white">Input Kondisi Baru</p>
          </div>
        </button>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-blue-500/10 p-3 rounded-xl text-xl">🕐</div>
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase">Update Terakhir</p>
            <p className="text-lg font-bold text-slate-800">Hari Ini</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Siap Memulai?</h3>
        <p className="text-slate-500 mb-5 leading-relaxed">
          AgriSupport membantu Anda memantau kondisi lahan secara presisi. Mulailah dengan mendaftarkan
          wilayah lahan Anda, kemudian lakukan observasi rutin untuk mendapatkan analisis risiko dan
          rekomendasi tindakan yang akurat.
        </p>
        <button
          onClick={() => onNav("wilayah")}
          className="text-[#3D6E42] font-bold hover:underline flex items-center gap-2"
        >
          Kelola Wilayah →
        </button>
      </div>
    </div>
  );
}

/* ─── PAGE: WILAYAH LAHAN ─── */
function WilayahLahan() {
  const areas = [
    { id: 1, name: "Blok A - Padi", soil_type: "Aluvial", area_size: 2.5, location_name: "Karawang Barat" },
    { id: 2, name: "Blok B - Jagung", soil_type: "Latosol", area_size: 1.8, location_name: "Subang Utara" },
    { id: 3, name: "Blok C - Kedelai", soil_type: "Andosol", area_size: 3.2, location_name: "Cianjur Selatan" },
  ];
  const [selected, setSelected] = useState(1);
  const area = areas.find((a) => a.id === selected);

  return (
    <div className="flex gap-5 p-5 h-full">
      {/* Left panel */}
      <div className="w-72 shrink-0 flex flex-col gap-3">
        <div className="flex items-center justify-between mb-1">
          <h2 className="font-bold text-gray-800 text-sm">Wilayah Pertanian Anda</h2>
          <button className="bg-[#2D5A27] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg">+ Tambah</button>
        </div>
        {areas.map((a) => (
          <div
            key={a.id}
            onClick={() => setSelected(a.id)}
            className={`bg-white rounded-xl border p-4 cursor-pointer transition-all ${
              selected === a.id ? "border-[#2D5A27] ring-1 ring-[#2D5A27]/20" : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-bold text-gray-800 text-[13px]">{a.name}</p>
                <p className="text-[11px] text-gray-500 mt-0.5">{a.location_name}</p>
              </div>
              <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-bold">{a.soil_type}</span>
            </div>
            <p className="text-[11px] text-[#2D5A27] font-bold mt-2">{a.area_size} Ha</p>
          </div>
        ))}
      </div>

      {/* Right panel - detail */}
      <div className="flex-1 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="h-48 bg-gradient-to-br from-[#1a3a1a] to-[#2D5A27] flex items-center justify-center relative">
          <div className="text-white/20 text-8xl">🗺️</div>
          <div className="absolute bottom-4 left-4">
            <span className="bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full">
              📍 {area?.location_name}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-extrabold text-gray-800 mb-4">{area?.name}</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["Jenis Tanah", area?.soil_type],
              ["Luas Lahan", `${area?.area_size} Hektar`],
              ["Lokasi", area?.location_name],
              ["Status", "Aktif"],
            ].map(([k, v]) => (
              <div key={k} className="bg-gray-50 rounded-xl p-3">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">{k}</p>
                <p className="text-[13px] font-bold text-gray-800 mt-1">{v}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-5">
            <button className="flex-1 py-2.5 bg-[#2D5A27] text-white rounded-xl text-[12px] font-bold hover:bg-[#234a1f]">
              Input Kondisi
            </button>
            <button className="px-4 py-2.5 border border-gray-200 text-gray-600 rounded-xl text-[12px] font-bold hover:bg-gray-50">
              Edit
            </button>
            <button className="px-4 py-2.5 border border-red-200 text-red-500 rounded-xl text-[12px] font-bold hover:bg-red-50">
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── PAGE: INPUT KONDISI ─── */
function InputKondisi({ onNav }) {
  const [form, setForm] = useState({
    area: "", soil_moisture: "", water_puddle: "", crop_condition: "", pest: "", disease: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const options = {
    soil_moisture: ["Kering", "Normal", "Lembab", "Sangat Basah"],
    water_puddle: ["Tidak Ada", "Sedikit", "Sedang", "Banyak"],
    crop_condition: ["Kritis", "Kurang Baik", "Baik", "Sangat Baik"],
    pest: ["Tidak Ada", "Ringan", "Sedang", "Berat"],
    disease: ["Tidak Ada", "Ringan", "Sedang", "Berat"],
  };

  const ready = form.area && form.soil_moisture && form.water_puddle && form.crop_condition && form.pest && form.disease;

  if (submitted)
    return (
      <div className="max-w-2xl mx-auto p-8 text-center">
        <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-10">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-xl font-black text-emerald-800 mb-2">Observasi Berhasil Disimpan!</h2>
          <p className="text-emerald-600 mb-6">Data sedang divalidasi dengan data cuaca Open-Meteo.</p>
          <button onClick={() => onNav("analisis")} className="bg-[#3D6E42] text-white px-8 py-3 rounded-xl font-black">
            Lihat Analisis Risiko →
          </button>
        </div>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-6 pb-20">
      <h1 className="text-2xl font-extrabold text-[#1a2f24] mb-1">Observasi Lapangan</h1>
      <p className="text-gray-500 mb-6 text-sm">Catat kondisi aktual lahan untuk analisis risiko yang akurat.</p>

      <div className="space-y-4">
        {/* Pilih Lahan */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <h3 className="text-[12px] font-bold text-gray-700 uppercase tracking-wide mb-3">Informasi Dasar</h3>
          <select
            value={form.area}
            onChange={(e) => set("area", e.target.value)}
            className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#3D6E42]"
          >
            <option value="">Pilih Lahan...</option>
            <option value="1">Blok A - Padi (Aluvial)</option>
            <option value="2">Blok B - Jagung (Latosol)</option>
            <option value="3">Blok C - Kedelai (Andosol)</option>
          </select>
        </div>

        {[
          { key: "soil_moisture", title: "Kelembapan Tanah", opts: options.soil_moisture },
          { key: "water_puddle", title: "Genangan Air", opts: options.water_puddle },
          { key: "crop_condition", title: "Kondisi Tanaman", opts: options.crop_condition },
          { key: "pest", title: "Indikasi Hama", opts: options.pest },
          { key: "disease", title: "Indikasi Penyakit", opts: options.disease },
        ].map(({ key, title, opts }) => (
          <div key={key} className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
            <h3 className="text-[12px] font-bold text-gray-700 uppercase tracking-wide mb-3">{title}</h3>
            <div className="grid grid-cols-4 gap-2">
              {opts.map((o) => (
                <button
                  key={o}
                  disabled={!form.area}
                  onClick={() => set(key, o)}
                  className={`py-2.5 rounded-xl border text-[12px] font-medium transition-all ${
                    !form.area
                      ? "opacity-40 cursor-not-allowed border-gray-100 bg-gray-50 text-gray-400"
                      : form[key] === o
                      ? "border-[#3D6E42] bg-[#EAF2ED] text-[#3D6E42] font-bold"
                      : "border-gray-200 bg-white text-gray-600 hover:border-[#3D6E42]/40"
                  }`}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-6">
        {!form.area && <p className="text-[11px] font-bold text-amber-600 mr-4 self-center">Pilih lahan terlebih dahulu</p>}
        <button
          disabled={!ready}
          onClick={() => setSubmitted(true)}
          className="px-10 py-4 text-[14px] font-extrabold text-white bg-[#3D6E42] rounded-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:bg-[#2b502f] transition-all"
        >
          Simpan Observasi
        </button>
      </div>
    </div>
  );
}

/* ─── PAGE: ANALISIS RISIKO ─── */
function AnalisisRisiko({ onNav }) {
  const risk = { drought: 65, puddle: 78, disease: 82, overall: 75, readiness: 25 };

  function RiskCircle({ score }) {
    const color = score > 70 ? "#ef4444" : score > 40 ? "#f59e0b" : "#22c55e";
    const label = score > 70 ? "RISIKO TINGGI" : score > 40 ? "RISIKO SEDANG" : "RISIKO RENDAH";
    const radius = 56;
    const circ = 2 * Math.PI * radius;
    const offset = circ - (score / 100) * circ;
    return (
      <div className="flex flex-col items-center w-32">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg className="absolute w-32 h-32 -rotate-90" viewBox="0 0 130 130">
            <circle cx="65" cy="65" r={radius} stroke="#f1f5f9" strokeWidth="10" fill="transparent" />
            <circle cx="65" cy="65" r={radius} stroke={color} strokeWidth="10" fill="transparent"
              strokeDasharray={circ} strokeDashoffset={offset} />
          </svg>
          <span className="text-2xl font-black text-slate-800 z-10">{score}%</span>
        </div>
        <div className={`mt-3 px-3 py-1.5 rounded-full text-[10px] font-black text-white uppercase tracking-wide ${
          score > 70 ? "bg-red-500" : score > 40 ? "bg-amber-500" : "bg-green-500"}`}>{label}</div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 pb-20">
      <h1 className="text-2xl font-black text-slate-800 mb-1">Analisis Cerdas AgriSupport</h1>
      <p className="text-slate-500 mb-7 text-sm">Data real-time cuaca & observasi diolah dengan algoritma risiko.</p>

      <div className="flex gap-5 mb-8">
        <div className="flex-1 bg-[#f8fafc] border border-slate-200 rounded-3xl p-8 shadow-sm">
          <div className="flex items-center gap-10">
            <RiskCircle score={risk.overall} />
            <div>
              <h3 className="text-xl font-black text-slate-800 mb-2">Status Risiko Keseluruhan</h3>
              <p className="text-slate-500 leading-relaxed text-sm mb-4">
                Sistem mendeteksi <strong>potensi genangan</strong> dan <strong>risiko Blas & Busuk Akar</strong> tinggi
                pada tanah Aluvial akibat curah hujan 18mm. Fokus utama: mitigasi drainase.
              </p>
              <div className="flex gap-3">
                <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-2xl text-[12px] font-bold text-slate-700">
                  Keamanan: Menurun
                </span>
                <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-2xl text-[12px] font-bold text-slate-700">
                  Tren: Meningkat
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-56 bg-[#f0f4f0] border border-[#3D5A3D]/20 rounded-3xl p-6 flex flex-col items-center justify-center text-center">
          <div className="text-3xl mb-3">⚡</div>
          <h3 className="font-extrabold text-slate-800 mb-2">Kesiapan Lahan</h3>
          <div className="w-full bg-white/50 h-3 rounded-full overflow-hidden border border-[#3D5A3D]/10 mb-2">
            <div className="h-full bg-[#3d5a3d] rounded-full" style={{ width: `${risk.readiness}%` }} />
          </div>
          <span className="text-[11px] font-black text-slate-500 tracking-wider uppercase">{risk.readiness}% Siap Mandiri</span>
        </div>
      </div>

      <h3 className="text-lg font-black text-slate-800 mb-5">Indikator Detail</h3>
      <div className="grid grid-cols-3 gap-5 mb-8">
        {[
          { title: "Risiko Kekeringan", score: risk.drought, desc: "Kelembapan tanah rendah pada Aluvial.", icon: "☀️" },
          { title: "Risiko Genangan", score: risk.puddle, desc: "Curah hujan 18mm terdeteksi API.", icon: "💧" },
          { title: "Risiko Blas & Busuk Akar", score: risk.disease, desc: "Aluvial jenuh air meningkatkan risiko.", icon: "🦠" },
        ].map((c) => (
          <div key={c.title} className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-5">
              <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-xl">{c.icon}</div>
              <span className={`text-lg font-black ${c.score > 70 ? "text-red-500" : c.score > 40 ? "text-amber-500" : "text-green-500"}`}>
                {c.score}/100
              </span>
            </div>
            <h4 className="font-extrabold text-slate-800 text-sm mb-1">{c.title}</h4>
            <span className={`inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold text-white uppercase mb-3 ${
              c.score > 70 ? "bg-red-500" : c.score > 40 ? "bg-amber-500" : "bg-green-500"}`}>
              {c.score > 70 ? "Tinggi" : c.score > 40 ? "Sedang" : "Rendah"}
            </span>
            <p className="text-[12px] text-slate-500 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#3D5A3D] rounded-3xl p-10 text-center shadow-xl">
        <h4 className="text-2xl font-black text-white mb-3">Optimalkan Hasil Panen Anda</h4>
        <p className="text-white/80 mb-8 text-sm">Sistem telah merumuskan langkah konkret yang harus Anda ambil sekarang.</p>
        <button onClick={() => onNav("rekomendasi")}
          className="inline-flex items-center gap-3 bg-white text-[#3D5A3D] px-10 py-4 rounded-2xl text-[16px] font-black hover:bg-slate-50 transition-all">
          Rekomendasi Tindakan →
        </button>
      </div>
    </div>
  );
}

/* ─── PAGE: REKOMENDASI ─── */
function RekomendasiTindakan({ onNav }) {
  const [expanded, setExpanded] = useState(0);
  const [completed, setCompleted] = useState([]);

  const items = [
    {
      id: 1,
      category: "Proteksi Tanaman", urgency: "SEGERA", color: "red",
      title: "Penanganan Blas & Busuk Akar",
      desc: "Tanah Aluvial cenderung menyimpan air, waspadai Busuk Akar akibat kelembapan tanah yang ekstrem.",
      steps: ["Identifikasi area terdampak Blas & Busuk Akar", "Gunakan APD lengkap sebelum pengaplikasian fungisida", "Semprotkan dosis anjuran tepat pada fokus sasaran", "Hindari penyemprotan saat angin kencang"],
      tools: ["Fungisida Aktif", "Sprayer", "Masker & Sarung Tangan"],
    },
    {
      id: 2,
      category: "Infrastruktur", urgency: "TINGGI", color: "amber",
      title: "Optimalisasi Drainase (Aluvial)",
      desc: "Mencegah akumulasi air yang memicu pembusukan pada karakteristik tanah Aluvial yang jenuh air.",
      steps: ["Bersihkan sedimen di saluran pembuangan utama", "Pastikan tidak ada air menggenang >24 jam", "Perbaiki tanggul atau parit terkikis", "Cek kemiringan saluran untuk aliran lancar"],
      tools: ["Cangkul", "Sekop", "Sepatu Boot"],
    },
    {
      id: 3,
      category: "Pencatatan", urgency: "RENDAH", color: "green",
      title: "Monitoring Ekosistem Lahan",
      desc: "Lakukan pengamatan berkala terhadap keberadaan serangga dan musuh alami di sekitar lahan Anda.",
      steps: ["Pasang sticky trap di sudut lahan", "Catat temuan anomali pada daun/batang", "Evaluasi efektivitas tindakan", "Laporkan ke penyuluh jika kritis"],
      tools: ["Buku Catatan", "Yellow Sticky Trap", "Lup/Kaca Pembesar"],
    },
  ];

  const colorMap = {
    red: { bar: "bg-red-500", badge: "bg-red-500", text: "text-red-600" },
    amber: { bar: "bg-amber-500", badge: "bg-amber-500", text: "text-amber-600" },
    green: { bar: "bg-[#3D5A3D]", badge: "bg-[#3D5A3D]", text: "text-[#3D5A3D]" },
  };

  return (
    <div className="max-w-4xl mx-auto p-6 pb-20">
      <div className="flex items-end justify-between mb-7">
        <div>
          <h1 className="text-2xl font-black text-slate-800">Rekomendasi Tindakan Cerdas</h1>
          <p className="text-slate-500 mt-1 text-sm">Langkah preventif dan kuratif khusus kondisi lahan Anda.</p>
        </div>
        <button onClick={() => onNav("analisis")} className="text-[13px] font-black text-[#3D5A3D] bg-[#f0f4f0] px-4 py-2 rounded-xl hover:bg-[#e0e8e0] transition-all border border-[#3D5A3D]/10">
          ← Kembali ke Analisis
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item, i) => {
          const c = colorMap[item.color];
          const isComp = completed.includes(item.id);
          return (
            <div key={item.id} className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden relative">
              <div className={`absolute top-0 bottom-0 left-0 w-1.5 ${c.bar}`} />
              <div className="p-5 pl-7 cursor-pointer hover:bg-slate-50" onClick={() => setExpanded(expanded === i ? -1 : i)}>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase">{item.category}</span>
                      <span className={`px-2 py-0.5 rounded-full ${c.badge} text-white text-[10px] font-black uppercase`}>{item.urgency}</span>
                    </div>
                    <h4 className="text-base font-extrabold text-slate-800">{item.title}</h4>
                    <p className="text-[12px] text-slate-500 mt-1">{item.desc}</p>
                  </div>
                  <div className="flex items-center gap-3 ml-4">
                    <button
                      onClick={(e) => { e.stopPropagation(); setCompleted((c) => isComp ? c : [...c, item.id]); }}
                      disabled={isComp}
                      className={`px-4 py-2 rounded-xl text-[12px] font-black transition-all ${isComp
                        ? "bg-slate-50 text-slate-400 cursor-default border border-slate-200"
                        : "bg-[#3D5A3D] text-white hover:bg-[#2b402b]"}`}
                    >
                      {isComp ? "✓ Selesai" : "Tandai Selesai"}
                    </button>
                    <span className={`text-slate-400 transition-transform duration-300 ${expanded === i ? "rotate-180" : ""}`}>▼</span>
                  </div>
                </div>
              </div>
              {expanded === i && (
                <div className="px-7 pb-5">
                  <div className="h-px bg-slate-100 mb-5" />
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-3">Langkah Pelaksanaan</h5>
                      <ol className="space-y-2">
                        {item.steps.map((s, idx) => (
                          <li key={idx} className="flex gap-3 text-[13px] text-slate-600">
                            <span className="w-6 h-6 rounded-full bg-[#f0f4f0] text-[#3D5A3D] font-black text-[11px] flex items-center justify-center shrink-0">{idx + 1}</span>
                            {s}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <h5 className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-3">Alat & Bahan</h5>
                      <div className="flex flex-wrap gap-2">
                        {item.tools.map((t) => (
                          <span key={t} className="bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl text-[12px] font-bold text-slate-700">🔧 {t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── PAGE: CUACA ─── */
function CuacaPrediksi() {
  const current = { temp: 29, humidity: 84, wind: 12, precip: 18, code: 63 };
  const forecast = [
    { day: "Hari Ini", emoji: "🌧️", cond: "Hujan Sedang", max: 30, min: 24, rain: 85 },
    { day: "Selasa", emoji: "🌦️", cond: "Gerimis", max: 31, min: 25, rain: 60 },
    { day: "Rabu", emoji: "⛅", cond: "Berawan", max: 33, min: 25, rain: 30 },
    { day: "Kamis", emoji: "☀️", cond: "Cerah", max: 35, min: 26, rain: 10 },
    { day: "Jumat", emoji: "🌤️", cond: "Sebagian Berawan", max: 34, min: 25, rain: 20 },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-5 p-4 bg-amber-50 border border-amber-300 rounded-xl flex items-start gap-3">
        <span className="text-xl">⚠️</span>
        <div>
          <p className="text-[13px] font-bold text-amber-800">Peringatan Cuaca</p>
          <p className="text-[12px] text-amber-700">Terdapat curah hujan intensitas lebat (18mm) di area lahan Anda.</p>
        </div>
      </div>

      {/* Lahan tabs */}
      <div className="flex gap-2 mb-5">
        {["Blok A - Padi", "Blok B - Jagung", "Blok C - Kedelai"].map((a, i) => (
          <button key={a} className={`px-4 py-2 rounded-full text-[12px] font-semibold transition-all ${i === 0 ? "bg-[#2D5A27] text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-[#2D5A27]/40"}`}>
            📍 {a}
          </button>
        ))}
      </div>

      {/* Current weather */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-5 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Cuaca Saat Ini</h2>
            <p className="text-[11px] text-gray-500">Minggu, 19 April 2026</p>
          </div>
          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full border border-emerald-200">
            🟢 Live Update
          </span>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-4 border-r border-gray-100 pr-10">
            <span className="text-6xl">🌧️</span>
            <div>
              <div className="flex items-start">
                <span className="text-5xl font-extrabold text-gray-800">{current.temp}</span>
                <span className="text-lg font-bold text-gray-400 mt-1">°C</span>
              </div>
              <p className="text-[14px] font-semibold text-gray-600">Hujan Sedang</p>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-3">
            {[
              ["Kelembapan", `${current.humidity}%`, "blue"],
              ["Angin", `${current.wind} km/h`, "cyan"],
              ["Curah Hujan", `${current.precip} mm`, "purple"],
              ["Status", "Lembab", "emerald"],
            ].map(([k, v, color]) => (
              <div key={k} className={`bg-${color}-50/80 rounded-xl p-3`}>
                <p className={`text-[9px] font-bold text-${color}-500 uppercase tracking-wide mb-1`}>{k}</p>
                <p className="text-xl font-extrabold text-gray-800">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Forecast */}
      <h3 className="text-[14px] font-bold text-gray-800 mb-3">Prakiraan 5 Hari</h3>
      <div className="grid grid-cols-5 gap-3">
        {forecast.map((d, i) => (
          <div key={d.day} className={`bg-white rounded-xl border p-3 text-center ${i === 0 ? "border-[#2D5A27] ring-1 ring-[#2D5A27]/20" : "border-gray-200"}`}>
            <p className={`text-[10px] font-bold uppercase ${i === 0 ? "text-[#2D5A27]" : "text-gray-500"}`}>{d.day}</p>
            <div className="text-3xl my-2">{d.emoji}</div>
            <p className="text-[10px] font-semibold text-gray-600 mb-2">{d.cond}</p>
            <div className="text-[10px] space-y-1">
              <div className="flex justify-between"><span className="text-red-400">▲</span><span className="font-bold">{d.max}°</span></div>
              <div className="flex justify-between"><span className="text-blue-400">▼</span><span className="font-bold">{d.min}°</span></div>
              <div className="text-gray-400 text-center mt-1">🌧 {d.rain}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── PAGE: INSIGHT HISTORIS ─── */
function InsightHistoris() {
  const data = [
    { bulan: "Nov", curahHujan: 180, kelembapan: 78, riskIndex: 35 },
    { bulan: "Des", curahHujan: 310, kelembapan: 88, riskIndex: 68 },
    { bulan: "Jan", curahHujan: 290, kelembapan: 85, riskIndex: 62 },
    { bulan: "Feb", curahHujan: 250, kelembapan: 82, riskIndex: 50 },
    { bulan: "Mar", curahHujan: 320, kelembapan: 91, riskIndex: 74 },
    { bulan: "Apr", curahHujan: 180, kelembapan: 80, riskIndex: 45 },
  ];
  const maxRain = Math.max(...data.map((d) => d.curahHujan));
  const maxRisk = 100;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Analisis Tren & Pola</h1>
      <p className="text-gray-500 mb-6 text-sm">Memahami perilaku lahan berdasarkan data historis 6 bulan.</p>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Curah Hujan", value: "1.530 mm", badge: "+12% vs Lalu", color: "#3b82f6" },
          { label: "Rata-rata Kelembapan", value: "84%", badge: "Tinggi", color: "#3d5a3d" },
          { label: "Indeks Risiko Avg", value: "56/100", badge: "+8% vs Lalu", color: "#f59e0b" },
          { label: "Kesiapan Lahan", value: "44%", badge: "Waspada", color: "#22c55e" },
        ].map((k) => (
          <div key={k.label} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5"
            style={{ borderLeftWidth: "4px", borderLeftColor: k.color }}>
            <div className="flex items-start justify-between mb-3">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center text-base" style={{ background: k.color + "20" }}>
                {k.label.includes("Hujan") ? "🌧️" : k.label.includes("Kelembapan") ? "💧" : k.label.includes("Risiko") ? "⚡" : "🛡️"}
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-current" style={{ color: k.color }}>{k.badge}</span>
            </div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{k.label}</p>
            <p className="text-[22px] font-extrabold text-gray-900">{k.value}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-5 mb-6">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h3 className="text-[16px] font-semibold text-gray-900 mb-1">Tren Iklim</h3>
          <p className="text-[12px] text-gray-400 mb-5">Curah hujan & kelembapan bulanan.</p>
          <div className="flex items-end gap-3 h-40">
            {data.map((d) => (
              <div key={d.bulan} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full flex gap-1 items-end h-32">
                  <div className="flex-1 bg-blue-200 rounded-t" style={{ height: `${(d.curahHujan / maxRain) * 100}%` }} />
                  <div className="flex-1 bg-[#3d5a3d]/40 rounded-t" style={{ height: `${d.kelembapan}%` }} />
                </div>
                <span className="text-[9px] font-bold text-gray-400">{d.bulan}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-3">
            <span className="flex items-center gap-1 text-[10px] text-gray-500"><span className="w-2 h-2 rounded-full bg-blue-400" />Hujan (mm)</span>
            <span className="flex items-center gap-1 text-[10px] text-gray-500"><span className="w-2 h-2 rounded-full bg-[#3d5a3d]" />Kelembapan (%)</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h3 className="text-[16px] font-semibold text-gray-900 mb-1">Indeks Risiko</h3>
          <p className="text-[12px] text-gray-400 mb-5">Ancaman lahan secara kronologis.</p>
          <div className="flex items-end gap-3 h-40">
            {data.map((d) => (
              <div key={d.bulan} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full flex items-end h-32">
                  <div className="w-full rounded-t"
                    style={{ height: `${(d.riskIndex / maxRisk) * 100}%`, background: d.riskIndex >= 70 ? "#ef4444" : d.riskIndex >= 40 ? "#f59e0b" : "#22c55e" }} />
                </div>
                <span className="text-[9px] font-bold text-gray-400">{d.bulan}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-3">
            <span className="flex items-center gap-1 text-[10px] text-gray-500"><span className="w-2 h-2 rounded-full bg-red-400" />Tinggi ≥70</span>
            <span className="flex items-center gap-1 text-[10px] text-gray-500"><span className="w-2 h-2 rounded-full bg-amber-400" />Sedang ≥40</span>
            <span className="flex items-center gap-1 text-[10px] text-gray-500"><span className="w-2 h-2 rounded-full bg-green-400" />Aman &lt;40</span>
          </div>
        </div>
      </div>

      {/* Insight box */}
      <div className="bg-[#3d5a3d] rounded-2xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-3">Ringkasan Strategis</h3>
        <p className="text-sm text-white/90 leading-relaxed mb-4">
          Berdasarkan data 6 bulan terakhir, lahan Anda cenderung mengalami lonjakan risiko penyakit jamur setiap kali
          curah hujan bulanan melebihi 200mm dengan kelembapan di atas 80%.
        </p>
        <div className="flex gap-4 text-[12px] text-white/80">
          <span>• Bulan Kritis: Des - Mar - Apr</span>
          <span>• Akurasi Prediksi: 75%</span>
        </div>
      </div>
    </div>
  );
}

/* ─── PAGE: PETA RISIKO ─── */
function PetaRisiko() {
  return (
    <div className="relative h-full">
      {/* Fake map */}
      <div className="w-full h-full bg-gradient-to-br from-[#c8e6c9] via-[#a5d6a7] to-[#81c784] flex items-center justify-center relative overflow-hidden">
        {/* Grid lines */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute inset-y-0 border-r border-white/10" style={{ left: `${(i + 1) * 12.5}%` }} />
        ))}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute inset-x-0 border-b border-white/10" style={{ top: `${(i + 1) * 16.6}%` }} />
        ))}

        {/* Area polygons */}
        <div className="absolute w-32 h-24 rounded-2xl opacity-80 border-2 border-white shadow-xl flex flex-col items-center justify-center text-white font-bold"
          style={{ background: "#ef4444", top: "20%", left: "25%" }}>
          <span className="text-lg">🔴</span>
          <span className="text-[11px]">Blok A - Padi</span>
          <span className="text-[10px] opacity-80">Risiko Tinggi</span>
        </div>
        <div className="absolute w-28 h-20 rounded-2xl opacity-80 border-2 border-white shadow-xl flex flex-col items-center justify-center text-white font-bold"
          style={{ background: "#f59e0b", top: "45%", left: "50%" }}>
          <span className="text-lg">🟡</span>
          <span className="text-[11px]">Blok B - Jagung</span>
          <span className="text-[10px] opacity-80">Risiko Sedang</span>
        </div>
        <div className="absolute w-28 h-20 rounded-2xl opacity-80 border-2 border-white shadow-xl flex flex-col items-center justify-center text-white font-bold"
          style={{ background: "#22c55e", top: "55%", left: "20%" }}>
          <span className="text-lg">🟢</span>
          <span className="text-[11px]">Blok C - Kedelai</span>
          <span className="text-[10px] opacity-80">Risiko Rendah</span>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-white/50 rounded-xl shadow-lg p-4 z-10">
        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Legenda</h3>
        {[["#ef4444", "Tinggi", 1], ["#f59e0b", "Sedang", 1], ["#22c55e", "Rendah", 1]].map(([c, l, n]) => (
          <div key={l} className="flex items-center gap-2 mb-1.5">
            <div className="w-3 h-3 rounded-sm" style={{ background: c }} />
            <span className="text-[12px] font-bold text-slate-800">{l}: {n}</span>
          </div>
        ))}
      </div>

      {/* Floating action */}
      <div className="absolute bottom-6 right-6 z-10">
        <button className="w-11 h-11 bg-[#2D5A27] rounded-xl shadow-lg flex items-center justify-center text-white text-lg hover:bg-[#20401C]">
          📍
        </button>
      </div>
    </div>
  );
}

/* ─── PAGE: WAKTU TANAM ─── */
function WaktuTanam() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center pt-10 pb-20 px-6">
      <div className="bg-[#3D5A3D]/5 border border-[#3D5A3D]/20 rounded-full py-1.5 px-6 mb-3">
        <span className="text-[11px] font-bold text-[#3D5A3D] tracking-widest uppercase">Analisis Musim Tanam 2026</span>
      </div>
      <h1 className="text-3xl font-bold text-[#1E293B] tracking-tight mb-2 text-center">Jendela Tanam Terbaik</h1>
      <p className="text-slate-500 mb-8 text-center text-sm">Berdasarkan pola curah hujan historis dan prakiraan anomali cuaca tahunan.</p>

      <div className="w-full bg-white border-2 border-[#3D5A3D]/20 rounded-2xl shadow-xl p-8 mb-6">
        <div className="flex items-center justify-between border-b border-slate-200/60 pb-8 mb-8">
          <div className="text-center">
            <p className="text-[9px] font-bold text-slate-500 tracking-widest uppercase mb-2">Rekomendasi Mulai</p>
            <h3 className="text-4xl font-bold text-slate-800">15 April</h3>
            <p className="text-lg font-medium text-[#3D5A3D]">2026</p>
          </div>
          <div className="bg-[#3D5A3D]/10 rounded-full w-14 h-14 flex items-center justify-center text-2xl">🌱</div>
          <div className="text-center">
            <p className="text-[9px] font-bold text-slate-500 tracking-widest uppercase mb-2">Batas Akhir Ideal</p>
            <h3 className="text-4xl font-bold text-slate-800">25 April</h3>
            <p className="text-lg font-medium text-[#3D5A3D]">2026</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-[9px] font-bold text-slate-500 tracking-widest uppercase mb-3">Tingkat Kepercayaan</p>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl font-bold text-slate-800">92%</span>
              <span className="bg-green-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">Tinggi</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5">
              <div className="bg-green-500 h-1.5 rounded-full w-[92%]" />
            </div>
            <ul className="mt-4 space-y-1.5">
              <li className="text-[12px] text-slate-500 flex gap-2"><span className="text-green-500">✅</span> Pola curah hujan stabil di April.</li>
              <li className="text-[12px] text-slate-500 flex gap-2"><span className="text-green-500">✅</span> Kelembapan tanah optimal.</li>
            </ul>
          </div>
          <div>
            <p className="text-[9px] font-bold text-slate-500 tracking-widest uppercase mb-3">Status</p>
            <div className="bg-slate-50/50 border border-slate-200 p-4 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="font-bold text-slate-800">Waktu Optimal</span>
              </div>
              <p className="text-[11px] text-slate-500">Anda berada 4 hari dari jendela tanam terbaik. Siapkan lahan segera.</p>
            </div>
            <p className="text-[11px] text-slate-500 italic mt-4">
              "Pastikan pengairan bersih sebelum 15 April untuk air hujan pertama."
            </p>
          </div>
        </div>
      </div>

      <button className="bg-[#3D5A3D] text-white font-bold text-[15px] px-8 py-3.5 rounded-2xl shadow-lg hover:bg-[#2D4A2D] transition-colors w-full flex items-center justify-center gap-3">
        Gunakan Rekomendasi →
      </button>
      <p className="text-[11px] text-slate-500 text-center opacity-60 mt-3">* Prediksi diperbarui setiap 24 jam berdasarkan BMKG & observasi lokal.</p>
    </div>
  );
}

/* ─── PAGE: RIWAYAT LAHAN ─── */
function RiwayatLahan() {
  const [tab, setTab] = useState("observasi");
  const tabs = ["observasi", "validasi", "risiko", "rekomendasi"];
  const rows = [
    { date: "19 Apr 2026", time: "09:30 WIB", type: "Observasi", block: "Blok A - Padi", summary: "Tanaman: Baik, Genangan: Sedang, Penyakit: Ringan", status: "Selesai" },
    { date: "18 Apr 2026", time: "14:20 WIB", type: "Validasi", block: "Blok A - Padi", summary: "Suhu: 29°C, RH: 84%, Hujan: 18mm", status: "Tervalidasi" },
    { date: "17 Apr 2026", time: "10:15 WIB", type: "Risiko", block: "Blok B - Jagung", summary: "Risiko: 45/100 — Waspada", status: "Waspada" },
    { date: "16 Apr 2026", time: "08:00 WIB", type: "Rekomendasi", block: "Blok A - Padi", summary: "[Infrastruktur] Optimalisasi Drainase (Aluvial)", status: "Selesai" },
    { date: "15 Apr 2026", time: "11:45 WIB", type: "Observasi", block: "Blok C - Kedelai", summary: "Tanaman: Sangat Baik, Kelembapan Normal", status: "Selesai" },
  ];

  const statusColor = { Selesai: "bg-green-500", Tervalidasi: "bg-blue-500", Waspada: "bg-amber-500", Bahaya: "bg-red-500" };

  return (
    <div className="max-w-5xl mx-auto p-6 pb-20">
      <h1 className="text-2xl font-black text-[#1e293b] mb-1">Histori Aktivitas & Analisis</h1>
      <p className="text-slate-500 text-sm mb-6">Lacak seluruh data historis pertanian Anda.</p>

      <div className="bg-slate-200/50 rounded-2xl p-1.5 flex gap-1 w-fit mb-5">
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-5 py-2 rounded-xl text-[12px] font-black capitalize transition-all ${tab === t ? "bg-white text-[#3d5a3d] shadow-sm" : "text-slate-500 hover:text-slate-800"}`}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-200">
              {["Waktu", "Tipe", "Wilayah", "Ringkasan", "Status", ""].map((h) => (
                <th key={h} className="text-left px-5 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/80">
                <td className="px-5 py-4">
                  <p className="font-bold text-slate-800 text-[13px]">{r.date}</p>
                  <p className="text-[11px] text-slate-500">{r.time}</p>
                </td>
                <td className="px-5 py-4">
                  <span className="font-bold text-slate-700 text-[13px]">{r.type}</span>
                </td>
                <td className="px-5 py-4">
                  <span className="px-2 py-1 rounded-lg bg-slate-100 text-[10px] font-black text-slate-700 uppercase tracking-wide">{r.block}</span>
                </td>
                <td className="px-5 py-4 max-w-[220px]">
                  <p className="text-[12px] text-slate-500 truncate italic">"{r.summary}"</p>
                </td>
                <td className="px-5 py-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black text-white ${statusColor[r.status] || "bg-gray-200"}`}>{r.status}</span>
                </td>
                <td className="px-5 py-4">
                  <button className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-white hover:shadow-md border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#3d5a3d]">
                    👁
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ─── LANDING PAGE ─── */
function Welcome({ onEnter }) {
  const features = [
    { title: "Prakiraan Cuaca Tepat", desc: "Data real-time berbasis koordinat lahan Anda.", icon: "☀️" },
    { title: "Insight Historis", desc: "Analisis tren iklim 6 bulan terakhir.", icon: "📊" },
    { title: "Peta Risiko Lahan", desc: "Visualisasi area rentan genangan/kekeringan.", icon: "🗺️" },
    { title: "Rekomendasi Tindakan", desc: "Saran berbasis data hibrida lapangan + cuaca.", icon: "💡" },
  ];
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-xl font-extrabold text-[#007a55]">AgriSupport</span>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl text-[13px] font-semibold border border-[#009966] text-[#007a55] hover:bg-[#f0fdf4]">Daftar</button>
            <button onClick={onEnter} className="bg-[#009966] text-white px-4 py-2 rounded-xl text-[13px] font-semibold hover:bg-[#007a55]">Masuk</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #0f172b 60%, #1a3a1a)" }}>
        <div className="relative z-10 max-w-6xl mx-auto px-8 py-32">
          <div className="max-w-xl">
            <h1 className="text-5xl font-extrabold leading-tight text-white mb-5">
              Cerdas Bertani,{" "}
              <span className="text-[#00d492]">Tangguh Hadapi</span>{" "}
              Perubahan Iklim
            </h1>
            <p className="text-[#e2e8f0] text-lg mb-8 leading-relaxed">
              Integrasi cerdas data cuaca & kondisi lapangan untuk memitigasi risiko pertanian. Lindungi panen dengan keputusan berbasis data.
            </p>
            <div className="flex gap-4">
              <button onClick={onEnter} className="inline-flex items-center gap-2 bg-[#00bc7d] hover:bg-[#00a06b] text-white px-8 py-4 rounded-2xl text-[15px] font-semibold shadow-lg">
                Buka Dashboard Saya →
              </button>
              <button className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-2xl text-[15px] font-semibold hover:bg-white/20">
                Pelajari Fitur
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#f8fafc] border-y border-slate-200 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-4">Misi Kami Mengamankan Panen dari Cuaca Ekstrem</h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-3xl mx-auto">
            Perubahan iklim memicu cuaca ekstrem yang mengancam ketahanan pangan. <strong className="text-[#007a55]">AgriSupport</strong> menyatukan prakiraan cuaca global dengan laporan kondisi aktual lahan.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 gap-6">
          {[
            ["🌿", "Visi Berkelanjutan", "Pertanian yang tangguh dimulai dari adaptasi cerdas. Kami membantu Anda memitigasi risiko cuaca dan menjaga keberlanjutan panen."],
            ["💾", "Pendekatan Hybrid Data", "Keputusan terbaik lahir dari data utuh. Prakiraan cuaca global + laporan lapangan = rekomendasi presisi dan personal."],
          ].map(([icon, title, desc]) => (
            <div key={title} className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#d0fae5] rounded-2xl flex items-center justify-center text-3xl mb-6">{icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
              <p className="text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-3">Layanan Utama Kami</h2>
          <p className="text-slate-500">Empat pilar fitur untuk merespons dinamika lahan dan iklim secara proaktif.</p>
        </div>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-[16px] font-bold text-slate-800 mb-2">{f.title}</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#ecfdf5] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-800">Dipercaya oleh Petani</h2>
        </div>
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 gap-6">
          {[
            ["Bapak Budi", "Petani Padi, Jawa Tengah", '"AgriSupport membantu saya menghindari gagal panen berkat fitur prediksi genangannya. UI-nya sangat gampang dipahami."'],
            ["Ibu Siti", "Ketua Kelompok Tani", '"Pembaruan cuaca dan rekomendasi tindakan harian sangat akurat. Kami kini bisa merencanakan penyebaran pupuk secara optimal."'],
          ].map(([name, role, quote]) => (
            <div key={name} className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-[#d0fae5] flex items-center justify-center text-3xl">👤</div>
                <div>
                  <h4 className="font-bold text-slate-800">{name}</h4>
                  <p className="text-[13px] text-[#009966] font-semibold">{role}</p>
                </div>
              </div>
              <p className="text-slate-500 italic leading-relaxed">{quote}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-10 text-center">
        <h3 className="text-xl font-extrabold text-slate-800 mb-1">AgriSupport</h3>
        <p className="text-slate-500 text-sm mb-6">Sistem Pendukung Keputusan Cerdas Pertanian</p>
        <p className="text-slate-400 text-xs">© 2026 AgriSupport. Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
}

/* ─── APP ROOT ─── */
export default function App() {
  const [page, setPage] = useState("landing");
  const [appPage, setAppPage] = useState("dashboard");

  const pageMap = {
    "analisis": <AnalisisRisiko onNav={(p) => setAppPage(p)} />,
    "rekomendasi": <RekomendasiTindakan onNav={(p) => setAppPage(p)} />,
  };

  const titles = {
    dashboard: "Dashboard Overview", wilayah: "Wilayah Pertanian",
    cuaca: "Pemantauan Cuaca", "waktu-tanam": "Waktu Tanam",
    "peta-risiko": "Peta Risiko", "input-kondisi": "Input Kondisi",
    riwayat: "Riwayat Lahan", insight: "Insight Historis",
    analisis: "Hasil Analisis", rekomendasi: "Rekomendasi",
  };

  if (page === "landing") {
    return <Welcome onEnter={() => setPage("app")} />;
  }

  const renderPage = () => {
    if (pageMap[appPage]) return pageMap[appPage];
    switch (appPage) {
      case "dashboard": return <Dashboard onNav={setAppPage} />;
      case "wilayah": return <WilayahLahan />;
      case "cuaca": return <CuacaPrediksi />;
      case "waktu-tanam": return <WaktuTanam />;
      case "peta-risiko": return <PetaRisiko />;
      case "input-kondisi": return <InputKondisi onNav={setAppPage} />;
      case "riwayat": return <RiwayatLahan />;
      case "insight": return <InsightHistoris />;
      default: return <Dashboard onNav={setAppPage} />;
    }
  };

  return (
    <Layout
      activePage={appPage}
      onNav={setAppPage}
      title={titles[appPage] || "Dashboard"}
    >
      {renderPage()}
    </Layout>
  );
}
