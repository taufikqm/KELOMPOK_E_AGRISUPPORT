<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RecommendationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $recommendations = [
            [
                'category' => 'Proteksi Tanaman',
                'title' => 'Penanganan {{disease}}',
                'description' => '{{advice}} Segera lakukan proteksi pada lahan berbasis tanah {{soil_type}} Anda.',
                'urgency' => 'SEGERA',
                'color' => 'red',
                'details' => json_encode([
                    'steps' => [
                        'Identifikasi area yang terdampak {{disease}}',
                        'Gunakan APD lengkap sebelum pengaplikasian pestisida/fungisida',
                        'Semprotkan dosis yang dianjurkan tepat pada fokus sasaran',
                        'Hindari penyemprotan saat angin kencang atau hujan'
                    ],
                    'tools' => ['Bahan Aktif Relevan', 'Sprayer', 'Masker & Sarung Tangan']
                ])
            ],
            [
                'category' => 'Infrastruktur',
                'title' => 'Optimalisasi Drainase ({{soil_type}})',
                'description' => 'Mencegah akumulasi air yang memicu pembusukan pada karakteristik tanah {{soil_type}} yang jenuh air.',
                'urgency' => 'TINGGI',
                'color' => 'amber',
                'details' => json_encode([
                    'steps' => [
                        'Bersihkan sedimen di saluran pembuangan utama',
                        'Pastikan tidak ada air yang menggenang lebih dari 24 jam',
                        'Perbaiki tanggul atau parit yang terkikis erosi',
                        'Cek kemiringan saluran untuk aliran air yang lancar'
                    ],
                    'tools' => ['Cangkul', 'Sekop', 'Sepatu Boot']
                ])
            ],
            [
                'category' => 'Pemupukan',
                'title' => 'Nutrisi & Irigasi Mikro ({{soil_type}})',
                'description' => 'Penyesuaian asupan air dan hara berdasarkan daya serap tanah {{soil_type}} untuk menjaga kesehatan tanaman.',
                'urgency' => 'TERENCANA',
                'color' => 'green',
                'details' => json_encode([
                    'steps' => [
                        'Berikan pupuk larut air sesuai kebutuhan fase pertumbuhan',
                        'Lakukan pengairan saat kelembapan tanah di bawah ambang batas',
                        'Berikan mulsa untuk menekan penguapan pada tanah {{soil_type}}',
                        'Monitor ketersediaan air di sumber irigasi terdekat'
                    ],
                    'tools' => ['Pupuk Majemuk', 'Sistem Irigasi/Gembor', 'Mulsa Organik']
                ])
            ],
            [
                'category' => 'Pencatatan',
                'title' => 'Monitoring Ekosistem Lahan',
                'description' => 'Lakukan pengamatan berkala terhadap keberadaan serangga dan musuh alami di sekitar wilayah {{location}}.',
                'urgency' => 'RENDAH',
                'color' => 'green',
                'details' => json_encode([
                    'steps' => [
                        'Pasang perangkap warna (sticky trap) di sudut lahan',
                        'Catat setiap temuan anomali pada daun atau batang',
                        'Evaluasi efektivitas tindakan yang sudah diambil',
                        'Laporkan kondisi kritis ke penyuluh setempat jika diperlukan'
                    ],
                    'tools' => ['Buku Catatan', 'Yellow Sticky Trap', 'Lup/Kaca Pembesar']
                ])
            ]
        ];

        foreach ($recommendations as $rec) {
            DB::table('recommendations')->updateOrInsert(
                ['title' => $rec['title']],
                array_merge($rec, ['created_at' => now(), 'updated_at' => now()])
            );
        }
    }
}
