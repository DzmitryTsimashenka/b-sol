(() => {
  // resources/js/app.js
  (() => {
    document.addEventListener("DOMContentLoaded", function() {
      var splide = new Splide(".splide", {});
      splide.mount();
      splide.on("move", (newIndex, prevIndex) => {
        if (newIndex === prevIndex)
          return;
        const slideTitle = `slide-title-${newIndex}`;
        const slideDescription = `slide-description-${newIndex}`;
        const titleEl = document.getElementById(slideTitle);
        const descriptionEl = document.getElementById(slideDescription);
        titleEl.classList.add("hidden");
        descriptionEl.classList.add("hidden");
      });
      splide.on("moved", (newIndex, prevIndex) => {
        if (newIndex === prevIndex)
          return;
        const slideTitle = `slide-title-${newIndex}`;
        const slideDescription = `slide-description-${newIndex}`;
        const titleEl = document.getElementById(slideTitle);
        const descriptionEl = document.getElementById(slideDescription);
        titleEl.classList.remove("hidden");
        descriptionEl.classList.remove("hidden");
        titleEl.classList.add("animate__bounceInLeft");
        descriptionEl.classList.add("animate__bounceInRight");
        titleEl.addEventListener("animationend", () => titleEl.classList.remove("animate__bounceInLeft"), { once: true });
        descriptionEl.addEventListener("animationend", () => descriptionEl.classList.remove("animate__bounceInRight"), { once: true });
      });
    });
  })();
})();
