<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicantsTable extends Migration
{
   
    public function up()
    {
        Schema::create('applicants', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('Type');
            $table->string('Token')->nullable();
            $table->string('Avatar')->nullable();
            $table->string('First');
            $table->string('Last');
            $table->string('Middle');
            $table->integer('Phone');
            $table->string('Email');
            $table->string('NameExtension');
        });
    }

    public function down()
    {
        Schema::dropIfExists('applicants');
    }
}
