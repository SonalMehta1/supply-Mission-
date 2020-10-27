var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,groundIMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	groundIMG = loadImage("ground2.png");
}	

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	/*
	box1 = createSprite(330,655,150,20);
	box1.shapeColor = "red";
	box2 = createSprite(265,630,20,60);
	box2.shapeColor = "red";
	box3 = createSprite(395,630,20,60);
	box3.shapeColor = "red";
    

	
	//packageSprite.debug = true;
	//packageSprite.velocityX = 4;



	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	groundSprite.addImage(groundIMG);
	
*/

	engine = Engine.create();
	world = engine.world;
	
	push()
	helicopterSprite = Bodies.rectangle(0,200,400,100);
	engine.world.gravity.y = 0;
	engine.world.gravity.x = 0;
	World.add(world, helicopterSprite);
	Matter.Body.setVelocity(helicopterSprite,{x:4,y:0})
	pop();
	
	push();
	packageBody = Bodies.rectangle(	335, 200 , 50,50 , {restitution:0.2, friction:0.8,density:1});
	engine.world.gravity.y = 0;
	engine.world.gravity.x = 0;
	World.add(world, packageBody);
	pop();
	
	box1 = Bodies.rectangle(350,605,170,40,{isStatic:true})
	World.add(world, box1);
	box2 = Bodies.rectangle(275,570,40,120,{isStatic:true})
	World.add(world, box2);
	box3 = Bodies.rectangle(425,570,40,120,{isStatic:true})
	World.add(world, box3);

	ground = Bodies.rectangle(width/2, 650, width*2, 40 , {isStatic:true} );
 	World.add(world, ground);

	 var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  Engine.run(engine);
	  Render.run(render);
  
}

function draw() {
  rectMode(CENTER);

  background(230);
  
  image(helicopterIMG,helicopterSprite.position.x,helicopterSprite.position.y,200,80)

  rect(ground.position.x,ground.position.y,width,30)
  //push();
  fill("red");
  noStroke();
  rect(box1.position.x,box1.position.y,150,30);
  rect(box2.position.x,box2.position.y,30,100);
  rect(box3.position.x,box3.position.y,30,100);
  //pop();
 
 packageBody.position.x=helicopterSprite.position.x;
 
image(packageIMG,packageBody.position.x-15,packageBody.position.y-15,50,50)
  //drawSprites();
  fill("black")
  textSize(20);
 text("DROP THE PACKAGE IN THE BOX",300,80);
 
}
function keyPressed(){
	if(keyCode===DOWN_ARROW){
		Matter.Body.setStatic(helicopterSprite,true)
		
		engine.world.gravity.y = 2;
		Matter.Body.setVelocity(helicopterSprite,{x:0,y:0})
		Matter.Body.setVelocity(packageBody,{x:0,y:0})

	}
}



