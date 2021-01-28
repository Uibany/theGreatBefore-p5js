var scr = 0;
var GRAVITY = 0.1;

let stars = [];
var key;
var getkey=false; 
var nomorekey=false;
var level1success = false;
var r1=0;

let sclouds = [];
var key2;
var getkey2= false; 
var nomorekey2=false;
var level2success = false;
var r2=0;


function preload() {
  jump = loadSound('./resources/jumping.wav');
  down = loadSound('./resources/down.wav');
  bgm1 = loadSound('./resources/bgm1.mp3')
  bgm2 = loadSound('./resources/gold rush.mp3')
  gotkey = loadSound('./resources/getkey.mp3')
}

function setup() {
  textFont("Unica One")
  imageMode(CENTER)
  createCanvas(windowWidth, windowHeight);
  
  
 /*=========================================================
  level 1
===========================================================*/ 
  { clouds = new Group();  
  for (var i = 0; i < 300; i++)
  {stars[i] = new Star();}
  


  
  cloud500200 = loadImage('./resources/500_200.png');
  cloud600200 = loadImage('./resources/600_200.png');
  cloud300150 = loadImage('./resources/300_150.png');
  cloud400200 = loadImage('./resources/400_250.png');
  cloud400250 = loadImage('./resources/400_250.png');
  cloudplanet = loadImage('./resources/planet.png');
  cloud150 = loadImage('./resources/150_150.png');
  cloud200 = loadImage('./resources/200_200.png');
  cloud300 = loadImage('./resources/300_300.png');
  
  STAR=loadImage('./resources/star.png');//the token
 
  
  //create platforms
  platform = createSprite(100, 400);
  platform2 = createSprite(650, 700);
  platform3 = createSprite(1200, 700);
  platform4 = createSprite(1700, 500);
  platform5 = createSprite(2200, 300);
  platform6 = createSprite(2800, 200);
  platform7 = createSprite(3400, 550);
  platform8 = createSprite(2900, 900);
  platform9 = createSprite(3400, 1100);
  platform10 = createSprite(2300, 1100);
  platform11 = createSprite(1800, 1100);
  platform12 = createSprite(4000, 700);
  platform13 = createSprite(4400, 500);
  platform14 = createSprite(4800, 700);
  platform15 = createSprite(5200, 900);
  platform16 = createSprite(5600, 800);
  platform17 = createSprite(5900, 550);
  platform18 = createSprite(6500, 700);
  
  
  //add image for platforms
  platform.addImage(cloud600200);
  platform2.addImage(cloud500200);
  platform3.addImage(cloud400250);
  platform4.addImage(cloud500200);
  platform5.addImage(cloud300150);
  platform6.addImage(cloud500200);
  platform7.addImage(cloud400200);
  platform8.addImage(cloud400200);
  platform9.addImage(cloud400250);
  platform10.addImage(cloud300150);
  platform11.addImage(cloud150);
  platform12.addImage(cloud300150);
  platform13.addImage(cloud300);
  platform14.addImage(cloud200);
  platform15.addImage(cloud150);
  platform16.addImage(cloud200);
  platform17.addImage(cloud150);
  platform18.addImage(loadImage('./resources/planet.png'));
  
  //add platforms to group clouds{} 
  clouds.add(platform);
  clouds.add(platform2);
  clouds.add(platform3);
  clouds.add(platform4);
  clouds.add(platform5);
  clouds.add(platform6);
  clouds.add(platform7);
  clouds.add(platform8);
  clouds.add(platform9);
  clouds.add(platform10);
  clouds.add(platform11);
  clouds.add(platform12);
  clouds.add(platform13);
  clouds.add(platform14); 
  clouds.add(platform15); 
  clouds.add(platform16); 
  clouds.add(platform17); 
  clouds.add(platform18); 
  
  //girl
  girl = createSprite(-50, 100);  
  girl.depth = 20;
  var myAnimation = girl.addAnimation('standing','./resources/stand1@2x.png', './resources/stand2@2x.png');
  girl.addAnimation('left','./resources/left1.png', './resources/left2-1.png','./resources/left3new-1.png');
  girl.addAnimation('right','./resources/right1.png', './resources/right2-1.png','./resources/right3new-1.png');
  myAnimation.offY=10;
  
  
  //key
  keys = createSprite(1800,900,30,30)
  keys.addImage(loadImage('./resources/star.png'));
}
  
  /*=========================================================
   level 2 
  ===========================================================*/
  {
  flowers = new Group();

  
  F200 = loadImage('./resources/F200.png');
  F300 = loadImage('./resources/F300.png');
  F400 = loadImage('./resources/F400.png');
  ground = loadImage('./resources/ground300_120.png');
  tree400 = loadImage('./resources/tree400_550.png');
  tree500 = loadImage('./resources/tree500_800.png');
  F30 = loadImage('./resources/F30.png');
  smallcloud = loadImage('./resources/smallcloud.png');

  
  //create platforms
  flower = createSprite(0, 1000);
  flower1 = createSprite(100, 1000);
  flower2 = createSprite(-300, 700);
  flower3 = createSprite(100, 300);
  flower4 = createSprite(600, 500);
  flower5 = createSprite(1000, 180);
  flower6 = createSprite(2500, 100);
  flower7 = createSprite(5000, 600);
  flower8 = createSprite(5700, 400); 
  
  ground1 = createSprite(1500, 500);
  ground2 = createSprite(1700, 500);
  ground3 = createSprite(1900, 500);
  ground4 = createSprite(5000, 1000);
  ground5 = createSprite(5700, 700);
  
  flowerstone = createSprite(1300, 350);
  flowerstone1 = createSprite(3000, 350);
  flowerstone2 = createSprite(3600, 350);
  flowerstone3 = createSprite(4200, 350);
  
  
  //add image for platforms
  flower.addImage(ground);
  flower1.addImage(ground);
  flower2.addImage(F200);
  flower3.addImage(F300);
  flower4.addImage(ground);
  flower5.addImage(ground);
  flower6.addImage(F400);
  flower7.addImage(tree500);
  flower8.addImage(tree400);
  
  ground1.addImage(ground);
  ground2.addImage(ground);
  ground3.addImage(ground);
  ground4.addImage(ground);
  ground5.addImage(ground);
  
  flowerstone.addImage(F200);
  flowerstone1.addImage(F200);
  flowerstone2.addImage(F300);
  flowerstone3.addImage(F400);
  
  
  //add platforms to group clouds{}
  flowers.add(flower);
  flowers.add(flower1);
  flowers.add(flower2);
  flowers.add(flower3);
  flowers.add(flower4);
  flowers.add(flower5);
  flowers.add(flower6);
  flowers.add(flower7);
  flowers.add(flower8);
  
  flowers.add(ground1);
  flowers.add(ground2);
  flowers.add(ground3);
  flowers.add(ground4);
  flowers.add(ground5);
  
  flowers.add(flowerstone1);
  flowers.add(flowerstone2);
  flowers.add(flowerstone3);
  
  
  
  girl2 = createSprite(0, 400);
  girl2.depth = 20;
  var myAnimation2 = girl2.addAnimation('standing2','./resources/2stand1.png', './resources/2stand2.png');
  girl2.addAnimation('left2','./resources/2left1.png', './resources/2left2.png','./resources/left3new.png');
  girl2.addAnimation('right2','./resources/2right1.png', './resources/2right2.png','./resources/right3new.png');
  myAnimation2.offY=10;
  
  
  
  keys2 = createSprite(2000,-100,30,30)
  keys2.addImage(F30);
  
  
  //for clouds in the background
   for (let i = 0; i < 50; i++) {
    sclouds.push(new Smallclouds());
  }
  }

}




  /*=======level1=======*/
