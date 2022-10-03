(() => {
  // resources/js/app.js
  (() => {
    document.addEventListener("DOMContentLoaded", function() {
      var splide = new Splide(".splide", {});
      splide.mount();
      splide.on("move", (newIndex) => {
        const nextSlideTitle = `slide-title-${newIndex}`;
        const nextSlideDescription = `slide-description-${newIndex}`;
        const slideTitle = document.getElementById(nextSlideTitle);
        const slideDescription = document.getElementById(nextSlideDescription);
        slideTitle.classList.add("hidden");
        slideDescription.classList.add("hidden");
      });
      splide.on("moved", (newIndex) => {
        const nextSlideTitle = `slide-title-${newIndex}`;
        const nextSlideDescription = `slide-description-${newIndex}`;
        const slideTitle = document.getElementById(nextSlideTitle);
        const slideDescription = document.getElementById(nextSlideDescription);
        slideTitle.classList.remove("hidden");
        slideTitle.classList.add("animate__bounceInLeft");
        slideTitle.addEventListener("animationend", () => {
          slideTitle.classList.remove("animate__bounceInLeft");
        });
        slideDescription.classList.remove("hidden");
        slideDescription.classList.add("animate__bounceInRight");
        slideDescription.addEventListener("animationend", () => {
          slideDescription.classList.remove("animate__bounceInRight");
        });
      });
    });
  })();
})();
