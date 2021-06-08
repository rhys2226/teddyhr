<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;
    
     protected $fillable = [
        'pds_id',
        'HouseNumber',
        'Street',
        'Village',
        'Barangay',
        'Municipality',
        'Province',
        'ZipCode',
        'Type',
    ];

}
   