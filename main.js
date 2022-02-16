// tady je místo pro náš program

console.log('Ahoj, jsem nalinkován');

let nadpis = document.querySelector('h1');
nadpis.classList.add('zluty');

let pocitadlo = 0;
function priNajeti() {
    console.log ('test' + pocitadlo);
    pocitadlo++;
}