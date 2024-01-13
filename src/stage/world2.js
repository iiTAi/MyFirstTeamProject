/*--- world2 ---*/
function world2() {

    switch (stage) {
        case "1-1": {
            if (state == "setup") {
                // インスタンスの更新
                chr = new CharaClass();
                bg = new BackGroundClass();
                obj = [
                    new ClearLine(1, 2, 0, 1),
                    new RectClass(38, 3),
                    new RectClass(8, 2),
                    new RectClass(6, 2),
                    new RectClass(4, 2),
                    new RectClass(2, 8),
                    new ColorChanger(1, 1, "inv"),
                    new ColorChanger(1, 1, "red"),
                    new ColorChanger(1, 1, "inv"),
                    new ColorChanger(1, 1, "red"),
                    new ColorChanger(1, 1, "inv"),
                    new TransRectClass(4, 1),
                    new TransRectClass(4, 1),
                    new TransRectClass(4, 1),
                    new TransRectClass(4, 1),
                    new TransRectClass(1, 5),
                    new TransRectClass(1, 5),
                    new TransRectClass(1, 5),
                    new TransRectClass(1, 5),
                    new TransRectClass(1, 5),
                ];

                // 初期化
                bg.setRGB(0, 0, 0);
                chr.init(0, 18, 255, 255, 255);
                obj[0].init(37, 17, 255, 255, 255);
                obj[1].init(0, 19, 255, 255, 255);
                obj[2].init(3, 15, 255, 255, 255);
                obj[3].init(5, 13, 255, 255, 255);
                obj[4].init(7, 11, 255, 255, 255);
                obj[5].init(27, 11, 255, 255, 255);
                obj[6].init(9, 8, 0, 0, 0);
                obj[7].init(13, 8, 255, 0, 0);
                obj[8].init(17, 8, 0, 0, 0);
                obj[9].init(21, 8, 255, 0, 0);
                obj[10].init(25, 8, 0, 0, 0);
                obj[11].init(11, 11, 255, 0, 0);
                obj[12].init(15, 11, 0, 0, 0);
                obj[13].init(19, 11, 255, 255, 255);
                obj[14].init(23, 11, 255, 0, 0);
                obj[15].init(11, 6, 255, 255, 255);
                obj[16].init(15, 6, 255, 255, 255);
                obj[17].init(19, 6, 255, 0, 0);
                obj[18].init(23, 6, 0, 0, 0);
                obj[19].init(27, 6, 255, 255, 255);
                setStartPoint(chr);
                // stateの更新
                state = "draw";

            } else if (state == "draw") {
                // 背景の描画
                bg.push();
                // 各種処理
                obj[6].checkClash(chr);
                obj[7].checkClash(chr);
                obj[8].checkClash(chr);
                obj[9].checkClash(chr);
                obj[10].checkClash(chr);
                obj[11].setClash(bg);
                obj[12].setClash(bg);
                obj[13].setClash(bg);
                obj[14].setClash(bg);
                obj[15].setClash(bg);
                obj[16].setClash(bg);
                obj[17].setClash(bg);
                obj[18].setClash(bg);
                obj[19].setClash(bg);
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
                    stage = "1-2";
                    state = "setup";
                    isImgLoad = false;
                    deleteStageImg();
                  }
            }
            break;
        }
        case "1-2": {
            if (state == "setup") {
                // インスタンスの更新
                chr = new CharaClass();
                bg = new BackGroundClass();
                obj = [
                    new ClearLine(1, 2),
                    new ClearLine(1, 2, 1, 0),
                    new RectClass(38, 3),
                    new RectClass(4, 8),
                    new RectClass(4, 8),
                    new RectClass(2, 11),
                    new RectClass(2, 2),
                    new RectClass(11, 2),
                    new RectClass(11, 2),
                    new RectClass(6, 2),
                    new RectClass(2, 2),
                    new ColorChanger(2, 2, "red"),
                    new ColorChanger(2, 2, "red"),
                    new ColorChanger(1, 2, "red"),
                    new ColorChanger(1, 2, "red"),
                    new ColorChanger(2, 2, "inv"),
                    new ColorChanger(2, 2, "inv"),
                    new ColorChanger(1, 2, "inv"),
                    new ColorChanger(1, 2, "inv"),
                    new TransRectClass(2, 1),
                    new TransRectClass(2, 1),
                    new TransRectClass(2, 1),
                    new TransRectClass(2, 1),
                    new TransRectClass(2, 1),
                    new TransRectClass(2, 1),
                    new TransRectClass(1, 2),
                    new TransRectClass(2, 2),
                    new OneWayWall(1, 4, "left"),
                    new WarpPortal("floor", 0, 1),
                    new WarpPortal("floor", 1, 0),
                ];

                // 初期化
                bg.setRGB(0, 0, 0);
                chr.init(0, 18, 255, 255, 255);
                obj[0].init(37, 17, 255, 255, 255);
                obj[1].init(0, 17, 255, 255, 255);
                obj[2].init(0, 19, 255, 255, 255);
                obj[3].init(13, 11, 255, 255, 255);
                obj[4].init(30, 11, 255, 255, 255);
                obj[5].init(32, 0, 255, 255, 255);
                obj[6].init(34, 4, 255, 255, 255);
                obj[7].init(19, 7, 255, 255, 255);
                obj[8].init(2, 7, 255, 255, 255);
                obj[9].init(2, 3, 255, 255, 255);
                obj[10].init(2, 5, 255, 255, 255);
                obj[11].init(0, 7, 255, 0, 0);
                obj[12].init(28, 17, 255, 0, 0);
                obj[13].init(23, 12, 255, 0, 0);
                obj[14].init(26, 10, 255, 0, 0);
                obj[15].init(11, 17, 0, 0, 255);
                obj[16].init(30, 9, 0, 0, 255);
                obj[17].init(6, 12, 0, 0, 255);
                obj[18].init(9, 10, 0, 0, 255);
                obj[19].init(4, 16, 255, 255, 255);
                obj[20].init(7, 14, 0, 0, 0);
                obj[21].init(10, 12, 255, 255, 255);
                obj[22].init(21, 16, 255, 0, 0);
                obj[23].init(24, 14, 0, 0, 0);
                obj[24].init(27, 12, 255, 0, 0);
                obj[25].init(7, 5, 255, 255, 255);
                obj[26].init(17, 9, 255, 0, 0);
                obj[27].init(23, 3, 255, 255, 255);
                obj[28].init(4, 6, 0, 0, 0);
                obj[29].init(34, 3, 0, 0, 0);
                setStartPoint(chr);
                // stateの更新
                state = "draw";

            } else if (state == "draw") {
                // 背景の描画
                bg.push();
                // 各種処理
                obj[11].checkClash(chr);
                obj[12].checkClash(chr);
                obj[13].checkClash(chr);
                obj[14].checkClash(chr);
                obj[15].checkClash(chr);
                obj[16].checkClash(chr);
                obj[17].checkClash(chr);
                obj[18].checkClash(chr);
                obj[19].setClash(bg);
                obj[20].setClash(bg);
                obj[21].setClash(bg);
                obj[22].setClash(bg);
                obj[23].setClash(bg);
                obj[24].setClash(bg);
                obj[25].setClash(bg);
                obj[26].setClash(bg);
                obj[27].setClash(chr);
                obj[28].checkClash(chr, obj);
                obj[29].checkClash(chr, obj);
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
                if (obj[1].checkBack(chr)) {
                    stage = "1-1";
                    state = "setup";
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
                    new ClearLine(1, 2),
                    new RectClass(8, 3),
                    new RectClass(4, 2),
                    new RectClass(4, 2),
                    new RectClass(4, 2),
                    new RectClass(4, 3),
                    new RectClass(4, 2),
                    new RectClass(14, 3),
                    new ColorChanger(1, 2, "red"),
                    new ColorChanger(2, 2, "inv"),
                    new ColorChanger(1, 4, "inv"),
                    new TransRectClass(4, 2),
                    new TransRectClass(4, 2),
                    new TransRectClass(4, 2),
                    new TransRectClass(4, 2),
                    new TransRectClass(1, 4),
                    new TransRectClass(1, 4),
                    new TransRectClass(1, 7),
                    new GravityButton("floor"),
                    new GravityButton("floor"),
                    new GravityButton("ceiling"),
                    new GravityButton("ceiling"),
                    new GravityButton("floor"),
                    new GravityButton("floor"),
                    new GravityButton("floor"),
                    new GravityButton("floor"),
                    new GravityButton("floor"),
                    new GravityButton("ceiling"),
                ];

                // 初期化
                bg.setRGB(0, 0, 0);
                chr.init(0, 18, 255, 255, 255);
                obj[0].init(37, 17, 255, 255, 255);
                obj[1].init(0, 19, 255, 255, 255);
                obj[2].init(7, 9, 255, 255, 255);
                obj[3].init(14, 9, 255, 255, 255);
                obj[4].init(21, 9, 255, 255, 255);
                obj[5].init(34,19, 255, 255, 255);
                obj[6].init(34, 13, 255, 255, 255);
                obj[7].init(24, -1, 255, 255, 255);
                obj[8].init(0, 3, 255, 0, 0);
                obj[9].init(36, 11, 0, 0, 0);
                obj[10].init(33, 15, 0, 0, 0);
                obj[11].init(10, 19, 0, 0, 0);
                obj[12].init(16, 19, 0, 0, 0);
                obj[13].init(22, 19, 0, 0, 0);
                obj[14].init(28, 19, 0, 0, 0);
                obj[15].init(34, 15, 0, 0, 0);
                obj[16].init(35, 9, 255, 255, 255);
                obj[17].init(35, 2, 255, 0, 0);
                obj[18].init(7, 18, 255, 255, 255);
                obj[19].init(34, 12, 255, 255, 255);
                obj[20].init(24, 2, 255, 255, 255);
                obj[21].init(37, 2, 255, 255, 255);
                obj[22].init(11, 18, 255, 255, 255);
                obj[23].init(18, 18, 255, 255, 255);
                obj[24].init(22, 18, 255, 255, 255);
                obj[25].init(15, 8, 255, 255, 255);
                obj[26].init(8, 8, 255, 255, 255);
                obj[27].init(3, 0, 255, 255, 255);
                setStartPoint(chr);
                // stateの更新
                state = "draw";
                
            } else if (state == "draw") {
                // 背景の描画
                bg.push();
                // 各種処理
                obj[8].checkClash(chr);
                obj[9].checkClash(chr);
                obj[10].checkClash(chr);
                obj[11].setClash(bg);
                obj[12].setClash(bg);
                obj[13].setClash(bg);
                obj[14].setClash(bg);
                obj[15].setClash(bg);
                obj[16].setClash(bg);
                obj[17].setClash(bg);
                obj[18].checkClash(chr);
                obj[19].checkClash(chr);
                obj[20].checkClash(chr);
                obj[21].checkClash(chr);
                obj[22].checkClash(chr);
                obj[23].checkClash(chr);
                obj[24].checkClash(chr);
                obj[25].checkClash(chr);
                obj[26].checkClash(chr);
                obj[27].checkClash(chr);
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
                    nextstage = "3-1";
                    state = "clear";
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
        case "6-1": {
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
        case "7-1": {
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
        case "8-1": {
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