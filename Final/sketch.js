/*
This is the P5js version of this Project
the reasons why I did not stick with my original plan of using tone.js and
jquery are listed below with the original code.
I put too much time in figuring out tone.js so did not have much time to do this.
Would add EQ if possible.
Now this project only allows user to pan different track and control the volume
of each tracks by changing the position of the characters.
*/

var atm;
var piano;
var bass;
var drums1;
var drums2;

var yellow;
var red;
var blue1;
var blue2;

var dragging1 = false;//drag condition
var rollover1 = false;
var dragging2 = false;
var rollover2 = false;
var dragging3 = false;
var rollover3 = false;
var dragging4 = false;
var rollover4 = false;

var x1, y1, x2, y2, x3, y3, x4, y4;          // Location and size
var offsetX1, offsetY1;    // Mouseclick offset
var offsetX2, offsetY2;
var offsetX3, offsetY3;
var offsetX4, offsetY4;

function preload(){
    atm = loadSound("atm.mp3");
    piano = loadSound("piano.mp3");
    bass = loadSound("bass.mp3");
    drums1 = loadSound("drums.mp3");
    drums2 = loadSound("drums2.mp3");

    yellow = loadImage("yellow.png");
    red = loadImage("red.png");
    blue1 = loadImage("blue1.png");
    blue2 = loadImage("blue2.png");

}


function setup(){
  createCanvas(windowWidth, windowHeight);
  background(246, 246, 246);

  x1 = 100;
  y1 = windowHeight-200;
  x2 = 350;
  y2 = windowHeight-200;
  x3 = 600;
  y3 = windowHeight-200;
  x4 = 850;
  y4 = windowHeight-200;




  atm.play();
  drums1.play();
  drums2.play();
  piano.play();
  bass.play();

}

function draw(){
  background(246, 246, 246);

//drag image
  if (mouseX > x1 && mouseX < x1 + 241 && mouseY > y1 && mouseY < y1 + 191) {
    rollover1 = true;
  }else{
    rollover1 = false;
  }
  if (dragging1) {
    x1 = mouseX + offsetX1;
    y1 = mouseY + offsetY1;
  }

  if (mouseX > x2 && mouseX < x2 + 241 && mouseY > y2 && mouseY < y2 + 191) {
    rollover2 = true;
  }else{
    rollover2 = false;
  }
  if (dragging2) {
    x2 = mouseX + offsetX2;
    y2 = mouseY + offsetY2;
  }

  if (mouseX > x3 && mouseX < x3 + 241 && mouseY > y3 && mouseY < y3 + 191) {
    rollover3 = true;
  }else{
    rollover3 = false;
  }
  if (dragging3) {
    x3 = mouseX + offsetX3;
    y3 = mouseY + offsetY3;
  }

  if (mouseX > x4 && mouseX < x4 + 241 && mouseY > y4 && mouseY < y4 + 191) {
    rollover4 = true;
  }else{
    rollover4 = false;
  }
  if (dragging4) {
    x4 = mouseX + offsetX4;
    y4 = mouseY + offsetY4;
  }

  //make image draggable and link the position of image to volume and panning
  image(yellow, x1, y1);
  piano.setVolume(1-(y1/windowHeight));
  piano.pan((x1-100)/100);

  image(blue1, x2, y2);
  drums2.setVolume(1-(y2/windowHeight));
  drums2.pan((x2-350)/100);

  image(red, x3, y3);
  bass.setVolume(1-(y3/windowHeight));
  bass.pan((x3-600)/100);

  image(blue2, x4, y4);
  drums1.setVolume(1-(y4/windowHeight));
  drums1.pan((x4-850)/100);

}

//control panel
function mousePressed() {
  if (mouseX > x1 && mouseX < x1 + 241 && mouseY > y1 && mouseY < y1 + 191) {
    dragging1 = true;
    offsetX1 = x1-mouseX;
    offsetY1 = y1-mouseY;
  }
  if (mouseX > x2 && mouseX < x2 + 241 && mouseY > y2 && mouseY < y2 + 191) {
    dragging2 = true;
    offsetX2 = x2-mouseX;
    offsetY2 = y2-mouseY;
  }

  if (mouseX > x3 && mouseX < x3 + 241 && mouseY > y3 && mouseY < y3 + 191) {
    dragging3 = true;
    offsetX3 = x3-mouseX;
    offsetY3 = y3-mouseY;
  }

  if (mouseX > x4 && mouseX < x4 + 241 && mouseY > y4 && mouseY < y4 + 191) {
    dragging4 = true;
    offsetX4 = x4-mouseX;
    offsetY4 = y4-mouseY;
  }


}

function mouseReleased() {
  dragging1 = false;
  dragging2 = false;
  dragging3 = false;
  dragging4 = false;
}



























/* Somehow this does not work so I decided to switch to p5.js and p5.sound
Tone.js decided decided not to work after I linked the jquery cdn.
I tried to unlink the jquery and see if that solved the problem but that did
not help at all.
But the thing is, the exact same code worked well right before I linked the
jquery cdn.
I think there might be another way to solve this (maybe change the way I
import sound file), but I am running out of time.
I have tried to use two js files and seperate the jquery code and the tone.js
code but that did not work as well.
Nevertheless, Tone js does have a powerful library for web music and I think I
will keep exploring the possibility of it

$(function() {
    $("#yellow").draggable();
    $("#blue1").draggable();
    $("#red").draggable();
    $("#blue2").draggable();
});

$("#test").click(function(){
  piano();
})；

var volpos1 = 0;
var volpos2 = 0;
var volpos3 = 0;
var volpos4 = 0;

var vol1 = new Tone.Volume(10).toMaster();
var vol2 = new Tone.Volume(0).toMaster();
var vol3 = new Tone.Volume(0).toMaster();
var vol4 = new Tone.Volume(0).toMaster();

var polySynth1 = new Tone.PolySynth(1, Tone.FMSynth);
var polySynth2 = new Tone.PolySynth(1, Tone.FMSynth);
var polySynth3 = new Tone.PolySynth(1, Tone.FMSynth);
var polySynth4 = new Tone.PolySynth(2, Tone.FMSynth);

polySynth1.connect(vol1);
polySynth2.connect(vol2);
polySynth3.connect(vol3);
polySynth4.connect(vol4);


var p1 = new Tone.Players({
  "piano": 'piano.mp3'
}
, function(){
});

var p2 = new Tone.Players({
  "drums": 'drums.mp3'
}
, function(){
});

var p3 = new Tone.Players({
  "atm": 'atm.mp3'
}
, function(){
});

var p4 = new Tone.Players({
  "drums2": 'drums2.mp3',
  "bass":'bass.mp3'
}
, function(){
});

p1.connect(vol1);
p2.connect(vol2);
p3.connect(vol3);
p4.connect(vol4);

function piano(){
    p1.get('piano').start();
}

function drums(){
    p2.get('drums').start();
}

function atm(){
    p3.get('atm').start();
}

function drums2(){
    p4.get('drums2').start();
    p4.get('bass').start();
}
*/
