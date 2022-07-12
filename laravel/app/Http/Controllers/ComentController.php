<?php

namespace App\Http\Controllers;

use App\Models\Coment;
use App\Models\User;
use Illuminate\Http\Request;

class ComentController extends Controller
{
    public function index(Request $request)
    {
        
        $Coments = Coment::query()->where('article_id', $request->id)->get();
        return response()->json($Coments);
    }
    public function addComent(Request $request)
    {
        if(!$request->user_id) {
            $user = User::query()->where('name', 'Anonymous')->first();
            $user_id = $user->id;
            $user_name = $user->name;
        } else {
            $user_id = $request->user_id;
            $user_name = $request->user_name;
        }

        $comment = $request->comment;
        $article_id = $request->article_id;
        $publish = $request->publish;


        $newComment = new Coment();

        
        $newComment->coment = $comment;
        $newComment->user_id = $user_id;
        $newComment->user_name = $user_name;
        $newComment->article_id = $article_id;
        $newComment->publish = $publish;

        $newComment->save();

        return response()->json('Comment add');
    }
}
