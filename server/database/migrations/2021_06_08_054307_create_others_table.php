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
            $table->foreignId('employee_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('Skills')->nullable();
            $table->string('NonAcademicDistinction')->nullable();
            $table->string('Membership')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('others');
    }
}
