<?php

namespace App\Http\Controllers;

use App\Models\Subordiante;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SubordianteController extends Controller
{
    public function index()
    {
        return Subordiante::with('subordinates')
            ->with('supervisors')
            // ->groupBy('Department')
            // ->groupBy('SupervisorID')
            ->get();
    }

    public function store(Request $request)
    {
        return Subordiante::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $Subordiante  = Subordiante::where('SubordinateID',strval($id))->first();
        return $Subordiante->fill($request->all())->save();
    }

    public function destroy($id)
    {
        return Subordiante::find($id)->delete();
    }
}
