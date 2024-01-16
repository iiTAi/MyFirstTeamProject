// 壊れる床を実装するクラス
class BreakFloor extends ObjectClass{
    // コンストラクタ
    constructor(width_block, height_block, dy){
        super(width_block, height_block, true);
        this.BreakDy = dy;   // 床を壊せる最低値の速度
        this.Broken = false;  // 壊れたかどうかの判定
    }

        // 描画メソッド
    push() {
        // 壊れていない時
        if(!this.Broken){
            fill(this.red, this.green, this.blue);
            if (this.red + this.green + this.blue >= 765) {
                stroke(bg.getRed(), bg.getGreen(), bg.getBlue());
            } else {
                stroke(255);
            }
            rect(this.x, this.y, this.width, this.height);

            strokeWeight(2);
            for(let i = 0; i < this.width / 50; i++){
                for(let j = 0; j < this.height / 50; j++){
                    line(this.x + 50/3 + 5 + i * 50, this.y + j * 50, this.x + 50/3 + 5 + i * 50 - 10, this.y + j * 50 + 10);
                    line(this.x + 50/3 + 5 + i * 50 - 10, this.y + j * 50 + 10, this.x + 50/3 + 5 + i * 50, this.y + j * 50 + 20);
                    line(this.x + 50/3 + 5 + i * 50, this.y + j * 50 + 20, this.x + 50/3 + 5 + i * 50 - 10, this.y + j * 50 + 30);

                    line(this.x + 100/3 - 5 + i * 50, this.y + 50 + j * 50, this.x + 100/3 - 5 + i * 50 + 10, this.y + 50 + j * 50 - 10);
                    line(this.x + 100/3 - 5 + i * 50 + 10, this.y + 50 + j * 50 - 10, this.x + 100/3 - 5 + i * 50, this.y + 50 + j * 50 - 20);
                    line(this.x + 100/3 - 5 + i * 50, this.y + 50 + j * 50 - 20, this.x + 100/3 - 5 + i * 50 + 10, this.y + 50 + j * 50 - 30);
                }
            }
            strokeWeight(1);
            
            if (this.red + this.green + this.blue != 765) {
                fill(0, 0, 0, 60);
                rect(this.x, this.y, this.width, this.height);
            }    
        }
        // 壊れたときは透明になる
        else if(this.Broken){
            fill(this.red, this.green, this.blue, 0);
            noStroke();
            rect(this.x, this.y, this.width, this.height);
        }
    }
    
    
        // 壊れるかどうかの判定
    checkClash(chr) {
        // 物体との衝突を判定
        let touch = 0;
        touch += (chr.getX() >= this.x - chr.getWidth()) ? 1 : 0;
        touch += (chr.getX() <= this.x + this.width) ? 1 : 0;
        touch += (chr.getY() >= this.y - chr.getHeight()) ? 1 : 0;
        touch += (chr.getY() <= this.y + this.height) ? 1 : 0;

        // 衝突した際の処理
        if (touch == 4 && (chr.getDY() >= this.BreakDy || chr.getDY() <= -this.BreakDy) && !(this.Broken)) {
                this.Broken = true
                this.clashenable = false; // 衝突判定を無効化
                chr.setDY(0);
            }
        }
    }