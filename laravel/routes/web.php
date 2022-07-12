<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use \App\Http\Controllers\ArticleController;
use \App\Http\Controllers\AuthorController;
use \App\Http\Controllers\CategoryController;
use App\Http\Controllers\ComentController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/', function (Request $request) {
    $token = $request->user()->createToken($request->token_name);

    return ['token' => $token->plainTextToken];
});

Route::get("/users", function(Request $request){
    $users = DB::table('users')->get();
    return response()->json([$users]);
});


Route::get("/articles", [ArticleController::class, 'index']);
Route::get("/articles/{id}", [ArticleController::class, 'getArticleId']);

Route::get("/confirm", [ArticleController::class, 'confirm']);
Route::get("/confirm/{id}", [ArticleController::class, 'acceptArticle']);
Route::get("/delete/{id}", [ArticleController::class, 'deleteArticle']);

Route::get("/navarticles", [ArticleController::class, 'getNavArticle']);


Route::get("/author",  [AuthorController::class, 'index']);

Route::get("/catagoty", [CategoryController::class, 'index']);
Route::get("/search/{search}", [ArticleController::class, 'search']);

Route::get("/catagoty/{category}", [ArticleController::class, 'categoryNews']);


Route::get("/userlogin", [UserController::class, 'index']);
Route::post("/userlogin", [UserController::class, 'indexPost']);

Route::post("/articles/create", [ArticleController::class, 'createArticle']);

Route::get("/coment/{id}", [ComentController::class, 'index']);
Route::post("/coment/add", [ComentController::class, 'addComent']);