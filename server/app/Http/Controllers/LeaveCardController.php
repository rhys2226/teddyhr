<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\LeaveCard;

class LeaveCardController extends Controller
{
    public function show($id)
    {
        return LeaveCard::with('employee')
        ->where('employee_id',$id)
        ->get();
    }
}
