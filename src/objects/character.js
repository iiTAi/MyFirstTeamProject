/* 自機クラス */
class CharaClass {
    // コンストラクタ
    constructor() {
        // 本体色
        this.red = 0;
        this.green = 0;
        this.blue = 0;

        // 色が変化するかどうか
        // true: する/false: しない
        this.cchange = true;
        
        // 座標と速度と加速度
        this.x = 0;
        this.dx = 0;
        this.ddx = 0;  // 抵抗
        this.y = 0;
        this.dy = 0;
        this.ddy = 1;  // 自由落下

        // 描画する幅と高さ
        // 50px * 50pxを1ブロックとして扱う
        this.width_block = 1;
        this.height_block = 1;
        this.width = 50 * this.width_block;
        this.height = 50 * this.height_block;

        this.facebuf = 0;  // 直前のループにおける顔の向きを保持する変数
        this.keybuf = null;  // 直前のループにおけるkeyを保持する変数
        this.jumpenable = true;  // ジャンプ可能な状態か判別する変数
    }

    // 初期化メソッド
    // 物体を設置する初期位置を決める
    // ブロック単位で引数を与える
    // ブロック単位の引数を適切なxy座標へ変換し代入
    init(x_block, y_block, red, green, blue) {
        this.x = x_block * 50 + 10;
        this.y = y_block * 50 + 15;
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    // 描画メソッド
    // 事前に定められた座標へ描画する
    push() {
        // 摩擦および水平方向の空気抵抗の設定
        if (this.dx >= 0.5) {
            this.ddx = -0.5;
        } else if (this.dx <= -0.5) {
            this.ddx = 0.5;
        } else {
            this.ddx = 0;
        }
        // 座標の移動
        this.dx += this.ddx;
        this.x += this.dx;
        this.dy += this.ddy;
        this.dy = (this.dy > 25) ? 25 : this.dy;
        this.y += this.dy;

        // 本体色と縁の色の設定
        // 縁の色は現状白黒のみに対応(要修正)
        fill(this.red, this.green, this.blue);
        if (this.red + this.green + this.blue >= 255) {
            stroke(0);
        } else {
            stroke(255);
        }
        // 描画
        rect(this.x, this.y, this.width, this.height);
        if (this.dx > 0 || this.dx == 0 && this.facebuf == 0) {
            if (gravity == 'down') {
                line(this.x + 24, this.y + 10, this.x + 24, this.y + 30);
                line(this.x + 36, this.y + 10, this.x + 36, this.y + 30);
            } else if (gravity == 'up') {
                line(this.x + 24, this.y + 20, this.x + 24, this.y + 40);
                line(this.x + 36, this.y + 20, this.x + 36, this.y + 40);
            }
            this.facebuf = 0;
        } else if (this.dx < 0 || this.dx == 0 && this.facebuf == 1) {
            if (gravity == 'down') {
                line(this.x + 13, this.y + 10, this.x + 13, this.y + 30);
                line(this.x + 25, this.y + 10, this.x + 25, this.y + 30);
            } else if (gravity == 'up') {
                line(this.x + 13, this.y + 20, this.x + 13, this.y + 40);
                line(this.x + 25, this.y + 20, this.x + 25, this.y + 40);
            }
            this.facebuf = 1;
        }
    }

    // ジャンプメソッド
    // KeyPressed関数内で呼び出される
    jump(gravity) {
        // 重力が下向きの場合
        if (this.jumpenable && gravity == 'down') {
            this.dy = -20;
            this.y -= 1;  // オブジェクトとの衝突判定を無効にする
            this.jumpenable = false;
        }
        // 重力が上向きの場合
        if (this.jumpenable && gravity == 'up') {
            this.dy = 20;
            this.y += 1;
            this.jumpenable = false;
        }
    }

    // 左移動メソッド
    //moveメソッドで呼び出される
    moveLeft() {
        if (this.dx > -8) {
            this.dx -= 1;  // 加速
        } else {
            this.dx = -8;  // 等速
        }
    }
    // 右移動メソッド
    moveRight() {
        if (this.dx < 8) {
            this.dx += 1;
        } else {
            this.dx = 8;
        }
    }
    // 移動メソッド
    // ループする度呼び出される
    move() {
        // キー入力がない場合はkeybufをnullに
        if (keyIsPressed === false) {
            this.keybuf = null;
        } else {
            // 左右移動しながらジャンプした際のkeyの修正
            if (key == 'w') {
                if (this.keybuf == 'a') {
                    key = 'a';
                } else if (this.keybuf == 'd') {
                    key = 'd';
                }
            }
            // 左右移動
            if (key == 'a') {
                this.moveLeft();
                this.keybuf = 'a';  // keybufの更新
            } else if (key == 'd') {
                this.moveRight();
                this.keybuf = 'd';
            }
        }
    }

    // 落下判定と水平方向の衝突判定メソッド
    // ループの度呼び出される
    checkOffScreen() {
        // 水平方向の衝突判定
        if (this.x < 9) {
            this.dx = 0;
            this.x = 9;
        } else if (this.x > 1859) {
            this.dx = 0;
            this.x = 1859;
        }

        // 落下判定
        // 自機が画面外へ出た瞬間にミスとする
        if (this.y < -49 || this.y > 1079) {
            state = "retry";
        }
    }

    // 各種アクセッサ
    getX() { return this.x; }
    setX(x) { this.x = x; }

    getY() { return this.y; }
    setY(y) { this.y = y; }

    getDX() { return this.dx; }
    setDX(dx) { this.dx = dx; }

    getDY() { return this.dy; }
    setDY(dy) { this.dy = dy; }

    getDDX() { return this.ddx; }
    setDDX(ddx) { this.ddx = ddx; }

    getDDY() { return this.ddy; }
    setDDY(ddy) { this.ddy = ddy; }

    getWidth() { return this.width; }

    getHeight() { return this.height; }

    getJumpenable() { return this.jumpenable; }
    setJumpenable(jumpenable) { this.jumpenable = jumpenable; }

    getRed() { return this.red; }
    getGreen() { return this.green; }
    getBlue() { return this.blue; }
    setRGB(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
}