<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\LeaveCard;
use Illuminate\Http\Request;

class LeaveCardController extends Controller
{
    public function show($id)
    {
        return LeaveCard::where('employee_id',$id)->get();
    }
}
