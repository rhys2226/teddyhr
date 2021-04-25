<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVacanciesTable extends Migration
{
    public function up()
    {
        Schema::create('vacancies', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
            $table->string('description');
            $table->string('experience');
            $table->string('office');
            $table->string('level');
            $table->string('type');
            $table->string('indusrty');
            $table->string('qualifications');
            $table->string('job_description');
        });
    }

    public function down()
    {
        Schema::dropIfExists('vacancies');
    }
}
