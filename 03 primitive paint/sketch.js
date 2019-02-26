// Project Title
// Leif Butler
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x = 1;
let y = 1;
let l = true;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  //textFont()
  fill(0,0,200);
  textSize(50);
  textFont('Times New Roman');
  text("leif Butler", windowWidth-250,windowHeight-30);
}

function draw() {
  rectMode(CENTER);
  
  fill(random(1,255),random(1,255),random(1,255));
    
  rect(random(windowWidth),random(windowHeight),50,50);
  

}  
keyTyped();

function keyTyped() {
  if (key === 'a'){
    fill(random(1, 255), random(1, 255), random(1, 255));
    ellipse(mouseX, mouseY, 50, 50);
  }
  if (key === 's'){
    fill(random(1, 255), random(1, 255), random(1, 255));
    rect(mouseX, mouseY, 50, 50);
  }
  if (key === 'd'){
    fill(random(1, 255), random(1, 255), random(1, 255));
    triangle(mouseX += 50, mouseY += 50, mouseX -= 50, mouseY -= 50, mouseX += 50, mouseY -= 50);
  }
  if (key === ' '){
    background(0);
    fill(0,0,200);
    textSize(50);
    textFont('Times New Roman');
    text("leif Butler", windowWidth-250,windowHeight-30);
  }


}  
 