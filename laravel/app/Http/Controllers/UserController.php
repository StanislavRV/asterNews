<?php

namespace App\Http\Controllers;

use App\Models\User;
use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;

class UserController extends Controller
{
    
    public function index(Request $request)
    {
     
        $user = User::query()->get();
        
    
        return response()->json($user);    
    }

    public function indexPost(Request $request)
    {
        $user = User::query()->get();
    
        return response('', 200, [$user]);    
    }
}
