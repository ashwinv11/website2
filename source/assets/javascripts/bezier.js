import p5 from 'p5';

const sketch = (p5) => {
  let width = 380;
  let height = 380;
  let colorSwitch = false;
  let frameCount = 0;
  let t = 0;

  p5.setup = () => {
    const myCanvas = p5.createCanvas(width, height);
    myCanvas.parent('p5');
    myCanvas.mousePressed(resetDraw);
    myCanvas.touchStarted(resetDraw);
    myCanvas.touchEnded(resetDraw);
    p5.background(242, 242, 242);
    p5.stroke(209, 55, 55, 25);
    p5.noFill();
  };

  const resetDraw = () => {
    colorSwitch = !colorSwitch;
    p5.background(242, 242, 242);
    frameCount = 0;
  };

  p5.draw = () => {
    if(!colorSwitch) {
      p5.stroke(0, 18);
    } else {
      p5.stroke(209, 55, 55, 25);
    }

    const x1 = width * p5.noise(t + 15);
    const x2 = width * p5.noise(t + 25);
    const x3 = width * p5.noise(t + 35);
    const x4 = width * p5.noise(t + 45);
    const y1 = height * p5.noise(t + 55);
    const y2 = height * p5.noise(t + 65);
    const y3 = height * p5.noise(t + 75);
    const y4 = height * p5.noise(t + 85);

    p5.bezier(x1, y1, x2, y2, x3, y3, x4, y4);

    t += 0.005;

    if(frameCount % 1000 === 0) {
      resetDraw();
    }

    frameCount ++;
  };
};

new p5(sketch);
