<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLearningAndDevelopmentsTable extends Migration
{
    public function up()
    {
        Schema::create('learning_and_developments', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('pds_id')->references('id')->on('pds');
            $table->string('Title');
            $table->string('From');
            $table->string('To');
            $table->string('Hours');
            $table->string('Type');
            $table->string('SponsoredBy');
        });
    }

    public function down()
    {
        Schema::dropIfExists('learning_and_developments');
    }
}
