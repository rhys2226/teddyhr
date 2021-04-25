<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHRMOUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('h_r_m_o_users', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('middle_name');
            $table->string('phone');
            $table->string('alignment');
            $table->string('educational_attainments');
            $table->string('eligibilities');
            $table->string('degrees');
            $table->string('work_experience');
            $table->string('previous_employer');
            $table->string('previous_employer_contact');
            $table->string('email');
            $table->string('user_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('h_r_m_o_users');
    }
}
