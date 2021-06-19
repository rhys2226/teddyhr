<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Award extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'employee_id',
        'title',
        'description',
    ];
    
    public function files()
    {
        return $this->hasMany(Attachments::class,'award_id','id');
    }
    
    public function user()
    {
        return $this->hasOne(User::class,'id','employee_id');
    }
} 
       