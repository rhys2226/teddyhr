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
            $table->foreignId('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('Alignment');
            $table->string('EducationalAttainments',999);
            $table->string('Eligibilities',999);
            $table->string('Degrees',999);
            $table->string('WorkExperience',999);
            $table->string('PreviousEmployer');
            $table->string('EmployersContactInformation');
            $table->boolean('isPending')->nullable();
            $table->string('Schedule')->nullable();
            $table->string('Position')->nullable();
            $table->string('Office')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('applicants');
    }
}
