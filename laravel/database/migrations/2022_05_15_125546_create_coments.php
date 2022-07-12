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
        Schema::create('coments', function (Blueprint $table) {
            $table->id();
            $table->longText('coment');
            $table->unsignedBigInteger('user_id');
            $table->string('user_name');
            $table->unsignedBigInteger('article_id');
            $table->string('publish');
        });

        Schema::table("coments", function (Blueprint $table){
      
            $table->foreign("user_id")->references("id")->on("users")->onDelete('cascade');
            $table->foreign("article_id")->references("id")->on("articles")->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('coments', function (Blueprint $table){
            $table->dropConstrainedForeignId("user_id");            
            $table->dropConstrainedForeignId("article_id");            
        });
        Schema::dropIfExists('coments');
    }
};
