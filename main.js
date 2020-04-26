var Foxspeed = 5;
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

        this.foxr = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"foxr");
        this.foxr.anchor.setTo(0.5);
        this.foxr.scale.setTo(3);
        this.foxr.inputEnabled = true;

        this.foxi.animations.add('idle',[0,1,2,3,4,5,6,7,8],10,true);
        this.foxr.animations.add('run',[0,1,2,3,4,5,6,7],15,true)

        this.foxi.animations.play('idle');
        this.foxr.animations.play('run')
        this.foxr.alpha = 0;

        this.randomApple()

      
    },
    preload:function(){
        this.load.image('background','images/vortex.png');
        this.load.image('apple','images/apple.png');
        this.load.spritesheet("foxi","images/foxi.png",17,16,9,0,0);
        this.load.spritesheet("foxr","images/foxr.png",19,16,8,0,0);


    },
    update:function(){
        this.foxi.x = this.foxr.x
        this.foxi.y = this.foxr.y
        if(game.input.keyboard.isDown(Phaser.Keyboard.W)){
            this.foxr.y = this.foxr.y - Foxspeed;
            this.foxr.alpha = 1
            this.foxi.alpha = 0


        }else if (game.input.keyboard.isDown(Phaser.Keyboard.A)){
            this.foxr.x = this.foxr.x - Foxspeed;
            this.foxr.scale.setTo(-3,3);
            this.foxi.scale.setTo(-3,3);
            this.foxr.alpha = 1
            this.foxi.alpha = 0

        }else if (game.input.keyboard.isDown(Phaser.Keyboard.S)){
            this.foxr.y = this.foxr.y + Foxspeed;
            this.foxr.alpha = 1
            this.foxi.alpha = 0

        }else if (game.input.keyboard.isDown(Phaser.Keyboard.D)){
            this.foxr.x = this.foxr.x + Foxspeed;
            this.foxr.scale.setTo(3);
            this.foxi.scale.setTo(3);
            this.foxr.alpha = 1
            this.foxi.alpha = 0

        }else{
            this.foxi.animations.play ('idle');
            this.foxr.alpha = 0
            this.foxi.alpha = 1
        }

        
    },

    randomApple : function(){
        this.apple = this.game.add.sprite(this.game.world.randomX,this.game.world.randomY,"apple");
        this.apple.anchor.setTo(0.5);
        this.apple.scale.setTo(0.5)
    },
    ateApple : function(){
        console.log('ate')
    }
   
    

};
var game = new Phaser.Game(800,600,Phaser.AUTO);


game.state.add('GameState',GameState)
game.state.start('GameState');