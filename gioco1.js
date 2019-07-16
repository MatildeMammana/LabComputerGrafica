function gioco1(){

var game = new Phaser.Game(600, 601, Phaser.CANVAS, 'gioco1', { preload: preload, create: create, update: update});

function preload() {

    game.load.image('grotta', 'immagini/gioco_1/grotta.png');
    game.load.crossOrigin = 'anonymous';

    game.load.spritesheet('ali', 'immagini/gioco_1/ali.png', 63, 90);
    game.load.image('piattaforma', 'immagini/gioco_1/piattaforma.png');
    game.load.spritesheet('moneta', 'immagini/gioco_1/moneta.png', 30, 29);
    game.load.image('smeraldo', 'immagini/gioco_1/smeraldo.png');
    game.load.image('fiamma', 'immagini/gioco_1/fiamma.png');
    game.load.image('cuore', 'immagini/gioco_1/cuore.png');
    game.load.image('scrittainizio', 'immagini/gioco_1/scrittainizio.png');
	game.load.image('VINCI', 'immagini/gioco_1/VINCI.png');
    game.load.image('PERDI', 'immagini/gioco_1/PERDI.png');
}

var ali;
var piattaforme;
var cursors;
var jumpButton;
var scoreText;
var time;
var timeText;
var timer;
var text;
var subtext;
var facing = 'right';
var flip;
var coin;
var diamond;
var fires;
var tomatos;
var life;
var iii;
var scritta1;
var scritta2;
var inizio;
var scritta1;
var scritta2;


function create() {

iconSize = 35;
IconStartingAlpha = 0.3;
time = 20;
coinsCount = 0;
diamondsCount = 0;
goal = 5;
life = 3;
coinIcons = [];
diamondIcons = [];
tomatosIcons=[];
tomatosCount=3;


game.add.tileSprite(0, 0, 1200, 1000, 'grotta');



   ali= game.add.sprite(32, 150, 'ali');
   game.physics.arcade.enable(ali);
   ali.body.collideWorldBounds = true;
   ali.body.gravity.y = 500;
   ali.animations.add('left', [4, 5, 3], 10, true);
   ali.animations.add('turn', [1], 20, true);
   ali.animations.add('right', [1, 2, 0], 10, true);

   game.camera.follow(ali);


coin = game.add.physicsGroup();
     for(i=0; i<5; i++){
      var monete = game.add.sprite(game.world.randomX, game.world.randomY, 'moneta');
        coin.add(monete);
    }

    coin.forEach(function(item) {
        item.body.bounce.y = 0.7 + Math.random() * 0.2;
        item.body.collideWorldBounds = true;
    });

    coin.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3, 4], 10, true);
    coin.callAll('animations.play', 'animations', 'spin');

diamond = game.add.physicsGroup();
  var ii;
    for(ii=0; ii<5; ii++){
    var pietre= game.add.sprite(game.world.randomX, game.world.randomY, 'smeraldo');
        diamond.add(pietre);}

        diamond.forEach(function(item) {
        item.body.bounce.y = 0.7 + Math.random() * 0.2;
        item.body.collideWorldBounds = true;
    });

   piattaforme = game.add.physicsGroup();

    piattaforme.create(750, 300, 'piattaforma');
    piattaforme.create(350, 500, 'piattaforma');
    piattaforme.create(500, 700, 'piattaforma');
    piattaforme.create(-50, 300, 'piattaforma');
    piattaforme.create(-100, 700, 'piattaforma');
    piattaforme.create(200, 900, 'piattaforma');
    piattaforme.create(800, 850, 'piattaforma');
    piattaforme.create(1000, 350, 'piattaforma');

    piattaforme.setAll('body.immovable', true);


    fires=game.add.physicsGroup();
    fires.create(150,500, 'fiamma');
    fires.create(700, 150, 'fiamma');
    fires.create(1100, 90, 'fiamma');
    fires.create(1000, 700, 'fiamma');
    fires.create(500, 800, 'fiamma');

    fires.setAll('body.immovable', true);



    for (i=0; i<goal; i++){
      coinIcons.push(game.add.sprite(game.width - (iconSize * (5-i)), 0, "moneta"));
      coinIcons[i].fixedToCamera = true;
      coinIcons[i].alpha = IconStartingAlpha;
      diamondIcons.push(game.add.sprite(game.width - (iconSize * (5-i)), iconSize, "smeraldo"));
      diamondIcons[i].fixedToCamera = true;
      diamondIcons[i].alpha = IconStartingAlpha;
    }

   for (iii=0; iii<life; iii++){
    tomatosIcons.push(game.add.sprite (120 - (iconSize * (3-iii)), 45, "cuore"));
    tomatosIcons[iii].fixedToCamera = true;
  }

    timeText = game.add.text(10, 5, 'Tempo: ' + time, { fontSize: '32px', fill: '#FFF' });
    timeText.fixedToCamera=true;

    timer = game.time.create(false);
    timer.loop(1000, updateCounter, this);
    timer.start();

    var blur = game.add.graphics();
    blur.beginFill(0,0.4);
    blur.drawRect(game.camera.x, game.camera.y, 600, 600);

    inizio = game.add.sprite(game.camera.x, game.camera.y, 'scrittainizio');

    game.paused = true;
    game.input.onTap.addOnce(function () {
      game.paused = false;
      inizio.kill();
      blur.kill();
    });


    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    game.world.setBounds(0, 0, 1200, 1000);
    game.camera.follow(ali, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
}

