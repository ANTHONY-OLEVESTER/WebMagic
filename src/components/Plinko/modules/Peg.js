import * as PIXI from "pixi.js";

class Peg {
  constructor(x, y, radius, color = 0x0000ff) { // Blue for debugging
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  create() {
    const graphics = new PIXI.Graphics();
    graphics.beginFill(this.color);
    graphics.drawCircle(0, 0, this.radius);
    graphics.endFill();
    graphics.x = this.x;
    graphics.y = this.y;
    return graphics;
  }
}

export default Peg;
