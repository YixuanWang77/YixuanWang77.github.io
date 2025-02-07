function setup() {
    createCanvas(1920, 1080);
    console.log("Canvas created with size 1920x1080");
}
function draw() {
    background(178);
    circle(mouseX,mouseY,20,20);
    fill(30)
    console.log("Mouse position:", mouseX, mouseY);
}