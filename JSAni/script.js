let img;
let shark;

function preload(){
  img = loadImage("hat.png");
  shark = loadImage("shark.png");
}

function setup(){
  createCanvas(900, 800);
  background(255);
}

function draw(){
  image(shark, 0, 0);
}

function mouseClicked(){
  background(225);
  image(img, mouseX, mouseY, 200, 100);
}
