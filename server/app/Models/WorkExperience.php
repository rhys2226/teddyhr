<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkExperience extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'pds_id',
        'From',
        'To',
        'Department',
        'Salary',
        'Appointment',
        'Government',
    ];
}
 