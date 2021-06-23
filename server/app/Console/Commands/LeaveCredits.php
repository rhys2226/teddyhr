<?php

namespace App\Console\Commands;

use App\Models\Employee;
use App\Models\LeaveCard;
use Illuminate\Console\Command;

class LeaveCredits extends Command{
    
    protected $signature = 'leave_credits:add';
      
    protected $description = 'Add a Leave credit every month based on leave settings';
    
    public function __construct()
    {
        parent::__construct();
    }
    
    public function handle()
    {
       $employees = Employee::all();
        foreach( $employees as  $user){
            $old = LeaveCard::orderBy('created_at','desc')->first();
            
            $new = new LeaveCard();
            $new->employee_id =  $user->user_id;
            $new->Year =  date('Y');
            $new->Month =  date('F');
            $new->Particulars1 =  '';
            
            // --vacation
            $new->VacationEarned =  1.25;
            $new->WithPayVacation =  0;
            $new->BalanceVacation =  ($old->BalanceVacation + $new->VacationEarned) -  $new->WithPayVacation ;
            $new->WithoutPayVacation =  0;
            
            // --sick
            $new->SickEarned =  1.25;
            $new->WithPayLeave =  0;
            $new->BalanceLeave =  ($old->BalanceLeave + $new->SickEarned) -  $new->WithPayLeave;
            $new->WithoutPayLeave =  0;
            
            $new->DateAndActionTaken1 =  '';
            
            // --service credit
            $new->Particulars2 =  '';
            $new->ServiceCreditEarned =  0;
            $new->WithPayServiceCredit =  0;
            $new->BalanceServiceCredit =  ($old->BalanceServiceCredit + $new->ServiceCreditEarned) -  $new->WithPayServiceCredit;
            
            $new->DateAndActionTaken2 =  '';
            $new->save();
        }
    }
    
  
}