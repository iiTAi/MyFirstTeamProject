/*--- world1 ---*/
function world1() {
  switch (stage) {
    case "1-1": {
      if (state == "setup") {
        // インスタンスの更新
        chr = new CharaClass();
        bg = new BackGroundClass();
        obj = [
          new ClearLine(1, 2),
          new ColorChanger(2, 1, "inv"),
          new TransRectClass(1, 2),
          new RectClass(37, 3),
          new RectClass(6, 1),
          new RectClass(1, 10),
          new RectClass(12, 2),
          new RectClass(10, 2),
          new RectClass(8, 2),
          new RectClass(6, 1),
        ];

        // 初期化
        bg.setRGB(0, 0, 0);
        chr.init(4, 0, 255, 255, 255);
        obj[0].init(37, 11, 255, 255, 255);
        obj[1].init(22, 9, 0, 0, 0);
        obj[2].init(32, 11, 255, 255, 255);
        obj[3].init(1, 19, 255, 255, 255);
        obj[4].init(24, 9, 255, 255, 255);
        obj[5].init(21, 0, 255, 255, 255);
        obj[6].init(26, 17, 255, 255, 255);
        obj[7].init(28, 15, 255, 255, 255);
        obj[8].init(30, 13, 255, 255, 255);
        obj[9].init(32, 10, 255, 255, 255);
        setStartPoint(chr);
        // stateの更新
        state = "draw";
      } else if (state == "draw") {
        // 背景の描画
        bg.push();
        // 各種処理
        obj[2].setClash(bg);
        obj[1].checkClash(chr);
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
      // 要：逆さ向きの時の当たり判定の調整
      if (state == "setup") {
        // インスタンスの更新
        chr = new CharaClass();
        bg = new BackGroundClass();
        obj = [
          new ClearLine(1, 2, 0, 1),
          new GravityButton("floor"),
          new GravityButton("ceiling"),
          new RectClass(2, 2),
          new RectClass(4, 2),
          new RectClass(6, 2),
          new RectClass(10, 3),
          new RectClass(38, 3),
          new RectClass(10, 3),
          new RectClass(1, 1),
        ];

        // 初期化
        bg.setRGB(0, 0, 0);
        chr.init(0, 12, 255, 255, 255);
        obj[0].init(37, 17, 255, 255, 255);
        obj[1].init(6, 18, 255, 255, 255);
        obj[2].init(28, 2, 255, 255, 255);
        obj[3].init(0, 13, 255, 255, 255);
        obj[4].init(0, 15, 255, 255, 255);
        obj[5].init(0, 17, 255, 255, 255);
        obj[6].init(0, 19, 255, 255, 255);
        obj[7].init(0, -1, 255, 255, 255);
        obj[8].init(28, 19, 255, 255, 255);
        obj[9].init(37, 16, 255, 255, 255);
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
    case "2-2": {
      if (state == "setup") {
        // インスタンスの更新
        chr = new CharaClass();
        bg = new BackGroundClass();
        obj = [
          new ClearLine(1, 2),
          new GravityButton("floor"),
          new GravityButton("ceiling"),
          new ColorChanger(4, 1, "inv"),
          new ColorChanger(1, 1, "inv"),
          new TransRectClass(12, 3),
          new TransRectClass(1, 5),
          new TransRectClass(1, 7),
          new TransRectClass(1, 1),
          new RectClass(3, 10),
          new RectClass(1, 1),
          new RectClass(1, 1),
          new RectClass(6, 3),
          new RectClass(6, 3),
          new ClearLine(1, 2, 1, 0),
        ];

        // 初期化
        bg.setRGB(0, 0, 0);
        chr.init(0, 18, 255, 255, 255);
        obj[0].init(37, 17, 255, 255, 255);
        obj[1].init(5, 18, 255, 255, 255);
        obj[2].init(28, 9, 255, 255, 255);
        obj[3].init(8, 4, 0, 0, 0);
        obj[4].init(19, 9, 0, 0, 0);
        obj[5].init(0, -1, 0, 0, 0);
        obj[6].init(15, -1, 255, 255, 255);
        obj[7].init(19, -1, 255, 255, 255);
        obj[8].init(19, 6, 0, 0, 0);
        obj[9].init(26, -1, 255, 255, 255);
        obj[10].init(0, 16, 255, 255, 255);
        obj[11].init(37, 16, 255, 255, 255);
        obj[12].init(0, 19, 255, 255, 255);
        obj[13].init(32, 19, 255, 255, 255);
        obj[14].init(0, 17, 255, 255, 255);
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
        // 前画面に戻る処理
        if (obj[14].checkBack(chr)) {
          stage = "2-1";
          state = "setup";
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
          new ClearLine(1, 2, 0, 1),
          new WarpPortal("floor", 0, 1),
          new WarpPortal("floor", 1, 0),
          new RectClass(1, 1),
          new RectClass(1, 1),
          new RectClass(38, 3),
          new RectClass(2, 20),
          new RectClass(3, 1),
          new RectClass(3, 1),
        ];

        // 初期化
        bg.setRGB(0, 0, 0);
        chr.init(0, 18, 255, 255, 255);
        obj[0].init(37, 17, 255, 255, 255);
        obj[1].init(14, 15, 255, 255, 255);
        obj[2].init(23, 15, 255, 255, 255);
        obj[3].init(0, 16, 255, 255, 255);
        obj[4].init(37, 16, 255, 255, 255);
        obj[5].init(0, 19, 255, 255, 255);
        obj[6].init(18, -1, 255, 255, 255);
        obj[7].init(13, 16, 255, 255, 255);
        obj[8].init(22, 16, 255, 255, 255);
        // スタート地点の設定
        setStartPoint(chr);
        // stateの更新
        state = "draw";
      } else if (state == "draw") {
        // 背景の描画
        bg.push();
        // 各種処理
        obj[1].checkClash(chr, obj);
        obj[2].checkClash(chr, obj);
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
          stage = "3-2";
          state = "setup";
          isImgLoad = false;
          deleteStageImg();
        }
      }
      break;
    }
    case "3-2": {
      if (state == "setup") {
        // インスタンスの更新
        chr = new CharaClass();
        bg = new BackGroundClass();
        obj = [
          new ClearLine(1, 2),
          new ColorChanger(1, 8, "inv"),
          new TransRectClass(1, 8),
          new TransRectClass(1, 8),
          new TransRectClass(1, 8),
          new WarpPortal("floor", 0, 1),
          new WarpPortal("floor", 1, 0),
          new WarpPortal("floor", 2, 4),
          new WarpPortal("floor", 3, 6),
          new WarpPortal("floor", 4, 2),
          new WarpPortal("floor", 5, 2),
          new WarpPortal("floor", 6, 3),
          new RectClass(38, 3),
          new RectClass(38, 3),
          new RectClass(38, 1),
          new RectClass(2, 17),
          new RectClass(1, 1),
          new RectClass(1, 1),
          new ClearLine(1, 2, 1, 0),
        ];

        // 初期化
        bg.setRGB(0, 0, 0);
        chr.init(0, 18, 255, 255, 255);
        obj[0].init(37, 17, 255, 255, 255);
        obj[1].init(9, 2, 0, 0, 0);
        obj[2].init(7, 2, 0, 0, 0);
        obj[3].init(11, 2, 255, 255, 255);
        obj[4].init(36, 11, 255, 255, 255);
        obj[5].init(17, 18, 255, 255, 255);
        obj[6].init(37, 9, 255, 255, 255);
        obj[7].init(28, 9, 255, 255, 255);
        obj[8].init(20, 9, 255, 255, 255);
        obj[9].init(0, 9, 255, 255, 255);
        obj[10].init(17, 9, 255, 255, 255);
        obj[11].init(20, 18, 255, 255, 255);
        obj[12].init(0, -1, 255, 255, 255);
        obj[13].init(0, 19, 255, 255, 255);
        obj[14].init(0, 10, 255, 255, 255);
        obj[15].init(18, 2, 255, 255, 255);
        obj[16].init(0, 16, 255, 255, 255);
        obj[17].init(37, 16, 255, 255, 255);
        obj[18].init(0, 17, 255, 255, 255);

        // stateの更新
        state = "draw";
      } else if (state == "draw") {
        // 背景の描画
        bg.push();
        // 各種処理
        obj[1].checkClash(chr);
        obj[2].setClash(bg);
        obj[3].setClash(bg);
        obj[4].setClash(bg);
        obj[5].checkClash(chr, obj);
        obj[6].checkClash(chr, obj);
        obj[7].checkClash(chr, obj);
        obj[8].checkClash(chr, obj);
        obj[9].checkClash(chr, obj);
        obj[10].checkClash(chr, obj);
        obj[11].checkClash(chr, obj);
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
        // 前画面に戻る処理
        if (obj[18].checkBack(chr)) {
          stage = "3-1";
          state = "setup";
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
                new WarpPortal("floor", 0, 1),
                new WarpPortal("floor", 1, 0),
                new RectClass(10, 3),
                new RectClass(10, 3),
                new RectClass(14, 2),
                new RectClass(1, 1),
                new UnjumpableSign(),
                new ClearLine(1, 2, 0, 1),
            ];

            // 初期化
            bg.setRGB(0, 0, 0);
            chr.init(0, 18, 255, 255, 255);
            obj[0].init(37, 17, 255, 255, 255);
            obj[1].init(25, 19, 255, 255, 255);
            obj[2].init(28, 18, 255, 255, 255);
            obj[3].init(0, 19, 255, 255, 255);
            obj[4].init(28, 19, 255, 255, 255);
            obj[5].init(12, 20, 255, 255, 255);
            obj[6].init(37, 16, 255, 255, 255);
            obj[7].init(2, 18, 255, 255, 255);
            // stateの更新
            state = "draw";

        } else if (state == "draw") {
            // 背景の描画
            bg.push();
            // 各種処理
            obj[1].checkClash(chr, obj);
            obj[2].checkClash(chr, obj);
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
                stage = "4-2";
                state = "setup";
            }
        }
        break;
    }
    case "4-2": {
        if (state == "setup") {
            // インスタンスの更新
            chr = new CharaClass();
            bg = new BackGroundClass();
            obj = [
              new ClearLine(1, 2),
              new ClearLine(1, 2, 1, 0),
              new WarpPortal("floor", 0, 1),
              new WarpPortal("floor", 1, 0),
              new WarpPortal("floor", 2, 3),
              new WarpPortal("floor", 3, 2),
              new GravityButton("floor"),
              new GravityButton("floor"),
              new GravityButton("ceiling"),
              new GravityButton("ceiling"),
              new ColorChanger(1, 1, "inv"),
              new ColorChanger(1, 1, "inv"),
              new TransRectClass(2, 1),
              new TransRectClass(1, 1),
              new TransRectClass(2, 1),
              new TransRectClass(1, 2),
              new UnjumpableSign(),
              new RectClass(10, 3), 
              new RectClass(10, 3), 
              new RectClass(10, 3), 
              new RectClass(24, 3), 
              new RectClass(1, 12), 
              new RectClass(17, 1), 
              new RectClass(1, 4), 
              new RectClass(6, 1), 
              new RectClass(1, 1), 
              new RectClass(10, 1), 
              new RectClass(6, 1), 
              new RectClass(7, 8), 
              new RectClass(5, 1), 
              new RectClass(2, 1),
              new TransRectClass(1, 4)
            ];

            // 初期化
            bg.setRGB(0, 0, 0);
            chr.init(0, 18, 255, 255, 255);
            obj[0].init(37, 17, 255, 255, 255);
            obj[1].init(0, 17, 255, 255, 255);
            
            obj[2].init(8, 18, 255, 255, 255);
            obj[3].init(1, 5, 255, 255, 255);
            obj[4].init(1, 10, 255, 255, 255);
            obj[5].init(24, 1, 255, 255, 255);
            
            obj[6].init(15, 18, 255, 255, 255);
            obj[7].init(27, 13, 255, 255, 255);
            obj[8].init(3, 7, 255, 255, 255);
            obj[9].init(20, 1, 255, 255, 255);

            obj[10].init(17, 7, 0, 0, 0);
            obj[11].init(26, 10, 0, 0, 0);

            obj[12].init(17, 11, 255, 255, 255);
            obj[13].init(24, 10, 255, 255, 255);
            obj[14].init(29, 11, 0, 0, 0);
            obj[15].init(36, 17, 0, 0, 0);
            obj[31].init(19, 7, 0, 0, 0);

            obj[16].init(2, 18, 255, 255, 255);

            obj[17].init(0, 19, 255, 255, 255);
            obj[18].init(14, 19, 255, 255, 255);
            obj[19].init(28, 19, 255, 255, 255);
            obj[20].init(0, -1, 255, 255, 255);
            obj[21].init(31, 2, 255, 255, 255);
            obj[22].init(0, 6, 255, 255, 255);
            obj[23].init(11, 7, 255, 255, 255);
            obj[24].init(11, 11, 255, 255, 255);
            obj[25].init(17, 8, 255, 255, 255);
            obj[26].init(19, 11, 255, 255, 255);
            obj[27].init(26, 14, 255, 255, 255);
            obj[28].init(24, 2, 255, 255, 255);
            obj[29].init(0, 11, 255, 255, 255);
            obj[30].init(36, 16, 255, 255, 255);
            // stateの更新
            state = "draw";

        } else if (state == "draw") {
            // 背景の描画
            bg.push();
            // 各種処理
            obj[2].checkClash(chr, obj);
            obj[3].checkClash(chr, obj);
            obj[4].checkClash(chr, obj);
            obj[5].checkClash(chr, obj);

            obj[6].checkClash(chr);
            obj[7].checkClash(chr);
            obj[8].checkClash(chr);
            obj[9].checkClash(chr);

            obj[10].checkClash(chr);
            obj[11].checkClash(chr);

            obj[12].setClash(bg);
            obj[13].setClash(bg);
            obj[14].setClash(bg);
            obj[15].setClash(bg);
            obj[31].setClash(bg);

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
            if (obj[1].checkBack(chr)) {
              stage = "4-1";
              state = "setup";
            }
            if (obj[0].checkClear(chr)) {
              nextstage = "5-1";
              state = "clear";
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
