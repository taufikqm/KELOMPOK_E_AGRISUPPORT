import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

/**
 * ============================================================
 * STUB: WaktuTanam.jsx — Halaman UI Rekomendasi Waktu Tanam
 * ============================================================
 *
 * TUGAS TIM:
 *   Implementasikan tampilan UI halaman Waktu Tanam Optimal.
 *   Halaman ini membantu user menentukan waktu tanam terbaik
 *   berdasarkan analisis data cuaca & kondisi lahan historis.
 *
 * BACKEND TERKAIT:
 *   - app/Http/Controllers/PlantingTimeController.php → index(), analyze()
 *
 * PROPS YANG DIKIRIM DARI CONTROLLER:
 *   @param {Object} auth   — data user yang sedang login
 *   @param {Array}  areas  — daftar wilayah lahan untuk dipilih
 *
 * CARA FETCH HASIL ANALISIS:
 *   Kirim POST ke /waktu-tanam/analisis dengan { agricultural_area_id }
 *   Hasil analisis ditampilkan setelah response diterima.
 *
 * LAYOUT YANG DIGUNAKAN:
 *   - AuthenticatedLayout (sudah di-import di atas)
 *
 * FITUR YANG PERLU DIIMPLEMENTASI:
 *   [ ] Dropdown pilih wilayah lahan
 *   [ ] Tombol "Analisis Waktu Tanam" → POST /waktu-tanam/analisis
 *   [ ] Tampilkan hasil: bulan/periode optimal, alasan, kondisi pendukung
 *   [ ] Visualisasi kalender atau timeline waktu tanam optimal
 *   [ ] Loading state saat analisis sedang diproses
 * ============================================================
 */
export default function WaktuTanam({ auth, areas }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Waktu Tanam Optimal</h2>}
        >
            <Head title="Waktu Tanam Optimal" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* TODO: Implementasi UI rekomendasi waktu tanam di sini */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
