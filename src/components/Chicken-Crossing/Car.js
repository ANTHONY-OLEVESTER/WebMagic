import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Car = () => {
  const carRef = useRef(null);

  useEffect(() => {
    gsap.to(carRef.current, {
      x: "100vw",
      duration: 3,
      ease: "linear",
      repeat: -1,
      delay: Math.random() * 2,
    });
  }, []);

  return <div ref={carRef} className="car">🚗</div>;
};

export default Car;
