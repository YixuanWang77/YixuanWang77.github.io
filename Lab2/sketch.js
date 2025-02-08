var ball = {
    x: 100,
    y: 100,
    size: 40,
    xSpeed: 3,
    ySpeed: 2,
    colour:'purple',

draw: function(){
    fill(ball.colour);
    ellipse(ball.x,ball.y,ball.size);
},

move: function(){
    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;

    if(ball.x < 0 || ball.x > width) {
        ball.xSpeed *= -1;
    }
    if(ball.y < 0 || ball.y > height) {
        ball.ySpeed *= -1;
    }
}
};

function setup() {
    createCanvas(720,480);
}

function draw(){
    background('grey');
    ball.move();
    ball.draw(); 
}