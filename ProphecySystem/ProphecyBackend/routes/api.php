<?php

use App\Http\Controllers\divisionController;
use App\Http\Controllers\pendingTeamController;
use App\Http\Controllers\players_infoController;
use App\Http\Controllers\settingsController;
use App\Http\Controllers\settingsDisplayController;
use App\Http\Controllers\teamsContoller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post("insert-players" ,[players_infoController::class, 'store']);
Route::get("view" ,[players_infoController::class, 'view']);
Route::post("/pending-players" ,[pendingTeamController::class, 'store']);


Route::post("settings" , [settingsController::class, 'store']);
Route::post("insert-level" , [settingsController::class, 'storelevel']);
Route::post("insert-division" , [settingsController::class, 'storedivision']);
Route::post("insert-gender" , [settingsController::class, 'storegender']);
Route::post("insert-category" , [settingsController::class, 'storecategory']);
Route::post('/approve-team/{id}', [pendingTeamController::class, 'approveTeam']);


Route::get('/posts/kyorugi', [settingsDisplayController::class, 'getPostsByKyorugi']);
Route::get('/posts/poomsae', [settingsDisplayController::class, 'getPostsByPoomsae']);
Route::get('/teams' , [teamsContoller::class, 'displayTeams']);
Route::get('/pending-teams' , [teamsContoller::class, 'displayPendingTeams']);
Route::get('/list/{chapter}', [players_infoController::class, 'displayPlayers']);

Route::get('/posts/competition', [settingsDisplayController::class, 'getPostsByCompetition']);
Route::get('/posts/level', [settingsDisplayController::class, 'getPostsByLevel']);
Route::get('/posts/category', [settingsDisplayController::class, 'getPostsByCategory']);
Route::get('/posts/chapter', [settingsDisplayController::class, 'getPostsByChapter']);
Route::get('/posts/division', [settingsDisplayController::class, 'getPostsByDivision']);
Route::get('/posts/gender', [settingsDisplayController::class, 'getPostsByGender']);

Route::delete('reset' , [settingsController::class , 'deleteAll']);
