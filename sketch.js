var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  if (touchingX(movingRect,fixedRect)) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (touchingY(movingRect,fixedRect)){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  drawSprites();
}

function touchingX(o1,o2){
if (o1- o2.x < o2.width/2 + o1.width/2
  && o2 - o1 < o2.width/2 + o1.width/2){
return true
}
else{
  return false
}
}

function touchingY(o1,o2){
  if(o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < 02.height/2 + o1.height/2){
return true
  }
  else{
    return false
  }
}
