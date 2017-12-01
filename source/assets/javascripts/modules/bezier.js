import p5 from 'p5';

const sketch = new p5(p => {
  let width = 320;
  let height = 320;
  let colorSwitch = false;
  let frameCount = 0;
  let t = 0;

  p.setup = () => {
    const myCanvas = p.createCanvas(width, height);
    myCanvas.parent('bezier');
    myCanvas.mousePressed(resetDraw);
    myCanvas.touchStarted(resetDraw);
    myCanvas.touchEnded(resetDraw);
    p.background(255, 255, 255);
    p.stroke(209, 55, 55, 25);
    p.noFill();
  };

  const resetDraw = () => {
    colorSwitch = !colorSwitch;
    p.background(255, 255, 255);
    frameCount = 0;
  };

  p.draw = () => {
    if(!colorSwitch) {
      p.stroke(0, 18);
    } else {
      p.stroke(209, 55, 55, 25);
    }

    const x1 = width * p.noise(t + 15);
    const x2 = width * p.noise(t + 25);
    const x3 = width * p.noise(t + 35);
    const x4 = width * p.noise(t + 45);
    const y1 = height * p.noise(t + 55);
    const y2 = height * p.noise(t + 65);
    const y3 = height * p.noise(t + 75);
    const y4 = height * p.noise(t + 85);

    p.bezier(x1, y1, x2, y2, x3, y3, x4, y4);

    t += 0.005;

    if(frameCount % 1000 === 0) {
      resetDraw();
    }

    frameCount ++;
  };
});

export default sketch;
