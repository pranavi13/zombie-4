var canavas, backgroundImage;
var life=3;
var bullets=80;
var gameState="fight"
var score=0;

function preload(){
    shooter1=loadImage("shooter_1.png")
    shooter2=loadImage("shooter_2.png")
    shooter3=loadImage("shooter_3.png")
    backgroundImage=loadImage("bg.jpeg")
    zombieImg=loadImage("zombie.png")
    heart1Img=loadImage("heart_1.png")
    heart2Img=loadImage("heart_2.png")
    heart3Img=loadImage("heart_3.png")
    win=loadSound("win.mp3")
    lose=loadSound("lose.mp3")
    explosion=loadSound("explosion.mp3")
}
function setup(){
    canavas= createCanvas(displayWidth,displayHeight);
    bg=createSprite(displayWidth/2-35,displayHeight/2-45,20,20)
     bg.addImage(backgroundImage)   
     player=createSprite(displayWidth-800,displayHeight-450,20,20)
        player.addImage(shooter1)
        
        bg.scale=1
        player.scale=0.6
        zombieGroup=new Group()
        bulletGroup=new Group()
      heart1=createSprite(displayWidth-250,50,20,20)
      heart1.addImage(heart1Img)
      heart1.visible=false
      heart1.scale=0.5

      heart2=createSprite(displayWidth-200,50,20,20)
      heart2.addImage(heart2Img)
      heart2.visible=false
      heart2.scale=0.5

      heart3=createSprite(displayWidth-150,50,20,20)
      heart3.addImage(heart3Img)
      heart3.visible=false
      heart3.scale=0.5


}
function draw(){
    background("black")
    if(gameState==="fight"){
    
        if(life===3){
heart3.visible=true

        }
        if(life===2){
heart2.visible=true
        }
        if(life===1){
heart1.visible=true           
        }
        if(life===0){
            gameState="lost"
            lose.play();
        }
        if(score===100){
            gameState="won"
            win.play();

        }
    if(keyWentDown("space")){
        player.addImage(shooter3)    
    }
    else if (keyWentUp("space")){
        player.addImage(shooter2)
    }

    if(keyDown("DOWN_ARROW") ||touches.length>0){

        player.y+=15
    }
    if(keyDown("UP_ARROW") ||touches.length>0){

        player.y-=15
    }
    if(keyWentDown("space")){
        bullet=createSprite(displayWidth-800,player.y-50,10,10);
        bullet.velocityX=+10
        bulletGroup.add(bullet)
        bullets=bullets-1
        explosion.play();
    }
    

    if(zombieGroup.isTouching(player)){
        for(var i=0; i < zombieGroup.length; i++){
if (zombieGroup [i].isTouching(player)){
    zombieGroup[i].destroy();
}
        }
    }
    zombies()}

    
drawSprites()
}

function zombies(){
    if(frameCount%60===0){
        zombie=createSprite(random(300,1000),random(100,800),10,10)
        zombie.addImage(zombieImg)
        zombie.x+=10
        zombieGroup.add(zombie)
        zombie.scale=0.3
        zombie.velocityX=-4
        zombie.lifetime=400
        zombie.debug=true
        zombie.setCollider("rectangle",0,0,90,90)
    }
    
}
