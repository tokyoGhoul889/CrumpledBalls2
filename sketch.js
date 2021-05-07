

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload(){
  dustbinImg = loadImage("dustbin.png");
  //paperImg = loadImage("paper.png")
}

function setup() {
	createCanvas(1250, 650);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200, 450, 70);

  


  ground = new Ground(width/2,620,width,20);
  
  left = new Dustbin(1015, 500, 15, 170);
  bottom = new Dustbin(1100, 585, 150, 15);
  right = new Dustbin(1185, 500, 15, 170);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(255);
  
  Engine.update(engine);

  paper.display();

  ground.display();

  left.display();
  bottom.display();
  right.display();

  image(dustbinImg, 1000, 410, 200, 200)
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:130, y: -145})
  }
}