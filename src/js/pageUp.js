'use strict';

function scroll () {
    function trackScroll() {
        const scrolled = window.scrollY;
        const coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.classList.add('pageup_show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('pageup_show');
        }
    }

    const goTopBtn = document.querySelector('.pageup');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
}

scroll()




