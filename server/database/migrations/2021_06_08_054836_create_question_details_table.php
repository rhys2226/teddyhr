<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuestionDetailsTable extends Migration
{
   
    public function up()
    {
        Schema::create('question_details', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('pds_id')->references('id')->on('pds');
            $table->string('question_id')->references('id')->on('question');
            $table->string('Question');
            $table->boolean('Answer');
            $table->string('Details');
        });
    }

    public function down()
    {
        Schema::dropIfExists('question_details');
    }
}
