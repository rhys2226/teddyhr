<?php

namespace App\Http\Controllers;

use App\Models\Volunteer;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class VolunteerController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->all();
        $pds = Volunteer::where('employee_id',$data['employee_id'])->get();
        if(count($pds) !== 0){
            foreach($pds as $sheet){
                Volunteer::find($sheet->id)->delete();
            }
        }
        $index = 0;
        foreach($data['volounteers'] as $volounteer){
            $experience = new Volunteer(); 
            $experience->employee_id= $data['employee_id'];
            $experience->From= $volounteer['From'.$index];
            $experience->To= $volounteer['To'.$index];
            $experience->Name= $volounteer['Name'.$index];
            $experience->Hours= $volounteer['Hours'.$index];
            $experience->Department= $volounteer['Department'.$index];
            $experience->save();
            $index+=1;
        }
    }

    public function show($id)
    {
        return Volunteer::where('employee_id',$id)->get();
    }
}
