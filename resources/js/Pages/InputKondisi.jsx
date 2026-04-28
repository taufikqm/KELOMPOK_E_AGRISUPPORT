import { useForm, Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';

const OPTS = {
    soil_moisture:      ['Kering', 'Normal', 'Lembab', 'Sangat Basah'],
    water_puddle:       ['Tidak Ada', 'Sedikit', 'Sedang', 'Banyak'],
    crop_condition:     ['Kritis', 'Kurang Baik', 'Baik', 'Sangat Baik'],
    pest_indication:    ['Tidak Ada', 'Ringan', 'Sedang', 'Berat'],
    disease_indication: ['Tidak Ada', 'Ringan', 'Sedang', 'Berat'],
};

function SelectField({ label, name, value, onChange, error }) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label} <span className="text-red-500">*</span>
            </label>
            <select
                value={value}
                onChange={e => onChange(e.target.value)}
                className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    error ? 'border-red-400 bg-red-50' : 'border-gray-300'
                }`}
            >
                <option value="">-- Pilih --</option>
                {OPTS[name].map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <InputError message={error} className="mt-1" />
        </div>
    );
}

export default function InputKondisi({ areas = [], recentObservations = [] }) {
    const today = new Date().toISOString().split('T')[0];

    const { data, setData, post, processing, errors } = useForm({
        agricultural_area_id: '',
        observation_date:     today,
        planting_cycle:       '',
        soil_moisture:        '',
        water_puddle:         '',
        crop_condition:       '',
        pest_indication:      '',
        disease_indication:   '',
        notes:                '',
    });

    const submit = e => {
        e.preventDefault();
        post(route('input-kondisi.store'));
    };

    const fmtDate = d => d
        ? new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
        : '-';

    return (
        <AuthenticatedLayout title="Input Kondisi Lapangan" currentRoute="input-kondisi.index">
            <Head title="Input Kondisi Lapangan" />

            <div className="flex-1 overflow-y-auto p-6">
                <div className="max-w-3xl mx-auto space-y-5">

                    {/* Form */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-base font-semibold text-gray-800 mb-5">Catat Kondisi Lahan</h2>

                        <form onSubmit={submit} className="space-y-5">
                            {/* Wilayah Lahan */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Wilayah Lahan <span className="text-red-500">*</span>
                                </label>
                                {areas.length === 0 ? (
                                    <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                                        Belum ada lahan terdaftar.{' '}
                                        <Link href={route('wilayah-lahan.index')} className="underline font-medium">
                                            Tambahkan lahan terlebih dahulu
                                        </Link>.
                                    </p>
                                ) : (
                                    <select
                                        value={data.agricultural_area_id}
                                        onChange={e => setData('agricultural_area_id', e.target.value)}
                                        className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${
                                            errors.agricultural_area_id ? 'border-red-400 bg-red-50' : 'border-gray-300'
                                        }`}
                                    >
                                        <option value="">-- Pilih lahan --</option>
                                        {areas.map(a => (
                                            <option key={a.id} value={a.id}>{a.name}</option>
                                        ))}
                                    </select>
                                )}
                                <InputError message={errors.agricultural_area_id} className="mt-1" />
                            </div>

                            {/* Tanggal & Siklus */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Tanggal Pengamatan <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        value={data.observation_date}
                                        max={today}
                                        onChange={e => setData('observation_date', e.target.value)}
                                        className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${
                                            errors.observation_date ? 'border-red-400' : 'border-gray-300'
                                        }`}
                                    />
                                    <InputError message={errors.observation_date} className="mt-1" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Siklus Tanam</label>
                                    <input
                                        type="text"
                                        value={data.planting_cycle}
                                        placeholder="cth. Musim Tanam 1 2026"
                                        onChange={e => setData('planting_cycle', e.target.value)}
                                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                            </div>

                            {/* Kondisi Lapangan */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    ['Kelembapan Tanah',    'soil_moisture'],
                                    ['Kondisi Genangan Air', 'water_puddle'],
                                    ['Kondisi Tanaman',      'crop_condition'],
                                    ['Tanda-Tanda Hama',     'pest_indication'],
                                    ['Tanda-Tanda Penyakit', 'disease_indication'],
                                ].map(([label, name]) => (
                                    <SelectField
                                        key={name}
                                        label={label}
                                        name={name}
                                        value={data[name]}
                                        onChange={v => setData(name, v)}
                                        error={errors[name]}
                                    />
                                ))}
                            </div>

                            {/* Catatan */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Catatan Tambahan</label>
                                <textarea
                                    value={data.notes}
                                    onChange={e => setData('notes', e.target.value)}
                                    rows={3}
                                    placeholder="Kondisi khusus yang perlu dicatat..."
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                                />
                                <InputError message={errors.notes} className="mt-1" />
                            </div>

                            <button
                                type="submit"
                                disabled={processing || areas.length === 0}
                                className="w-full sm:w-auto px-6 py-2.5 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white text-sm font-semibold rounded-lg transition-colors"
                            >
                                {processing ? 'Menyimpan...' : 'Simpan & Analisis Risiko →'}
                            </button>
                        </form>
                    </div>

                    {/* Riwayat Terakhir */}
                    {recentObservations.length > 0 && (
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h3 className="text-sm font-semibold text-gray-700 mb-4">10 Catatan Observasi Terakhir</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-xs">
                                    <thead>
                                        <tr className="border-b border-gray-100 text-gray-500 text-left">
                                            <th className="pb-2 pr-4 font-medium">Tanggal</th>
                                            <th className="pb-2 pr-4 font-medium">Lahan</th>
                                            <th className="pb-2 pr-4 font-medium">Kelembapan</th>
                                            <th className="pb-2 font-medium">Genangan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recentObservations.map(obs => (
                                            <tr key={obs.id} className="border-b border-gray-50">
                                                <td className="py-2 pr-4 text-gray-500">{fmtDate(obs.observation_date)}</td>
                                                <td className="py-2 pr-4 font-medium text-gray-800">{obs.agricultural_area?.name ?? '-'}</td>
                                                <td className="py-2 pr-4 text-gray-600">{obs.soil_moisture}</td>
                                                <td className="py-2 text-gray-600">{obs.water_puddle}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
