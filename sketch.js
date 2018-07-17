const scl = 15;
const nScl = 0.005;
const sens = 2;
let nXOff;
let nYOff;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  nXOff = mouseX;
  nYOff = mouseY;
}

function draw() {
  for (let x = 0; x <= width; x += scl) {
    for (let y = 0; y <= height; y += scl) {
      let n = noise((x + nXOff) * nScl, (y + nYOff) * nScl);
      fill(getColour(n));
      rect(x, y, scl, scl);
    }
  }

  nXOff = floor((mouseX * sens) / scl) * scl;
  nYOff = floor((mouseY * sens) / scl) * scl;
}

function getColour(num) {
  if (num >= 0.70) {
    return 'WHITE';
  } else if (0.70 > num && num >= 0.55) {
    return 'GREY';
  } else if (0.55 > num && num >= 0.30) {
    return 'GREEN';
  } else {
    return 'BLUE';
  }
}
