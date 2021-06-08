<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eligibilities extends Model
{
    use HasFactory;
     protected $fillable = [
        'pds_id',
        'Title',
        'Rating',
        'Date',
        'Place',
        'License',
        'Validity',
    ];
}
