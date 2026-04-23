<?php

namespace App\Http\Controllers;

use App\Models\AgriculturalArea;
use Illuminate\Http\Request;
use Inertia\Inertia;

/**
 * ============================================================
 * STUB: PlantingTimeController — Modul Waktu Tanam Optimal
 * ============================================================
 *
 * TUGAS TIM:
 *   Implementasikan seluruh method di bawah ini sesuai fitur
 *   Rekomendasi Waktu Tanam Optimal pada AgriSupport.
 *
 * FILE TERKAIT YANG PERLU DIISI JUGA:
 *   - resources/js/Pages/WaktuTanam.jsx  (tampilan UI waktu tanam)
 *
 * MODEL YANG DIGUNAKAN:
 *   - App\Models\AgriculturalArea
 *   - App\Models\FieldObservation (untuk data historis)
 *
 * ROUTE YANG TERHUBUNG (routes/web.php):
 *   GET  /waktu-tanam          → index()   : halaman utama waktu tanam
 *   POST /waktu-tanam/analisis → analyze() : proses analisis & kembalikan hasil
 *
 * LOGIKA ANALISIS:
 *   - Ambil data cuaca & observasi historis lahan yang dipilih
 *   - Tentukan rentang waktu tanam optimal berdasarkan pola curah hujan & suhu
 *   - Return hasil analisis ke frontend (bisa via Inertia atau JSON)
 * ============================================================
 */
class PlantingTimeController extends Controller
{
    /**
     * TODO: Tampilkan halaman Waktu Tanam Optimal.
     * Sertakan daftar wilayah lahan milik user untuk dipilih.
     * Gunakan Inertia::render('WaktuTanam', [...]).
     */
    public function index(Request $request)
    {
        // TODO: Implementasi di sini
    }

    /**
     * TODO: Proses analisis waktu tanam optimal berdasarkan lahan yang dipilih.
     * Terima: agricultural_area_id dari request.
     * Return: hasil analisis (tanggal/bulan optimal, alasan, dll).
     */
    public function analyze(Request $request)
    {
        // TODO: Implementasi di sini
    }
}
