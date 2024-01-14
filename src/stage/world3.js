/*--- world3 ---*/
function world3() {

    switch (stage) {
        case "1-1": {
            if (state == "setup") {
                // インスタンスの更新
                chr = new CharaClass();
                bg = new BackGroundClass();
                obj = [
                    new ClearLine(1, 2),
                    
                    new ColorChanger(1, 7, "inv"),
                    new ColorChanger(1, 7, "inv"),
                    new ColorChanger(1, 7, "green"),
                    new ColorChanger(1, 7, "red"),
                    new ColorChanger(4, 1, "inv"),
                    new ColorChanger(4, 1, "red"),

                    new OneWayWall(1, 7, "right"),
                    new OneWayWall(1, 7, "right"),
                    new OneWayWall(1, 7, "right"),
                    new OneWayWall(1, 7, "right"),
                    new OneWayWall(1, 7, "right"),

                    new TransRectClass(2, 1),
                    new TransRectClass(2, 1),
                    new TransRectClass(2, 1),
                    new TransRectClass(2, 1),
                    new TransRectClass(2, 1),
                    new TransRectClass(2, 1),
                    new TransRectClass(2, 1),
                    new TransRectClass(2, 1),
                    new TransRectClass(2, 1),
                    new TransRectClass(2, 1),

                    new TransRectClass(1, 7),
                    new TransRectClass(1, 4),
                    new TransRectClass(1, 3),
                    new TransRectClass(1, 4),
                    new TransRectClass(1, 3),
                    new TransRectClass(1, 4),
                    new TransRectClass(1, 3),

                    new TransRectClass(4, 1),

                    new RectClass(3, 1),
                    new RectClass(3, 1),
                    new RectClass(3, 1),
                    new RectClass(3, 1),
                    new RectClass(3, 1),
                    new RectClass(3, 1),

                    new RectClass(5, 1),
                    new RectClass(5, 1),
                    new RectClass(5, 1),
                    new RectClass(4, 1),
                    new RectClass(4, 1),

                    new RectClass(6, 3),
                    new RectClass(5, 3),
                    new RectClass(1, 1),

                    new RectClass(38, 1),

                    new RectClass(1, 12),
                ];

                // 初期化
                bg.setRGB(0, 0, 0);
                chr.init(0, 18, 255, 255, 255);
                obj[0].init(37, 17, 255, 255, 255);

                obj[1].init(4, 0, 0, 0, 0);
                obj[2].init(18, 0, 0, 0, 0);
                obj[3].init(11, 0, 0, 255, 0);
                obj[4].init(25, 0, 255, 0, 0);
                obj[5].init(34, 9, 0, 0, 0);
                obj[6].init(34, 10, 255, 0, 0);

                obj[7].init(5, 0, 255, 255, 255);
                obj[8].init(12, 0, 255, 255, 255);
                obj[9].init(19, 0, 255, 255, 255);
                obj[10].init(26, 0, 255, 255, 255);
                obj[11].init(33, 0, 255, 255, 255);

                obj[12].init(1, 10, 255, 0, 0);
                obj[13].init(8, 10, 0, 0, 0);
                obj[14].init(15, 10, 255, 255, 0);
                obj[15].init(22, 10, 255, 0, 0);
                obj[16].init(28, 10, 255, 255, 255);
                obj[17].init(2, 13, 255, 0, 0);
                obj[18].init(9, 13, 0, 0, 0);
                obj[19].init(16, 13, 255, 255, 0);
                obj[20].init(23, 13, 255, 0, 0 );
                obj[21].init(29, 13, 255, 255, 255);

                obj[22].init(2, 0, 255, 255, 0);
                obj[23].init(9, 0, 255, 255, 255);
                obj[24].init(9, 4, 255, 0, 0);
                obj[25].init(16, 0, 255, 0, 0);
                obj[26].init(16, 4, 0, 0, 0);
                obj[27].init(23, 0, 255, 255, 255);
                obj[28].init(23, 4, 0, 0, 0);

                obj[29].init(34, 13, 255, 255, 0);

                obj[30].init(3, 16, 255, 255, 255);
                obj[31].init(8, 16, 255, 255, 255);
                obj[32].init(13, 16, 255, 255, 255);
                obj[33].init(18, 16, 255, 255, 255);
                obj[34].init(23, 16, 255, 255, 255);
                obj[35].init(28, 16, 255, 255, 255);

                obj[36].init(2, 7, 255, 255, 255);
                obj[37].init(9, 7, 255, 255, 255);
                obj[38].init(16, 7, 255, 255, 255);
                obj[39].init(23, 7, 255, 255, 255);
                obj[40].init(30, 7, 255, 255, 255);

                obj[41].init(0, 19, 255, 255, 255);
                obj[42].init(33, 19, 255, 255, 255);
                obj[43].init(37, 16, 255, 255, 255);

                obj[44].init(0, -1, 255, 255, 255);

                obj[45].init(33, 7, 255, 255, 255);

                // スタート地点の設定
                setStartPoint(chr);

                // stateの更新
                state = "draw";

            } else if (state == "draw") {
                // 背景の描画
                bg.push();

                // 各種処理
                obj[1].checkClash(chr);
                obj[2].checkClash(chr);
                obj[3].checkClash(chr);
                obj[4].checkClash(chr);
                obj[5].checkClash(chr);
                obj[6].checkClash(chr);

                obj[7].setClash(chr);
                obj[8].setClash(chr);
                obj[9].setClash(chr);
                obj[10].setClash(chr);
                obj[11].setClash(chr);

                obj[12].setClash(bg);
                obj[13].setClash(bg);
                obj[14].setClash(bg);
                obj[15].setClash(bg);
                obj[16].setClash(bg);
                obj[17].setClash(bg);
                obj[18].setClash(bg);
                obj[19].setClash(bg);
                obj[20].setClash(bg);
                obj[21].setClash(bg);

                obj[22].setClash(bg);
                obj[23].setClash(bg);
                obj[24].setClash(bg);
                obj[25].setClash(bg);
                obj[26].setClash(bg);
                obj[27].setClash(bg);
                obj[28].setClash(bg);

                obj[29].setClash(bg);

                clash(chr, obj);
                chr.checkOffScreen();
                chr.move();
                // 描画
                chr.push();
                pushes(obj);
                // images load from firestrage
                if (!isImgLoad) {
                  getStageImg(stage);
                  isImgLoad = true;
                }
                // ゴール判定
                if (obj[0].checkClear(chr)) {
                  nextstage = "2-1";
                  state = "clear";
                  isImgLoad = false;
                  deleteStageImg();
                }
            }
            break;
        }
        case "2-1": {
            if (state == "setup") {
                // インスタンスの更新
                chr = new CharaClass();
                bg = new BackGroundClass();
                obj = [
                    new ClearLine(1, 2, 0, 1),
                    
                    new GravityButton("floor"),
                    new GravityButton("floor"),
                    new GravityButton("ceiling"),
                    new GravityButton("ceiling"),

                    new BreakFloor(3, 2, 25),
                    new BreakFloor(7, 4, 25),

                    new RectClass(38, 3),
                    new RectClass(38, 3),

                    new RectClass(4, 1),
                    new RectClass(1, 6),
                    new RectClass(1, 15),
                    new RectClass(1, 12),
                    new RectClass(4, 1),
                    new RectClass(8, 1),
                    new RectClass(1, 2),
                ];

                // 初期化
                bg.setRGB(0, 0, 0);
                chr.init(0, 18, 255, 255, 255);
                obj[0].init(37, 17, 255, 255, 255);

                obj[1].init(0, 15, 255, 255, 255);
                obj[2].init(15, 18, 255, 255, 255);
                obj[3].init(11, 2, 255, 255, 255);
                obj[4].init(16, 2, 255, 255, 255);

                obj[5].init(11, 17, 255, 255, 255);
                obj[6].init(24, 15, 255, 255, 255);

                obj[7].init(0, -1, 255, 255, 255);
                obj[8].init(0, 19, 255, 255, 255);

                obj[9].init(0, 16, 255, 255, 255);
                obj[10].init(6, 11, 255, 255, 255);
                obj[11].init(12, 2, 255, 255, 255);
                obj[12].init(16, 5, 255, 255, 255);
                obj[13].init(16, 4, 255, 255, 255);
                obj[14].init(30, 14, 255, 255, 255);
                obj[15].init(37, 15, 255, 255, 255);

                // スタート地点の設定
                setStartPoint(chr);

                // stateの更新
                state = "draw";

            } else if (state == "draw") {
                // 背景の描画
                bg.push();

                // 各種処理
                obj[1].checkClash(chr);
                obj[2].checkClash(chr);
                obj[3].checkClash(chr);
                obj[4].checkClash(chr);
                obj[5].checkClash(chr);
                obj[6].checkClash(chr);

                clash(chr, obj);
                chr.checkOffScreen();
                chr.move();

                // 描画
                chr.push();
                pushes(obj);
                // images load from firestrage
                if (!isImgLoad) {
                  getStageImg(stage);
                  isImgLoad = true;
                }
                // ゴール判定
                if (obj[0].checkClear(chr)) {
                  stage = "2-2";
                  state = "setup";
                  isImgLoad = false;
                  deleteStageImg();
                }
            }
            break;
        }
        case "3-1": {
            if (state == "setup") {
                // インスタンスの更新
                chr = new CharaClass();
                bg = new BackGroundClass();
                obj = [];

                // 初期化

                // stateの更新
                state = "draw";

            } else if (state == "draw") {
                // 背景の描画

                // 各種処理

                // 描画

                // ゴール判定
            }
            break;
        }
        case "4-1": {
            if (state == "setup") {
                // インスタンスの更新
                chr = new CharaClass();
                bg = new BackGroundClass();
                obj = [];

                // 初期化

                // stateの更新
                state = "draw";

            } else if (state == "draw") {
                // 背景の描画

                // 各種処理

                // 描画

                // ゴール判定
            }
            break;
        }
        case "5-1": {
            if (state == "setup") {
                // インスタンスの更新
                chr = new CharaClass();
                bg = new BackGroundClass();
                obj = [];

                // 初期化

                // stateの更新
                state = "draw";

            } else if (state == "draw") {
                // 背景の描画

                // 各種処理

                // 描画

                // ゴール判定
            }
            break;
        }
    }
}