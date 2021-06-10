<?php

namespace App\Http\Controllers;

use App\Models\Applicant;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class ApplicantController extends Controller
{
    public function index()
    { 
        return Applicant::with('user')->with('attachments')->paginate(20);
    }
   
    public function store(Request $request)
    {
        $applicant = Applicant::create($request->all());
        return $applicant;
    }

    public function show(Applicant $applicant)
    {
        return Applicant::find($applicant);
    }
    
    public function update(Request $request, $id)
    {
        $applicant = Applicant::where('user_id',$id)->first();
        $applicant->Schedule = $request->input('Schedule');
        $applicant->save();
        return  $applicant;
    }

    public function destroy($id)
    {
        return User::find($id)->delete();
    }
}
