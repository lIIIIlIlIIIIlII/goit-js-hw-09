import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startTimerBtn = document.querySelector('[data-start]');
const daysSpanEl = document.querySelector('[data-days]');
const hoursSpanEl = document.querySelector('[data-hours]');
const minutesSpanEl = document.querySelector('[data-minutes]');
const secondsSpanEl = document.querySelector('[data-seconds]');
const inputEl = document.querySelector('#datetime-picker');

startTimerBtn.disabled = true;

let time = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < new Date()) {
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      startTimerBtn.disabled = false;
      time = selectedDates[0].getTime();
    }
  },
};

flatpickr(inputEl, options);

startTimerBtn.addEventListener('click', startTimer);

function addLeadingZero(number) {
  return number.toString().padStart(2, '0');
}

function startTimer() {
  startTimerBtn.disabled = true;
  const interval = setInterval(() => {
    let timerRemaining = (Date.now() - time) * -1;

    if (timerRemaining <= 0) {
      clearInterval(interval);
      Notiflix.Notify.failure('Time is out!');
      return;
    }
    timer(timerRemaining);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function timer(timeLeft) {
  const { days, hours, minutes, seconds } = convertMs(timeLeft);
  daysSpanEl.textContent = addLeadingZero(days);
  hoursSpanEl.textContent = addLeadingZero(hours);
  minutesSpanEl.textContent = addLeadingZero(minutes);
  secondsSpanEl.textContent = addLeadingZero(seconds);
}
