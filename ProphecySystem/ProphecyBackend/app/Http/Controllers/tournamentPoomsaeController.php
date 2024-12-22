<?php

namespace App\Http\Controllers;

use App\Models\tournamentPoomsaeModel;
use Illuminate\Http\Request;

class tournamentPoomsaeController extends Controller
{
    public function store(Request $request){
        // Validate incoming request data
        $validatedData = $request->validate([
            'fight_id' => 'required|integer',
            'fighterid' => 'required|integer',
            'name' => 'required|string|max:255',
            'abrv' => 'required|string|max:255',
            'score' => 'required|integer',
            'status' => 'required|string|max:255',
        ]);

        tournamentPoomsaeModel::create($validatedData);

        return redirect()->back()->with('success', 'Tournament data inserted successfully!');

    }
}
