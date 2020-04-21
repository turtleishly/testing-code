
var GameState = {
    init: function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVerticaly = true;

    },
    create :function(){
        this.background = this.game.add.sprite(0,0,'background');

        this.foxi = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"foxi");
        this.foxi.anchor.setTo(0.5);

    },
    preload:function(){
        this.load.image('background','images/vortex.png')
        this.load.spritesheet("foxi","images/foxi.png",19,16,8,0,0);
        this.load.spritesheet("foxr","images/foxr.png",17,16,9,0,0);


    }

};
var game = new Phaser.Game(800,600,Phaser.AUTO);


game.state.add('GameState',GameState)
game.state.start('GameState');