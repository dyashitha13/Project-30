var ground;

var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var b10,b11,b12,b13,b14,b15,b16;
var b17,b18,b19,b20,b21;
var b22,b23,b24;
var b25;

var b26,b27,b28,b29,b30,b31,b32,b33,b34;
var b35,b36,b37,b38,b39,b40,b41;
var b42,b43,b44,b45,b46;
var b47,b48,b49;
var b50;

var polygon,polygonImage;

var slingshot;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
polygonImage = loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
 
  engine = Engine.create();
	world = engine.world;
	
  ground = new Ground(600,338,200,15);
  ground2 = new Ground(300,167,200,15);

  b1 = new Box(520,320,20,20);
  b2 = new Box(540,320,20,20);
  b3 = new Box(560,320,20,20);
  b4 = new Box(580,320,20,20);
  b5 = new Box(600,320,20,20);
  b6 = new Box(620,320,20,20);
  b7 = new Box(640,320,20,20);
  b8 = new Box(660,320,20,20);
  b9 = new Box(680,320,20,20);
  
  b10 = new Box(540,300,20,20);
  b11 = new Box(560,300,20,20);
  b12 = new Box(580,300,20,20);
  b13 = new Box(600,300,20,20);
  b14 = new Box(620,300,20,20);
  b15 = new Box(640,300,20,20);
  b16 = new Box(660,300,20,20);

  
  b17 = new Box(560,280,20,20);
  b18 = new Box(580,280,20,20);
  b19 = new Box(600,280,20,20);
  b20 = new Box(620,280,20,20);
  b21 = new Box(640,280,20,20);

  b22 = new Box(580,260,20,20);
  b23 = new Box(600,260,20,20);
  b24 = new Box(620,260,20,20);

  b25 = new Box(600,240,20,20);

  b26 = new Box(220,150,20,20);
  b27 = new Box(240,150,20,20);
  b28 = new Box(260,150,20,20);
  b29 = new Box(280,150,20,20);
  b30 = new Box(300,150,20,20);
  b31 = new Box(320,150,20,20);
  b32 = new Box(340,150,20,20);
  b33 = new Box(360,150,20,20);
  b34 = new Box(380,150,20,20);
  
  b35 = new Box(240,130,20,20);
  b36 = new Box(260,130,20,20);
  b37 = new Box(280,130,20,20);
  b38 = new Box(300,130,20,20);
  b39 = new Box(320,130,20,20);
  b40 = new Box(340,130,20,20);
  b41 = new Box(360,130,20,20);

  
  b42 = new Box(260,110,20,20);
  b43 = new Box(280,110,20,20);
  b44 = new Box(300,110,20,20);
  b45 = new Box(320,110,20,20);
  b46 = new Box(340,110,20,20);

  b47 = new Box(280,90,20,20);
  b48 = new Box(300,90,20,20);
  b49 = new Box(320,90,20,20);

  b50 = new Box(300,70,20,20);


  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100, y:300});

  Engine.run(engine);
}

function draw() {
  background(20,58,149);  

  ground.display();
  ground2.display();

  fill("red");
  b1.display();
  fill("yellow");
  b2.display();
  fill("orange");
  b3.display();
  fill("red");
  b4.display();
  fill("orange");
  b5.display();
  fill("yellow");
  b6.display();
  fill("red");
  b7.display();
  fill("orange");
  b8.display();
  fill("yellow");
  b9.display();

  fill("green");
  b10.display();
  fill("blue");
  b11.display();
  fill("purple")
  b12.display();
  fill("green")
  b13.display();
  fill("blue")
  b14.display();
  fill("purple")
  b15.display();
  fill("green")
  b16.display();

  fill("orange")
  b17.display();
  fill("yellow")
  b18.display();
  fill("red")
  b19.display();
  fill("orange")
  b20.display();
  fill("yellow")
  b21.display();

  fill("purple");
  b22.display();
  fill("blue")
  b23.display();
  fill("green")
  b24.display();
  fill("purple");
  b25.display();

  fill("gold");
  b26.display();
  fill("silver");
  b27.display();
  fill("white");
  b28.display();
  fill("gold");
  b29.display();
  fill("silver");
  b30.display();
  fill("white");
  b31.display();
  fill("gold");
  b32.display();
  fill("silver");
  b33.display();
  fill("white");
  b34.display();

  fill("white");
  b35.display();
  fill("gold");
  b36.display();
  fill("silver");
  b37.display();
  fill("white");
  b38.display();
  fill("gold");
  b39.display();
  fill("silver");
  b40.display();
  fill("white");
  b41.display();

  fill("silver");
  b42.display();
  fill("white");
  b43.display();
  fill("gold");
  b44.display();
  fill("silver");
  b45.display();
  fill("white");
  b46.display();

  fill("gold");
  b47.display();
  fill("silver");
  b48.display();
  fill("white");
  b49.display();

  b50.display();



  slingshot.display();

  imageMode(CENTER);
  image(polygonImage,polygon.position.x,polygon.position.y,45,45);
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased (){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
   slingshot.attach(this.polygon);
  }
}