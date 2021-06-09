<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicantsTable extends Migration
{
   
    public function up()
    {
        Schema::create('applicants', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('user_id')->references('id')->on('users');
            $table->string('Alignment');
            $table->string('EducationalAttainments');
            $table->string('Eligibilities');
            $table->string('Degrees');
            $table->string('WorkExperience');
            $table->string('PreviousEmployer');
            $table->string('EmployersContactInformation');
            $table->string('Approved')->nullable();
            $table->string('Schedule')->nullable();
            $table->string('Position')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('applicants');
    }
}
