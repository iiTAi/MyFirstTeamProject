/* 色変更長方形クラス */
class ColorChanger extends ObjectClass {
    // コンストラクタ
    constructor(width_block, height_block) {
        super(width_block, height_block, true);
        this.clashenable = false;
        this.changed = false;  // 色変更が完了すると立つフラグ
    }

    // 描画メソッド
    push() {
        fill(this.red, this.green, this.blue, 50);
        noStroke();
        rect(this.x, this.y, this.width, this.height);
    }

    // 色の変更が発生するかどうかを判定するメソッド
    // 当クラスの図形に自機が衝突すると色が変化する仕様
    checkClash(chr) {
        // 物体との衝突を判定
        let touch = 0;
        touch += (chr.getX() >= this.x - chr.getWidth()) ? 1 : 0;
        touch += (chr.getX() <= this.x + this.width) ? 1 : 0;
        touch += (chr.getY() >= this.y - chr.getHeight()) ? 1 : 0;
        touch += (chr.getY() <= this.y + this.height) ? 1 : 0;
        // 衝突した際の処理
        //this.changed = (touch == 4) ? true : false;
        if (touch == 4 && !(this.changed)) {
            if (bg.getRed() == 0) {
                colorChange(chr, obj, bg, 0, 0, 0);
                systemCChange(obj_retry, 0, 0, 0);
            } else {
                colorChange(chr, obj, bg, 255, 255, 255);
                systemCChange(obj_retry, 255, 255, 255);
            }
            this.changed = true;
        } else if (touch != 4) {
            this.changed = false;
        }
    }
}