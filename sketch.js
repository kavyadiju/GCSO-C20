var car,wall,wallImage,bg,bgI;
var speed,weight;
var car1,car2,car3,car4;
var startSound,stopSound;
var i=0;

function preload()
{
  car1=loadImage("0.png");
  car2=loadImage("1.png");
  car3=loadImage("2.png");
  car4=loadImage("3.png");
  wallImage=loadImage("wall.jpg");
  bgI=loadImage("road.jpg");
  startSound=loadSound("jump.mp3");
  stopSound=loadSound("gunshot.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(width/2-100,height/2);
  bg.addImage(bgI);
  bg.scale=2.5;
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
 car= createSprite(50, height/1.3, 50, 50);
 car.addAnimation("car1",car1);
 car.addAnimation("car2",car2);
 car.addAnimation("car3",car3);
 car.addAnimation("car4",car4);
 car.scale=2.5;
 wall=createSprite(width+200,height/2,50,height);
 wall.addImage(wallImage);
 car.velocityX=speed;
 startSound.play();
}

function draw() {
  background("black");  
  drawSprites();
  strokeWeight(4);
  textFont("timesnewroman");
  stroke("blue");
  fill("pink");
  textSize(20);
  text("Speed :"+speed,width/1.3,50);
  text("Weight :"+weight,width/1.3,100);

  if(wall.x-car.x<=(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=Math.round(0.5*weight*speed*speed/22509);
    text("Deformation :"+deformation,width/1.3,150);
    if(i===0)
    {
    stopSound.play();
    i=1;
    }
    if(deformation>180)
    {
      car.changeAnimation("car2",car2);
      text("LETHAL",width/2,height/3);
    }
    if(deformation<180&&deformation>100)
    {
      car.changeAnimation("car3",car3);
      text("AVERAGE",width/2,height/3);
    }
    if(deformation<100)
    {
      car.changeAnimation("car4",car4);
      text("GOOD",width/2,height/3);
    }
  }
 
}