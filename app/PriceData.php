<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PriceData extends Model
{
    protected $table = 'price_data';
    public $timestamps = false;

    protected $fillable = [
        'DATE',
        'OPEN',
        'HIGH',
        'LOW',
        'CLOSE',
        'VOLUME',
        'EX_DIVIDEND',
        'SPLIT_RATIO',
        'ADJ_OPEN',
        'ADJ_HIGH',
        'ADJ_LOW',
        'ADJ_CLOSE',
        'ADJ_VOLUME',
        'ADJ_FACTOR',
    ];
}
