<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'user_id',
        'Alignment',
        'Position',
        'PreviousEmployer',
        'EmployersContactInformation',
        'FirstDay'
    ];
    
    public function user()
    {
        return $this->hasOne(User::class, 'id','user_id');
    } 
    
    public function supervisors()
    {
        return $this->hasOneThrough(User::class, Subordiante::class, 'SubordinateID','id', 'user_id','SupervisorID');
    }
    
    public function leaves()
    {
        return $this->hasMany(ApplicationForLeave::class, 'employee_id','user_id');
    }
    
    public function attachments()
    {
        return $this->hasMany(Attachments::class, 'user_id','user_id');
    }
    
    // pds 
    
     public function WorkExperiences()
    {
        return $this->hasManyThrough(WorkExperience::class, PersonalDataSheet::class, 'employee_id','id', 'id','employee_id');
    }
    
    public function EducationalAttainments()
    {
        return $this->hasManyThrough(EducationalBackground::class, PersonalDataSheet::class, 'employee_id','id', 'id','employee_id');
    }
    
    public function Eligibilities()
    {
        return $this->hasManyThrough(Eligibilities::class, PersonalDataSheet::class, 'employee_id','id', 'id','employee_id');
    }
    
    
    
    
    
}
