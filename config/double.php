<?php

return [
    // The prefix that's used for all `double` API routes
    // You can override this in case you already have routes starting with `api/double`
    'api_prefix' => 'api/double',

    // The root of your vuejs frontend. Files in this folder have to be executable by php
    // By default this should be a folder called `double` next to your Laravel's `src` folder
    'frontend_root' => base_path('double'), // <- Configuration for webpack
    // 'frontend_root' => base_path('vite-project'), // <- Configuration for vite
];
