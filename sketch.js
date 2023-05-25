var moonlander, moonlanderimg, bg;
var ground;
var vy = 0;
var vx = 0;
var fuel = 100;
var g = 0.05;

function preload() {
  //to load all of your assets
  bg = loadImage("Assets/bg.png");
  moonlanderimg = loadImage("Assets/normal.png");
}

function setup() {
  //to create objects which gets executed once in your code and remains on your code
  createCanvas(1000,700);
  moonlander = createSprite(100,50,50,50);
  moonlander.addImage(moonlanderimg);
  moonlander.scale = 0.2
  moonlander.setCollider("rectangle", 0, 0, 200, 200);
  moonlander.debug = true;

  ground = createSprite(500,690,1000,20);
 
}

function draw() {
  //to write your actual logic of the code and gets executed for every frame 
  //background("blue");
  image(bg, 0, 0);
  push();
  fill(255);
  text("VERTICAL VELOCITY: " + round(vy), 800, 75);
  pop();
    //fall down
    vy += g;
  moonlander.position.y = moonlander.position.y + vy;


  

  drawSprites();
}
function keyPressed (){
  if(keyDown("UP_ARROW")) {
    upward_thrust();

     //moonlander.velocityY = moonlander.velocityY
   } 
   if(keyDown("LEFT_ARROW")) {
      left_thrust();
   } 
   if(keyDown("RIGHT_ARROW")) {
      right_thrust();
   }
}
  function upward_thrust () {
    vy = -1;
}

function right_thrust() {
    vx += 0.2;
    fuel -= 1;
}

function left_thrust(){
  vx = vx-0.2;
  fuel -= 1;
}