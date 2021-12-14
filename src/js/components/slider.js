// import { Swiper } from 'swiper';

function initSwiper() {
  const swiper = new Swiper('.gameSwiper', {
    slidesPerView: 1,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const swiper2 = new Swiper('.mapSwiper', {
    slideToClickedSlide: true,
    initialSlide: 0,
    slidesPerView: 3.5,
    breakpoints: {
      320: {
        slidesPerView: 2.5
      },

      1024: {
        slidesPerView: 3.5
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // swiper2.on("slideChange", () => {
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

export default initSwiper;