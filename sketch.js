
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,ground,groundImage;
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  groundImage = loadImage("ground.jpg")
}



function setup() {
  
  createCanvas(600,400);
  
  monkey = createSprite(80,205,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
   ground = createSprite(300,395,600,15);
   ground.addImage(groundImage);
    
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  score=0;
}


function draw() {
  
  background("lightblue");
  
  textSize(24);
  fill("red");
  text("Survival time :"+score,350,25);
  
    ground.velocityX=-4;
  
  score = score + Math.round(getFrameRate()/60);
  
  if(ground.x<300){
    ground.x = ground.width/2;
  }
  
   if(keyDown("space")&&monkey.y>=317)
  {
    monkey.velocityY=-13;
  }
  
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground);
  
  spawnBanana();
  spawnObstacles();

  drawSprites();
}


function spawnBanana(){
  if(frameCount%80===0){
    banana = createSprite(400);
    banana.y = Math.round(random(200,260));
    banana.addImage(bananaImage);
    banana.scale=0.1
    banana.velocityX=-7;
    banana.lifetime=200;
    FoodGroup.add(banana);
  }
}

function spawnObstacles(){
   if(frameCount%200===0){
    obstacle = createSprite(400,322);             
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-7;
    obstacle.lifetime=200;
    obstacleGroup.add(obstacle);
   }
}





