<?php

namespace Database\Seeders;

use App\Models\Coment;
use Database\Factories\ComentsFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ComentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {       
        Coment::factory()->count(300)->create();
    }
}
