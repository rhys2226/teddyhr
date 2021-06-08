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
            $table->string('pds_id')->references('id')->on('pds');
            $table->string('HouseNumber');
            $table->string('Street');
            $table->string('Village');
            $table->string('Barangay');
            $table->string('Municipality');
            $table->string('Province');
            $table->string('ZipCode');
            $table->string('Type');
        });
    }

    public function down()
    {
        Schema::dropIfExists('addresses');
    }
}
