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
        if (this.red + this.green + this.blue != 765) {
            fill(0, 0, 0, 60);
            rect(0, 0, 1920, 1080);
        }
        if (this.red == 0) {
            fill(255);
        } else {
            fill(0);
        }
        noStroke();
        rect(0, 0, 10, 1080);
        rect(1909, 0, 10, 1080);
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