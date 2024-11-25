import * as PIXI from "pixi.js";

class Slot {
  constructor(x, y, alpha, width, height, cost) {
    this.x = x;
    this.y = y;
    this.alpha = alpha;
    this.width = width;
    this.height = height;
    this.cost = cost;
  }

  create() {
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0x00ff00, this.alpha); // Green for debugging
    graphics.drawRect(this.x - this.width / 2, this.y, this.width, this.height); // Draw rectangle
    graphics.endFill();
    return graphics;
  }
}

export default Slot;
