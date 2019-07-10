// JavaScript source code

const navSlide = () => {
    const opener = document.querySelector('.opener');
    const nav = document.querySelector('.nav-link');

    opener.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        opener.classList.toggle('ani')
    });
}
navSlide();

