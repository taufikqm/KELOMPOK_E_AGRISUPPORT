<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('field_observations', function (Blueprint $table) {
            $table->decimal('weather_soil_moisture', 5, 3)->nullable()->after('weather_precip_mm');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('field_observations', function (Blueprint $table) {
            $table->dropColumn('weather_soil_moisture');
        });
    }
};

