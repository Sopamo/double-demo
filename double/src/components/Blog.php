<?php

return new class {
    public function getBlogEntries() {
        return [
            1 => [
                'id' => 5,
            ],
            3 => [
                'id' => 6,
            ],
        ];
    }

    public function storeBlogEntry(\Illuminate\Http\Request $request) {
        return response()->json([
            'id' => 3,
            $request->input('title'),
        ]);
    }
};
