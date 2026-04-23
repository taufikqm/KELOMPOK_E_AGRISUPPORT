import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

/**
 * ============================================================
 * STUB: RiwayatLahan.jsx — Halaman UI Riwayat Lahan
 * ============================================================
 *
 * TUGAS TIM:
 *   Implementasikan tampilan UI halaman Riwayat Lahan.
 *   Halaman ini menampilkan histori seluruh aktivitas & observasi
 *   yang telah dicatat untuk setiap wilayah lahan.
 *
 * BACKEND TERKAIT:
 *   - app/Http/Controllers/LandHistoryController.php → index(), getData()
 *
 * PROPS YANG DIKIRIM DARI CONTROLLER:
 *   @param {Object} auth  — data user yang sedang login
 *   @param {Array}  areas — daftar wilayah lahan untuk filter
 *
 * CARA FETCH DATA HISTORIS:
 *   Data diambil dinamis dari endpoint: GET /api/land-history?area_id=...&date_from=...&date_to=...
 *   Gunakan fetch() atau axios dari dalam komponen React.
 *
 * LAYOUT YANG DIGUNAKAN:
 *   - AuthenticatedLayout (sudah di-import di atas)
 *
 * FITUR YANG PERLU DIIMPLEMENTASI:
 *   [ ] Filter: dropdown wilayah lahan + rentang tanggal
 *   [ ] Tabel/list riwayat observasi (tanggal, curah hujan, suhu, level risiko)
 *   [ ] Badge warna level risiko (low=hijau, medium=kuning, high=merah)
 *   [ ] Tombol detail per entri riwayat
 *   [ ] Pagination atau infinite scroll
 *   [ ] Export data (opsional)
 * ============================================================
 */
export default function RiwayatLahan({ auth, areas }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Riwayat Lahan</h2>}
        >
            <Head title="Riwayat Lahan" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* TODO: Implementasi UI riwayat lahan di sini */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
