/* 背景クラス */
class BackGroundClass {
    constructor() {
        this.red = 0;
        this.green = 0;
        this.blue = 0;
    }

    // 描画
    push() {
        background(this.red, this.green, this.blue);
    }

    // アクセッサ
    getRed() { return this.red; }
    getGreen() { return this.green; }
    getBlue() { return this.blue; }
    setRGB(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
}