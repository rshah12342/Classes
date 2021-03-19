//namespacing or nicknaming
//to make the objects run
const Engine = Matter.Engine;
//to make the objects structure
const Bodies = Matter.Bodies;
//where the objects belong
const World = Matter.World;

//var for ABG
var engine, world;
var ground;
var box1, box2;

function setup() {
  //create the background/base
  createCanvas(800,400);

  //to create engine from the main Engine class
  engine = Engine.create();
  //where the world of abg is the same as the engines world
  world = engine.world;

  ground = new Ground(400, 350, 800, 50);
  box1 = new Box(200, 200, 50, 50);
  box2 = new Box(230,0,50,70);
}

function draw() {
  //to clear screen and give background color
  background("lightBlue"); 
  
  //to update the ABG engine
  Engine.update(engine);
  ground.display(); 

  box1.display();
   box2.display();
}
