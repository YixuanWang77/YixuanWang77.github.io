// Tutorial 2: p5.js Drawing Example
// Source: https://p5js.org/reference/p5/mouseIsPressed/

let shapeType = "circle";
let color_picker, bgColorPicker, sizeSld, strokeW, eraserSld;
let eraserOn = false;
let graphics;
let bgColor = "#DDDDDD";

function setup() {
    createCanvas(720, 400);
    background(bgColor); 

    graphics = createGraphics(width, height);
    graphics.clear(); 

    color_picker = select('#colorPicker');
    sizeSld = select('#sizeSlider');
    strokeW = select('#strokeWeightSlider');
    bgColorPicker = select('#bgColorPicker');
    eraserSld = select('#eraserSizeSlider');

    let clearBtn = select('#clearButton');
    clearBtn.mousePressed(() => graphics.clear());

    let eraserBtn = select('#eraserButton');
    eraserBtn.mousePressed(() => {
        eraserOn = !eraserOn;
        console.log("Eraser active:", eraserOn);
    });
    
    bgColorPicker.input(() => {
        bgColor = bgColorPicker.value();
    });
}

function draw() {
    background(bgColor); 
    image(graphics, 0, 0); 

    if (mouseIsPressed) {
        if (eraserOn) {
            graphics.erase();
            graphics.ellipse(mouseX, mouseY, eraserSld.value(), eraserSld.value());
            graphics.noErase();
        } else {
            graphics.fill(color_picker.value());
            graphics.stroke(color_picker.value());
            graphics.strokeWeight(strokeW.value());

            drawShape(mouseX, mouseY);
        }
    }
}

function drawShape(x, y) {
    if (shapeType === "circle") {
        graphics.ellipse(x, y, sizeSld.value(), sizeSld.value());
    } else if (shapeType === "rectangle") {
        graphics.rect(x - sizeSld.value() / 2, y - sizeSld.value() / 2, sizeSld.value(), sizeSld.value());
    } else if (shapeType === "triangle") {
        graphics.triangle(
            x, y - sizeSld.value() / 2,
            x - sizeSld.value() / 2, y + sizeSld.value() / 2,
            x + sizeSld.value() / 2, y + sizeSld.value() / 2
        );
    } else if (shapeType === "line") {
        graphics.line(pmouseX, pmouseY, x, y);
    }
}

function keyPressed() {
    if (key === '1') shapeType = "circle";
    else if (key === '2') shapeType = "rectangle";
    else if (key === '3') shapeType = "triangle";
    else if (key === '4') shapeType = "line";
    else if (key === 'e') eraserOn = !eraserOn;
}
