var game = new Phaser .Game(360,640,Phaser.AUTO);

var GameState = {
    init: function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVerticaly = true;

    },
    create :function(){
        

    }

};

Game.state.start('GameState');