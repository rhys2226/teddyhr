<?php

namespace App\Http\Controllers;

use App\Models\References;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ReferencesController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->all();
        $pds = References::where('employee_id',$data['employee_id'])->get();
        if(count($pds) !== 0){
            foreach($pds as $sheet){
                References::find($sheet->id)->delete();
            }
        }
        $index = 0;
        foreach($data['references'] as $child){
            $experience = new References(); 
            $experience->employee_id= $data['employee_id'];
            $experience->Name= $child['Name'.$index];
            $experience->Address= $child['Address'.$index];
            $experience->TelNumber= $child['TelNumber'.$index];
            $experience->save();
            $index+=1;
        }
    }

    public function show($id)
    {
        return References::where('employee_id',$id)->get();
    }
}
