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
            
            $table->string('ReviewedBy');
            $table->date('ReviewedByDate');
            $table->string('ApprovedBy');
            $table->date('ApprovedByDate');
            
            $table->string('DiscussedBy');
            $table->date('DiscussedByDate');
            $table->string('AssessedBy');
            $table->date('AssessedByDate');
            $table->string('FinalRating');
            $table->date('FinalRatingDate');

        });
    }

    public function down()
    {
        Schema::dropIfExists('ratings');
        
    }
}
