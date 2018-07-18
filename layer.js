class Layer {
  constructor(name, minHeight, maxHeight, minColour, maxColour, greyScale) {
    this.name = name;
    this.minHeight = minHeight;
    this.maxHeight = maxHeight;
    this.minColour = minColour;
    this.maxColour = maxColour;
    this.greyScale = greyScale || false;
  }

  inRange(num) {
    if (this.maxHeight > num && num >= this.minHeight) {
      return true;
    } else {
      return false;
    }
  }

  calcColour(num) {
    let mappedNum = map(num, this.minHeight, this.maxHeight, this.minColour, this.maxColour);
    if (this.greyScale) {
      return color(360, 0, mappedNum);
    } else {
      return color(mappedNum, 90, 65);
    }
  }
}
