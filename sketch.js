const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var lighning;
var maxdrops=100;

function preload(){
   lightning1 = loadImage("images/4.png");
   lightning2 = loadImage("images/2.png");
   bruce = loadImage("images/walking_6.png");
}

function setup(){
   var canvas = createCanvas (800,800)
    
   boy = new umbrella(400,100);

   lighning = rectangle()

   for(var i=0; i<maxdrops; i++){
      drops.push(new createdrops(random(0,400), random(0,400)))
   }

}

function draw(){
    background(255,255,255); 
  Engine.update(engine);

    boy.display();
    drops.update();

    if(framecount > 500){
        lightning1.hide();
        lighning2.display();
    }
}   

