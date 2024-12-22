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
        Schema::create('pendingTeams', function (Blueprint $table) {
            $table->id();
            $table->integer('fighterid');
            $table->string('name');
            $table->integer('age');
            $table->date('bday');
            $table->float('weight');
            $table->float('height');
            $table->string('competition'); //Data automatic when choosing in screen
            $table->string('level'); //Data automatic when choosing in screen
            $table->string('category'); //Data automatic when choosing in screen
            $table->string('belt');
            $table->string('chapter');
            $table->string('instructor');
            $table->string('division');
            $table->string('gender');
            $table->timestamps();  // Created_at and updated_at columns
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("pendingTeams");
    }
};
