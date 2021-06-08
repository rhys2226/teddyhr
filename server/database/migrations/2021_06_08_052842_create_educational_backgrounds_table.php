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
            $table->foreignId('pds_id');
            $table->string('NameOfSchool');
            $table->string('Degree');
            $table->string('From');
            $table->string('To');
            $table->string('Units');
            $table->string('YearGraduated');
            $table->string('Scholarship');
            $table->string('Type');
        });
    }

    public function down()
    {
        Schema::dropIfExists('educational_backgrounds');
    }
}
