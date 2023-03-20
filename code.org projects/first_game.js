var y = randomNumber(75,325);
var x = randomNumber(75,325);
var hitbox = createSprite(200,y);
var hitbox1 = createSprite(x,200);
var hitbox2 = createSprite(200,y);
var player = createSprite(200,200);
var hit = createSprite(-100,y);
var hita = createSprite(800,y);
var hitb = createSprite(-400,y);
var hit1 = createSprite(x,-100);
var hit2 = createSprite(25,600);
var hit21 = createSprite(75,650);
var hit22 = createSprite(125,700);
var hit23 = createSprite(175,750);
var hit24 = createSprite(225,800);
var hit25 = createSprite(275,850);
var hit26 = createSprite(325,900);
var hit27 = createSprite(375,950);
var hit28 = createSprite(25,-200);
var hit29 = createSprite(75,-250);
var hit210 = createSprite(125,-300);
var hit211 = createSprite(175,-350);
var hit212 = createSprite(225,-400);
var hit213 = createSprite(275,-450);
var hit214 = createSprite(325,-500);
var hit215 = createSprite(375,-550);
var box = createSprite(200,200);
var death = createSprite(200,200);
hitbox.setAnimation("hitbox");
hitbox1.setAnimation("hitbox 1");
hitbox2.setAnimation("hitbox 2");
hitbox2.visible = 0;
player.setAnimation("player 2");
hit.setAnimation("hit");
hit1.setAnimation("hit 1");
hit2.setAnimation("hit 2");
hit21.setAnimation("hit 2.1");
hit22.setAnimation("hit 2.2");
hit23.setAnimation("hit 2.3");
hit24.setAnimation("hit 2.4");
hit25.setAnimation("hit 2.5");
hit26.setAnimation("hit 2.6");
hit27.setAnimation("hit 2.7");
hit28.setAnimation("hit 2.8");
hit29.setAnimation("hit 2.9");
hit210.setAnimation("hit 2.10");
hit211.setAnimation("hit 2.11");
hit212.setAnimation("hit 2.12");
hit213.setAnimation("hit 2.13");
hit214.setAnimation("hit 2.14");
hit215.setAnimation("hit 2.15");

//BORDER AND DEATH//
box.setAnimation("box");
death.setAnimation("death");
death.visible = 0;

hit.width = 140;
hit.height = 140;
hit1.width = 140;
hit1.height = 140;
hitbox1.height = 1000;
hitbox.width = 1000;

// DEBUG //
if(keyDown("[")){
hit.debug = true;
hit1.debug = true;
hita.debug = true;
hitb.debug = true;
hit2.debug = true;
hit21.debug = true;
hit22.debug = true;
hit23.debug = true;
hit24.debug = true;
hit25.debug = true;
hit26.debug = true;
hit27.debug = true;
hit28.debug = true;
hit29.debug = true;
hit210.debug = true;
hit211.debug = true;
hit212.debug = true;
hit213.debug = true;
hit214.debug = true;
hit215.debug = true;
player.debug = true;
}
//^ DEBUG ^//

var score = 0;
var health = 1;
playSound("funny.noise.mp3", true);

