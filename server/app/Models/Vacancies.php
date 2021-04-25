<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vacancies extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'experience',
        'office',
        'level',
        'type',
        'indusrty',
        'qualifications',
        'job_description',
    ];
}
