const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var wall1, wall2, wall3, wall4, wall5, wall6, goal;

function preload()
{

}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wall1 = new Ground(750,10,1500,20);
	wall2 = new Ground(750,690,1500,20);
	wall3 = new Ground(1500,690,20,1500);
	wall4 = new Ground(0,350,20,1500);
	wall5 = new Ground(700,600,1400,20);
	wall6 = new Ground(800,500,1400,20);
	goal = new Ground(1400,400,200,20);

	ball = Bodies.circle(100,650,20,options);
 	World.add(world,ball);
	
	var options = {
		restitution: 0.5,
		frictionAir: 0.01
	};

	up = createImg("up.png");
	up.position(100,50);
	up.size(20,20);
	up.mouseClicked(upforce);
  
	right = createImg("right.png");
	right.position(150,50);
	right.size(20,20);
	right.mouseClicked(rightforce);

	left = createImg("left.png");
	left.position(50,50);
	left.size(20,20);
	left.mouseClicked(leftforce);

	Engine.run(engine);
}

function draw() {
	background(0);
	rectMode(CENTER);

	ellipse(ball.position.x,ball.position.y,20);
	
	wall1.show();
	wall2.show();
	wall3.show();
	wall4.show();
	wall5.show();
	wall6.show();
	goal.show();

  	drawSprites();
}

function rightforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0})
  }
  function upforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.01})
  }
  function downforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.01})
  }
  function leftforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.01,y:0})
  }