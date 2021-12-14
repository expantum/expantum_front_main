const BURGER = document.querySelector('.js-burger-open');
const NAV = document.querySelector('.js-nav');
const BODY = document.querySelector('body');
const CLASS_OVERFLOW = 'overflow';
const CLASS_ACTIVE = 'active';

function initBurger() {
    if (!BURGER) return;

    const openBurger = () => {
        BURGER.classList.add(CLASS_ACTIVE);
        NAV.classList.add(CLASS_ACTIVE);
        BODY.classList.add(CLASS_OVERFLOW);
    };

    const closeBurger = () => {
        BURGER.classList.remove(CLASS_ACTIVE);
        NAV.classList.remove(CLASS_ACTIVE);
        BODY.classList.remove(CLASS_OVERFLOW);
    };

    BURGER.addEventListener('click', (e) => {
        if (!e.currentTarget.classList.contains('active')) {
            openBurger();
        } else {
            closeBurger();
        }
    });
}

export default initBurger;
