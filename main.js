
let paragraph = document.querySelector('p');
function priNajetiZtucni() {
    paragraph.style.fontWeight = 'bold';
}

function priOdjetiOdtucni() {
    paragraph.style.fontWeight = 'normal';
}

function zmenaBarvy() {
    paragraph.classList.toggle('ZmenaBarvy')
}

function zmenaVelikosti() {
    let style = window.getComputedStyle(paragraph, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    paragraph.style.fontSize = (currentSize + 1) + 'px';
}

let music = document.querySelector('#music');
function prehrajHudbu() {
    music.play();
}

function zastavHudbu() {
    music.pause();
}

function ztisitHlasitost() {
    music.volume = 0;
}

function pridatHlasitost() {
    music.volume = 0.5;
}

function maximalniHlasitost() {
    music.volume = 1;
}

function nastavNaZacatek() {
    music.currentTime = 0;
}