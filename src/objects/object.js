/* 各種ギミック等の親クラス */
// ギミックのクラスを新規生成する際は当クラスを継承すること
class ObjectClass {
    // コンストラクタ
    // 物体の幅と高さを引数とする
    constructor (width_block, height_block, cchange) {
        // 本体色
        this.red = 0;
        this.green = 0;
        this.blue = 0;
        
        // 座標
        this.x = 0;
        this.y = 0;

        // 幅と高さ
        this.width = 50 * width_block;
        this.height = 50 * height_block;

        // 色が変化するかどうか
        // true: する/false: しない
        this.cchange = cchange;

        // 当たり判定の有無
        this.clashenable = true;

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

    // 各種アクセッサ
    getX() { return this.x; }
    getY() { return this.y; }

    getWidth() { return this.width; }
    getHeight() { return this.height; }

    getCchange() { return this.cchange; }

    getClashenable() { return this.clashenable; }

    setRGB(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
}