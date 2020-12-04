<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PersonController;
use App\Http\Controllers\ArticleController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// menambahkan route untuk person
Route::get('/person', [PersonController::class, 'all']);
Route::post('/person', [PersonController::class, 'store']);
Route::get('/person/{id}', [PersonController::class, 'show']);
Route::put('/person/{id}', [PersonController::class, 'update']);
Route::delete('/person/{id}', [PersonController::class, 'delete']);

// route untuk article
Route::get('/articles', [ArticleController::class, 'index']);
Route::post('/article/store', [ArticleController::class, 'store']);
Route::get('/article/edit/{id}', [ArticleController::class, 'getArticle']);
Route::get('/article/show/{id}', [ArticleController::class, 'getArticle']);
Route::put('/article/update/{id}', [ArticleController::class, 'update']);
Route::delete('/article/delete/{id}', [ArticleController::class, 'delete']);
