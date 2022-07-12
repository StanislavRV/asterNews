<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coment extends Model
{
    use HasFactory;

    protected $table = "coments";
    protected $primaryKey = "id";
    protected $fillable = ["coment", 'user_id', 'user_name', 'article_id', 'publish'];

    public $timestamps = false;

    public function user(){
        return $this->hasOne(User::class, "id", "user_id");
    }

    public function author(){
        return $this->hasOne(Article::class, "id", "article_id");
    }
   
}
