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
            $table->foreignId('pds_id');  
            $table->string('Name');
            $table->string('Address');
            $table->string('TelNumber');
        });
    }

    public function down()
    {
        Schema::dropIfExists('references');
    }
}
