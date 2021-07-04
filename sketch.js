const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var ground;
var domino1, domino2, domino3, domino4, domino5;
var mover;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create()
  world = engine.world

  // ground =  Ground(400, 350, 300, 100)
  // ground = new (400, 350, 300, 100)
  // ground = new Ground(400, 350, 300, 100)
  // ground = new Ground(400, 350)

  domino1 = new Domino(320, 280, 170)
  domino2 = new Domino(360, 280, 140)
  domino3 = new Domino(400, 280, 110)
  domino4 = new Domino(440, 280, 80)
  domino5 = new Domino(480, 280, 50)
  domino6 = new Domino(520,280,25)

  mover = new Mover(20,20)
 }

function draw() {
  background(0);  
  Engine.update(engine)

  ground.display()
  domino1.display()
  domino2.display()
  domino3.display()
  domino4.display()
  domino5.display()
  mover.display()
  domino6.display()

  drawSprites();
}