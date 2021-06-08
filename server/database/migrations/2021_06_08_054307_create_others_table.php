<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOthersTable extends Migration
{
    public function up()
    {
        Schema::create('others', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('pds_id');
            $table->string('Skills');
            $table->string('NonAcademicDistinction');
            $table->string('Membership');
        });
    }

    public function down()
    {
        Schema::dropIfExists('others');
    }
}
