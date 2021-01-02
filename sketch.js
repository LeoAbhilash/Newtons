
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	width=1200
	height=700
	//Create the Bodies Here.
roof1=new roof(width/2,height/4,width/7,20)
bob1=new bob(width/2-40*2,height/4+500,40)
bob2=new bob(width/2-40,height/4+500,40)
bob3=new bob(width/2-40,height/4+500,40)
bob4=new bob(width/2+40,height/4+500,40)
bob5=new bob(width/2+40*2,height/4+500,40)
rope1=new rope(bob1.body,roof1.body,-40*2,0)
rope2=new rope(bob2.body,roof1.body,-40*1,0)
rope3=new rope(bob3.body,roof1.body,0,0)
rope4=new rope(bob4.body,roof1.body,+40*1,0)
rope5=new rope(bob5.body,roof1.body,40*2,0)
	Engine.run(engine);
  
}


function draw() {
	background("white")
  rectMode(CENTER);
  background(0);
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}
function keyPressed(){
	if(keyCode ===LEFT_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
	}
}


