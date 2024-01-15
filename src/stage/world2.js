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
                obj = [
                    new ClearLine(1, 2),
                    new RectClass(9, 3),
                    new RectClass(6, 3),
                    new RectClass(2, 17),
                    new ColorChanger(1, 1, "red"),
                    new ColorChanger(1, 1, "inv"),
                    new ColorChanger(1, 1, "inv"),
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
                    new RectClass(38, 1),
                ];

                // 初期化
                bg.setRGB(0, 0, 0);
                chr.init(0, 18, 255, 255, 255);
                obj[0].init(37, 17, 255, 255, 255);
                obj[1].init(0, 19, 255, 255, 255);
                obj[2].init(32, 19, 255, 255, 255);
                obj[3].init(32, 2, 255, 255, 255);
                obj[4].init(16, 3, 255, 0, 0);
                obj[5].init(0, 2, 0, 0, 0);
                obj[6].init(30, 15, 0, 0, 0);
                obj[7].init(3, 10, 255, 255, 255);
                obj[8].init(7, 7, 255, 255, 255);
                obj[9].init(8, 16, 255, 255, 255);
                obj[10].init(16, 4, 255, 255, 255);
                obj[11].init(19, 6, 0, 0, 0);
                obj[12].init(21, 15, 255, 255, 255);
                obj[13].init(25, 8, 255, 255, 255);
                obj[14].init(28, 14, 255, 255, 255);
                obj[15].init(30, 19, 255, 255, 255);
                obj[16].init(30, 2, 255, 255, 255);
                obj[17].init(8, 17, 0, 0, 0);
                obj[18].init(10, 14, 0, 0, 0);
                obj[19].init(10, 8, 0, 0, 0);
                obj[20].init(13, 5, 0, 0, 0);
                obj[21].init(21, 11, 0, 0, 0);
                obj[22].init(26, 17, 0, 0, 0);
                obj[23].init(28, 6, 0, 0, 0);
                obj[24].init(3, 5, 255, 0, 0);
                obj[25].init(5, 13, 255, 0, 0);
                obj[26].init(12, 11, 255, 0, 0);
                obj[27].init(15, 16, 255, 0, 0);
                obj[28].init(18, 13, 255, 0, 0);
                obj[29].init(24, 12, 255, 0, 0);
                obj[30].init(30, 16, 255, 0, 0);
                obj[31].init(0, -1, 255, 255, 255);
                setStartPoint(chr);
                // stateの更新
                state = "draw";
                
            } else if (state == "draw") {
                // 背景の描画
                bg.push();
                // 各種処理
                obj[4].checkClash(chr);
                obj[5].checkClash(chr);
                obj[6].checkClash(chr);
                obj[7].setClash(bg);
                obj[8].setClash(bg);
                obj[9].setClash(bg);
                obj[10].setClash(bg);
                obj[11].setClash(bg);
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
                obj[30].setClash(bg);
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
                obj = [
                    new ClearLine(1, 2),
                    new RectClass(1, 3),
                    new RectClass(1, 13),
                    new RectClass(5, 3),
                    new RectClass(5, 2),
                    new RectClass(3, 1),
                    new RectClass(1, 6),
                    new RectClass(6, 1),
                    new RectClass(2, 1),
                    new RectClass(2, 1),
                    new RectClass(1, 1),
                    new RectClass(1, 1),
                    new RectClass(6, 1),
                    new RectClass(1, 1),
                    new RectClass(16, 2),
                    new RectClass(6, 1),
                    new RectClass(3, 1),
                    new RectClass(9, 1),
                    new RectClass(2, 1),
                    new RectClass(4, 1),
                    new RectClass(4, 1),
                    new RectClass(1, 2),
                    new RectClass(3, 1),
                    new RectClass(6, 1),
                    new RectClass(2, 1),
                    new RectClass(1, 1),
                    new RectClass(5, 1),
                    new RectClass(1, 1),
                    new RectClass(1, 1),
                    new RectClass(10, 1),
                    new RectClass(1, 4),
                    new RectClass(13, 1),
                    new RectClass(1, 1),
                    new RectClass(5, 1),
                    new RectClass(1, 4),
                    new RectClass(2, 2),
                    new RectClass(2, 3),
                    new RectClass(1, 8),
                    new RectClass(5, 1),
                    new RectClass(1, 5),
                    new RectClass(1, 1),
                    new RectClass(6, 2),
                    new RectClass(6, 1),
                    new RectClass(1, 4),
                    new RectClass(3, 1),
                    new RectClass(6, 7),
                    new WarpPortal("ceiling", 0, 11),
                    new WarpPortal("floor", 1, 8),
                    new WarpPortal("ceiling", 2, 7),
                    new WarpPortal("floor", 3, 12),
                    new WarpPortal("floor", 4, 9),
                    new WarpPortal("ceiling", 5, 14),
                    new WarpPortal("ceiling", 6, 10),
                    new WarpPortal("ceiling", 7, 2),
                    new WarpPortal("floor", 8, 1),
                    new WarpPortal("floor", 9, 4),
                    new WarpPortal("ceiling", 10, 6),
                    new WarpPortal("ceiling", 11, 0),
                    new WarpPortal("floor", 12, 3),
                    new WarpPortal("floor", 13, 15),
                    new WarpPortal("ceiling", 14, 5),
                    new WarpPortal("floor", 15, 13),
                    new GravityButton("ceiling"),
                    new GravityButton("ceiling"),
                    new GravityButton("ceiling"),
                    new GravityButton("ceiling"),
                    new GravityButton("floor"),
                    new GravityButton("floor"),
                    new ColorChanger(1, 1, "inv"),
                    new ColorChanger(2, 1, "inv"),
                    new ColorChanger(2, 1, "inv"),
                    new ColorChanger(5, 1, "inv"),
                    new ColorChanger(2, 1, "red"),
                    new ColorChanger(1, 1, "red"),
                    new TransRectClass(5, 1),
                    new TransRectClass(3, 1),
                    new TransRectClass(1, 2),
                    new TransRectClass(1, 1),
                    new TransRectClass(3, 1),
                    new TransRectClass(1, 1),
                    new TransRectClass(2, 1),
                    new TransRectClass(1, 1),
                    new TransRectClass(1, 1),
                    new TransRectClass(2, 1),
                    new TransRectClass(1, 2),
                    new TransRectClass(2, 1),
                    new TransRectClass(2, 1),
                    new UnjumpableSign(),
                    new TransRectClass(1, 1),
                ];

                // 初期化
                bg.setRGB(255, 255, 255);
                chr.init(0, 3, 0, 0, 0);
                obj[0].init(0, 17, 0, 0, 0);
                obj[1].init(0, -1, 0, 0, 0);
                obj[2].init(0, 4, 0, 0, 0);
                obj[3].init(0, 19, 0, 0, 0);
                obj[4].init(1, -1, 0, 0, 0);
                obj[5].init(1, 4, 0, 0, 0);
                obj[6].init(3, 7, 0, 0, 0);
                obj[7].init(1, 14, 0, 0, 0);
                obj[8].init(6, 4, 0, 0, 0);
                obj[9].init(8, 5, 0, 0, 0);
                obj[10].init(7, 9, 0, 0, 0);
                obj[11].init(6, 10, 0, 0, 0);
                obj[12].init(4, 12, 0, 0, 0);
                obj[13].init(7, 15, 0, 0, 0);
                obj[14].init(11, -1, 0, 0, 0);
                obj[15].init(10, 3, 0, 0, 0);
                obj[16].init(13, 5, 0, 0, 0);
                obj[17].init(8, 8, 0, 0, 0);
                obj[18].init(10, 11, 0, 0, 0);
                obj[19].init(10, 15, 0, 0, 0);
                obj[20].init(16, 2, 0, 0, 0);
                obj[21].init(19, 3, 0, 0, 0);
                obj[22].init(19, 5, 0, 0, 0);
                obj[23].init(19, 7, 0, 0, 0);
                obj[24].init(14, 11, 0, 0, 0);
                obj[25].init(14, 14, 0, 0, 0);
                obj[26].init(18, 11, 0, 0, 0);
                obj[27].init(23, 10, 0, 0, 0);
                obj[28].init(21, 12, 0, 0, 0);
                obj[29].init(17, 15, 0, 0, 0);
                obj[30].init(17, 16, 0, 0, 0);
                obj[31].init(17, 20, 0, 0, 0);
                obj[32].init(20, 17, 0, 0, 0);
                obj[33].init(24, 17, 0, 0, 0);
                obj[34].init(24, 2, 0, 0, 0);
                obj[35].init(25, 3, 0, 0, 0);
                obj[36].init(27, -1, 0, 0, 0);
                obj[37].init(29, -1, 0, 0, 0);
                obj[38].init(27, 9, 0, 0, 0);
                obj[39].init(27, 10, 0, 0, 0);
                obj[40].init(28, 14, 0, 0, 0);
                obj[41].init(32, -1, 0, 0, 0);
                obj[42].init(30, 3, 0, 0, 0);
                obj[43].init(32, 6, 0, 0, 0);
                obj[44].init(35, 8, 0, 0, 0);
                obj[45].init(32, 14, 0, 0, 0);
                obj[46].init(1, 1, 0, 0, 0);
                obj[47].init(4, 18, 0, 0, 0);
                obj[48].init(7, 10, 0, 0, 0);
                obj[49].init(7, 14, 0, 0, 0);
                obj[50].init(10, 14, 0, 0, 0);
                obj[51].init(12, 1, 0, 0, 0);
                obj[52].init(15, 6, 0, 0, 0);
                obj[53].init(18, 3, 0, 0, 0);
                obj[54].init(18, 19, 0, 0, 0);
                obj[55].init(20, 4, 0, 0, 0);
                obj[56].init(20, 12, 0, 0, 0);
                obj[57].init(22, 12, 0, 0, 0);
                obj[58].init(30, 2, 0, 0, 0);
                obj[59].init(29, 19, 0, 0, 0);
                obj[60].init(35, 4, 0, 0, 0);
                obj[61].init(35, 13, 0, 0, 0);
                obj[62].init(1, 5, 0, 0, 0);
                obj[63].init(2, 5, 0, 0, 0);
                obj[64].init(14, 9, 0, 0, 0);
                obj[65].init(25, 5, 0, 0, 0);
                obj[66].init(12, 7, 0, 0, 0);
                obj[67].init(31, 8, 0, 0, 0);
                obj[68].init(16, 12, 0, 0, 0);
                obj[69].init(27, 4, 0, 0, 0);
                obj[70].init(27, 15, 0, 0, 0);
                obj[71].init(24, 16, 0, 0, 0);
                obj[72].init(27, 2, 255, 0, 0);
                obj[73].init(19, 16, 255, 0, 0);
                obj[74].init(6, 0, 255, 255, 255);
                obj[75].init(10, 5, 255, 255, 255);
                obj[76].init(15, 9, 255, 255, 255);
                obj[77].init(18, 12, 255, 255, 255);
                obj[78].init(21, 17, 255, 255, 255);
                obj[79].init(24, 6, 255, 255, 255);
                obj[80].init(4, 4, 0, 0, 0);
                obj[81].init(14, 12, 0, 0, 0);
                obj[82].init(18, 18, 0, 0, 0);
                obj[83].init(30, 6, 0, 0, 0);
                obj[84].init(3, 5, 255, 0, 0);
                obj[85].init(17, 8, 255, 0, 0);
                obj[86].init(16, 11, 255, 0, 0);
                obj[87].init(1, 3, 0, 0, 0);
                obj[88].init(19, 19, 0, 0, 0);
                setStartPoint(chr);
                // stateの更新
                state = "draw";
                
            } else if (state == "draw") {
                // 背景の描画
                bg.push();
                // 各種処理
                obj[46].checkClash(chr, obj);
                obj[47].checkClash(chr, obj);
                obj[48].checkClash(chr, obj);
                obj[49].checkClash(chr, obj);
                obj[50].checkClash(chr, obj);
                obj[51].checkClash(chr, obj);
                obj[52].checkClash(chr, obj);
                obj[53].checkClash(chr, obj);
                obj[54].checkClash(chr, obj);
                obj[55].checkClash(chr, obj);
                obj[56].checkClash(chr, obj);
                obj[57].checkClash(chr, obj);
                obj[58].checkClash(chr, obj);
                obj[59].checkClash(chr, obj);
                obj[60].checkClash(chr, obj);
                obj[61].checkClash(chr, obj);
                obj[62].checkClash(chr);
                obj[63].checkClash(chr);
                obj[64].checkClash(chr);
                obj[65].checkClash(chr);
                obj[66].checkClash(chr);
                obj[67].checkClash(chr);
                obj[68].checkClash(chr);
                obj[69].checkClash(chr);
                obj[70].checkClash(chr);
                obj[71].checkClash(chr);
                obj[72].checkClash(chr);
                obj[73].checkClash(chr);
                obj[74].setClash(bg);
                obj[75].setClash(bg);
                obj[76].setClash(bg);
                obj[77].setClash(bg);
                obj[78].setClash(bg);
                obj[79].setClash(bg);
                obj[80].setClash(bg);
                obj[81].setClash(bg);
                obj[82].setClash(bg);
                obj[83].setClash(bg);
                obj[84].setClash(bg);
                obj[85].setClash(bg);
                obj[86].setClash(bg);
                obj[88].setClash(bg);
                clash(chr, obj);
                chr.checkOffScreen();
                chr.setJumpenable(false);
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
                    nextstage = "5-1";
                    state = "clear";
                    isImgLoad = false;
                    deleteStageImg();
                  }
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