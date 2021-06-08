<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVacanciesTable extends Migration
{
    public function up()
    {
        Schema::create('vacancies', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('Position');
            $table->string('ItemNumber');
            $table->string('SalaryGrade');
            $table->string('GovernmentalUnit');
            $table->string('Class');
            $table->string('Department');
            $table->string('Bureau ');
            $table->string('Division');
            $table->string('Workstation ');
            $table->string('Present ');
            $table->string('Previous ');
            $table->string('SalaryAuthorized');
            $table->string('OtherCompensation');
            $table->string('ImmediateSupervisor');
            $table->string('NextHigherSupervisor');
            $table->string('Executive');
            $table->string('Supervisors');
            $table->string('NonSupervisors');
            $table->string('Staff');
            $table->string('GeneralPublic');
            $table->string('OtherAgencies');
            $table->string('Others');
            $table->string('Unit ');
            $table->string('Job ');
            $table->string('Experience');
            $table->string('Training');
            $table->string('Eligibility');
        });
    }

    public function down()
    {
        Schema::dropIfExists('vacancies');
    }
}
