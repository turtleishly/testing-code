
var GameState = {
    init: function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVerticaly = true;

    },
    create :function(){

        this.background = this.game.add.sprite(0,0,'background');


    },
    preload:function(){
        this.load.image('background','images/vortex.png')
    }

};
var game = new Phaser.Game(1000,1000,Phaser.AUTO);


game.state.add('GameState',GameState)
game.state.start('GameState');