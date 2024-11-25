import React from "react";

const ScoreBoard = ({ scores }) => {
  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      {scores.map((score, index) => (
        <span key={index} style={{ margin: "0 10px" }}>
          Slot {index + 1}: {score}
        </span>
      ))}
    </div>
  );
};

export default ScoreBoard;
