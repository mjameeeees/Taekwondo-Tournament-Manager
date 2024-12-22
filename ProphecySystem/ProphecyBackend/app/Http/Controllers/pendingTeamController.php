<?php

namespace App\Http\Controllers;

use App\Models\pendingTeamModel;
use App\Models\players_infoModel;
use Illuminate\Http\Request;

class pendingTeamController extends Controller
{
    public function store(Request $request)
    {

        $data = new pendingTeamModel();
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
        pendingTeamModel::create($validatedData);

        $result=$data->save();

        if($result){
            return ["Result" => "Players Inserted"];
        } else{
            return ["Failed" => "Failed to Insert"];
        }

        // Redirect or return response
        return redirect()->back()->with('success', 'Player data inserted successfully!');
    }

    // Function to approve a team and move it from pendingTeams to teams
     // Approve a team based on its chapter and move it to the teams table
     public function approveTeam(Request $request, $chapter)
     {
         // Find the team in the pendingTeams table by chapter
         $pendingTeam = pendingTeamModel::where('chapter', $chapter)->first();

         if (!$pendingTeam) {
             return response()->json(['error' => 'Pending team not found for this chapter'], 404);
         }

         // Create a new record in the teams table with the data from pendingTeams
         $team = players_infoModel::create([
             'fighterid' => $pendingTeam->fighterid,
             'name' => $pendingTeam->name,
             'age' => $pendingTeam->age,
             'bday' => $pendingTeam->bday,
             'weight' => $pendingTeam->weight,
             'height' => $pendingTeam->height,
             'competition' => $pendingTeam->competition,
             'level' => $pendingTeam->level,
             'category' => $pendingTeam->category,
             'belt' => $pendingTeam->belt,
             'chapter' => $pendingTeam->chapter,
             'instructor' => $pendingTeam->instructor,
             'division' => $pendingTeam->division,
             'gender' => $pendingTeam->gender,
         ]);

         // Delete the team from pendingTeams table after transfer
         $pendingTeam->delete();

         // Return a success message
         return response()->json(['message' => 'Team approved and transferred successfully', 'team' => $team], 200);
     }

}
