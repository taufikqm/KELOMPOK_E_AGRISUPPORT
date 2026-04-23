import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

/**
 * ============================================================
 * STUB: PetaRisiko.jsx — Halaman UI Peta Risiko Lahan
 * ============================================================
 *
 * TUGAS TIM:
 *   Implementasikan tampilan UI halaman Peta Risiko Lahan.
 *   Halaman ini menampilkan peta interaktif dengan overlay
 *   level risiko banjir/kekeringan pada setiap wilayah lahan.
 *
 * BACKEND TERKAIT:
 *   - app/Http/Controllers/RiskMapController.php → index()
 *
 * PROPS:
 *   @param {Object} auth   — data user yang sedang login
 *   @param {Array}  areas  — data wilayah lahan + koordinat + level risiko
 *                            [{id, name, lat, lon, flood_risk_level, drought_risk_level}]
 *
 * LIBRARY PETA: Leaflet.js (CSS sudah di-load di app.blade.php)
 *   import L from 'leaflet';
 *   Atau gunakan react-leaflet jika tersedia di package.json.
 *
 * FITUR YANG PERLU DIIMPLEMENTASI:
 *   [ ] Render peta dengan tile layer (OpenStreetMap)
 *   [ ] Marker per wilayah lahan di koordinat yang sesuai
 *   [ ] Popup marker: nama lahan, level risiko banjir & kekeringan
 *   [ ] Warna marker sesuai level risiko (hijau/kuning/merah)
 *   [ ] Legenda peta (keterangan warna level risiko)
 * ============================================================
 */
export default function PetaRisiko({ auth, areas }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Peta Risiko Lahan</h2>}
        >
            <Head title="Peta Risiko Lahan" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* TODO: Implementasi UI peta risiko interaktif di sini */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
