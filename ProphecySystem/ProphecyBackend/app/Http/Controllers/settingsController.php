<?php

namespace App\Http\Controllers;

use App\Models\settingsModel;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;

class settingsController extends Controller
{

    //public function store (Request $request){

    public function store(Request $request)
    {

        $data = new settingsModel();

        $validateData = $request->validate(
            [
                'competition' => 'required|string|max:255',
                'level' => 'required|string|max:255',
                'division' => 'required|string|max:255',
                'gender' => 'required|string|max:255',
                'category' => 'required|string|max:255'
            ]
        );

        settingsModel::create($validateData);

        $result = $data->save();
        if ($result) {
            return ["Result" => "Players Inserted"];
        } else {
            return ["Failed" => "Failed to Insert"];
        }
        return redirect()->back()->with("Success!");
    }

    public function storeLevel(Request $request)
    {
        $data = new settingsModel;

        $validateData = $request->validate(
            [
                'competition' => 'required|string|max:255',
                'level' => 'required|string|max:255',
            ]
        );

        settingsModel::create($validateData);

        return redirect()->back()->with("Success");
    }

    public function storeDivision(Request $request)
    {
        $data = new settingsModel;

        $validateData = $request->validate(
            [
                'competition' => 'required|string|max:255',
                'division' => 'required|string|max:255',
            ]
        );

        settingsModel::create($validateData);

        return redirect()->back()->with("Success");
    }

    public function storeGender(Request $request)
    {
        $data = new settingsModel;

        $validateData = $request->validate(
            [
                'competition' => 'required|string|max:255',
                'gender' => 'required|string|max:255',
            ]
        );

        settingsModel::create($validateData);

        return redirect()->back()->with("Success");
    }

    public function storeCategory(Request $request)
    {
        $data = new settingsModel;

        $validateData = $request->validate(
            [
                'competition' => 'required|string|max:255',
                'category' => 'required|string|max:255',
            ]
        );

        settingsModel::create($validateData);

        return redirect()->back()->with("Success");
    }

    public function deleteAll(){
        settingsModel::truncate();
        return response()->json(["message"  => "Deleted All Data"]);
    }

}
