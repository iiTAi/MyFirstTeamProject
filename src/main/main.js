/*--- メインファイル ---*/

/* 変数の定義 */
let scene = "title";  // 場面を制御する変数
let stage = "1-1";  // 実行するステージを制御する変数
let nextstage = null;  // 次のステージを一時的に保持する変数
let state = "setup";  // 各ステージでの初期化とループを制御する変数

/* インスタンスの生成 */
var chr = new CharaClass();
var bg = new BackGroundClass();
var obj = [];

/* セットアップ */
function setup() {
    createCanvas(1920, 1080);
    frameRate(60);
}

/* ループ */
function draw() {
    // 場面の分岐
    switch (scene) {
        case "title": {
            scene = "world0";
            break;
        }
        case "option": {
            break;
        }
        case "prologue": {
            break;
        }
        case "world0": {
            world0();  // デバッグ用ワールド
            break;
        }
        case "world1": {
            break;
        }
        case "world2": {
            break;
        }
        case "world3": {
            break;
        }
        case "world4": {
            break;
        }
        case "epilogue": {
            break;
        }

    }
}

/* キーが入力された瞬間のみ呼び出される関数 */
function keyPressed() {
    switch (key) {
        case 'w': { chr.jump(); break; }
        // デバッグ用
        case 'c': {
            if (bg.getRed() == 0) {
                colorChange(chr, obj, bg, 0, 0, 0);
            } else {
                colorChange(chr, obj, bg, 255, 255, 255);
            }
            break;
        }
        case 'r': {
            // リトライ機能の試験的実装
            if (state == "draw") {
                state = "retry";
            } else if (state == "retry") {
                state = "setup";
            } else if (state == "clear") {
                // ワールドの最終ステージの場合はsceneに適切な文字列を代入すること
                // 以下試験的実装
                stage = nextstage;
                state = "setup";

            }
            break;
        }
    }
}

