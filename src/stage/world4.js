/*--- world4 ---*/
function world4() {
    if(scene=="4"){
        world = "4"
    }
    switch (stage) {
        case "1-1": {
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
        case "2-1": {
            if (state == "setup") {
                // インスタンスの更新
                chr = new CharaClass();
                bg = new BackGroundClass();
                obj = [
                    new ClearLine(1, 2),

                    new RectClass(4, 2),
                    new RectClass(4, 3),
                    new RectClass(2, 2),
                    new RectClass(2, 2),
                    new RectClass(2, 2),
                    new RectClass(2, 2),

                    new TransRectClass(2, 2),

                    new RectClass(2, 2),
                    new RectClass(2, 2),
                    new RectClass(4, 1),
                    new RectClass(2, 2),
                    new RectClass(2, 23),

                    new TransRectClass(1, 1),
                    new TransRectClass(1, 1),
                    new TransRectClass(1, 1),
                    new TransRectClass(1, 1),
                    new TransRectClass(1, 1),
                    new TransRectClass(1, 1),
                    new TransRectClass(1, 1),
                    new TransRectClass(1, 1),
                    new TransRectClass(1, 1),
                    new TransRectClass(1, 1),
                    new TransRectClass(1, 1),
                    new TransRectClass(1, 1),
                    new TransRectClass(1, 1),
                    new TransRectClass(1, 1),

                    new RectClass(18, 1),

                    new ColorChanger(1, 1, "green"),
                    new ColorChanger(1, 1, "red"),
                    new ColorChanger(1, 1, "inv"),
                    new ColorChanger(1, 1, "red"),
                    new ColorChanger(1, 1, "blue"),
                    new ColorChanger(1, 8, "green"),

                    new WarpPortal("floor", 0, 1),
                    new WarpPortal("floor", 1, 0),

                    new GravityButton("ceiling"),
                    new GravityButton("floor"),

                    new TransRectClass(2, 2),
                ];

                // 初期化
                bg.setRGB(0, 0, 0);
                chr.init(2, 18, 255, 255, 255);
                obj[0].init(0, 0, 255, 255, 255);

                obj[1].init(0, 2, 255, 255, 255);
                obj[2].init(0, 19, 255, 255, 255);
                obj[3].init(0, 11, 255, 255, 255);
                obj[4].init(16, 7, 255, 255, 255);
                obj[5].init(16, 15, 255, 255, 255);
                obj[6].init(20, 4, 255, 255, 255);

                obj[7].init(20, 12, 0, 0, 0);

                obj[8].init(36, 8, 255, 255, 255);
                obj[9].init(36, 17, 255, 255, 255);
                obj[10].init(34, -1, 255, 255, 255);
                obj[11].init(36, 6, 255, 255, 255);
                obj[12].init(18, -1, 255, 255, 255);

                obj[13].init(6, 4, 255, 0, 255);
                obj[14].init(12, 4, 0, 255, 0);
                obj[15].init(12, 9, 0, 0, 255);
                obj[16].init(6, 9, 0, 255, 0);
                obj[17].init(6, 14, 255, 255, 0);
                obj[18].init(12, 14, 255, 255, 255);
                obj[19].init(12, 19, 0, 0, 0);
                obj[20].init(6, 19, 0, 0, 0);
                obj[21].init(31, 1, 0, 0, 255);
                obj[22].init(25, 1, 0, 0, 255);
                obj[23].init(25, 6, 255, 255, 255);
                obj[24].init(31, 6, 255, 255, 255);
                obj[25].init(31, 11, 255, 0, 0);
                obj[26].init(25, 11, 255, 255, 255);

                obj[27].init(0, -1, 255, 255, 255);

                obj[28].init(17, 4, 0, 255, 0);
                obj[29].init(17, 12, 255, 0, 0);
                obj[30].init(20, 8, 0, 0, 0);
                obj[31].init(37, 12, 255, 0, 0);
                obj[32].init(20, 17, 0, 0, 255);
                obj[33].init(10, 5, 0, 255, 0);

                obj[34].init(0, 18, 255, 255, 255);
                obj[35].init(37, 5, 255, 255, 255);

                obj[36].init(37, 0, 255, 255, 255);
                obj[37].init(36, 5, 255, 255, 255);

                obj[38].init(2, 0, 0, 0, 0);
                setStartPoint(chr);
                // stateの更新
                state = "draw";

            } else if (state == "draw") {
                // 背景の描画
                bg.push();
                // 各種処理
                obj[7].setClash(bg);
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

                obj[28].checkClash(chr);
                obj[29].checkClash(chr);
                obj[30].checkClash(chr);
                obj[31].checkClash(chr);
                obj[32].checkClash(chr);
                obj[33].checkClash(chr);

                obj[34].checkClash(chr, obj);
                obj[35].checkClash(chr, obj);

                obj[36].checkClash(chr);
                obj[37].checkClash(chr);

                obj[38].setClash(bg);
                clash(chr, obj);
                chr.checkOffScreen();
                chr.move();
                // 描画
                chr.push();
                pushes(obj);
                // images load from firestrage
                if (!isImgLoad) {
                    getStageImg(world+"-"+stage);
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
                obj = [
                    new ClearLine(1, 2),

                    new RectClass(38, 3),
                    new RectClass(8, 2),
                    new RectClass(14, 2),
                    new RectClass(5, 2),
                    new RectClass(4, 2),
                    new RectClass(30, 3),
                    new RectClass(6, 3),
                    new RectClass(2, 8),
                    new RectClass(2, 4),
                    new RectClass(12, 2),
                    new RectClass(2, 6),
                    new RectClass(2, 2),
                    new RectClass(2, 2),
                    new RectClass(2, 2),
                    new RectClass(2, 2),
                    new RectClass(2, 2),
                    new RectClass(2, 9),
                    new RectClass(2, 4),
                    new RectClass(8, 2),

                    new TransRectClass(4, 2),
                    new TransRectClass(2, 2),
                    new TransRectClass(1, 3),
                    new TransRectClass(2, 2),
                    new TransRectClass(2, 2),
                    new TransRectClass(2, 2),
                    new TransRectClass(2, 2),
                    new TransRectClass(2, 2),
                    new TransRectClass(2, 1),
                    new TransRectClass(2, 2),
                    new TransRectClass(2, 2),

                    new ColorChanger(2, 1, "inv"),
                    new ColorChanger(1, 3, "inv"),
                    new ColorChanger(2, 1, "blue"),
                    new ColorChanger(2, 1, "green"),
                    new ColorChanger(1, 1, "green"),
                    new ColorChanger(1, 1, "red"),
                    new ColorChanger(1, 1, "blue"),
                    new ColorChanger(1, 1, "green"),
                    new ColorChanger(2, 1, "inv"),
                    new ColorChanger(1, 1, "red"),
                    new ColorChanger(2, 1, "blue"),
                    new ColorChanger(2, 2, "blue"),
                    new ColorChanger(2, 1, "inv"),

                    new WarpPortal("floor", 0, 4),
                    new WarpPortal("ceiling", 1, 5),
                    new WarpPortal("ceiling", 2, 6),
                    new WarpPortal("floor", 3, 7),
                    new WarpPortal("floor", 4, 0),
                    new WarpPortal("ceiling", 5, 1),
                    new WarpPortal("ceiling", 6, 2),
                    new WarpPortal("floor", 7, 3),

                    new GravityButton("floor"),
                    new GravityButton("floor"),
                    new GravityButton("ceiling"),
                    new GravityButton("ceiling"),
                    new GravityButton("floor"),
                    new GravityButton("ceiling"),

                    new UnjumpableSign(),
                ];

                // 初期化
                bg.setRGB(0, 0, 0);
                chr.init(0, 3, 255, 255, 255);
                obj[0].init(37, 17, 255, 255, 255);

                obj[1].init(0, 19, 255, 255, 255);
                obj[2].init(5, 17, 255, 255, 255);
                obj[3].init(2, 12, 255, 255, 255);
                obj[4].init(2, 8, 255, 255, 255);
                obj[5].init(4, 4, 255, 255, 255);
                obj[6].init(0, -1, 255, 255, 255);
                obj[7].init(32, -1, 255, 255, 255);
                obj[8].init(10, 2, 255, 255, 255);
                obj[9].init(14, 8, 255, 255, 255);
                obj[10].init(20, 8, 255, 255, 255);
                obj[11].init(18, 13, 255, 255, 255);
                obj[12].init(22, 6, 255, 255, 255);
                obj[13].init(20, 13, 255, 255, 255);
                obj[14].init(24, 13, 255, 255, 255);
                obj[15].init(28, 13, 255, 255, 255);
                obj[16].init(24, 17, 255, 255, 255);
                obj[17].init(34, 4, 255, 255, 255);
                obj[18].init(34, 15, 255, 255, 255);
                obj[19].init(22, 4, 255, 255, 255);

                obj[20].init(0, 4, 255, 255, 255);
                obj[21].init(10, 10, 0, 0, 0);
                obj[22].init(11, 14, 0, 255, 0);
                obj[23].init(14, 6, 255, 255, 0);
                obj[24].init(16, 8, 0, 255, 255);
                obj[25].init(18, 8, 0, 0, 255);
                obj[26].init(22, 13, 0, 255, 0);
                obj[27].init(24, 15, 255, 0, 0);
                obj[28].init(26, 14, 255, 255, 255);
                obj[29].init(36, 15, 0, 255, 255);
                obj[30].init(30, 0, 255, 255, 255);

                obj[31].init(8, 5, 0, 0, 0);
                obj[32].init(12, 14, 0, 0, 0);
                obj[33].init(12, 9, 0, 0, 255);
                obj[34].init(20, 4, 0, 255, 0);
                obj[35].init(21, 10, 0, 255, 0);
                obj[36].init(22, 10, 255, 0, 0);
                obj[37].init(21, 12, 0, 0, 255);
                obj[38].init(22, 12, 0, 255, 0);
                obj[39].init(26, 13, 0, 0, 0);
                obj[40].init(28, 15, 255, 0, 0);
                obj[41].init(32, 5, 0, 0, 255);
                obj[42].init(36, 8, 0, 0, 255);
                obj[43].init(36, 11, 0, 0, 0);

                obj[44].init(5, 16, 255, 255, 255);
                obj[45].init(6, 6, 255, 255, 255);
                obj[46].init(9, 2, 255, 255, 255);
                obj[47].init(17, 18, 255, 255, 255);
                obj[48].init(20, 18, 255, 255, 255);
                obj[49].init(24, 2, 255, 255, 255);
                obj[50].init(24, 6, 255, 255, 255);
                obj[51].init(35, 3, 255, 255, 255);

                obj[52].init(0, 18, 255, 255, 255);
                obj[53].init(6, 11, 255, 255, 255);
                obj[54].init(20, 2, 255, 255, 255);
                obj[55].init(20, 15, 255, 255, 255);
                obj[56].init(28, 18, 255, 255, 255);
                obj[57].init(35, 2, 255, 255, 255);

                obj[58].init(4, 3, 255, 255, 255);
                setStartPoint(chr);
                // stateの更新
                state = "draw";

            } else if (state == "draw") {
                // 背景の描画
                bg.push();
                // 各種処理
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
                obj[30].setClash(bg);

                obj[31].checkClash(chr);
                obj[32].checkClash(chr);
                obj[33].checkClash(chr);
                obj[34].checkClash(chr);
                obj[35].checkClash(chr);
                obj[36].checkClash(chr);
                obj[37].checkClash(chr);
                obj[38].checkClash(chr);
                obj[39].checkClash(chr);
                obj[40].checkClash(chr);
                obj[41].checkClash(chr);
                obj[42].checkClash(chr);
                obj[43].checkClash(chr);

                obj[44].checkClash(chr, obj);
                obj[45].checkClash(chr, obj);
                obj[46].checkClash(chr, obj);
                obj[47].checkClash(chr, obj);
                obj[48].checkClash(chr, obj);
                obj[49].checkClash(chr, obj);
                obj[50].checkClash(chr, obj);
                obj[51].checkClash(chr, obj);

                obj[52].checkClash(chr);
                obj[53].checkClash(chr);
                obj[54].checkClash(chr);
                obj[55].checkClash(chr);
                obj[56].checkClash(chr);
                obj[57].checkClash(chr);
                clash(chr, obj);
                chr.checkOffScreen();
                chr.setJumpenable(false)
                chr.move();
                // 描画
                chr.push();
                pushes(obj);
                // images load from firestrage
                if (!isImgLoad) {
                    getStageImg(world+"-"+stage);
                    isImgLoad = true;
                }
                // ゴール判定
                if (obj[0].checkClear(chr)) {
                    nextstage = "4-1";
                    state = "clear";
                    isImgLoad = false;
                    deleteStageImg();
                  }
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