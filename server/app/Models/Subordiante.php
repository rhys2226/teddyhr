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
}