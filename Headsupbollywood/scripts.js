const songsList = [
    'Song 1', 'Song 2', 'Song 3', 'Song 4', 'Song 5', 'Song 6', 'Song 7',
    'Song 8', 'Song 9', 'Song 10', 'Song 11', 'Song 12', 'Song 13', 'Song 14',
    // Add more songs here...
  ];
  
  let gameState = 'home'; // 'home', 'game', 'results'
  let score = 0;
  let songs = [];
  let currentSongIndex = 0;
  let timeLeft = 60; // 1 minute timer
  
  function startGame() {
    songs = shuffleAndPick(songsList, 7);
    gameState = 'game';
    score = 0;
    currentSongIndex = 0;
    timeLeft = 60;
    document.getElementById('home').style.display = 'none';
    document.getElementById('game').style.display = 'flex';
    document.getElementById('results').style.display = 'none';
    document.getElementById('song').innerText = songs[currentSongIndex];
    startTimer();
    window.addEventListener('deviceorientation', handleOrientation);
  }
  
  function shuffleAndPick(array, num) {
    let shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }
  
  function startTimer() {
    const timerElement = document.getElementById('timer');
    const timerInterval = setInterval(() => {
      timeLeft--;
      timerElement.innerText = `Time Left: ${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endGame();
      }
    }, 1000);
  }
  
  function handleOrientation(event) {
    const beta = event.beta; // Assuming beta axis for simplicity
    if (beta > 70) {
      handleCorrect();
    } else if (beta < -70) {
      handleSkip();
    }
  }
  
  function handleCorrect() {
    score++;
    nextSong();
  }
  
  function handleSkip() {
    nextSong();
  }
  
  function nextSong() {
    if (currentSongIndex + 1 < songs.length) {
      currentSongIndex++;
      document.getElementById('song').innerText = songs[currentSongIndex];
    } else {
      endGame();
    }
  }
  
  function endGame() {
    gameState = 'results';
    window.removeEventListener('deviceorientation', handleOrientation);
    document.getElementById('home').style.display = 'none';
    document.getElementById('game').style.display = 'none';
    document.getElementById('results').style.display = 'flex';
    document.getElementById('score').innerText = score;
  }
  
  function restartGame() {
    gameState = 'home';
    document.getElementById('home').style.display = 'flex';
    document.getElementById('game').style.display = 'none';
    document.getElementById('results').style.display = 'none';
  }
  