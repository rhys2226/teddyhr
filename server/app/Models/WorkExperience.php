<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkExperience extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'employee_id',
        'From',
        'To',
        'Department',
        'Salary',
        'Appointment',
        'Government',
        'Position',
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
  