/* 一方通行壁の長方形クラス */
// 一方から一方へしか進めない
class OneWayWall extends ObjectClass {
    // コンストラクタ
    constructor(width_block, height_block, direction) {
        super(width_block, height_block, true);
        this.direction = direction;
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
        if (this.red + this.green + this.blue != 765) {
            fill(0, 0, 0, 60);
            rect(this.x, this.y, this.width, this.height);
        }
    }

    // 当たり判定の設定
    // drawメソッドのclash関数の前で呼び出すこと
    setClash(chr) {
        // 物体との衝突を判定
        let touch = 0;
        touch += chr.getX() >= this.x - chr.getWidth() ? 1 : 0;
        touch += chr.getX() <= this.x + this.width ? 1 : 0;
        touch += chr.getY() >= this.y - chr.getHeight() ? 1 : 0;
        touch += chr.getY() <= this.y + this.height ? 1 : 0;
        // 衝突時の処理
        if (touch == 4) {
            // 矢印と反対向きへ進めないようにする処理
            if (this.direction == "right" && chr.getDX() < 0) {
                chr.setDX(0);
                chr.setX(chr.getX() + 1);
            } else if (this.direction == "right" && chr.getDX() < 0) {
                chr.setDX(0);
                chr.setX(chr.getX() - 1);

            }
        }
        
    }
}