<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddressesTable extends Migration
{
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
           $table->foreignId('employee_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('HouseNumber')->nullable();
            $table->string('Street')->nullable();
            $table->string('Village')->nullable();
            $table->string('Barangay')->nullable();
            $table->string('Municipality')->nullable();
            $table->string('Province')->nullable();
            $table->string('ZipCode')->nullable();
            $table->string('Type')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('addresses');
    }
}
