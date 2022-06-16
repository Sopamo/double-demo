<?php

use Illuminate\Http\Request;

return new class {
    public function getUsers(Request $request) {
        $users = [
            [
                'id' => 1,
                'name' => 'John Travolta'
            ],
            [
                'id' => 2,
                'name' => 'Uma Thurman'
            ],
        ];
        $query = strtolower($request->input('query', ''));
        return array_filter($users, function($user) use ($query) {
            return str_contains(strtolower($user['name']), $query);
        });
    }

    public function addUser(Request $request) {
        // This doesn't really persist anything, it's just for demonstration
        sleep(1);
        return response()->json([
            'id' => 3,
            $request->input('name'),
        ]);
    }
};
