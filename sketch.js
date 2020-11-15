const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject, groundObject;
var world;

function preload()
{
	dustbinimage = loadImage('Images/dustbingreen.png');
}

function setup() {
	var canvas = createCanvas(1400, 700);
	rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;

	paperObject = new Paper(200, 450, 70);
	groundObject = new Ground(width/2, 620, width, 20);
	dustbin1 = new Dustbin(1200, 510, 20, 200);
	dustbin2 = new Dustbin(1000, 510, 20, 200);
	dustbin3 = new Dustbin(1100, 600, 20, 200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240);


  paperObject.display();
  groundObject.display();
  image(boximage, 100, 330, 200, 200);
  
  //drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:110,y:-110});
	}
}



