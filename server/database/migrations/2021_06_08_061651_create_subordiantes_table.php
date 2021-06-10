<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubordiantesTable extends Migration
{
    public function up()
    {
        Schema::create('subordiantes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('SupervisorID')->references('id')->on('users')->onDelete('cascade');
            $table->foreignId('SubordinateID')->references('id')->on('users')->onDelete('cascade');
            $table->string('Department');
        }); 
    }

    public function down()
    {
        Schema::dropIfExists('subordiantes');
    }
}
