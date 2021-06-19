<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LearningAndDevelopment extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'employee_id',
        'Title',
        'From', 
        'To',
        'Hours',
        'Type',
        'SponsoredBy',
    ]; 
    
    public function user()
    {
        return $this->hasOne(User::class,'id','employee_id');
    }
} 
 