<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRatingDetailsTable extends Migration
{
    public function up()
    {
        Schema::create('rating_details', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('rating_id')->onDelete('cascade');
            $table->string('Output');
            $table->string('SuccessIndicatiors');
            $table->integer('Q');
            $table->integer('E');
            $table->integer('T');
            $table->integer('A');
            $table->string('Type');
            
            $table->string('ActualAccomplishments');
            $table->string('Remarks');
        });
    }

    public function down()
    {
        Schema::dropIfExists('rating_details');
    }
}
