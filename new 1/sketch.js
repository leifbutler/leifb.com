// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let buttonx, buttony, buttonsize;
let rectx, recty, rectw, recth;
let rectshade = 0;
let fadein = false;
let buttonover = false;
function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonx = width/2;
  buttony = height/4;
  buttonsize = 50;
  rectx = width/2;
  recty = height*0.6;
  rectw = width/2;
  recth = height*0.4;
  ellipseMode(CENTER);
  rectMode(CENTER);
}
function MouseDistance(x1, y1, x2, y2){
  let a = abs(x1 - x2);
  let b = abs(y1 - y2);
  let c = sqrt(sq(a) + sq(b));
  return c;
function MousePressed{
  if(buttonover){
    fadein = !fadein;
  }
}
}
function draw() {
  print(MouseDistance(mouseX,mouseY,buttonx, buttony));
  if (MouseDistance(mouseX,mouseY,buttonx, buttony)<buttonsize){
    fill(200,200,200);
    buttonover = true;
  }
  else{
    fill(0,200,0);
  
  }
  background(255);
  
  ellipse(buttonx , buttony, buttonsize, buttonsize);
  //if (frameCount % 2 === 0){
  if(fadein){
    rectshade -= c;
  }
  rectshade = constrain(rectshade, 0, 255);
  
  //rectshade = frameCount;
  fill(rectshade);
  rect(rectx, recty, rectw, recth);
  
}

ss