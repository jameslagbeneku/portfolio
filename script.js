const mobileNav = document.querySelector('.mobile-nav-links')
const container = document.querySelector('.container')
const hamburgerBtn = document.querySelector('.hamburger-menu i')
const mobileCloseBtn = document.querySelector('.mobile-close-menu i')
const toTopBtn = document.querySelector('.to-top-btn')
const body = document.querySelector('body')
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links ul li')

console.log(mobileNavLinks)

hamburgerBtn.addEventListener('click', () => {
    container.style.transform = 'translateX(-100%)';
    container.style.transition = 'all 0.3s ease-in';
    mobileNav.style.display = 'block';
    mobileNav.style.transform = 'translateX(100%)';
    body.style.overflow = 'hidden'
    toTopBtn.style.display = 'none'
})

mobileCloseBtn.addEventListener('click', () => {
    container.style.transform = 'translateX(0%)';
    container.style.transition = 'all 0.3s ease-in';
    mobileNav.style.transform = 'translateX(100%)';
    body.style.overflowY = 'auto'  
    toTopBtn.style.display = 'flex' 
})

mobileNavLinks.forEach(element => element.addEventListener('click', () => {
    container.style.transform = 'translateX(0%)';
    container.style.transition = 'all 0.3s ease-in';
    mobileNav.style.transform = 'translateX(100%)';
    mobileNav.style.display = 'none'
    body.style.overflowY = 'auto'  
    toTopBtn.style.display = 'flex'
}));

