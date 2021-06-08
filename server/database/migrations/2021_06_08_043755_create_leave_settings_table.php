<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLeaveSettingsTable extends Migration
{
    public function up()
    {
        Schema::create('leave_settings', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('Type');
            $table->string('NextCreditdays');
            $table->string('WithPay');
        });
    }

    public function down()
    {
        Schema::dropIfExists('leave_settings');
    }
}
