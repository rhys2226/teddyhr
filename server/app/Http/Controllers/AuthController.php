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
        $type =   $request->input('Type') == 'Employees' ? 'employees/' : 'applicants/';
        
        $image=  $request->file('avatar');
        
        $fileName = time() . '.' .'jpg';
        Storage::put('app/'.$type.'avatars/'.$fileName, $image, );
        
        $user = new User();
        $user->Password = Hash::make($request->input('Password'));
        $user->Avatar = storage_path('app/'.$type.'avatars/'.$fileName);
        $user->Type = $request->input('Type');
        $user->Token = $request->input('Token');
        $user->First = $request->input('First');
        $user->Last = $request->input('Last');
        $user->Middle = $request->input('Middle');
        $user->Phone = $request->input('Phone');
        $user->Email = $request->input('Email');
        $user->NameExtension = $request->input('NameExtension');
        $user->save();
        $attachments = new Attachments();
        if($request->hasFile('attachments'))
        {
            foreach ($request->input('attachments') as $file) {
               Storage::put('app/'.$type.'supporting-documents/'.$file->getClientOriginalExtension(), $file->encode());
            }
        }
        $attachments->user_id =  $user->id;
        $attachments->Type =  'Supporting Documents';
        $attachments->URL =  storage_path('app/'.$type.'supporting-documents/'.Hash::make($request->input('First').$request->input('Last')));
        $attachments->save();
        if($request->input('Type') === 'Applicant'){
            Applicant::create( $request->all() + ['user_id' => $user->id] );
            return [
                'message' => 'Plese Log-in to see your application status',
                'user' =>  redirect( 'your_route'),
            ];
        }
        Employee::create( $request->all() + ['user_id' => $user->id]  );
        return [
            'message' => 'Registered Successfully',
            'user' => redirect('your_route'),
        ];
    }

}
