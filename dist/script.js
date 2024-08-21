// DOM Elements
const moreInfoButton = document.getElementById("moreInfo");
const closeButton = document.getElementById("closeButton");

const homePage = document.getElementById("homePage");
const aboutUs = document.getElementById("aboutUs");

const modalElement = document.getElementById("modalWrapper");
const notifyMeButton = document.getElementById("notifyMe");
const modalCloseButton = document.getElementById("modalClose");

// Show modal event
notifyMeButton?.addEventListener("click", () => {
  if (modalElement) {
    modalElement.classList.remove("hidden");
    setTimeout(() => {
      modalElement.classList.remove("opacity-0");
      modalElement.classList.add("opacity-100");
    }, 10);
  }
});

// Close modal event
modalCloseButton?.addEventListener("click", () => {
  if (modalElement) {
    modalElement.classList.remove("opacity-100");
    modalElement.classList.add("opacity-0");
    setTimeout(() => {
      modalElement.classList.add("hidden");
    }, 300);
  }
});

// show more info section
moreInfoButton?.addEventListener("click", () => {
  if (homePage && aboutUs && closeButton) {
    homePage.style.width = "50%";
    aboutUs.style.left = "50%";

    setTimeout(() => {
      closeButton.classList.remove("hidden");
      closeButton.classList.remove("opacity-0");
      closeButton.classList.add("opacity-100");
    }, 1000);
  }
});

// close more info section
closeButton?.addEventListener("click", () => {
  if (homePage && aboutUs && closeButton) {
    homePage.style.width = "100%";
    aboutUs.style.left = "100%";

    setTimeout(() => {
      closeButton.classList.add("hidden");
      closeButton.classList.add("opacity-0");
      closeButton.classList.remove("opacity-100");
    }, 10);
  }
});

// Reverse countdown timer
const startDate = new Date("Aug 21, 2025 00:00:00").getTime();
const x = setInterval(() => {
  // Countdown DOM elements
  const showDays = document.getElementById("days");
  const showHours = document.getElementById("hours");
  const showMinutes = document.getElementById("minute");
  const showSeconds = document.getElementById("second");

  // get new date
  const currentTime = new Date().getTime();
  const distance = startDate - currentTime;

  // calculate time
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // add DOM
  showDays.innerHTML = days;
  showHours.innerHTML = hours < 10 ? "0" + hours : hours;
  showMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  showSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;

  if (distance < 0) {
    clearInterval(x);
    showDays.innerHTML = "00";
    showHours.innerHTML = "00";
    showMinutes.innerHTML = "00";
    showSeconds.innerHTML = "00";
  }
}, 1000);
