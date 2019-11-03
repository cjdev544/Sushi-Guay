'use strict'

let btnmenu = document.getElementById('btnmenu');
let menu = document.getElementById('menu');

btnmenu.addEventListener('click', () => {
    menu.classList.toggle('getMenu');
});