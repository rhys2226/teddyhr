<?php

namespace App\Http\Controllers;

use App\Models\Applicant;
use App\Models\Attachments;
use App\Models\Employee;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $user = User::where('Email',$request->input('Email'))->first();

        if (!$user) {
            return response(['message' => 'Email does not exist.'], 404);
        }

        if (!Hash::check($request->input('Password'), $user->Password)) {
            return response(['message' => 'Password is incorrect.'], 403);
        }

        $token = $user->createToken(Str::random());

        return [
            'user' => $user,
            'token' => $token->plainTextToken,
            'message' => 'Welcome Back! '. $user->First
        ];
    }

    public function register(Request $request){
        $data = $request->all();
        $userType = $data['Type'] == 'Employees' ? 'employees/' : 'applicants/';
        
        if(isset($data['Avatar'])){
            $data['Avatar'] = AuthController::storeAvatar( $userType , $data['Avatar']) ;
        }
        $user = User::create($data);
        $data['user_id'] = $user->id;
        
        for($i = 0;$i < 15;$i++) {
            if(!isset($data['Attachments'.$i])){
                break;
            }
            AuthController::storeFiles( $userType ,  $data['Attachments'.$i],  $user->id );;
        }
        
        if( $data['Type'] === 'Applicant' ){
            Applicant::create($data);
            return [
                'message' => 'Plese Log-in to see your application status',
            ];
        }
        Employee::create($data);
        return [
            'message' => 'Employee has been Registered Successfully',
        ];
    }
    
    public static function storeAvatar($userType,$file)
    {
        $path = Storage::disk('public_uploads')->put($userType.'avatars/' , $file);
        return Storage::url( $path );
    }
    
    public static function storeFiles($userType, $file, $user_id  )
    {
        $path = Storage::disk('public_uploads')->put($userType.'supporting-documents/' , $file);
        $attachments = new Attachments();
        $attachments->user_id = $user_id;
        $attachments->URL =   Storage::url( $path );
        $attachments->Type = '/supporting-documents';
        $attachments->save();
    } 
}
