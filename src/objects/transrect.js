/* 透過長方形クラス */
// 背景色と本体色が一致したときに通過可能となる物体
class TransRectClass extends ObjectClass {
    // コンストラクタ
    constructor(width_block, height_block) {
        super(width_block, height_block, false);
    }

    // 描画メソッド
    push() {
        fill(this.red, this.green, this.blue);
        if (this.red + this.green + this.blue >= 255) {
            stroke(0);
        } else {
            stroke(255);
        }
        rect(this.x, this.y, this.width, this.height);
        circle(this.x + this.width / 2, this.y + this.height / 2, 30);
    }

    // 当たり判定の設定
    // drawメソッドのclash関数の前で呼び出すこと
    setClash(bg) {
        // 白黒のみを考慮
        if (bg.getRed() == this.red && bg.getGreen() == this.green && bg.getBlue() == this.blue) {
            this.clashenable = false;
        } else {
            this.clashenable = true;
        }
    }
}