'use strict'

let btnmenu = document.getElementById('btnmenu');
let menu = document.getElementById('menu');
let btnUp = document.getElementById('btnUp');

btnmenu.addEventListener('click', () => {
    menu.classList.toggle('getMenu');
});


window.onscroll = () => {
    // Obtenemos la posicion del scroll en pantalla
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;

    // Realizamos alguna accion cuando el scroll este en 100px
    if(scroll > 200){
        btnUp.classList.values('getUp');
        console.log('entro')
    }
}