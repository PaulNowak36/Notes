const p2 = document.querySelector('#p-2');
console.log(p2.innerHTML);

p2.innerHTML = 'PINGAS';
console.log(p2.innerHTML);

const foodImg = document.querySelector('#image-display img');
const changeBtn = document.querySelector('#image-display button');
/* 
let isfirst = true;
changeBtn.addEventListener('click', () => {
    if (isfirst) {
        foodImg.src = 'images/food2.jpeg';
        isfirst = false;
    } else {
        foodImg.src = 'images/food.jpeg';
        isfirst = true;        
    }
}); */

const images = [
    'images/food.jpeg',
    'images/food2.jpeg',
    'images/food3.jpeg'
];

let i = 0;
changeBtn.addEventListener('click', () => {
    i++;
    if (i >= images.length)
        i=0;
    foodImg.src = images[i];
});

const showBtn = document.querySelector('#show-btn');

showBtn.addEventListener('click', () => {
    /* foodImg.classList.add('hide') */
    foodImg.classList.toggle('hide')
})

const showArticle = document.querySelector('#articles-title');
const section = document.querySelector('#section')

console.log(section);

showArticle.addEventListener('click', () => {
    /* foodImg.classList.add('hide') */
    section.classList.toggle('hide')
})