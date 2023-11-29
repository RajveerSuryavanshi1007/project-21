var ram
var score=0
var gameState="play"
var obstacle
var ground
var invisibleGround
var obgroup




function setup() {
 createCanvas(windowWidth,windowHeight)

  ram = createSprite(50,windowHeight-110,20,20)
  ram.shapeColor="red"

 ground = createSprite(windowWidth/2,windowHeight-80,windowWidth+200,20)
  ground.shapeColor="white"

  invisibleGround = createSprite(windowWidth/2,windowHeight-70,windowWidth,20)
 invisibleGround.shapeColor="green" 

 invisibleGround.visible=false

obgroup=new Group()

}

function draw() {
background("black")

text("SCORE :"+score,width-100,height-450)



if(gameState=="play"){

   
ram.visible=true
ground.visible=true
obgroup.visible=true

score = score + Math.round(getFrameRate()/60);

ground.velocityX=-4

if(ground.x<width/2-100){
ground.x=windowWidth/2+100
}

if(keyDown("space")&& ram.y>=height-200){
    ram.velocityY=-10

}

ram.velocityY=ram.velocityY+0.9

ram.collide(ground)

spawnobstacles();

if(obgroup.collide(ram)){
    gameState="end"
}

}


else if(gameState=="end"){
    
    ground.velocityX=0
    obgroup.setVeloctyX=0
    
 
    textSize(50)
    text("Game Over Press Up Arrow To Restart",250,350) 
 
    if(keyDown("up_arrow")){
        gameState="play"
        obgroup.destroyEach()
        score=0
        ram.y=height-110
    }
    
 }

 

drawSprites()
}


function spawnobstacles(){
    
    if(frameCount%60==0){
       var y
        var r=Math.round(random(1,4))
        switch(r){
        case 1 : 
        y=10
        break;

        case 2 : 
        y=20
        break;

        case 3 : 
        y=30
        break;

        case 4 : 
        y=40
        break;
        } 
               
    obstacle=createSprite(width+20,height-105,20,20+y)
    obstacle.velocityX=-4
    obstacle.lifetime=width+100
    obgroup.add(obstacle);


}

}
