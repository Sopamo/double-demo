<?php

return new class {
    public function getUsers() {
        return [
            [
                'id' => 1,
                'name' => 'John Travolta'
            ],
            [
                'id' => 2,
                'name' => 'Uma Thurman'
            ],
        ];
    }

    public function addUser(\Illuminate\Http\Request $request) {
        // This doesn't really persist anything, it's just for demonstration
        sleep(1);
        return response()->json([
            'id' => 3,
            $request->input('name'),
        ]);
    }
};
