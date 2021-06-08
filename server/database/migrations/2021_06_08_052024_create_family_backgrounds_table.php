<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFamilyBackgroundsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('family_backgrounds', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('pds_id');
            $table->string('SpouseFirst');
            $table->string('SpouseLast');
            $table->string('SpouseMiddle');
            $table->string('SpouseExt');
            $table->string('MotherFirst');
            $table->string('MotherLast');
            $table->string('MotherMiddle');
            $table->string('MotherExt');
            $table->string('FatherFirst');
            $table->string('FatherLast');
            $table->string('FatherMiddle');
            $table->string('FatherExt');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('family_backgrounds');
    }
}
