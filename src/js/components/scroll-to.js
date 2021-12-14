// const ACTIVE = 'active';
const NAV_LINKS = document.querySelectorAll('.js-link-to');
const BURGER = document.querySelector('.js-burger-open');
const NAV = document.querySelector('.js-nav');
const BODY = document.querySelector('body');
const CLASS_OVERFLOW = 'overflow';
const CLASS_ACTIVE = 'active';

const scrollTo = (() => {

  const initScroll = () => {

    if (!NAV_LINKS.length) return;

    NAV_LINKS.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const href = e.currentTarget.getAttribute('href').substring(1);


        BURGER.classList.remove(CLASS_ACTIVE);
        NAV.classList.remove(CLASS_ACTIVE);
        BODY.classList.remove(CLASS_OVERFLOW);

        top(href);
      })
    });
  };

  const top = (id) => {
    const scrollTarget = document.getElementById(id);

    if (!scrollTarget) return;

    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  const init = () => {
    initScroll();
  };

  return {
    init,
    top
  };
})();

export default scrollTo;