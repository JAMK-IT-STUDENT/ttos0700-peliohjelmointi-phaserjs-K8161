var demo = {};
var centerX = 1500 / 2;
var centerY = 1000 / 2;
var venom;
var speed = 4;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.image('venom', 'assets/sprites/Venom.png');
    },
    create: function(){
        game.stage.backgroundColor = '#80ff80';
        console.log('state0');       
        addChangeStateEventListeners();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        venom = game.add.sprite(centerX, centerY, 'venom')
        venom.anchor.setTo(0.5, 0.5);
        
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            venom.x += speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            venom.x -= speed;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            venom.y -= speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            venom.y += speed;
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