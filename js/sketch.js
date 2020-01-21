var canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1')
 
    strokeWeight(8);
  }

  function draw() {
    
    background("#F2F9F3");

        strokeWeight(8);
        stroke('black'); 
    line(pmouseX-5, pmouseY-5, mouseX-5, mouseY-5);

  //  strokeWeight(0.5);
  //   line(732, 876, 732, 0);
 
  //   stroke('gray'); 
  //      strokeWeight(0.5);
  //   line(0,438,1464,438);

  //   stroke('gray');
  } 

