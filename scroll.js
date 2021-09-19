const ElementAnimeted = document.querySelector('#projeto-animado');
const menuDesktop = document.querySelector('.menu-desktop');
const menuLink = document.querySelectorAll('.menu-link');

const animaScroll = () => {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    if(windowTop > ElementAnimeted.offsetTop){
        ElementAnimeted.classList.add('animate');
    }
}

animaScroll();

const menuScroll = () => {
    const windowTop = window.pageYOffset;
    if(windowTop > 5){
        menuDesktop.style.background = 'white';
        for(let i = 0; menuLink.length > i; i++){
            menuLink[i].style.color = "black";
            menuLink[i].style.fontSize = "1rem";
        }
    }else{
        menuDesktop.style.background = 'none';
        for(let i = 0; menuLink.length > i; i++){
            menuLink[i].style.color = "white";
            menuLink[i].style.fontSize = "1.3rem";
        }
    }
}

menuScroll();

window.addEventListener('scroll', animaScroll)
window.addEventListener('scroll', menuScroll)