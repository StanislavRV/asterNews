<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {        
        Category::factory()->create(['category' => 'Top Stories']);
        Category::factory()->create(['category' => 'Around the World']);
        Category::factory()->create(['category' => 'Business']);
        Category::factory()->create(['category' => 'Health']);
        Category::factory()->create(['category' => 'Covid 19']);
        Category::factory()->create(['category' => 'Entertainment']);
        Category::factory()->create(['category' => 'Sports']);
        Category::factory()->create(['category' => 'Discussion']);
        Category::factory()->create(['category' => 'Android']);
        Category::factory()->create(['category' => 'Cricket']);
        Category::factory()->create(['category' => 'iPhone']);
        Category::factory()->create(['category' => 'Google']);
        Category::factory()->create(['category' => 'Nano Technology']);
        Category::factory()->create(['category' => 'Mental Health']);       
        
    }
}




