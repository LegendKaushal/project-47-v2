
      const Engine = Matter.Engine;
      const World= Matter.World;
      const Bodies = Matter.Bodies;
      const Constraint = Matter.Constraint;
  
      var engine, world;

      var ground,p1,B1,pickupMode,endPortal1,B2,B3,B4,jumpMode

    
function preload(){


}

function setup(){

  createCanvas(displayWidth,displayHeight)


   engine = Engine.create();
   world = engine.world;

   //Level 1
   ground = new Ground(500,550,750,40,true)
   ground2 = new Ground(500,350,325,40,true)
   ground3 = new Ground(104,350 +12,40,400,true)
   ground4 = new Ground(896,350,40,400,true)
   ground5 = new Ground(250,250,100,40,true)
   ground6 = new Ground(displayWidth/4*3-80,displayHeight/8*2+25,100,40,true)
   ground7 = new Ground(displayWidth/2,displayHeight/8+25,100,40,true)


   //Level 2
   ground8 = new Ground(displayWidth/2,2100,500,50,true)
   ground9 = new Ground(displayWidth/2,1800,500,50,true)
   ground10 = new Ground(displayWidth/4*3,2000,250,50,true)
   ground11 = new Ground(displayWidth/4*3,1900,250,50,true)
   ground12 = new Ground(displayWidth+250,2100,1000,50,true)
   ground13 = new Ground(displayWidth+250,1800,1000,50,true)

   B1 = new unFixedBox(displayWidth,200,50,25)
   B2 = new unFixedBox(displayWidth+150,200,50,25)
   B3 = new unFixedBox(displayWidth+300,200,50,25)
   B4 = new unFixedBox(displayWidth+450,200,50,25)

   rope1 = new Rope(B1.body,{x:displayWidth,y:1850})
   rope2 = new Rope(B2.body,{x:displayWidth+200,y:1850})
   rope3 = new Rope(B3.body,{x:displayWidth+400,y:1850})
   rope4 = new Rope(B4.body,{x:displayWidth+600,y:1850})


   p1 = new Player(500,500,50)



   endPortal1 = new FixedBox(windowWidth/2,windowHeight/9,50,50)
 
   flag = new Flag(displayWidth/2,500,25)

   pickupMode = false
   jumpMode = false

 

}


function draw(){

  Engine.update(engine)
  background("black")

  ground.display()
  ground2.display()
  ground3.display()
  ground4.display()
  ground5.display()
  ground6.display()
  ground7.display()
  ground8.display()
  ground9.display()
  ground10.display()
  ground11.display()
  ground12.display()
  ground13.display()

  
  B1.display()
  B2.display()
  B3.display()
  B4.display()
  p1.display()
  flag.display()
  endPortal1.display()
  camera.x = p1.body.position.x
  camera.y = p1.body.position.y

    var collision = Matter.SAT.collides(p1.body, ground.body,ground.body); 
   if (collision.collided) 
   { jumpMode = true 
   }

  



  if(pickupMode === true)
  {
    flag.body.position.x = p1.body.position.x
    flag.body.position.y = p1.body.position.y
  }

  if(p1.body.position.x > ground6.body.position.x-55&&p1.body.position.x < ground6.body.position.x+55&&p1.body.position.y > ground6.body.position.y-55&&p1.body.position.y < ground6.body.position.y+55)
  {
    Matter.Body.setStatic(ground6.body, false)
  }

  if(p1.body.position.x > endPortal1.body.position.x-55&&p1.body.position.x < endPortal1.body.position.x+55&&p1.body.position.y > endPortal1.body.position.y-55&&p1.body.position.y < endPortal1.body.position.y+55)
  {
    Matter.Body.setPosition(p1.body, {x:displayWidth/2,y:2000})
  }


  text(mouseX+','+mouseY,mouseX+10,mouseY+10)

  if (keyIsDown(37) ) {
    Matter.Body.setPosition(p1.body,{x:p1.body.position.x-10,y:p1.body.position.y})
  }
  
  if (keyIsDown(39) ) {
    Matter.Body.setPosition(p1.body,{x:p1.body.position.x+10,y:p1.body.position.y})
  }

  //if (keyDown(38) ) {
  //  Matter.Body.setPosition(p1.body,{x:p1.body.position.x,y:p1.body.position.y-15})
  //}

  drawSprites()
  
}
function keyPressed(){


  if(keyCode===38&&jumpMode === true){
    Matter.Body.setVelocity(p1.body,{x:0,y:-10})
  }
  if(keyCode===69 && p1.body.position.x < (flag.body.position.x+25)&&p1.body.position.x > (flag.body.position.x-25)&&p1.body.position.y < (flag.body.position.y+50)&&p1.body.position.y > (flag.body.position.y-50)){
    pickupMode = true
  }
  if(keyCode===70){
    pickupMode = false
  }
} 