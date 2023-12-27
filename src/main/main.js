/*--- メインファイル ---*/

/* 変数の定義 */
let scene = "title";  // 場面を制御する変数
let stage = "1-1";  // 実行するステージを制御する変数
let nextstage = null;  // 次のステージを一時的に保持する変数
let state = "setup";  // 各ステージでの初期化とループを制御する変数
let gravity = "down";  // 重力の向きを制御する変数

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

    // リトライとポーズとクリアの処理
    // 全ステージで共通
    switch (state) {
        // リトライ
        case "retry": {
            // 1秒程度演出挟みたい
            background(128, 128, 128, 30);  // 仮の処理
            break;
        }
        // ポーズ
        case "pose": {
            background(128, 128, 128, 30);  // 仮の処理
            break;
        }
        // クリア
        case "clear": {
            background(128, 128, 128, 30);  // 仮の処理
            break;
        }

    }
}

/* キーが入力された瞬間のみ呼び出される関数 */
function keyPressed() {
    switch (key) {
        case 'w': { chr.jump(gravity); break; }
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
            // 強制ミス
            if (state == "draw") {
                state = "retry";
            // リトライ処理
            } else if (state == "retry") {
                state = "setup";
                gravity = "down";
            // ポーズ画面からリスタートする処理
            } else if (state == "pose") {
                state = "setup";
                gravity = "down";
            // クリア画面から次のステージへ遷移する処理
            } else if (state == "clear") {
                // ワールドの最終ステージの場合はsceneに適切な文字列を代入すること
                // 以下試験的実装
                stage = nextstage;
                state = "setup";
                gravity = "down";

            }
            break;
        }
        case 'q': {
            if (state == "draw") {
                state = "pose";
            // ポーズ解除
            } else if (state == "pose") {
                state = "draw";
            }
            break;
        }
    }
}

