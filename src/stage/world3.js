/*--- world3 ---*/
function world3() {
    if(scene=="world3"){
        world="3"
    }
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
                  getStageImg(world+"-"+stage);
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
                  getStageImg(world+"-"+stage);
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
        case "2-2": {
            if (state == "setup") {
                // インスタンスの更新
                chr = new CharaClass();
                bg = new BackGroundClass();
                obj = [
                    new ClearLine(1, 2, 1, 0),
                    new ClearLine(1, 2),

                    new BreakFloor(2, 12, 25),

                    new ColorChanger(1, 23, "red"),
                    new ColorChanger(1, 23, "green"),
                    new ColorChanger(1, 3, "inv"),
                    new ColorChanger(1, 3, "red"),
                    new ColorChanger(1, 3, "green"),

                    new RectClass(1, 1),
                    new RectClass(1, 1),
                    new RectClass(1, 1),
                    new RectClass(1, 1),
                    new RectClass(1, 1),
                    new RectClass(1, 1),
                    new RectClass(1, 1),
                    new RectClass(1, 1),

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
                    new TransRectClass(1, 3),
                    new TransRectClass(1, 1),

                    new TransRectClass(1, 2),

                    new RectClass(1, 1),
                    new RectClass(6, 3),
                    new RectClass(4, 3),
                    new RectClass(2, 1),
                    new RectClass(1, 5)
                    
                ];

                // 初期化
                bg.setRGB(0, 0, 0);
                chr.init(0, 18, 255, 255, 255);
                obj[0].init(0, 17, 255, 255, 255);
                obj[1].init(37, 17, 255, 255, 255);

                obj[2].init(34, 7, 255, 255, 255);

                obj[3].init(12, -1, 255, 0, 0);
                obj[4].init(28, -1, 0, 255, 0);
                obj[5].init(20, 0, 0, 0, 0);
                obj[6].init(20, 12, 255, 0, 0);
                obj[7].init(20, 6, 0, 255, 0);

                obj[8].init(8, 4, 255, 255, 255);
                obj[9].init(16, 4, 255, 255, 255);
                obj[10].init(8, 7, 255, 255, 255);
                obj[11].init(32, 10, 255, 255, 255);
                obj[12].init(32, 13, 255, 255, 255);
                obj[13].init(8, 16, 255, 255, 255);
                obj[14].init(16, 16, 255, 255, 255);
                obj[15].init(32, 16, 255, 255, 255);

                obj[16].init(24, 4, 255, 0, 0);
                obj[17].init(16, 10, 255, 0, 0);
                obj[18].init(16, 13, 255, 0, 0);
                obj[19].init(16, 7, 0, 255, 0);
                obj[20].init(32, 7, 0, 255, 0);
                obj[21].init(24, 10, 0, 255, 0);
                obj[22].init(8, 10, 255, 255, 0);
                obj[23].init(24, 7, 0, 0, 0);
                obj[24].init(8, 13, 0, 0, 0);
                obj[25].init(24, 13, 0, 0, 0);
                obj[26].init(32, 4, 255, 255, 255);
                obj[27].init(24, 16, 255, 255, 255);

                obj[28].init(36, 17, 0, 255, 0);

                obj[29].init(0, 16, 255, 255, 255);
                obj[30].init(0, 19, 255, 255, 255);
                obj[31].init(34, 19, 255, 255, 255);
                obj[32].init(36, 16, 255, 255, 255);
                obj[33].init(34, 2, 255, 255, 255);

                // スタート地点の設定
                setStartPoint(chr);

                // stateの更新
                state = "draw";

            } else if (state == "draw") {
                // 背景の描画
                bg.push();

                // 各種処理
                obj[2].checkClash(chr);

                obj[3].checkClash(chr);
                obj[4].checkClash(chr);
                obj[5].checkClash(chr);
                obj[6].checkClash(chr);
                obj[7].checkClash(chr);

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
                  stage = "2-1";
                  state = "setup";
                  isImgLoad = false;
                  deleteStageImg();
                }
                if (obj[1].checkClear(chr)) {
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

                    new ColorChanger(2, 2, "inv"),
                    new ColorChanger(2, 2, "inv"),
                    new ColorChanger(1, 2, "inv"),
                    new ColorChanger(2, 1, "inv"),
                    new ColorChanger(2, 3, "inv"),
                    new ColorChanger(2, 1, "inv"),
                    new ColorChanger(2, 2, "inv"),

                    new ColorChanger(1, 2, "red"),
                    new ColorChanger(2, 1, "red"),
                    new ColorChanger(1, 1, "red"),
                    new ColorChanger(1, 1, "red"),
                    new ColorChanger(2, 1, "red"),
                    new ColorChanger(2, 1, "red"),
                    new ColorChanger(2, 1, "red"),

                    new ColorChanger(1, 1, "green"),
                    new ColorChanger(2, 5, "green"),
                    new ColorChanger(1, 1, "green"),
                    new ColorChanger(1, 1, "green"),
                    new ColorChanger(2, 1, "green"),
                    new ColorChanger(2, 1, "green"),

                    new WarpPortal("floor", 0, 1),
                    new WarpPortal("floor", 1, 0),
                    
                    new OneWayWall(1, 2, "right"),
                    new OneWayWall(1, 2, "left"),

                    new TransRectClass(17, 1),
                    new TransRectClass(6, 1),
                    new TransRectClass(7, 1),
                    new TransRectClass(8, 1),
                    new TransRectClass(6, 1),
                    new TransRectClass(4, 1),
                    new TransRectClass(1, 2),
                    new TransRectClass(2, 2),
                    new TransRectClass(1, 2),

                    new RectClass(4, 2),
                    new RectClass(4, 1),
                    new RectClass(1, 7),
                    new RectClass(12, 1),
                    new RectClass(3, 4),
                    new RectClass(5, 1),
                    new RectClass(12, 1),
                    new RectClass(1, 9),
                    new RectClass(1, 10),
                    new RectClass(17, 2),
                    new RectClass(1, 19),
                    new RectClass(2, 5 ),
                    new RectClass(2, 6),
                    new RectClass(1, 16),
                    new RectClass(1, 1),
                    new RectClass(1, 1),
                    new RectClass(1, 1),

                    new GravityButton("floor"),
                    new GravityButton("floor"),
                    new GravityButton("floor"),
                    new GravityButton("floor"),
                    new GravityButton("floor"),
                    new GravityButton("floor"),
                    new GravityButton("floor"),
                    new GravityButton("floor"),
                    new GravityButton("floor"),
                    new GravityButton("floor"),

                    new GravityButton("ceiling"),
                    new GravityButton("ceiling"),
                    new GravityButton("ceiling"),
                    new GravityButton("ceiling"),
                    new GravityButton("ceiling"),

                    new RectClass(1, 1),
                    new GravityButton("floor"),
                    new GravityButton("floor")
                ];


                // 初期化
                bg.setRGB(0, 0, 0);
                chr.init(0, 19, 255, 255, 255);
                obj[0].init(37, 18, 255, 255, 255);

                obj[1].init(5, 18, 0, 0, 0);
                obj[2].init(9, 18, 0, 0, 0);
                obj[3].init(13, 18, 0, 0, 0);
                obj[4].init(17, 15, 0, 0, 0);
                obj[5].init(5, 11 , 0, 0, 0);
                obj[6].init(29, 13, 0, 0, 0);
                obj[7].init(31, 9, 0, 0, 0);

                obj[8].init(16, 16, 255, 0, 0);
                obj[9].init(19, 15, 255, 0, 0);
                obj[10].init(1, 6, 255, 0, 0);
                obj[11].init(27, 6, 255, 0, 0);
                obj[12].init(29, 5, 255, 0, 0);
                obj[13].init(33, 6, 255, 0, 0);
                obj[14].init(33, 14, 255, 0, 0);

                obj[15].init(2, 10, 0, 255, 0);
                obj[16].init(5, 5, 0, 255, 0);
                obj[17].init(20, 1, 0, 255, 0);
                obj[18].init(22, 4, 0, 255, 0);
                obj[19].init(29, 14, 0, 255, 0);
                obj[20].init(33, 5, 0, 255, 0);

                obj[21].init(2, 19, 255, 255, 255);
                obj[22].init(10, 6, 255, 255, 255);

                obj[23].init(7, 8, 255, 255, 255);
                obj[24].init(14, 5, 255, 255, 255);

                obj[25].init(4, 20, 255, 255, 255);
                obj[26].init(4, 14, 255, 0, 0);
                obj[27].init(10, 14 , 255, 255, 255);
                obj[28].init(0, 0, 0, 255, 0);
                obj[29].init(15, 7, 255, 255, 255);
                obj[30].init(17, 10, 255, 255, 255);
                obj[31].init(21, 8, 255, 255, 0);
                obj[32].init(36, 9, 255, 255, 0);
                obj[33].init(28, 18, 0, 0, 0);

                obj[34].init(0, 20, 255, 255, 255);
                obj[35].init(0, 15, 255, 255, 255);
                obj[36].init(4, 4, 255, 255, 255);
                obj[37].init(5, 10, 255, 255, 255);
                obj[38].init(7, 4, 255, 255, 255);
                obj[39].init(10, 7, 255, 255, 255);
                obj[40].init(10, 4, 255, 255, 255);
                obj[41].init(21, -1, 255, 255, 255);
                obj[42].init(21, 10, 255, 255, 255);
                obj[43].init(21, 20, 255, 255, 255);
                obj[44].init(28, -1, 255, 255, 255);
                obj[45].init(31, 4, 255, 255, 255);
                obj[46].init(31, 11, 255, 255, 255);
                obj[47].init(35, 4, 255, 255, 255);
                obj[48].init(30, 0, 255, 255, 255);
                obj[49].init(33, 0, 255, 255, 255);
                obj[50].init(36, 0, 255, 255, 255);
                obj[66].init(24, -1, 255, 255, 255);

                obj[51].init(0, 14, 255, 255, 255);
                obj[52].init(11, 3, 255, 255, 255);
                obj[53].init(14, 3, 255, 255, 255);
                obj[54].init(15, 3, 255, 255, 255);
                obj[55].init(19, 3, 255, 255, 255);
                obj[56].init(22, 10, 255, 255, 255);
                obj[57].init(23, 10, 255, 255, 255);
                obj[58].init(25, 15, 255, 255, 255);
                obj[59].init(26, 15, 255, 255, 255);
                obj[60].init(27, 15, 255, 255, 255);
                obj[67].init(20, 19, 255, 255, 255);             
                obj[68].init(31, 19, 255, 255, 255);             

                obj[61].init(7, 1, 255, 255, 255);
                obj[62].init(24, 0, 255, 255, 255);
                obj[63].init(12, 5, 255, 255, 255);
                obj[64].init(36, 1, 255, 255, 255);
                obj[65].init(11, 11, 255, 255, 255);

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
                obj[7].checkClash(chr);
                obj[8].checkClash(chr);
                obj[9].checkClash(chr);
                obj[10].checkClash(chr);
                obj[11].checkClash(chr);
                obj[12].checkClash(chr);
                obj[13].checkClash(chr);
                obj[14].checkClash(chr);
                obj[15].checkClash(chr);
                obj[16].checkClash(chr);
                obj[17].checkClash(chr);
                obj[18].checkClash(chr);
                obj[19].checkClash(chr);
                obj[20].checkClash(chr);

                obj[21].checkClash(chr, obj);
                obj[22].checkClash(chr, obj);

                obj[23].setClash(chr);
                obj[24].setClash(chr);

                obj[25].setClash(bg);
                obj[26].setClash(bg);
                obj[27].setClash(bg);
                obj[28].setClash(bg);
                obj[29].setClash(bg);
                obj[30].setClash(bg);
                obj[31].setClash(bg);
                obj[32].setClash(bg);
                obj[33].setClash(bg);
   
                obj[51].checkClash(chr);
                obj[52].checkClash(chr);
                obj[53].checkClash(chr);
                obj[54].checkClash(chr);
                obj[55].checkClash(chr);
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
                obj[67].checkClash(chr);
                obj[68].checkClash(chr);

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

                    new OneWayWall(1, 2, "left"),
                    new OneWayWall(1, 2, "left"),

                    new BreakFloor(2, 1, 25),
                    new BreakFloor(3, 3, 25),

                    new WarpPortal("floor", 0, 1),
                    new WarpPortal("floor", 1, 0),

                    new ColorChanger(2, 1, "inv"),
                    new ColorChanger(2, 1, "inv"),
                    new ColorChanger(2, 1, "red"),
                    new ColorChanger(2, 1, "green"),
                    new ColorChanger(1, 2, "red"),

                    new TransRectClass(2, 1),
                    new TransRectClass(2, 1),
                    new TransRectClass(2, 1),
                    new TransRectClass(2, 1),
                    new TransRectClass(2, 1),
                    new TransRectClass(2, 1),
                    new TransRectClass(2, 1),

                    new TransRectClass(1, 2),
                    new TransRectClass(1, 2),
                    new TransRectClass(1, 2),
                    new TransRectClass(1, 2),
                    new TransRectClass(1, 2),

                    new TransRectClass(1, 3),

                    new RectClass(38, 1),
                    new RectClass(6, 1),
                    new RectClass(1, 4),
                    new RectClass(6, 1),
                    new RectClass(1, 4),
                    new RectClass(11, 1),
                    new RectClass(1, 4),
                    new RectClass(5, 1),
                    new RectClass(1, 6),
                    new RectClass(5, 1),

                    new RectClass(1, 7),
                    new RectClass(4, 1),
                    new RectClass(1, 5),
                    new RectClass(4, 1),
                    new RectClass(5, 1),
                    new RectClass(8, 1),
                    new RectClass(1, 7),
                    new RectClass(5, 1),
                    new RectClass(1, 4),
                    new RectClass(13, 1),

                    new RectClass(4, 1),
                    new RectClass(1, 7),
                    new RectClass(1, 6),
                    new RectClass(3, 1),
                    new RectClass(3, 1),
                    new RectClass(1, 3),
                    new RectClass(1, 4),
                    new RectClass(3, 1),
                    new RectClass(1, 7),
                    new RectClass(7, 1),

                    new RectClass(1, 4),
                    new RectClass(3, 1),
                    new RectClass(1, 4),
                    new RectClass(3, 1),
                    new RectClass(1, 4),
                    new RectClass(1, 1),
                    new RectClass(1, 3),
                    new RectClass(3, 1),
                    new RectClass(1, 3),
                    new RectClass(1, 7),

                    new RectClass(2, 1),
                    new RectClass(2, 1),
                    new RectClass(4, 1),
                    new RectClass(1, 17),
                    new RectClass(38, 3),

                    new GravityButton("floor"),
                    new GravityButton("floor"),
                    new GravityButton("floor"),
                    new GravityButton("floor"),
                    new GravityButton("floor"),
                    new GravityButton("floor"),
                    new GravityButton("floor"),
                    new GravityButton("floor"),

                    new GravityButton("ceiling"),
                    new GravityButton("ceiling"),
                    new GravityButton("ceiling"),
                    new GravityButton("ceiling"),
                    new GravityButton("ceiling"),
                    new GravityButton("ceiling"),
                    new GravityButton("ceiling"),
                    new GravityButton("ceiling"),

                    new RectClass(1, 3),
                    new RectClass(1, 1),
                    new UnjumpableSign()
                ];

                // 初期化
                bg.setRGB(0, 0, 0);
                chr.init(0, 18, 255, 255, 255);
                obj[0].init(37, 17, 255, 255, 255);

                obj[1].init(21, 17, 255, 255, 255);
                obj[2].init(24, 17, 255, 255, 255);

                obj[3].init(35, 13, 255, 255, 255);
                obj[4].init(34, 16, 255, 255, 255);

                obj[5].init(19, 12, 255, 255, 255);
                obj[6].init(19, 9, 255, 255, 255);

                obj[7].init(18, 3, 0, 0, 0);
                obj[8].init(35, 9, 0, 0, 0);
                obj[9].init(35, 10, 255, 0, 0);
                obj[10].init(21, 3, 0, 255, 0);
                obj[11].init(20, 0, 255, 0, 0);

                obj[12].init(30, 13, 255, 0, 0);
                obj[13].init(21, 10, 255, 255, 0);
                obj[14].init(22, 16, 255, 255, 0);
                obj[15].init(25, 16, 255, 255, 0);
                obj[16].init(28, 13, 255, 255, 0);
                obj[17].init(29, 4, 255, 255, 0);
                obj[18].init(22, 13, 255, 255, 255);

                obj[19].init(20, 8, 255, 0, 0);
                obj[20].init(20, 11, 255, 0, 0);
                obj[21].init(27, 14, 255, 0, 0);
                obj[22].init(36, 17, 255, 255, 0);
                obj[23].init(23, 8, 255, 255, 255);

                obj[24].init(34, 5, 255, 0, 0);

                obj[25].init(0, -1, 255, 255, 255);
                obj[26].init(2, 1, 255, 255, 255);
                obj[27].init(2, 1, 255, 255, 255);
                obj[28].init(2, 4, 255, 255, 255);
                obj[29].init(7, 4, 255, 255, 255);
                obj[30].init(7, 7, 255, 255, 255);
                obj[31].init(10, 1, 255, 255, 255);
                obj[32].init(10, 4, 255, 255, 255);
                obj[33].init(12, 5, 255, 255, 255);
                obj[34].init(13, 1, 255, 255, 255);

                obj[35].init(17, 1, 255, 255, 255);
                obj[36].init(12, 10, 255, 255, 255);
                obj[37].init(15, 10, 255, 255, 255);
                obj[38].init(12, 13, 255, 255, 255);
                obj[39].init(0, 7, 255, 255, 255);
                obj[40].init(2, 10, 255, 255, 255);
                obj[41].init(9, 10, 255, 255, 255);
                obj[42].init(2, 13, 255, 255, 255);
                obj[43].init(6, 13, 255, 255, 255);
                obj[44].init(6, 16, 255, 255, 255);

                obj[45].init(0, 16, 255, 255, 255);
                obj[46].init(18, 10, 255, 255, 255);
                obj[47].init(20, 2, 255, 255, 255);
                obj[48].init(18, 10, 255, 255, 255);
                obj[49].init(19, 13, 255, 255, 255);
                obj[50].init(21, 14, 255, 255, 255);
                obj[51].init(24, 13, 255, 255, 255);
                obj[52].init(23, 1, 255, 255, 255);
                obj[53].init(23, 1, 255, 255, 255);
                obj[54].init(23, 10, 255, 255, 255);

                obj[55].init(29, 7, 255, 255, 255);
                obj[56].init(29, 7, 255, 255, 255);
                obj[57].init(26, 4, 255, 255, 255);
                obj[58].init(26, 4, 255, 255, 255);
                obj[59].init(28, 0, 255, 255, 255);
                obj[60].init(27, 16, 255, 255, 255);
                obj[61].init(31, 2, 255, 255, 255);
                obj[62].init(31, 2, 255, 255, 255);
                obj[63].init(34, 2, 255, 255, 255);
                obj[64].init(34, 8, 255, 255, 255);

                obj[65].init(32, 10, 255, 255, 255);
                obj[66].init(32, 13, 255, 255, 255);
                obj[67].init(30, 16, 255, 255, 255);
                obj[68].init(37, 0, 255, 255, 255);
                obj[69].init(0, 19, 255, 255, 255);
                obj[86].init(27, 11, 255, 255, 255);
                obj[87].init(36, 16, 255, 255, 255);

                obj[70].init(3, 18, 255, 255, 255);
                obj[71].init(8, 15, 255, 255, 255);
                obj[72].init(8, 6, 255, 255, 255);
                obj[73].init(13, 6, 255, 255, 255);
                obj[74].init(14, 12, 255, 255, 255);
                obj[75].init(17, 15, 255, 255, 255);
                obj[76].init(28, 9, 255, 255, 255);
                obj[77].init(30, 18, 255, 255, 255);

                obj[78].init(3, 11, 255, 255, 255);
                obj[79].init(3, 8, 255, 255, 255);
                obj[80].init(3, 2, 255, 255, 255);
                obj[81].init(20, 14, 255, 255, 255);
                obj[82].init(21, 0, 255, 255, 255);
                obj[83].init(33, 14, 255, 255, 255);
                obj[84].init(32, 3, 255, 255, 255);
                obj[85].init(36, 0, 255, 255, 255);

                obj[88].init(1, 18, 255, 255, 255);

                // スタート地点の設定
                setStartPoint(chr);
                
                // stateの更新
                state = "draw";

            } else if (state == "draw") {
                // 背景の描画
                bg.push();

                // 各種処理
                obj[1].setClash(chr);
                obj[2].setClash(chr);

                obj[3].checkClash(chr);
                obj[4].checkClash(chr);

                obj[5].checkClash(chr, obj);
                obj[6].checkClash(chr, obj);

                obj[7].checkClash(chr);
                obj[8].checkClash(chr);
                obj[9].checkClash(chr);
                obj[10].checkClash(chr);
                obj[11].checkClash(chr);

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
                obj[81].checkClash(chr);
                obj[82].checkClash(chr);
                obj[83].checkClash(chr);
                obj[84].checkClash(chr);
                obj[85].checkClash(chr);

                clash(chr, obj);
                chr.checkOffScreen();
                chr.setJumpenable(false);
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
                    nextstage = "1-1";
                    scene = "world4"
                    state = "clear";
                    isImgLoad = false;
                    deleteStageImg();
                }
            }
            break;
        }
    }
}