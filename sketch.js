let t;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSL);
  t = new Terrain(15, 0.005, 2);
}

function draw() {
  t.draw();
}
