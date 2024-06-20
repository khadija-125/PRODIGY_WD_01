const contain = document.querySelector('.container');

window.addEventListener('scroll', () => {
if(window.scrollY > 150){
    contain.classList.add('container-scrolled');
}else if(window.scrollY<=550)
    {
        contain.classList.remove('container-scrolled'); 
    }

});