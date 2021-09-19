const hamburguer = document.querySelector('.hamburguer');
const menuMobile = document.querySelector('.menu-mobile');

hamburguer.addEventListener('click', () => {
    document.querySelector('.menu-mobile').classList.toggle('show-menu');
    document.querySelector('.hamburguer').classList.toggle('hamburguer-animate');
    document.querySelector('.line1').classList.toggle('line1-animate');
    document.querySelector('.line2').classList.toggle('line2-animate');
    document.querySelector('.line3').classList.toggle('line3-animate');
})

const clickOut = (event) => {
    const menu = menuMobile.contains(event.target);
    const ham = hamburguer.contains(event.target);
    
    if(!menu && !ham){
        menuMobile.classList.remove('show-menu');
        document.querySelector('.hamburguer').classList.remove('hamburguer-animate');
        document.querySelector('.line1').classList.remove('line1-animate');
        document.querySelector('.line2').classList.remove('line2-animate');
        document.querySelector('.line3').classList.remove('line3-animate');
    }
}

document.addEventListener('click', clickOut);


const a = document.querySelectorAll('.menu-mobile li')
for(let i = 0; a.length > i; i++){
    a[i].addEventListener('click', () => {
        menuMobile.classList.remove('show-menu');
        document.querySelector('.hamburguer').classList.remove('hamburguer-animate');
        document.querySelector('.line1').classList.remove('line1-animate');
        document.querySelector('.line2').classList.remove('line2-animate');
        document.querySelector('.line3').classList.remove('line3-animate');
    })
}