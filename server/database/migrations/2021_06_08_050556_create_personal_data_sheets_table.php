<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonalDataSheetsTable extends Migration
{
    public function up()
    {
        Schema::create('personal_data_sheets', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('employee_id')->references('id')->on('users');
        });
    }

    public function down()
    {
        Schema::dropIfExists('personal_data_sheets');
    }
}