function level_1()
  {
    push()
    frameRate= (60);
  background(0);
  
  //instructions
  if(girl.position.x < 0)
  {
    push()
  fill(255,255,255,(150+cos(frameCount/10)*100))
  textSize(30)
  text ('PRESS MOUSE TO ZOOM OUT', -400,150)
  text ('PRESS <- OR -> TO MOVE', -400,200)
  text ('PRESS SPACE TO JUMP', -400,250)
    pop();
  }
  
  if(getkey==false && girl.position.x > 1200 && girl.position.x < 1500)
  {
    push()
  fill(255,255,255,(150+cos(frameCount/10)*100))
  textSize(30)
    
  text ('GET THE TOKEN!', 1100,350)
  
    pop();
  }
  
  if (girl.position.x > 6500 && girl.position.x < 7000 && getkey == true)
  {
    push()
    fill(255,255,255,(150+cos(frameCount/10)*100))
    textSize(30)
  
    text('Ready to see another world?', 6700,250)
    pop()
    }
 
  
  //decorations
  for (var i = 0; i < stars.length; i++) 
  {stars[i].draw();}
  
  
  
  if (getkey==false)
  { 
    stroke(255,255,255,150)
    noFill()
    strokeWeight(8*cos(frameCount/10))
    ellipse(1800,900,200*cos(frameCount/20),200*cos(frameCount/20))
  }
  
  if (getkey==true)
  {
    push();
   
    fill(255,255,255,(150+cos(frameCount/10)*100))
    textSize(100)
    text('--->', 2200,700)
    fill(255,255,255,random(200,250))
    noStroke();
    ellipse(7100,500,(50*cos(frameCount/20)+120),(50*cos(frameCount/20)+120)) 
     
    
    if(girl.position.x > (7100-200*cos(frameCount/20)) && girl.position.y > 500 && girl.position.y < 700)
    {
      girl.remove();
      level1success = true;
    }
    pop();
  }

  if(level1success == true){
    push();
    fill(0)
    r1+=50
    textSize(70)
    textAlign(CENTER)
    ellipse(7100,500,r1,r1)
    fill(255)
    frameRate=(30)
    image(STAR,random(6000,9000),random(0,800))
    text('BLACK & WHITE', 7100 ,400)
    textSize(50)
    text('always your best friends!', 7100 ,500)
   
     //return button
    noFill()
    stroke(255)
    ellipse(7100,600,(50*cos(frameCount/20)+20),(50*cos(frameCount/20)+20)) 
    
    pop();
  }

  
  //if no arrow input set velocity to 0
  girl.velocity.x = 0;

  if (keyIsDown(LEFT_ARROW)){
    girl.velocity.x = -10;
    girl.changeAnimation('left');
  }
  else if (keyIsDown(RIGHT_ARROW)){
    girl.velocity.x = 10;
    girl.changeAnimation('right');
  }
  else {girl.changeAnimation('standing')}

 
//back to origin
  {
  if (girl.position.y>5000)
    { down.play();
      girl.position.y = -500
      girl.position.x = 100
    }

  }
  
  
//on platforms
  for (var j = 0; j< clouds.length;j++){
   while(clouds[j].overlapPixel(girl.position.x, girl.position.y+50))
  {
    girl.position.y--;
    girl.velocity.y = 0;
    if (keyIsDown(32) || (keyIsDown(32) && keyIsDown(LEFT_ARROW) )|| (keyIsDown(32) && keyIsDown(RIGHT_ARROW))){
    jump.setVolume(0.2);
    jump.play();
    girl.velocity.y = -32;
    girl.position.y +=girl.velocity.y;
    girl.velocity.y += 0.5;
    }
  }
    if(clouds[j].overlapPixel(girl.position.x, girl.position.y+50)==false)
   {
    girl.velocity.y += GRAVITY;
   }
    
    

  /*================================
           camera settings
  ================================*/
  {
  camera.zoom = 0.7;  
  if(mouseIsPressed)
  camera.zoom = 0.2;
  //set the camera to follow the sprite
  camera.position.x = girl.position.x;
  //camera should be less sensitive on y-axis
  camera.position.y = 0.5*(girl.position.y - camera.position.y)+500;
  }
  
    
  girl.overlap(keys,getKey)
 
  drawSprites(clouds);
  drawSprite(girl);
  drawSprite(keys);
  }
     pop()
  }  
  
  /*=======level2=======*/
