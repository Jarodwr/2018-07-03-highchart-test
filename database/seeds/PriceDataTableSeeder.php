<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use GuzzleHttp\Client;

class PriceDataTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $user = '7c744b3517904581e88ad2e7881071a3';
        // $pass = '1ce813d9ae169d0ae053299880747c99';
        $apiUrl = 'https://api.intrinio.com/prices?identifier=QCOM&start_date=2016-01-01&end_date=2018-07-01&frequency=daily';
        $pageSize = 100;
        $client = new Client();
        $currentPage = 1;
        $nextPageExists = true;
        while ($nextPageExists) {
            $res = $client->get($apiUrl."&page_number=".$currentPage."&page_size=".$pageSize, ['auth' => [env('INTRINIO_USERNAME'), env('INTRINIO_PASSWORD')]]);
            $body = json_decode($res->getBody(), true);
            foreach($body["data"] as $row) {
                DB::table('price_data')->insert([
                    'DATE' => $row['date'],
                    'OPEN' => $row['open'],
                    'HIGH' => $row['high'],
                    'LOW' => $row['low'],
                    'CLOSE' => $row['close'],
                    'VOLUME' => $row['volume'],
                    'EX_DIVIDEND' => $row['ex_dividend'],
                    'SPLIT_RATIO' => $row['split_ratio'],
                    'ADJ_OPEN' => $row['adj_open'],
                    'ADJ_HIGH' => $row['adj_high'],
                    'ADJ_LOW' => $row['adj_low'],
                    'ADJ_CLOSE' => $row['adj_close'],
                    'ADJ_VOLUME' => $row['adj_volume'],
                    'ADJ_FACTOR' => $row['adj_factor'],
                ]);
            }
            if ($body["current_page"] >= $body["total_pages"]) {
                $nextPageExists = false;
            } else {
                $currentPage++;
            }
        }
    }
}
