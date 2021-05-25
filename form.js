class Form{
    constructor(){
        this.input = createInput('Entre username');
        this.save = createButton('save');
        this.EnterC = createInput('Entre Privte Code');
        this.Play = createButton('PLAY');
        this.Gen = createButton('Genrate Code');
        this.back = createButton('BACK');
    }
start(){
   // this.input = createInput('Entre username');
    this.input.position(displayWidth/2,displayHeight/2)
    
    this.save.position(displayWidth/2,displayHeight/2+100);

    this.save.mousePressed(()=>{
    this.input.hide();
    this.save.hide();
    character1.visible=true;
    character2.visible=true;
   
    })
    if(mousePressedOver(character1)) {
     character1.x = 30;
     character1.y = 50;
     character1.scale = 0.5;
     character2.visible = false;
     background("blue");
      gameState = 1;
    }
    if(mousePressedOver(character2)) {
        character2.x = 30;
        character2.y = 50;
        character2.scale = 0.5;
        character1.visible = false;
        background("blue");
        gameState = 1;
       }
}

playWF(){
    background("blue");
    this.EnterC.position(displayWidth/2-80,displayHeight/2);
    this.Play.position(displayWidth/2+30,displayHeight/2+100);
    this.Play.mousePressed(()=>{});
    this.Gen.position(displayWidth/2-50,displayHeight/2-200);
    this.Gen.mousePressed(()=>{});
    this.back.position(displayWidth/2-200,displayHeight/2+100);
    this.back.mousePressed(()=>{
        gameState = 1;
        this.EnterC.hide();
        this.Play.hide();
        this.Gen.hide();
        this.back.hide();
        
    });
    this.EnterC.visible = true;
    this.Play.visible = true;
    this.Gen.visible = true;
    this.back.visible = true;
}


}