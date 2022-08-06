let navbar = document.querySelector('.nav-coffee-bar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    cart.classList.remove('active');
    searchFrom.classList.remove('active');
}
let searchFrom = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchFrom.classList.toggle('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');

}
let cart = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    searchFrom.classList.remove('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
    cart.classList.remove('active');
    searchFrom.classList.remove('active');
}
document.querySelector('#home-coffee').onclick = () => {
    cart.classList.remove('active');
    navbar.classList.remove('active');
    searchFrom.classList.remove('active');
}