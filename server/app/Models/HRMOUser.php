<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HRMOUser extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'first_name',
        'last_name',
        'middle_name',
        'phone',
        'email',
        'alignment',
        'educational_attainments',
        'eligibilities',
        'degrees',
        'work_experience',
        'previous_employer',
        'previous_employer_contact',
    ];
         
}
