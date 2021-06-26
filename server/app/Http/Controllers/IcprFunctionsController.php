<?php

namespace App\Http\Controllers;

use App\Models\IcprFunctions;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IcprFunctionsController extends Controller
{

    public function show($id)
    {
        return [
            'StrategicPriorities' => IcprFunctions::where('Type','StrategicPriority')->where('employee_id',$id)->get(),
            'CoreFunctions' =>   IcprFunctions::where('Type','CoreFunction')->where('employee_id',$id)->get(),
        ];
    }

    public function update(Request $request, $id)
    {
        $functions = IcprFunctions::where('employee_id',$id)->get();
        foreach($functions as $function){
            IcprFunctions::find($function->id)->delete();
        }
        $data = $request->all();
        $index = 0;
        foreach($data['StrategicPriorities'] as $priority){
            if(isset($priority['Output'.$index])){
                $details = new IcprFunctions();
                $details->Output = $priority['Output'.$index];
                $details->employee_id =$data['employee_id'];
                $details->SuccessIndicatiors = $priority['SuccessIndicatiors'.$index];
                $details->ActualAccomplishments = $priority['ActualAccomplishments'.$index];
                $details->Remarks = $priority['Remarks'.$index];
                $details->Type = $priority['Type'];
                $index += 1;
                $details->save();
            }
        }
        $index = 0;
        foreach($data['CoreFunctions'] as $priority){
            if(isset($priority['Output'.$index])){
                $details = new IcprFunctions();
                $details->Output = $priority['Output'.$index];
                $details->employee_id =$data['employee_id'];
                $details->SuccessIndicatiors = $priority['SuccessIndicatiors'.$index];
                $details->ActualAccomplishments = $priority['ActualAccomplishments'.$index];
                $details->Remarks = $priority['Remarks'.$index];
                $details->Type = $priority['Type'];
                $index += 1;
                $details->save();
            }
        }
    }

}
