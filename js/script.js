const computerSequence = new Array(20);
const colors = [];
let playerSequence = [];
let strictMode = false;
let power = false;
let victory = false;
let round;
let correct = true;

const counter = document.querySelector('.game-counter');
const strictButton = document.querySelector('#strict');
const powerButton = document.querySelector('#power');
const startButton = document.querySelector('#start');

// Capture the ID names of the game colors and save it in the colors array
const queryColors = document.getElementById('colors');
for (let i = 0; i < queryColors.childElementCount; i += 1) {
  colors[i] = queryColors.children[i].id;
}

// lights up the colour played
function playColor(color) {
  const playedColor = document.querySelector(`div[id="${color}"]`);
  playedColor.classList.add('playing');
}

// plays the audio corresponding to the played tile
function playAudio(color) {
  const beep = document.querySelector(`audio[data-key="${color}"]`);
  beep.play();
  playColor(color);
}

// removes the brightness of the played color
const colorPlayed = Array.from(document.querySelectorAll('.colors-size'));
colorPlayed.forEach((color) => {
  color.addEventListener('transitionend', (e) => {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  });
});

// adds event listener to game colours
const colorEvents = Array.from(queryColors.querySelectorAll('.colors-size'));
colorEvents.forEach(color => color.addEventListener('click', played));

