<?php

namespace App\Http\Controllers;

use App\Models\Applicant;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Mail;

$global_email = '';
    
class ApplicantController extends Controller
{
    
    public function index()
    { 
        return Applicant::with('user')->with('attachments')->get();
    }
 
    public function show($id)
    {
        return Applicant::where('user_id',$id)
        ->with('user')
        ->with('supportingDocuments')
        ->first();
    }
    
    public function update(Request $request, $id)
    {
        $applicant = Applicant::with('user')->where('user_id',$id)->first();
        $applicant->Schedule = $request->input('Schedule');
        $applicant->save();
        $GLOBALS['global_email'] = $applicant->user->Email;
        Mail::send('emails.schedule',[
            'applicant' =>$applicant ,
            'schedule' => $request->input('on')
        ], function ($message) {
            $message->from(env('APP_EMAIL'), env('APP_NAME'));
            $message->to( $GLOBALS['global_email'] )->subject('You have shortlisted for an interview on Iloilo State College of Fisheries');
        });
        return $applicant;
    }

    public function destroy($id)
    {
        return User::find($id)->delete();
    }
}
