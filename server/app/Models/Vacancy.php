<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vacancy extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'Position',
        'ItemNumber',
        'SalaryGrade',
        'GovernmentalUnit',
        'Class',
        'Department',
        'Bureau',
        'Division',
        'Workstation ',
        'Present ',
        'Previous ',
        'SalaryAuthorized',
        'OtherCompensation',
        'ImmediateSupervisor',
        'NextHigherSupervisor',
        'Executive',
        'Supervisors',
        'NonSupervisors',
        'Staff',
        'GeneralPublic',
        'OtherAgencies',
        'Others',
        'Unit ',
        'Job ',
        'Experience',
        'Training',
        'Eligibility',
        'Machine',
        'Education',
    ];
    
    
}
