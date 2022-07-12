<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Author>
 */
class AuthorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
           
            "author" => $this->faker->name(),
            "position" => $this->faker->word(rand(1,2)),
            "path_img_author" => $this->faker->imageUrl(),
      
        ];
    }
}
