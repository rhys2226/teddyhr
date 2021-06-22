<?php

namespace App\Http\Controllers;

use App\Models\LeaveSettings;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LeaveSettingsController extends Controller
{
    
    public function index()
    {
        return LeaveSettings::all();
    }

    public function store(Request $request)
    {
        if(count(LeaveSettings::where('Type',$request->input('Type'))->get()) !== 0 ){
            return response(['message' => 'Leave setting already exist'], 401);
        }
        return LeaveSettings::create($request->all());  
    }

    public function destroy($id)
    {
        return LeaveSettings::find($id)->delete();
    }
}
