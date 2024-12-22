<?php

use App\Http\Controllers\medaltallyController;
use App\Http\Controllers\players_infoController;
use App\Http\Controllers\Screen;
use App\Http\Controllers\tournamentKyorugiController;
use App\Http\Controllers\tournamentPoomsaeController;
use Illuminate\Support\Facades\Route;



Route::get('/', [Screen::class, 'home']);
Route::post('/player', [players_infoController::class, 'store']) -> name('players.store');
Route::post('/kyorugi',[tournamentKyorugiController::class, 'store']) -> name('tournamentKyorugi.store');
Route::post('/poomsae',[tournamentPoomsaeController::class, 'store']) -> name('tournamentPoomsae.store');
Route::post('/', [medaltallyController::class, 'store']) -> name('medalTally.store');
