<?php

namespace App\Http\Controllers;

use App\Models\Applicant;
use App\Models\Attachments;
use App\Models\Employee;
use App\Models\LeaveCard;
use App\Models\PersonalDataSheet;
use App\Models\Subordiante;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $user = User::where('Email',$request->input('Email'))->first();
        if (!$user) {
            return response(['message' => 'Email does not exist.'], 404);
        }
        if (!Hash::check($request->input('Password'), $user->Password)) {
            return response(['message' => 'Password is incorrect.'], 403);
        }
        $token = $user->createToken(Str::random());
        return [
            'user' => $user,
            'token' => $token->plainTextToken,
            'message' => 'Welcome Back! '. $user->First
        ];
    } 

    public function register(Request $request){
        $data = $request->all();
        $userType = $data['Type'] == 'Employees' ? 'employees/' : 'applicants/';
        
        if(isset($data['Avatar'])){
            $data['Avatar'] = AuthController::storeAvatar( $userType , $data['Avatar']) ;
        }
        $data['Password'] = Hash::make($data['Password']);
        $user = User::create($data);
        $data['user_id'] = $user->id;
        
        for($i = 0;$i < 15;$i++) {
            if(!isset($data['Attachments'.$i])){
                break;
            }
            AuthController::storeFiles( $userType ,  $data['Attachments'.$i],  $user->id );;
        }
        
        if( $data['Type'] === 'Applicant' ){
            Applicant::create($data);
            return [
                'message' => 'Plese Log-in to see your application status',
            ];
        }
        Employee::create($data);
        $Supervisor = new Subordiante();
        $Supervisor->SupervisorID = 1;
        $Supervisor->SubordinateID = $data['user_id'];
        $Supervisor->Department = 'Human Resource Management Office';
        $Supervisor->save();
        AuthController::populatePDS($data);
         AuthController::createLeaveRecord($data);
        return [
            'message' => $data['First'].'has been registered as an employee of Iloilo State College of Fisheries. Personal Data Sheet is Ready!',
        ];
    }
    
    public static function storeAvatar($userType,$file)
    {
        $path = Storage::disk('public_uploads')->put($userType.'avatars/' , $file);
        return Storage::url( $path );
    }
    
    public static function storeFiles($userType, $file, $user_id  )
    {
        $path = Storage::disk('public_uploads')->put($userType.'supporting-documents/' , $file);
        $attachments = new Attachments();
        $attachments->user_id = $user_id;
        $attachments->document_id = $user_id;
        $attachments->URL =   Storage::url( $path );
        $attachments->Type = '/supporting-documents';
        $attachments->Name = $file->getClientOriginalName();
        $attachments->save();
    } 
    
    public static function createLeaveRecord($data){
        $leaveCard = new LeaveCard();
        $leaveCard->employee_id =  $data['user_id'];
        $leaveCard->Year =  date('Y');
        $leaveCard->Month =  date('F');
        $leaveCard->Particulars1 =  'First Day of Service';
        $leaveCard->Particulars2 =  '';
        
        $leaveCard->VacationEarned =  1.125;
        $leaveCard->SickEarned =  1.125;
        $leaveCard->ServiceCreditEarned =  0;
        
        $leaveCard->WithPayVacation =  0;
        $leaveCard->WithPayLeave =  0;
        $leaveCard->WithPayServiceCredit =  0;
        
        $leaveCard->BalanceVacation = 1.125;
        $leaveCard->BalanceLeave =  1.125;
        $leaveCard->BalanceServiceCredit =  0;
        
        $leaveCard->WithoutPayVacation =  0;
        $leaveCard->WithoutPayLeave =  0;
        
        $leaveCard->DateAndActionTaken1 =  '';
        $leaveCard->DateAndActionTaken2 =  '';
        
        $leaveCard->save();
    }
    
    public static function populatePDS($data)
    {
        $pds = new PersonalDataSheet();
        $pds->employee_id =  $data['user_id'];
        $pds->save();
        $models = [
            'App\Models\PersonalInformation',
            'App\Models\Address',
            'App\Models\FamilyBackground',
            'App\Models\Childrens',
            'App\Models\EducationalBackground',
            'App\Models\Eligibilities',
            'App\Models\WorkExperience',
            'App\Models\Volunteer',
            'App\Models\LearningAndDevelopment',
            'App\Models\Others',
            'App\Models\Questions',
            'App\Models\QuestionDetails',
            'App\Models\Identification',
            'App\Models\References',
        ];
        
        foreach($models as $class){
            if( $class === 'App\Models\Address' ){
                $types = ['ResidentialAddress', 'PermanentAddress'];
                foreach($types as $type){
                    $model = new $class;
                    foreach( $model->getFillable() as $key){
                        $model->$key = 'N/A';
                        if($key === 'employee_id'){
                            $model->$key = $data['user_id'];
                        }
                        if($key === 'Type'){
                            $model->$key = $type;
                        }
                        if($key === 'From' || $key === 'To'){
                            $model->$key =date('Y-m-d');
                        }
                    }
                    $model->save();
                }
            } 
            if( $class === 'App\Models\EducationalBackground' ){
                $types = [
                    'Elementary', 
                    'Secondary',
                    'College',
                    'Vocational',
                    'GraduateStudies',
                ];
                foreach($types as $type){
                    $model = new $class;
                    foreach( $model->getFillable() as $key){
                    $model->$key = 'N/A';
                        if($key === 'employee_id'){
                            $model->$key = $data['user_id'];
                        }
                        if($key === 'Type'){
                            $model->$key = $type;
                        }
                        if($key === 'From' || $key === 'To'){
                            $model->$key = date('Y-m-d');
                        }
                    }
                    $model->save();
                }
            } 
            if( $class === 'App\Models\QuestionDetails' ){
                $types = [
                    'Within the third degree?', 
                    'Within the fourth degree (for Local Government Unit - Career Employees)?', 
                    'Have you ever been found guilty of any administrative offense?',
                    'Have you been criminally charged before any court?',
                    'Have you ever been convicted of any crime or violation of any law, decree, ordinance or regulation by any court or tribunal?',
                    'Have you ever been separated from the service in any of the following modes: resignation, retirement, dropped from the rolls, dismissal, termination, end of term, finished contract or phased out (abolition) in the public or private sector?',
                    'Have you ever been a candidate in a national or local election held within the last year (except Barangay election)?',
                    'Have you resigned from the government service during the three (3)-month period before the last election to promote/actively campaign for a national or local candidate?',
                    'Have you acquired the status of an immigrant or permanent resident of another country?',
                    'Are you a member of any indigenous group?',
                    'Are you a person with disability?',
                    'Are you a solo parent?',
                ];  
                foreach($types as $type){
                    $model = new $class;
                    foreach( $model->getFillable() as $key){
                       $model->$key = 'N/A';
                        if($key === 'employee_id'){
                            $model->$key = $data['user_id'];
                        }
                        if($key === 'Question'){
                            $model->$key = $type;
                        }
                        if($key === 'Answer'){
                            $model->$key = 'No';
                        }
                        if($key === 'From' || $key === 'To'){
                            $model->$key = date('Y-m-d');
                        }
                        if($key === 'Details'){
                            $model->$key = '';
                        }
                    }
                    $model->save();
                }
            } 
            else{
                $model = new $class;
                foreach( $model->getFillable() as $key){
                    $model->$key = 'N/A';
                    if($key === 'employee_id'){
                        $model->$key = $data['user_id'];
                    }
                    if($key === 'From' || $key === 'To'){
                        $model->$key = date('Y-m-d');
                    }
                    $model->save();
                }
            }
        }
    }
}
