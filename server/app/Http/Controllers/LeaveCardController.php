<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\LeaveCard;
use Illuminate\Http\Request;

class LeaveCardController extends Controller
{
    public function show($id)
    {
        return LeaveCard::where('employee_id',$id)
        ->with('employee') 
        ->with('user') 
        ->get();
    }
    
    public function update(Request $request,$id)
    { 
        return  LeaveCard::find($id)->fill($request->all())->save();
    }
}
