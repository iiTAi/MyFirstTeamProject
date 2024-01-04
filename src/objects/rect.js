/* 長方形クラス */
class RectClass extends ObjectClass {
    // コンストラクタ
    constructor(width_block, height_block) {
        super(width_block, height_block, true);
    }

    // 描画メソッド
    push() {
        fill(this.red, this.green, this.blue);
        if (this.red + this.green + this.blue >= 765) {
            stroke(bg.getRed(), bg.getGreen(), bg.getBlue());
        } else {
            stroke(255);
        }
        rect(this.x, this.y, this.width, this.height);
    }
}