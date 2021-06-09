<?php

namespace App\Http\Controllers;

use App\Models\Applicant;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ApplicantController extends Controller
{
    public function index()
    { 
        return Applicant::with('user')->paginate(20);
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
    
    public function update(Request $request, Applicant $applicant)
    {
        $input = $request->all();
        $applicant = $applicant->fill($input)->save();
        return $applicant;
    }

    public function destroy(Applicant $applicant)
    {
        return Applicant::find($applicant)->delete();
    }
}
