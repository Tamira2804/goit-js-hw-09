import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = { startBtn: document.querySelector('[data-start]') };

let isTimerRunning = false;
let dataTimePicker = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }

    refs.startBtn.removeAttribute('disabled');
  },
};

dataTimePicker = flatpickr('#datetime-picker', options);

function startTimer() {
  if (isTimerRunning) {
    return;
  }
  const dateFromTimePicker = document.getElementById('datetime-picker');
  const selectedDate = flatpickr.parseDate(
    dateFromTimePicker.value,
    'Y-m-d H:i'
  );
  const currentDate = new Date();

  if (selectedDate < currentDate) {
    Notiflix.Notify.failure('Please choose a date in the future');
    return;
  }

  isTimerRunning = true;
  refs.startBtn.setAttribute('disabled', 'disabled');

  const timer = setInterval(() => {
    const remainingTime = selectedDate.getTime() - Date.now();

    if (remainingTime <= 0) {
      clearInterval(timer);
      updateTimerDisplay(0, 0, 0, 0);
      Notiflix.Notify.success('Countdown finished!');
      isTimerRunning = false;
      refs.startBtn.removeAttribute('disabled');
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(remainingTime);
    updateTimerDisplay(days, hours, minutes, seconds);
  }, 1000);
}

function updateTimerDisplay(days, hours, minutes, seconds) {
  const daysElement = document.querySelector('[data-days]');
  const hoursElement = document.querySelector('[data-hours]');
  const minutesElement = document.querySelector('[data-minutes]');
  const secondsElement = document.querySelector('[data-seconds]');

  daysElement.textContent = addLeadingZero(days);
  hoursElement.textContent = addLeadingZero(hours);
  minutesElement.textContent = addLeadingZero(minutes);
  secondsElement.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
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

refs.startBtn.addEventListener('click', startTimer);
