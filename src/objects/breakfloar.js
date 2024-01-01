//壊れる床を実装するクラス
class BreakFloar extends ObjectClass{
    //コンストラクタ
    constructor(width_block, height_block,dy){
        super(width_block, height_block, true);
        this.BreakDy=dy;   //床を壊せる最低値の速度
        this.Break=false;
    }

        // 描画メソッド
    push() {
        //壊れていない時
        if(!this.Break){
        fill(this.red, this.green, this.blue);
        noStroke();
        rect(this.x, this.y, this.width, this.height);
        }
        //壊れたときは透過できるようにする。
        else if(this.Break){
            if(bg.getRed()==0){
                fill(255,255,255,0);
                rect(this.x,this.y,this.wirth,this.height);
            }else if(bg.getRed()==255){
                fill(0,0,0,0);
                rect(this.x,this.y,this.wirth,this.height);
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
        //this.changed = (touch == 4) = chr.getDY()>=this.BreakDy? true : false;
        if (touch == 4 && !(this.changed) && chr.getDY()>=this.BreakDy) {
                this.Break=true
                this.changed = true;
                this.width=0;
                this.height=0;     //物体としての物理的性質をなくす
            } else if (touch != 4) {
                this.changed = false;
            }
        }
    }