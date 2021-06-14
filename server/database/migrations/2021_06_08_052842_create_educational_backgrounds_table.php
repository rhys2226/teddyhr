<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEducationalBackgroundsTable extends Migration
{
    public function up()
    {
        Schema::create('educational_backgrounds', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
         $table->foreignId('employee_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('NameOfSchool')->nullable();
            $table->string('Degree')->nullable();
            $table->string('From')->nullable();
            $table->string('To')->nullable();
            $table->string('Units')->nullable();
            $table->string('YearGraduated')->nullable();
            $table->string('Scholarship')->nullable();
            $table->string('Type')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('educational_backgrounds');
    }
}
