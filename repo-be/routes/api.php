<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\GuestController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('v1')->group(function () {
    // Auth Routes
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
    Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:api');
    Route::post('refresh-token', [AuthController::class, 'refresh'])->middleware('auth:api');
    Route::post('forgot-password', [AuthController::class, 'forgotPassword']);
    Route::post('reset-password', [AuthController::class, 'resetPassword']);

    // Guest Routes
    Route::get('users', [GuestController::class, 'index'])->middleware('jwt.verify');
    Route::post('users', [GuestController::class, 'store'])->middleware('jwt.verify');
    Route::put('users/{id}', [GuestController::class, 'update'])->middleware('jwt.verify');
    Route::delete('users/{id}', [GuestController::class, 'destroy'])->middleware('jwt.verify');
});
