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
            $table->foreignId('employee_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('Title')->nullable();
            $table->string('From')->nullable();
            $table->string('To')->nullable();
            $table->string('Hours')->nullable();
            $table->string('Type')->nullable();
            $table->string('SponsoredBy')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('learning_and_developments');
    }
}
