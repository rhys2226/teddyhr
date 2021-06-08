<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\HRMOUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $user = User::where('username',$request->input('username'))->first();

        if (!$user) {
            return response(['message' => 'Username does not exist.'], 404);
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

    public function register(Request $request){
      
    }

}
