const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    bob1 = new Pendulum(400,500,"green");
    bob2 = new Pendulum(500,500,"blue");
    bob3 = new Pendulum(600,500,"red");
    bob4 = new Pendulum(700,500,"blue");
    bob5 = new Pendulum(800,500,"green");

    sling1 = new Sling(bob1.body,{x:400,y:80})
    sling2 = new Sling(bob2.body,{x:500,y:80})
    sling3 = new Sling(bob3.body,{x:600,y:80})
    sling4 = new Sling(bob4.body,{x:700,y:80})
    sling5 = new Sling(bob5.body,{x:800,y:80})
    
}

function draw() {
    background("black");
    Engine.update(engine);

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
}

function mouseDragged() {
    Matter.Body.setPosition(bob1.body, {x:mouseX,y:mouseY});
}