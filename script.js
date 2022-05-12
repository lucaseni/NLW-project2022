function onScroll() {
  showNavOnScroll()
  backToTopButtonOnScroll()
};
function showNavOnScroll() {
    if(scrollY > 0){
        navigation.classList.add('scroll')
    }else{
        navigation.classList.remove('scroll')
    }
};
function backToTopButtonOnScroll() {
    if(scrollY > 500) {
        backToTopButton.classList.add('show')
    } else{
        backToTopButton.classList.remove('show')
    }
};
function openMenu(){
    document.body.classList.add('menu-expended')
};
function closeMenu(){
    document.body.classList.remove('menu-expended')
};

function addEvents(){
    ScrollReveal({
        origin: 'top',
        distance: '30rem',
        duration: 800,
    }).reveal(`#home,
     #home img,
    #home .stats,
    #services,
    #services header,
    #sercices .card,
    #about,
    #about header,
    #about .content`);    
}
document.addEventListener('DOMContentLoaded',addEvents);

