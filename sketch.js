var batteryImg;
var carImg;
var glassBottleImg;
var heartImg;
var leavesImg;
var manureImg;
var medWasteImg;
var paperBallImg;
var peelsImg;
var polyBagImg;
var sodaCanImg;
var woodImg;
var bgImg;
var biodegradableGrp;
var nonBiodegradableGrp;
var score=0;

function preload(){
 
  carImg=loadImage("image/car.png");
  heartImg=loadImage("image/heart.png");
  bgImg=loadImage("image/background.jpg");

  batteryImg=loadImage("image/battery.png");
  glassBottleImg=loadImage("image/glass_bottle.png");
  medWasteImg=loadImage("image/medical_waste.png");
  polyBagImg=loadImage("image/polytheneBags.png");
  sodaCanImg=loadImage("image/sodaCan.png");

  leavesImg=loadImage("image/leaves.png");
  manureImg=loadImage("image/manure.png");
  paperBallImg=loadImage("image/paperBall.png");
  peelsImg=loadImage("image/peels.png");
  woodImg=loadImage("image/wood.png");
  
}

function setup() {
  createCanvas(1400,700);

  //background image sprite
  bg=createSprite(600,100,1400,700);
  bg.addImage(bgImg)
  bg.scale=2.8
  bg.velocityX=-6;

  heart1=createSprite(200,100)
  heart1.addImage(heartImg);
  heart1.scale=0.1;

  
  heart2=createSprite(240,100)
  heart2.addImage(heartImg);
  heart2.scale=0.1;
    
  heart3=createSprite(280,100)
  heart3.addImage(heartImg);
  heart3.scale=0.1;


  //car sprite
  car=createSprite(100,550,10,10);
  car.addImage(carImg);
  car.scale=0.3;
 
  
  biodegradableGrp= new Group();
  nonBiodegradableGrp= new Group();

  
  score = 0;
  
}

function draw(){
  
  background(255);

  drawSprites();

  fill("red")
  textSize(20);
  text("Score: ",1100,105);

  fill("red")
  textSize(20);
  text("Life:",148,105);
  

  //repetition of background image
  if(bg.x<300){
        bg.x=bg.width/2
  }

  //upward movement of car
  if(car.y>450){

        if(keyDown(UP_ARROW)){
                car.y=car.y-10
        }
  }
 
  //downward movement of car
  if(car.y<650){

        if(keyDown(DOWN_ARROW)){
                car.y=car.y+10
        }
  }

 
  spawnBiodegradableWaste();
  spawnNonBiodegradableWaste();
}
  
//to spawn biodegradable wastes 
function spawnBiodegradableWaste() {
  if(frameCount % 250 === 0) {
    var bioWaste = createSprite(1500,random(450,600),10,40);
    bioWaste.velocityX=-(random(2,4));

    //to generate random biodegrabdable waste
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: bioWaste.addImage(manureImg);
              bioWaste.scale=0.3
              break;
      case 2: bioWaste.addImage(paperBallImg);
              bioWaste.scale=0.5;
              break;
      case 3: bioWaste.addImage(leavesImg);
              bioWaste.scale=0.1;
              break;
      case 4: bioWaste.addImage(peelsImg);
              bioWaste.scale=0.2;
              break;
      case 5: bioWaste.addImage(woodImg);
              bioWaste.scale=0.3;
              break;
      default: break;
    }

    
    bioWaste.lifetime = 800;
    biodegradableGrp.add(bioWaste);

  }
}

//to spawn non biodegradable wastes
function spawnNonBiodegradableWaste() {
  if(frameCount % 200 === 0) {
    var nBioWaste = createSprite(1700,random(450,600),10,40);
    nBioWaste.velocityX=-(random(2,4));

    //to generate random non biodegrabdable waste
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: nBioWaste.addImage(batteryImg);
              nBioWaste.scale=0.25;
              break;
      case 2: nBioWaste.addImage(sodaCanImg);
              nBioWaste.scale=0.25;
              break;
      case 3: nBioWaste.addImage(polyBagImg);
              nBioWaste.scale=0.2;
              break;
      case 4: nBioWaste.addImage(glassBottleImg);
              nBioWaste.scale=0.3;
              break;
      case 5: nBioWaste.addImage(medWasteImg);
              nBioWaste.scale=0.25;
              break;
      default: break;
    }

    
    nBioWaste.lifetime = 1000;
    nonBiodegradableGrp.add(nBioWaste);

  }
}
      
        
        
      
