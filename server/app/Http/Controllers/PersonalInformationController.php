<?php

namespace App\Http\Controllers;

use App\Models\PersonalInformation;
use App\Http\Controllers\Controller;
use App\Models\Address;
use Illuminate\Http\Request;

class PersonalInformationController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->all();
        $pds = PersonalInformation::where('employee_id',$data['employee_id'])->get();
        if(count($pds) !== 0){
            foreach($pds as $sheet){
                PersonalInformation::find($sheet->id)->delete();
            }
        }
        $addresses = Address::where('employee_id',$data['employee_id'])->get();
        if(count($addresses) !== 0){
            foreach($addresses as $sheet){
                 Address::find($sheet->id)->delete();
            }
        }
        PersonalInformation::create($data);
        if(isset($data['permanent']['HouseNumber']) ){
            Address::create($data['permanent']);
        }
           if(isset($data['residential']['HouseNumber']) ){
            Address::create($data['residential']);
        }
        return $data;
    }

    public function show($id)
    {
        return PersonalInformation::with('permanentAdress')
            ->with('ResidentialAdress')
            ->where('employee_id',$id)
            ->first();
    }
}
