<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDirectlySupervisedsTable extends Migration
{
    public function up()
    {
        Schema::create('directly_superviseds', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('vacancy_id');
            $table->string('Position');
            $table->string('ItemNumber');
        });
    }

    public function down()
    {
        Schema::dropIfExists('directly_superviseds');
    }
}
