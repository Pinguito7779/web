let x,y,xvel,yvel;
let size = 100;

let click;
let boom;
let fah;

let pingu;
let pinguOpacity = 0;

let fahimg;
let fahOpacity = 0;

function preload() {
  click = loadSound("assets/sounds/click.mp3");
  boom = loadSound("assets/sounds/boom.mp3");
  fah = loadSound("assets/sounds/fah.mp3");
  
  pingu = loadImage("assets/images/pingu.jpg");
  fahimg = loadImage("assets/images/fahimg.jpg");
}

function setup() {
  frameRate(60);
  createCanvas(700, 450);
  
  x = width /2;
  y = height/2;
  xvel = 10;
  yvel = 20;
}

function playDaSound() {
  let i = random();
  if (i > 0.995) {
    fah.play();
    fahOpacity = 255;
  } else if (i > 0.98) {
    boom.play();
    pinguOpacity = 255;
  } else {
    click.play();
  }
}

function draw() {
  background(20);
  
  // Physics
  x += xvel;
  y += yvel;
  
  if (x + size/2 >= width) {
    x = width - size/2;
    xvel *= -1;
    playDaSound();
  } else if (x - size/2 <= 0) {
    x = size/2;
    xvel *= -1;
    playDaSound();
  }
  
  if (y + size/2 >= height) {
    y = height - size/2;
    yvel *= -1;
    playDaSound();
  } else if (y - size/2 <= 0) {
    y = size/2;
    yvel *= -1;
    playDaSound();
  }
  
  rectMode(CENTER);
  fill(200);
  stroke(0);
  strokeWeight(8);
  rect(x, y, size, size);
  
    tint(255, pinguOpacity);
  image(pingu, 0, 0, width, height);
  pinguOpacity -= 3;
  
  tint(255, fahOpacity);
  image(fahimg, 0, 0, width, height);
  fahOpacity -= 3;
}