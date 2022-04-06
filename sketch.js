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
  bg=createSprite(600,220,1400,700);
  bg.addImage(bgImg)
  bg.scale=2
  car=createSprite(100,550,10,10);
  car.addImage(carImg);
  car.scale=0.35
  
  biodegradableGrp= new Group();
  nonBiodegradableGrp= new Group();
  
}

function draw() {
  //trex.debug = true;
  background(0);
  

  drawSprites();
  spawnBiodegradableWaste();
  spawnNonBiodegradableWaste();
    }
  
  
function spawnBiodegradableWaste() {
  if(frameCount % 60 === 0) {
    var bioWaste = createSprite(600,165,10,40);
    
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: bioWaste.addImage(manureImg);
              break;
      case 2: bioWaste.addImage(paperBallImg);
              break;
      case 3: bioWaste.addImage(leavesImg);
              break;
      case 4: bioWaste.addImage(peelsImg);
              break;
      case 5: bioWaste.addImage(woodImg);
              break;
      default: break;
    }

    bioWaste.scale = 0.3;
    bioWaste.lifetime = 300;
    biodegradableGrp.add(bioWaste);

  }
}

function spawnNonBiodegradableWaste() {
  if(frameCount % 80 === 0) {
    var nBioWaste = createSprite(300,165,10,40);
   
    
    
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: nBioWaste.addImage(batteryImg);
              break;
      case 2: nBioWaste.addImage(sodaCanImg);
              break;
      case 3: nBioWaste.addImage(polyBagImg);
              break;
      case 4: nBioWaste.addImage(glassBottleImg);
              break;
      case 5: nBioWaste.addImage(medWasteImg);
              break;
      default: break;
    }

    nBioWaste.scale = 0.3;
    nBioWaste.lifetime = 300;
    nonBiodegradableGrp.add(nBioWaste);

  }
}
      
        
      