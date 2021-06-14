<?php

namespace App\Http\Controllers;

use App\Models\FamilyBackground;
use App\Http\Controllers\Controller;
use App\Models\Childrens;
use Illuminate\Http\Request;

class FamilyBackgroundController extends Controller
{
    
    public function store(Request $request)
    {
        $data = $request->all();
        $pds = FamilyBackground::where('employee_id',$data['employee_id'])->get();
        if(count($pds) !== 0){
            foreach($pds as $sheet){
                FamilyBackground::find($sheet->id)->delete();
            }
        }
        $children = Childrens::where('employee_id',$data['employee_id'])->get();
        if(count($children) !== 0){
            foreach($children as $sheet){
                Childrens::find($sheet->id)->delete();
            }
        }
        FamilyBackground::create($data);
        $index = 0;
        foreach($data['children'] as $child){
            $childData = new Childrens(); 
            $childData->employee_id= $data['employee_id'];
            $childData->Name= $child['Name'.$index];
            $childData->DOB= $child['DOB'.$index];
            $childData->save();
            $index+=1;
        }
    }

    public function show($id)
    {
        return FamilyBackground::with('childrens')
            ->where('employee_id',$id)
            ->first();
    }

}
