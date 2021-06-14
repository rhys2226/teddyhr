<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
 
class EducationalBackground extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'employee_id',
        'NameOfSchool',
        'Degree',
        'From',
        'To',
        'Units',
        'YearGraduated',
        'Scholarship',
        'Type',
    ]; 
    
    public function Elementary()
    {
        return $this->hasOne(Address::class, 'employee_id','employee_id')->where('Type','Elementary');
    }
    
    public function Secondary()
    {
        return $this->hasOne(Address::class, 'employee_id','employee_id')->where('Type','Secondary');
    }
    
     public function College()
    {
        return $this->hasOne(Address::class, 'employee_id','employee_id')->where('Type','College');
    }
    
    public function Vocational()
    {
        return $this->hasOne(Address::class, 'employee_id','employee_id')->where('Type','Vocational');
    }
    
    public function GraduateStudies()
    {
        return $this->hasOne(Address::class, 'employee_id','employee_id')->where('Type','hasOne');
    }
    
}
