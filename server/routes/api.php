<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApplicantController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\AttachmentsController;


Route::prefix('/auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
});

Route::resource('/applicants', ApplicantController::class);
Route::resource('/employees', EmployeeController::class);
Route::resource('/attachments', AttachmentsController::class);



