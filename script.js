const openNav = document.querySelector('.fa-bars')
const mobileNav = document.querySelector('.mobile-nav')
const closeNav = document.querySelector('.fa-times')

openNav.addEventListener('click', () => {
    mobileNav.style.right = '0'
    mobileNav.style.display = 'block'
})
closeNav.addEventListener('click', () => {
    mobileNav.style.right = '-100%'
    mobileNav.style.display = 'none'
    mobileNav.style.overflow = 'hidden'
})

// if (mobileNav.style.right = '-100%') {
//     mobileNav.style.dislay = 'none'
// } else {
//     mobileNav.style.dislay = 'block'
// }
