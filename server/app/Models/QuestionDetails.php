<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionDetails extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'employee_id',
        'question_id',
        'Question',
        'Answer',
        'Details',
    ];
}
