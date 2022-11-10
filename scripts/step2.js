const p2 = document.querySelector('#p-2');
console.log(p2.innerHTML);

p2.innerHTML = 'PINGAS';
console.log(p2.innerHTML);

const foodImg = document.querySelector('#image-display img');
const changeBtn = document.querySelector('#image-display button');

changeBtn.addEventListener('click', () => {
    foodImg.src = 'images/food2.jpeg';
});