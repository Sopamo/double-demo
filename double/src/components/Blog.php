<?php

return new class {
    public function getBlogEntries() {
        return [
            [
                'id' => 5,
                'title' => 'Why Pulp Fiction is such a good movie.'
            ],
            [
                'id' => 6,
                'title' => 'Should Shawshank Redemption really be the #1 IMDb movie?'
            ],
        ];
    }

    public function storeBlogEntry(\Illuminate\Http\Request $request) {
        // This doesn't really persist anything, it's just for demonstration
        return response()->json([
            'id' => 3,
            $request->input('title'),
        ]);
    }
};
