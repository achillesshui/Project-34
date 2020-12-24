class Sling {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.0,
            angularStiffness: 1.0,
            length:420
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        this.pointX = bodyA.x;
        this.pointY = bodyA.y-270;
        World.add(world,this.sling);
    }
    display() {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;

        push();
        stroke("white");
        strokeWeight(7);
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop();
    }
}