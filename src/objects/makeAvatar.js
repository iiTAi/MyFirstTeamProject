//分身の生成クラスMakeAvatar
class MakeAvatar {
    //コンストラクタ
    constructor(){
        this.Avatars = [];  //分身を保存する配列
        this.AvatersLimit = 3;  //分身の制限数
    }

    //分身を作成する
    createAvatar(x_block, y_block){
        if(this.Avatars.length < this.AvatersLimit){
            const avatar = new CharaClass();
            avatar.init(x_block, y_block, 128, 128, 128); //灰色で指定
        }
    }
}