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
        Schema::create('medalTally', function (Blueprint $table) {
            $table->id('id'); // Primary key
            $table->string('chapter');
            $table->integer('bronze')->default(0);
            $table->integer('silver')->default(0);
            $table->integer('gold')->default(0);
            $table->integer('overall')->virtualAs('bronze + silver + gold'); // Calculated field
            $table->timestamps(); // created_at and updated_at columns
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
