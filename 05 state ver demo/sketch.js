// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = 0;
const rectSize = 30;
let x = 0;
let y = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if (state === 0){
    x += 10;
    if (x > windowWidth - rectSize){
      state = 1;
    }
      
  }
  else if (state === 1){
    y += 10;
    if(y > windowHeight - rectSize){
      state = 2;
    }
  }
  else if (state === 2){
    x -= 10;
    if(x > windowWidth - rectSize){
      state = 3;
    }
  }
  else if (state === 3){
    y -= 10;
    if(y > windowHeight - rectSize){
      state === 0;
    }
  }
  
  
  

  rect(x,y,rectSize,rectSize);
    
}
