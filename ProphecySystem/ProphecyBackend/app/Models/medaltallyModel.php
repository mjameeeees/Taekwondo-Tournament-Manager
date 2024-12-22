<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class medaltallyModel extends Model
{
    use HasFactory;

    protected $table = 'medaltally';

    protected $fillable = [
        'chapter',
        'bronze',
        'silver',
        'gold',
    ];

    public $timestamps = true;
}
