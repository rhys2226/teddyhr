<?php

namespace App\Http\Controllers;

use App\Models\Rating;
use App\Http\Controllers\Controller;
use App\Models\RatingDetails;
use Illuminate\Http\Request;

class RatingController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->all();
        $rating = Rating::create($data);
        $index = 0;
        foreach($data['StrategicPriorities'] as $priority){
            if(isset($priority['Output'.$index])){
                $details = new RatingDetails();
                $details->rating_id = $rating->id;
                $details->Output = $priority['Output'.$index];
                $details->SuccessIndicatiors = $priority['SuccessIndicatiors'.$index];
                $details->ActualAccomplishments = $priority['ActualAccomplishments'.$index];
                $details->Remarks = $priority['Remarks'.$index];
                $details->Type = $priority['Type'];
                
                $details->Q = $priority['Q'.$index];
                $details->E = $priority['E'.$index];
                $details->T = $priority['T'.$index];
                $details->A = $priority['A'.$index];
                $index += 1;
                $details->save();
            }
        }
        $i = 0;
        foreach($data['CoreFunctions'] as $functions){
           if(isset($functions['CoreFunctions'.$index])){
                $details = new RatingDetails();
                $details->rating_id = $rating->id;
                $details->Output = $functions['Output'.$index];
                $details->SuccessIndicatiors = $functions['SuccessIndicatiors'.$index];
                $details->ActualAccomplishments = $functions['ActualAccomplishments'.$index];
                $details->Remarks = $functions['Remarks'.$index];
                $details->Type = $functions['Type'];
                
                $details->Q = $functions['Q'.$index];
                $details->E = $functions['E'.$index];
                $details->T = $functions['T'.$index];
                $details->A = $functions['A'.$index];
                $index += 1;
                $details->save();
            }
        }
    }

    public function show($id)
    {
        return Rating::with('user')
            ->with('RatingDetails')
            ->with('supervisors')
            ->where('employee_id',$id)
            ->get()
        ;
    }

    public function destroy($id)
    {
       return Rating::find($id)->delete();
    }
}
