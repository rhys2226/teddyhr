<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicationForLeavesTable extends Migration
{
    public function up()
    {
        Schema::create('application_for_leaves', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('employee_id');
            $table->string('Office');
            $table->string('Spent');
            $table->string('SpecialPrivilege');
            $table->string('VacationDetails');
            $table->string('SpecialPrivilegeVacation');
            $table->string('IncaseofSickLeave');
            $table->string('IncaseofVacationLeave');
            $table->string('SpecifyLocationinAbroad');
            $table->string('SpecifyHospital');
            $table->integer('Days');
            $table->string('Comutation');
            $table->date('From');
            $table->date('To');
            $table->boolean('Approved');
        });
    }

    public function down()
    {
        Schema::dropIfExists('application_for_leaves');
    }
}
