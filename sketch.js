let t;

function setup() {
  createCanvas(windowWidth, windowHeight).parent(container);
  noStroke();
  colorMode(HSL);
  t = new Terrain(15, 0.005, 2);
  t.draw();
}

function draw() {
  t.update();
  t.smartDraw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  t.draw();
}
