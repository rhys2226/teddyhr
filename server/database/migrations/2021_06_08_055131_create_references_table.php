<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReferencesTable extends Migration
{
    public function up()
    {
        Schema::create('references', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
           $table->foreignId('employee_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('Name')->nullable();
            $table->string('Address')->nullable();
            $table->string('TelNumber')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('references');
    }
}
