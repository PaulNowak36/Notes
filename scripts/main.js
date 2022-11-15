localStorage.setItem('school', 'ALGOSUP');
//console.log(localStorage.getItem('school'));
//localStorage.clear();

let notes = [];

const noteTxt = document.querySelector('#note-text');
const createBtn = document.querySelector('#create-note');
const clearBtn = document.querySelector('#clear-notes');

const notesList = document.querySelector('#notes-list > tbody');

const fullscreenBtn = document.querySelector('#fullscreen');
const manageNotes = document.querySelector('#manage-notes');
let isFullscreen = false;

fullscreenBtn.addEventListener('click', () => {
    if (isFullscreen) {
        exitFullscreen();
    } else {
        fullscreen(document.body);
    }
    isFullscreen = !isFullscreen;
});

function fullscreen(element) {
    if (element.requestFullscreen) element.requestFullscreen();
    else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
    else if (element.msRequestFullscreen) element.msRequestFullscreen();
    else if (element.mozRequestFullscreen) element.mozRequestFullscreen();
}

function exitFullscreen() {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
    else if (document.mozExitFullscreen) document.mozExitFullscreen();
}

function loadNotes() {
    notes = localStorage.getItem('notes') || [];
    notes = JSON.parse(notes);
    for (let i = 0; i < notes.length; i++)
    {
        const newRow = document.createElement('tr');
        newRow.id = notes[i].id; 

        const newNote = document.createElement('td');
        newNote.textContent = notes[i].text;


        const newActions = document.createElement('td');
        const delBtn = document.createElement('button');
        delBtn.id = `del-${notes[i].id}`; 
        delBtn.className = 'btn btn-danger';
        delBtn.innerHTML = 'Delete'; 
        delBtn.addEventListener('click', deleteNote);
        newActions.append(delBtn);

        
        newRow.append(newNote);
        newRow.append(newActions);
        
        notesList.append(newRow);
        noteTxt.focus();

    }
}
loadNotes();



createBtn.addEventListener('click', addNote);

noteTxt.addEventListener('keydown', e => {
    if(e.key === 'Enter') {
        addNote();
    }
});



//Add Note
function addNote() {
    
    const newRow = document.createElement('tr');
    newRow.id = `note-${notes.length}`; //New

    const newNote = document.createElement('td');
    newNote.textContent = noteTxt.value;
    //notes.append(noteTxt.value);

    const newActions = document.createElement('td');
    const delBtn = document.createElement('button');
    delBtn.id = `note-${notes.length}`; //New
    delBtn.className = 'btn btn-danger';
    delBtn.innerHTML = 'Delete'; /* '<i class="fa-solid fa-trash-can">';
 */    delBtn.addEventListener('click', deleteNote);
    newActions.append(delBtn);

    
    newRow.append(newNote);
    newRow.append(newActions);
    notes.push({
        id: `note-${notes.length}`,
        text: noteTxt.value
    }); //New

    localStorage.setItem('notes', JSON.stringify(notes));

    notesList.append(newRow);
    noteTxt.value = '';
    noteTxt.focus();
}

clearBtn.addEventListener('click', clearNotes);

//Clear all the notes
function clearNotes() {
    notesList.innerHTML = '';
    notes = [];
    localStorage.setItem('notes', JSON.stringify(notes));
}

function deleteNote(e) {
    e.target.parentElement.parentElement.remove();
    //console.log(e.target.id.slice(4));
    const noteId = console.log(e.target.parentElement.parentElement.id);
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === noteId) {
            notes.splice(i, 1);
            break;
        }
    }
    localStorage.setItem('notes', JSON.stringify(notes));
}