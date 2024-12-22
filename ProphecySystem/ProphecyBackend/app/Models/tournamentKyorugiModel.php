<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tournamentKyorugiModel extends Model
{
    use HasFactory;

    protected $table = 'tournamentkyorugi';

    protected $fillable = [
        'fight_id',
        'fighterid',
        'name',
        'abrv',
        'firstgame',
        'secondgame',
        'thirdgame',
        'overall',
        'status',
    ];

    public $timestamps = true;


}
