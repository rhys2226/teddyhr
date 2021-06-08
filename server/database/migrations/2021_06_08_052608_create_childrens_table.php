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
            $table->foreignId('pds_id');
            $table->string('Name');
            $table->date('DOB');
        });
    }

    public function down()
    {
        Schema::dropIfExists('childrens');
    }
}
