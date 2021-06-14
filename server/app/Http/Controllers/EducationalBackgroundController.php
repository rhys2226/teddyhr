<?php
namespace App\Http\Controllers;

use App\Models\EducationalBackground;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EducationalBackgroundController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->all();
        $pds = EducationalBackground::where('employee_id',$data['College']['employee_id'])->get();
        if(count($pds) !== 0){
            foreach($pds as $sheet){
                EducationalBackground::find($sheet->id)->delete();
            }
        }
        foreach($data as $education){
            EducationalBackground::create($education);
        }
    }

    public function show($id)
    {
        return EducationalBackground::with('Elementary')
            ->with('Secondary')
            ->with('College')
            ->with('Vocational')
            ->with('GraduateStudies')
            ->where('employee_id',$id)
            ->first();
    }
}
