function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    background(240);
    frameRate(60);
}

function draw() {
    if (frameCount % 30 === 0) { 
        background(240); 
    }

    for (let x = 20; x < width; x += 40) {
        for (let y = 20; y < height; y += 40) {
            fill(random(255), random(255), random(255)); 
            noStroke();
            ellipse(x, y, 20, 20);
        }
    }

    fill(255, 0, 0);
    stroke(0);
    ellipse(mouseX, mouseY, 50, 50);
}