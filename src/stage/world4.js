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
                obj = [
                    new ClearLine(1, 2, 0, 1),
                    new ClearLine(1, 2, 2, 3),
                    new ClearLine(1, 2, 4, 5),

                    new OneWayWall(1, 5, "right"),
                    new OneWayWall(1, 5, "right"),
                    new OneWayWall(3, 5, "right"),

                    new OneWayWall(1, 5, "left"),
                    new OneWayWall(1, 5, "left"),

                    new GravityButton("floor"),
                    new GravityButton("floor"),

                    new GravityButton("ceiling"),

                    new BreakFloor(3, 15, 25),

                    new ColorChanger(2, 5, "red"),
                    new ColorChanger(2, 5, "green"),
                    new ColorChanger(2, 5, "blue"),
                    new ColorChanger(1, 5, "inv"),

                    new TransRectClass(2, 2),
                    new TransRectClass(2, 2),
                    new TransRectClass(2, 2),
                    new TransRectClass(2, 5),
                    new TransRectClass(2, 5),

                    new RectClass(38, 3),
                    new RectClass(14, 12),
                    new RectClass(3, 7),
                    new RectClass(4, 1),
                    new RectClass(6, 1),
                    new RectClass(11, 1),
                    new RectClass(11, 1),
                    new RectClass(1, 3),
                    new RectClass(1, 3),
                    new RectClass(1, 3),

                    new RectClass(1, 1),
                    new RectClass(6, 3),
                    new RectClass(24, 3),
                ];

                // 初期化
                bg.setRGB(0, 0, 0);
                chr.init(0, 18 , 255, 255, 255);
                obj[0].init(37, 17, 255, 255, 255);
                obj[1].init(37, 11, 255, 255, 255);
                obj[2].init(37, 5, 255, 255, 255);

                obj[3].init(5, 14, 255, 255, 255);
                obj[4].init(14, 14, 255, 255, 255);
                obj[5].init(27, 14, 255, 255, 255);

                obj[6].init(27, 8, 255, 255, 255);
                obj[7].init(29, 8, 255, 255, 255);

                obj[8].init(24, 18, 255, 255, 255);
                obj[9].init(18, 12, 255, 255, 255);

                obj[10].init(15, 2, 255, 255, 255);

                obj[11].init(23, 30, 255, 255, 255);

                obj[12].init(6, 14, 255, 0, 0);
                obj[13].init(9, 14, 0, 255, 0);
                obj[14].init(12, 14, 0, 0, 255);
                obj[15].init(28, 8, 0, 0, 0);

                obj[16].init(6, 19, 255, 0, 0);
                obj[17].init(9, 19, 255, 255, 0);
                obj[18].init(12, 19, 0, 0, 255);
                obj[19].init(26, 2, 255, 255, 255);
                obj[20].init(21, 8, 255, 255, 255);

                obj[21].init(0, -1, 255, 255, 255);
                obj[22].init(0, 2, 255, 255, 255);
                obj[23].init(14, 7, 255, 255, 255);
                obj[24].init(19, 7, 255, 255, 255);
                obj[25].init(17, 13, 255, 255, 255);
                obj[26].init(26, 7, 255, 255, 255);
                obj[27].init(26, 13, 255, 255, 255);
                obj[28].init(37, 2, 255, 255, 255);
                obj[29].init(37, 8, 255, 255, 255);
                obj[30].init(37, 14, 255, 255, 255);

                obj[31].init(0, 16, 255, 255, 255);
                obj[32].init(0, 19, 255, 255, 255);
                obj[33].init(14, 19, 255, 255, 255);

                // スタート地点の設定
                setStartPoint(chr);

                // stateの更新
                state = "draw";

            } else if (state == "draw") {
                // 背景の描画
                bg.push();

                // 各種処理
                obj[3].setClash(chr);
                obj[4].setClash(chr);
                obj[5].setClash(chr);
                obj[6].setClash(chr);
                obj[7].setClash(chr);

                obj[8].checkClash(chr);
                obj[9].checkClash(chr);
                obj[10].checkClash(chr);

                obj[11].checkClash(chr);

                obj[12].checkClash(chr);
                obj[13].checkClash(chr);
                obj[14].checkClash(chr);
                obj[15].checkClash(chr);

                obj[16].setClash(bg);
                obj[17].setClash(bg);
                obj[18].setClash(bg);
                obj[19].setClash(bg);
                obj[20].setClash(bg);

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
                } else if (obj[1].checkClear(chr)) {
                    stage = "1-2";
                    state = "setup";
                    isImgLoad = false;
                    deleteStageImg();
                } else if (obj[2].checkClear(chr)) {
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
                    new ClearLine(1, 2, 1, 0),
                    new ClearLine(1, 2, 3, 2),
                    new ClearLine(1, 2, 5, 4),
                    new ClearLine(1, 2),

                    new ColorChanger(1, 20, "inv"),
                    
                    new TransRectClass(3, 1),
                    new TransRectClass(6, 1),
                    new TransRectClass(1, 1),
                    new TransRectClass(1, 1),
                    
                    new RectClass(38, 3),
                    new RectClass(1, 3),
                    new RectClass(1, 4),
                    new RectClass(1, 4),
                    new RectClass(6, 1),
                    new RectClass(6, 1),
                    new RectClass(6, 3),
                    new RectClass(1, 1),
                    new RectClass(1, 1),
                    new RectClass(1, 1),

                    new RectClass(1, 1),
                    new RectClass(1, 1),
                    new RectClass(2, 1),
                    new RectClass(3, 1),
                    new RectClass(7, 7),
                    new RectClass(8, 3),
                    new RectClass(1, 3),
                ];

                // 初期化
                bg.setRGB(0, 0, 0);
                chr.init(0, 18, 255, 255, 255);
                obj[0].init(0, 17, 255, 255, 255);
                obj[1].init(0, 11, 255, 255, 255);
                obj[2].init(0, 5, 255, 255, 255);
                obj[3].init(37, 5, 255, 255, 255);

                obj[4].init(25, 2, 0, 0, 0);

                obj[5].init(33, 17, 0, 0, 0);
                obj[6].init(27, 16, 0, 0, 0);
                obj[7].init(21, 13, 0, 0, 0);
                obj[8].init(21, 19, 255, 255, 255);

                obj[9].init(0, -1, 255, 255, 255);
                obj[10].init(0, 2, 255, 255, 255);
                obj[11].init(0, 7, 255, 255, 255);
                obj[12].init(0, 13, 255, 255, 255);
                obj[13].init(0, 7, 255, 255, 255);
                obj[14].init(0, 13, 255, 255, 255);
                obj[15].init(0, 19, 255, 255, 255);
                obj[16].init(13, 7, 255, 255, 255);
                obj[17].init(13, 19, 255, 255, 255);
                obj[18].init(21, 7, 255, 255, 255);

                obj[19].init(30, 12, 255, 255, 255);
                obj[20].init(13, 13, 255, 255, 255);
                obj[21].init(29, 7, 255, 255, 255);
                obj[22].init(28, 13, 255, 255, 255);
                obj[23].init(31, 7, 255, 255, 255);
                obj[24].init(30, 19, 255, 255, 255);
                obj[25].init(37, 2, 255, 255, 255);


                // スタート地点の設定
                setStartPoint(chr);

                // stateの更新
                state = "draw";

            } else if (state == "draw") {
                // 背景の描画
                bg.push();

                // 各種処理
                obj[4].checkClash(chr);

                obj[5].setClash(bg);
                obj[6].setClash(bg);
                obj[7].setClash(bg);
                obj[8].setClash(bg);

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
                    stage = "1-1";
                    state = "setup";
                    isImgLoad = false;
                    deleteStageImg();
                } else if (obj[1].checkClear(chr)) {
                    stage = "1-1";
                    state = "setup";
                    isImgLoad = false;
                    deleteStageImg();
                } else if (obj[2].checkClear(chr)) {
                    stage = "1-1";
                    state = "setup";
                    isImgLoad = false;
                    deleteStageImg();
                } else if (obj[3].checkClear(chr)) {
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
                obj = [
                    // TRC
                    new TransRectClass(6, 3),
                    new TransRectClass(6, 3),
                    new TransRectClass(12, 3),
                    new TransRectClass(7, 1),
                    new TransRectClass(3, 3),
                    new TransRectClass(6, 3),
                    new TransRectClass(4, 3),
                    new TransRectClass(8, 3),
                    new TransRectClass(3, 3),
                    new TransRectClass(4, 3),
                    new TransRectClass(35, 2),
                    new TransRectClass(2, 2),
                    new TransRectClass(10, 1),
                    new TransRectClass(9, 1),
                    new TransRectClass(8, 1),
                    new TransRectClass(5, 1),

                    new TransRectClass(38, 1),
                    new TransRectClass(1, 3),
                    new TransRectClass(7, 1),
                    new TransRectClass(2, 5),
                    new TransRectClass(3, 1),
                    new TransRectClass(4, 3),
                    new TransRectClass(13, 3),
                    new TransRectClass(9, 3),
                    new TransRectClass(13, 3),
                    new TransRectClass(22, 3),
                    new TransRectClass(6, 4),
                    new TransRectClass(7, 1),
                    new TransRectClass(9, 1),
                    new TransRectClass(14, 1),

                    new TransRectClass(3, 6),
                    new TransRectClass(3, 3),
                    new TransRectClass(2, 3),

                    new TransRectClass(3, 3),
                    new TransRectClass(2, 3),

                    new TransRectClass(3, 3),
                    new TransRectClass(1, 1),

                    new TransRectClass(1, 2),


                    // GM
                    new ClearLine(1, 2),

                    new GravityButton("floor"),
                    new GravityButton("ceiling"),

                    new WarpPortal("floor", 0, 1),
                    new WarpPortal("floor", 1, 0),
                    
                    // RC
                    new RectClass(6, 1),
                    new RectClass(1, 7),
                    new RectClass(1, 3),
                    new RectClass(1, 4),
                    new RectClass(1, 2),
                    new RectClass(1, 4),
                    new RectClass(3, 1),
                    new RectClass(1, 1),
                    new RectClass(8, 1),
                    new RectClass(1, 1),
                    new RectClass(1, 1),
                    new RectClass(3, 1),
                    new RectClass(2, 1),

                    // CC
                    new ColorChanger(1, 1, "inv"),
                    new ColorChanger(2, 1, "inv"),
                    new ColorChanger(1, 1, "inv"),
                    new ColorChanger(1, 1, "inv"),
                    new ColorChanger(2, 1, "inv"),
                    new ColorChanger(2, 2, "inv"),
                    new ColorChanger(2, 1, "inv"),
                    new ColorChanger(1, 1, "inv"),
                    new ColorChanger(1, 1, "inv"),
                    new ColorChanger(2, 1, "inv"),
                    new ColorChanger(2, 1, "inv"),
                    
                    new ColorChanger(1, 1, "red"),
                    new ColorChanger(4, 1, "red"),
                    new ColorChanger(1, 4, "red"),

                    new ColorChanger(1, 1, "green"),
                    new ColorChanger(1, 1, "green"),
                    new ColorChanger(1, 1, "green"),
                    new ColorChanger(1, 1, "green"),
                    new ColorChanger(1, 4, "green"),

                    new ColorChanger(1, 1, "blue"),
                    new ColorChanger(1, 1, "blue"),
                    new ColorChanger(2, 1, "blue"),
                    new ColorChanger(1, 4, "blue"),


                    new GravityButton("ceiling"),
                    new ColorChanger(1, 3, "inv")

                ];

                // 初期化
                bg.setRGB(0, 0, 0);
                chr.init(0, 2, 255, 255, 255);

                // TRC
                obj[0].init(0, 0, 0, 0, 0);
                obj[1].init(7, 0, 0, 0, 0);
                obj[2].init(16, 0, 0, 0, 0);
                obj[3].init(28, 0, 0, 0, 0);
                obj[4].init(35, 0, 0, 0, 0);
                obj[5].init(0, 6, 0, 0, 0);
                obj[6].init(9, 6, 0, 0, 0);
                obj[7].init(16, 6, 0, 0, 0);
                obj[8].init(28, 6, 0, 0, 0);
                obj[9].init(34, 6, 0, 0, 0);
                obj[10].init(3, 12, 0, 0, 0);
                obj[11].init(6, 14, 0, 0, 0);
                obj[12].init(6, 15, 0, 0, 0);
                obj[13].init(15, 15, 0, 0, 0);
                obj[14].init(23, 15, 0, 0, 0);
                obj[15].init(33, 15, 0, 0, 0);

                obj[16].init(0, -1, 255, 255, 255);
                obj[17].init(6, 0, 255, 255, 255);
                obj[18].init(28, 1, 255, 255, 255);
                obj[19].init(27, 1, 255, 255, 255);
                obj[20].init(28, 5, 255, 255, 255);
                obj[21].init(34, 3, 255, 255, 255);
                obj[22].init(0, 3, 255, 255, 255);
                obj[23].init(16, 3, 255, 255, 255);
                obj[24].init(0, 9, 255, 255, 255);
                obj[25].init(16, 9, 255, 255, 255);
                obj[26].init(0, 14, 255, 255, 255);
                obj[27].init(8, 14, 255, 255, 255);
                obj[28].init(15, 14, 255, 255, 255);
                obj[29].init(24, 14, 255, 255, 255);

                obj[30].init(13, 0, 0, 255, 0);
                obj[31].init(13, 9, 0, 255, 0);
                obj[32].init(4, 18, 0, 255, 0);

                obj[33].init(6, 6, 0, 0, 255);
                obj[34].init(25, 4, 0, 0, 255);

                obj[35].init(31, 6, 0, 255, 255);
                obj[36].init(23, 21, 0, 255, 255);

                obj[37].init(36, 19, 255, 255, 0);


                // GM
                obj[38].init(37, 19, 255, 255, 255);

                obj[39].init(23, 8, 255, 255, 255);
                obj[40].init(18, 0, 255, 255, 255);

                obj[41].init(13, 14, 255, 255, 255);
                obj[42].init(1, 20, 255, 255, 255);

                //RC
                obj[43].init(19, 3, 255, 255, 255);
                obj[44].init(24, 3, 255, 255, 255);
                obj[45].init(27, 6, 255, 255, 255);
                obj[46].init(34, 1, 255, 255, 255);
                obj[47].init(37, 3, 255, 255, 255);
                obj[48].init(2, 12, 255, 255, 255);
                obj[49].init(0, 15, 255, 255, 255);
                obj[50].init(22, 9, 255, 255, 255);
                obj[51].init(0, 21, 255, 255, 255);
                obj[52].init(15, 21, 255, 255, 255);
                obj[53].init(32, 21, 255, 255, 255);
                obj[54].init(35, 21, 255, 255, 255);
                obj[55].init(36, 18, 255, 255, 255);

                // CC
                obj[56].init(4, 1, 0, 0, 0);
                obj[57].init(8, 3, 0, 0, 0);
                obj[58].init(1, 4, 0, 0, 0);
                obj[59].init(4, 7, 0, 0, 0);
                obj[60].init(10, 9, 0, 0, 0);
                obj[61].init(21, 5, 0, 0, 0);
                obj[62].init(25, 7, 0, 0, 0);
                obj[63].init(32, 7, 0, 0, 0);
                obj[64].init(33, 2, 0, 0, 0);
                obj[65].init(31, 15, 0, 0, 0);
                obj[66].init(35, 3, 0, 0, 0);

                obj[67].init(17, 10, 255, 0, 0);
                obj[68].init(0, 7, 255, 0, 0);
                obj[69].init(29, 18, 255, 0, 0);

                obj[70].init(14, 1, 0, 255, 0);
                obj[71].init(17, 4, 0, 255, 0);
                obj[72].init(30, 4, 0, 255, 0);
                obj[73].init(14, 10, 0, 255, 0);
                obj[74].init(20, 18, 0, 255, 0);

                obj[75].init(10, 1, 0, 0, 255);
                obj[76].init(7, 7, 0, 0, 255);
                obj[77].init(25, 3, 0, 0, 255);
                obj[78].init(18, 18, 0, 0, 255);


                obj[79].init(36, 0, 255, 255, 255);
                obj[80].init(3, 18, 0, 0, 0);

                // スタート地点の設定
                setStartPoint(chr);

                // stateの更新
                state = "draw";

            } else if (state == "draw") {
                // 背景の描画
                bg.push();

                // 各種処理
                obj[0].setClash(bg);
                obj[1].setClash(bg);
                obj[2].setClash(bg);
                obj[3].setClash(bg);
                obj[4].setClash(bg);
                obj[5].setClash(bg);
                obj[6].setClash(bg);
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
                obj[31].setClash(bg);
                obj[32].setClash(bg);
                obj[33].setClash(bg);
                obj[34].setClash(bg);
                obj[35].setClash(bg);
                obj[36].setClash(bg);
                obj[37].setClash(bg);

                obj[39].checkClash(chr);
                obj[40].checkClash(chr);

                obj[41].checkClash(chr, obj);
                obj[42].checkClash(chr, obj);

                obj[56].checkClash(chr);
                obj[57].checkClash(chr);
                obj[58].checkClash(chr);
                obj[59].checkClash(chr);
                obj[60].checkClash(chr);
                obj[61].checkClash(chr);
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
                obj[74].checkClash(chr);
                obj[75].checkClash(chr);
                obj[76].checkClash(chr);
                obj[77].checkClash(chr);
                obj[78].checkClash(chr);

                obj[79].checkClash(chr);
                obj[80].checkClash(chr);


                clash(chr, obj);
                chr.checkOffScreen();
                chr.move();

                // 描画
                pushes(obj);
                chr.push();

                // images load from firestrage
                if (!isImgLoad) {
                  getStageImg(stage);
                  isImgLoad = true;
                }
                // ゴール判定
                if (obj[38].checkClear(chr)) {
                    state = "clear";
                    isImgLoad = false;
                    deleteStageImg();
                }

            }
            break;
        }
    }
}