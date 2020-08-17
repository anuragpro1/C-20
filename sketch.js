var fixedRect,movingRect;


function setup() {

  createCanvas(1200,800);
  fixedRect=createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
    movingRect=createSprite(200,400,80,30);
  movingRect.shapeColor = "green";
fixedRect.velocityY = 2; 
movingRect.velocityY = -2;

}

function draw() {
  background(0,0,0);  
 // movingRect.x = mouseX;
 // movingRect.y = mouseY;

 if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2
  && fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2
  && movingRect.y - fixedRect.y < movingRect.height/2+fixedRect.height/2
 && fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2){
  movingRect.shapeColor ="red";         
  fixedRect.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2
  && fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2){

movingRect.velocityX = -movingRect.velocityX;
fixedRect.velocityX = -fixedRect.velocityX;



  }

 if( movingRect.y - fixedRect.y < movingRect.height/2+fixedRect.height/2
  && fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2){

movingRect.velocityY = -movingRect.velocityY;
fixedRect.velocityY = -fixedRect.velocityY;



  }
  drawSprites();
}