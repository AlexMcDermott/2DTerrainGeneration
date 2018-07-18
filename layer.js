class Layer {
  constructor(name, minHeight, maxHeight, hsl) {
    this.name = name;
    this.minHeight = minHeight;
    this.maxHeight = maxHeight;
    this.hsl = hsl;
  }

  inRange(num) {
    if (this.maxHeight > num && num >= this.minHeight) {
      return true;
    } else {
      return false;
    }
  }

  calcColour(num) {
    let h;
    let s;
    let l;

    if (Array.isArray(this.hsl[0])) {
      h = map(num, this.minHeight, this.maxHeight, this.hsl[0][0], this.hsl[0][1]);
    } else {
      h = this.hsl[0];
    }

    if (Array.isArray(this.hsl[1])) {
      s = map(num, this.minHeight, this.maxHeight, this.hsl[1][0], this.hsl[1][1]);
    } else {
      s = this.hsl[1];
    }

    if (Array.isArray(this.hsl[2])) {
      l = map(num, this.minHeight, this.maxHeight, this.hsl[2][0], this.hsl[2][1]);
    } else {
      l = this.hsl[2];
    }

    return color(h, s, l);
  }
}
