<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIdentificationsTable extends Migration
{
    public function up()
    {
        Schema::create('identifications', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('pds_id')->references('id')->on('pds');
            $table->string('GovtID');
            $table->string('Passport');
            $table->date('Date');
        });
    }

    public function down()
    {
        Schema::dropIfExists('identifications');
    }
}
