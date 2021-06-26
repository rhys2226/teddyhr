<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Scholarships extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'Title',
    ];
    
    public function attachments(){
        return $this->hasMany(Attachments::class, 'scholarship_id','id');
    }
}
 