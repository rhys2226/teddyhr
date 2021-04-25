<?php

namespace App\Http\Controllers;

use App\Models\HRMOUser;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HRMOUserController extends Controller
{
   
    public function index()
    {
       return HRMOUser::all();
    }

    public function show(HRMOUser $hRMOUser)
    {
        return HRMOUser::find($hRMOUser->id);
    }

    public function update(Request $request, HRMOUser $hRMOUser)
    {
        return HRMOUser::find($hRMOUser->id)->update($request->all());
    }

    public function destroy(HRMOUser $hRMOUser)
    {
        return HRMOUser::find($hRMOUser->id)->delete();
    }
}
