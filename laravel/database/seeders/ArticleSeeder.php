<?php

namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
  
    {
        Article::factory()->create(['title' => 'Samsung Galaxy F22 launched in India: Price, features, other details', 'article' => 'Samsung Galaxy F22 has been launched in India. The new smartphone has been priced in the mid-range segment. The new smartphone is powered by a MediaTek chipset and features a high refresh rate AMOLED display. <br>Samsung Galaxy F22 has been launched in India. The new smartphone has been priced in the mid-range segment. The new smartphone is powered by a MediaTek chipset and features a high refresh rate AMOLED display.<br>Samsung Galaxy F22 has been launched in India. The new smartphone has been priced in the mid-range segment. The new smartphone is powered by a MediaTek chipset and features a high refresh rate AMOLED display.<br>Samsung Galaxy F22 has been launched in India. The new smartphone has been priced in the mid-range segment. The new smartphone is powered by a MediaTek chipset and features a high refresh rate AMOLED display.<br>Samsung Galaxy F22 has been launched in India. The new smartphone has been priced in the mid-range segment. The new smartphone is powered by a MediaTek chipset and features a high refresh rate AMOLED display.<br>Samsung Galaxy F22 has been launched in India. The new smartphone has been priced in the mid-range segment. The new smartphone is powered by a MediaTek chipset and features a high refresh rate AMOLED display.Samsung Galaxy F22 has been launched in India. The new smartphone has been priced in the mid-range segment. The new smartphone is powered by a MediaTek chipset and features a high refresh rate AMOLED display.', 'path_title_img' => '../img/stories/sumsung-galaxy.jpg', "publish" => '2022-05-10, 23:20:03']);
        Article::factory()->create(['title' => 'Battlegrounds Mobile India iOS release date', 'article' => 'The reason behind their disappointment is that iPhone users have been... Samsung Galaxy F22 has been launched in India. The new smartphone has been priced in the mid-range segment. The new smartphone is powered by a MediaTek chipset and features a high refresh rate AMOLED display.', 'path_title_img' => '../img/stories/buttle-mobile.jpg', "publish" => '2022-05-09, 08:01:03']);
        Article::factory()->create(['title' => 'INDvENG Tests to be played in front of crowd', 'article' => 'The 5-Test series between India & England is set to be played in front of packed. The reason behind their disappointment is that iPhone users have been... Samsung Galaxy F22 has been launched in India. The new smartphone has been priced in the mid-range segment. The new smartphone is powered by a MediaTek chipset and features a high refresh rate AMOLED display.', 'path_title_img' => '../img/stories/install-windows.jpg', "publish" => '2022-05-09, 07:01:03']);
        Article::factory()->create(['title' => 'Battlegrounds Mobile India iOS release date', 'article' => 'The 5-Test series between India & England is set to be played in front of packed.  The new smartphone has been priced in the mid-range segment. The new smartphone is powered by a MediaTek chipset and features a high refresh rate AMOLED display.', 'path_title_img' => '', "publish" => '2022-05-09, 10:01:03']);
        Article::factory()->create(['title' => 'The 10 Coolest Wearable Tech Gadgets Of 2021 (So Far)', 'article' => 'Driven by demand for connected earbuds and The 5-Test series between India & England is set to be played in front of packed.  The new smartphone has been priced in the mid-range segment. The new smartphone is powered by a MediaTek chipset and features a high refresh rate AMOLED display.', 'path_title_img' => '../img/stories/android-smart.jpg', "publish" => '2022-05-09, 02:01:03']);
        Article::factory()->create(['title' => 'Instagram working on ‘Exclusive Stories’ for subscribers', 'article' => 'Instagram could be jumping on the paid subscription. Driven by demand for connected earbuds and The 5-Test series between India & England is set to be played in front of packed.  The new smartphone has been priced in the mid-range segment. The new smartphone is powered by a MediaTek chipset and features a high refresh rate AMOLED display.', 'path_title_img' => '../img/stories/instagram.jpg', "publish" => '2022-05-08, 09:01:03']);
        Article::factory()->count(100)->create();
    }
}
