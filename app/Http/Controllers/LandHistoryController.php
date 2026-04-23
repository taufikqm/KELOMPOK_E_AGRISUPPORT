<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

/**
 * ============================================================
 * STUB: LandHistoryController — Modul Riwayat Lahan
 * ============================================================
 *
 * TUGAS TIM:
 *   Implementasikan seluruh method di bawah ini sesuai fitur
 *   Riwayat Lahan (histori aktivitas & analisis) pada AgriSupport.
 *
 * FILE TERKAIT YANG PERLU DIISI JUGA:
 *   - resources/js/Pages/RiwayatLahan.jsx  (tampilan UI riwayat lahan)
 *
 * MODEL YANG DIGUNAKAN:
 *   - App\Models\FieldObservation  (data observasi historis)
 *   - App\Models\AgriculturalArea  (data wilayah lahan)
 *   - App\Models\ActionLog         (log aktivitas tindakan)
 *
 * ROUTE YANG TERHUBUNG (routes/web.php):
 *   GET /riwayat-lahan     → index()   : halaman utama riwayat lahan
 *   GET /api/land-history  → getData() : endpoint JSON data historis
 *
 * CATATAN:
 *   - getData() digunakan oleh frontend untuk fetch data secara dinamis
 *   - Dukung filter berdasarkan: wilayah lahan, rentang tanggal, jenis risiko
 * ============================================================
 */
class LandHistoryController extends Controller
{
    /**
     * TODO: Tampilkan halaman Riwayat Lahan.
     * Sertakan daftar wilayah lahan milik user.
     * Gunakan Inertia::render('RiwayatLahan', [...]).
     */
    public function index(Request $request)
    {
        // TODO: Implementasi di sini
    }

    /**
     * TODO: Endpoint API yang mengembalikan data historis lahan dalam JSON.
     * Dukung parameter filter: area_id, date_from, date_to.
     * Return: response()->json([...])
     */
    public function getData(Request $request)
    {
        // TODO: Implementasi di sini
    }
}
