
var trex ,trexrun, piso, pisohb, nubes;
var GameState;
function preload(){
  trexrun = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  piso = loadAnimation("ground2.png");
  nubes.loadImage("nube.png");
}

function setup(){
  createCanvas(600,200);
  
  //crear sprite de Trex
 trex = createSprite(50,180,20,50);
 trex.addAnimation("runing", trexrun);
 trex.scale = 0.5;
 trex.x = 50;

 //piso y obstaculos
 ground = createSprite(200,190,600,20);
 ground.addAnimation("ground", piso);
 ground.x = ground.width/2;
 ground.velocityX = -10;
 pisohb = createSprite(200,195,600,1);
 pisohb.visible = false;
}

function draw(){
  background("white");

  //salto
  if (keyDown("space") && trex.y >= 150) {
    trex.velocityY = -10;
  }

  
  
  trex.velocityY = trex.velocityY + 0.8;
  trex.collide(pisohb);
  
  if (ground.x < 0) {
    ground.x = ground.width/2;
  }

  //llamar funciones
  spawnCloud();
  
drawSprites();
}

function spawnCloud() {
  if (frameCount % 100 === 0) {  
    cloud = createSprite(600,100,40,10);
    cloud.y = Math.round(random(20,100));
    cloud.scale = random(0.5, 2);
    //cloud.addImage(nubes);
    cloud.velocityX = -3;
  }
}