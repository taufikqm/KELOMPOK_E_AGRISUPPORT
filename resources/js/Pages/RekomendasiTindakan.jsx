import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

/**
 * ============================================================
 * STUB: RekomendasiTindakan.jsx — Halaman UI Rekomendasi Tindakan
 * ============================================================
 *
 * TUGAS TIM:
 *   Implementasikan tampilan UI halaman Rekomendasi Tindakan.
 *   Halaman ini menampilkan daftar rekomendasi tindakan yang
 *   dihasilkan berdasarkan hasil analisis risiko lapangan.
 *
 * BACKEND TERKAIT:
 *   - app/Http/Controllers/FieldObservationController.php → showRecommendations(), markAsCompleted()
 *
 * PROPS YANG DIKIRIM DARI CONTROLLER:
 *   @param {Object} auth            — data user yang sedang login
 *   @param {Object} observation     — data observasi terkait
 *   @param {Array}  recommendations — daftar rekomendasi [{id, title, description,
 *                                      priority, status, category}]
 *
 * LAYOUT YANG DIGUNAKAN:
 *   - AuthenticatedLayout (sudah di-import di atas)
 *
 * FITUR YANG PERLU DIIMPLEMENTASI:
 *   [ ] Daftar kartu rekomendasi tindakan (judul, deskripsi, prioritas)
 *   [ ] Badge prioritas (tinggi/sedang/rendah) dengan warna berbeda
 *   [ ] Tombol "Tandai Selesai" per rekomendasi → POST /rekomendasi/mark-completed
 *   [ ] Status visual (selesai/belum) per item rekomendasi
 *   [ ] Tombol "Kembali ke Analisis Risiko"
 * ============================================================
 */
export default function RekomendasiTindakan({ auth, observation, recommendations }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Rekomendasi Tindakan</h2>}
        >
            <Head title="Rekomendasi Tindakan" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* TODO: Implementasi UI rekomendasi tindakan di sini */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
