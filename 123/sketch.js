let linex;
let liney;
let value = 0;
let pos;
function setup() {
  createCanvas(windowWidth,windowHeight);

}
function draw() {
  background(100,100,100);
  if (value === 1){
    line(width/2,height*0.92,linex,liney);
  }
  if (liney >= height*0.92){
    value = 0;
  }
  lines();
  print(pos);
  pos = 0;
}
function lines(){
  if (liney <= height*0.92 && pos === 100){
    liney += 20;
  }
  if (linex < width/2){
    linex += 1.5;
  }
  if (linex > width/2){
    linex -= 1.5;
  }
}
function mouseClicked(){
  if( value === 0){
    linex = mouseX;
    liney = mouseY;
    value = 1;
  }
}
function mouseWheel(event){
  print(event.delta);
  pos = event.delta;
}