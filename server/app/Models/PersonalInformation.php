<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalInformation extends Model
{
    use HasFactory;
    
     protected $fillable = [
        'pds_id',
        'Sex',
        'CivilStatus',
        'DOB',
        'Height',
        'Weight',
        'BLOODTYPE',
        'GSIS',
        'PAGIBIG',
        'PHILHEALTH',
        'SSS',
        'TIN',
        'EmployeeNumber',
        'Citizenship',
        'DualCititizenship',
        'Details',
        'Telephone',
    ];
}


