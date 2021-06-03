
 
var bg
var play;
var gameState = 0;

function preload(){
  bg1 =loadImage("Treasure Hunt/treasure hunt .png");
  play =loadImage("Treasure Hunt/play.png");
  CH1 =loadImage("Treasure Hunt/character 1.PNG");
  CH2 =loadImage("Treasure Hunt/character 2.PNG")
  PA =loadImage("Treasure Hunt/play alone.PNG");
  PWF =loadImage("Treasure Hunt/pwf.PNG");
  map =loadImage("Treasure Hunt/map.PNG");
  map1 =loadImage("Treasure Hunt/map1.png");
  map2 =loadImage("Treasure Hunt/map 2.PNG");
  map3 =loadImage("Treasure Hunt/map 3.PNG");
  map4 =loadImage("Treasure Hunt/map 4.PNG");
}

function setup() {
  createCanvas(displayWidth-30, displayHeight-130);
 bg=createSprite(displayWidth/2,displayHeight/2-50,50,50);
 bg.addImage(bg1);
 bg.visible = true;
 playImg=createSprite(displayWidth/2,displayHeight/2+100,50,50);
 playImg.addImage(play);
 playImg.scale=0.3
  form = new Form();
  character1=createSprite(displayWidth/2-100,displayHeight/2,50,50);
  character1.addImage(CH1);
  character2=createSprite(displayWidth/2+50,displayHeight/2,50,50);
  character2.addImage(CH2);
  character1.visible = false;
  character2.visible = false;
  playAlone=createSprite(displayWidth/2-250,displayHeight/2-100,50,50);
  playAlone.addImage(PA);
  playAlone.visible = false;
  playWFrends=createSprite(displayWidth/2+250,displayHeight/2-100,50,50);
  playWFrends.addImage(PWF);
  playWFrends.visible = false
}
 


function draw() {
  background("black");
   /*play = createButton('play');
   play.position(displayWidth/2,displayHeight/2+100);
   play.style.width = '200px'; // setting the width to 200px
    play.style.height = '200px'; // setting the height to 200px 
    play.style.background = 'teal'; // setting the background color to teal
     play.style.color = 'white'; // setting the color to white
      play.style.fontSize = '20px';
  // play.id='mainButton';
  //play.x=playImg.x;
  //play.y=playImg.y;
  //play.visiable=false;*/

  //
  if(gameState === 0){
    if(character1.visible = true && character2.visible){
    fill("white")
    textSize(30);
    text("Chose your Character",displayWidth/2-170,displayHeight/2-200);
    }
  if(mousePressedOver(playImg)) {
    playImg.visible = false;
    bg.visible = false;
    
    form.start();
  }
}
if(gameState === 1){
  background("blue");
  bg.visible = true;
  bg.scale = 0.5
  bg.y = 100;
  playAlone.visible = true;
  playWFrends.visible = true;
  if(mousePressedOver(playAlone)) {
    playImg.visible = false;
    bg.visible = false;
    playWFrends.visible = false;
    playAlone.visible = false;
    character1.visible = false;
    character2.visible = false;
    background("blue");
    gameState = 3;
  }
  if(mousePressedOver(playWFrends)) {
    playImg.visible = false;
    //bg.visible = false;
    playWFrends.visible = false;
    playAlone.visible = false;
    //character1.visible = false;
    //character2.visible = false;
    form.playWF();
    background("blue");
    gameState = 2;
    }
}
if(gameState === 2){
  background("blue");
}
if(gameState === 3){
  background(map)
  textSize(50)
  fill("white");
  text("be far from imposters and every level has a safe point",displayWidth/2-550,displayHeight/2-200)
  text("complete all task to go to the next level",displayWidth/2-450,displayHeight/2-100)
  text("to complete the game you need to find the treasure",displayWidth/2-550,displayHeight/2)
  text("click on the start button to start the game",displayWidth/2-450,displayHeight/2+100)
  start=createButton('START');
  start.position(displayWidth/2+450,displayHeight/2+200);
  
  start.mousePressed(()=>{
    gameState = 4;
   start.hide();
  })
}
if(gameState === 4){
  background(map1);
  start.hide();
}
  
 
  textSize(20);
  fill("white");
  text(mouseX+","+mouseY,mouseX,mouseY); 
  drawSprites();
}

