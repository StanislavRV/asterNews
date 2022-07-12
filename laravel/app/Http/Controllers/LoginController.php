<?php

namespace App\Http\Controllers;

use App\Models\User;
use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class LoginController extends Controller
{
    public function login(Request $request)
    {
    
     
        $email = $request->email;
        $password = $request->password;

        $user = User::query()->where("email", $request->email)->first();

        if ($user == null) {
            $error =  "Not found user " . $email;
            return response()->json($error);
        }

        if (Hash::check($password, $user->password)) {
            return response()->json($user);
        } else {
            $error = "Wrong password";
            return response()->json($error);
        }
    }

    public function registerUser(Request $request)
    {
        $error = [];

        $name = $request->name;
        $email = $request->email;
        $password = $request->password;
        $confirm_password = $request->confirm_password;

        if($password != $confirm_password) {
            $error = 'Wrong confirm password';
            return response()->json($error);
        }

        $newUser = new User();
        $newUser->name = $name;
        $newUser->email = $email;
        $newUser->password = Hash::make($password);

        $newUser->save();
        
       
        return response()->json('Wellcome ' . $name);

    }

    public function logout()
    {
        return Auth::logout();
    }
}
