'use strict'

let btnmenu = document.getElementById('btnmenu');
let menu = document.getElementById('menu');
let btnUp = document.getElementById('btnUp');

btnmenu.addEventListener('click', () => {
    menu.classList.toggle('getMenu');
});

