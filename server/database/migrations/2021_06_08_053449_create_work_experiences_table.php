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
            $table->string('From');
            $table->string('To');
            $table->string('Department');
            $table->string('Salary');
            $table->string('Appointment');
            $table->string('Government');
        });
    }

    public function down()
    {
        Schema::dropIfExists('work_experiences');
    }
}
