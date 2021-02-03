var posX1  = 500  
var posY1  = 500  
var posX2  = 500  
var posY2  = 500
var posX3  = 500  
var posY3  = 500  
var posX4  = 500  
var posY4  = 500 
var SpeedX1=-1     // x speed
var SpeedY1=1     // y speed
var SpeedX2=-3    // x speed
var SpeedY2=3     // y speed
var SpeedX3=-2     // x speed
var SpeedY3=-2     // y speed
var SpeedX4=2     // x speed
var SpeedY4=0 // y speed

function setup() {
  createCanvas(1000, 1000);
    background(220);
  textSize(32);
 
}
function mousePressed(){
  posX1 = posX2 =posX3 = posX4 = mouseX
  posY1 = posY2=posY3 = posY4 = mouseY
  
}
function draw() {
    stroke(11111, 1111, 1111); 
   text('press mouse', 10, 30);
  fill(0,0,0);


  circle(posX1,posY1,50)
  circle(posX2,posY2,50)
  circle(posX3,posY3,50)
  circle(posX4,posY4,50)
  
  print(posX1)
  posX1=posX1+SpeedX1
  posY1=posY1+SpeedY1
    posX2=posX2+SpeedX2
  posY2=posY2+SpeedY2
     posX3=posX3+SpeedX3
  posY3=posY3+SpeedY3
     posX4=posX4+SpeedX4
  posY4=posY4+SpeedY4

}