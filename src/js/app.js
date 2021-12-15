import initBurger from './components/burger-menu';
import initSwiper from './components/slider';
import scrollTo from './components/scroll-to';
import initPopup from './components/popup';
import sendForm from './components/send-form';

const resizeHandler = () => {
    const htmlWidth = document.documentElement.clientWidth;

    if (htmlWidth >= 3840) {
        document.documentElement.style.fontSize = 10 / (2250 / htmlWidth) + 'px';
    }
    // eslint-disable-next-line no-undef
    AOS.refresh();
};

const mouseBlocks = document.querySelectorAll('.mouse');

function parallax(event) {
    mouseBlocks.forEach((shift) => {
        const position = shift.dataset.pValue;
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        const romanScale = shift.dataset.scale;

        // eslint-disable-next-line no-param-reassign
        shift.style.transform = `translateX(${x}px) translateY(${y}px) scale(${romanScale || 1.1})`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // eslint-disable-next-line no-undef
    AOS.init({
        duration: 1000,
    });
    initSwiper();
    initBurger();
    resizeHandler();
    scrollTo.init();
    initPopup();
    sendForm.init();

    // eslint-disable-next-line no-undef, no-new
    new Plyr('#player');

    document.querySelector('.main-section').addEventListener('mousemove', parallax);

    // eslint-disable-next-line no-undef
    window.addEventListener('load', AOS.refresh);

    window.addEventListener('resize', resizeHandler);
});
