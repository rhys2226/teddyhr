<?php

namespace App\Http\Controllers;

use App\Models\LearningAndDevelopment;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LearningAndDevelopmentController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->all();
        $pds = LearningAndDevelopment::where('employee_id',$data['employee_id'])->get();
        if(count($pds) !== 0){
            foreach($pds as $sheet){
                LearningAndDevelopment::find($sheet->id)->delete();
            }
        }
        $index = 0;
        foreach($data['learningAndDevelopment'] as $learning){
            $development = new LearningAndDevelopment(); 
            $development->employee_id= $data['employee_id'];
            $development->From= $learning['From'.$index];
            $development->To= $learning['To'.$index];
            $development->Title= $learning['Title'.$index];
            $development->Hours= $learning['Hours'.$index];
            $development->Type= $learning['Type'.$index];
            $development->SponsoredBy= $learning['SponsoredBy'.$index];
            $development->save();
            $index+=1;
        }
    }

    public function show($id)
    {
        return LearningAndDevelopment::where('employee_id',$id)->get();
    }
}
