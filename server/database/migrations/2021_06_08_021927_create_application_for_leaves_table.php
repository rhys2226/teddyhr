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
            $table->foreignId('employee_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('Office');
            $table->string('Spent');
            $table->string('SpecialPrivilege')->nullable();
            $table->string('VacationDetails')->nullable();
            $table->string('SpecialPrivilegeVacation')->nullable();
            $table->string('IncaseofSickLeave')->nullable();
            $table->string('IncaseofVacationLeave')->nullable();
            $table->string('SpecifyLocationinAbroad')->nullable();
            $table->string('SpecifyHospital')->nullable();
            $table->integer('Days');
            $table->string('Comutation');
            $table->date('From')->nullable();
            $table->date('To')->nullable();
            $table->boolean('Approved')->nullable();
            
            $table->string('Vacation')->nullable();
            $table->string('Specify')->nullable();
            
        });
    }

    public function down()
    {
        Schema::dropIfExists('application_for_leaves');
    }
}
