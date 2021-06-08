<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicationForLeave extends Model
{
    use HasFactory;
    
     protected $fillable = [
        'employee_id',
        'Office',
        'Spent',
        'SpecialPrivilege',
        'VacationDetails',
        'SpecialPrivilegeVacation',
        'IncaseofSickLeave',
        'IncaseofVacationLeave',
        'SpecifyLocationinAbroad',
        'SpecifyHospital',
        'Days',
        'Comutation',
        'From',
        'To',
        'Approved',
    ];

    
}

