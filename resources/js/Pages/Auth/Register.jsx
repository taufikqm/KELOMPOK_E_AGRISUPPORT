import { Head, Link } from '@inertiajs/react';

/**
 * ============================================================
 * STUB: Register.jsx — Halaman UI Form Registrasi
 * ============================================================
 *
 * TUGAS TIM:
 *   Implementasikan tampilan UI halaman form registrasi akun baru.
 *
 * BACKEND TERKAIT:
 *   - app/Http/Controllers/Auth/RegisteredUserController.php → create(), store()
 *
 * PROPS:
 *   (tidak ada props khusus dari controller untuk halaman ini)
 *
 * KOMPONEN YANG TERSEDIA:
 *   - resources/js/Components/InputLabel.jsx
 *   - resources/js/Components/TextInput.jsx
 *   - resources/js/Components/InputError.jsx
 *   - resources/js/Components/PrimaryButton.jsx
 *
 * LAYOUT YANG DIGUNAKAN:
 *   - resources/js/Layouts/GuestLayout.jsx
 *
 * FIELD FORM YANG DIPERLUKAN:
 *   - Nama Lengkap  (name)
 *   - Email         (email)
 *   - Nomor HP      (phone_number) — opsional
 *   - Password      (password)
 *   - Konfirmasi Password (password_confirmation)
 *
 * CARA SUBMIT FORM:
 *   Gunakan useForm dari @inertiajs/react:
 *   import { useForm } from '@inertiajs/react';
 *   const { data, setData, post, errors } = useForm({...});
 *   Submit: post(route('register'))
 *
 * FITUR YANG PERLU DIIMPLEMENTASI:
 *   [ ] Form lengkap dengan semua field di atas
 *   [ ] Validasi error per field (tampilkan InputError)
 *   [ ] Tombol "Daftar" untuk submit
 *   [ ] Link "Sudah punya akun? Masuk" → route('login')
 * ============================================================
 */
export default function Register() {
    return (
        <>
            <Head title="Daftar Akun" />
            {/* TODO: Implementasi form registrasi di sini */}
            {/* Gunakan GuestLayout sebagai wrapper */}
        </>
    );
}
