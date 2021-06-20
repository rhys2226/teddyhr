<?php

namespace App\Http\Controllers;

use App\Models\ApplicationForLeave;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ApplicationForLeaveController extends Controller
{
 
    public function index()
    {
        return ApplicationForLeave::with('employee')
            ->with('user')
            ->get();
    }

    public function store(Request $request)
    {
        return ApplicationForLeave::create($request->all());
    }

    public function show(ApplicationForLeave $applicationForLeave)
    {
        //
    }

    public function update(Request $request, ApplicationForLeave $applicationForLeave)
    {
        //
    }

    public function destroy($id)
    {
        return ApplicationForLeave::find($id)->delete();
    }
}
