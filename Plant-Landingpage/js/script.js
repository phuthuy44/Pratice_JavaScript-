const barmenu = document.querySelector('.nav-bar');
let navbars = document.querySelector('#menu-bar');
let header3 = document.querySelector('.header-3');
document.querySelector("#menu-bar").onclick = () => {
        navbars.classList.toggle('fa-times');
        barmenu.classList.toggle('active');
        cart.classList.remove('active');
    }
    /*
    barmenu.addEventListener('click',()=>{
        navbars.classList.toggle('fa-times');
        barmenu.classList.toggle('active');
    })
    */

window.onscroll = () => {
    cart.classList.remove('active');
    userlogin.classList.remove('active');
    navbars.classList.remove('fa-times');
    barmenu.classList.remove('active');
    if (window.scrollY > 250) {
        header3.classList.add('active')
    } else {
        header3.classList.remove('active');
    }
}
const userlogin = document.querySelector('.login-form-container');
document.querySelector('#login-btn ').onclick = () => {
    userlogin.classList.toggle('active');
    navbars.classList.remove('fa-times');
    barmenu.classList.remove('active');
    cart.classList.remove('active');
}
const closeLogin = document.querySelector('.login-form-container');
document.querySelector('#close-login-btn').onclick = () => {
    closeLogin.classList.remove('active');

}
let cart = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cart.classList.toggle('active');
    navbars.classList.remove('fa-times');
    barmenu.classList.remove('active');

}
let swiper = new Swiper(".home-slider", {

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});