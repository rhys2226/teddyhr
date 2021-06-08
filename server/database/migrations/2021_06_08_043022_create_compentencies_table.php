<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompentenciesTable extends Migration
{
    
    public function up()
    {
        Schema::create('compentencies', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('vacancy_id');
            $table->string('Name');
            $table->string('CompetencyLevel');
        });
    }

    public function down()
    {
        Schema::dropIfExists('compentencies');
    }
}
