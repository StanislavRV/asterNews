<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    use HasFactory;
    
    protected $table = "author";
    protected $primaryKey = "id";
    protected $fillable = ["author", 'position', 'path_img_autor'];

    public $timestamps = false;

    public function articles()
    {
      return $this->belongsTo(Article::class);
    }
}
