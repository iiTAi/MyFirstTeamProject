/* ゴールラインクラス */
class ClearLine extends ObjectClass {
    // コンストラクタ
    constructor(width_block, height_block, moveUniID, startID) {
        super(width_block, height_block, true);
        this.clashenable = false;
        this.moveUniID = moveUniID; // 固有ID
        this.startID = startID; // 移動先でのスタート地点のID
        this.movable = false; // 移動可能かどうか
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
        if (touch == 4 && this.movable) {
            flag[1] = this.startID;
            return true;
        } else if (touch == 4 && !(this.movable)) {
            return false;
        } else {
            this.movable = true;
            return false;
        }
    }

    checkBack(chr) {
        // 物体との衝突を判定
        let touch = 0;
        touch += (chr.getX() >= this.x - chr.getWidth()) ? 1 : 0;
        touch += (chr.getX() <= this.x + this.width) ? 1 : 0;
        touch += (chr.getY() >= this.y - chr.getHeight()) ? 1 : 0;
        touch += (chr.getY() <= this.y + this.height) ? 1 : 0;
        // 衝突した際の処理
        if (touch == 4 && this.movable) {
            flag[1] = this.startID;
            return true;
        } else if (touch == 4 && !(this.movable)) {
            return false;
        } else {
            this.movable = true;
            return false;
        }
    }
}