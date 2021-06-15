<?php

namespace App\Http\Controllers;

use App\Models\Others;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OthersController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->all();
        $pds = Others::where('employee_id',$data['employee_id'])->get();
        if(count($pds) !== 0){
            foreach($pds as $sheet){
                Others::find($sheet->id)->delete();
            }
        }
        $index = 0;
        foreach($data['others'] as $other){
            $experience = new Others(); 
            $experience->employee_id= $data['employee_id'];
            $experience->Skills= $other['Skills'.$index];
            $experience->NonAcademicDistinction= $other['NonAcademicDistinction'.$index];
            $experience->Membership= $other['Membership'.$index];
            $experience->save();
            $index+=1;
        }
    }

    public function show($id)
    {
        return Others::where('employee_id',$id)->get();
    }
}
