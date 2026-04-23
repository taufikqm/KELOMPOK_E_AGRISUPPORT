import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

/**
 * ============================================================
 * STUB: ValidasiObservasi.jsx — Halaman UI Validasi Observasi
 * ============================================================
 *
 * TUGAS TIM:
 *   Implementasikan tampilan UI halaman Validasi Observasi.
 *   Halaman ini menampilkan ringkasan data observasi yang baru
 *   diinput untuk dikonfirmasi sebelum dianalisis lebih lanjut.
 *
 * BACKEND TERKAIT:
 *   - app/Http/Controllers/FieldObservationController.php → showValidation()
 *
 * PROPS YANG DIKIRIM DARI CONTROLLER:
 *   @param {Object} auth        — data user yang sedang login
 *   @param {Object} observation — data observasi {id, agricultural_area, observation_date,
 *                                  rainfall, temperature, humidity, flood_risk_level,
 *                                  drought_risk_level, notes}
 *
 * LAYOUT YANG DIGUNAKAN:
 *   - AuthenticatedLayout (sudah di-import di atas)
 *
 * FITUR YANG PERLU DIIMPLEMENTASI:
 *   [ ] Tampilkan ringkasan data observasi (nama lahan, tanggal, curah hujan, dll)
 *   [ ] Tampilkan badge level risiko banjir & kekeringan (low/medium/high)
 *   [ ] Tombol "Lihat Analisis Risiko" → ke /analisis-risiko/{id}
 *   [ ] Tombol "Kembali" → ke /input-kondisi
 * ============================================================
 */
export default function ValidasiObservasi({ auth, observation }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Validasi Observasi</h2>}
        >
            <Head title="Validasi Observasi" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* TODO: Implementasi UI validasi observasi di sini */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
