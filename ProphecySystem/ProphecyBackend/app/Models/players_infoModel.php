<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class players_infoModel extends Model
{

    use HasFactory;

    // Specify the table associated with the model
    protected $table = 'players';

    // Specify which attributes are mass assignable
    protected $fillable = [
        'fighterid',
        'name',
        'age',
        'bday',
        'weight',
        'height',
        'competition',
        'level',
        'category',
        'belt',
        'chapter',
        'instructor',
        'division',
        'gender'
    ];

    public $timestamps = true;

}
