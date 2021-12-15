// import { Swiper } from 'swiper';

function initSwiper() {
    const gameSwiperContainer = document.querySelector('#gameSwiperContainer');
    // eslint-disable-next-line no-undef
    const gameSwiper = new Swiper(gameSwiperContainer.querySelector('.gameSwiper'), {
        slidesPerView: 1,
        loop: true,

        navigation: {
            nextEl: gameSwiperContainer.querySelector('.swiper-button-next'),
            prevEl: gameSwiperContainer.querySelector('.swiper-button-prev'),
        },
        pagination: false,
        pagination_: {
            el: gameSwiperContainer.querySelector('.swiper-pagination'),
            clickable: true,
        },
    });

    const roadMapSwiperContainer = document.querySelector('#roadmapSwiperContainer');
    // eslint-disable-next-line no-undef
    const roadMapSwiper = new Swiper(roadMapSwiperContainer.querySelector('.mapSwiper'), {
        slideToClickedSlide: true,
        initialSlide: 0,
        slidesPerView: 3.5,
        breakpoints: {
            320: {
                slidesPerView: 2.5,
            },

            1024: {
                slidesPerView: 3.5,
            },
        },

        navigation: {
            nextEl: roadMapSwiperContainer.querySelector('.swiper-button-next'),
            prevEl: roadMapSwiperContainer.querySelector('.swiper-button-prev'),
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

    // eslint-disable-next-line
    if (!gameSwiper) return;
    // eslint-disable-next-line
    if (!roadMapSwiper) return;
}

export default initSwiper;
