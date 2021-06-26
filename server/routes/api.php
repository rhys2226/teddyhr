<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApplicantController;
use App\Http\Controllers\ApplicationForLeaveController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\AttachmentsController;
use App\Http\Controllers\AwardController;
use App\Http\Controllers\SubordianteController;
use App\Http\Controllers\VacancyController;
use App\Http\Controllers\DirectlySupervisedController;
use App\Http\Controllers\CompentenciesController;
use App\Http\Controllers\DutiesAndResponsibilitiesController;
use App\Http\Controllers\EducationalBackgroundController;
use App\Http\Controllers\EligibilitiesController;
use App\Http\Controllers\FamilyBackgroundController;
use App\Http\Controllers\IdentificationController;
use App\Http\Controllers\LearningAndDevelopmentController;
use App\Http\Controllers\LeaveCardController;
use App\Http\Controllers\LeaveSettingsController;
use App\Http\Controllers\NotificationsController;
use App\Http\Controllers\OthersController;
use App\Http\Controllers\PersonalDataSheetController;
use App\Http\Controllers\PersonalInformationController;
use App\Http\Controllers\QuestionDetailsController;
use App\Http\Controllers\QuestionsController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\RatingDetailsController;
use App\Http\Controllers\ReferencesController;
use App\Http\Controllers\ScholarshipsController;
use App\Http\Controllers\SeminarsController;
use App\Http\Controllers\VolunteerController;
use App\Http\Controllers\WorkExperienceController;
use Illuminate\Http\Request;


Route::middleware('throttle:60,1')->group(function () {
    Route::prefix('/auth')->group(function () {
        Route::post('/login', [AuthController::class, 'login']);
        Route::post('/register', [AuthController::class, 'register']);
    });
    
    Route::post('verify-email',function(Request $request){
       $class =  'App\Mail\verify';
       $emailData = [
           'verification_code' => $request->input('verification_code'),
       ];
       Mail::to($request->email)->send(new $class( $emailData ));
       return 'Email verification code has been sent to your email';
    });
    
    Route::resource('/vacancies', VacancyController::class);
    Route::resource('/applicants', ApplicantController::class);
    Route::middleware(['auth:sanctum','verified'])->group(function () {
        Route::resource('/employees', EmployeeController::class);
        Route::resource('/attachments', AttachmentsController::class);
        Route::resource('/subordinates', SubordianteController::class);
        Route::resource('/directly-supervises', DirectlySupervisedController::class);
        Route::resource('/competencies', CompentenciesController::class);
        Route::resource('/duties-and-responsibilities', DutiesAndResponsibilitiesController::class);
        Route::resource('/application-for-leave', ApplicationForLeaveController::class);
        Route::resource('/leave-settings', LeaveSettingsController::class);
        Route::resource('/leave-card', LeaveCardController::class);
        Route::resource('/ratings', RatingController::class);
        Route::resource('/rating-details', RatingDetailsController::class);
        Route::resource('/awards', AwardController::class);
        Route::resource('/notifications', NotificationsController::class);
        Route::resource('/pds', PersonalDataSheetController::class);
        Route::resource('/personal-information', PersonalInformationController::class);
        Route::resource('/address', AddressController::class);
        Route::resource('/family-background', FamilyBackgroundController::class);
        Route::resource('/educational-background', EducationalBackgroundController::class);
        Route::resource('/eligibilities', EligibilitiesController::class);
        Route::resource('/work-experience', WorkExperienceController::class);  
        Route::resource('/volounteer', VolunteerController::class);  
        Route::resource('/learning-and-development', LearningAndDevelopmentController::class);  
        Route::resource('/others', OthersController::class);  
        Route::resource('/questions', QuestionsController::class);  
        Route::resource('/question-details', QuestionDetailsController::class);  
        Route::resource('/references', ReferencesController::class);  
        Route::resource('/identification', IdentificationController::class);  
        Route::resource('/seminars', SeminarsController::class);  
        Route::resource('/scholarships', ScholarshipsController::class);  
        Route::get('/top-employees', [EmployeeController::class, 'topEmployees']);
        Route::get('/employee-performances', [EmployeeController::class, 'employeePerformance']);
        Route::post('/update-profile', [EmployeeController::class, 'updateProfile']);
    });
});