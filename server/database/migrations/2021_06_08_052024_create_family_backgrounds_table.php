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
            $table->foreignId('employee_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('SpouseFirst')->nullable();
            $table->string('SpouseLast')->nullable();
            $table->string('SpouseMiddle')->nullable();
            $table->string('SpouseExt')->nullable();
            $table->string('MotherFirst')->nullable();
            $table->string('MotherLast')->nullable();
            $table->string('MotherMiddle')->nullable();
            $table->string('MotherExt')->nullable();
            $table->string('FatherFirst')->nullable();
            $table->string('FatherLast')->nullable();
            $table->string('FatherMiddle')->nullable();
            $table->string('FatherExt')->nullable();
            $table->string('Occupation')->nullable();
            $table->string('BusinessName')->nullable();
            $table->string('BusinessAddress')->nullable();
            $table->string('Telephone')->nullable();
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
