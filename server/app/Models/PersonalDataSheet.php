<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use stdClass;

class PersonalDataSheet extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'employee_id',
    ];
    
    public function personalInformation()
    {
        return $this->hasOne(PersonalInformation::class,'employee_id','employee_id');
    }
    
     public function residentialAddress()
    {
        return  $this->hasOne(Address::class, 'employee_id','employee_id')->where('Type','ResidentialAddress');

    }
    
    public function permanentAddress()
    {
        return  $this->hasOne(Address::class,'employee_id','employee_id')
       ->where('Type','PermanentAddress');
    }
    
    public function familyBackground()
    {
        return $this->hasOne(FamilyBackground::class,'employee_id','employee_id');
    }
    
    public function children()
    {
        return $this->hasMany(Childrens::class,'employee_id','employee_id');
    }
    
     public function Elementary()
    {
        return $this->hasOne(EducationalBackground::class, 'employee_id','employee_id')->where('Type','Elementary');
    }
    
    public function Secondary()
    {
        return $this->hasOne(EducationalBackground::class, 'employee_id','employee_id')->where('Type','Secondary');
    }
    
     public function College()
    {
        return $this->hasOne(EducationalBackground::class, 'employee_id','employee_id')->where('Type','College');
    }
    
    public function Vocational()
    {
        return $this->hasOne(EducationalBackground::class, 'employee_id','employee_id')->where('Type','Vocational');
    }
    
    public function GraduateStudies()
    {
        return $this->hasOne(EducationalBackground::class, 'employee_id','employee_id')->where('Type','GraduateStudies');
    }
    
    public function eligiblities()
    {
        return $this->hasMany(Eligibilities::class,'employee_id','employee_id');
    }
    
    public function workExperiences()
    {
        return $this->hasMany(WorkExperience::class,'employee_id','employee_id');
    }
    
    public function volountaryInvolvements()
    {
        return $this->hasMany(Volunteer::class,'employee_id','employee_id');
    }
    
    public function LearningAndDevelopment()
    {
        return $this->hasMany(LearningAndDevelopment::class,'employee_id','employee_id');
    }
    
    public function others()
    {
        return $this->hasMany(Others::class,'employee_id','employee_id');
    }
    
    public function questionDetails()
    {
        return $this->hasManyThrough(
            QuestionDetails::class,
            Question::class,
            'question_id',
            'id',
            'employee_id',
            'employee_id',
        );
    }
    
    public function references()
    {
        return $this->hasMany(References::class,'employee_id','employee_id');
    }
    
    public function identification()
    {
        return $this->hasOne(Identification::class,'employee_id','employee_id');
    }
    
     public function user()
    {
        return $this->hasOne(User::class,'id','employee_id');
    }
}
 