<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IcprFunctions extends Model
{
    use HasFactory;
      protected $fillable = [
        'Type',
        'Output',
        'SuccessIndicatiors',
        'ActualAccomplishments',
        'Remarks'
    ];
    
}
