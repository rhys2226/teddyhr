<?php

namespace App\Http\Controllers;

use App\Models\Departments;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DepartmentsController extends Controller
{

    public function index()
    {
        return Departments::all();
    }

    public function show(Departments $Departments)
    {
        return Departments::find($Departments->id);
    }

    public function update(Request $request, Departments $Departments)
    {
        return Departments::find($Departments->id)->update($request->all());
    }

    public function destroy(Departments $Departments)
    {
        return Departments::find($Departments->id)->delete();
    }
}
