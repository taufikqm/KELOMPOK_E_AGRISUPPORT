import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

/**
 * ============================================================
 * STUB: AnalisisRisiko.jsx — Halaman UI Analisis Risiko
 * ============================================================
 *
 * TUGAS TIM:
 *   Implementasikan tampilan UI halaman Analisis Risiko.
 *   Halaman ini menampilkan hasil analisis risiko banjir dan
 *   kekeringan berdasarkan data observasi lapangan.
 *
 * BACKEND TERKAIT:
 *   - app/Http/Controllers/FieldObservationController.php → showRiskAnalysis()
 *
 * PROPS YANG DIKIRIM DARI CONTROLLER:
 *   @param {Object} auth        — data user yang sedang login
 *   @param {Object} observation — data observasi lengkap
 *   @param {Object} riskAnalysis — hasil analisis {
 *                                    flood_risk: { level, score, description },
 *                                    drought_risk: { level, score, description },
 *                                    overall_risk_level,
 *                                    analysis_summary
 *                                  }
 *
 * LAYOUT YANG DIGUNAKAN:
 *   - AuthenticatedLayout (sudah di-import di atas)
 *
 * FITUR YANG PERLU DIIMPLEMENTASI:
 *   [ ] Tampilkan kartu analisis risiko banjir (level + skor + deskripsi)
 *   [ ] Tampilkan kartu analisis risiko kekeringan
 *   [ ] Visualisasi level risiko (indikator warna: hijau/kuning/merah)
 *   [ ] Ringkasan analisis keseluruhan
 *   [ ] Tombol "Lihat Rekomendasi Tindakan" → ke /analisis-risiko/{id}/rekomendasi
 * ============================================================
 */
export default function AnalisisRisiko({ auth, observation, riskAnalysis }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Analisis Risiko</h2>}
        >
            <Head title="Analisis Risiko" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* TODO: Implementasi UI analisis risiko di sini */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
