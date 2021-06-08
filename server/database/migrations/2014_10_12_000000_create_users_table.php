<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
  
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('Type');
            $table->string('Token');
            $table->string('Avatar')->nullable();
            $table->string('First');
            $table->string('Last');
            $table->string('Middle');
            $table->string('Phone');
            $table->string('Email')->unique();
            $table->string('NameExtension');
            $table->string('Password');
        });
    }

  
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
