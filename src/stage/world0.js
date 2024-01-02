/*--- world0(test world) ---*/
function world0() {
    // 複数の画面でひとつのステージを構成するのならばビット演算子orを用いて端数処理する

    switch (stage) {
        case "1-1": {  // ワールド0のステージ1の1つ目の画面
            if (state == "setup") {
                // インスタンスの更新
                chr = new CharaClass();
                bg = new BackGroundClass();
                obj = [
                    new RectClass(38, 3),
                    new RectClass(3, 3),
                    new RectClass(10, 1),
                    new RectClass(1, 10),
                    new TransRectClass(1, 5),
                    new ColorChanger(1, 3, "inv"),
                    new ClearLine(1, 3),
                    new GravityButton("floor"),
                    new GravityButton("ceiling"),
                    new OneWayWall(1, 3, "right"),
                    new WarpPortal("floor", 1, 17),
                ];

                // 初期化
                bg.setRGB(0, 0, 0);
                chr.init(1, 1, 255, 255, 255);
                obj[0].init(0, 18, 255, 255, 255);
                obj[1].init(5, 0, 255, 255, 255);
                obj[2].init(10, 16, 255, 255, 255);
                obj[3].init(13, 13, 0, 0, 0);  // 長方形を背景と同色で設置した場合のテスト
                obj[4].init(25, 13, 255, 255, 255);
                obj[5].init(19, 13, 0, 0, 0);
                obj[6].init(37, 15, 255, 255, 255);
                obj[7].init(5, 17, 255, 255, 255);
                obj[8].init(7, 3, 255, 255, 255);
                obj[9].init(32, 15, 255, 255, 255);
                obj[10].init(35, 17, 255, 255, 255);

                state = "draw";

            } else if (state == "draw") {
                bg.push();
                obj[4].setClash(bg);  // TransRectの衝突判定の有無の設定
                obj[9].setClash(chr);  // OneWayWallの衝突判定の有無の設定
                obj[5].checkClash(chr);  // ColorChangerの色変更が動作するか判別
                obj[7].checkClash(chr);  // GravityButtonの重力反転が動作するか判別
                obj[8].checkClash(chr);  // GravityButtonの重力反転が動作するか判別
                obj[10].checkClash(chr);  // WarpPortalのワープが動作するか判別
                clash(chr, obj);  // 衝突判定処理
                chr.checkOffScreen();  // 落下判定と水平方向への衝突処理

                chr.move();  // 自機の左右移動
                chr.push();  // 自機の描画
                pushes(obj);  // obj配列の要素の描画
                // ゴール判定
                if (obj[6].checkClear(chr)) {
                    stage = "1-2";
                    state = "setup";
                }
            // ミス時の処理
            }
            break;
        }
        case "1-2": {
            if (state == "setup") {
                // インスタンスの更新
                obj = [
                    new RectClass(38, 3),
                    new RectClass(1, 2),
                    new TransRectClass(1, 2),
                    new TransRectClass(1, 2),
                    new RectClass(1, 2),
                    new TransRectClass(1, 8),
                    new TransRectClass(18, 1),
                    new ColorChanger(1, 16, "red"),
                    new ColorChanger(1, 16, "green"),
                    new ColorChanger(1, 16, "blue"),
                    new ClearLine(1, 3),
                    new OneWayWall(1, 3, "right"),
                    new OneWayWall(1, 3, "left"),
                    new ColorChanger(1, 2, "inv")

                ];

                // 初期化
                bg.setRGB(255, 255, 255);
                chr.init(0, 17, 0, 0, 0);
                obj[0].init(0, 18, 0, 0, 0);
                obj[1].init(5, 15, 0, 0, 0);
                obj[2].init(9, 13, 255, 0, 0);
                obj[3].init(12, 13, 255, 255, 255);
                obj[4].init(15, 10, 0, 0, 0);
                obj[5].init(20, 10, 0, 0, 0);
                obj[6].init(20, 10, 0, 0, 0);
                obj[7].init(8, 0, 255, 0, 0);
                obj[8].init(13, 0, 0, 255, 0);
                obj[9].init(18, 0, 0, 0, 255);
                obj[10].init(37, 7, 0, 0, 0);
                obj[11].init(27, 15, 0, 0, 0);
                obj[12].init(32, 15, 0, 0, 0);
                obj[13].init(11, 16, 0, 0, 0);

                state = "draw";

            } else if (state == "draw") {
                bg.push();
                obj[2].setClash(bg);
                obj[3].setClash(bg);
                obj[5].setClash(bg);                
                obj[6].setClash(bg);
                obj[11].setClash(chr);
                obj[12].setClash(chr);                
                obj[7].checkClash(chr);
                obj[8].checkClash(chr);
                obj[9].checkClash(chr);
                obj[13].checkClash(chr);
                clash(chr, obj);
                chr.checkOffScreen();
                chr.move();
                chr.push();
                pushes(obj);
                if (obj[10].checkClear(chr)) {
                    nextstage = "1-1";  // ステージの最後の画面ではnextstageに次のステージを格納
                    state = "clear";  // state"setup"ではなく"clear"を代入
                }
                
            }
            break;
        }
    }
}