const aboutButton = document.querySelector(".about__button");
const aboutElement = document.querySelector("[data-accordion=\"element\"]");

if (aboutButton) {
  aboutButton.addEventListener("click", function () {
    if (!aboutElement.classList.contains("is-active")) {
      aboutButton.textContent = "Свернуть";
    } else {
      aboutButton.textContent = "Подробнее";
    }
  });
}
