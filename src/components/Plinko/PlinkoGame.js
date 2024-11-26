import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import Peg from "./modules/Peg";
import Slot from "./modules/Slot";
import Ball from "./modules/Ball";

const PlinkoGame = ({ levels = 10 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const app = new PIXI.Application({
      width: window.innerWidth * 0.8,
      height: window.innerHeight * 0.8,
      backgroundColor: 0x1099bb,
    });

    // Append the PIXI canvas to the DOM
    if (canvasRef.current) {
      canvasRef.current.appendChild(app.view);
    }

    const pegs = [];
    const slots = [];
    const balls = []; // Array to store multiple balls

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

      // Create Multiple Balls
      for (let i = 0; i < 5; i++) {
        const ballObj = new Ball(400, 50, 15); // Ball starts at (400, 50)
        ballObj.create(); // Ensure the graphic is created
        ballObj.velocity.x = 2 + (Math.random() - 0.5) * 0.5; // Add slight randomness
        ballObj.velocity.y = 1; // Initial downward velocity
        balls.push(ballObj);
        app.stage.addChild(ballObj.graphic); // Add the graphics object to the stage
      }
    };

    const detectCollisions = (ballObj, pegs) => {
      pegs.forEach((peg) => {
        if (!peg || !ballObj || !ballObj.graphic) return; // Skip null or uninitialized objects

        const dx = ballObj.graphic.x - peg.x;
        const dy = ballObj.graphic.y - peg.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < ballObj.radius + peg.radius) {
          // Normalize the direction vector
          const normalX = dx / distance;
          const normalY = dy / distance;

          // Reflect the velocity along the perpendicular direction
          const dotProduct =
            ballObj.velocity.x * normalX + ballObj.velocity.y * normalY;
          ballObj.velocity.x -= 2 * dotProduct * normalX;
          ballObj.velocity.y -= 2 * dotProduct * normalY;

          // Add a slight dampening to reduce velocity on collisions
          ballObj.velocity.x *= 0.9;
          ballObj.velocity.y *= 0.9;
        }
      });
    };

    const gameLoop = (delta) => {
      balls.forEach((ballObj) => {
        if (!ballObj || !ballObj.graphic) return; // Skip uninitialized balls

        ballObj.update(delta);
        detectCollisions(ballObj, pegs);

        // Boundary checks
        if (ballObj.graphic.x < 0 || ballObj.graphic.x > app.renderer.width) {
          ballObj.velocity.x *= -1; // Bounce horizontally
        }
        if (ballObj.graphic.y > app.renderer.height) {
          ballObj.velocity.y = 0;
          ballObj.velocity.x = 0; // Stop the ball if it falls out of bounds
        }
      });
    };

    app.ticker.add(gameLoop);

    setup();

    const resize = () => {
      app.renderer.resize(window.innerWidth * 0.8, window.innerHeight * 0.8);
    };
    window.addEventListener("resize", resize);

    // Cleanup on component unmount
    return () => {
      app.ticker.stop();
      app.stage.removeChildren();
      app.destroy(true, true);
      balls.length = 0;
      pegs.length = 0;
      slots.length = 0;
      window.removeEventListener("resize", resize);
      if (canvasRef.current) {
        canvasRef.current.innerHTML = ""; // Cleanup DOM
      }
    };
  }, [levels]);

  return <div ref={canvasRef} className="plinko-game"></div>;
};

export default PlinkoGame;
