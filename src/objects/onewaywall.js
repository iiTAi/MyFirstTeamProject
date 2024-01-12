/* 一方通行壁の長方形クラス */
// 一方から一方へしか進めない
class OneWayWall extends ObjectClass {
    // コンストラクタ
    constructor(width_block, height_block, direction) {
        super(width_block, height_block, true);
        this.direction = direction;
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

        for (let i = 0; i < this.height / 50; i++) {
            line(this.x + this.width / 4, this.y + 25 + i * 50, this.x + this.width * 3 / 4, this.y + 25 + i * 50);
            if (this.direction == "right") {
                line(this.x + this.width * 3 / 4, this.y + 25 + i * 50, this.x + this.width * 3 / 4 - 10, this.y + 25 + i * 50 - 10);
                line(this.x + this.width * 3 / 4, this.y + 25 + i * 50, this.x + this.width * 3 / 4 - 10, this.y + 25 + i * 50 + 10);
            }
            else if (this.direction == "left") {
                line(this.x + this.width / 4, this.y + 25 + i * 50, this.x + this.width / 4 + 10, this.y + 25 + i * 50 - 10);
                line(this.x + this.width / 4, this.y + 25 + i * 50, this.x + this.width / 4 + 10, this.y + 25 + i * 50 + 10);
            }
        }
    }

    // 当たり判定の設定
    // drawメソッドのclash関数の前で呼び出すこと
    setClash(chr) {
        if (chr.getY() + chr.getHeight() <= this.y + 20 || chr.getY() >= this.y + this.height - 20) {
            this.clashenable = true;
        }
        else if (this.direction == "right") {
            this.clashenable = (chr.getX() >= this.x + this.width - 10) ? true : false;
        }
        else if (this.direction == "left") {
            this.clashenable = (chr.getX() + chr.width <= this.x + 10) ? true : false;
        }
    }
}