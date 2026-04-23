import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

/**
 * ============================================================
 * STUB: CuacaPrediksi.jsx — Halaman UI Cuaca & Prediksi
 * ============================================================
 *
 * TUGAS TIM:
 *   Implementasikan tampilan UI halaman Cuaca & Prediksi.
 *   Halaman ini menampilkan data cuaca real-time dan prakiraan
 *   berdasarkan koordinat lokasi lahan user.
 *
 * BACKEND TERKAIT:
 *   - app/Http/Controllers/WeatherController.php → index(), getWeather()
 *
 * PROPS YANG DIKIRIM DARI CONTROLLER:
 *   @param {Object} auth  — data user yang sedang login
 *   @param {Array}  areas — daftar wilayah lahan beserta koordinat
 *
 * CARA FETCH DATA CUACA:
 *   Data cuaca diambil secara dinamis dari endpoint: GET /api/weather?lat=...&lon=...
 *   Gunakan fetch() atau axios dari dalam komponen React (bukan SSR).
 *
 * LAYOUT YANG DIGUNAKAN:
 *   - AuthenticatedLayout (sudah di-import di atas)
 *
 * FITUR YANG PERLU DIIMPLEMENTASI:
 *   [ ] Dropdown pilih wilayah lahan (untuk memilih koordinat)
 *   [ ] Tampilkan data cuaca saat ini: suhu, kelembaban, cuaca, angin
 *   [ ] Tampilkan prakiraan cuaca beberapa hari ke depan
 *   [ ] Indikator visual cuaca (ikon cuaca, warna latar sesuai kondisi)
 *   [ ] Loading state saat data sedang di-fetch
 * ============================================================
 */
export default function CuacaPrediksi({ auth, areas }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Cuaca & Prediksi</h2>}
        >
            <Head title="Cuaca & Prediksi" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* TODO: Implementasi UI cuaca & prediksi di sini */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
