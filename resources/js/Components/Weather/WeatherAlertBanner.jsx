/**
 * ============================================================
 * AGS-35 | ST-03 — Prakiraan & Peringatan Cuaca
 * ============================================================
 *
 * KOMPONEN: WeatherAlertBanner
 * Menampilkan banner peringatan otomatis di bagian atas halaman
 * jika kondisi cuaca melebihi batas aman.
 *
 * PROPS:
 *   @param {Object} current — data cuaca saat ini dari Open-Meteo:
 *     · current.precipitation         — curah hujan (mm)
 *     · current.relative_humidity_2m  — kelembapan (%)
 *     · current.wind_speed_10m        — kecepatan angin (km/h)
 *     · current.temperature_2m        — suhu (°C)
 *
 * YANG PERLU DIKERJAKAN:
 *   1. Logika Deteksi Kondisi Berbahaya
 *      Tentukan tingkat ancaman berdasarkan nilai cuaca:
 *      - KRITIS (merah)  : precipitation > 10mm  ATAU wind_speed > 60km/h
 *      - WASPADA (kuning): precipitation > 3mm   ATAU humidity > 85%
 *      - AMAN            : tidak ada peringatan → banner tidak tampil
 *
 *   2. State Dismiss
 *      - Gunakan useState untuk menyimpan apakah banner sudah ditutup
 *      - Jika user klik tombol tutup (×) → banner tersembunyi
 *      - Banner muncul kembali jika halaman di-refresh atau lahan diganti
 *
 *   3. Tampilan Banner KRITIS (merah)
 *      - Warna latar: merah (bg-red-50, border-red-300)
 *      - Teks warna: merah (text-red-800)
 *      - Pesan contoh: "Curah hujan ekstrem terdeteksi. Segera amankan
 *        tanaman dan periksa saluran air lahan Anda."
 *
 *   4. Tampilan Banner WASPADA (kuning)
 *      - Warna latar: kuning/amber (bg-amber-50, border-amber-300)
 *      - Teks warna: kuning (text-amber-800)
 *      - Pesan contoh: "Terdapat curah hujan di area lahan Anda.
 *        Pastikan drainase lahan berfungsi dengan baik."
 *
 *   5. Tombol Tutup
 *      - Tampilkan tombol × di sisi kanan banner
 *      - Klik → set dismissed = true → banner hilang
 *
 *   6. Tidak Tampil Jika Aman
 *      - Jika kondisi aman atau current = null → return null
 *      - Jika sudah dismissed → return null
 *
 * HASIL YANG DIHARAPKAN:
 *   Petani langsung diperingatkan jika ada kondisi yang perlu
 *   diantisipasi, dengan pesan yang jelas dan bisa ditutup.
 * ============================================================
 */
import { useState } from 'react';

// TODO ST-03: Implementasi komponen WeatherAlertBanner
export default function WeatherAlertBanner({ current }) {
    // TODO ST-03: Tambahkan state dismissed
    // const [dismissed, setDismissed] = useState(false)

    // TODO ST-03: Deteksi level ancaman dari data current
    // if (!current || dismissed) return null

    // TODO ST-03: Implementasi tampilan banner di sini
    return null;
}
