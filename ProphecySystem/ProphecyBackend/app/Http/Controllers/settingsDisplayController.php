<?php

namespace App\Http\Controllers;

use App\Models\settingsModel;
use Illuminate\Http\Request;

class settingsDisplayController extends Controller
{
    public function getPostsByKyorugi()
    {
        // Fetch posts where the competition column equals 'poomsae'
        $posts = settingsModel::where('competition', 'kyorugi')->get();

        return response()->json($posts);
    }
    public function getPostsByPoomsae()
    {
        // Fetch posts where the competition column equals 'poomsae'
        $posts = settingsModel::where('competition', 'poomsae')->get();

        return response()->json($posts);
    }

    //Settings Insert


    public function getPostsByLevel()
    {
       // Fetch distinct levels from the settingsModel
    $levels = settingsModel::select('level')->distinct()->get();
    return response()->json($levels);
    }

    public function getPostsByCategory()
    {
        // Fetch posts where the competition column equals 'poomsae'
        $posts = settingsModel::select('category')->distinct()->get();

        return response()->json($posts);
    }


    public function getPostsByChapter()
    {
        // Fetch posts where the competition column equals 'poomsae'
        $posts = settingsModel::select('chapter')->distinct()->get()();

        return response()->json($posts);
    }
    public function getPostsByDivision()
    {
        // Fetch posts where the competition column equals 'poomsae'
        $posts = settingsModel::select('division')->distinct()->get()();

        return response()->json($posts);
    }
    public function getPostsByGender()
    {
        // Fetch posts where the competition column equals 'poomsae'
        $posts = settingsModel::select('gender')->distinct()->get();

        return response()->json($posts);
    }

}
