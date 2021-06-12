<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'employee_id',
        'DiscussedBy',
        'DiscussedByDate',
        'AssessedBy',
        'AssessedByDate',
        'FinalRating',
        'FinalRatingDate',
        'ReviewedBy',
        'ReviewedByDate',
        'ApprovedBy',
        'ApprovedByDate',
        'ActualAccomplishments',
        'Remarks',
    ];
    
    public function user()
    {
        return $this->hasOne(User::class,'id','employee_id');
    } 
    
    public function supervisors()
    {
        return $this->hasOneThrough(User::class, Subordiante::class, 'SubordinateID','id', 'employee_id','SupervisorID');
    }
    
    public function RatingDetails()
    {
        return $this->hasMany(RatingDetails::class,'rating_id','id');
    }
} 
         