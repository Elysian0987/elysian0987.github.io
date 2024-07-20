const songsList = [
  'Tum Hi Ho', 'Chaiyya Chaiyya', 'Kabhi Kabhi Aditi', 'Tujhe Dekha To', 'Tum Mile', 'Aankhon Mein Teri',
  'Badtameez Dil', 'Kala Chashma', 'Dil Dhadakne Do', 'Tera Ban Jaunga', 'Bulleya', 'Ae Dil Hai Mushkil',
  'Ghungroo', 'Bekhayali', 'Tera Hone Laga Hoon', 'Makhna', 'Kar Gayi Chull', 'Jab Koi Baat Bigad Jaye',
  'Raabta', 'Mast Magan', 'Moh Moh Ke Dhaage', 'Tum Se Hi', 'Samjhawan', 'Sun Saathiya', 'Hawayein',
  'Agar Tum Saath Ho', 'Tera Yaar Hoon Main', 'Zehnaseeb', 'Galliyan', 'Janam Janam', 'Nashe Si Chadh Gayi',
  'Lut Gaye', 'Phir Bhi Tumko Chaahunga', 'Kaise Hua', 'Dil Mein Ho Tum', 'Pee Loon', 'Channa Mereya',
  'Gerua', 'Dil Chori', 'Pal', 'Tum Jo Aaye', 'Bekhayali', 'Tera Ban Jaunga', 'Ghungroo', 'Kalank Title Track',
  'Duniyaa', 'Kabir Singh', 'Raanjhanaa', 'Naina', 'Dil Diyan Gallan', 'Mere Rashke Qamar', 'Main Tera Boyfriend',
  'Kamariya', 'Lambiyaan Si Judaiyaan', 'Sooraj Dooba Hain', 'Shayad', 'Raataan Lambiyan', 'Namo Namo',
  'Apna Time Aayega', 'Zinda', 'First Class', 'Malang', 'Udd Gaye', 'Pachtaoge', 'Hasi Ban Gaye', 'Kaun Tujhe',
  'Tujh Mein Rab Dikhta Hai', 'Khairiyat', 'Ik Vaari Aa', 'Baarish', 'Tera Hone Laga Hoon', 'Mast Magan',
  'Gallan Goodiyan', 'London Thumakda', 'High Rated Gabru', 'Bom Diggy Diggy', 'Morni Banke', 'Jai Jai Shivshankar',
  'Balam Pichkari', 'Badri Ki Dulhania', 'Laila Main Laila', 'Chogada', 'Kamariya', 'Dilbar', 'Tamma Tamma Again',
  'O Saathi', 'Mile Ho Tum', 'Sanam Re', 'Pehli Nazar Mein', 'Jeene Laga Hoon', 'Ishq Sufiyana', 'Teri Meri',
  'O Re Piya', 'Maula Mere Maula', 'Kun Faya Kun', 'Tum Mile', 'Tera Ban Jaunga', 'Pal', 'Bekhayali', 'Kaise Hua',
  'Dil Mein Ho Tum', 'Phir Bhi Tumko Chaahunga', 'Lut Gaye', 'Nashe Si Chadh Gayi', 'Janam Janam', 'Galliyan',
  'Zehnaseeb', 'Tera Yaar Hoon Main', 'Agar Tum Saath Ho', 'Hawayein', 'Sun Saathiya', 'Samjhawan', 'Tum Se Hi',
  'Moh Moh Ke Dhaage', 'Mast Magan', 'Raabta', 'Jab Koi Baat Bigad Jaye', 'Kar Gayi Chull', 'Makhna', 'Tera Hone Laga Hoon',
  'Bekhayali', 'Ghungroo', 'Ae Dil Hai Mushkil', 'Bulleya', 'Tera Ban Jaunga', 'Dil Dhadakne Do', 'Kala Chashma',
  'Badtameez Dil', 'Aankhon Mein Teri', 'Tum Mile', 'Tujhe Dekha To', 'Kabhi Kabhi Aditi', 'Chaiyya Chaiyya', 'Tum Hi Ho',
  // 80s and 90s songs
  'Ek Do Teen', 'Jumma Chumma De De', 'Pehla Nasha', 'Mera Dil Bhi Kitna Pagal Hai', 'Chura Ke Dil Mera', 
  'Tujhe Dekha To Yeh Jaana Sanam', 'Dil To Pagal Hai', 'Ek Ladki Ko Dekha', 'Tip Tip Barsa Pani', 
  'Meri Mehbooba', 'Tumse Milne Ko Dil', 'Tum Dil Ki Dhadkan Mein', 'Ole Ole', 'Mehendi Laga Ke Rakhna', 
  'Mera Laung Gawacha', 'Bole Chudiyan', 'Tera Rang Balle Balle', 'Yeh Kaali Kaali Aankhen', 
  'Pyar Hua Chupke Se', 'Tanha Tanha', 'Dheere Dheere Se Meri Zindagi Mein Aana', 'Mujhe Neend Na Aaye',
  'Sandese Aate Hain', 'Chandni O Meri Chandni', 'Humko Aaj Kal Hai Intezaar', 'Mitwa', 'Koi Mil Gaya',
  'Mahi Ve', 'Saathiya Tune Kya Kiya', 'Chand Sifarish', 'Dil Hai Ke Manta Nahin', 'Akele Hain To Kya Gham Hai',
  // More old songs
  'Khoya Khoya Chand', 'Chand Sa Roshan Chehra', 'Na Jao Saiyan Chhod Ke', 'Dil Deewana Bin Sajna Ke Maane Na',
  'Pyar Hua Ikrar Hua', 'Pal Pal Dil Ke Paas', 'Yeh Shaam Mastani', 'Chura Liya Hai Tumne Jo Dil Ko',
  'Roop Tera Mastana', 'Humein Tumse Pyar Kitna', 'Mere Sapno Ki Rani', 'Lag Ja Gale', 'Tere Bina Zindagi Se',
  'Chalte Chalte', 'Zindagi Ek Safar Hai Suhana', 'Kya Hua Tera Wada', 'Yeh Jo Mohabbat Hai', 
  'Hawa Ke Saath Saath', 'Ajeeb Dastan Hai Yeh', 'Mere Haathon Mein', 'Aap Jaisa Koi', 'Dum Maro Dum', 
  'Baharon Phool Barsao', 'Aye Mere Humsafar', 'Mere Samne Wali Khidki Mein', 'Ek Ajnabee Haseena Se',
  'Tere Mere Sapne', 'Phoolon Ka Taron Ka', 'Mere Mehboob Qayamat Hogi', 'Yeh Reshmi Zulfein', 'Chingari Koi Bhadke'
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
  const beta = event.beta; // Tilt front-to-back
  const gamma = event.gamma; // Tilt left-to-right
  
  if (beta > 80 && beta < 100) {
    handleCorrect();
  } else if (beta < -80 && beta > -100) {
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
