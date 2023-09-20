import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const dateInput = document.querySelector("#datetime-picker");
const buttonStart = document.querySelector('[data-start]');
const dataSeconds = document.querySelector('[data-seconds]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataHours = document.querySelector('[data-hours]');
const dataDays = document.querySelector('[data-days]');

let countdownInterval;

function startCountdown(targetDate) {
  buttonStart.setAttribute("disabled", "true");
  dateInput.disabled = true;
  dateInput.style.pointerEvents = "none";

  countdownInterval = setInterval(() => {
    const currentTime = new Date().getTime();
    const timeRemaining = targetDate - currentTime;

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      updateTimeDisplay(0);
      window.alert("Time's up!");
      buttonStart.removeAttribute("disabled");
    } else {
      const time = convertMs(timeRemaining);
      updateTimeDisplay(time);
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimeDisplay(time) {
  dataDays.textContent = addLeadingZero(time.days);
  dataHours.textContent = addLeadingZero(time.hours);
  dataMinutes.textContent = addLeadingZero(time.minutes);
  dataSeconds.textContent = addLeadingZero(time.seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

buttonStart.addEventListener("click", () => {
  const selectedDate = new Date(dateInput.value);
  if (!isNaN(selectedDate.getTime())) {
    if (selectedDate > new Date()) {
      startCountdown(selectedDate);
    } else {
      Notiflix.Notify.failure("Please choose a date in the future");
    }
  }
});


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
};

flatpickr(dateInput, options);