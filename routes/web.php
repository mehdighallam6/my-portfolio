<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class,'home'])->name('home');


Route::middleware('auth')->group(function () {

    Route::middleware('verified')->group(function () {
        Route::get('/dashboard', [HomeController::class,'dashboard'])->name('dashboard');
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
