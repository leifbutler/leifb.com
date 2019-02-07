
// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x = 45;
let xspeed =5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  
}

function draw() {
  
  background(50, 50, 200);
  fill(190, 200, 10)
  ellipse(x, 50, 80, 80,0)
  rect(mouseX, mouseY, 55, 55, 20);
  x += xspeed;
  if (x > windowwidth) x = -30;
}
