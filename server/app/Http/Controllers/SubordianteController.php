<?php

namespace App\Http\Controllers;

use App\Models\Subordiante;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SubordianteController extends Controller
{
    public function index()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Subordiante $subordiante)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $Subordiante  = Subordiante::where('SubordinateID',strval($id))->first();
        return $Subordiante->fill($request->all())->save();
    }

    public function destroy(Subordiante $subordiante)
    {
        //
    }
}
