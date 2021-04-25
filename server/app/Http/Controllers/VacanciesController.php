<?php

namespace App\Http\Controllers;

use App\Models\Vacancies;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class VacanciesController extends Controller
{
    public function index()
    {
        return Vacancies::all();
    }

    public function show(Vacancies $Vacancies)
    {
        return Vacancies::find($Vacancies->id);
    }

    public function update(Request $request, Vacancies $Vacancies)
    {
        return Vacancies::find($Vacancies->id)->update($request->all());
    }

    public function destroy(Vacancies $Vacancies)
    {
        return Vacancies::find($Vacancies->id)->delete();
    }
}
