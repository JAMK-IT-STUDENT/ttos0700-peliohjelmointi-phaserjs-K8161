demo.state1 = function(){};

var cursors;
var vel = 500;
var rocks;

demo.state1.prototype = {
    preload: function(){
        game.load.tilemap('field', 'assets/tilemaps/field.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('grassTiles', 'assets/tilemaps/grassTiles.png');
        game.load.image('rockTiles', 'assets/tilemaps/rockTiles.png');
        game.load.spritesheet('knight', 'assets/spritesheets/rogue.png', 32, 32.2);
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#80ff80';
        addChangeStateEventListeners();
        
        var map = game.add.tilemap('field');
        map.addTilesetImage('grassTiles');
        map.addTilesetImage('rockTiles');
        
        var grass = map.createLayer('grass');
        rocks = map.createLayer('rocks');
        
        map.setCollisionBetween(1, 9, true, 'rocks');
        
        knight = game.add.sprite(300,200, 'knight');
        knight.scale.setTo(3.5, 3.5);
        game.physics.enable(knight);
        cursors = game.input.keyboard.createCursorKeys();
    },
    update: function(){
        game.physics.arcade.collide(knight, rocks);
        
        if(cursors.up.isDown) {
            knight.body.velocity.y = -vel;
        }
        else if(cursors.down.isDown) {
            knight.body.velocity.y = vel;
        }
        else  {
            knight.body.velocity.y = 0;
        }
        if(cursors.left.isDown) {
            knight.body.velocity.x = -vel;
        }
        else if(cursors.right.isDown) {
            knight.body.velocity.x = vel;
        }
        else {
            knight.body.velocity.x = 0;
        }
    }
};