var x = true;
var y  ;
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
        this.foxi.scale.setTo(3);
        this.foxi.inputEnabled = true;

        this.foxi.events.onInputDown.add(this.switchAnimations,this);

        this.foxr = this.game.add.sprite(this.game.world.centerX+200,this.game.world.centerY,"foxr");
        this.foxr.anchor.setTo(0.5);
        this.foxr.scale.setTo(3);
        this.foxr.inputEnabled = true;

        this.foxr.events.onInputDown.add(this.switchAnimations,this);


        this.foxi.animations.add('idle',[0,1,2,3,4,5,6,7,8],10,true);
        this.foxr.animations.add('run',[0,1,2,3,4,5,6,7],10,true)

        this.foxi.animations.play('idle');


    },
    preload:function(){
        this.load.image('background','images/vortex.png')
        this.load.spritesheet("foxi","images/foxi.png",17,16,9,0,0);
        this.load.spritesheet("foxr","images/foxr.png",19,16,8,0,0);


    },

    switchAnimations: function(){
        console.log('yay')

        if(){
            this.foxi.animations.stop('idle');
            this.runAnimate();
            console.log('played run')
        } 
         else{
            this.foxr.animations.stop('run');
            this.idleAnimate();
            console.log('played idle')
        }
       
    },
    idleAnimate: function(){
        this.foxi.animations.play('idle')
         

    },
    runAnimate: function(){
        this.foxr.animations.play('run')
    }

};
var game = new Phaser.Game(800,600,Phaser.AUTO);


game.state.add('GameState',GameState)
game.state.start('GameState');