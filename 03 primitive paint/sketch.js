// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
}  
keyTyped();

function keyTyped() {
  if (key === 'a'){
    ellipse(mouseX, mouseY, 50, 50);
  }
  if (key === 's'){
    rect(mouseX, mouseY, 50, 50);
  }
  if (key === 'd'){
    triangle(mouseX += 50, mouseY += 50, mouseX -= 50, mouseY -= 50, mouseX += 50, mouseY -= 50);
  }


}