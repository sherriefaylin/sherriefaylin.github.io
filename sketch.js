var canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1')
 
    strokeWeight(8);
  }

  function draw() {
    
    background(255);

    
    line(pmouseX-5, pmouseY-5, mouseX-5, mouseY-5);
    
  }

