<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVolunteersTable extends Migration
{
    public function up()
    {
        Schema::create('volunteers', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('pds_id');
            $table->string('Name');
            $table->string('From');
            $table->string('To');
            $table->string('Hours');
            $table->string('Department');
        });
    }

    public function down()
    {
        Schema::dropIfExists('volunteers');
    }
}
