<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HRMOUserController;
use App\Http\Controllers\DepartmentsController;
use App\Http\Controllers\SupervisorsController;
use App\Http\Controllers\AwardsController;
use App\Http\Controllers\SeminarsController;

Route::prefix('/auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
});
Route::resource('/HMRO', HRMOUserController::class);
Route::resource('/Departments', DepartmentsController::class);
Route::resource('/Supervisors', SupervisorsController::class);
Route::resource('/Awards', AwardsController::class);
Route::resource('/Seminars', SeminarsController::class);
