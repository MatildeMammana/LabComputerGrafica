function gioco2(){
var game = new Phaser.Game(600, 601, Phaser.CANVAS, 'gioco2', {preload: preload, create: create, update:update});

function preload(){
  game.load.image('corridoio','immagini/gioco_2/corridoio.png');
  game.load.crossOrigin = 'anonymous';
  game.load.spritesheet('ali','immagini/gioco_2/alirubino.png', 63, 90);
  game.load.image('platform','immagini/gioco_2/platform.png');
  game.load.image('vaso','immagini/gioco_2/vaso.png');
  game.load.image('porta','immagini/gioco_2/porta.png');
  game.load.image('turbo','immagini/gioco_2/turbo.png');
  game.load.spritesheet('guardiadx','immagini/gioco_2/guardia_destra.png',70,106);
  game.load.spritesheet('guardiasx','immagini/gioco_2/guardia_sinistra.png',70,102);
  game.load.image('scritta','immagini/gioco_2/scrittainizio.png');
  game.load.image('VINCI', 'immagini/gioco_2/VINCI.png');
  game.load.image('PERDI', 'immagini/gioco_2/PERDI.png');
}

var time = 45;
var speed = 200;
var ali;
var platform;
var turbo;
var vasi;
var porta;
var guardiadx;
var guardiasx;
var i;
var an;
var timeText;
var timer;
var blur;
var inizio;
var cursors;
var jumpButton;
var facing='right';
var scritta1;
var scritta2;

function create(){

  game.add.tileSprite(0,0,5000,600,'corridoio');

  ali = game.add.sprite(300,100,'ali');
  game.physics.arcade.enable(ali);
  ali.body.setSize(40,80,15,10);
  ali.body.collideWorldBounds = true;
  ali.body.gravity.y=500;
  ali.animations.add('left',[4,5,3],10,true);
  ali.animations.add('turn',[1],20,true);
  ali.animations.add('right',[1,2,0],10,true);


  game.camera.follow(ali);

  platform = game.add.sprite(-2000,550,'platform');
  game.physics.arcade.enable(platform);
  platform.body.immovable=true;

  turbo = game.add.sprite(3200,200,'turbo');
  game.physics.arcade.enable(turbo);

  vasi= game.add.physicsGroup();
  vasi.create(300,450,'vaso');
  vasi.create(650,450,'vaso');
  vasi.create(1250,450,'vaso');
  vasi.create(1800,450,'vaso');
  vasi.create(2350,450,'vaso');
  vasi.create(2900,450,'vaso');
  vasi.create(3450,450,'vaso');
  vasi.create(4000,450,'vaso');
  vasi.setAll('body.immovable',true);

  porta= game.add.sprite(4800,410,'porta');
  game.physics.arcade.enable(porta);
  porta.body.immovable=true;

  grupposx= game.add.physicsGroup();
  for(i=0;i<15;i++){
    guardiasx=game.add.sprite(500*i,360,'guardiasx');
    game.physics.arcade.enable(guardiasx);
    guardiasx.body.setSize(40,80,15,20);
    guardiasx.body.gravity.y=500;

    an=guardiasx.animations.add('corresx',[0,1,2],10,true);
    guardiasx.animations.play('corresx');
    grupposx.add(guardiasx);
  }

  gruppodx= game.add.physicsGroup();
  for(i=0;i<6;i++){
    guardiadx=game.add.sprite(-300*i,360,'guardiadx');
    game.physics.arcade.enable(guardiadx);
    guardiadx.body.setSize(40,80,15,20);
    guardiadx.body.gravity.y=500;

    an=guardiadx.animations.add('corredx',[0,1,2],10,true);
    guardiadx.animations.play('corredx');
    gruppodx.add(guardiadx);
  }

  timeText = game.add.text(10,5,'Tempo:'+time,{fontSize:'32px',fill:'#fff'});
  timeText.fixedToCamera=true;

  timer = game.time.create(false);
  timer.loop(1000,updateCounter,this);
  timer.start();

  blur = game.add.graphics();
  blur.beginFill(0,0.4);
  blur.drawRect(game.camera.x, game.camera.y,600,600);
  inizio=game.add.sprite(game.camera.x, game.camera.y, 'scritta');

  game.paused=true;
  game.input.onTap.addOnce(
    function(){
      game.paused=false;
      inizio.kill();
      blur.kill();
    }
  );

  cursors = game.input.keyboard.createCursorKeys();
  jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  game.world.setBounds(0,0,5000,600);
  game.camera.follow(ali,Phaser.Camera.FOLLOW_LOCKON,0.1,0.1);
}

function update(){
  game.physics.arcade.collide(ali,platform);
  game.physics.arcade.collide(ali,vasi);
  game.physics.arcade.overlap(ali,porta,aliHitsPorta);
  game.physics.arcade.collide(grupposx,platform);
  game.physics.arcade.collide(gruppodx,platform);
  game.physics.arcade.collide(ali,grupposx,gameover);
  game.physics.arcade.collide(ali,gruppodx,gameover);
  game.physics.arcade.collide(ali,turbo,aliTurbo);

  ali.body.velocity.x=0;
  if(cursors.left.isDown){
    ali.body.velocity.x=-speed;
    if(facing != 'left'){
      ali.animations.play('left');
      facing='left';
    }
  }else if(cursors.right.isDown){
    ali.body.velocity.x=speed;
    if(facing != 'right'){
      ali.animations.play('right');
      facing='right';
    }
  }else{
    if(facing != 'turn'){
      ali.animations.stop();
      if(facing=='left'){
        ali.frame=4;
      }else{
        ali.frame=1;
      }
      facing = 'turn';
    }
  }
  if(jumpButton.isDown && (ali.body.onFloor() || ali.body.touching.down)){
    ali.body.velocity.y=-400;
  }

  if(an.isPlaying){
    gruppodx.forEach(function(item){
      item.body.x+=3;
    })
  }
  if(an.isPlaying){
    grupposx.forEach(function(item){
      item.body.x-=2;
    })
  }
}

function gameover(){
  var  bar = game.add.graphics();
  bar.beginFill(0,0.4);
  bar.drawRect(game.camera.x,game.camera.y,600,600);
  scritta2 = game.add.sprite(game.camera.x, game.camera.y, 'PERDI');
	
  game.paused = true;
  game.input.onTap.addOnce(function () {
        	game.destroy();
        	game=null;
        	goLeft();
		});
}

function aliTurbo(){
  turbo.kill();
  speed=speed+200;
}

function aliHitsPorta(){
  var bar = game.add.graphics();
  bar.beginFill(0,0.4);
  bar.drawRect(game.camera.x,game.camera.y,600,600);
  game.paused=true;
  scritta1 = game.add.sprite(game.camera.x, game.camera.y, 'VINCI');
        
		game.paused = true;
		game.input.onTap.addOnce(function () {
        	game.destroy();
        	game=null;
        	goRight();
		});
}

function updateCounter(){
  time--;
  timeText.text='Tempo: '+time;
  if(time==0){
    gameover();
  }
}
}
