<?php

namespace App\Http\Controllers;

use App\Models\AgriculturalArea;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AgriculturalAreaController extends Controller
{
    public function index()
    {
        // TODO: Implement list agricultural areas
        return Inertia::render('WilayahLahan', [
            'areas' => [],
        ]);
    }

    public function store(Request $request)
    {
        // TODO: Implement store
    }

    public function update(Request $request, $id)
    {
        // TODO: Implement update
    }

    public function destroy($id)
    {
        // TODO: Implement destroy
    }
}
