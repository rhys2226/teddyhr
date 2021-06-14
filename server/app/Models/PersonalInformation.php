<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalInformation extends Model
{
    use HasFactory;
    
     protected $fillable = [
        'employee_id',
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
    
    public function permanentAdress()
    {
        return $this->hasOne(Address::class, 'employee_id','employee_id')->where('Type','PermanentAddress');
    }
    
    public function ResidentialAdress()
    {
        return $this->hasOne(Address::class, 'employee_id','employee_id')->where('Type','ResidentialAddress');
        
    }
}


