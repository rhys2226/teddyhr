<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\PersonalDataSheet;
use Illuminate\Http\Request;

class PersonalDataSheetController extends Controller
{
    public function show($id)
    {
        return PersonalDataSheet::where('employee_id',$id)
            ->with('personalInformation')
            
            ->with('residentialAddress')
            ->with('permanentAddress')
            
            ->with('familyBackground')
            ->with('children')
            
            ->with('Elementary')
            ->with('Secondary')
            ->with('College')
            ->with('Vocational')
            ->with('GraduateStudies')
            
            ->with('eligiblities')
            ->with('workExperiences')
            ->with('volountaryInvolvements')
            ->with('LearningAndDevelopment')
            ->with('others')
            
            ->with('thirdDegree')
            ->with('ForuthDegree')
            ->with('FoundGuility')
            ->with('CriminallyCharged')
            ->with('beenConvicted')
            ->with('seperated')
            ->with('candidate')
            ->with('resigned')
            ->with('immigrant')
            ->with('indigenous')
            ->with('disability')
            
            ->with('references')
            ->with('identification')
            ->with('user')
            ->first();
    }
}
