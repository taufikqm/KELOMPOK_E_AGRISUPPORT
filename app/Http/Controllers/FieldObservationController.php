<?php

namespace App\Http\Controllers;

use App\Models\FieldObservation;
use App\Models\AgriculturalArea;
use App\Models\Recommendation;
use Illuminate\Http\Request;
use Inertia\Inertia;

/**
 * ============================================================
 * STUB: FieldObservationController — Modul Input Kondisi Lapangan
 * ============================================================
 *
 * TUGAS TIM:
 *   Implementasikan seluruh method di bawah ini sesuai fitur
 *   Input Kondisi Lapangan & Analisis Risiko AgriSupport.
 *
 * FILE TERKAIT YANG PERLU DIISI JUGA:
 *   - resources/js/Pages/InputKondisi.jsx            (form input kondisi)
 *   - resources/js/Pages/ValidasiObservasi.jsx       (halaman validasi)
 *   - resources/js/Pages/AnalisisRisiko.jsx          (hasil analisis risiko)
 *   - resources/js/Pages/RekomendasiTindakan.jsx     (rekomendasi tindakan)
 *
 * MODEL YANG DIGUNAKAN:
 *   - App\Models\FieldObservation
 *   - App\Models\AgriculturalArea
 *   - App\Models\Recommendation
 *
 * ROUTE YANG TERHUBUNG (routes/web.php):
 *   GET  /input-kondisi                              → index()
 *   POST /input-kondisi                              → store()
 *   GET  /validasi-observasi/{observation}           → showValidation()
 *   GET  /analisis-risiko/{observation}              → showRiskAnalysis()
 *   GET  /analisis-risiko/{observation}/rekomendasi  → showRecommendations()
 *   POST /rekomendasi/mark-completed                 → markAsCompleted()
 *
 * REFERENSI STRUKTUR DATA (tabel field_observations):
 *   - agricultural_area_id : FK      — wilayah lahan terkait
 *   - observation_date     : date    — tanggal observasi
 *   - rainfall             : decimal — curah hujan (mm)
 *   - temperature          : decimal — suhu (°C)
 *   - humidity             : decimal — kelembaban (%)
 *   - flood_risk_level     : enum    — low / medium / high
 *   - drought_risk_level   : enum    — low / medium / high
 *   - notes                : text    — catatan tambahan
 * ============================================================
 */
class FieldObservationController extends Controller
{
    /**
     * TODO: Tampilkan halaman form input kondisi lapangan.
     * Sertakan daftar wilayah lahan milik user untuk dropdown.
     * Gunakan Inertia::render('InputKondisi', [...]).
     */
    public function index(Request $request)
    {
        // TODO: Implementasi di sini
    }

    /**
     * TODO: Simpan data observasi lapangan baru ke database.
     * Lakukan validasi input & hitung level risiko secara otomatis.
     * Redirect ke showValidation() setelah berhasil.
     */
    public function store(Request $request)
    {
        // TODO: Implementasi di sini
    }

    /**
     * TODO: Tampilkan halaman validasi hasil observasi.
     * Gunakan Inertia::render('ValidasiObservasi', [...]).
     */
    public function showValidation(FieldObservation $observation)
    {
        // TODO: Implementasi di sini
    }

    /**
     * TODO: Tampilkan halaman analisis risiko dari observasi.
     * Gunakan Inertia::render('AnalisisRisiko', [...]).
     */
    public function showRiskAnalysis(FieldObservation $observation)
    {
        // TODO: Implementasi di sini
    }

    /**
     * TODO: Tampilkan halaman rekomendasi tindakan.
     * Gunakan Inertia::render('RekomendasiTindakan', [...]).
     */
    public function showRecommendations(FieldObservation $observation)
    {
        // TODO: Implementasi di sini
    }

    /**
     * TODO: Tandai rekomendasi sebagai selesai.
     * Terima id rekomendasi dari request, update status di database.
     */
    public function markAsCompleted(Request $request)
    {
        // TODO: Implementasi di sini
    }
}
