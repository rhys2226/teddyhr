<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicationForLeave extends Model
{
    use HasFactory;
    
     protected $fillable = [
        'employee_id',
        'Comutation',
        'Days',
        'IncaseofSickLeave',
        'IncaseofVacationLeave',
        'Office',
        'SpecialPrivilege',
        'Specify',
        'SpecifyHospital',
        'SpecifyLocationinAbroad',
        'Spent',
        'Vacation',
        'VacationDetails',
        'SpecialPrivilegeVacation',
    ];

    public function user()
    {
        return $this->hasOne(User::class,'id','employee_id');
    }
    
     public function employee()
    {
        return $this->hasOne(Employee::class,'user_id','employee_id');
    }
    
}

