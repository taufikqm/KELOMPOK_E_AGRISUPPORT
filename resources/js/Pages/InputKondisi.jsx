import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

/**
 * ============================================================
 * STUB: InputKondisi.jsx — Halaman UI Input Kondisi Lapangan
 * ============================================================
 *
 * TUGAS TIM:
 *   Implementasikan tampilan UI halaman Input Kondisi Lapangan.
 *   Halaman ini menyediakan form bagi user untuk mencatat
 *   kondisi cuaca dan lapangan terkini di lahan mereka.
 *
 * BACKEND TERKAIT:
 *   - app/Http/Controllers/FieldObservationController.php → index(), store()
 *
 * PROPS YANG DIKIRIM DARI CONTROLLER:
 *   @param {Object} auth   — data user yang sedang login
 *   @param {Array}  areas  — daftar wilayah lahan untuk dropdown pilihan
 *
 * KOMPONEN YANG TERSEDIA DI resources/js/Components/:
 *   - PrimaryButton.jsx   — tombol submit
 *   - TextInput.jsx       — input teks / angka
 *   - InputLabel.jsx      — label input
 *   - InputError.jsx      — pesan error validasi
 *
 * LAYOUT YANG DIGUNAKAN:
 *   - AuthenticatedLayout (sudah di-import di atas)
 *
 * FITUR YANG PERLU DIIMPLEMENTASI:
 *   [ ] Dropdown pilih wilayah lahan
 *   [ ] Input tanggal observasi
 *   [ ] Input curah hujan (mm)
 *   [ ] Input suhu (°C)
 *   [ ] Input kelembaban (%)
 *   [ ] Textarea catatan tambahan
 *   [ ] Tombol submit → POST ke /input-kondisi
 *   [ ] Setelah submit, diarahkan ke halaman ValidasiObservasi
 * ============================================================
 */
export default function InputKondisi({ auth, areas }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Input Kondisi Lapangan</h2>}
        >
            <Head title="Input Kondisi Lapangan" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* TODO: Implementasi form input kondisi lapangan di sini */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
