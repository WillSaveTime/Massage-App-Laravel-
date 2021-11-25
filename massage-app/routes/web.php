<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::prefix('frontend')->group(function(){
    Route::get('/', function(){ return view('frontend.index'); })->name('index');
    Route::get('/system', function() { return view('frontend.system'); })->name('system');
    Route::get('/schedule', function(){ return view('frontend.schedule'); })->name('schedule');
    Route::get('/reservation', function(){ return view('frontend.reservation'); })->name('reservation');
    Route::get('/therapist', function(){ return view('frontend.therapist'); })->name('therapist');
    Route::get('/access', function(){ return view('frontend.access'); })->name('access');
    Route::get('/recruit', function(){ return view('frontend.recruit'); })->name('recruit');
});