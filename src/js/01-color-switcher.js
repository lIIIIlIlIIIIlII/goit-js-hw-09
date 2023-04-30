const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId = null;

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function startBackgroundColorChange() {
  intervalId = setInterval(changeBackgroundColor, 1000);
  startButton.disabled = true;
}

function stopBackgroundColorChange() {
  clearInterval(intervalId);
  startButton.disabled = false;
}

startButton.addEventListener('click', startBackgroundColorChange);
stopButton.addEventListener('click', stopBackgroundColorChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