function updateCounter() {

    time--;
    timeText.text = 'Tempo: ' + time;
    if (time>0 && ((coinsCount >= (goal)) && (diamondsCount >= (goal)))) {
		timer.stop()
        var bar = game.add.graphics();
        bar.beginFill(0x000000, 0.4);
        bar.drawRect(game.camera.x, game.camera.y, 800, 600);
        scritta1 = game.add.sprite(game.camera.x, game.camera.y, 'VINCI');
        
		game.paused = true;
		game.input.onTap.addOnce(function () {
        	game.destroy();
        	game=null;
        	goRight();
		});
		
    }else if (time==0 || tomatosCount == 0) {
      gameover();
  }
}



function update () {

    game.physics.arcade.overlap(ali, fires, hitFires, null, this);
    game.physics.arcade.overlap(ali, coin, collectCoin, null, this);
    game.physics.arcade.overlap(ali, diamond, collectDiamond, null, this);
    game.physics.arcade.collide(ali, piattaforme);
    game.physics.arcade.collide(coin, piattaforme);
    game.physics.arcade.collide(diamond, piattaforme);


    ali.body.velocity.x = 0;

    if (cursors.left.isDown){
        ali.body.velocity.x = -300;
        if (facing != 'left'){
            ali.animations.play('left');
            facing = 'left';}
    }else if (cursors.right.isDown)
    {
        ali.body.velocity.x = 300;
        if (facing != 'right'){
            ali.animations.play('right');
            facing = 'right';}
    }else{
      if (facing != 'turn')
        {
            ali.animations.stop();

            if (facing == 'left'){
                ali.frame = 4;
            }else{
                ali.frame = 1;
            }
            facing = 'turn';}
    }
      if (jumpButton.isDown && (ali.body.onFloor() || ali.body.touching.down))
    {
        ali.body.velocity.y = -500;
    }
}

     function collectCoin (ali, coin) {

    coin.x = game.world.randomX;
    coin.y = game.world.randomY;

    if(coinsCount < goal)
    {
      coinIcons[coinsCount].alpha = 1;
      coinsCount++;
    }

}

function collectDiamond (ali, diamond) {

    diamond.x = game.world.randomX;
    diamond.y = game.world.randomY;

    if(diamondsCount < goal)
    {
      diamondIcons[diamondsCount].alpha = 1;
      diamondsCount++;
    }

}


function hitFires (ali, fires) {

if (tomatosCount>0) {
tomatosCount--;
tomatosIcons[tomatosCount].alpha = IconStartingAlpha;
}
  fires.kill();
}

function gameover() {

  timer.stop()

  var bar = game.add.graphics();
  bar.beginFill(0x000000, 0.4);
  bar.drawRect(game.camera.x, game.camera.y, 800, 600);
  scritta2 = game.add.sprite(game.camera.x, game.camera.y, 'PERDI');
	
  game.paused = true;
  game.input.onTap.addOnce(function () {
        	game.destroy();
        	game=null;
        	goLeft();
		});
}
}
