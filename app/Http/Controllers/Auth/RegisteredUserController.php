<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

/**
 * ============================================================
 * STUB: RegisteredUserController — Modul Autentikasi (Register)
 * ============================================================
 *
 * TUGAS TIM:
 *   Implementasikan method create() dan store() di bawah ini
 *   untuk fitur Registrasi Akun Baru pada AgriSupport.
 *
 * FILE TERKAIT YANG PERLU DIISI JUGA:
 *   - resources/js/Pages/Auth/Register.jsx  (tampilan form registrasi)
 *
 * MODEL YANG DIGUNAKAN:
 *   - App\Models\User
 *
 * ROUTE YANG TERHUBUNG (routes/auth.php):
 *   GET  /register → create() : tampilkan form register
 *   POST /register → store()  : proses pembuatan akun baru
 *
 * REFERENSI FIELD USER (tabel users):
 *   - name         : string  — nama lengkap pengguna
 *   - email        : string  — email unik
 *   - password     : string  — password (harus di-hash dengan Hash::make())
 *   - phone_number : string  — nomor HP (opsional)
 *
 * CATATAN PENTING:
 *   - Setelah store(), jalankan: event(new Registered($user))
 *   - Lakukan auto-login setelah register: Auth::login($user)
 *   - Redirect ke route('dashboard') setelah berhasil
 * ============================================================
 */
class RegisteredUserController extends Controller
{
    /**
     * TODO: Tampilkan halaman form registrasi.
     * Gunakan Inertia::render('Auth/Register').
     */
    public function create(): Response
    {
        // TODO: Implementasi di sini
    }

    /**
     * TODO: Proses pembuatan akun pengguna baru.
     * Validasi input, simpan ke database, login otomatis, redirect ke dashboard.
     */
    public function store(Request $request): RedirectResponse
    {
        // TODO: Implementasi di sini
    }
}
