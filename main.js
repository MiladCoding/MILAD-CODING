const header = document.querySelector("header")

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true
})
sr.reveal('.home-text',{delay:350,origin:'left'})
sr.reveal('.home-image',{delay:350,origin:'right'})
sr.reveal('.about',{delay:200,origin:'bottom'})
sr.reveal('.portfolio',{delay:200,origin:'bottom'})
sr.reveal('.service',{delay:200,origin:'bottom'})
sr.reveal('.cta',{delay:200,origin:'bottom'})
sr.reveal('.contact',{delay:200,origin:'bottom'})
sr.reveal('.sub-service',{delay:200,origin:'bottom'})

