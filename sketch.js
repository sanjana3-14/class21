var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  gameObject1 = createSprite(200,600)
  gameObject1.shapeColor = "blue"
  gameObject2 = createSprite(400,600)
  gameObject2.shapeColor = "blue"
  gameObject3 = createSprite(600,600)
  gameObject3.shapeColor = "blue"
  gameObject4 = createSprite(800,600)
  gameObject4.shapeColor = "blue"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY
  bounceOff(movingRect,fixedRect);
  if(isTouching(movingRect,gameObject3)){
      movingRect.shapeColor = "red";
      gameObject3.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject3.shapeColor = "blue";
  }
  drawSprites();
}

