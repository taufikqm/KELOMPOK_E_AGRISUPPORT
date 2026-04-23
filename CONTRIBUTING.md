# 🌾 AgriSupport — Panduan Kontribusi Tim

> Dokumen ini adalah panduan resmi bagi seluruh anggota tim **Kelompok E** untuk mengerjakan sprint menggunakan repository skeleton ini.  
> Baca seluruh dokumen ini sebelum mulai mengerjakan tugas.

---

## 📋 Daftar Isi

1. [Informasi Proyek](#informasi-proyek)
2. [Setup Awal (Wajib Dilakukan Sekali)](#setup-awal)
3. [Alur Kerja Git (Wajib Diikuti)](#alur-kerja-git)
4. [Pembagian Tugas Sprint 1](#pembagian-tugas-sprint-1)
5. [Panduan Per Anggota](#panduan-per-anggota)
6. [Koordinasi File Bersama](#koordinasi-file-bersama)
7. [Standar Penulisan Kode](#standar-penulisan-kode)
8. [FAQ](#faq)

---

## Informasi Proyek

| | |
|---|---|
| **Nama Proyek** | AgriSupport — Sistem Pemantauan & Analisis Risiko Lahan Pertanian |
| **Repository** | https://github.com/taufikqm/KELOMPOK_E_AGRISUPPORT |
| **Jira Board** | https://taufikqm.atlassian.net/jira/software/projects/AGS/boards |
| **Sprint Aktif** | AGS Sprint 1 (13 Apr – 8 Mei 2026) |
| **Tech Stack** | Laravel 11 + Inertia.js + React (JSX) + PostgreSQL (Supabase) |
| **PM** | Taufik Qurohman |

---

## Setup Awal

Lakukan langkah ini **satu kali** saat pertama kali setup di komputer kamu.

### 1. Clone Repository

```bash
git clone https://github.com/taufikqm/KELOMPOK_E_AGRISUPPORT.git
cd KELOMPOK_E_AGRISUPPORT
```

### 2. Install Dependencies

```bash
# PHP dependencies
composer install

# Node.js dependencies
npm install
```

### 3. Konfigurasi Environment

```bash
# Salin file env
cp .env.example .env

# Generate application key
php artisan key:generate
```

Setelah itu, **isi 2 nilai yang dikosongkan** (minta ke PM/Taufik via chat):

```env
DB_PASSWORD=           # ← isi dengan password database dari PM
WEATHER_API_KEY=       # ← isi dengan API key cuaca dari PM
```

### 4. Siapkan Database

```bash
# Jalankan migrasi tabel
php artisan migrate

# (Opsional) Isi data awal
php artisan db:seed
```

### 5. Jalankan Aplikasi

```bash
# Terminal 1 — Backend Laravel
php artisan serve

# Terminal 2 — Frontend Vite (React)
npm run dev
```

Buka browser: **http://127.0.0.1:8000**

---

## Alur Kerja Git

> ⚠️ **JANGAN langsung commit ke branch `master`.** Selalu gunakan branch fitur.

### Langkah-langkah

```bash
# 1. Pastikan branch master kamu up-to-date
git checkout master
git pull origin master

# 2. Buat branch baru untuk fitur kamu
git checkout -b feat/namamu/nama-fitur
# Contoh: git checkout -b feat/arjuna/wilayah-lahan

# 3. Kerjakan tugas kamu (isi file stub yang ditugaskan)

# 4. Simpan perubahan
git add .
git commit -m "feat: deskripsi singkat apa yang kamu buat"

# 5. Push ke GitHub
git push origin feat/namamu/nama-fitur

# 6. Buat Pull Request di GitHub → target branch: master
#    Minta review ke PM sebelum di-merge
```

### Format Nama Branch

```
feat/{namaanggota}/{nama-fitur}

Contoh:
  feat/arjuna/wilayah-lahan
  feat/daenisty/dashboard
  feat/tavi/cuaca-prakiraan
  feat/ketrin/notifikasi-cuaca
  feat/ketrin/rekomendasi
  feat/bian/mesin-risiko
```

### Format Pesan Commit

```
feat: implementasi halaman input kondisi lapangan
fix: perbaiki validasi form tambah lahan
style: rapikan layout kartu cuaca
```

---

## Pembagian Tugas Sprint 1

Sprint 1 berisi **10 PBI** yang dibagi ke **6 anggota**.

### 🗺️ Tabel Pembagian Utama

| Anggota | PBI Jira | Judul Fitur | Status |
|---------|----------|-------------|--------|
| **Taufik Qurohman** | AGS-22 | PBI 07 — Landing Page | 🟠 IN REVIEW |
| **Taufik Qurohman** | AGS-21 | PBI 06 — Analisis Risiko & Rekomendasi | 🟡 In Progress |
| **Arjuna Rayihan Jayadi** | AGS-1 | PBI 01 — Pengelolaan Wilayah Lahan | 🟡 In Progress |
| **Arjuna Rayihan Jayadi** | AGS-3 | PBI 03 — Verifikasi Akun & Data oleh Admin | 🔵 To Do |
| **Daenisty Cecillia** | AGS-2 | PBI 02 — Dashboard Petani | 🔵 To Do |
| **Daenisty Cecillia** | AGS-51 | PBI 10 — Register & Login | 🟠 IN REVIEW |
| **Tavi Reyhan Ath Thariq** | AGS-19 | PBI 04 — Cuaca & Prakiraan 5 Hari | 🟡 In Progress |
| **Ketrin Fransiska** | AGS-20 | PBI 05 — Notifikasi Peringatan Cuaca Ekstrem | 🔵 To Do |
| **Ketrin Fransiska** | AGS-24 | PBI 09 — Rekomendasi Tindakan Pertanian | 🟡 In Progress |
| **Bian** | AGS-23 | PBI 08 — Mesin Penghitung Risiko Lahan | 🟡 In Progress |

---

## Panduan Per Anggota

---

### 👤 Arjuna Rayihan Jayadi

**Branch yang dibuat:**
```bash
git checkout -b feat/arjuna/wilayah-lahan
git checkout -b feat/arjuna/admin-verifikasi
```

#### PBI 01 — Pengelolaan Wilayah Lahan (`AGS-1`)

**File yang harus diisi:**

| File | Subtask Jira | Yang Dikerjakan |
|------|-------------|-----------------|
| `app/Http/Controllers/AgriculturalAreaController.php` | AGS-27 | Method `index()`, `store()`, `update()`, `destroy()` |
| `resources/js/Pages/WilayahLahan.jsx` | AGS-28 | Tampilan daftar lahan + panel detail |
| `resources/js/Components/WilayahLahan/TambahWilayahModal.jsx` | AGS-29 | Modal form tambah lahan + peta |
| `resources/js/Components/WilayahLahan/EditWilayahModal.jsx` | AGS-29 | Modal form edit lahan |
| `resources/js/Components/WilayahLahan/HapusWilayahModal.jsx` | AGS-29 | Konfirmasi hapus lahan |
| `resources/js/Components/WilayahLahan/LahanCard.jsx` | AGS-28 | Kartu lahan di daftar |
| `resources/js/Components/WilayahLahan/DetailPanel.jsx` | AGS-28 | Panel detail lahan sebelah kanan |
| `resources/js/Components/WilayahLahan/WilayahFormFields.jsx` | AGS-29 | Field-field form lahan |

#### PBI 03 — Verifikasi Akun & Data Lahan oleh Admin (`AGS-3`)

> ⚠️ File untuk PBI 03 **belum ada di skeleton** — Arjuna perlu membuat file baru.

**File yang harus dibuat:**

| File Baru | Subtask Jira | Yang Dikerjakan |
|-----------|-------------|-----------------|
| `app/Http/Controllers/AdminController.php` | AGS-26, AGS-55 | Logika verifikasi, tolak, kelola status akun |
| `app/Http/Middleware/AdminOnly.php` | AGS-26 | Middleware pembatas akses admin |
| `resources/js/Pages/Admin/UserVerification.jsx` | AGS-25 | Halaman panel admin + tabel verifikasi |
| Migration baru: `add_role_to_users_table` | AGS-26 | Tambah kolom `role` ke tabel users |

**Daftarkan route di `routes/web.php`:**
```php
// Admin routes
Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
    Route::get('/users', [AdminController::class, 'index']);
    Route::post('/users/{id}/verify', [AdminController::class, 'verify']);
    Route::post('/users/{id}/reject', [AdminController::class, 'reject']);
});
```

---

### 👤 Daenisty Cecillia

**Branch yang dibuat:**
```bash
git checkout -b feat/daenisty/dashboard
git checkout -b feat/daenisty/register-login
```

#### PBI 02 — Dashboard Petani (`AGS-2`)

**File yang harus diisi/dibuat:**

| File | Subtask Jira | Yang Dikerjakan |
|------|-------------|-----------------|
| `app/Http/Controllers/DashboardController.php` | AGS-58 | Kumpulkan data ringkasan: cuaca hari ini, observasi terakhir, notifikasi *(buat file baru)* |
| `resources/js/Pages/Dashboard.jsx` | AGS-59, AGS-60 | Tampilan kartu cuaca, banner peringatan, pilihan lahan aktif |

> **Catatan:** `Dashboard.jsx` sudah ada di skeleton. Lihat isinya dan sesuaikan jika perlu.

#### PBI 10 — Register & Login (`AGS-51`)

**File yang harus diisi:**

| File | Yang Dikerjakan |
|------|----------------|
| `app/Http/Controllers/Auth/RegisteredUserController.php` | Method `create()` dan `store()` |
| `resources/js/Pages/Auth/Register.jsx` | Form registrasi lengkap |
| `app/Http/Controllers/Auth/AuthenticatedSessionController.php` | Method `create()`, `store()`, `destroy()` (cek apakah sudah terisi) |
| `resources/js/Pages/Auth/Login.jsx` | Form login (cek apakah sudah terisi) |

**Field form Register yang harus ada:**
- Nama Lengkap (`name`)
- Email (`email`)
- Nomor HP (`phone_number`) — opsional
- Password (`password`)
- Konfirmasi Password (`password_confirmation`)

---

### 👤 Tavi Reyhan Ath Thariq

**Branch yang dibuat:**
```bash
git checkout -b feat/tavi/cuaca-prakiraan
```

#### PBI 04 — Pemantauan Cuaca & Prakiraan 5 Hari (`AGS-19`)

**File yang harus diisi:**

| File | Subtask Jira | Yang Dikerjakan |
|------|-------------|-----------------|
| `app/Http/Controllers/WeatherController.php` | AGS-33 | Method `index()` + `getWeather()` — fetch dari Open-Meteo API |
| `resources/js/Pages/CuacaPrediksi.jsx` | AGS-34, AGS-35 | Tampilan cuaca saat ini + prakiraan 5 hari |

**Endpoint yang harus dibuat:**
```
GET /cuaca              → WeatherController@index  (render halaman)
GET /api/weather        → WeatherController@getWeather (return JSON)
  Parameter: ?lat={latitude}&lon={longitude}
```

**Referensi API Cuaca (Open-Meteo — gratis, tanpa API key):**
```
https://api.open-meteo.com/v1/forecast
  ?latitude={lat}
  &longitude={lon}
  &current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,weather_code
  &daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weather_code
  &forecast_days=5
  &timezone=Asia/Jakarta
```

> **Catatan:** `WEATHER_API_KEY` di `.env` sudah tersedia jika ingin menggunakan OpenWeatherMap sebagai alternatif.

---

### 👤 Ketrin Fransiska

**Branch yang dibuat:**
```bash
git checkout -b feat/ketrin/notifikasi-cuaca
git checkout -b feat/ketrin/rekomendasi
```

#### PBI 05 — Notifikasi Peringatan Cuaca Ekstrem (`AGS-20`)

**File yang harus diisi (koordinasi dengan Tavi & Daenisty):**

| File | Subtask Jira | Yang Dikerjakan |
|------|-------------|-----------------|
| `app/Http/Controllers/WeatherController.php` | AGS-36, AGS-37 | Tambahkan logika pengecekan cuaca ekstrem + pesan peringatan per kondisi |
| `resources/js/Pages/CuacaPrediksi.jsx` | — | Tambahkan komponen banner peringatan |
| `resources/js/Pages/Dashboard.jsx` | — | Tambahkan banner peringatan di dashboard |

**Batas cuaca yang dianggap berbahaya (referensi):**
- Curah hujan > 50mm/hari → ⚠️ Waspada banjir
- Curah hujan > 100mm/hari → 🚨 Kritis banjir
- Suhu > 38°C → ⚠️ Waspada kekeringan
- Kelembapan > 90% selama 3+ hari → ⚠️ Waspada penyakit

#### PBI 09 — Rekomendasi Tindakan Pertanian (`AGS-24`)

**File yang harus diisi (koordinasi dengan Taufik):**

| File | Yang Dikerjakan |
|------|----------------|
| `app/Http/Controllers/FieldObservationController.php` | Method `showRecommendations()` dan `markAsCompleted()` — logika pemilih rekomendasi dari tabel `recommendations` |
| `resources/js/Pages/RekomendasiTindakan.jsx` | Tampilan daftar kartu rekomendasi + tombol "Selesaikan Tugas" |

---

### 👤 Bian

**Branch yang dibuat:**
```bash
git checkout -b feat/bian/mesin-risiko
```

#### PBI 08 — Mesin Penghitung Risiko Lahan Otomatis (`AGS-23`)

**File yang harus diisi:**

| File | Yang Dikerjakan |
|------|----------------|
| `app/Http/Controllers/FieldObservationController.php` | Implementasi logika kalkulasi skor risiko (koordinasi dengan Taufik) |
| `app/Http/Controllers/RiskMapController.php` | Method `index()` — kirim data semua lahan + level risiko ke peta |
| `resources/js/Pages/PetaRisiko.jsx` | Tampilan peta interaktif dengan marker risiko per lahan |

**Logika kalkulasi risiko yang harus diimplementasi:**

```php
// 3 skor yang harus dihasilkan (masing-masing 0–100):
$skorKekeringan = ...; // berdasarkan kelembapan tanah, suhu, curah hujan
$skorGenangan   = ...; // berdasarkan kondisi genangan, curah hujan, jenis tanah
$skorPenyakit   = ...; // berdasarkan kondisi tanaman, tanda penyakit, kelembapan

// Penyesuaian per jenis tanah:
// Aluvial    → lebih rentan genangan (+10 skor genangan)
// Regosol    → lebih rentan kekeringan (+10 skor kekeringan)
// Andosol    → standar
// Latosol    → standar
// Podsolik   → lebih rentan penyakit (+5 skor penyakit)
// Grumusol   → lebih rentan kekeringan (+10 skor kekeringan)
```

**Library peta yang tersedia (sudah terinstall):**
```js
// Leaflet.js sudah ada di package.json
import L from 'leaflet';
// CSS Leaflet sudah di-load otomatis via Vite
```

---

### 👤 Taufik Qurohman (PM)

**Branch yang dibuat:**
```bash
git checkout -b feat/taufik/analisis-risiko
```

#### PBI 07 — Landing Page (`AGS-22`) ✅ SELESAI

> `resources/js/Pages/Welcome.jsx` sudah lengkap. Tidak perlu dikerjakan lagi.

#### PBI 06 — Analisis Risiko & Rekomendasi (`AGS-21`)

**File yang harus diisi:**

| File | Yang Dikerjakan |
|------|----------------|
| `app/Http/Controllers/FieldObservationController.php` | Method `index()`, `store()`, `showValidation()`, `showRiskAnalysis()` — alur utama input kondisi |
| `resources/js/Pages/InputKondisi.jsx` | Form input kondisi lapangan |
| `resources/js/Pages/ValidasiObservasi.jsx` | Ringkasan data observasi + perbandingan dengan cuaca |
| `resources/js/Pages/AnalisisRisiko.jsx` | Tampilan 3 indikator risiko + ringkasan narasi |

---

## Koordinasi File Bersama

> File-file berikut dikerjakan lebih dari satu orang. **Wajib koordinasi via grup chat sebelum mulai.**

| File | Dikerjakan Oleh | Cara Koordinasi |
|------|-----------------|-----------------|
| `FieldObservationController.php` | Taufik (alur), Bian (kalkulasi), Ketrin (rekomendasi) | Taufik kerjakan dulu `index()` & `store()`. Bian kerjakan method kalkulasi terpisah. Ketrin kerjakan `showRecommendations()` terakhir. |
| `WeatherController.php` | Tavi (fetch data), Ketrin (logika alert) | Tavi selesaikan `getWeather()` dulu. Ketrin tambahkan fungsi `checkWeatherAlert()` setelah Tavi selesai. |
| `CuacaPrediksi.jsx` | Tavi (tampilan), Ketrin (banner) | Tavi buat struktur halaman. Ketrin tambahkan komponen `<WeatherAlertBanner>` di atas. |
| `Dashboard.jsx` | Daenisty (utama), Ketrin (banner) | Daenisty selesaikan dashboard dulu. Ketrin tambahkan banner setelahnya via PR terpisah. |
| `RekomendasiTindakan.jsx` | Taufik (alur), Ketrin (konten) | Taufik buat struktur halaman. Ketrin isi logika konten rekomendasi. |

---

## Standar Penulisan Kode

### PHP (Laravel Controller)

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ContohController extends Controller
{
    /**
     * Deskripsi singkat method ini.
     */
    public function index(Request $request)
    {
        // Selalu filter data berdasarkan user yang login
        $data = Model::where('user_id', Auth::id())->get();

        return Inertia::render('NamaHalaman', [
            'data' => $data,
        ]);
    }
}
```

### JSX (React Page)

```jsx
import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function NamaHalaman({ auth, data }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl">Judul Halaman</h2>}
        >
            <Head title="Judul Halaman" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Konten halaman */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
```

### Aturan Umum

- ✅ Gunakan bahasa Indonesia untuk teks UI yang dilihat pengguna
- ✅ Gunakan bahasa Inggris untuk nama variabel, method, dan komentar kode
- ✅ Selalu validasi input di sisi backend (Laravel)
- ✅ Selalu filter data berdasarkan `Auth::id()` agar data antar user tidak bocor
- ❌ Jangan hardcode password atau API key di dalam kode
- ❌ Jangan commit file `.env` ke GitHub

---

## FAQ

**Q: Saya tidak mengerti isi file stub, harus mulai dari mana?**  
A: Baca komentar `// TODO` dan deskripsi `TUGAS TIM` di dalam file stub. Semua petunjuk sudah tersedia di sana. Jika masih bingung, tanya PM (Taufik).

**Q: File yang saya butuhkan belum ada di skeleton?**  
A: Beberapa PBI (terutama PBI 03) memang perlu membuat file baru. Buat file di path yang sesuai dengan struktur Laravel, lalu daftarkan di route yang tepat.

**Q: Bagaimana cara lihat hasilnya setelah kode ditulis?**  
A: Pastikan `php artisan serve` dan `npm run dev` sedang berjalan. Buka `http://127.0.0.1:8000` di browser.

**Q: Saya mengubah database (tambah kolom/tabel baru)?**  
A: Buat migration baru: `php artisan make:migration nama_migration`. Jangan ubah file migration yang sudah ada.

**Q: Bagaimana cara submit tugas?**  
A: `git push` ke branch kamu, lalu buat **Pull Request** di GitHub dari branch kamu ke `master`. PM akan mereview sebelum di-merge.

**Q: Ada error saat `composer install` atau `npm install`?**  
A: Pastikan PHP >= 8.2, Node.js >= 18, dan Composer terinstall. Hubungi PM jika masih error.

---

<div align="center">

**Kelompok E — PPL-SI-4701**  
AgriSupport © 2026

</div>
