<?php

namespace App\Http\Controllers;

use App\Models\Applicant;
use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Mail;

class ApplicantController extends Controller
{
    public function index()
    { 
        return Applicant::with('user')->with('attachments')->get();
    }
 
    public function show(Applicant $applicant)
    {
        return Applicant::find($applicant);
    }
    
    public function update(Request $request, $id)
    {
        $applicant = Applicant::with('user')->where('user_id',$id)->first();
        $applicant->Schedule = $request->input('Schedule');
        $applicant->save();
        Mail::send('emails.schedule',[
            'applicant' =>$applicant ,
            'schedule' => $request->input('on')
        ], function ($message) {
            $email = 'jyassin84@gmail.com';
            $message->from(env('APP_EMAIL'), env('APP_NAME'));
            $message->to( $email )->subject('You have shortlisted for an interview on Iloilo State College of Fisheries');
        });
        return $applicant;
    }

    public function destroy($id)
    {
        return User::find($id)->delete();
    }
}
