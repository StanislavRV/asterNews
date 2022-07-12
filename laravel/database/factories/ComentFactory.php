<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ComentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
       
        return [
            "coment" => $this->faker->text(),
            "user_id" => $this->faker->numberBetween(1,15),
            "user_name" => $this->faker->name(),
            "article_id" => $this->faker->numberBetween(1,100),
            "publish" => $this->faker->date('Y-m-d', 'now'),
        ];
    }
}
