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
            $table->string('pds_id')->references('id')->on('pds');
            $table->string('Sex');
            $table->string('CivilStatus');
            $table->date('DOB');
            $table->string('Height');
            $table->string('Weight');
            $table->string('BLOODTYPE');
            $table->string('GSIS');
            $table->string('PAGIBIG');
            $table->string('PHILHEALTH');
            $table->string('SSS');
            $table->string('TIN');
            $table->string('EmployeeNumber');
            $table->string('Citizenship');
            $table->string('DualCititizenship');
            $table->string('Details');
            $table->string('Telephone');

        });
    }

    public function down()
    {
        Schema::dropIfExists('personal_information');
    }
}
