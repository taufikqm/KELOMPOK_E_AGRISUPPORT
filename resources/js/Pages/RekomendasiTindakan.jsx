import { useState } from 'react';
import { Link, Head, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const URGENCY_CONFIG = {
    SEGERA:    { badge: 'bg-red-100 text-red-700 border-red-200',     dot: 'bg-red-500',    border: 'border-l-red-500' },
    TINGGI:    { badge: 'bg-amber-100 text-amber-700 border-amber-200', dot: 'bg-amber-400',  border: 'border-l-amber-400' },
    TERENCANA: { badge: 'bg-blue-100 text-blue-700 border-blue-200',   dot: 'bg-blue-400',   border: 'border-l-blue-400' },
    RENDAH:    { badge: 'bg-gray-100 text-gray-600 border-gray-200',   dot: 'bg-gray-400',   border: 'border-l-gray-300' },
};

function RecommendationCard({ rec, observationId, onCompleted }) {
    const [loading, setLoading]       = useState(false);
    const [completed, setCompleted]   = useState(rec.is_completed);
    const [expanded, setExpanded]     = useState(false);
    const cfg = URGENCY_CONFIG[rec.urgency] ?? URGENCY_CONFIG.RENDAH;

    const markDone = () => {
        if (completed || loading) return;
        setLoading(true);

        router.post(
            route('rekomendasi-tindakan.mark-completed'),
            { observation_id: observationId, recommendation_id: rec.id },
            {
                preserveScroll: true,
                onSuccess: () => { setCompleted(true); onCompleted(rec.id); },
                onFinish:  () => setLoading(false),
            }
        );
    };

    return (
        <div className={`bg-white rounded-2xl shadow-sm border border-l-4 ${cfg.border} border-gray-100 overflow-hidden transition-opacity ${completed ? 'opacity-70' : ''}`}>
            <div className="p-5">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-2.5 flex-1 min-w-0">
                        <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${cfg.dot}`} />
                        <div className="min-w-0">
                            <p className={`text-sm font-semibold leading-snug ${completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                                {rec.title}
                            </p>
                            <span className="text-[10px] text-gray-400">{rec.category}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                        {completed ? (
                            <span className="text-[11px] font-semibold text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                                ✓ Selesai
                            </span>
                        ) : (
                            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${cfg.badge}`}>
                                {rec.urgency}
                            </span>
                        )}
                    </div>
                </div>

                {/* Deskripsi */}
                <p className="text-xs text-gray-600 leading-relaxed mb-3">{rec.description}</p>

                {/* Langkah-langkah (collapsible) */}
                {rec.steps?.length > 0 && (
                    <div>
                        <button
                            onClick={() => setExpanded(v => !v)}
                            className="text-xs text-green-600 hover:text-green-700 font-medium mb-2"
                        >
                            {expanded ? '▲ Sembunyikan langkah' : '▼ Lihat langkah-langkah'}
                        </button>
                        {expanded && (
                            <ol className="space-y-1.5 pl-4 mb-3">
                                {rec.steps.map((step, i) => (
                                    <li key={i} className="text-xs text-gray-600 list-decimal">{step}</li>
                                ))}
                            </ol>
                        )}
                        {expanded && rec.tools?.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-3">
                                {rec.tools.map(tool => (
                                    <span key={tool} className="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                                        🔧 {tool}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Tombol Tandai Selesai */}
                <button
                    onClick={markDone}
                    disabled={completed || loading}
                    className={`mt-1 w-full py-2 text-xs font-semibold rounded-lg border transition-colors ${
                        completed
                            ? 'bg-gray-50 text-gray-400 border-gray-200 cursor-default'
                            : loading
                                ? 'bg-green-50 text-green-500 border-green-200 cursor-wait'
                                : 'bg-white hover:bg-green-50 text-green-700 border-green-200 hover:border-green-400'
                    }`}
                >
                    {completed ? '✓ Tindakan Selesai' : loading ? 'Menyimpan...' : 'Tandai Selesai'}
                </button>
            </div>
        </div>
    );
}

export default function RekomendasiTindakan({ observation, riskAnalysis, recommendations: initialRecs }) {
    const [recs, setRecs]         = useState(initialRecs ?? []);
    const [completedCount, setCnt] = useState(initialRecs?.filter(r => r.is_completed).length ?? 0);

    const area       = observation.agricultural_area ?? {};
    const allDone    = recs.length > 0 && completedCount >= recs.length;

    const handleCompleted = (id) => setCnt(c => c + 1);

    const fmtDate = d => d
        ? new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
        : '-';

    return (
        <AuthenticatedLayout title="Rekomendasi Tindakan" currentRoute="input-kondisi.index">
            <Head title="Rekomendasi Tindakan" />

            <div className="flex-1 overflow-y-auto p-6">
                <div className="max-w-3xl mx-auto space-y-5">

                    {/* Sub-header */}
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm font-semibold text-gray-800">{area.name}</p>
                            <p className="text-xs text-gray-500">{fmtDate(observation.observation_date)}</p>
                        </div>
                        <Link
                            href={route('analisis-risiko.show', observation.id)}
                            className="text-xs text-gray-500 hover:text-gray-700 underline"
                        >
                            ← Analisis Risiko
                        </Link>
                    </div>

                    {/* Progress */}
                    {recs.length > 0 && (
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-4">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-xs font-medium text-gray-600">
                                    {completedCount} dari {recs.length} tindakan selesai
                                </p>
                                {allDone && (
                                    <span className="text-xs font-semibold text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                                        ✓ Semua selesai
                                    </span>
                                )}
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-1.5">
                                <div
                                    className="bg-green-500 h-1.5 rounded-full transition-all duration-500"
                                    style={{ width: recs.length > 0 ? `${(completedCount / recs.length) * 100}%` : '0%' }}
                                />
                            </div>
                        </div>
                    )}

                    {/* Daftar Rekomendasi */}
                    {recs.length === 0 ? (
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
                            <span className="text-3xl mb-3 block">🌿</span>
                            <p className="text-sm font-semibold text-gray-700">Kondisi Lahan Baik</p>
                            <p className="text-xs text-gray-500 mt-1">
                                Tidak ada tindakan mendesak. Lanjutkan pemantauan rutin.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {recs.map(rec => (
                                <RecommendationCard
                                    key={rec.id}
                                    rec={rec}
                                    observationId={observation.id}
                                    onCompleted={handleCompleted}
                                />
                            ))}
                        </div>
                    )}

                    {/* Aksi bawah */}
                    <Link
                        href={route('input-kondisi.index')}
                        className="block w-full text-center px-6 py-2.5 bg-white hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-xl border border-gray-200 transition-colors"
                    >
                        ← Catat Observasi Baru
                    </Link>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
