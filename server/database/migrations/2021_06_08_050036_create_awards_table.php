<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAwardsTable extends Migration
{
  
    public function up()
    {
        Schema::create('awards', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('employee_id')->references('id')->on('users');
            $table->foreignId('attachment_id');
            $table->string('title');
            $table->string('description');
        });
    }

    public function down()
    {
        Schema::dropIfExists('awards');
    }
}
