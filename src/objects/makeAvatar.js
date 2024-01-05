//分身の生成クラスMakeAvatar
class MakeAvatar extends ObjectClass{
    //コンストラクタ
    constructor(){
        super(1,1,true);
        this.AvatarCreate = false; //分身が他に存在しているのかを確かめるフラグ
        this.clashenable = true;   
    }

    //分身を作成する
    createAvatar(x_block, y_block){
        if(this.AvatarCreate){  
            //既に分身が存在している場合は削除
            if(bg.getRed() == 0){
                fill(255,255,255);
                rect(this.x,this.y,this.width,this.height);
            }else if(bg.getRed() == 255){
                fill(0,0,0);
                rect(this.x,this.y,this.width,this.height);
            }
            this.avatarCreate = false;  
            this.clashenable = false;  //触れなくする
        }else if(!this.AvatarCreate){ 
            //分身が存在しない場合は作成
            this.init(x_block, y_block, 128, 128, 128);  //灰色で分身作成
            this.AvatarCreate = true;
            this.clashenable = true;
        }
    }

    //分身が存在するかを確認するメソッド
    CheckAvatar(){
        return this.AvatarCreate;
    }
}