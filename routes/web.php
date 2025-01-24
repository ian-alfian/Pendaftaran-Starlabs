<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
        return view('home'); // Mengarah ke resources/views/home.blade.php
});
