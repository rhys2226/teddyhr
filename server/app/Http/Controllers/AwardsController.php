<?php

namespace App\Http\Controllers;

use App\Models\Awards;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AwardsController extends Controller
{

    public function index()
    {
        return Awards::all();
    }

    public function show(Awards $Awards)
    {
        return Awards::find($Awards->id);
    }

    public function update(Request $request, Awards $Awards)
    {
        return Awards::find($Awards->id)->update($request->all());
    }

    public function destroy(Awards $Awards)
    {
        return Awards::find($Awards->id)->delete();
    }
}
