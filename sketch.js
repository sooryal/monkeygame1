var PLAY=1
var END=0;
var gameState=PLAY;


var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survialTime
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);
  background(178,543,123);
  
  monkey=createSprite(140,360,20,20);
 monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
 
  ground = createSprite(400,400,900,10);

  ground.x = ground.width /2;
  
invisibleGround = createSprite(390,400,900,10);
  invisibleGround.visible = false;
}


function draw() {
  background('white');
  
  text
  
ground.velocityX = -(4 + 3* score/100)
    //scoring
    score = score + Math.round(getFrameRate()/60);
  ground.velocityX = -2
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
   }
 monkey.velocityY = monkey.velocityY+0.5
   
  monkey.collide(invisibleGround);
  
  banana();
  
  obstacles(); 
  
  survialTime=0;
  
drawSprites();
}
function banana(){
 if (frameCount % 60 === 0){
 var banana=createSprite(220,282,20,20);
   
 banana.y = Math.round(random(200,120));
 banana .addImage(bananaImage);
    banana.scale=0.1;
   banana.lifetime=230;
  
 }
 }
  function obstacles(){
 if (frameCount % 300 === 0){
 var obstacles=createSprite(300,350,20,20);
   
 obstacles.y = Math.round(random(300,350));
 obstacles .addImage(obstacleImage);
obstacles.scale=0.1;
  obstacles.lifetime=100;
 }
}