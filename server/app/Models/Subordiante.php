<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subordiante extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'SupervisorID',
        'SubordinateID',
        'Department',
    ];
    
    public function subordinates()
    {
        return $this->hasMany(User::class,'id','SubordinateID');
    }
    
    public function supervisors()
    {
        return $this->hasOne(User::class,'id','SupervisorID');
    }
}