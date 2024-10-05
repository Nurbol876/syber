const swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    autoplay: {
        delay: 3000,
    }
});

const mobile = document.querySelector('.header__mobile')
const aside = document.querySelector('.mobile')
const exit = document.querySelector('.mobile_exit')

mobile.addEventListener('click', () => {
    aside.classList.add('mobile_active')
})

exit.addEventListener('click', () => {
    aside.classList.remove('mobile_active')
})



const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > header.offsetTop) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});