<?php

namespace App\Http\Controllers;

use App\Models\medaltallyModel;
use Illuminate\Http\Request;

class medaltallyController extends Controller
{
    public function store(Request $request){
        // Validate incoming request data
        $validatedData = $request->validate([
            'chapter' => 'required|string|max:255',
            'bronze' => 'required|integer|max:255',
            'silver' => 'required|integer|max:255',
            'gold' => 'required|integer|max:255',
        ]);

        medaltallyModel::create($validatedData);

        return redirect()->back()->with('success', 'Medal Tally data inserted successfully!');
    }
}
