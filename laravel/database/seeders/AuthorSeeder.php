<?php

namespace Database\Seeders;

use App\Models\Author;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Author::factory()->create(['author' => 'Shan Teylor', 'position' => 'Tech Mint', 'path_img_author' => '../img/creators/teylor.jpg']);
        Author::factory()->create(['author' => 'Mary Angela', 'position' => 'Live Mint', 'path_img_author' => '../img/creators/angela.jpg']);
        Author::factory()->create(['author' => 'Kyon Cho Chi', 'position' => 'Bizz Daily', 'path_img_author' => '../img/creators/cho-chi.jpg']);
        Author::factory()->create(['author' => 'Paul Livingstone', 'position' => 'Sport Biz', 'path_img_author' => '../img/creators/livingstone.jpg']);
        Author::factory()->create(['author' => 'Shan Teylor', 'position' => 'Tech Mint', 'path_img_author' => '../img/creators/teylor.jpg']);
        Author::factory()->create(['author' => 'Mary Angela', 'position' => 'Live Mint', 'path_img_author' => '../img/creators/angela.jpg']);
        Author::factory()->create(['author' => 'Kyon Cho Chi', 'position' => 'Bizz Daily', 'path_img_author' => '../img/creators/cho-chi.jpg']);
        Author::factory()->create();
    }
}

