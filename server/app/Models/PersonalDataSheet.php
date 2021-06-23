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
    
    
    
    public function thirdDegree()
    {
        return $this->hasOne(
            QuestionDetails::class,
            'employee_id',
            'employee_id',
        )->where('Question','Within the third degree?');
    }
    
    public function ForuthDegree()
    {
        return $this->hasOne(
            QuestionDetails::class,
            'employee_id',
            'employee_id',
        )->where('Question','Within the fourth degree (for Local Government Unit - Career Employees)?');
    }
    
    public function FoundGuility()
    {
        return $this->hasOne(
            QuestionDetails::class,
            'employee_id',
            'employee_id',
        )->where('Question','Have you ever been found guilty of any administrative offense?');
    }
    
    public function CriminallyCharged()
    {   return $this->hasOne(
            QuestionDetails::class,
            'employee_id',
            'employee_id',
        )->where('Question','Have you been criminally charged before any court?');
    }
    
    public function beenConvicted()
    {
        return $this->hasOne(
            QuestionDetails::class,
            'employee_id',
            'employee_id',
        )->where('Question','Have you ever been convicted of any crime or violation of any law, decree, ordinance or regulation by any court or tribunal?');
    }
    
    public function seperated()
    {
        return $this->hasOne(
            QuestionDetails::class,
            'employee_id',
            'employee_id',
        )->where('Question','Have you ever been separated from the service in any of the following modes: resignation, retirement, dropped from the rolls, dismissal, termination, end of term, finished contract or phased out (abolition) in the public or private sector?');
    }
    
    public function candidate()
    {
        return $this->hasOne(
            QuestionDetails::class,
            'employee_id',
            'employee_id',
        )->where('Question','Have you ever been a candidate in a national or local election held within the last year (except Barangay election)?');
    }
    
    public function resigned()
    {
        return $this->hasOne(
            QuestionDetails::class,
            'employee_id',
            'employee_id',
        )->where('Question','Have you resigned from the government service during the three (3)-month period before the last election to promote/actively campaign for a national or local candidate?');
    }
    
    public function immigrant()
    {
        return $this->hasOne(
            QuestionDetails::class,
            'employee_id',
            'employee_id',
        )->where('Question','Have you acquired the status of an immigrant or permanent resident of another country?');
    }
    
    public function indigenous()
    {
        return $this->hasOne(
            QuestionDetails::class,
            'employee_id',
            'employee_id',
        )->where('Question','Are you a member of any indigenous group?');
    }
    
    public function disability()
    {
        return $this->hasOne(
            QuestionDetails::class,
            'employee_id',
            'employee_id',
        )->where('Question','Are you a person with disability?');
    }
    
     public function soloParent()
    {
        return $this->hasOne(
            QuestionDetails::class,
            'employee_id',
            'employee_id',
        )->where('Question','Are you a solo parent?');
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
 