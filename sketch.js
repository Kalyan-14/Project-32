const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var base;

function preload(){

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,400,1200,20);

    //1st level
    block1 = new Block(600,395,30,40); 
    block2 = new Block(630,395,30,40); 
    block3 = new Block(660,395,30,40); 
    block4 = new Block(690,395,30,40); 
    block5 = new Block(710,395,30,40); 
    block6 = new Block(740,395,30,40); 
    block7 = new Block(770,395,30,40); 

    //2nd level
    block8 = new Block(630,235,30,40); 
    block9 = new Block(660,235,30,40); 
    block10 = new Block(690,235,30,40); 
    block11 = new Block(710,235,30,40); 
    block12 = new Block(740,235,30,40); 

    //3rd level
    block13 = new Block(660,195,30,40); 
    block14 = new Block(690,195,30,40); 
    block15 = new Block(710,195,30,40); 

    //4th level
    block16 = new Block(690,155,30,40); 

    polygon = new Polygon(200,50);

    slingshot = new SlingShot(polygon.body,{x:200, y:50});

    slingshotBase = new SlingshotBase(0,400,500,365)    
}

function draw(){
    background(0);
    Engine.update(engine);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    ground.display();
    polygon.display();
    slingshot.display();
    slingshotBase.display();


}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    //}
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}