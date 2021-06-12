<?php

namespace App\Http\Controllers;

use App\Models\Rating;
use App\Http\Controllers\Controller;
use App\Models\RatingDetails;
use Illuminate\Http\Request;

class RatingController extends Controller
{
 
    public function index()
    {
        //
    }
   
    public function store(Request $request)
    {
        $data = $request->all();
        $rating = Rating::create($data);
        $index = 0;
        foreach($data['StrategicPriorities'] as $priority){
            $details = new RatingDetails();
            $details->rating_id = $rating->id;
            $details->Output = $priority['Output'.$index];
            $details->SuccessIndicatiors = $priority['SuccessIndicatiors'.$index];
            $details->Type = $priority['Type'];
            
            $details->Q = $priority['Q'.$index];
            $details->E = $priority['E'.$index];
            $details->T = $priority['T'.$index];
            $details->A = $priority['A'.$index];
            $index += 1;
            $details->save();
        }
        $i = 0;
        foreach($data['CoreFunctions'] as $functions){
            $details = new RatingDetails();
            $details->rating_id = $rating->id;
            $details->Output = $functions['Output'.$i];
            $details->SuccessIndicatiors = $functions['SuccessIndicatiors'.$i];
            $details->Type = $functions['Type'];
            
            $details->Q = $functions['Q'.$i];
            $details->E = $functions['E'.$i];
            $details->T = $functions['T'.$i];
            $details->A = $functions['A'.$i];
            $i += 1;
            $details->save();
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

    public function update(Request $request, Rating $rating)
    {
        //
    }

    public function destroy($id)
    {
       return Rating::find($id)->delete();
    }
}
