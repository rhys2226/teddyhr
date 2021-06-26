<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIcprFunctionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('icpr_functions', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('employee_id')->references('id')->on('users')->onDelete('cascade');
            $table->enum( 'Type',[
                'CoreFunction',
                'StrategicPriority'
            ])->nullable();
            $table->string('Output',999)->nullable();
            $table->string('SuccessIndicatiors',999)->nullable();
            $table->string('ActualAccomplishments',999)->nullable();
            $table->string('Remarks',999)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('icpr_functions');
    }
}
