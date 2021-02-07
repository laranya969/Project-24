
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground1;
var dustbinn;
var ball;
var render;


function setup() {
	createCanvas(1600, 700);
	
	engine = Engine.create();
	world = engine.world;

dustbinn = new dustbin(1200, 650);
	

	

	//Create the Bodies Here.



	

	//Create a Ground
	ground1 = new ground(width/2, 670, 1600, 20);

	 ball = new paper(100, 100, 30);

	 var render = Render.create({
		element: document.body,
		engine:engine,
		options:{
			width: 1200,
			height:700,
			wireframes: false  
		}

	 })
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 ball.display();
 ground1.display();
 dustbinn.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:85, y: -85} )
	}
}



