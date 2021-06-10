<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
//   asset('storage/app/admin/teddy.jpg')
    public function run()
    {
        User::factory()->create([
            'Type'  =>  'Admin',
            'Token' => Str::random(),
            'Avatar' =>  Storage::url('admin/teddy.jpg'),
            'First' => 'Teddy',
            'Last' => 'Fuentivilla',
            'Middle'  => 'B.',
            'Phone'  => '09286241875',
            'Email'  => 'teddy@gmail.com',
            'NameExtension'  => '',
            'Password'  => Hash::make('admin1'),
        ]);
    }
}
 