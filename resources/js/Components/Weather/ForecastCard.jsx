/**
 * ============================================================
 * AGS-35 | ST-03 — Prakiraan & Peringatan Cuaca
 * ============================================================
 *
 * KOMPONEN: ForecastCard
 * Menampilkan ringkasan cuaca untuk satu hari dalam prakiraan
 * 5 hari ke depan.
 *
 * PROPS:
 *   @param {number}  index   — indeks hari (0 = hari ini, 1 = besok, dst.)
 *   @param {Object}  daily   — data prakiraan harian dari Open-Meteo:
 *     · daily.time                        — array tanggal ["2026-04-25", ...]
 *     · daily.weather_code                — array kode WMO per hari
 *     · daily.temperature_2m_max          — array suhu maksimum per hari
 *     · daily.temperature_2m_min          — array suhu minimum per hari
 *     · daily.precipitation_probability_max — array probabilitas hujan (%)
 *   @param {boolean} isFirst — true jika ini hari ini (index === 0)
 *
 * YANG PERLU DIKERJAKAN:
 *   1. Nama Hari
 *      - Jika isFirst = true → tampilkan "Hari Ini"
 *      - Jika isFirst = false → tampilkan nama hari (Senin, Selasa, dst.)
 *        gunakan: new Date(daily.time[index]).toLocaleDateString('id-ID', { weekday: 'long' })
 *      - Tampilkan juga tanggal singkat (misal: "25 Apr")
 *
 *   2. Ikon Cuaca
 *      - Gunakan fungsi getWmoDetails(daily.weather_code[index])
 *        untuk mendapatkan emoji cuaca yang sesuai
 *      - Catatan: bisa import getWmoDetails dari CurrentWeatherCard,
 *        atau definisikan ulang di sini
 *
 *   3. Suhu Maksimum & Minimum
 *      - Tampilkan suhu maks dengan warna merah/hangat (▲)
 *      - Tampilkan suhu min dengan warna biru/dingin (▼)
 *      - Bulatkan angka: Math.round(...)
 *
 *   4. Probabilitas Hujan
 *      - Tampilkan: "🌧️ {precipitation_probability_max[index]}%"
 *
 *   5. Visual Hari Ini
 *      - Kartu "Hari Ini" (isFirst = true) tampil dengan border/ring
 *        yang berbeda dari hari lainnya untuk memberi penekanan visual
 *
 * HASIL YANG DIHARAPKAN:
 *   Petani mendapat gambaran cuaca hari-hari mendatang dalam
 *   tampilan kartu yang ringkas dan mudah dipahami.
 * ============================================================
 */

// TODO ST-03: Implementasi komponen ForecastCard
export default function ForecastCard({ index, daily, isFirst }) {
    // TODO ST-03: Implementasi di sini
    return null;
}
