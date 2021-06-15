<?php

namespace App\Http\Controllers;

use App\Models\Eligibilities;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EligibilitiesController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->all();
        $pds = Eligibilities::where('employee_id',$data['employee_id'])->get();
        if(count($pds) !== 0){
            foreach($pds as $sheet){
                Eligibilities::find($sheet->id)->delete();
            }
        }
        $index = 0;
        foreach($data['eligibilities'] as $child){
            $eligibility = new Eligibilities(); 
            $eligibility->employee_id= $data['employee_id'];
            $eligibility->Title= $child['Title'.$index];
            $eligibility->Rating= $child['Rating'.$index];
            $eligibility->Date= $child['Date'.$index];
            $eligibility->Place= $child['Place'.$index];
            $eligibility->License= $child['License'.$index];
            $eligibility->Validity= $child['Validity'.$index];
            $eligibility->save();
            $index+=1;
        }
    }

    public function show($id)
    {
         return Eligibilities::where('employee_id',$id)->get();
    }
}
