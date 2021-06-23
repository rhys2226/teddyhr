<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LeaveCard extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'Year',
        'Month',
        'Particulars1',
        'Particulars2',

        'VacationEarned',
        'SickEarned',
        'ServiceCreditEarned',

        'WithPayVacation',
        'WithPayLeave',
        'WithPayServiceCredit',

        'BalanceVacation',
        'BalanceLeave',
        'BalanceServiceCredit',

        'WithoutPayVacation',
        'WithoutPayLeave',

        'DateAndActionTaken1',
        'DateAndActionTaken2',
    ];
    
    public function employee()
    {
        return $this->hasOne(Employee::class,'user_id','employee_id');
    }
    
    public function user()
    {
        return $this->hasOne(User::class,'id','employee_id');
    }
}
       