import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

/**
 * ============================================================
 * STUB: WilayahLahan.jsx — Halaman UI Kelola Wilayah Lahan
 * ============================================================
 *
 * TUGAS TIM:
 *   Implementasikan tampilan UI halaman Kelola Wilayah Lahan.
 *   Halaman ini menampilkan daftar wilayah lahan milik user
 *   beserta form untuk tambah, edit, dan hapus wilayah.
 *
 * BACKEND TERKAIT:
 *   - app/Http/Controllers/AgriculturalAreaController.php
 *
 * PROPS YANG DIKIRIM DARI CONTROLLER (gunakan sesuai kebutuhan):
 *   @param {Object} auth       — data user yang sedang login
 *   @param {Array}  areas      — daftar wilayah lahan [{id, name, location, area_size, soil_type, ...}]
 *
 * KOMPONEN YANG TERSEDIA DI resources/js/Components/:
 *   - Modal.jsx           — untuk form tambah/edit dalam modal
 *   - PrimaryButton.jsx   — tombol aksi utama
 *   - DangerButton.jsx    — tombol hapus
 *   - TextInput.jsx       — input teks
 *   - InputLabel.jsx      — label input
 *   - InputError.jsx      — pesan error validasi
 *
 * LAYOUT YANG DIGUNAKAN:
 *   - AuthenticatedLayout (sudah di-import di atas)
 *
 * FITUR YANG PERLU DIIMPLEMENTASI:
 *   [ ] Tabel/list daftar wilayah lahan
 *   [ ] Tombol "Tambah Wilayah Baru" → buka modal form
 *   [ ] Form input: nama wilayah, lokasi, luas lahan, jenis tanah
 *   [ ] Tombol edit & hapus per baris data
 *   [ ] Konfirmasi sebelum hapus
 * ============================================================
 */
export default function WilayahLahan({ auth, areas }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Kelola Wilayah Lahan</h2>}
        >
            <Head title="Wilayah Lahan" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* TODO: Implementasi UI halaman Kelola Wilayah Lahan di sini */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}