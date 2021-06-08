<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FamilyBackground extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'pds_id',
        'SpouseFirst',
        'SpouseLast',
        'SpouseMiddle',
        'SpouseExt',
        'MotherFirst',
        'MotherLast',
        'MotherMiddle',
        'MotherExt',
        'FatherFirst',
        'FatherLast',
        'FatherMiddle',
        'FatherExt',
    ];
}
