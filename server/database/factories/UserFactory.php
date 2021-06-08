<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition()
    {
        return [
            'Type'  =>  'Admin',
            'Token' => Str::random(),
            'Avatar' => '',
            'First' => 'Teddy',
            'Last' => 'Fuentivilla',
            'Middle'  => 'B.',
            'Phone'  => '09286241875',
            'Email'  => 'teddy@gmail.com',
            'NameExtension'  => '',
            'Password'  => Hash::make('admin'),
        ];
    }

    
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
