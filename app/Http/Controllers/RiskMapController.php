<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

/**
 * ============================================================
 * STUB: RiskMapController — Modul Peta Risiko Lahan
 * ============================================================
 *
 * TUGAS TIM:
 *   Implementasikan method index() di bawah ini sesuai fitur
 *   Peta Risiko Lahan pada aplikasi AgriSupport.
 *
 * FILE TERKAIT YANG PERLU DIISI JUGA:
 *   - resources/js/Pages/PetaRisiko.jsx  (tampilan UI peta risiko)
 *
 * MODEL YANG DIGUNAKAN:
 *   - App\Models\AgriculturalArea  (data wilayah beserta koordinat)
 *   - App\Models\FieldObservation  (data risiko banjir/kekeringan)
 *
 * ROUTE YANG TERHUBUNG (routes/web.php):
 *   GET /peta-risiko → index() : halaman peta risiko
 *
 * CATATAN INTEGRASI PETA:
 *   - Frontend menggunakan Leaflet.js untuk render peta interaktif
 *   - Data yang perlu dikirim: koordinat (lat/lon) + level risiko tiap wilayah
 *   - Format data area: [{ id, name, lat, lon, flood_risk, drought_risk }, ...]
 * ============================================================
 */
class RiskMapController extends Controller
{
    /**
     * TODO: Tampilkan halaman Peta Risiko Lahan.
     * Kirim data semua wilayah lahan milik user beserta level risikonya.
     * Gunakan Inertia::render('PetaRisiko', ['areas' => ...]).
     */
    public function index(Request $request)
    {
        // TODO: Implementasi di sini
    }
}