//Phase 1//
// This code makes the hitbox moves to the right. // 
// When sprite reaches right, the gear moves right, pushing the player.//
// When it reaches the right, it goes back to the left side of the screen. //
// It keeps on replaying but in different y values. //
function draw() {
 var z = randomNumber(50,350);
 var b = randomNumber(50,350);
 hitbox.velocityX = 10;
if (hitbox.x > 500){
 hit.velocityX = 10;
 hit.rotation = hit.rotation + 15;
 hitbox.y = 500;
}
if (hit.collide(player)){
  health = health - 1;
}
if(hit.x > 550){
 hit.x = -350;
 hit.y = z;
 hitbox.y = z;
 hitbox.x = 200;
 score = score + 1;
}
// Same code as above but instead the gear goes down.//
hitbox1.velocityY = 10;
if (hitbox1.y > 500){
 hit1.velocityY = 10;
 hit1.rotation = hit1.rotation + 15;
 hitbox1.x = 500;
}
if(hit1.y > 550){
 hit1.y = -350;
 hit1.x = b;
 hitbox1.x = b;
 hitbox1.y = 200;
}
hit.setCollider("circle",0,0,68);
hit1.setCollider("circle",0,0,68);

// Phase 2 //
// Fist will go towards each other and go back out//
// Once the fist go off screen, it give you one point//
if(score > 15){
  hitb.setAnimation("fist");
  hitb.setCollider("rectangle",0,0,600,230);
  hita.setAnimation("fist 1");
  hita.setCollider("rectangle",0,0,600,230);
  hitbox2.visible = 1;
  hitbox2.width = 1000;
  hitbox.velocityY = 0;
  hitbox1.velocityY = 0;
  hit1.velocityY = 0;
  hit.velocityX = 0;
  hitbox1.visible = 0;
  hitbox.visible = 0;
  
hitbox2.velocityX = 10;
if (hitbox2.x > 500){
 hitb.velocityX = 37;
 hita.velocityX = -37;
 hitbox2.y = 500;
  }
if(hitb.x > 600){
 hitb.x = -1250;
 hita.x = 1650;
 hitb.y = z;
 hita.y = z;
 hitbox2.y = z;
 hitbox2.x = 200;
 score = score + 1;
}
}
 
//Phase 3//
if(score == 51){
  //Stop all previous motion//
  hita.x = -600;
  hita.y = -600;
  hitb.x = -600;
  hitbox2.y = -600;
  hita.velocityX = 0;
  hita.velocityY = -10;
  hitb.velocityY = 0;
  hitbox2.velocityY = 0;
  
  //Start new wave motion from bottom//
  hit28.y = hit28.y - 12;
  if(hit28.y < -450);
  //Resets hit28.y//
  hit28.y = hit28.y + 12;
  hit2.y = hit2.y - 12;
  hit21.y = hit21.y - 12;
  hit22.y = hit22.y - 12;
  hit23.y = hit23.y - 12;
  hit24.y = hit24.y - 12;
  hit25.y = hit25.y - 12;
  hit26.y = hit26.y - 12;
  hit27.y = hit27.y - 12;
  if(hit2.y < 310){hit2.velocityY = 20;}
  if(hit21.y < 310){hit21.velocityY = 20;}
  if(hit22.y < 310){hit22.velocityY = 20;}
  if(hit23.y < 310){hit23.velocityY = 20;}
  if(hit24.y < 310){hit24.velocityY = 20;}
  if(hit25.y < 310){hit25.velocityY = 20;}
  if(hit26.y < 310){hit26.velocityY = 20;}
  if(hit27.y < 310){hit27.velocityY = 20;}
  
  //Start wave motion from top//
  if(hit2.y > 600){
  hit28.y = hit28.y + 12;
  hit29.y = hit29.y + 12;
  hit210.y = hit210.y + 12;
  hit211.y = hit211.y + 12;
  hit212.y = hit212.y + 12;
  hit213.y = hit213.y + 12;
  hit214.y = hit214.y + 12;
  hit215.y = hit215.y + 12;
  if(hit28.y > 90){hit28.velocityY = -20;}
  if(hit29.y > 90){hit29.velocityY = -20;}
  if(hit210.y > 90){hit210.velocityY = -20;}
  if(hit211.y > 90){hit211.velocityY = -20;}
  if(hit212.y > 90){hit212.velocityY = -20;}
  if(hit213.y > 90){hit213.velocityY = -20;}
  if(hit214.y > 90){hit214.velocityY = -20;}
  if(hit215.y > 90){hit215.velocityY = -20;}
  }
  if(hit28.y < -400){
    score = score + 1;
    hit28.y = 800;
    hit28.velocityY = 0;
  }

}
// This is the health system //
// If the player is touching any of the hit sprites, health = 0//
// BEWARE ONLY ONE LIFE //
if (
hit.isTouching(player)|| 
hit1.isTouching(player)|| 
hit2.isTouching(player)||
hit21.isTouching(player)||
hit22.isTouching(player)||
hit23.isTouching(player)||
hit24.isTouching(player)||
hit25.isTouching(player)||
hit26.isTouching(player)||
hit27.isTouching(player)||
hit28.isTouching(player)||
hit29.isTouching(player)||
hit210.isTouching(player)||
hit211.isTouching(player)||
hit212.isTouching(player)||
hit213.isTouching(player)||
hit214.isTouching(player)||
hit215.isTouching(player)||
hita.isTouching(player)||
hitb.isTouching(player)
){
  health = health - 1;
}
// This is the background //
background(rgb(56, 0, 26));

//PLAYER MOVEMENT//
//The player movement makes the sprite go down faster.//
//But when you hit "space", the sprite jumps back up, reseting the velocity.//
// Sprite movemnt is | UP ARROW or W | to go up, | RIGHT ARROW or d | to go right, | LEFT ARROW or a | to go left.//
player.velocityY = player.velocityY + 1;
player.setCollider("rectangle",0,0,20,20,0);
if(keyWentDown("w")){
  player.velocityY = -10;
  player.setAnimation("player 3");
}
if(keyDown("d")){
  player.velocityX = 5;
} 
if(keyDown("a")){
  player.velocityX = -5;
}
if(player.velocityY > -5 ){
  player.setAnimation("player");
} 
if(player.velocityY > -7 ){
  player.setAnimation("player 3");
} 
if(player.velocityY > 5){
  player.setAnimation("player 1");
  player.setCollider("rectangle",0,3,20,20,0);
}
if(player.velocityY > 10){
  player.setAnimation("player 2");
  player.setCollider("rectangle",0,5,20,20,0);
}
// This is the game over screen//
// When health = 0, everything goes off screen //
// Also when health = 0, screen goes black.//
if(health <= 0){
  death.visible = 1;
  hit.velocityX = 0;
  hit.y = -500;
  hit1.velocityX = 0;
  hit1.x = -500;
  hita.x = -1000;
  hitb.x = -1000;
  hita.velocityX = 0;
  hitb.velocityX = 0;
  player.velocityY = 0;
  player.y = 200;
  player.x = 200;
  hit2.y = -600;
  hit21.y = -600;
  hit22.y = -600;
  hit23.y = -600;
  hit24.y = -600;
  hit25.y = -600;
  hit26.y = -600;
  hit27.y = -600;
  hit28.y = -600;
  hit29.y = -600;
  hit210.y = -600;
  hit211.y = -600;
  hit212.y = -600;
  hit23.y = -600;
  hit214.y = -600;
  hit215.y = -600;
}

if (score > 51){death.visible = 1;}
// This detects if the player goes off screen//
// And if the player goes off screen, health = 0//
if(player.y > 420 || player.y < -20 || player.x > 420 || player.x < -20){
  health = health - 1;
}
drawSprites();
if (score > 51){
  textSize(25);
  fill("white");
  text("GAMER MOMMENT",150,200);
}
fill("white");
textSize(25);
text(score,196,40);
}
