/* 重力反転ボタン用長方形クラス */
class GravityButton extends ObjectClass {
    // コンストラクタ
    constructor(position) {
        super(1, 0.25, true);
        this.position = position;  // 重力反転ボタンが床と天井のどちらに設置されているかを判別する変数
        this.gravChanged = false;  // 重力反転が完了すると立つフラグ
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

        line(this.x + this.width / 3, this.y, this.x + this.width / 3, this.y + this.height);
        line(this.x + this.width / 3, this.y + this.height, this.x + this.width / 3 - 6, this.y + this.height - 5);
        line(this.x + this.width / 3, this.y + this.height, this.x + this.width / 3 + 6, this.y + this.height - 5);

        line(this.x + this.width * 2 / 3, this.y, this.x + this.width * 2 / 3, this.y + this.height);
        line(this.x + this.width * 2 / 3, this.y, this.x + this.width * 2 / 3 - 6, this.y + 5);
        line(this.x + this.width * 2 / 3, this.y, this.x + this.width * 2 / 3 + 6, this.y + 5);
    }

    // 重力反転が発生するかどうかを判定するメソッド
    // 当クラスの図形に自機が衝突すると重力が反転する仕様
    checkClash(chr) {
        // 物体との衝突を判定
        let touch = 0;
        touch += (chr.getX() >= this.x - chr.getWidth()) ? 1 : 0;
        touch += (chr.getX() <= this.x + this.width) ? 1 : 0;
        touch += (chr.getY() >= this.y - chr.getHeight()) ? 1 : 0;
        touch += (chr.getY() <= this.y + this.height) ? 1 : 0;
        // 衝突した際の処理
        //this.changed = (touch == 4) ? true : false;
        if (touch == 4 && !(this.gravChanged)) {
            gravity = (gravity == "down") ? "up" : "down";  // 重力の向き(ジャンプの向き)を反転
            chr.setDDY(-chr.getDDY());  // 自機の重力加速度を反転
            this.gravChanged = true;
        } else if (touch != 4) {
            this.gravChanged = false;
        }
    }
}