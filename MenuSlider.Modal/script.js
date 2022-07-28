const toggle = document.getElementById('toggle');
const navbar = document.getElementById('nav_bar');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

function closeNav(e) {
    if (
        document.body.classList.contains("show-nav") &&
        e.target !== toggle && !toggle.contains(e.target) &&
        e.target !== navbar && !navbar.contains(e.target)
    ) {
        document.body.classList.toggle("show-nav");
        document.body.removeEventListener("click", closeNav);
    } else if (!document.body.classList.contains("show-nav")) {
        document.body.removeEventListener("click", closeNav);
    }
}
//Menu Slider

toggle.addEventListener("click", () => {
    document.body.classList.toggle("show-nav");
    document.body.addEventListener("click", closeNav);
})

//Modal
open.addEventListener("click", () => modal.classList.add("show-modal"));
close.addEventListener("click", () => modal.classList.remove("show-modal"));
window.addEventListener("click", (e) => e.target == modal ? modal.classList.remove("show-modal") : false);