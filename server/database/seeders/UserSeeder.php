<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;


class UserSeeder extends Seeder
{
  
    public function run()
    {
        User::factory()->create([
            'username' => 'teddy',
            'password' => Hash::make('admin'),
        ]);
    }
}
