/**
 * ============================================================
 * AGS-34 | ST-02 — Tampilan Cuaca Saat Ini
 * ============================================================
 *
 * KOMPONEN: CurrentWeatherCard
 * Menampilkan kondisi cuaca terkini dalam bentuk kartu visual
 * yang mudah dipahami petani.
 *
 * PROPS:
 *   @param {Object} current — data cuaca saat ini dari Open-Meteo:
 *     · current.temperature_2m        — suhu dalam °C
 *     · current.weather_code          — kode kondisi cuaca (WMO)
 *     · current.relative_humidity_2m  — kelembapan udara dalam %
 *     · current.wind_speed_10m        — kecepatan angin dalam km/h
 *     · current.precipitation         — curah hujan dalam mm
 *
 * YANG PERLU DIKERJAKAN:
 *   1. Translator Kode Cuaca (WMO Weather Code)
 *      - Buat fungsi getWmoDetails(code) yang mengembalikan:
 *        { text: 'Cerah', emoji: '☀️' }
 *      - Daftar kode WMO yang perlu diterjemahkan:
 *        0=Cerah, 1=Sebagian Berawan, 2=Berawan, 3=Mendung,
 *        45/48=Berkabut, 51/53/55=Gerimis, 61/63/65=Hujan,
 *        80/81/82=Hujan Deras Lokal, 95/96/99=Badai Petir
 *
 *   2. Tampilan Utama Kartu
 *      - Tampilkan emoji/ikon cuaca besar berdasarkan weather_code
 *      - Tampilkan suhu besar (misal: 28°C) sebagai fokus utama
 *      - Tampilkan deskripsi kondisi cuaca (misal: "Hujan Ringan")
 *
 *   3. Label "LIVE"
 *      - Tambahkan badge/label bertuliskan "LIVE" atau "Live Update"
 *      - Gunakan animasi pulse (Tailwind: animate-pulse) pada indikator
 *
 *   4. Grid Metrik Cuaca
 *      - Tampilkan 4 metrik dalam grid 2x2:
 *        · Kelembapan  : relative_humidity_2m (%)
 *        · Angin       : wind_speed_10m (km/h)
 *        · Curah Hujan : precipitation (mm)
 *        · Status      : "Lembab" jika humidity > 80, lainnya "Normal"
 *      - Setiap metrik punya warna latar berbeda agar mudah dibedakan
 *
 * HASIL YANG DIHARAPKAN:
 *   Petani bisa melihat kondisi cuaca lahan secara sekilas tanpa
 *   perlu membaca angka yang membingungkan.
 * ============================================================
 */

// TODO ST-02: Buat fungsi translator kode WMO
// function getWmoDetails(code) { ... }

// TODO ST-02: Implementasi komponen CurrentWeatherCard
export default function CurrentWeatherCard({ current }) {
    // TODO ST-02: Implementasi di sini
    return null;
}