function level_2()
  {
push()
    frameRate= (60);
  background(255,230,230);
    //background clouds
 
  for (let i = 0; i < sclouds.length; i++) {
    sclouds[i].move();
    sclouds[i].display();
  }

  
  
  
  //decorations
  image(tree400,600, 180)
  image(tree500,1700, 50)
  image(tree400,1000, -100)
  
  
  
  if (getkey2==false)
  { 
    stroke(255,100,100,150)
    noFill()
    strokeWeight(8*cos(frameCount/40))
    //key position
    ellipse(2000,-100,200*cos(frameCount/20),200*cos(frameCount/20))
  }
  
  
   else if (getkey2==true)
  {
    push();
    
    fill(255,100,random(80,120))
    noStroke();
    ellipse(6200, 500,(50*cos(frameCount/20)+120),(50*cos(frameCount/20)+120)) 
     
    //goal position
    if(girl2.position.x > (6200-200*cos(frameCount/20)) && girl2.position.y > 300 && girl2.position.y < 700)
    {
      girl2.remove();
      level2success = true;

    }
    pop();
  }
 
  
  if(level2success == true)
  {
    push();
    r2+=50
    noStroke()
    fill(255,200,200)
    ellipse(6200,-100,r2,r2)
    textAlign(CENTER)
    
    fill(255,150,150)
    textSize(50)
    text('Roses are RED\nViolets are blue\nHoney is sweet\nand so are YOU',6200,250)
    noFill()
    stroke(255,100,100,150)
    ellipse(6200,600,(100+cos(frameCount/20)*50),(100+cos(frameCount/20)*50))
    image(F30,random(5000,7500),random(0,800))
    pop();
 }

  
  //if no arrow input set velocity to 0
  girl2.velocity.x = 0;

  if (keyIsDown(LEFT_ARROW)){
    girl2.velocity.x = -10;
    girl2.changeAnimation('left2');
  }
  else if (keyIsDown(RIGHT_ARROW)){
    girl2.velocity.x = 10;
    girl2.changeAnimation('right2');
  }
  else {girl2.changeAnimation('standing2')}

  
  
  
flowerstone.position.x = 1700+300*cos(frameCount/40)
flowerstone1.position.y = 300+500*cos(frameCount/50) 
flowerstone2.position.y = 300+100*cos(frameCount/10) 
flowerstone3.position.y = 400+300*cos(frameCount/20)  
//back to origin
 
  
  
  {
  if (girl2.position.y>5000)
    { down.play();
      girl2.position.y = -500
      girl2.position.x = 100
    }

  }
  
  
  girl2.collide(flowerstone)
   while(flowerstone.overlapPixel(girl2.position.x, girl2.position.y+60))
  {
    girl2.position.y--;
    girl2.velocity.y = 0;

    girl2.position.x = flowerstone.position.x;
    
 
    if (keyIsDown(32)){
    jump.setVolume(0.2);
    jump.play();
    girl2.velocity.y = -35;
    girl2.position.y +=girl2.velocity.y;
    girl2.velocity.y += 0.5;
    }
  }
  
  
//on platforms

  for (var j = 0; j< flowers.length;j++){
   while(flowers[j].overlapPixel(girl2.position.x, girl2.position.y+50))
  {
    girl2.position.y--;
    girl2.velocity.y = 0;
    
    if (keyIsDown(32) || (keyIsDown(LEFT_ARROW) && keyIsDown(32))|| (keyIsDown(RIGHT_ARROW) && keyIsDown(32))){
    jump.setVolume(0.2);
    jump.play();
    girl2.velocity.y = -33;
    girl2.position.y +=girl2.velocity.y;
    girl2.velocity.y += 0.5;
    }
    
  }
    if(flowers[j].overlapPixel(girl2.position.x, girl2.position.y+50)==false)
   {
    girl2.velocity.y += GRAVITY;
   }
    
  } 

  /*================================
           camera settings
  ================================*/
  {
  camera.zoom = 0.7;  
  if(mouseIsPressed)
  camera.zoom = 0.2;
  //set the camera to follow the sprite
  camera.position.x = girl2.position.x;
  //camera should be less sensitive on y-axis
  camera.position.y = 0.5*(girl2.position.y - camera.position.y)+500;
  }
  
  girl2.overlap(keys2,getKey2)
 
  drawSprites(flowers,flowerstone,girl2,keys2);
  drawSprite(flowerstone,girl2,keys2);
  drawSprite(girl2);
  drawSprite(keys2);
    pop()
  }

  /*=======opening=======*/

