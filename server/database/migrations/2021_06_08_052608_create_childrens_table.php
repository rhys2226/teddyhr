<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChildrensTable extends Migration
{

    public function up()
    {
        Schema::create('childrens', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
         $table->foreignId('employee_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('Name')->nullable();
            $table->date('DOB')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('childrens');
    }
}
