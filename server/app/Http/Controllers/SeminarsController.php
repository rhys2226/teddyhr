<?php

namespace App\Http\Controllers;

use App\Models\Seminars;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SeminarsController extends Controller
{
    public function index()
    {
        return Seminars::all();
    }

    public function show(Seminars $Seminars)
    {
        return Seminars::find($Seminars->id);
    }

    public function update(Request $request, Seminars $Seminars)
    {
        return Seminars::find($Seminars->id)->update($request->all());
    }

    public function destroy(Seminars $Seminars)
    {
        return Seminars::find($Seminars->id)->delete();
    }
}