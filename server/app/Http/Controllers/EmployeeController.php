<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Http\Controllers\Controller;
use App\Models\Rating;
use App\Models\RatingDetails;
use App\Models\Subordiante;
use App\Models\User;
use Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
  
    public function index()
    {
        return Employee::with('user')
        ->with('attachments')
        ->with('supervisors')
        ->with('leaves')
        ->get();
    }
    
    public function show($id)
    {
        return Employee::with('user')
            ->with('supervisors')
            ->with('workExperiences')
            ->with('EducationalAttainments')
            ->with('Eligibilities')
            ->where('user_id',$id)->first();
    }
    
    public function topEmployees(){
        return [];
    }
    
    public function employeePerformance(){
        return [];
    }
    

    public function update(Request $request, Employee $employee)
    {
        
    }

    public function destroy($id)
    {
        return User::find($id)->delete();
    }
    
    public function updateProfile(Request $request)
    {
        $data = $request->all();
        $user = User::where('Email',$data['OldEmail'])->first();
        if (!$user) {
            return response(['message' => 'Email does not exist.'], 404);
        }
        if (!Hash::check($request->input('Old'), $user->Password)) {
            return response(['message' => 'Password is incorrect.'], 403);
        }
        $user->Last = $data['Last'];
        $user->First = $data['First'];
        $user->Middle = $data['Middle'];
        $user->Email = $data['Email'];
        $user->Phone = $data['Phone'];
        $user->Password == Hash::make($data['New']);
        return $user->save();
    }
}
