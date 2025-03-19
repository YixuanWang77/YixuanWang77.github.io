// Reference: https://p5js.org/examples/math-and-physics-smoke-particle-system/
// Reference: https://p5js.org/reference/p5/p5.Vector/

let particleSystem;
let spawnButton;
let speedSlider;
let particleSpeed = 5; 

function setup() {
    createCanvas(720, 400);
    particleSystem = new ParticleSystem(createVector(width / 2, height / 2));

   
    speedSlider = select("#particleSpeed");
    speedSlider.input(updateSpeed);

    
    spawnButton = select("#spawnParticles");
    spawnButton.mousePressed(() => {
        for (let i = 0; i < particleSpeed; i++) {
            particleSystem.addParticle();
        }
    });
}

function updateSpeed() {
    let newSpeed = Number(speedSlider.value()); 
    if (!isNaN(newSpeed)) {
        particleSpeed = newSpeed;
    }
    console.log("Updated speed:", particleSpeed);
} 

function draw() {
    background(20);
    particleSystem.run();

    
    let positions = particleSystem.particles.map(p => `(${int(p.loc.x)}, ${int(p.loc.y)})`);
    console.log("Particle Positions:", positions.join(" | "));
}


class ParticleSystem {
    constructor(origin) {
        this.particles = [];
        this.origin = origin.copy();
    }

    run() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            let p = this.particles[i];
            p.run();
            if (p.isDead()) {
                this.particles.splice(i, 1);
            }
        }
    }

    addParticle() {
        this.particles.push(new Particle(this.origin));
    }
}


class Particle {
    constructor(pos) {
        this.loc = pos.copy();
        this.vel = createVector(random(-1, 1), random(-2, 0));
        this.acc = createVector(0, 0.05);
        this.lifespan = 255;
        this.color = color(random(255), random(255), random(255));  
    }

    run() {
        this.update();
        this.render();
    }

    update() {
        this.vel.add(this.acc);
        this.loc.add(this.vel);
        this.lifespan -= 2;
    }

    render() {
        noStroke();
        fill(red(this.color), green(this.color), blue(this.color), this.lifespan);
        ellipse(this.loc.x, this.loc.y, 10);
    }

    isDead() {
        return this.lifespan < 0;
    }
}