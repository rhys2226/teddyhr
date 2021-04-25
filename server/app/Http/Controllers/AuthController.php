<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function login(Request $request)
    {
      
        $user = User::where('username',$request->input('email'))->first();

        if (!$user) {
            return response(['message' => 'Email does not exist.'], 404);
        }

        if (!Hash::check($request->input('password'), $user->password)) {
            return response(['message' => 'Password is incorrect.'], 403);
        }

        $token = $user->createToken(Str::random());

        return [
            'user' => $user,
            'token' => $token->plainTextToken,
        ];
    }
}
