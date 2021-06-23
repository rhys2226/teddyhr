<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Http\Controllers\Controller;
use App\Models\Rating;
use App\Models\User;
use Hash;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        $employees = Employee::with('user')
        ->with('attachments')
        ->with('supervisors')
        ->with('leaves')
        ->get();
        foreach($employees as $employee){
            $employee->MonthOfService = EmployeeController::computeMonthofService( $employee->FirstDay );
        }
        return $employees;
    }
    public static function computeMonthofService($firstDay)
    {
        $today = date('Y-m-d');
        $firstDayToTimestamp = strtotime($firstDay);
        $todaytDayToTimestamp = strtotime($today);
        $firstDayYear = date('Y', $firstDayToTimestamp);
        $todayYear = date('Y', $todaytDayToTimestamp);
        $firstDayMonth = date('m', $firstDayToTimestamp);
        $todayMonth = date('m', $todaytDayToTimestamp);
        return (($todayYear - $firstDayYear) * 12) + ($todayMonth - $firstDayMonth);
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
        $ratings = Rating::with('RatingDetails')
            ->with('user')
            ->with('supervisors')
            ->whereMonth('created_at',date('m'))
            ->get();
            foreach($ratings as $rating){
                $overAllRating = 0;
                foreach($rating->RatingDetails as $ratingDetails){
                    $overAllRating += $ratingDetails->A;
                }
                $rating->overAllRatings = $overAllRating * 20;
            }
        return $ratings;
    }
    
    public function employeePerformance(){
        $ratings = Rating::with('RatingDetails')
            ->with('user')
            ->with('supervisors')
            ->get();
            foreach($ratings as $rating){
                $AveragePerformance = 0;
                $RatingThisMonth = 0;
                $ratingsArray = [];
                foreach($rating->RatingDetails as $ratingDetails){
                    $AveragePerformance += $ratingDetails->A;
                    array_push($ratingsArray, $ratingDetails->A );
                    $ratingDetails->created_at->format('m') === date('m') ? $RatingThisMonth = $ratingDetails->A : $RatingThisMonth = 0;   
                }
                $rating->AveragePerformance = $AveragePerformance * 20;
                $rating->LowestRating = min($ratingsArray) * 20;
                $rating->HighestRating = max($ratingsArray) * 20;
                $rating->RatingThisMonth = $RatingThisMonth * 20;
            }
       return $ratings;
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
