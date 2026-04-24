<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

/**
 * ============================================================
 * AGS-33 | ST-01 — Sambungan ke Layanan Cuaca
 * ============================================================
 *
 * YANG PERLU DIKERJAKAN:
 *   1. index()
 *      - Query tabel agricultural_areas milik user yang sedang login
 *      - Ambil koordinat setiap lahan menggunakan ST_Centroid(geometry)
 *        → ST_Y(...) sebagai latitude, ST_X(...) sebagai longitude
 *      - Kirim data areas ke halaman via Inertia::render('CuacaPrediksi')
 *
 *   2. getWeather()
 *      - Validasi parameter: lat (numeric, required), lon (numeric, required)
 *      - Kirim request ke Open-Meteo: https://api.open-meteo.com/v1/forecast
 *        dengan parameter:
 *          · current  : temperature_2m, relative_humidity_2m, precipitation,
 *                       weather_code, wind_speed_10m
 *          · hourly   : temperature_2m, precipitation_probability, weather_code
 *          · daily    : weather_code, temperature_2m_max, temperature_2m_min,
 *                       precipitation_probability_max
 *          · timezone : auto
 *      - Jika response sukses → return response()->json($data)
 *      - Jika koneksi gagal / API tidak merespons → return response()->json(['error' => '...'], 500)
 *
 * ROUTE TERHUBUNG (routes/web.php):
 *   GET /cuaca       → index()
 *   GET /api/weather → getWeather()
 *
 * CATATAN:
 *   Open-Meteo adalah layanan cuaca GRATIS, tidak butuh API key.
 *   Dokumentasi: https://open-meteo.com/en/docs
 * ============================================================
 */
class WeatherController extends Controller
{
    /**
     * Render halaman Cuaca & Prediksi.
     * Kirim daftar lahan milik user beserta koordinatnya ke frontend.
     */
    public function index()
    {
        // TODO ST-01:
        // 1. Query agricultural_areas WHERE user_id = Auth::id()
        // 2. SELECT id, name, location_name,
        //           ST_Y(ST_Centroid(geometry)) as latitude,
        //           ST_X(ST_Centroid(geometry)) as longitude
        // 3. return Inertia::render('CuacaPrediksi', ['areas' => $areas])
    }

    /**
     * API endpoint: Ambil data cuaca dari Open-Meteo berdasarkan koordinat lahan.
     * Dipanggil dari frontend: GET /api/weather?lat=...&lon=...
     */
    public function getWeather(Request $request)
    {
        // TODO ST-01:
        // 1. Validasi: lat & lon wajib ada dan harus numeric
        // 2. Http::get('https://api.open-meteo.com/v1/forecast', [...parameter...])
        // 3. Jika sukses → return response()->json($response->json())
        // 4. Jika gagal  → return response()->json(['error' => 'pesan error'], status)
        // 5. Wrap dalam try-catch untuk tangani exception koneksi
    }
}
