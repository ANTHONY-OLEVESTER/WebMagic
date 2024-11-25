import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import Peg from "./modules/Peg";
import Slot from "./modules/Slot";
import Ball from "./modules/Ball";

const PlinkoGame = ({ levels = 3 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const app = new PIXI.Application({
      width: 800,
      height: 600,
      backgroundColor: 0x1099bb,
    });
    canvasRef.current.appendChild(app.view);

    const pegs = [];
    const slots = [];
    let ball = null;

    const setup = () => {
      const lines = 2 + levels;
      const fraction = 7 / lines;
      let spaceBottom = 150 * fraction;

      const grid = new PIXI.Graphics();
      for (let i = 0; i <= app.renderer.width; i += 50) {
        grid.lineStyle(1, 0xffffff, 0.2);
        grid.moveTo(i, 0);
        grid.lineTo(i, app.renderer.height);
      }
      for (let j = 0; j <= app.renderer.height; j += 50) {
        grid.moveTo(0, j);
        grid.lineTo(app.renderer.width, j);
      }
      app.stage.addChild(grid);


      // Create Pegs
      for (let i = 3; i <= lines; i++) {
        let spaceLeft = 50;
        for (let space = 1; space <= lines - i; space++) {
          spaceLeft += 50 * fraction;
        }

        for (let point = 1; point <= i; point++) {
          const pegObj = new Peg(spaceLeft, spaceBottom, 15 * fraction); // Correct radius
          const newPeg = pegObj.create();
          app.stage.addChild(newPeg);
          pegs.push(pegObj);
          spaceLeft += 100 * fraction;
        }

        spaceBottom += 90 * fraction;
      }

      // Create Slots
      const slotCosts = [1, 2, 3, 4, 5];
      const totalSlots = slotCosts.length;
      const slotWidth = 50 * fraction;
      const slotSpacing = 800 / totalSlots;

      for (let i = 0; i < totalSlots; i++) {
        const slotObj = new Slot(
          i * slotSpacing + slotSpacing / 2,
          app.renderer.height - 100,
          0.5,
          slotWidth,
          slotWidth,
          slotCosts[i]
        );
        const newSlot = slotObj.create();
        app.stage.addChild(newSlot);
        slots.push(slotObj);
      }

      // Create Ball
      const ballObj = new Ball(400, 50, 15); // Ball starts at (400, 50)
      ball = ballObj.create(); // Create and retain the Ball instance
      app.stage.addChild(ballObj.graphic); // Add the graphics object to the stage
    };

    const detectCollisions = (ball, pegs) => {
      pegs.forEach((peg) => {
        const dx = ball.x - peg.x;
        const dy = ball.y - peg.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < ball.radius + peg.radius) {
          // Simple collision response: adjust velocity
          ball.velocity.y *= -0.5; // Reverse Y velocity and reduce speed
          ball.velocity.x += Math.random() * 2 - 1; // Add random deflection
        }
      });
    };

    const gameLoop = (delta) => {
      if (ball) {
        ball.update(delta);
        detectCollisions(ball, pegs);

        // Boundary checks
        if (ball.x < 0 || ball.x > app.renderer.width) {
          ball.velocity.x *= -1; // Bounce horizontally
        }
        if (ball.y > app.renderer.height) {
          ball.velocity.y = 0;
          ball.velocity.x = 0; // Stop the ball if it falls out of bounds
        }
      }
    };

    app.ticker.add(gameLoop);

    setup();

    return () => {
      app.destroy(true, true);
      if (canvasRef.current) {
        canvasRef.current.innerHTML = ""; // Cleanup canvas
      }
    };
  }, [levels]);

  return <div ref={canvasRef}></div>;
};

export default PlinkoGame;
