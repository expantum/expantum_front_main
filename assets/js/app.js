(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _burgerMenu = _interopRequireDefault(require("./components/burger-menu"));

var _slider = _interopRequireDefault(require("./components/slider"));

var _scrollTo = _interopRequireDefault(require("./components/scroll-to"));

var _popup = _interopRequireDefault(require("./components/popup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var resizeHandler = function resizeHandler() {
  var htmlWidth = document.documentElement.clientWidth;

  if (htmlWidth >= 3840) {
    document.documentElement.style.fontSize = 10 / (2250 / htmlWidth) + "px";
  }

  AOS.refresh();
};

var mouseBlocks = document.querySelectorAll(".mouse");

function parallax(event) {
  mouseBlocks.forEach(function (shift) {
    var position = shift.dataset.pValue;
    var x = (window.innerWidth - event.pageX * position) / 90;
    var y = (window.innerHeight - event.pageY * position) / 90;
    var romanScale = shift.dataset.scale;
    shift.style.transform = "translateX(".concat(x, "px) translateY(").concat(y, "px) scale(").concat(romanScale || 1.1, ")");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000
  });
  (0, _slider["default"])();
  (0, _burgerMenu["default"])();
  resizeHandler();

  _scrollTo["default"].init();

  (0, _popup["default"])();
  var player = new Plyr('#player');
  document.querySelector(".main-section").addEventListener("mousemove", parallax);
  window.addEventListener('load', AOS.refresh);
  window.addEventListener('resize', resizeHandler);
});

},{"./components/burger-menu":2,"./components/popup":3,"./components/scroll-to":4,"./components/slider":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var BURGER = document.querySelector('.js-burger-open');
var NAV = document.querySelector('.js-nav');
var BODY = document.querySelector('body');
var CLASS_OVERFLOW = 'overflow';
var CLASS_ACTIVE = 'active';

function initBurger() {
  if (!BURGER) return;
  BURGER.addEventListener('click', function (e) {
    if (!e.currentTarget.classList.contains('active')) {
      openBurger();
    } else {
      closeBurger();
    }
  });

  var openBurger = function openBurger() {
    BURGER.classList.add(CLASS_ACTIVE);
    NAV.classList.add(CLASS_ACTIVE);
    BODY.classList.add(CLASS_OVERFLOW);
  };

  var closeBurger = function closeBurger() {
    BURGER.classList.remove(CLASS_ACTIVE);
    NAV.classList.remove(CLASS_ACTIVE);
    BODY.classList.remove(CLASS_OVERFLOW);
  };
}

;
var _default = initBurger;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var showPopupBtns = document.querySelectorAll('.js-show-popup');
var popups = document.querySelectorAll('.js-popup');
var body = document.body;
var overlay = document.querySelector('.js-overlay');
var CLASS_ACTIVE = 'active';
var CLASS_OVERFLOW = 'overflow';

function initPopup() {
  if (!showPopupBtns.length || !popups.length) return;

  var showPopup = function showPopup(event) {
    var openBtn = event.target.closest('.js-show-popup');
    var activePopup = document.querySelector('.js-popup.active');
    var targetPopup = document.querySelector("[data-popup=".concat(openBtn.dataset.trigger, "]"));

    if (activePopup) {
      activePopup.classList.remove(CLASS_ACTIVE);
    }

    openBtn.classList.add(CLASS_ACTIVE);
    targetPopup.classList.add(CLASS_ACTIVE);
    body.classList.add(CLASS_OVERFLOW);
    overlay.classList.add(CLASS_ACTIVE);
  };

  var hidePopup = function hidePopup(activePopup) {
    var openBtn = document.querySelector('.js-show-popup.active');

    if (!activePopup) {
      return;
    }

    openBtn.classList.remove(CLASS_ACTIVE);
    body.classList.remove(CLASS_OVERFLOW);
    overlay.classList.remove(CLASS_ACTIVE);
    activePopup.classList.remove(CLASS_ACTIVE);
  };

  if (showPopupBtns.length) {
    showPopupBtns.forEach(function (opener) {
      opener.addEventListener('click', function (event) {
        var target = event.target.closest('.js-show-popup');

        if (target.classList.contains(CLASS_ACTIVE)) {
          hidePopup(document.querySelector('.js-popup.active'));
        } else {
          showPopup(event);
        }
      });
    });
  }

  if (overlay) {
    overlay.addEventListener('click', function () {
      hidePopup(document.querySelector('.js-popup.active'));
    });
  }

  if (popups.length) {
    popups.forEach(function (popup) {
      popup.addEventListener('click', function (event) {
        var closeBtn = event.target.closest('.js-popup-close');

        if (!closeBtn) {
          return;
        }

        hidePopup(popup);
      });
    });
  }
}

var _default = initPopup;
exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// const ACTIVE = 'active';
var NAV_LINKS = document.querySelectorAll('.js-link-to');
var BURGER = document.querySelector('.js-burger-open');
var NAV = document.querySelector('.js-nav');
var BODY = document.querySelector('body');
var CLASS_OVERFLOW = 'overflow';
var CLASS_ACTIVE = 'active';

var scrollTo = function () {
  var initScroll = function initScroll() {
    if (!NAV_LINKS.length) return;
    NAV_LINKS.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var href = e.currentTarget.getAttribute('href').substring(1);
        BURGER.classList.remove(CLASS_ACTIVE);
        NAV.classList.remove(CLASS_ACTIVE);
        BODY.classList.remove(CLASS_OVERFLOW);
        top(href);
      });
    });
  };

  var top = function top(id) {
    var scrollTarget = document.getElementById(id);
    if (!scrollTarget) return;
    var elementPosition = scrollTarget.getBoundingClientRect().top;
    var offsetPosition = elementPosition;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  var init = function init() {
    initScroll();
  };

  return {
    init: init,
    top: top
  };
}();

var _default = scrollTo;
exports["default"] = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// import { Swiper } from 'swiper';
function initSwiper() {
  var swiper = new Swiper('.gameSwiper', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  var swiper2 = new Swiper('.mapSwiper', {
    slideToClickedSlide: true,
    initialSlide: 0,
    slidesPerView: 3.5,
    breakpoints: {
      320: {
        slidesPerView: 2.5
      },
      1024: {
        slidesPerView: 3.5
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }); // swiper2.on("slideChange", () => {
  //   const slideList = swiper2.slides;
  //   const prevSlideIndex = slideList.findIndex( slide => slide.className.includes("swiper-slide-prev") );
  //   const targetSlide = slideList[prevSlideIndex - 1 === -1 ? 0 : prevSlideIndex - 1];
  //   if (prevSlideIndex !== -1 && targetSlide) {
  //     targetSlide.classList.add("swiper-slide-filled");
  //   }
  //   console.log(swiper2.slides);
  // });
  // swiper2.width = 3000;

  if (!swiper) return;
  if (!swiper2) return;
}

var _default = initSwiper;
exports["default"] = _default;

},{}]},{},[1]);
