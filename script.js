const button = document.querySelector('.svg');
const showNav = document.querySelector('.navigation-bar')

const mobButton = document.querySelector('.mobile-svg');
const mobNav = document.querySelector('.mobile-navigation')
const mobileContent = document.querySelector('.mobile-content-body')

button.addEventListener('mouseenter', function () {
    showNav.className = ('show');
});

showNav.addEventListener('mouseleave', function () {
    showNav.className = ('nav-close')
});

mobButton.addEventListener('mouseenter', function () {
    mobNav.className = ('mob-open');
    mobileContent.classList.add('nav-close')
    mobileContent.classList.remove('mobile-content-body')
});

mobNav.addEventListener('mouseleave', function () {
    mobNav.classList.remove('mob-open')
    mobNav.classList.add('nav-block')
    mobileContent.classList.remove('nav-close')
    mobileContent.classList.add('mobile-content-body')
})
