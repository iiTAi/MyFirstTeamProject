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