function opening()
  {
    push()
    camera.zoom = 1;
    camera.position.x = windowWidth/2;
    camera.position.y = windowHeight/2;
    push()
  background(0, 0, 0, 30);
  noFill();
  strokeWeight(3)
  stroke(255, 255, 255, 100);
  imageMode(CENTER);


  ellipse(windowWidth / 2 - 200, windowHeight / 2, 80, 80);
  ellipse(windowWidth / 2, windowHeight / 2, 80, 80);
  ellipse(windowWidth / 2 + 200, windowHeight / 2, 80, 80);

  //stroke(255, 255, 255, 150);
  fill(0)
  if (overCircle(windowWidth / 2 - 200, windowHeight / 2, 100) == true) 
  {
    push();
    ellipse(windowWidth / 2 - 200, windowHeight / 2, 100, 100);
    translate(windowWidth / 2 - 200, windowHeight / 2)
    rotate(frameCount / 20)
    image(STAR, 0, 0)
    pop();
    noStroke()
    fill(200)
    textSize(20)
    textAlign(CENTER)
    text("The nighT is ___", windowWidth / 2 - 200, windowHeight / 2 + 100)
  } 
  else if (overCircle(windowWidth / 2, windowHeight / 2, 100) == true)
  {
    push();
    ellipse(windowWidth / 2, windowHeight / 2, 100, 100);
    translate(windowWidth / 2, windowHeight / 2)
    rotate(frameCount / 20)
    image(F30, 0, 0)
    pop();
    background(200, 50, 80, 40)
    noStroke()
    fill(255)
    textSize(20)
    textAlign(CENTER)

    text("roses are ___", windowWidth / 2, windowHeight / 2 + 100)
  } 
  else if (overCircle(windowWidth / 2 + 200, windowHeight / 2, 100) == true)
  {
    push();
    ellipse(windowWidth / 2 + 200, windowHeight / 2, 100, 100);
    noStroke();
    fill(255)
    textSize(20)
    textAlign(CENTER)
    text("loading ...", windowWidth / 2 + 200, windowHeight / 2 + 100)
    pop();
  }
pop()
}


