const searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
}
const userlogin = document.querySelector('.login-form-container');
document.querySelector('#login-btn ').onclick = () => {
    userlogin.classList.toggle('active');
}
const closeLogin = document.querySelector('.login-form-container');
document.querySelector('#close-login-btn').onclick = () => {
    closeLogin.classList.remove('active');
}
window.onscroll = () => {
    searchform.classList.remove('active');
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active')
    }
}
window.onload = () => {
    closeLogin.classList.remove('active');
    searchform.classList.remove('active');
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active')
    }
}
const swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        650: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,

        },
        1024: {
            slidesPerView: 3,
        },
    },
});