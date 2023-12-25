/* ゴールラインクラス */
class ClearLine extends ObjectClass {
    // コンストラクタ
    constructor(width_block, height_block) {
        super(width_block, height_block, true);
        this.clashenable = false;
    }

    // 描画メソッド
    push() {
        fill(this.red, this.green, this.blue, 90);
        noStroke();
        rect(this.x, this.y, this.width, this.height);
    }

    // ゴールに到達したかどうかを判別するメソッド
    // trueかfalseを返却する
    checkClear(chr) {
        // 物体との衝突を判定
        let touch = 0;
        touch += (chr.getX() >= this.x - chr.getWidth()) ? 1 : 0;
        touch += (chr.getX() <= this.x + this.width) ? 1 : 0;
        touch += (chr.getY() >= this.y - chr.getHeight()) ? 1 : 0;
        touch += (chr.getY() <= this.y + this.height) ? 1 : 0;
        // 衝突した際の処理
        if (touch == 4) {
            return true;
        } else {
            return false;
        }
    }
}