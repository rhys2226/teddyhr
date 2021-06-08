<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDutiesAndResponsibilitiesTable extends Migration
{
   
    public function up()
    {
        Schema::create('duties_and_responsibilities', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('vacancy_id')->references('id')->on('vacancy');
            $table->string('PercentageofWorkingTime1');
            $table->string('DutiesAndResponsibilities1');
            $table->string('Competency Level');
            $table->string('PercentageofWorkingTime2');
            $table->string('DutiesAndResponsibilities2');
        });
    }
    



    public function down()
    {
        Schema::dropIfExists('duties_and_responsibilities');
    }
}
