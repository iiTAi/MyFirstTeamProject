//壊れる床を実装するクラス
class BreakFloor extends ObjectClass{
    //コンストラクタ
    constructor(width_block, height_block, dy){
        super(width_block, height_block, true);
        this.BreakDy = dy;   //床を壊せる最低値の速度
        this.Broken = false;  //壊れたかどうかの判定
    }

        // 描画メソッド
    push() {
        //壊れていない時
        if(!this.Broken){
        fill(this.red, this.green, this.blue);
        noStroke();
        rect(this.x, this.y, this.width, this.height);
        }
        //壊れたときは背景と同化できるようにする。
        else if(this.Broken){
            if(bg.getRed() == 0){
                fill(255,255,255);
                rect(this.x,this.y,this.width,this.height);
            }else if(bg.getRed() == 255){
                fill(0,0,0);
                rect(this.x,this.y,this.width,this.height);
            }
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
        //this.changed = (touch == 4) = chr.getDY() >= this.BreakDy? true : false;
        if (touch == 4 && !(this.changed) && chr.getDY() >= this.BreakDy) {
                this.Broken = true
                this.changed = true;
                this.clashenable = false;
            } else {
                this.changed = false; //
            }
        }
    }