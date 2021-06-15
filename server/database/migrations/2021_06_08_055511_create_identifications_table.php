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
            $table->foreignId('employee_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('GovtID')->nullable();
            $table->string('Passport')->nullable();
            $table->string('Date')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('identifications');
    }
}
