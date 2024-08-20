const moreInfoButton = document.getElementById("moreInfo");
const homePage = document.getElementById("homePage");
const aboutUs = document.getElementById("aboutUs");
moreInfoButton?.addEventListener("click", () => {
  if (homePage) {
    homePage.style.width = "50%";
  }
  if (aboutUs) {
    aboutUs.style.left = "50%";
  }
});
