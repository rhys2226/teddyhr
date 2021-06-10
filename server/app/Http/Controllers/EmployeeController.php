<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Http\Controllers\Controller;
use App\Models\Subordiante;
use App\Models\User;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
  
    public function index()
    {
        return Employee::with('user')
        ->with('attachments')
        ->with('supervisors')
        ->with('leaves')
        ->with('pds')
        ->paginate(20);
    }
    
    public function show(Employee $employee)
    {
        return Employee::find($employee);
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
