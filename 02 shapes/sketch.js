// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x, y;
let xspeed, yspeed

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  xspeed = random(-3,3);
  yspeed = random(-5,5);
}

function draw() {
  //background(20, 0, 150);
  ellipse(x ,y , 20, 20);
  x += xspeed;
  y += yspeed;

  if (x < 0 || x > width)
}
function mousePressed() {
  //fill(0,0,100);
  xspeed = random(-3,3);
  yspeed = random(-5,5);
}



function mouseReleased(){
  fill(0,90,0);
}