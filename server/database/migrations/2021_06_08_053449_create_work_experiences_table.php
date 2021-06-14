<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkExperiencesTable extends Migration
{
    public function up()
    {
        Schema::create('work_experiences', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
           $table->foreignId('employee_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('From')->nullable();
            $table->string('To')->nullable();
            $table->string('Department')->nullable();
            $table->string('Salary')->nullable();
            $table->string('Appointment')->nullable();
            $table->string('Government')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('work_experiences');
    }
}
