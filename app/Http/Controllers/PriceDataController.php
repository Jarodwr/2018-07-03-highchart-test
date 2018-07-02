<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\PriceData;
use App\Http\Resources\PriceData as PriceDataResource;

class PriceDataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($start, $end)
    {
        return PriceDataResource::collection(
            PriceData::whereBetween('DATE', array($start, $end))->get()
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }
}
