"use strict";
(function () {
  const slider = document.querySelector(".js-main-slider-container");
  const vw = window.innerWidth;
  const wrapper = slider.querySelector(".swiper-wrapper");

  console.log("warpper", slider);

  if (wrapper.childNodes.length > 3 && vw >= 744) {
    new Swiper(`.js-main-slider-concert`, {
      // Optional parameters
      slidesPerView: 3,
      spaceBetween: 40,
      initialSlide: 0,
      draggable: false,
      pagination: false,
      loop: true,
      navigation: {
        nextEl: ".js-main-next-concert",
        prevEl: ".js-main-prev-concert",
      },
    });
  } else {
    slider.classList.add("disabled");
  }
})();
