<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEligibilitiesTable extends Migration
{
    public function up()
    {
        Schema::create('eligibilities', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('employee_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('Title')->nullable();
            $table->string('Rating')->nullable();
            $table->string('Date')->nullable();
            $table->string('Place')->nullable();
            $table->string('License')->nullable();
            $table->string('Validity')->nullable();

        });
    }

    public function down()
    {
        Schema::dropIfExists('eligibilities');
    }
}
