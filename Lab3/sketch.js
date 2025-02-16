let bgColorPicker; 
let sizeSlider; 
let shapeSize = 30;

function setup() {
    createCanvas(720, 400);

    bgColorPicker = select('#bgColor');
    bgColorPicker.input(updateBackground);

    sizeSlider = select('#slider');
    sizeSlider.input(updateShapeSize);

    updateBackground(); 
}

function draw() {
    background(bgColorPicker.value()); 

    
    fill(200, 0, 100);
    noStroke();
    ellipse(mouseX, mouseY, shapeSize, shapeSize);
}

function updateBackground() {
    background(bgColorPicker.value());
}

function updateShapeSize() {
    shapeSize = sizeSlider.value(); 
    console.log('Shape size updated to:', shapeSize);
}
