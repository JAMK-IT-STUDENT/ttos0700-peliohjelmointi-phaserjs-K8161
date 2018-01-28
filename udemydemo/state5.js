var accel = 400, platform, platformGroup;

demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){
        game.load.image('platform', 'assets/sprites/platform.png');
    },
    create: function(){
        game.stage.backgroundColor = '#ff99dd';
        addChangeStateEventListeners();
        
        knight = game.add.sprite(centerX, 500, 'knight');
        platform = game.add.sprite(0, 800, 'platform');
        platformGroup = game.add.group();
        platformGroup.create(650, 400, 'platform');
        platformGroup.create(650, 400, 'platform');
        
        game.physics.enable([knight, platform, platformGroup]);
        
        knight.body.gravity.y = 500;
        knight.body.bounce.y = 0.3;
        knight.body.drag.x = 400;
        knight.body.collideWorldBounds = true;
        
        platform.body.immovable = true;
        
        platformGroup.setAll('body.immovable', true);
    },
    update: function(){
        game.physics.arcade.collide(knight, [platform, platformGroup]);
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            knight.body.acceleration.x = -accel;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            knight.body.acceleration.x = accel;
        }
        else {
             knight.body.acceleration.x = 0;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            knight.body.velocity.y = -300;
        }
    }
};