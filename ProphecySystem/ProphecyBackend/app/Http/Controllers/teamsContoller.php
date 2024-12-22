<?php

namespace App\Http\Controllers;

use App\Models\pendingTeamModel;
use App\Models\players_infoModel;
use Illuminate\Http\Request;

class teamsContoller extends Controller
{
    public function displayTeams(){
            $post = players_infoModel::select('chapter')->distinct()->get();
            return response()->json($post);
    }

    public function displayPendingTeams(){
        $post = pendingTeamModel::select('chapter')->distinct()->get();
        return response()->json($post);
}
}
