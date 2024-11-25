import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Chicken = ({ position }) => {
  const chickenRef = useRef(null);

  useEffect(() => {
    gsap.to(chickenRef.current, {
      x: position * 60, // Moves 60px per tile
      duration: 0.5,
      ease: "power2.out",
    });
  }, [position]);

  return <div ref={chickenRef} className="chicken">🐔</div>;
};

export default Chicken;
