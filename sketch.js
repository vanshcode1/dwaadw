
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tennisRacquet1
var tennisRacquet2
var tennisCourt
var tennisBall
function preload()
{
tennisRacquet1Img = loadImage("racquet.png")
tennisRacquet2Img = loadImage("racquet - Copy.png")
tennisCourtImg = loadImage("tennis court.png")
tennisBallImg = loadImage("tennisball.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	tennisCourt = createSprite(750,150,2000,600)
	tennisCourt.scale = 2
	tennisCourt.addImage(tennisCourtImg)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



