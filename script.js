const openNav = document.querySelector('.fa-bars')
const mobileNav = document.querySelector('.mobile-nav')
const closeNav = document.querySelector('.fa-times')

openNav.addEventListener('click', () => mobileNav.style.right = '0')
closeNav.addEventListener('click', () => mobileNav.style.right = '-100%')

if (mobileNav.style.right = '-100%') {
    mobileNav.style.dislay = 'none'
} else {
    mobileNav.style.dislay = 'block'
}
