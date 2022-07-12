<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('author', function (Blueprint $table) {
            $table->id();
            $table->string('author');            
            $table->string('position');            
            $table->string('path_img_author');          
        });

        Schema::table("articles", function (Blueprint $table){
      
            $table->foreign("author_id")->references("id")->on("author")->onDelete('cascade');
            $table->foreign("category_id")->references("id")->on("category")->onDelete('cascade');

        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('articles', function (Blueprint $table){
            $table->dropConstrainedForeignId("category_id");            
            $table->dropConstrainedForeignId("author_id");            
        });

        Schema::dropIfExists('author');
    }
};
