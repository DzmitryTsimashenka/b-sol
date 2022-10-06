const minskArenaElements = [
    {
        'href': 'images/dummy/img3.jpg',
        'type': 'image',
        'title': 'My Title',
        'description': 'Example',
    },
    {
        'href': 'images/dummy/img2.jpg',
        'type': 'image',
        'alt': 'image text alternatives'
    },
    {
        'href': 'images/dummy/img1.jpg',
        'type': 'image',
        'alt': 'image text alternatives'
    },
];
const tdEkvatorElements = [
    {
        'href': 'images/dummy/img4.jpg',
        'type': 'image',
        'title': 'My Title',
        'description': 'Example',
    },
    {
        'href': 'images/dummy/img5.jpg',
        'type': 'image',
        'alt': 'image text alternatives'
    },
    {
        'href': 'images/dummy/img6.jpg',
        'type': 'image',
        'alt': 'image text alternatives'
    },
];
const minskMirElements = [
    {
        'href': 'images/dummy/img7.jpg',
        'type': 'image',
        'title': 'My Title',
        'description': 'Example',
    },
    {
        'href': 'images/dummy/img8.jpg',
        'type': 'image',
        'alt': 'image text alternatives'
    },
    {
        'href': 'images/dummy/img9.jpg',
        'type': 'image',
        'alt': 'image text alternatives'
    },
    {
        'href': 'images/dummy/img10.jpg',
        'type': 'image',
        'alt': 'image text alternatives'
    },
];
const kobrinElements = [
    {
        'href': 'images/dummy/img4.jpg',
        'type': 'image',
        'title': 'My Title',
        'description': 'Example',
    },
    {
        'href': 'images/dummy/img2.jpg',
        'type': 'image',
        'alt': 'image text alternatives'
    },
    {
        'href': 'images/dummy/img6.jpg',
        'type': 'image',
        'alt': 'image text alternatives'
    },
    {
        'href': 'images/dummy/img7.jpg',
        'type': 'image',
        'alt': 'image text alternatives'
    },
];

const createGalleryFromBlock = (block, elements) => {
    if (block !== null) {
        block.addEventListener("click", function (event) {
            event.preventDefault();

            const gallery = GLightbox({elements});
            gallery.open();
        });
    }
}

(() => {
    document.addEventListener("DOMContentLoaded", function () {
        // Back to top button.
        const myBackToTop = function () {
            // browser window scroll
            var offset = 300,
                offset_opacity = 1200,
                back_to_top = document.querySelector(".back-top"),
                scrollpos = window.scrollY;

            var add_class_back_scroll = function add_class_back_scroll() {
                back_to_top.classList.add("block");
                back_to_top.classList.remove("hidden");
            };

            var add_class_offset_scroll = function add_class_offset_scroll() {
                back_to_top.classList.add("opacity-90");
            };

            var remove_class_back_scroll = function remove_class_back_scroll() {
                back_to_top.classList.remove("block", "opacity-90");
                back_to_top.classList.add("hidden");
            };

            // back to top by es6-scroll-to
            var defaults = {
                duration: 100,
                easing: function easing(t, b, c, d) {
                    return -c * (t /= d) * (t - 2) + b;
                },
                to: 0
            };
            var animatedScrollTo = function animatedScrollTo(args) {
                if (isInteger(args)) {
                    args = {
                        to: args
                    };
                }
                var options = extend(defaults, args);
                options.startingYOffset = window.pageYOffset;
                options.distanceYOffset = parseInt(options.to, 10) - options.startingYOffset;
                window.requestAnimationFrame(function (timestamp) {
                    return animateScroll(options, timestamp);
                });
            };
            var animateScroll = function animateScroll(options, now) {
                if (!options.startTime) {
                    options.startTime = now;
                }
                var currentTime = now - options.startTime;
                var newYOffset = Math.round(options.easing(currentTime, options.startingYOffset, options.distanceYOffset, options.duration));
                if (currentTime < options.duration) {
                    window.requestAnimationFrame(function (timestamp) {
                        return animateScroll(options, timestamp);
                    });
                } else {
                    newYOffset = options.to;
                }
                setScrollTopPosition(newYOffset);
            };
            var setScrollTopPosition = function setScrollTopPosition(newYOffset) {
                document.documentElement.scrollTop = newYOffset;
                document.body.scrollTop = newYOffset;
            };
            var isInteger = function isInteger(value) {
                if (Number.isInteger) {
                    return Number.isInteger(value);
                } else {
                    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
                }
            };
            var extend = function extend(defaults, options) {
                var extendedOptions = {};
                for (var key in defaults) {
                    extendedOptions[key] = options[key] || defaults[key];
                }
                return extendedOptions;
            };
            var easeInQuint = function easeInQuint(t, b, c, d) {
                return c * (t /= d) * t * t * t * t + b;
            };

            const scroll_a = document.querySelectorAll('.back-top');
            if (scroll_a != null) {
                for (var i = 0; i < scroll_a.length; i++) {
                    scroll_a[i].addEventListener("click", function () {
                        animatedScrollTo({
                            easing: easeInQuint,
                            duration: 100
                        });
                    });
                }
            }

            window.addEventListener('scroll', function () {
                scrollpos = window.scrollY;
                if (scrollpos > offset) {
                    add_class_back_scroll();
                } else {
                    remove_class_back_scroll();
                }
                if (scrollpos > offset_opacity) {
                    add_class_offset_scroll();
                }
            });
        }

        // Lightbox.
        const myLightbox = () => {
            const galleries = [
                { gallery: document.querySelector(".minsk-arena"), elements: minskArenaElements },
                { gallery: document.querySelector(".td-ekvator"), elements: tdEkvatorElements },
                { gallery: document.querySelector(".minsk-mir"), elements: minskMirElements },
                { gallery: document.querySelector(".kobrin"), elements: kobrinElements },
            ];

            galleries.map((item) => createGalleryFromBlock(item.gallery, item.elements))
        }

        // Splide.
        const mySplide = () => {
            const splide = new Splide(".splide", {});
            splide.mount();

            splide.on("move", (newIndex, prevIndex) => {
                if (newIndex === prevIndex) return;

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
                if (newIndex === prevIndex) return;

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

                titleEl.addEventListener("animationend", () => titleEl.classList.remove("animate__bounceInLeft"), {once: true});
                descriptionEl.addEventListener("animationend", () => descriptionEl.classList.remove("animate__bounceInRight"), {once: true});
                buttonsEl.addEventListener("animationend", () => buttonsEl.classList.remove("animate__bounceInUp"), {once: true});
            });
        }

        myBackToTop();
        mySplide();
        myLightbox();
    });
})();
