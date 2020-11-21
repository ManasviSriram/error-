const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies


var engine,world
var p1

function setup() {
  createCanvas(800,400);

engine=Engine.create();
world=engine.World


p1= new player(200,200,30,30)
Engine.update(engine)
 //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  

p1.display();
  drawSprites();
}