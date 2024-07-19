// src/App.js
import React, { useState } from 'react';
import Home from './Home';
import Game from './Game';
import Results from './Results';
import { songsList } from './songs';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('home'); 
  const [score, setScore] = useState(0);
  const [songs, setSongs] = useState([]);

  const startGame = () => {
    setSongs(shuffleAndPick(songsList, 7));
    setGameState('game');
  };

  const shuffleAndPick = (array, num) => {
    let shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  return (
    <div className="App">
      {gameState === 'home' && <Home startGame={startGame} />}
      {gameState === 'game' && <Game songs={songs} setScore={setScore} endGame={() => setGameState('results')} />}
      {gameState === 'results' && <Results score={score} restartGame={() => setGameState('home')} />}
    </div>
  );
}

export default App;
