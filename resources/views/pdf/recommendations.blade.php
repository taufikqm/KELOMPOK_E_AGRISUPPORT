<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <style>
        body { font-family: 'Helvetica', sans-serif; color: #1e293b; line-height: 1.6; margin: 0; padding: 0; }
        .header { text-align: center; border-bottom: 3px solid #3d5a3d; padding-bottom: 20px; margin-bottom: 30px; }
        .title { color: #3d5a3d; font-size: 26px; font-weight: bold; margin: 0; text-transform: uppercase; letter-spacing: 1px; }
        .meta { font-size: 12px; color: #64748b; margin-top: 8px; }
        .section-title { font-size: 18px; font-weight: bold; margin-top: 30px; margin-bottom: 15px; color: #1e293b; border-left: 5px solid #3d5a3d; padding-left: 12px; background: #f8fafc; padding-top: 5px; padding-bottom: 5px; }
        .card { border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px; margin-bottom: 25px; page-break-inside: avoid; background: white; }
        .category { font-size: 11px; font-weight: bold; text-transform: uppercase; color: #64748b; margin-bottom: 4px; letter-spacing: 0.5px; }
        .rec-title { font-size: 18px; font-weight: bold; margin-bottom: 12px; color: #0f172a; }
        .urgency { display: inline-block; padding: 4px 12px; border-radius: 6px; font-size: 11px; font-weight: bold; color: white; margin-bottom: 15px; text-transform: uppercase; }
        .urgency.red { background-color: #ef4444; }
        .urgency.amber { background-color: #f59e0b; }
        .urgency.green { background-color: #3d5a3d; }
        .description { font-size: 14px; color: #475569; margin-bottom: 20px; }
        .steps-title { font-size: 13px; font-weight: bold; margin-bottom: 10px; text-transform: uppercase; color: #1e293b; border-bottom: 1px solid #f1f5f9; padding-bottom: 5px; }
        .step { font-size: 13px; margin-bottom: 8px; color: #475569; padding-left: 5px; }
        .tools-container { margin-top: 20px; padding-top: 15px; border-top: 1px dashed #e2e8f0; }
        .tool { display: inline-block; background: #f1f5f9; border: 1px solid #e2e8f0; padding: 4px 12px; border-radius: 6px; font-size: 12px; margin-right: 8px; margin-top: 8px; color: #334155; }
        .footer { position: fixed; bottom: -30px; left: 0; right: 0; text-align: center; font-size: 10px; color: #94a3b8; border-top: 1px solid #f1f5f9; padding-top: 10px; }
        .summary-box { background: #f1f5f9; border-radius: 10px; padding: 15px; font-size: 14px; color: #334155; font-style: italic; }
    </style>
</head>
<body>
    <div class="header">
        <h1 class="title">Rekomendasi Tindakan Cerdas</h1>
        <div class="meta">
            Lahan: <strong>{{ $observation->agriculturalArea->name ?? 'Lahan Utama' }}</strong> | 
            Lokasi: {{ $observation->agriculturalArea->location_name ?? '-' }} |
            Tanggal Laporan: {{ $date }}
        </div>
    </div>

    <div class="section-title">Ringkasan Analisis Risiko</div>
    <div class="summary-box">
        {{ $metrics['summary'] }}
    </div>

    <div class="section-title">Daftar Tindakan Prioritas</div>
    @foreach($recommendations as $rec)
        <div class="card">
            <div class="category">{{ $rec->category }}</div>
            <div class="rec-title">{{ $rec->title }}</div>
            <div class="urgency {{ $rec->color }}">{{ $rec->urgency }}</div>
            
            <div class="description">{{ $rec->description }}</div>

            @if(isset($rec->details['steps']) && count($rec->details['steps']) > 0)
                <div class="steps-title">Instruksi Langkah Kerja:</div>
                @foreach($rec->details['steps'] as $idx => $step)
                    <div class="step"><strong>{{ $idx + 1 }}.</strong> {{ $step }}</div>
                @endforeach
            @endif

            @if(isset($rec->details['tools']) && count($rec->details['tools']) > 0)
                <div class="tools-container">
                    <div style="font-size: 11px; font-weight: bold; color: #64748b; margin-bottom: 5px; text-transform: uppercase;">Alat & Bahan:</div>
                    @foreach($rec->details['tools'] as $tool)
                        <span class="tool">{{ $tool }}</span>
                    @endforeach
                </div>
            @endif
        </div>
    @endforeach

    <div class="footer">
        AgriSupport Smart Farming System — Dicetak pada {{ now()->format('d/m/Y H:i') }}. 
        Dokumen ini merupakan hasil analisis otomatis berbasis data cuaca Open-Meteo dan observasi lapangan.
    </div>
</body>
</html>
