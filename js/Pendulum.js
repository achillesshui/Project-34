class Pendulum {
    constructor(x,y,color) {
        var options = {
            isStatic: false,
            friction: 0,
            restitution: 1.0,
            frictionAir: 0.0,
            slop: 1.0,
            inertia: Infinity,            
        }
        this.body = Bodies.circle(x,y,50,options);
        this.color = color;
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        stroke("white");
        ellipseMode(CENTER);
        ellipse(0,0,100);
        pop();
    }
}