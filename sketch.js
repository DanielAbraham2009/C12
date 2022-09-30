var PLAY = 1;
var END = 0;

var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png");
  leavesImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);
  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

  obstaclesGroup = createGroup();
}


function draw() {
  background(0);
  
  edges = createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  var select_sprites = Math.round(random(1,2));

  if (frameCount % 80 === 0){
    if (select_sprites == 1){
      createApples();
    }
    else {
      createLeaves();
    }
  }

  
  if(rabbit.collide(obstaclesGroup)){
    gameState = END;
    obstaclesGroup.velocityY = 0;
  }


  drawSprites();
}
  


function createApples(){
   var apples =createSprite(random(50,350), 40,10,10);
    apples.addImage(applesImg);
    apples.velocityY = 5;
    apples.scale = 0.1;
    apples.lifetime = 160;

    obstaclesGroup.add(apples);
}
  

function createLeaves(){
  var leaves = createSprite(random(50,350), 40,10,10);
  leaves.addImage(leavesImg);
  leaves.velocityY = 5;
  leaves.scale = 0.1;
  leaves.lifetime = 160;
  obstaclesGroup.add(leaves);

}
