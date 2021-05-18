<?php

namespace App\Http\Controllers;

use App\Models\PDS;
use Illuminate\Http\Request;

class PDSController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return $request->user()->pds;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        /**
         * @var \App\Models\User
         */
        $user = $request->user();

        if ($user->pds) {
            $user->pds->update($request->all());
        } else {
            $user->pds()->create($request->all());
        }

        return $user->pds;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PDS  $pDS
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, PDS $pDS)
    {
        return $request->user()->pds;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PDS  $pDS
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PDS $pDS)
    {
        /**
         * @var \App\Models\User
         */
        $user = $request->user();

        if ($user->pds) {
            $user->pds->update($request->all());
        } else {
            $user->pds()->create($request->all());
        }

        return $user->pds;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PDS  $pDS
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, PDS $pDS)
    {
        return $request->user()->pds;
    }
}
