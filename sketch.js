var wall, thickness; 
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400); 
  bullet = createSprite(30,200,10,40);  
  bullet.shapeColor = color(255,255,255) 
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness, height/2);
  wall.shapeColor = color(80,80,80)
  speed = random(223,321); 
  weight = random(30,52);
  bullet.velocityX = speed;


  /*fixedRect = createSprite(400, 200, 50, 50); 
  movingRect = createSprite(200,200,50,50); 
  fixedRect.shapeColor = "green"; 
  movingRect.shapeColor = "green"; 
  fixedRect.velocityX = -5; 
  movingRect.velocityX = 5; 
  fixedRect.debug = true; 
  movingRect.debug = true;
  */  
  bullet.debug = true; 
  wall.debug = true;
}

function draw() {
  background(0,0,0);    
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0; 
    var damage=0.5 * weight *speed * speed/(thickness*thickness*thickness) 
    if(damage>=10){ 
      wall.shapeColor = color(255,0,0);
    } else { 
      wall.shapeColor = color(0,255,0);
    }
  }

  

  /*movingRect.y = mouseY;
  movingRect.x = mouseX;  
  console.log(movingRect.x-fixedRect.x) 

  if(fixedRect.x - movingRect.x <= fixedRect.width/2 +movingRect.width/2
    && movingRect.x - fixedRect.x <= fixedRect.width/2+ movingRect.width/2
    && fixedRect.y - movingRect.y <= fixedRect.height/2 +movingRect.height/2 
    && movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height//){ 
      fixedRect.shapeColor = "red"; 
      movingRect.shapeColor = "red"; 
    } else { 
      fixedRect.shapeColor = "green"; 
      movingRect.shapeColor = "green";
    } 

    if (fixedRect.x - movingRect.x <= fixedRect.width/2 +movingRect.width/2 
      && movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2){
        fixedRect.velocityX=fixedRect.velocityX*(-1); 
        movingRect.velocityX = movingRect.velocityX*(-1);
      }

    if( fixedRect.y - movingRect.y <= fixedRect.height/2 +movingRect.height/2 
      && movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2){
        fixedRect.velocityY=fixedRect.velocityY*(-1); 
        movingRect.velocityY = movingRect.velocityY*(-1);
      }*/


  drawSprites();
} 

function hasCollided(object1,object2){  
  var object1RightEdge = object1.x + object1.width 
  var object2LeftEdge = object2.x
  /*if (object1.x - object2.x <= object1.width/2 + object2.width/2 ){
      return true
  } 
      return false;
  */
  if(object1RightEdge>=object2LeftEdge){
    return true
  } 
  return false; 
  
}