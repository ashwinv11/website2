var t;
var frameCount;
var colorSwitch = false;

function setup() {
  var myCanvas = createCanvas(380, 380);
  myCanvas.parent('p5');
  myCanvas.mousePressed(resetDraw);
  myCanvas.touchStarted(resetDraw);
  myCanvas.touchEnded(resetDraw);
  background(242, 242, 242);
  stroke(209, 55, 55, 25);
  noFill();
  t = 0;
  frameCount = 0;
}

function resetDraw(){
  colorSwitch = !colorSwitch;
  background(242, 242, 242);
  frameCount = 0;
}

function draw() {

  if(!colorSwitch){
    stroke(0, 18);
  }

  else {
    stroke(209, 55, 55, 25);
  }

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
  
  if (frameCount % 1000 === 0) {
    resetDraw();
  }

  frameCount += 1;
}