/* テキスト描画簡略化クラス */
class TextClass extends ObjectClass {
    // コンストラクタ
    // str: 出力したい文字列
    // size: 文字列の大きさ
    // stroke: 枠の有無(true: 有/false: 無)
    constructor(str, size, stroke) {
        super(1, 1, true);
        this.str = str;
        this.size = size;
        this.stroke = stroke;
    }

    // 描画メソッド
    push() {
        textSize(this.size);
        fill(this.red, this.green, this.blue);
        if (this.stroke) {
            stroke(0, 0, 0);  // 要修正
        } else {
            noStroke();
        }
        text(this.str, this.x, this.y + this.size);
        if (this.red + this.green + this.blue != 765) {
            fill(0, 0, 0, 60);
            text(this.str, this.x, this.y + this.size);
        }
    }
}