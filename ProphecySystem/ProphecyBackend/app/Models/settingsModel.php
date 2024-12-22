<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class settingsModel extends Model
{
    protected $table = 'settings';

    use HasFactory;

    protected $fillable = [
        'competition',
        'level',
        'division',
        'gender',
        'category',
    ];

    public $timestamps = true;
}
