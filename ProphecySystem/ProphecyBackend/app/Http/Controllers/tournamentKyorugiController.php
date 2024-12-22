<?php

namespace App\Http\Controllers;

use App\Models\tournamentKyorugiModel;
use Illuminate\Http\Request;

class tournamentKyorugiController extends Controller
{
    public function store(Request $request){
        // Validate incoming request data
        $validatedData = $request->validate([
            'fight_id' => 'required|integer',
            'fighterid' => 'required|integer',
            'name' => 'required|string|max:255',
            'abrv' => 'required|string|max:255',
            'firstgame' => 'required|integer',
            'secondgame' => 'required|integer',
            'thirdgame' => 'required|integer',
            'overall' => 'required|integer',
            'status' => 'required|string|max:255',
        ]);

        tournamentKyorugiModel::create($validatedData);
        return redirect()->back()->with('success', 'Tournament data inserted successfully!');

    }
}
