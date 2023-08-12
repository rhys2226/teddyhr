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
            $table->text('Position')->nullable();
            $table->string('ItemNumber')->nullable();
            $table->string('SalaryGrade')->nullable();
            $table->string('GovernmentalUnit')->nullable();
            $table->string('Class')->nullable();
            $table->string('Department')->nullable();
            $table->string('Bureau')->nullable();
            $table->string('Division')->nullable();
            $table->string('Workstation ')->nullable();
            $table->string('Present ')->nullable();
            $table->string('Previous ')->nullable();
            $table->string('SalaryAuthorized')->nullable();
            $table->string('OtherCompensation')->nullable();
            $table->string('ImmediateSupervisor')->nullable();
            $table->string('NextHigherSupervisor')->nullable();
            $table->string('Executive')->nullable();
            $table->string('Supervisors')->nullable();
            $table->string('NonSupervisors')->nullable();
            $table->string('Staff')->nullable();
            $table->string('GeneralPublic')->nullable();
            $table->string('OtherAgencies')->nullable();
            $table->string('Others')->nullable();
            $table->string('Unit')->nullable();
            $table->text('Job', 9999)->nullable();
            $table->string('Experience', 9999)->nullable();
            $table->text('Training', 9999)->nullable();
            $table->text('Eligibility', 9999)->nullable();
            $table->string('Machine')->nullable();
            $table->text('Education', 9999)->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('vacancies');
    }
}
