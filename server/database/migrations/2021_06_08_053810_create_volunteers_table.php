<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVolunteersTable extends Migration
{
    public function up()
    {
        Schema::create('volunteers', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
           $table->foreignId('employee_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('Name')->nullable();
            $table->string('From')->nullable();
            $table->string('To')->nullable();
            $table->string('Hours')->nullable();
            $table->string('Department')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('volunteers');
    }
}
