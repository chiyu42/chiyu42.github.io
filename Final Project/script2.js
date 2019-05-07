
let system;



function setup() {

    createCanvas(windowWidth, windowHeight);

    background(251, 253, 239);

    stroke(63, 119, 191);

}



function draw() {

   
    system = new ParticleSystem(createVector(mouseX, mouseY));
    system.addParticle();
    if(mouseIsPressed){
        system.run();
        }



}






class Particle {
    constructor(position) {
        this.acceleration = createVector(-10, 10);
        this.velocity = createVector(random(-50, 50), random(-50, 50));
        this.position = position.copy();
        this.radius = 30;
        this.lifespan = 255;
    }
    run() {
        this.update();
        this.display();
    }
    
    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.lifespan -= 30;
        this.radius -= 1;
    }
    // Method to display
    display() {
        noStroke();
        fill(63, 119, 191, this.lifespan);
        ellipse(this.position.x, this.position.y, this.radius, this.radius);
    }
    // Is the particle still useful?
    isDead() {
        return this.lifespan < 0;
    }
}





class ParticleSystem {
    constructor(position) {
        this.origin = position.copy();
        this.particles = [];
    }
    addParticle() {
        this.particles.push(new Particle(this.origin));
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
}
