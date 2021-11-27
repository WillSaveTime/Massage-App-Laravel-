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


Route::prefix('cooker')->group(function(){
    Route::get('/', function(){ return view('frontend.index'); })->name('index');
    Route::get('/system', function() { return view('frontend.system'); })->name('system');
    Route::get('/schedule', function(){ return view('frontend.schedule'); })->name('schedule');
    Route::get('/reservation', function(){ return view('frontend.reservation'); })->name('reservation');
    Route::get('/therapist', function(){ return view('frontend.therapist'); })->name('therapist');
    Route::get('/access', function(){ return view('frontend.access'); })->name('access');
    Route::get('/recruit', function(){ return view('frontend.recruit'); })->name('recruit');
    Route::get('/link', function(){ return view('frontend.link'); })->name('link');
    Route::get('/policy', function(){ return view('frontend.policy'); })->name('policy');
    Route::get('/news_list', function(){ return view('frontend.news_list'); })->name('news_list');
    Route::prefix('blog')->group(function() {
        Route::get('/blog', function(){ return view('frontend.blog.blog'); })->name('blog');
        Route::get('/blog_1', function(){ return view('frontend.blog.blog_1'); })->name('blog_1');
    });
    Route::prefix('therapist')->group(function() {
        Route::get('/therapist_1', function() { return view('frontend.therapist.therapist_1'); })->name('therapist_1');
    });
    Route::prefix('therapist_blog')->group(function() {
        Route::get('/therapist_blog_1', function() { return view('frontend.therapist_blog.therapist_blog_1'); })->name('therapist_blog_1');
    });
    Route::prefix('news')->group(function() {
        Route::get('/news_1', function() { return view('frontend.news.news_1'); })->name('news_1');
    });
});