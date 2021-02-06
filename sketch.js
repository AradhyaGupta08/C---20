var fixedret, movingret;

function setup() {
  createCanvas(1550,1000);
  fixedret = createSprite(400, 500, 70, 50);
  movingret = createSprite(300, 100, 50, 70)
  fixedret.shapeColor = "red";
  movingret.shapeColor = "red"; 
}

function draw() {
  background(255,255,255); 
  
  movingret.x = mouseX;
  movingret.y = mouseY;


  if(movingret.x - fixedret.x < movingret.width/2 + fixedret.width/2
    && fixedret.x - movingret.x <  movingret.width/2 + fixedret.width/2
&& fixedret.y - movingret.y < movingret.height/2 + fixedret.height/2
&& movingret.y - fixedret.y <  movingret.height/2 + fixedret.height/2
    ){
fixedret.shapeColor = "blue";
movingret.shapeColor = "blue";
  }

  else{
    fixedret.shapeColor = "red";
    movingret.shapeColor = "red"; 
  }
  drawSprites();
}