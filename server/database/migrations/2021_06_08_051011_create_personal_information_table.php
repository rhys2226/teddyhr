<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonalInformationTable extends Migration
{
  
    public function up()
    {
        Schema::create('personal_information', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('employee_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('Sex')->nullable();
            $table->string('CivilStatus')->nullable();
            $table->date('DOB')->nullable();
            $table->string('Height')->nullable();
            $table->string('Weight')->nullable();
            $table->string('BLOODTYPE')->nullable();
            $table->string('GSIS')->nullable();
            $table->string('PAGIBIG')->nullable();
            $table->string('PHILHEALTH')->nullable();
            $table->string('SSS')->nullable();
            $table->string('TIN')->nullable();
            $table->string('EmployeeNumber')->nullable();
            $table->string('Citizenship')->nullable();
            $table->string('DualCititizenship')->nullable();
            $table->string('Details')->nullable();
            $table->string('Telephone')->nullable();

        });
    }

    public function down()
    {
        Schema::dropIfExists('personal_information');
    }
}
