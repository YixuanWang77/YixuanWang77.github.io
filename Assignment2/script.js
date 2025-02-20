// Tutorial 1: onclick event
// Source: https://www.w3schools.com/jsref/event_onclick.asp

document.addEventListener("DOMContentLoaded", function () {
    let clearButton = document.getElementById("clearButton");
    let eraserButton = document.getElementById("eraserButton");

    clearButton.onclick = function () {
        console.log("Canvas Cleared");
    };

    eraserButton.onclick = function () {
        console.log("Eraser Mode Toggled");
    };
});
