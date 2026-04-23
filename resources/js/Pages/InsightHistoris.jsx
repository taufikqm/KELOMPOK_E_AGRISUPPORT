import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

/**
 * ============================================================
 * STUB: InsightHistoris.jsx — Halaman UI Insight Historis
 * ============================================================
 *
 * TUGAS TIM:
 *   Implementasikan tampilan UI halaman Insight Historis.
 *   Halaman ini menampilkan grafik tren iklim dari data historis.
 *
 * BACKEND TERKAIT:
 *   - app/Http/Controllers/HistoricalInsightController.php → index(), getHistoricalData()
 *
 * PROPS:
 *   @param {Object} auth  — data user yang sedang login
 *   @param {Array}  areas — daftar wilayah lahan untuk filter
 *
 * FETCH DATA GRAFIK:
 *   GET /api/historical-data?area_id=...&year=...
 *   Response: { labels: [...], rainfall: [...], temperature: [...], humidity: [...] }
 *
 * LIBRARY CHART: Recharts (sudah terinstall)
 *   import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
 *
 * FITUR YANG PERLU DIIMPLEMENTASI:
 *   [ ] Filter: dropdown wilayah lahan + tahun
 *   [ ] Grafik curah hujan, suhu, dan kelembaban per bulan
 *   [ ] Ringkasan statistik (tertinggi, terendah, rata-rata)
 *   [ ] Insight otomatis berdasarkan tren data
 * ============================================================
 */
export default function InsightHistoris({ auth, areas }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Insight Historis</h2>}
        >
            <Head title="Insight Historis" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* TODO: Implementasi UI insight historis & grafik di sini */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
