//! IIFE function
//? Intermediately invoked function expression
/* (function () {

})(); */


//import { count } from './fullscreen.js';
//console.log(count);
//console.log(fullscreenBtn);

localStorage.setItem('school', 'ALGOSUP');

let x = 100;

let notes = [];

const noteTxt = document.querySelector('#note-text');

const createBtn = document.querySelector('#create-note');
const clearBtn = document.querySelector('#clear-notes');

const upBtn = document.querySelector('#up-notes');
const downBtn = document.querySelector('#down-notes');

const notesList = document.querySelector('#notes-list > tbody');

function loadNotes() {
    notes = localStorage.getItem('notes') || [];
    notes = JSON.parse(notes);
    for (let i = 0; i < notes.length; i++) {
        const newRow = document.createElement('tr');
        newRow.id = notes[i].id;

        const newNote = document.createElement('td');
        newNote.textContent = notes[i].text;

        const newActions = document.createElement('td');
        const delBtn = document.createElement('button');
        delBtn.id = `del-${notes[i].id}`;
        delBtn.className = 'btn btn-danger';
        delBtn.innerHTML = 'Delete'; //' <i class="fa-solid fa-trash-can" ></ > ';
        delBtn.addEventListener('click', deleteNote);

        const upBtn = document.createElement('button');
        upBtn.id = `up-${notes[i].id}`;
        upBtn.className = 'btn btn-success';
        upBtn.innerHTML = '<i class="fa-solid fa-angles-up"></i>'; 
        upBtn.addEventListener('click', upNote);
    
        const downBtn = document.createElement('button');
        downBtn.id = `down-${notes.length}`;
        downBtn.className = 'btn btn-success';
        downBtn.innerHTML = '<i class="fa-solid fa-angles-down"></i>';
        downBtn.addEventListener('click', downNote);


        newActions.append(delBtn);
        newActions.append(upBtn);
        newActions.append(downBtn);

        newRow.append(newNote);
        newRow.append(newActions);

        notesList.append(newRow);
        noteTxt.focus();
    }
}
loadNotes();

function addNote() {
    // const newNote = document.createElement('li');
    const newRow = document.createElement('tr');
    newRow.id = `note-${notes.length}`;

    const newNote = document.createElement('td');
    newNote.textContent = noteTxt.value;

    const newActions = document.createElement('td');
    const delBtn = document.createElement('button');
    delBtn.id = `del-note-${notes.length}`;
    delBtn.className = 'btn btn-danger';
    delBtn.innerHTML = 'Delete'; //' <i class="fa-solid fa-trash-can" ></ > ';
    delBtn.addEventListener('click', deleteNote);

    const upBtn = document.createElement('button');
    upBtn.id = `up-${notes.length}`;
    upBtn.className = 'btn btn-success';
    upBtn.innerHTML = '<i class="fa-solid fa-angles-up"></i>'; 
    upBtn.addEventListener('click', upNote);


    const downBtn = document.createElement('button');
    downBtn.id = `down-${notes.length}`;
    downBtn.className = 'btn btn-success';
    downBtn.innerHTML = '<i class="fa-solid fa-angles-down" color="red"></i>'; 

    newActions.append(delBtn);
    newActions.append(upBtn);
    newActions.append(downBtn);



    newRow.append(newNote);
    newRow.append(newActions);
    notes.push({
        id: `note-${notes.length}`,
        text: noteTxt.value
    });

    localStorage.setItem('notes', JSON.stringify(notes));

    // notesList.append(newNote);
    notesList.append(newRow);
    noteTxt.value = '';
    noteTxt.focus();
}

function upNote(e) {

    const up = e.target.parentElement.parentElement;
    const upParent = up.parentElement.childNodes;
    const noteId = up.id;
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === noteId) {
            if (i==0)
            {
                swapElements(notes, i, notes.length - 1); 
                swapNodes(upParent[i], upParent[notes.length - 1]); 
            }
            else
            {
                swapElements(notes, i, i-1); 
                swapNodes(upParent[i], upParent[i-1]); 
            }
            break;
        }
    }
    localStorage.setItem('notes', JSON.stringify(notes));  
}

function downNote(e) {
    const down = e.target.parentElement.parentElement;
    const downParent = down.parentElement.childNodes;
    const noteId = down.id;
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === noteId) {
            if (i==notes.length - 1)
            {
                swapElements(notes, i, 0); 
                swapNodes(downParent[i], downParent[0]); 
            }
            else
            {
                swapElements(notes, i, i+1); 
                swapNodes(downParent[i], downParent[i+1]); 
            }
            break;
        }
    }
    localStorage.setItem('notes', JSON.stringify(notes));  
}

function swapElements(arr, i1, i2) {
    let a = arr[i1], b = arr[i2];
    arr[i2] = a;
    arr[i1] = b;    
}

function swapNodes(Node1, Node2) {
    const parentA = Node1.parentNode;
    const siblingA = Node1.nextSibling === Node2 ? Node1 : Node1.nextSibling;

    // Move `nodeA` to before the `nodeB`
    Node2.parentNode.insertBefore(Node1, Node2);

    // Move `nodeB` to before the sibling of `nodeA`
    parentA.insertBefore(Node2, siblingA);  
}

function deleteNote(e) {
    e.target.parentElement.parentElement.remove();
    const noteId = e.target.parentElement.parentElement.id;
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === noteId) {
            notes.splice(i, 1);
            break;
        }
    }
    localStorage.setItem('notes', JSON.stringify(notes));
}

createBtn.addEventListener('click', addNote);

noteTxt.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        addNote();
    }
});

clearBtn.addEventListener('click', clearNotes);

function clearNotes() {
    notesList.innerHTML = '';
    notes = [];
    localStorage.setItem('notes', JSON.stringify(notes));
}

upBtn.addEventListener('click', moveNotesUp);

function moveNotesUp() 
{
    let first = notesList.rows[0];

    first.remove();
    notes.push(notes.shift());
    notesList.append(first);

    localStorage.setItem('notes', JSON.stringify(notes));  
}

downBtn.addEventListener('click', moveNotesDown);

function moveNotesDown() 
{
    let last = notesList.rows[notesList.rows.length - 1];
    console.log(last);

    last.remove();
    notes.unshift(notes.pop());

    notesList.prepend(last);
    localStorage.setItem('notes', JSON.stringify(notes));  

}

