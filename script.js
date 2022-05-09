function onScroll() {
   if(scrollY > 0){
       navigation.classList.add('scroll')
   }else{
       navigation.classList.remove('scroll')
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
    #about .content,
    #footer`);    
}
document.addEventListener('DOMContentLoaded',addEvents);
