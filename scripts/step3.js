const stds = [
    'Victor',
    'Paul',
    'Laurent',
    'Lucas',
    'Alexis'
]

const stdList = document.querySelector('#std-list');
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', () => {
    //! First Method
    /* let list = '';
    for (let i = 0; i < stds.length; i++) {
        list+= `<li>${stds[i]}</li>`;
        
    }
    stdList.innerHTML=list; */

    //Second Method
    stdList.innerHTML = '';
    for (let i = 0; i < stds.length; i++) {
        const newLi = document.createElement('li');
        newLi.textContent = stds[i];
        stdList.append(newLi);
        
    }
});
