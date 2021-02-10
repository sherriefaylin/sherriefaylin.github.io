var canvas;
let c
let m
let y
let k

// function setup() {
//   createCanvas(400, 400);

//   m = color('magenta')
//   y = color('yellow')
//   k = color('black')
//   frameRate(0.5)
// }

// function draw() { 
//   background(242,249,243);
//   noStroke();
//   fill(c)
//   rect(random(0,400),random(0,400) , 20, 20);
//   fill(m)
//   rect(random(0,400),random(0,400), 20, 20);
//   fill(y)
//   rect(random(0,400),random(0,400),20, 20);
//   fill(k)
//   rect(random(0,400),random(0,400), 20, 20);
//    fill(c)
//   rect(random(0,400),random(0,400) , 20, 20);
//   fill(m)
//   rect(random(0,400),random(0,400), 20, 20);
//   fill(y)
//   rect(random(0,400),random(0,400), 20, 20);
//   fill(k)
//   rect(random(0,400),random(0,400), 20, 20);

// }

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1')
  // strokeWeight(8);
  c = color(0,255,255, 127);
  m = color(255,0,255,127)
  y = color(255,255,0,127)
  k = color(0,0,0,127)

}

function draw() {

  background("#FFFFFF");

  // strokeWeight(8);
  // stroke('black');
  // line(pmouseX - 5, pmouseY - 5, mouseX - 5, mouseY - 5);
  frameRate(0.25)
  noStroke();
  
  fill(c)
  rect(random(0, windowWidth), random(0, windowHeight), 10, 10);
  fill(m)
  rect(random(0, windowWidth), random(0, windowHeight), 10, 10);
  fill(y)
  rect(random(0, windowWidth), random(0, windowHeight), 10, 10);
  fill(k)
  rect(random(0, windowWidth), random(0, windowHeight), 10, 10);
  fill(c)
  rect(random(0, windowWidth), random(0, windowHeight), 10, 10);
  fill(m)
  rect(random(0, windowWidth), random(0, windowHeight), 10, 10);
  fill(y)
  rect(random(0, windowWidth), random(0, windowHeight), 10, 10);
  fill(k)
  rect(random(0, windowWidth), random(0, windowHeight), 10, 10);
}

