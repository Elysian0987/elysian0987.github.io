import React from 'react';

function Home({ startGame }) {
  return (
    <div>
      <h1>Welcome to Bollywood Heads Up!</h1>
      <h2>Guess the Song!</h2>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
}

export default Home;