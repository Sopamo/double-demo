<?php

return new class {
    public function getBlogEntries() {
        return [
            [
                'id' => 5,
                'title' => 'Why Pulp Fiction is such a good movie.',
                'now' => time(),
            ],
            [
                'id' => 6,
                'title' => 'Should Shawshank Redemption really be the #1 IMDb movie?',
                'now' => time(),
            ],
        ];
    }

    public function sendMessage(\Illuminate\Http\Request $request) {
        usleep(500 * 1000);
        return response()->json([
            'content' => 'Your message was: ' . $request->input('message'),
        ]);
    }
};
