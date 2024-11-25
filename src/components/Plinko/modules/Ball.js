import * as PIXI from "pixi.js";

class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocity = { x: 0, y: 0 }; // Initialize velocity
    this.gravity = 0.5; // Gravity constant
    this.friction = 0.99; // Friction to slow the ball
    this.graphic = null; // Placeholder for the PIXI Graphics object
  }

  create() {
    this.graphic = new PIXI.Graphics();
    this.graphic.beginFill(0xff0000); // Red for debugging
    this.graphic.drawCircle(0, 0, this.radius);
    this.graphic.endFill();
    this.graphic.x = this.x;
    this.graphic.y = this.y;
    return this;
  }

  update(delta) {
    // Apply gravity
    this.velocity.y += this.gravity;

    // Apply friction
    this.velocity.x *= this.friction;
    this.velocity.y *= this.friction;

    // Update position
    this.x += this.velocity.x * delta;
    this.y += this.velocity.y * delta;

    // Update graphic position
    if (this.graphic) {
      this.graphic.x = this.x;
      this.graphic.y = this.y;
    }
  }
}

export default Ball;
