  var backgroundImage;
  var bow, bowImage;
  var arrow, arrowImage, arrow0;
  var score;


function preload(){ 

  backgroundImage = loadImage("background0.png");
  bowImage = loadImage("bow0.png");
  redballoonImage = loadImage("red_balloon0.png");
  pinkballoonImage = loadImage("bird.png");
  blueballoonImage = loadImage("blue_balloon0.png");
  greenballoonImage = loadImage("green_balloon0.png");
  arrowImage = loadImage("arrow0.png");
}


function setup() {
// creating the canvas
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  
// creating the bow sprite
  bow = createSprite(displayWidth - 200,200,50,50);
  bow.addImage("bow",bowImage);
  bow.scale = 2.5;
  
  arrow0 = createSprite(displayWidth - 210,200);
  arrow0.addImage("arrow0",arrowImage);
  arrow0.scale = 0.5;
  
  balloons = new Group();
  
  score = 0;
  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();
}


function draw() {

  background(backgroundImage);
  
// moving the bow with the mouse
  bow.y = mouseY;
  
  arrow0.y = bow.y;
  
if (keyWentDown("space")) {
     createArrow();
     arrow.addImage(arrowImage);
     arrow.y = bow.y;
  }
  
  
var ballooncount = Math.round(random(1,4));
  //console.log(ballooncount)
  
  if (World.frameCount % 80 == 0) {
    if (ballooncount == 3) {
      redBalloon();
    }
    
     else if (ballooncount == 4) {
      greenBalloon(); 
    }
    
    else if (ballooncount == 2) {
      blueBalloon();
    }
    
    else if (ballooncount == 1){
      pinkBalloon();
    }

  }
  
  
  if (arrowGroup.isTouching(redB)) {
  redB.destroyEach();
  arrowGroup.destroyEach();
    score = score + 2;
  }

  if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score = score + 1;
  }

  if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();
  arrowGroup.destroyEach();
  score = score + 3;
  }

  

  camera.position.x=displayWidth/2;
  camera.position.y= bow.y

  drawSprites();
  
  fill("black");
  textSize(30);
  textFont("broadway");
  text("SCORE : "+ score,displayWidth/2-100,50)
  fill("black");
  textSize(15);
  textFont("arial");
  text("Don't kill the bird!",displayWidth/2-100,10)

  if (arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = 0;
    fill("black");
    textSize(60);
    textFont("broadway");
    text("Game Over", displayWidth/2,displayHeight/2-100)
    redballoon.velocityX=0;
    }

}


function createArrow(){
  arrow = createSprite(displayWidth - 210, 100, 5, 10);   
  arrow.velocityX = -5;  
  arrow.scale = 0.5; 
  arrow.lifetime = 15000; 
  arrowGroup.add(arrow);
}



function redBalloon() {
  var redballoon = createSprite(0,Math.round(random(0,displayHeight-10)), 10, 10);
  redballoon.addImage(redballoonImage);
  redballoon.velocityX = 3;
  redballoon.lifetime = 15000;
  redballoon.scale = 0.3;
  balloons.add(redballoon); 
  redballoon.depth = bow.depth;
  bow.depth = bow.depth + 1;
  redballoon.depth = arrow0.depth;
  arrow0.depth = arrow0.depth + 1;
  redB.add(redballoon);
}



function blueBalloon() {
  var blueballoon = createSprite(0,Math.round(random(0,displayHeight-10)), 10, 10);
  blueballoon.addImage(blueballoonImage);
  blueballoon.velocityX = 3;
  blueballoon.lifetime = 15000;
  blueballoon.scale = 0.37;
  balloons.add(blueballoon);
  blueballoon.depth = bow.depth;
  bow.depth = bow.depth + 1;
  blueballoon.depth = arrow0.depth;
  arrow0.depth = arrow0.depth + 1;
  blueB.add(blueballoon);
}



function greenBalloon() {
  var greenballoon = createSprite(0,Math.round(random(0,displayHeight-10)), 10, 10);
  greenballoon.addImage(greenballoonImage);
  greenballoon.velocityX = 3;
  greenballoon.lifetime = 15000;
  greenballoon.scale = 0.3;
  balloons.add(greenballoon);
  greenballoon.depth = bow.depth;
  bow.depth = bow.depth + 1;
  greenballoon.depth = arrow0.depth;
  arrow0.depth = arrow0.depth + 1;
  greenB.add(greenballoon);
}



function pinkBalloon() {
  var pinkballoon = createSprite(0,Math.round(random(0,displayHeight-10)), 10, 10);
  pinkballoon.addImage(pinkballoonImage);
  pinkballoon.scale = 0.25;
  pinkballoon.velocityX = 3;

  pinkballoon.setCollider("rectangle",0,0,10,50)
  pinkballoon.lifetime = 15000;
  balloons.add(pinkballoon);
  pinkballoon.depth = bow.depth;
  bow.depth = bow.depth + 1;
  pinkballoon.depth = arrow0.depth;
  arrow0.depth = arrow0.depth + 1;
  pinkB.add(pinkballoon);
}

