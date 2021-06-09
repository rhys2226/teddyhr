<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Applicant extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'user_id',
        'Alignment',
        'EducationalAttainments',
        'Eligibilities',
        'Degrees',
        'WorkExperience',
        'PreviousEmployer',
        'EmployersContactInformation',
        'Approved',
        'Schedule',
        'Position',
    ];
    
    
    public function user()
    {
        return $this->hasOne(User::class,'id','user_id');
    }

}
