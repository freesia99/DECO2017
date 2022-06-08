const menuBtn = document.querySelector('.mediaMenu')
const navlinks = document.querySelector(".header-bottom")
menuBtn.addEventListener('click',()=>{
    navlinks.classList.toggle('media-bottom')
})