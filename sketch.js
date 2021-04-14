
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bullet,wall;
var speed,weight;
var deformation;
var thickness = random(22,83);

function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);
  
	speed = random(223,321);
    thickness = random(22,83);
	weight = random(30,52);

	bullet  = createSprite(50,200,50,25);
	bullet.velocityX = speed;
	bullet.shapeColor = color(255,255,255)
	wall = createSprite(1200,200,thickness, height/2)
	wall.shapeColor = color(80,80,80)

	engine = Engine.create();
	world = engine.world;
	deformation =  Math.round((0.5*weight*speed*speed)/thickness*thickness*thickness)
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
if(wall.x - bullet.x <(bullet.width + wall.width)/2)
  {
 bullet.velocityX = 0;

 if(deformation > 12.43)
{
bullet.shapeColor = color(255,0,0)
}
if(deformation < 3.42)
{
bullet.shapeColor ="green"
}
}
drawSprites();
} 

