<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create(['name' => 'Anonymous', 'email' => 'Anonymous@master.net', 'password' => Hash::make('Anonymous@master.net'), 'role' =>'user']);
        User::factory()->create(['name' => 'master@master.net', 'email' => 'master@master.net', 'password' => Hash::make('master@master.net'), 'role' =>'master']);
        User::factory()->create(['name' => 'author@author.net', 'email' => 'author@author.net', 'password' => Hash::make('author@author.net'), 'role' =>'author']);

        User::factory()->count(15)->create();
      
    }
}
