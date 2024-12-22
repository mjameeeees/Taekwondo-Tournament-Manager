<?php

namespace App\Http\Controllers;

use App\Models\players_infoModel;
use Illuminate\Http\Request;

class players_infoController extends Controller
{
    public function store(Request $request)
    {

        $data = new players_infoModel;
        // Validate incoming request data
        $validatedData = $request->validate([
            'fighterid' => 'required|integer',
            'name' => 'required|string|max:255',
            'age' => 'required|integer',
            'bday' => 'required|date',
            'weight' => 'required|numeric',
            'height' => 'required|numeric',
            'competition' => 'required|string|max:255',
            'level' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'belt' => 'required|string|max:255',
            'chapter' => 'required|string|max:255',
            'instructor' => 'required|string|max:255',
            'division' => 'required|string|max:255',
            'gender' => 'required|string|max:255',
        ]);

        // Insert data into the database
        players_infoModel::create($validatedData);

        $result=$data->save();

        if($result){
            return ["Result" => "Players Inserted"];
        } else{
            return ["Failed" => "Failed to Insert"];
        }

        // Redirect or return response
        return redirect()->back()->with('success', 'Player data inserted successfully!');
    }

    public function displayPlayers($chapter){
        // Fetch players based on the team chapter
        $players = players_infoModel::where('chapter', $chapter)->get();
        return response()->json($players);
    }
}
