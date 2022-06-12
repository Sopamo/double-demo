<?php

return new class {
    public function getBlogEntries() {
        return [
            1 => [
                'id' => 5,
            ],
            4 => [
                'id' => time(),
            ],
        ];
    }

    public function storeBlogEntry(\Illuminate\Http\Request $request) {
        sleep(1);
        return response()->json([
            'id' => 3,
            $request->input('title'),
        ]);
    }
};
