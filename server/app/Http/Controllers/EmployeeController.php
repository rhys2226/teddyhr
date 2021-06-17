<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Http\Controllers\Controller;
use App\Models\Rating;
use App\Models\RatingDetails;
use App\Models\Subordiante;
use App\Models\User;
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
        ->paginate(20);
    }
    
    public function show($id)
    {
        return Employee::with('user')
            ->with('supervisors')
            ->with('WorkExperiences')
            ->with('EducationalAttainments')
            ->with('Eligibilities')
            ->where('user_id',$id)->first();
    }
    
    public function topEmployees(){
        $employees =  Employee::with('user')->with('supervisors')->get();
        $TopEmployees = [];
        foreach($employees as $employee){
            $overAllRatings = 0;
            $totalRatings = 0;
            $ratingCount = 0;
            $ratings = Rating::where('employee_id',$employee->user_id)->get();
            foreach($ratings as $rating){
                $ratingDetails = RatingDetails::where('rating_id',$rating->id)->get();
                foreach($ratingDetails as $ratingDetail){
                    $ratingCount += 1;
                    $totalRatings += $ratingDetail->Q;
                    $totalRatings += $ratingDetail->E;
                    $totalRatings += $ratingDetail->T;
                    $totalRatings += $ratingDetail->A;
                }
            }
            $overAllRatings = (($totalRatings /  $ratingCount) / 4 ) * 20 ;
            $employee->overAllRatings = $overAllRatings;
            array_push($TopEmployees,$employee);
        }
       return collect($TopEmployees)->sortBy('overAllRatings')->reverse()->toArray();
    }

    public function update(Request $request, Employee $employee)
    {
        //  
    }

    public function destroy($id)
    {
        return User::find($id)->delete();
    }
}
