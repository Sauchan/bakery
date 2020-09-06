//Select element function 

/*function selectElement(element) {
    return document.querySelector(element);
}

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function() {
    body.classList.toggle('open');
}) */ 

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('body').classList.toggle('open');
})