var wall,car;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

speed=random(55,180);
weight=random(400,1500);


wall= createSprite(1500,200,60,height/2);
wall.shapeColor=("grey")

car = createSprite(50,200,50,50);
car.shapeColor=("black")
car.velocityX = speed;
car.depth=car.depth+1






}

function draw() {
  background("cyan");  

if(wall.x-car.x < (car.width+wall.width)/2){

car.velocityX=0
var deformation=0.5* weight * speed *speed /22500;
if(deformation>180){

car.shapeColor=color("red")
}

if(deformation<180 && deformation>100){

  car.shapeColor=color("yellow")
}

if(deformation<100){
  car.shapeColor=color("green")
}


}


  drawSprites();
}