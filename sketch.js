const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground,pent,ground1,ground2;
var tar1,tar2,tar3,tar4,tar5,tar6;
var get1,get2,get3,get4,get5,get6;
var slingshot;

function setup() {
  var canvas = createCanvas(1200,600);
  engine = Engine.create();
    world = engine.world;
  createSprite(400, 200, 50, 50);
  ground = new Ground(600,598,1400,20);
  ground1 = new Ground(430,440,170,15);
  ground2 = new Ground(860,290,170,15);
  pent = new Pentagon(100,300,40,40);
  tar1 = new Tar(370,400,40,70);
  tar2 = new Tar(430,400,40,70);
  tar3 = new Tar(490,400,40,70);
  tar4 = new Tar(400,330,40,70);
  tar5 = new Tar(460,330,40,70);
  tar6 = new Tar(430,260,40,70);
  get1 = new Tar(800,250,40,70);
  get2 = new Tar(860,250,40,70);
  get3 = new Tar(920,250,40,70);
  get4 = new Tar(830,180,40,70);
  get5 = new Tar(890,180,40,70);
  get6 = new Tar(860,110,40,70);
  slingshot = new SlingShot(pent.body,{x: 100,y: 300});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  ground1.display();
  pent.display();
  tar1.display();
  tar2.display();
  tar3.display();
  tar4.display();
  tar5.display();
  tar6.display();
  get1.display();
  get2.display();
  get3.display();
  get4.display();
  get5.display();
  get6.display();
  ground2.display();
}

function mouseDragged(){
  Matter.Body.setPosition(pent.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}