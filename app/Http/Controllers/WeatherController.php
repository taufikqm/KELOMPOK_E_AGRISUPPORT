<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

/**
 * ============================================================
 * STUB: WeatherController — Modul Cuaca & Prediksi
 * ============================================================
 *
 * TUGAS TIM:
 *   Implementasikan seluruh method di bawah ini sesuai fitur
 *   Cuaca & Prediksi pada aplikasi AgriSupport.
 *
 * FILE TERKAIT YANG PERLU DIISI JUGA:
 *   - resources/js/Pages/CuacaPrediksi.jsx  (tampilan UI cuaca)
 *
 * ROUTE YANG TERHUBUNG (routes/web.php):
 *   GET /cuaca        → index()      : halaman utama cuaca
 *   GET /api/weather  → getWeather() : endpoint JSON data cuaca
 *
 * CATATAN INTEGRASI API:
 *   - Gunakan API cuaca eksternal (mis. OpenWeatherMap / BMKG)
 *   - API Key dikonfigurasi di file .env → WEATHER_API_KEY
 *   - getWeather() mengembalikan response()->json([...])
 *
 * REFERENSI PARAMETER getWeather():
 *   - lat  : latitude lokasi lahan
 *   - lon  : longitude lokasi lahan
 * ============================================================
 */
class WeatherController extends Controller
{
    /**
     * TODO: Tampilkan halaman Cuaca & Prediksi.
     * Gunakan Inertia::render('CuacaPrediksi', [...]).
     */
    public function index(Request $request)
    {
        // TODO: Implementasi di sini
    }

    /**
     * TODO: Endpoint API yang mengembalikan data cuaca dalam format JSON.
     * Ambil parameter lat & lon dari $request, fetch dari API cuaca eksternal.
     * Return: response()->json([...])
     */
    public function getWeather(Request $request)
    {
        // TODO: Implementasi di sini
    }
}
