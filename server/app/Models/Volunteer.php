<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Volunteer extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'employee_id',
        'Name',
        'From',
        'To',
        'Hours',
        'Department',
    ];
}
