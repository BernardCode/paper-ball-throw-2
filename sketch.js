const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

let engine;
let world;
var ball;
var ground1;
var ground2;
var ground3;

function setup() {
  createCanvas(800,700);

  engine = Engine.create();
  world = engine.world;
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ground1 = new Ground(400,670,800,15);
  ground2 = new Ground(650,630,15,65);
  ground3 = new Ground(500,630,15,65);
  ball = new Ball(160,600,20);

}


function draw() 
{
  background(0);

  ground1.show();
  ground2.show();
  ground3.show();
  ball.show();

  Engine.update(engine);
  
}

function keyPressed() {
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body, ball.body.position, {x:50,y:-50});
  }
}