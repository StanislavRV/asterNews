<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {


        return [

            "title" => $this->faker->sentence(rand(1,7)),
            "article" => $this->faker->text(),
            "category_id" => $this->faker->numberBetween(1,14),
            "author_id" => $this->faker->numberBetween(1,5),
            "path_title_img" => $this->faker->imageUrl(),
            "path_aticle_img" => $this->faker->imageUrl(),
            "publish" => $this->faker->date('Y-m-d h-m-s', 'now'),
            "confirm" => true
            
        ];
    }
}

