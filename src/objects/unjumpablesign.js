/* ジャンプ禁止看板クラス */
class UnjumpableSign extends ObjectClass {
    // コンストラクタ
    constructor() {
        super(1, 1, true);
        this.clashenable = false;
    }

    // 描画メソッド
    push() {

        fill(this.red, this.green, this.blue);
        if (this.red + this.green + this.blue >= 765) {
            stroke(bg.getRed(), bg.getGreen(), bg.getBlue());
        } else {
            stroke(255);
        }
        rect(this.x + 45, this.y + 25, 10, 25);
        rect(this.x, this.y - 50, 100, 75);
        circle(this.x + 50, this.y - 12.5, 65);
        circle(this.x + 50, this.y - 12.5, 50);

        line(this.x + 64, this.y - 32.5, this.x + 30, this.y + 1.5);
        line(this.x + 70, this.y - 26.5, this.x + 36, this.y + 7.5);

        fill(bg.getRed(), bg.getGreen(), bg.getBlue());
        noStroke();
        textSize(26);
        text("JUMP", this.x + 19, this.y - 2);

        if (this.red + this.green + this.blue != 765) {
            fill(0, 0, 0, 60);
            rect(this.x, this.y, this.width, this.height);
        }
    }
}