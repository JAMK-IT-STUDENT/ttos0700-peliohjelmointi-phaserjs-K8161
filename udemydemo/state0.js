var demo = {};
var centerX = 1500 / 2;
var centerY = 1000 / 2;
var knight;
var speed = 6;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        //game.load.image('knight', 'assets/sprites/Venom.png');
        game.load.spritesheet('knight', 'assets/spritesheets/rogue.png', 32, 32.2);
        game.load.image('forest', 'assets/background/forest.png');
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#80ff80';
        console.log('state0');       
        addChangeStateEventListeners();
        game.world.setBounds(0, 0, 3740, 2800)
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        var forest = game.add.sprite(0,0, 'forest');
        
        knight = game.add.sprite(centerX, centerY + 900,'knight')
        knight.anchor.setTo(0.5, 0.5);
        knight.scale.setTo(4.5, 4.5);
        game.physics.enable(knight);
        knight.body.collideWorldBounds = true;
        knight.animations.add('walk', [20, 21, 22, 23, 24, 25, 26, 27, 28, 29])
        
        game.camera.follow(knight);
        game.camera.deadzone = new Phaser. Rectangle(centerX - 300, 0, 600, 1000);
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            knight.scale.setTo(4.5, 4.5);
            knight.x += speed;
            knight.animations.play('walk', 14, true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            knight.scale.setTo(-4.5, 4.5);
            knight.x -= speed;
            knight.animations.play('walk', 14, true);
        }
        else {
            knight.animations.stop('walk');
            knight.frame = 0;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            knight.y -= speed;
            if (knight.y < 1013)
                {
                    knight.y = 1013;
                }
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            knight.y += speed;
        }
    }
};

function changeState(i, stateNum){
    game.state.start('state' + stateNum)
}

function addKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners(){
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
        addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
        addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
        addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
        addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
        addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
        addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
        addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
        addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
        addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}