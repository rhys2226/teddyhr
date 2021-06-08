<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
   
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('user_id')->references('id')->on('users');
            $table->string('Alignment');
            $table->string('Position');
            $table->string('PreviousEmployer');
            $table->string('EmployersContactInformation');
        });
    }

    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
