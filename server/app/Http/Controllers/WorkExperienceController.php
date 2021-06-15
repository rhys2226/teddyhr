<?php

namespace App\Http\Controllers;

use App\Models\WorkExperience;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WorkExperienceController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->all();
        $pds = WorkExperience::where('employee_id',$data['employee_id'])->get();
        if(count($pds) !== 0){
            foreach($pds as $sheet){
                WorkExperience::find($sheet->id)->delete();
            }
        }
        $index = 0;
         foreach($data['workExperiences'] as $work){
            $experience = new WorkExperience(); 
            $experience->employee_id= $data['employee_id'];
            $experience->From= $work['From'.$index];
            $experience->To= $work['To'.$index];
            $experience->Department= $work['Department'.$index];
            $experience->Salary= $work['Salary'.$index];
            $experience->Appointment= $work['Appointment'.$index];
            $experience->Government= $work['Government'.$index];
            $experience->Position= $work['Position'.$index];
            $experience->save();
            $index+=1;
        }
    }

    public function show($id)
    {
        return WorkExperience::where('employee_id',$id)->get();
    }
}
