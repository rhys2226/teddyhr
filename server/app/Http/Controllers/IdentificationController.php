<?php

namespace App\Http\Controllers;

use App\Models\Identification;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IdentificationController extends Controller
{
   
    public function store(Request $request)
    {
        $data = $request->all();
        $pds = Identification::where('employee_id',$data['employee_id'])->get();
        if(count($pds) !== 0){
            foreach($pds as $sheet){
                Identification::find($sheet->id)->delete();
            }
        }
        Identification::create($data);
    }

    public function show($id)
    {
      return Identification::where('employee_id',$id)->get();
    }
}
