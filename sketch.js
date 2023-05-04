const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball
var ground;
var ball_options


function setup() {
	createCanvas(1600, 700);
   engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	ball=Bodies.circle(200,100,20,ball_options)
World.add(world,ball)
ground =new Ground(width/2,670,width,20);
ground1 =new Ground(1100,600,20,120);
ground2 =new Ground(1350,600,20,120);
	var ball_options={
       
		isStatic:false,
	  friction:0,
      restitution:0.9,
       density:1.2
	}

	

	rectMode(CENTER);
	ellipseMode(RADIUS);

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  ground1.show();
  ground2.show();
  drawSprites();
  Engine.update(engine);

 
  ellipse(ball.position.x,ball.position.y,20)
}


function keyPressed() { if (keyCode === UP_ARROW) { Matter.Body.applyForce(ball,ball.position,{x:0.05,y:-0.05}); } }
