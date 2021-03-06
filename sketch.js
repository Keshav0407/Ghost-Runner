var tower, towerImage;
var door, doorImage, doorsGroup
var climber, climberImage, climbersGroup;
var ghost, ghostImage;
var invisibleblocksGroup, invisibleblock;


function preload(){
  towerImage = loadImage("tower.png");
  doorImage = loadImage("door.png");
  climberImage = loadImage("climber.png");
  ghostImage = loadImage("ghost-standing.png");
  
  
  
  
  
}

function setup(){
  createCanvas(600, 600);
  tower = createSprite(300, 300);
  tower.addImage(towerImage);
  tower.velocityY = 1;
  doorsGroup = new Group();
  climbersGroup = new Group();
  ghost = createSprite(200, 200, 50, 50);
  ghost.addImage(ghostImage);
  ghost.scale = 0.3;
  invisibleblocksGroup = new Group();
}

function draw(){
  background(0);
  if (tower.y>400){
 tower.y = 300;   
    
  }
  if (keyDown("left_arrow")){
    ghost.x = ghost.x-3;
  }
   
  if (keyDown("right_arrow")){
    ghost.x = ghost.x+3;
  }
   
  if (keyDown("space")){
    ghost.velocityY = -5;
  }
  ghost.velocityY = ghost.velocityY+0.8;
  if (climbersGroup.isTouching(ghost)){
    ghost.velocityY = 0;
  }
  spawnDoors();
  
  
  
  
  
  
  drawSprites();
  
}
function spawnDoors(){
  if (frameCount % 240===0){
    door = createSprite(200, -50);
    door.addImage(doorImage);
    door.x = Math.round(random(120, 400));
    door.velocityY = 1;
    door.lifetime = 800;
    doorsGroup.add(door);
  
  climber = createSprite(200, 10);
  climber.addImage(climberImage);
  climber.x = door.x;
  climber.velocityY = 1;
  climber.lifetime = 800;
    climbersGroup.add(climber);
    ghost.depth = door.depth;
    ghost.depth+=1;
  }
  
  
}