/* (function() {

}) (); */
export let count = 0;
let x = 10;

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