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
            $table->foreignId('employee_id')->references('id')->on('users');
            $table->string('Year');
            $table->string('Month');
            $table->string('Particulars1');
            $table->string('Particulars2');
            
            $table->integer('VacationEarned');
            $table->integer('SickEarned');
            $table->integer('ServiceCreditEarned');
            
            $table->integer('WithPayVacation');
            $table->integer('WithPayLeave');
            $table->integer('WithPayServiceCredit');
            
            $table->integer('BalanceVacation');
            $table->integer('BalanceLeave');
            $table->integer('BalanceServiceCredit');
            
            $table->integer('WithoutPayVacation');
            $table->integer('WithoutPayLeave');
            
            $table->string('DateAndActionTaken1');
            $table->string('DateAndActionTaken2');
        });
    }


    public function down()
    {
        Schema::dropIfExists('leave_cards');
    }
}
