const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let intervalId = null;

refs.startBtn.addEventListener('click', () => {
  startColorChange();
  refs.startBtn.setAttribute('disabled', 'disabled');
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

refs.stopBtn.addEventListener('click', () => {
  stopColorChange();
  refs.startBtn.removeAttribute('disabled');
});

function stopColorChange() {
  clearInterval(intervalId);
}
