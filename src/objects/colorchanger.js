/* 色変更長方形クラス */
class ColorChanger extends ObjectClass {
    // コンストラクタ
    constructor(width_block, height_block, mode) {
        super(width_block, height_block, false);
        this.clashenable = false;
        // mode: 色の変化を制御する変数
        // "red", "green", "blue"ならば対応する色を加算
        // "inv"ならば背景と物体の色を反転
        this.mode = mode
        this.changed = false;  // 色変更が完了すると立つフラグ
    }

    // 描画メソッド
    push() {
        fill(255);
        noStroke();
        rect(this.x, this.y, this.width, this.height);
        fill(this.red, this.green, this.blue, 50);
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

        // 衝突時の処理
        if (touch == 4 && !(this.changed)) {

            // 背景および物体が白色かどうか判定するための変数の定義
            let bgcolor = bg.getRed() + bg.getGreen() + bg.getBlue();
            let chrcolor = chr.getRed() + chr.getGreen() + chr.getBlue();

            // modeが"inv"であるとき
            if (this.mode == "inv") {
                // 変更前の背景色の保持
                let bgr = bg.getRed();
                let bgg = bg.getGreen();
                let bgb = bg.getBlue();
                // 背景色の変更
                bg.setRGB(chr.getRed(), chr.getGreen(), chr.getBlue());
                // 物体色の変更
                for (let i = 0; i < obj.length; i++) {
                    if (obj[i].getCchange()) { obj[i].setRGB(bgr, bgg, bgb); }
                }
                // 自機の色の変更
                chr.setRGB(bgr, bgg, bgb);

            // 背景が白でないかつ物体が白であるとき
            } else if (bgcolor != 765 && chrcolor == 765) {
                let newr = bg.getRed();
                let newg = bg.getGreen();
                let newb = bg.getBlue();
                // modeで指定した色を変更
                switch (this.mode) {
                    case "red"  : { newr = (bg.getRed() == 0) ? 255 : 0; break; }
                    case "green": { newg = (bg.getGreen() == 0) ? 255 : 0; break; }
                    case "blue" : { newb = (bg.getBlue() == 0) ? 255 : 0; break; }
                }
                bg.setRGB(newr, newg, newb);

            // 背景が白かつ物体が白でないとき
            } else if (bgcolor == 765 && chrcolor != 765) {
                // 自機以外の物体の色変更
                for (let i = 0; i < obj.length; i++) {
                    // この辺りの処理は不必要である可能性有
                    let newr = obj[i].getRed();
                    let newg = obj[i].getGreen();
                    let newb = obj[i].getBlue();
                    switch (this.mode) {
                        case "red"  : { newr = (obj[i].getRed() == 0) ? 255 : 0; break; }
                        case "green": { newg = (obj[i].getGreen() == 0) ? 255 : 0; break; }
                        case "blue" : { newb = (obj[i].getBlue() == 0) ? 255 : 0; break; }
                    }
                    if (obj[i].getCchange()) { obj[i].setRGB(newr, newg, newb); }
                }
                // 自機の色変更
                let newr = chr.getRed();
                let newg = chr.getGreen();
                let newb = chr.getBlue();
                switch (this.mode) {
                    case "red"  : { newr = (chr.getRed() == 0) ? 255 : 0; break; }
                    case "green": { newg = (chr.getGreen() == 0) ? 255 : 0; break; }
                    case "blue" : { newb = (chr.getBlue() == 0) ? 255 : 0; break; }
                }
                chr.setRGB(newr, newg, newb);
            }
            // 変数の値の更新
            bgcolor = bg.getRed() + bg.getGreen() + bg.getBlue();
            chrcolor = chr.getRed() + chr.getGreen() + chr.getBlue();
            if (bgcolor == 765 && chrcolor == 765) {
                bg.setRGB(0, 0, 0);
            }
            this.changed = true;
        } else if (touch != 4) {
            this.changed = false;
        }
    }
}