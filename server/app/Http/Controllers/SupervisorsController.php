<?php

namespace App\Http\Controllers;

use App\Models\Supervisors;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SupervisorsController extends Controller
{
    public function index()
    {
        return Supervisors::all();
    }

    public function show(Supervisors $Supervisors)
    {
        return Supervisors::find($Supervisors->id);
    }

    public function update(Request $request, Supervisors $Supervisors)
    {
        return Supervisors::find($Supervisors->id)->update($request->all());
    }

    public function destroy(Supervisors $Supervisors)
    {
        return Supervisors::find($Supervisors->id)->delete();
    }
}
