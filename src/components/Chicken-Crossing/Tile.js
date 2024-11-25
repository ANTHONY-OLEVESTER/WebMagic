import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Tile = ({ type, isCurrent }) => {
  const tileRef = useRef(null);

  useEffect(() => {
    if (isCurrent) {
      gsap.fromTo(
        tileRef.current,
        { rotateY: 0 },
        { rotateY: 180, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [isCurrent]);

  return (
    <div
      ref={tileRef}
      className={`tile ${type}`}
      style={{
        backgroundColor: isCurrent ? "yellow" : type === "trap" ? "red" : "green",
      }}
    >
      {isCurrent && (type === "trap" ? "💀" : "💰")}
    </div>
  );
};

export default Tile;
