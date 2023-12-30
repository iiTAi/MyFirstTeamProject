/*--- メソッド ---*/

/* 自機以外の物体の一括描画メソッド */
function pushes(obj) {
    for (let i = 0; i < obj.length; i++) {
        obj[i].push();
    }
}

/* 衝突判定メソッド */
// 自機と物体の配列を引数とする
// 衝突方向の速度を0とし、自機を物体の端から僅かにずれた座標へ動かす
// 連続ジャンプを防止する機能を含める
function clash(chr, obj) {
    for (let i = 0; i < obj.length; i++) {
        // 物体との衝突を判定
        let touch = 0;
        touch += (chr.getX() >= obj[i].getX() - chr.getWidth()) ? 1 : 0;
        touch += (chr.getX() <= obj[i].getX() + obj[i].getWidth()) ? 1 : 0;
        touch += (chr.getY() >= obj[i].getY() - chr.getHeight()) ? 1 : 0;
        touch += (chr.getY() <= obj[i].getY() + obj[i].getHeight()) ? 1 : 0;
        // 衝突した方向別の自機に対する処理
        // 重力が下向きの場合
        if (touch == 4 && obj[i].getClashenable() && gravity == 'down') {
            if (chr.getY() + 50 - 25 < obj[i].getY()) {
                chr.setDY(0);
                chr.setY(obj[i].getY() - chr.getHeight() - 1);
                chr.setJumpenable(true);
            } else if (chr.getY() + 25 > obj[i].getY() + obj[i].getHeight()) {
                chr.setDY(0);
                chr.setY(obj[i].getY() + obj[i].getHeight() + 1);
            } else if (chr.getX() + 50 -25 < obj[i].getX()) {
                chr.setDX(0);
                chr.setX(obj[i].getX() - chr.getWidth() - 1);
            } else if (chr.getX() + 25 > obj[i].getX() + obj[i].getWidth()) {
                chr.setDX(0);
                chr.setX(obj[i].getX() + obj[i].getWidth() + 1);
            }
        }
        // 重力が上向きの場合
        if (touch == 4 && obj[i].getClashenable() && gravity == 'up') {
            if (chr.getY() + 50 - 25 < obj[i].getY()) {
                chr.setDY(0);
                chr.setY(obj[i].getY() - chr.getHeight() - 1);
            } else if (chr.getY() + 25 > obj[i].getY() + obj[i].getHeight()) {
                chr.setDY(0);
                chr.setY(obj[i].getY() + obj[i].getHeight() + 1);
                chr.setJumpenable(true);
            } else if (chr.getX() + 50 -25 < obj[i].getX()) {
                chr.setDX(0);
                chr.setX(obj[i].getX() - chr.getWidth() - 1);
            } else if (chr.getX() + 25 > obj[i].getX() + obj[i].getWidth()) {
                chr.setDX(0);
                chr.setX(obj[i].getX() + obj[i].getWidth() + 1);
            }
        }
    }
}

/* 色変化メソッド */
// 引数のRGB値を自機と物体に適用し、かつ背景と縁の色をもうひとつの色へ変更する
// cchangeがtrueである物体のみ色を変更する
function colorChange(chr, obj, bg, red, green, blue) {
    chr.setRGB(red, green, blue);
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].getCchange()) {
            obj[i].setRGB(red, green, blue);
        }
    }
    if (red + green + blue >= 255) {
        bg.setRGB(0, 0, 0);
    } else {
        bg.setRGB(255, 255, 255);
    }
}
// 低い階層にある物体の色を変更するメソッド
function systemCChange(obj_retry, red, green, blue) {
    for (let i = 0; i < obj_retry.length; i++) {
        if (obj_retry[i].getCchange()) {
            obj_retry[i].setRGB(red, green, blue);
        }
    }
}
