// src/components/Results.js
import React from 'react';

function Results({ score, restartGame }) {
  return (
    <div>
      <h1>Game Over!</h1>
      <p>Your score: {score}</p>
      <button onClick={restartGame}>Play Again</button>
    </div>
  );
}

export default Results;