<?php

namespace App\Http\Controllers;

use App\Models\Questions;
use App\Http\Controllers\Controller;
use App\Models\QuestionDetails;
use Illuminate\Http\Request;

class QuestionsController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->all();
        $pds = Questions::where('employee_id',$data['employee_id'])->get();
        if(count($pds) !== 0){
            foreach($pds as $sheet){
                Questions::find($sheet->id)->delete();
            }
        }
        $pds = QuestionDetails::where('employee_id',$data['employee_id'])->get();
        if(count($pds) !== 0){
            foreach($pds as $sheet){
                QuestionDetails::find($sheet->id)->delete();
            }
        }
        $question = Questions::create($data);
        $index = 0;
        foreach($data['questions'] as $child){
            $details = new QuestionDetails(); 
            $details->employee_id= $data['employee_id'];
            $details->question_id= $question->id;
            $details->Question= $child['Question'.$index];
            $details->Answer= $child['Answer'.$index];
            $details->Details= $child['Details'.$index];
            $details->save();
            $index+=1;
        }
    }

    public function show($id)
    {
       return Questions::where('employee_id',$id)->get();
    }

}
