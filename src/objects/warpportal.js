/* ワープポータル用長方形クラス */
class WarpPortal extends ObjectClass {
    // コンストラクタ
    constructor(position, warpX, warpY) {
        super(1, 0.25, true);
        this.position = position;  // ワープポータルが床と天井のどちらに設置されているかを判別する変数
        this.warpX = warpX;  // ワープ先のx座標
        this.warpY = warpY;  // ワープ先のy座標
        this.warpComp = false;  // ワープが完了すると立つフラグ
    }

    // 床に設置する場合はy座標に37.5を加算する
    init(x_block, y_block, red, green, blue) {
        super.init(x_block, y_block, red, green, blue);
        if (this.position == "floor") {
            this.y += 37.5;
        }
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

        arc(this.x + this.width / 2, this.y + this.height / 2, this.width * 7/8, this.height * 1.7, -PI/11, PI/12)
        arc(this.x + this.width / 2 - 4, this.y + this.height / 2, this.width * 3/4, this.height * 1.5, -PI/12, PI/13)
        arc(this.x + this.width / 2 - 8, this.y + this.height / 2, this.width * 5/8, this.height * 1.2, -PI/12, PI/14)

        arc(this.x + this.width / 2, this.y + this.height / 2, this.width * 7/8, this.height * 1.7, PI * 10/11, PI * 13/12)
        arc(this.x + this.width / 2 + 4, this.y + this.height / 2, this.width * 3/4, this.height * 1.5, PI * 11/12, PI * 14/13)
        arc(this.x + this.width / 2 + 8, this.y + this.height / 2, this.width * 5/8, this.height * 1.2, PI * 11/12, PI * 15/14)

        circle(this.x + this.width / 2, this.y + this.height / 2, 3);
    }

    // ワープが発生するかどうかを判定するメソッド
    // 当クラスの図形に自機が衝突するとワープする仕様
    checkClash(chr) {
        // 物体との衝突を判定
        let touch = 0;
        touch += (chr.getX() >= this.x - chr.getWidth()) ? 1 : 0;
        touch += (chr.getX() <= this.x + this.width) ? 1 : 0;
        touch += (chr.getY() >= this.y - chr.getHeight()) ? 1 : 0;
        touch += (chr.getY() <= this.y + this.height) ? 1 : 0;

        // 衝突した際の処理
        if (touch == 4 && !(this.warpComp) && chr.getDX() == 0) {
            chr.setX(50 * this.warpX + 10);
            chr.setY(50 * this.warpY + 15);
            this.warpComp = true;
        } else if (touch != 4) {
            this.warpComp = false;
        }
    }
}