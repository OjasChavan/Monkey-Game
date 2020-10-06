
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var survivalTime;            
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.X = ground.width /2;
  console.log(ground.x);
  FoodGroup = createGroup();
  obstaclesGroup = createGroup();
}


function draw() {
background("white");
  
  if(ground.x < 0){
    
    ground.x = ground.width /2;
    
  }
  
  //console.log(monkey.y);
  
    if(keyDown("space")&& monkey.y >= 200) {
        monkey.velocityY = -12;
    }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:  " + survivalTime,100,50);
  
  
  
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  food();
  obstacle();
  
  drawSprites();
}

function food(){
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
  
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
}

function obstacle(){
  if (frameCount % 300 === 0){
   var obstacle = createSprite(600,320,10,40);
   obstacle.velocityX = -6;
   
   obstacle.addImage(obstacleImage);
   

  
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  
  
  }
}





