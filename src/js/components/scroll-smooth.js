const HEADER_EL_HEIGHT = document.querySelector('.menu').clientHeight;

const scrollSmooth = (() => {
    const smoothScroll = () => {
        function scroll(targetEl, duration) {
            const targets = document.querySelector(targetEl);
            const targetsPosition = targets.getBoundingClientRect().top - HEADER_EL_HEIGHT;
            const startsPosition = window.pageYOffset;
            let startTime = null;

            function ease(t, b, c, d) {
                // eslint-disable-next-line  no-param-reassign
                t /= d / 2;
                if (t < 1) return (c / 2) * t * t + b;
                // eslint-disable-next-line  no-param-reassign
                t -= 1;
                return (-c / 2) * (t * (t - 2) - 1) + b;
            }

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startsPosition, targetsPosition, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }
            requestAnimationFrame(animation);
        }

        function scrollTo() {
            const links = document.querySelectorAll('.js-smooth-scroll');
            links.forEach((each) => {
                // eslint-disable-next-line
                each.addEventListener('click', function () {
                    const currentTarget = this.getAttribute('href');
                    scroll(currentTarget, 1000);
                });
            });
        }
        scrollTo();
    };

    const init = () => {
        smoothScroll();
    };

    return {
        init,
    };
})();

export default scrollSmooth;
