const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let intervalId = null;
let isActive = false;

startBtn.addEventListener('click', () => {
  if (isActive) {
    return;
  }

  startColorChange();
  isActive = true;
});

function startColorChange() {
  intervalId = setInterval(() => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

stopBtn.addEventListener('click', () => {
  stopColorChange();
});

function stopColorChange() {
  clearInterval(intervalId);
}
