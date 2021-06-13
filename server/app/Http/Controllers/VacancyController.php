<?php

namespace App\Http\Controllers;

use App\Models\Vacancy;
use App\Http\Controllers\Controller;
use App\Models\Compentencies;
use App\Models\DirectlySupervised;
use App\Models\DutiesAndResponsibilities;
use Illuminate\Http\Request;

class VacancyController extends Controller
{
   
    public function index()
    {
        return Vacancy::all();
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $vacancy = Vacancy::create( $data );
        $h = 0;
        foreach( $data['CoreCompentency'] as $CoreCompentency){
            $compentencies = new Compentencies();
            $compentencies->vacancy_id = $vacancy->id;
            $compentencies->Name = $CoreCompentency['Name'.$h];
            $h += 1;
            $compentencies->CompetencyLevel = $CoreCompentency['CompetencyLevel'.$h];
            $compentencies->save();
        }
        $i = 0;
        foreach( $data['DirectlySupervised'] as $DirectlySupervised){
            $directlySupervised = new DirectlySupervised();
            $directlySupervised->vacancy_id = $vacancy->id;
            $directlySupervised->Position = $DirectlySupervised['Position'.$i];
            $directlySupervised->ItemNumber = $DirectlySupervised['ItemNumber'.$i];
            $directlySupervised->save();
            $i += 1;
        }
        $j = 0;
        foreach( $data['DutiesAndResponsibilities'] as $DutiesAndResponsibilities){
            $dutiesAndResponsibilities = new DutiesAndResponsibilities();
            $dutiesAndResponsibilities->vacancy_id = $vacancy->id;
            
            $dutiesAndResponsibilities->DutiesAndResponsibilities1 = $DutiesAndResponsibilities['DutiesAndResponsibilities1'.$j];
            $dutiesAndResponsibilities->DutiesAndResponsibilities2 = $DutiesAndResponsibilities['DutiesAndResponsibilities2'.$j];
            
            $dutiesAndResponsibilities->PercentageofWorkingTime1 = $DutiesAndResponsibilities['PercentageofWorkingTime1'.$j];
            $dutiesAndResponsibilities->PercentageofWorkingTime2 = $DutiesAndResponsibilities['PercentageofWorkingTime2'.$j];
            
            $dutiesAndResponsibilities->CompetencyLevel = $DutiesAndResponsibilities['CompetencyLevel'.$j];
            
            $dutiesAndResponsibilities->save();
            $j += 1;
        }
    }

    public function update(Request $request,$id)
    {
        return  Vacancy::find($id)->fill($request->all())->save();
    }

    public function destroy($id)
    {
        return  Vacancy::find($id)->delete();
    }
}
