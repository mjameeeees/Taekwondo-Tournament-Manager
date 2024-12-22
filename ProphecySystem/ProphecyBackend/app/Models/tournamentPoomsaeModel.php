<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tournamentPoomsaeModel extends Model
{
    use HasFactory;

    protected $table = 'tournamentpoomsae';

    protected $fillable = [
        'fight_id',
        'fighterid',
        'name',
        'abrv',
        'score',
        'status',
    ];

    public $timestamps = true;
}
