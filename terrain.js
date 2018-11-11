class Terrain {
  constructor(scl, nScl, sens) {
    this.scl = scl;
    this.nScl = nScl;
    this.sens = sens;
    this.nXOff = pow(scl, 4);
    this.nYOff = pow(scl, 4);
    this.baseX = 0;
    this.baseY = 0;
    this.layers = [
      new Layer('Water', 0.0, 0.25, [[195, 220], 90, 65]),
      new Layer('Sand', 0.25, 0.30, [[35, 50], 90, 65]),
      new Layer('Grass', 0.30, 0.50, [135, [20, 45], 50]),
      new Layer('Dirt', 0.50, 0.55, [40, [15, 35], 40]),
      new Layer('Rock', 0.55, 0.70, [360, 0, [40, 60]]),
      new Layer('Snow', 0.70, 1.0, [360, 0, [80, 100]]),
    ];
  }

  update() {
    let xDisp = floor(((mouseX - this.baseX) * this.sens) / this.scl) * this.scl;
    let yDisp = floor(((mouseY - this.baseY) * this.sens) / this.scl) * this.scl;
    this.nXOff += xDisp;
    this.nYOff += yDisp;
  }

  draw(force = false) {
    if (mouseIsPressed || force === true) {
      this.update();
      for (let x = 0; x <= width; x += this.scl) {
        for (let y = 0; y <= height; y += this.scl) {
          let n = noise((x + this.nXOff) * this.nScl, (y + this.nYOff) * this.nScl);
          fill(this.calcColour(n));
          rect(x, y, this.scl, this.scl);
        }
      }
    }
  }

  calcColour(num) {
    for (let layer of this.layers) {
      if (layer.inRange(num)) {
        return layer.calcColour(num);
      }
    }
  }

  pressed() {
    this.baseX = mouseX;
    this.baseY = mouseY;
  }
}
