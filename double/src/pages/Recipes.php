<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

return new class {
    const API = 'https://recipe.burner93.no-ip.biz/api/v1';

    public function getRecipes()
    {
        return Http::get(self::API . '/recipes')->json();
    }

    public function getData() {
        return [
            'id' => 5,
        ];
    }

    public function signup(Request $request)
    {
        logger(Http::post(self::API . '/auth/register', $request->only([
            'username',
            'email',
            'firstName',
            'password'
        ])));
    }

    public function login(Request $request)
    {
        $hällo = "12";
        return Http::post(self::API . '/auth/login', $request->only([
            'username',
            'password'
        ]))->json();
    }
};
?>
