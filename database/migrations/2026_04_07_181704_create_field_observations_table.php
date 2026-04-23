<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('field_observations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('agricultural_area_id')->constrained()->onDelete('cascade');
            $table->string('planting_cycle')->nullable();
            $table->date('observation_date');
            $table->string('soil_moisture'); // Kering, Normal, Lembab, Sangat Basah
            $table->string('water_puddle');  // Tidak Ada, Sedikit, Sedang, Banyak
            $table->string('crop_condition'); // Kritis, Kurang Baik, Baik, Sangat Baik
            $table->string('pest_indication'); // Tidak Ada, Ringan, Sedang, Berat
            $table->string('disease_indication'); // Tidak Ada, Ringan, Sedang, Berat
            $table->text('notes')->nullable();
            // Weather snapshot saat observasi
            $table->decimal('weather_temp', 5, 2)->nullable();
            $table->string('weather_condition')->nullable();
            $table->decimal('weather_humidity', 5, 2)->nullable();
            $table->decimal('weather_wind_kph', 5, 2)->nullable();
            $table->decimal('weather_precip_mm', 5, 2)->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('field_observations');
    }
};
