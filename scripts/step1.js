console.log('Working!');

//const p2 = document.getElementById('p-2');
const p2 = document.querySelector('#p-2')
console.log(p2);

//const parElms = document.getElementsByClassName('bg-dark');
const parElms = document.querySelectorAll('.bg-dark')
console.log(parElms);
console.log(parElms.length);


//const parTagElms = document.getElementsByTagName('p');
const parTagElms = document.querySelectorAll('p');
console.log(parTagElms);

const section = document.querySelector('section')
console.log(section);

console.log(section.children);
console.log(section.childNodes);

const sayHello = document.querySelector('#say-hello');
console.log(sayHello);

//! First
/* sayHello.addEventListener('click', function(e) {
    console.log('Hello');
});
 */

//! Second
let clicks = 0;
sayHello.addEventListener('click', e => {

    if (clicks < 2) {
        e.preventDefault();
        clicks++;
    }

}); 

//! Third
/* function hello(e) {
    console.log('Hello');
}
sayHello.addEventListener('click', hello) */

const userInput = document.querySelector('#user-input');
userInput.addEventListener('keydown', e => {
    console.log('Key pressed');
    console.log(e.key);
});