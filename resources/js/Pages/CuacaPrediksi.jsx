import { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import CurrentWeatherCard from '@/Components/Weather/CurrentWeatherCard';
import WeatherAlertBanner from '@/Components/Weather/WeatherAlertBanner';
import ForecastCard from '@/Components/Weather/ForecastCard';

/**
 * ============================================================
 * AGS-34 | ST-02 — Tampilan Cuaca Saat Ini
 * ============================================================
 *
 * PROPS DARI CONTROLLER (WeatherController@index):
 *   @param {Array} areas — daftar lahan: [{ id, name, location_name, latitude, longitude }]
 *
 * YANG PERLU DIKERJAKAN (ST-02):
 *   1. State Management
 *      - selectedAreaId : id lahan yang sedang dipilih (default: areas[0].id)
 *      - weatherData    : hasil fetch dari /api/weather
 *      - loading        : boolean, true saat sedang fetch
 *      - error          : string pesan error, null jika tidak ada error
 *
 *   2. Fetch Data Cuaca
 *      - Gunakan useEffect yang dipicu saat selectedAreaId berubah
 *      - Fetch ke: GET /api/weather?lat={latitude}&lon={longitude}
 *      - Set loading=true sebelum fetch, loading=false setelah selesai
 *      - Jika gagal, set error dengan pesan yang jelas
 *
 *   3. Tombol Pilihan Lahan (Area Selector)
 *      - Tampilkan satu tombol per lahan dari props areas
 *      - Tombol aktif (selectedAreaId) tampil berbeda (warna/gaya)
 *      - Klik tombol → ubah selectedAreaId → useEffect otomatis fetch ulang
 *      - Jika areas kosong → tampilkan pesan "Belum ada wilayah lahan"
 *
 *   4. State Loading & Error
 *      - Saat loading: tampilkan indikator spinner/loading
 *      - Saat error: tampilkan pesan error
 *
 *   5. Render Komponen (setelah data tersedia):
 *      - <WeatherAlertBanner />  → ST-03, sudah diimport, tinggal pakai
 *      - <CurrentWeatherCard />  → ST-02, implementasi di file komponennya
 *      - <ForecastCard />        → ST-03, sudah diimport, tinggal pakai
 * ============================================================
 */
export default function CuacaPrediksi({ areas = [] }) {
    // TODO ST-02: Tambahkan state di sini
    // const [selectedAreaId, setSelectedAreaId] = useState(...)
    // const [weatherData, setWeatherData]       = useState(null)
    // const [loading, setLoading]               = useState(false)
    // const [error, setError]                   = useState(null)

    // TODO ST-02: Tambahkan selectedArea berdasarkan selectedAreaId
    // const selectedArea = areas.find(a => a.id === selectedAreaId)

    // TODO ST-02: useEffect untuk fetch data cuaca saat selectedAreaId berubah
    // useEffect(() => { ... fetch /api/weather?lat=...&lon=... ... }, [selectedAreaId])

    return (
        <AuthenticatedLayout title="Pemantauan Cuaca" currentRoute="cuaca.index">
            <Head title="Pemantauan Cuaca" />

            <div className="max-w-5xl mx-auto p-4 md:p-6 pb-12">

                {/* TODO ST-03: Tampilkan WeatherAlertBanner jika ada kondisi berbahaya */}
                {/* <WeatherAlertBanner current={weatherData?.current} /> */}

                {/* TODO ST-02: Tombol pilihan lahan (area selector) */}
                {/* Map areas → render satu tombol per lahan */}
                {/* Tombol aktif = selectedAreaId, klik → setSelectedAreaId(area.id) */}

                {/* TODO ST-02: Jika areas kosong, tampilkan pesan */}
                {/* areas.length === 0 && <div>Belum ada wilayah lahan...</div> */}

                {/* TODO ST-02: Tampilkan loading state */}
                {/* loading && <div>Mengambil data cuaca...</div> */}

                {/* TODO ST-02: Tampilkan error state */}
                {/* error && <div>{error}</div> */}

                {/* TODO ST-02: Render CurrentWeatherCard setelah data tersedia */}
                {/* !loading && weatherData?.current && (
                    <CurrentWeatherCard current={weatherData.current} />
                ) */}

                {/* TODO ST-03: Render ForecastCard untuk 5 hari ke depan */}
                {/* !loading && weatherData?.daily && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {weatherData.daily.time.slice(0, 5).map((_, idx) => (
                            <ForecastCard key={idx} index={idx} daily={weatherData.daily} isFirst={idx === 0} />
                        ))}
                    </div>
                ) */}

            </div>
        </AuthenticatedLayout>
    );
}
