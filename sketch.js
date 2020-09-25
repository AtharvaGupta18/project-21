var bullet1, bullet2, bullet3, bullet4;

var speed1, speed2, speed3, speed4;

var weight1, weight2, weight3, weight4;

var wall1, wall2, wall3, wall4;

var line1, line2, line3, line4, line5;

var thickness1, thickness2, thickness3, thickness4;

function setup(){
  createCanvas(1500, 700);
  
  speed1 = random(223, 321);
  speed2 = random(223, 321);
  speed3 = random(223, 321);
  speed4 = random(223, 321);

  weight1 = random(30, 52); 
  weight2 = random(30, 52);
  weight3 = random(30, 52);
  weight4 = random(30, 52);

  bullet1 = createSprite(50, 200, 15, 10);
  bullet2 = createSprite(50, 300, 15, 10);
  bullet3 = createSprite(50, 400, 15, 10);
  bullet4 = createSprite(50, 500, 15, 10);

  thickness1 = random(23, 83);
  thickness2 = random(23, 83);
  thickness3 = random(23, 83);
  thickness4 = random(23, 83);

  wall1 = createSprite(1300, 200, 10, 50);
  wall2 = createSprite(1300, 300, 10, 50);
  wall3 = createSprite(1300, 400, 10, 50);
  wall4 = createSprite(1300, 500, 10, 50);
  
  line1 = createSprite(750, 250, 1500, 5);
  line2 = createSprite(750, 350, 1500, 5);
  line3 = createSprite(750, 450, 1500, 5);
  line4 = createSprite(750, 550, 1500, 5);
  line5 = createSprite(750, 150, 1500, 5);

}

function draw(){

  background(0, 74, 0);
  
  bullet1.velocityX = 8;
  bullet2.velocityX = 8;
  bullet3.velocityX = 8;
  bullet4.velocityX = 8;

  bullet1Deformation();
  bullet2Deformation();
  bullet3Deformation();
  bullet4Deformation();

  drawSprites();
}

function bullet1Deformation(){

 if(wall1.x - bullet1.x < bullet1.width/2 + wall1.width/2){
    
  var deformation1 = (0.5*weight1*speed1*speed1)/thickness1*thickness1*thickness1;
  bullet1.velocityX = 0;

  if(deformation1 > 10 || deformation1 === 10){
    wall1.shapeColor = "red";
  }

  if(deformation1 < 10){
    wall1.shapeColor = "green";
  }

 }

}

function bullet2Deformation(){

  if(wall2.x - bullet2.x < bullet2.width/2 + wall2.width/2){
     
   var deformation2 = (0.5*weight1*speed1*speed1)/thickness2*thickness2*thickness2;
   bullet2.velocityX = 0;
 
   if(deformation2 > 10 || deformation2 === 10){
    wall2.shapeColor = "red";
   }
 
   if(deformation2 < 10){
    wall2.shapeColor = "green";
   }
 
  }
 
 }

 function bullet3Deformation(){

  if(wall3.x - bullet3.x < bullet3.width/2 + wall3.width/2){
     
   var deformation3 = (0.5*weight1*speed1*speed1)/thickness3*thickness3*thickness3;
   bullet3.velocityX = 0;
 
   if(deformation3 > 10 || deformation3 === 10){
    wall3.shapeColor = "red";
   }
 
   if(deformation3 < 10){
    wall3.shapeColor = "green";
   }
 
  }
 
 }

 function bullet4Deformation(){

  if(wall4.x - bullet4.x < bullet4.width/2 + wall4.width/2){
     
   var deformation4 = (0.5*weight1*speed1*speed1)/thickness4*thickness4*thickness4;
   bullet4.velocityX = 0;
 
   if(deformation4 > 10 || deformation4 === 10){
    wall4.shapeColor = "red";
   }
 
   if(deformation4 < 10){
    wall4.shapeColor = "green";
   }
 
  }
 
}