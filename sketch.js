const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1,ball2,ball3,ball4,ball5;
var holder;
var rope1,rope2,rope3,rope4,rope5;
function setup() {

	createCanvas(400, 400);

  	engine = Engine.create();
	world = engine.world;

	ball1=new Ball(150,250);
	ball2=new Ball(200,250);
	ball3=new Ball(250,250);
	ball4=new Ball(300,250);
	ball5=new Ball(100,250);

	holder=new Holder(200,100,250,15);
	
	rope1=new Rope(ball1.ball,holder.holder,-50);
	rope2=new Rope(ball2.ball,holder.holder,0);
	rope3=new Rope(ball3.ball,holder.holder,50);
	rope4=new Rope(ball4.ball,holder.holder,100);
	rope5=new Rope(ball5.ball,holder.holder,-100);
}

function draw() {
 

	background("white");
	Engine.update (engine);
	
	holder.display();
	
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	 
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();
 
}

function keyPressed(){
	if (keyCode===32){
	Matter.Body.applyForce(ball5.ball,ball5.ball.position,{x:-50 , y:-45});
	}
}

