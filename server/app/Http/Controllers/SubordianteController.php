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
        $input = $request->all();
        $Subordiante->fill($input)->save();
        return  $Subordiante;
    }

    public function destroy(Subordiante $subordiante)
    {
        //
    }
}
