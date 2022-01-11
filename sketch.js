 var galaxyImg, galaxy;
var cometImg, comet, cometGroup;
var rocket, rocketImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
    galaxyImg = loadImage("gjuhkj.png");
    cometImg = loadImage("juhsiw.png");
    rocketImg = loadImage("sangy.png")
  
}
function setup() {
    createCanvas(600, 600);
    spookySound.loop();
    galaxy = createSprite(300,300);
    galaxy.addImage("galaxy",galaxyImg);
    galaxy.velocityY = 1;
    
    cometGroup = new Group();
    invisibleBlockGroup = new Group();
    
    rocket = createSprite(300,300,20,60);
    galaxy.addImage("galaxy",galaxyImg);
    galaxy.scale = 0.5
}

function draw() {
 
}