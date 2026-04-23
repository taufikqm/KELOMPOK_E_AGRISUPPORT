<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

/**
 * ============================================================
 * STUB: HistoricalInsightController — Modul Insight Historis
 * ============================================================
 *
 * TUGAS TIM:
 *   Implementasikan seluruh method di bawah ini sesuai fitur
 *   Insight Historis (analisis tren & pola iklim) pada AgriSupport.
 *
 * FILE TERKAIT YANG PERLU DIISI JUGA:
 *   - resources/js/Pages/InsightHistoris.jsx  (tampilan UI insight historis)
 *
 * MODEL YANG DIGUNAKAN:
 *   - App\Models\FieldObservation  (sumber data historis)
 *   - App\Models\AgriculturalArea  (data wilayah lahan)
 *
 * ROUTE YANG TERHUBUNG (routes/web.php):
 *   GET /insight-historis      → index()              : halaman utama insight
 *   GET /api/historical-data   → getHistoricalData()  : endpoint JSON data historis
 *
 * CATATAN:
 *   - getHistoricalData() menyediakan data untuk chart/grafik di frontend
 *   - Sertakan agregasi: rata-rata curah hujan, suhu, kelembaban per periode
 *   - Dukung filter: wilayah lahan, tahun/bulan
 * ============================================================
 */
class HistoricalInsightController extends Controller
{
    /**
     * TODO: Tampilkan halaman Insight Historis.
     * Sertakan daftar wilayah lahan milik user.
     * Gunakan Inertia::render('InsightHistoris', [...]).
     */
    public function index(Request $request)
    {
        // TODO: Implementasi di sini
    }

    /**
     * TODO: Endpoint API yang mengembalikan data historis terformat untuk grafik.
     * Dukung parameter: area_id, year, month.
     * Return: response()->json([...]) dengan format yang sesuai untuk chart library.
     */
    public function getHistoricalData(Request $request)
    {
        // TODO: Implementasi di sini
    }
}