function draw() 
{
  if (scr == 0) 
  {
    opening();
  } 
  else if (scr == 1) 
  {
    level_1();
  }
  else if (scr == 2) 
  {
    level_2();
  } 

}



/*===========================
      class & functions
============================*/ 

// decorations 
class Star {
	constructor() {
		this.x = random(-2000,9000);
		this.y = random(-2000,2000);
		this.size = random(0.25, 8);
		this.t = random(TAU);
	}
	
	draw() {
		this.t += 0.08;
		var scale = this.size + sin(this.t) * 2;
		noStroke();
		ellipse(this.x, this.y, scale, scale);
	}

}

class Smallclouds {
  constructor() {
    this.x = random(-2000,8000);
    this.y = random(-800,1500);
  }

  move() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }

  display() {
    image(smallcloud,this.x, this.y);
  }
}


//get tokens
function getKey(item,keys)
{ 
  getkey=true;
  if (nomorekey==false){
  gotkey.play();}
  keys.remove();
  nomorekey=true;
}

function getKey2(item,keys2)
{ 
  getkey2=true;
  if (nomorekey2==false){
  gotkey.play();}
  keys2.remove();
  nomorekey2=true;
}


//overcircle
function overCircle(x, y, d) { 
  if (dist(mouseX, mouseY, x, y) < d / 2) 
  {
    return true;  
  } else {
    return false;  
  }
}


/*===========================
      mouse Pressed
============================*/ 
function mousePressed() {
  if (scr == 0) 
  { 

    if (overCircle(windowWidth / 2 - 200, windowHeight / 2, 80) == true) { 
      scr = 1; 
      
      bgm1.play();
      bgm1.loop();
      
    } 
    else if (overCircle(windowWidth / 2, windowHeight / 2, 80) == true) { 
      scr = 2;
      
      bgm2.play();
      bgm2.loop();
    }
  } 
    
  if (scr == 1) 
  {
    if (level1success == true ) { 
      scr = 0; 
      bgm1.stop();

    }
  }  
  if (scr == 2) 
  {
     if (level2success == true){ 
      scr = 0; 
      bgm2.stop();

    }
  } 

}
