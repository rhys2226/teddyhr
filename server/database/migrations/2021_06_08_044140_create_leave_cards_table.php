<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLeaveCardsTable extends Migration
{
  
    public function up()
    {
        Schema::create('leave_cards', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('employee_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('Year')->nullable();
            $table->string('Month')->nullable();
            $table->string('Particulars1')->nullable();
            $table->string('Particulars2')->nullable();
            
            $table->double('VacationEarned')->nullable();
            $table->double('SickEarned')->nullable();
            $table->double('ServiceCreditEarned')->nullable();
            
            $table->double('WithPayVacation')->nullable();
            $table->double('WithPayLeave')->nullable();
            $table->double('WithPayServiceCredit')->nullable();
            
            $table->double('BalanceVacation')->nullable();
            $table->double('BalanceLeave')->nullable();
            $table->double('BalanceServiceCredit')->nullable();
            
            $table->double('WithoutPayVacation')->nullable();
            $table->double('WithoutPayLeave')->nullable();
            
            $table->string('DateAndActionTaken1')->nullable();
            $table->string('DateAndActionTaken2')->nullable();
        });
    }


    public function down()
    {
        Schema::dropIfExists('leave_cards');
    }
}
