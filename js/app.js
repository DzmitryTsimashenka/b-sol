(() => {
  // resources/js/app.js
  (() => {
    document.addEventListener("DOMContentLoaded", function() {
      const myLightbox = () => {
        const lightbox_class = document.querySelector(".glightbox3");
        if (lightbox_class != null) {
          console.log({ lightbox_class });
          const lightbox = GLightbox({
            selector: ".glightbox3",
            touchNavigation: true,
            loop: true,
            autoplayVideos: true
          });
        }
      };
      const mySplide = () => {
        const splide = new Splide(".splide", {});
        splide.mount();
        splide.on("move", (newIndex, prevIndex) => {
          if (newIndex === prevIndex)
            return;
          const slideTitle = `slide-title-${newIndex}`;
          const slideDescription = `slide-description-${newIndex}`;
          const slideButtons = `slide-buttons-${newIndex}`;
          const titleEl = document.getElementById(slideTitle);
          const descriptionEl = document.getElementById(slideDescription);
          const buttonsEl = document.getElementById(slideButtons);
          titleEl.classList.add("hidden");
          descriptionEl.classList.add("hidden");
          buttonsEl.classList.add("hidden");
        });
        splide.on("moved", (newIndex, prevIndex) => {
          if (newIndex === prevIndex)
            return;
          const slideTitle = `slide-title-${newIndex}`;
          const slideDescription = `slide-description-${newIndex}`;
          const slideButtons = `slide-buttons-${newIndex}`;
          const titleEl = document.getElementById(slideTitle);
          const descriptionEl = document.getElementById(slideDescription);
          const buttonsEl = document.getElementById(slideButtons);
          titleEl.classList.remove("hidden");
          descriptionEl.classList.remove("hidden");
          buttonsEl.classList.remove("hidden");
          titleEl.classList.add("animate__bounceInLeft");
          descriptionEl.classList.add("animate__bounceInRight");
          buttonsEl.classList.add("animate__bounceInUp");
          titleEl.addEventListener("animationend", () => titleEl.classList.remove("animate__bounceInLeft"), { once: true });
          descriptionEl.addEventListener("animationend", () => descriptionEl.classList.remove("animate__bounceInRight"), { once: true });
          buttonsEl.addEventListener("animationend", () => buttonsEl.classList.remove("animate__bounceInUp"), { once: true });
        });
      };
      mySplide();
      myLightbox();
    });
  })();
})();
