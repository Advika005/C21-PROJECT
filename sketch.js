var bullet,wall ;
var speed,weight;
var damage,thickness;

 function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
  bullet = createSprite(400, 200, 25, 10);
  bullet.shapeColor = color(255,255,255);
  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
  
  speed = random(55,90)
    weight = random(400,1500)
    bullet.velocityX = speed;


}

function draw() {
  background("darkBlue"); 

  fill(0,255,0)
  textSize(20)
  text("if the damage <= 10, it is SAFE for passengers",673,280)
  fill(255,0,0)
  text("if the damage > 10,it is DANGEROUS for passengers",673,340)
  textSize(30)
  fill("white")
  text("DAMAGE=",868,383);
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX = 0;
    damaged();
   
  }
 
  drawSprites();
}
function damaged(){
   damage=(0.5 * weight * speed * speed )/ (thickness * thickness * thickness );
   textSize(35)
   if(damage > 10)
   {
     wall.shapeColor = color(255,0,0);
     fill(255,0,0)
     text(Math.round(damage),1020,383);
   }

  if(damage <= 10)
  {
    wall.shapeColor = color(0,255,0);
    fill(0,255,0)
    text(Math.round(damage),1020,383);
  }
}