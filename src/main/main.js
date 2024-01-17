/*--- メインファイル ---*/

/* 変数の定義 */
let scene = "title"; // 場面を制御する変数
let stage = "1-1"; // 実行するステージを制御する変数
let nextstage = null; // 次のステージを一時的に保持する変数
let state = "setup"; // 各ステージでの初期化とループを制御する変数
let gravity = "down"; // 重力の向きを制御する変数
let isImgLoad = false;
let world = "1"

/* 各種フラグ */
// 必要な時に必要な数だけ使うこと
let flag = [
    false,
    -1   // ステージを移動するときにキャラクターのスタート地点を決めるための変数, -1のときはそのステージの初期地点
]

/* インスタンスの生成 */
var chr = new CharaClass();
var bg = new BackGroundClass();
var obj = [];
var obj_text = [
  new TextClass("MISS", 300, false),
  new TextClass("RETRY: PRESS R", 100, false),
  new TextClass("PAUSE", 100, false),
  new TextClass("CLEAR", 300, false),
  new TextClass("NEXT:  PRESS R", 100, false),
  new TextClass("RIDDLE JOURNEY", 200, false),
  new TextClass("START: PRESS ANY", 100, false),
  new TextClass("DRAW COMMENT  :M", 50, false),
  new TextClass("SWITCH COMMENT:L", 50, false),
  new TextClass("RESTART:R", 50, false),
  new TextClass("WORLD: " + world, 50, false),
  new TextClass("STAGE: " + stage, 50, false),
  new TextClass("THANK YOU FOR PLAYING!", 100, false),
];

/* 事前読み込み */
function preload() {
  myfont = loadFont("../../font/DeterminationJP.ttf");
  sound = loadSound("../../sound/128_BPM124.mp3")
}

/* セットアップ */
function setup() {
  
  sound.loop();
  createCanvas(1920, 1080);
  frameRate(60);
  textFont(myfont);
  obj_text[0].init(12, 7, 255, 255, 255);
  obj_text[1].init(11, 13, 255, 255, 255);
  obj_text[2].init(1, 1, 255, 255, 255);
  obj_text[3].init(10, 7, 255, 255, 255);
  obj_text[4].init(11, 13, 255, 255, 255);
  obj_text[5].init(2, 7, 255, 255, 255);
  obj_text[6].init(10, 13, 255, 255, 255);
  obj_text[7].init(2, 4, 255, 255, 255);
  obj_text[8].init(2, 5, 255, 255, 255);
  obj_text[9].init(2, 6, 255, 255, 255);
  obj_text[12].init(6, 13, 255, 255, 255);
  
}

/* ループ */
function draw() {
  // 場面の分岐
  switch (scene) {
    case "title": {
      background(0);
      obj_text[5].push();
      obj_text[6].push();
      break;
    }
    case "option": {
      break;
    }
    case "prologue": {
      break;
    }
    case "world0": {
      world0(); // デバッグ用ワールド
      break;
    }
    case "world1": {
      // stage = "3-2"  // 任意のコースのみをテストしたいときに実行
      world1();
      break;
    }
    case "world2": {
      world2();
      break;
    }
    case "world3": {
      world3();
      break;
    }
    case "world4": {
      world4();
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
      if (!flag[0]) {
        fill(128, 128, 128, 90);
        noStroke();
        rect(0, 0, 1920, 1080);
        obj_text[0].push();
        obj_text[1].push();
        flag[0] = true;
      }
      break;
    }
    // ポーズ 
    case "pose": {
      if (!flag[0]) {
        fill(128, 128, 128, 90);
        noStroke();
        rect(0, 0, 1920, 1080);
        obj_text[10] = new TextClass("WORLD: " + world, 75, false);
        obj_text[11] = new TextClass("STAGE: " + stage, 75, false);
        obj_text[10].init(28, 1, 255, 255, 255)
        obj_text[11].init(28, 2.5, 255, 255, 255)
        obj_text[2].push();
        obj_text[7].push();
        obj_text[8].push();
        obj_text[9].push();
        obj_text[10].push();
        obj_text[11].push();
        flag[0] = true;
      }
      break;
    }
    // クリア
    case "clear": {
      if (!flag[0]) {
        fill(128, 128, 128, 90);
        noStroke();
        rect(0, 0, 1920, 1080);
        if (!(scene == "world4" && stage == "4-1")) {
          obj_text[3].push();
          obj_text[4].push();
        } else {
          obj_text[3].push();
          obj_text[12].push();
        }
        flag[0] = true;
      }
      break;
    }
  }
}

/* キーが入力された瞬間のみ呼び出される関数 */
function keyPressed() {
  if (scene == "title") {
    scene = "world1";
  }
  switch (key) {
    case "w": {
      chr.jump(gravity);
      break;
    }
    // デバッグ用
    /*case "c": {
      if (bg.getRed() == 0) {
        colorChange(chr, obj, bg, 0, 0, 0);
        systemCChange(obj_text, 0, 0, 0);
      } else {
        colorChange(chr, obj, bg, 255, 255, 255);
        systemCChange(obj_text, 255, 255, 255);
      }
      break;
    }*/
    case "r": {
      // 強制ミス
      if (state == "draw") {
        state = "retry";
        // リトライ処理
      } else if (state == "retry") {
        state = "setup";
        gravity = "down";
        flag[0] = false;
        flag[1] = -1;
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
        flag[0] = false;
        flag[1] = -1;
      }
      break;
    }
    case "q": {
      if (state == "draw") {
        state = "pose";
        // ポーズ解除
      } else if (state == "pose") {
        state = "draw";
        flag[0] = false;
      }
      break;
    }
    case "m": {
      if (flag[0]) {
        document.getElementById("canv-back").classList.remove("none");
      }
      break;
    }
    case "l": {
      if (flag[0]) {
        document.getElementById("img-holder").classList.toggle("none");
      }
    }
  }
}
