<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRatingsTable extends Migration
{
    
    public function up()
    {
        Schema::create('ratings', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('employee_id')->references('id')->on('users');
            
            $table->string('ReviewedBy')->nullable();
            $table->date('ReviewedByDate')->nullable();
            $table->string('ApprovedBy')->nullable();
            $table->date('ApprovedByDate')->nullable();
            
            $table->string('DiscussedBy')->nullable();
            $table->date('DiscussedByDate')->nullable();
            $table->string('AssessedBy')->nullable();
            $table->date('AssessedByDate')->nullable();
            $table->string('FinalRating')->nullable();
            $table->date('FinalRatingDate')->nullable();

        });
    }

    public function down()
    {
        Schema::dropIfExists('ratings');
        
    }
}
