let t;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSL);
  t = new Terrain(20, 0.005, 0.25);
  t.draw(true);
}

function draw() {
  t.draw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  t.draw(true);
}

function mousePressed() {
  t.pressed();
}
