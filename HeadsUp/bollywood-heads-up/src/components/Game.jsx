// src/components/Game.js
import React, { useState, useEffect } from 'react';

function Game({ songs, setScore, endGame }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 1 minute timer

  useEffect(() => {
    const handleOrientation = (event) => {
      const { beta } = event; // Assuming beta axis for simplicity
      if (beta > 70) {
        handleCorrect();
      } else if (beta < -70) {
        handleSkip();
      }
    };

    window.addEventListener('deviceorientation', handleOrientation);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, [currentSongIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          endGame();
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCorrect = () => {
    setScore((prev) => prev + 1);
    if (currentSongIndex + 1 < songs.length) {
      setCurrentSongIndex(currentSongIndex + 1);
    } else {
      endGame();
    }
  };

  const handleSkip = () => {
    if (currentSongIndex + 1 < songs.length) {
      setCurrentSongIndex(currentSongIndex + 1);
    } else {
      endGame();
    }
  };

  return (
    <div>
      <h2>{songs[currentSongIndex]}</h2>
      <p>Time Left: {timeLeft}s</p>
    </div>
  );
}

export default Game;
