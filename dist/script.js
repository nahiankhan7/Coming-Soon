const notifyMeButton = document.getElementById("notifyMe");
const moreInfoButton = document.getElementById("moreInfo");
const closeButton = document.getElementById("closeButton");

const homePage = document.getElementById("homePage");
const aboutUs = document.getElementById("aboutUs");

const modal = document.getElementById("modalWrapper");
const modalCloseButton = document.getElementById("modalClose");

notifyMeButton?.addEventListener("click", () => {
  if (modal) {
    modal.classList.remove("hidden");
  }
});

modalCloseButton?.addEventListener("click", () => {
  if (modal) {
    modal.classList.add("hidden");
  }
});

moreInfoButton?.addEventListener("click", () => {
  if (homePage && aboutUs && closeButton) {
    homePage.style.width = "50%";
    aboutUs.style.left = "50%";

    setTimeout(() => {
      closeButton.style.display = "block";
    }, 1000);
  }
});

closeButton?.addEventListener("click", () => {
  if (homePage && aboutUs && closeButton) {
    homePage.style.width = "100%";
    aboutUs.style.left = "100%";
    closeButton.style.display = "none";
  }
});
