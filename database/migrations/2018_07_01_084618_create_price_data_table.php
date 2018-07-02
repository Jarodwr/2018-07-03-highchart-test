<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePriceDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('price_data', function (Blueprint $table) {
            $table->increments('id');
            $table->date('DATE');
            $table->decimal('OPEN', 10, 7);
            $table->decimal('HIGH', 10, 7);
            $table->decimal('LOW', 10, 7);
            $table->decimal('CLOSE', 10, 7);
            $table->bigInteger('VOLUME');
            $table->decimal('EX_DIVIDEND', 10, 7);
            $table->decimal('SPLIT_RATIO', 10, 7);
            $table->decimal('ADJ_OPEN', 10, 7);
            $table->decimal('ADJ_HIGH', 10, 7);
            $table->decimal('ADJ_LOW', 10, 7);
            $table->decimal('ADJ_CLOSE', 10, 7);
            $table->bigInteger('ADJ_VOLUME');
            $table->decimal('ADJ_FACTOR', 10, 7);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('price_data');
    }
}
