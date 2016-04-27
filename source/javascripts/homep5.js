var t;
var frameCount;
var colorSwitch;

function setup() {
  var myCanvas = createCanvas(380, 380);
  myCanvas.parent('p5');
  myCanvas.mousePressed(resetDraw);
  //myCanvas.touchEnded(resetDraw);
  background(242, 242, 242);
  stroke(209, 55, 55, 25);
  noFill();
  t = 0;
  frameCount = 0;
  colorSwitch = 0;
}

function resetDraw(){
  background(242, 242, 242);

  if (colorSwitch == 0){
    stroke(0, 18);
    colorSwitch = 1;
    console.log("0");
  }

  else {
    stroke(209, 55, 55, 25);
    colorSwitch = 0;
    console.log("1");
  }

  frameCount = 0;
}

function draw() {
  var x1 = width * noise(t + 15);
  var x2 = width * noise(t + 25);
  var x3 = width * noise(t + 35);
  var x4 = width * noise(t + 45);
  var y1 = height * noise(t + 55);
  var y2 = height * noise(t + 65);
  var y3 = height * noise(t + 75);
  var y4 = height * noise(t + 85);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += 0.005;
  
  // clear the background every 5000 frames using mod (%) operator
  if (frameCount % 1000 == 0) {
    //resetDraw();
  }

  frameCount += 1;
}