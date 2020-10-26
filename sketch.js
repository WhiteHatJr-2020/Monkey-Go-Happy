
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  ground = createSprite(400,350,900,10);
  ground.x=ground.width/2;
  //ig=createSprite(400,360,900,1);
}


function draw() {
  background(255);
  text("Survival Time: "+score,200,200);
  score=Math.ceil(frameCount/frameRate());
  food();
  obs();
  if(keyDown("space") && monkey.y>=100)
  {
    monkey.velocityY=-14;
    
  }
  ground.velocityX=-4;
  if(ground.x<0)
  {
    ground.x=ground.width/2;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  drawSprites();
}

function food()
{
  if(frameCount%80==0)
  {
    var b=createSprite(600,200,20,20);
    b.addImage("ba",bananaImage);
    var x=Math.round(random(120,200));
    b.y=x;
    b.scale=0.1;
    b.velocityX=-3;
  }
}

function obs()
{
  if(frameCount%300==0)
  {
    var o=createSprite(400,330,20,20);
    o.addImage("ba",obstaceImage);
    o.scale=0.1;
    //b.setLifeTime(200);
    o.velocityX=-3;
  }
}





