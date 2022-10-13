(() => {
  // resources/js/app.js
  var minskArenaElements = [
    {
      "href": "images/dummy/img3.jpg",
      "type": "image",
      "title": "My Title",
      "description": "Example",
      "alt": "Alt Image"
    },
    {
      "href": "images/dummy/img2.jpg",
      "type": "image",
      "alt": "image text alternatives"
    },
    {
      "href": "images/dummy/img1.jpg",
      "type": "image",
      "alt": "image text alternatives"
    }
  ];
  var tdEkvatorElements = [
    {
      "href": "images/dummy/img4.jpg",
      "type": "image",
      "title": "My Title",
      "description": "Example",
      "alt": "Alt Image"
    },
    {
      "href": "images/dummy/img5.jpg",
      "type": "image",
      "alt": "image text alternatives"
    },
    {
      "href": "images/dummy/img6.jpg",
      "type": "image",
      "alt": "image text alternatives"
    }
  ];
  var minskMirElements = [
    {
      "href": "images/dummy/img7.jpg",
      "type": "image",
      "title": "My Title",
      "description": "Example",
      "alt": "Alt Image"
    },
    {
      "href": "images/dummy/img8.jpg",
      "type": "image",
      "alt": "image text alternatives"
    },
    {
      "href": "images/dummy/img9.jpg",
      "type": "image",
      "alt": "image text alternatives"
    },
    {
      "href": "images/dummy/img10.jpg",
      "type": "image",
      "alt": "image text alternatives"
    }
  ];
  var kobrinElements = [
    {
      "href": "images/dummy/img4.jpg",
      "type": "image",
      "title": "My Title",
      "description": "Example",
      "alt": "Alt Image"
    },
    {
      "href": "images/dummy/img2.jpg",
      "type": "image",
      "alt": "image text alternatives"
    },
    {
      "href": "images/dummy/img6.jpg",
      "type": "image",
      "alt": "image text alternatives"
    },
    {
      "href": "images/dummy/img7.jpg",
      "type": "image",
      "alt": "image text alternatives"
    }
  ];
  var diamondCrownsElements = [
    {
      "href": "images/diamond-crowns/diamond-crowns-640w.webp",
      "type": "image",
      "title": "\u0410\u043B\u043C\u0430\u0437\u043D\u044B\u0435 \u043A\u043E\u0440\u043E\u043D\u043A\u0438 DLT \u0434\u043B\u044F \u043F\u043B\u0438\u0442\u043A\u0438",
      "alt": "\u0410\u043B\u043C\u0430\u0437\u043D\u044B\u0435 \u043A\u043E\u0440\u043E\u043D\u043A\u0438 DLT \u0434\u043B\u044F \u043F\u043B\u0438\u0442\u043A\u0438"
    },
    {
      "href": "images/diamond-crowns/diamond-crowns-1-640w.webp",
      "type": "image",
      "title": "\u0410\u043B\u043C\u0430\u0437\u043D\u044B\u0435 \u043A\u043E\u0440\u043E\u043D\u043A\u0438 DLT \u0434\u043B\u044F \u043F\u043B\u0438\u0442\u043A\u0438",
      "alt": "\u0410\u043B\u043C\u0430\u0437\u043D\u044B\u0435 \u043A\u043E\u0440\u043E\u043D\u043A\u0438 DLT \u0434\u043B\u044F \u043F\u043B\u0438\u0442\u043A\u0438"
    }
  ];
  var airlessPaintElements = [
    {
      "href": "images/airless-paint/airless-paint-640w.webp",
      "type": "image",
      "title": "\u041F\u043E\u0440\u0448\u043D\u0435\u0432\u043E\u0439 \u0431\u0435\u0437\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442 HVBAN",
      "alt": "\u041F\u043E\u0440\u0448\u043D\u0435\u0432\u043E\u0439 \u0431\u0435\u0437\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442 HVBAN"
    },
    {
      "href": "images/airless-paint/airless-paint-1-640w.webp",
      "type": "image",
      "title": "\u041F\u043E\u0440\u0448\u043D\u0435\u0432\u043E\u0439 \u0431\u0435\u0437\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442 HVBAN",
      "alt": "\u041F\u043E\u0440\u0448\u043D\u0435\u0432\u043E\u0439 \u0431\u0435\u0437\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442 HVBAN"
    },
    {
      "href": "images/airless-paint/airless-paint-2-640w.webp",
      "type": "image",
      "title": "\u041F\u043E\u0440\u0448\u043D\u0435\u0432\u043E\u0439 \u0431\u0435\u0437\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442 HVBAN",
      "alt": "\u041F\u043E\u0440\u0448\u043D\u0435\u0432\u043E\u0439 \u0431\u0435\u0437\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442 HVBAN"
    },
    {
      "href": "images/airless-paint/airless-paint-3-640w.webp",
      "type": "image",
      "title": "\u041F\u043E\u0440\u0448\u043D\u0435\u0432\u043E\u0439 \u0431\u0435\u0437\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442 HVBAN",
      "alt": "\u041F\u043E\u0440\u0448\u043D\u0435\u0432\u043E\u0439 \u0431\u0435\u0437\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442 HVBAN"
    },
    {
      "href": "images/airless-paint/airless-paint-4-640w.webp",
      "type": "image",
      "title": "\u041F\u043E\u0440\u0448\u043D\u0435\u0432\u043E\u0439 \u0431\u0435\u0437\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442 HVBAN",
      "alt": "\u041F\u043E\u0440\u0448\u043D\u0435\u0432\u043E\u0439 \u0431\u0435\u0437\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442 HVBAN"
    },
    {
      "href": "images/airless-paint/airless-paint-5-640w.webp",
      "type": "image",
      "title": "\u041F\u043E\u0440\u0448\u043D\u0435\u0432\u043E\u0439 \u0431\u0435\u0437\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442 HVBAN",
      "alt": "\u041F\u043E\u0440\u0448\u043D\u0435\u0432\u043E\u0439 \u0431\u0435\u0437\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442 HVBAN"
    },
    {
      "href": "images/airless-paint/airless-paint-6-640w.webp",
      "type": "image",
      "title": "\u041F\u043E\u0440\u0448\u043D\u0435\u0432\u043E\u0439 \u0431\u0435\u0437\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442 HVBAN",
      "alt": "\u041F\u043E\u0440\u0448\u043D\u0435\u0432\u043E\u0439 \u0431\u0435\u0437\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442 HVBAN"
    },
    {
      "href": "images/airless-paint/airless-paint-7-640w.webp",
      "type": "image",
      "title": "\u041F\u043E\u0440\u0448\u043D\u0435\u0432\u043E\u0439 \u0431\u0435\u0437\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442 HVBAN",
      "alt": "\u041F\u043E\u0440\u0448\u043D\u0435\u0432\u043E\u0439 \u0431\u0435\u0437\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442 HVBAN"
    },
    {
      "href": "images/airless-paint/airless-paint-8-640w.webp",
      "type": "image",
      "title": "\u041F\u043E\u0440\u0448\u043D\u0435\u0432\u043E\u0439 \u0431\u0435\u0437\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442 HVBAN",
      "alt": "\u041F\u043E\u0440\u0448\u043D\u0435\u0432\u043E\u0439 \u0431\u0435\u0437\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u043E\u043A\u0440\u0430\u0441\u043E\u0447\u043D\u044B\u0439 \u0430\u043F\u043F\u0430\u0440\u0430\u0442 HVBAN"
    }
  ];
  var spatulasElements = [
    {
      "href": "images/spatulas/spatulas-640w.webp",
      "type": "image",
      "title": "\u0424\u0438\u043D\u0438\u0448\u043D\u044B\u0439 h-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0448\u043F\u0430\u0442\u0435\u043B\u044C \xABDLT Finish SILVER\xBB",
      "alt": "\u0424\u0438\u043D\u0438\u0448\u043D\u044B\u0439 h-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0448\u043F\u0430\u0442\u0435\u043B\u044C \xABDLT Finish SILVER\xBB"
    },
    {
      "href": "images/spatulas/spatulas-1-640w.webp",
      "type": "image",
      "title": "\u0424\u0438\u043D\u0438\u0448\u043D\u044B\u0439 h-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0448\u043F\u0430\u0442\u0435\u043B\u044C \xABDLT Finish SILVER\xBB",
      "alt": "\u0424\u0438\u043D\u0438\u0448\u043D\u044B\u0439 h-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0448\u043F\u0430\u0442\u0435\u043B\u044C \xABDLT Finish SILVER\xBB"
    },
    {
      "href": "images/spatulas/spatulas-2-640w.webp",
      "type": "image",
      "title": "\u0424\u0438\u043D\u0438\u0448\u043D\u044B\u0439 h-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0448\u043F\u0430\u0442\u0435\u043B\u044C \xABDLT Finish SILVER\xBB",
      "alt": "\u0424\u0438\u043D\u0438\u0448\u043D\u044B\u0439 h-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0448\u043F\u0430\u0442\u0435\u043B\u044C \xABDLT Finish SILVER\xBB"
    },
    {
      "href": "images/spatulas/spatulas-3-640w.webp",
      "type": "image",
      "title": "\u0424\u0438\u043D\u0438\u0448\u043D\u044B\u0439 h-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0448\u043F\u0430\u0442\u0435\u043B\u044C \xABDLT Finish SILVER\xBB",
      "alt": "\u0424\u0438\u043D\u0438\u0448\u043D\u044B\u0439 h-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0448\u043F\u0430\u0442\u0435\u043B\u044C \xABDLT Finish SILVER\xBB"
    },
    {
      "href": "images/spatulas/spatulas-4-640w.webp",
      "type": "image",
      "title": "\u0424\u0438\u043D\u0438\u0448\u043D\u044B\u0439 h-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0448\u043F\u0430\u0442\u0435\u043B\u044C \xABDLT Finish SILVER\xBB",
      "alt": "\u0424\u0438\u043D\u0438\u0448\u043D\u044B\u0439 h-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0448\u043F\u0430\u0442\u0435\u043B\u044C \xABDLT Finish SILVER\xBB"
    },
    {
      "href": "images/spatulas/spatulas-5-640w.webp",
      "type": "image",
      "title": "\u0424\u0438\u043D\u0438\u0448\u043D\u044B\u0439 h-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0448\u043F\u0430\u0442\u0435\u043B\u044C \xABDLT Finish SILVER\xBB",
      "alt": "\u0424\u0438\u043D\u0438\u0448\u043D\u044B\u0439 h-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0448\u043F\u0430\u0442\u0435\u043B\u044C \xABDLT Finish SILVER\xBB"
    },
    {
      "href": "images/spatulas/spatulas-6-640w.webp",
      "type": "image",
      "title": "\u0424\u0438\u043D\u0438\u0448\u043D\u044B\u0439 h-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0448\u043F\u0430\u0442\u0435\u043B\u044C \xABDLT Finish SILVER\xBB",
      "alt": "\u0424\u0438\u043D\u0438\u0448\u043D\u044B\u0439 h-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0448\u043F\u0430\u0442\u0435\u043B\u044C \xABDLT Finish SILVER\xBB"
    },
    {
      "href": "images/spatulas/spatulas-7-640w.webp",
      "type": "image",
      "title": "\u0424\u0438\u043D\u0438\u0448\u043D\u044B\u0439 h-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0448\u043F\u0430\u0442\u0435\u043B\u044C \xABDLT Finish SILVER\xBB",
      "alt": "\u0424\u0438\u043D\u0438\u0448\u043D\u044B\u0439 h-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0448\u043F\u0430\u0442\u0435\u043B\u044C \xABDLT Finish SILVER\xBB"
    }
  ];
  var tileCutterElements = [
    {
      "href": "images/tile-cutter/tile-cutter-640w.webp",
      "type": "image",
      "title": "\u041F\u043B\u0438\u0442\u043A\u043E\u0440\u0435\u0437 DLT ProLine 800",
      "alt": "\u041F\u043B\u0438\u0442\u043A\u043E\u0440\u0435\u0437 DLT ProLine 800"
    },
    {
      "href": "images/tile-cutter/tile-cutter-1-640w.webp",
      "type": "image",
      "title": "\u041F\u043B\u0438\u0442\u043A\u043E\u0440\u0435\u0437 DLT ProLine 800",
      "alt": "\u041F\u043B\u0438\u0442\u043A\u043E\u0440\u0435\u0437 DLT ProLine 800"
    },
    {
      "href": "images/tile-cutter/tile-cutter-2-640w.webp",
      "type": "image",
      "title": "\u041F\u043B\u0438\u0442\u043A\u043E\u0440\u0435\u0437 DLT ProLine 800",
      "alt": "\u041F\u043B\u0438\u0442\u043A\u043E\u0440\u0435\u0437 DLT ProLine 800"
    },
    {
      "href": "images/tile-cutter/tile-cutter-3-640w.webp",
      "type": "image",
      "title": "\u041F\u043B\u0438\u0442\u043A\u043E\u0440\u0435\u0437 DLT ProLine 800",
      "alt": "\u041F\u043B\u0438\u0442\u043A\u043E\u0440\u0435\u0437 DLT ProLine 800"
    },
    {
      "href": "images/tile-cutter/tile-cutter-4-640w.webp",
      "type": "image",
      "title": "\u041F\u043B\u0438\u0442\u043A\u043E\u0440\u0435\u0437 DLT ProLine 800",
      "alt": "\u041F\u043B\u0438\u0442\u043A\u043E\u0440\u0435\u0437 DLT ProLine 800"
    }
  ];
  var karcherElements = [
    {
      "href": "images/karcher/karcher-640w.webp",
      "type": "image",
      "title": "\u041F\u042B\u041B\u0415\u0421\u041E\u0421 KARCHER WD 3 P",
      "alt": "\u041F\u042B\u041B\u0415\u0421\u041E\u0421 KARCHER WD 3 P"
    },
    {
      "href": "images/karcher/karcher-1-640w.webp",
      "type": "image",
      "title": "\u041F\u042B\u041B\u0415\u0421\u041E\u0421 KARCHER WD 3 P",
      "alt": "\u041F\u042B\u041B\u0415\u0421\u041E\u0421 KARCHER WD 3 P"
    },
    {
      "href": "images/karcher/karcher-2-640w.webp",
      "type": "image",
      "title": "\u041F\u042B\u041B\u0415\u0421\u041E\u0421 KARCHER WD 3 P",
      "alt": "\u041F\u042B\u041B\u0415\u0421\u041E\u0421 KARCHER WD 3 P"
    }
  ];
  var createGalleryFromBlock = (block, elements) => {
    if (block !== null) {
      block.addEventListener("click", function(event) {
        event.preventDefault();
        const gallery = GLightbox({ elements });
        gallery.open();
      });
    }
  };
  (() => {
    document.addEventListener("DOMContentLoaded", function() {
      const myBackToTop = function() {
        var offset = 300, offset_opacity = 1200, back_to_top = document.querySelector(".back-top"), scrollpos = window.scrollY;
        var add_class_back_scroll = function add_class_back_scroll2() {
          back_to_top.classList.add("block");
          back_to_top.classList.remove("hidden");
        };
        var add_class_offset_scroll = function add_class_offset_scroll2() {
          back_to_top.classList.add("opacity-90");
        };
        var remove_class_back_scroll = function remove_class_back_scroll2() {
          back_to_top.classList.remove("block", "opacity-90");
          back_to_top.classList.add("hidden");
        };
        var defaults = {
          duration: 100,
          easing: function easing(t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
          },
          to: 0
        };
        var animatedScrollTo = function animatedScrollTo2(args) {
          if (isInteger(args)) {
            args = {
              to: args
            };
          }
          var options = extend(defaults, args);
          options.startingYOffset = window.pageYOffset;
          options.distanceYOffset = parseInt(options.to, 10) - options.startingYOffset;
          window.requestAnimationFrame(function(timestamp) {
            return animateScroll(options, timestamp);
          });
        };
        var animateScroll = function animateScroll2(options, now) {
          if (!options.startTime) {
            options.startTime = now;
          }
          var currentTime = now - options.startTime;
          var newYOffset = Math.round(options.easing(currentTime, options.startingYOffset, options.distanceYOffset, options.duration));
          if (currentTime < options.duration) {
            window.requestAnimationFrame(function(timestamp) {
              return animateScroll2(options, timestamp);
            });
          } else {
            newYOffset = options.to;
          }
          setScrollTopPosition(newYOffset);
        };
        var setScrollTopPosition = function setScrollTopPosition2(newYOffset) {
          document.documentElement.scrollTop = newYOffset;
          document.body.scrollTop = newYOffset;
        };
        var isInteger = function isInteger2(value) {
          if (Number.isInteger) {
            return Number.isInteger(value);
          } else {
            return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
          }
        };
        var extend = function extend2(defaults2, options) {
          var extendedOptions = {};
          for (var key in defaults2) {
            extendedOptions[key] = options[key] || defaults2[key];
          }
          return extendedOptions;
        };
        var easeInQuint = function easeInQuint2(t, b, c, d) {
          return c * (t /= d) * t * t * t * t + b;
        };
        const scroll_a = document.querySelectorAll(".back-top");
        if (scroll_a != null) {
          for (var i = 0; i < scroll_a.length; i++) {
            scroll_a[i].addEventListener("click", function() {
              animatedScrollTo({
                easing: easeInQuint,
                duration: 100
              });
            });
          }
        }
        window.addEventListener("scroll", function() {
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
      };
      const myLightbox = () => {
        const galleries = [
          { gallery: document.querySelector(".minsk-arena"), elements: minskArenaElements },
          { gallery: document.querySelector(".td-ekvator"), elements: tdEkvatorElements },
          { gallery: document.querySelector(".minsk-mir"), elements: minskMirElements },
          { gallery: document.querySelector(".kobrin"), elements: kobrinElements },
          { gallery: document.querySelector(".diamond-crowns"), elements: diamondCrownsElements },
          { gallery: document.querySelector(".airless-paint"), elements: airlessPaintElements },
          { gallery: document.querySelector(".spatulas"), elements: spatulasElements },
          { gallery: document.querySelector(".tile-cutter"), elements: tileCutterElements },
          { gallery: document.querySelector(".karcher"), elements: karcherElements }
        ];
        galleries.map((item) => createGalleryFromBlock(item.gallery, item.elements));
      };
      const mySplide = () => {
        const splide = new Splide(".splide", {
          width: "100vw",
          height: "100vh",
          lazyLoad: "sequential"
        });
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
      myBackToTop();
      mySplide();
      myLightbox();
    });
  })();
})();
