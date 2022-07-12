<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $table = "articles";
    protected $primaryKey = "id";
    protected $fillable = ["title", 'article', 'category_id', 'author_id', 'path_title_img', 'path_aticle_img', 'publish'];

    public $timestamps = false;

    public function category(){
        return $this->hasOne(Category::class, "id", "category_id");
    }

    public function author(){
        return $this->hasOne(Author::class, "id", "author_id");
    }
}
