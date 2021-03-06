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
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->longText('article');
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('author_id');
            $table->string('path_title_img')->nullable();
            $table->string('path_aticle_img')->nullable();
            $table->string('publish');
            $table->boolean('confirm')->default(false);
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
};
