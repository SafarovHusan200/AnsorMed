let menuBtn = document.querySelector('.menu');
let navbar = document.querySelector('.menu-navbar')
let icon = menuBtn.querySelector('i');
let scrollBtn = document.querySelector('.scrollBtn');

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle('active')
    icon.classList.toggle('fa-xmark')
})

window.addEventListener('scroll', () => {
    navbar.classList.remove('active');
    icon.classList.remove('fa-xmark');

    scrollBtn.classList.toggle('active', window.scrollY > 500)
})

scrollBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0
})