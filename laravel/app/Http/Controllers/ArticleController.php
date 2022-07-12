<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Author;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
      
        $allArticles = Article::where('confirm', 1)->orderBy('publish')->paginate(6);
      

        return response()->json($allArticles);
    }
    public function getNavArticle(Request $request)
    {

        $navArticles = Article::where('confirm', 1)->orderBy('publish', 'desc')->paginate(5);


        return response()->json($navArticles);
    }
    public function getArticleId(Request $request)
    {

        $Article = Article::query()->where('confirm', 1)->where("id", $request->id)->first();
        $Author = Author::query()->where("id", $Article->author_id)->first();
        $Category = Category::query()->where("id", $Article->category_id)->first();

        return response()->json([$Article, $Author->author, $Category->category]);
    }

    public function categoryNews(Request $request)
    {
        $Category = Category::query()->where("category", $request->category)->first();
        $categoryNews = Article::query()->where('confirm', 1)->where("category_id", $Category->id)->get();

        return response()->json($categoryNews);
    }

    public function search(Request $request)
    {
        $searchAtr = "%" . $request->search . "%";

      
        $allArticles = Article::query()->where('confirm', 1)->where('title', 'like', $searchAtr)->get();

        return response()->json($allArticles);
    }

    public function createArticle(Request $request)
    {
  

        $title = $request->title;
        $article = $request->article;
        $category_id = $request->category_id;
        $author_id = $request->author_id;
        $publish = $request->publish;


        $articleNew = new Article();

        $articleNew->title = $title;
        $articleNew->article = $article;
        $articleNew->category_id = $category_id;
        $articleNew->author_id = $author_id;
        $articleNew->publish = $publish;
      
 

        $file = $request->file("path_title_img");
        if ($file != null) {

            $fileName = time() . $file->getClientOriginalName();
      
            $file->move(public_path() . "/uploads", $fileName);
           
            $articleNew->path_title_img = 'http://127.0.0.1:8000' . "/uploads" ."/$fileName";
        }

        $file2 = $request->file("path_aticle_img");
        if ($file2 != null) {

            $fileName = time() . $file2->getClientOriginalName();
      
            $file2->move(public_path() . "/uploads", $fileName);

            $articleNew->path_aticle_img = 'http://127.0.0.1:8000' . "/uploads" ."/$fileName";
        }

 

        $articleNew->save();

        return response()->json($articleNew);
    }

    public function confirm()
    {
        $allArticles = Article::where('confirm', 0)->get();
        return response()->json($allArticles);
    }
    
    public function acceptArticle($id)
    {        
        $article = Article::query()->where('id', $id)->first();
        $article->confirm = 1;
        $article->save();       

        return response()->json("accept"); 
    }

    public function deleteArticle($id)
    {        
        $article = Article::query()->where('id', $id)->first();

        if($article == null){
            return response()->json("Not found instruction " . $id);
        }
        
        $article->delete();
        

        return response()->json("delete"); 
    }

}
