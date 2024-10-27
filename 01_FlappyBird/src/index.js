
import Phaser from "phaser";
import PlayScene from "./scenes/PlayScene";

const config = {
  type: Phaser.AUTO, //render tyoe (WebGL)
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug:true,
    }
  },
  scene: [PlayScene]
};

let bird = null;
let pipes = null;

const VELOCITY = 200;
let flapVelocity = 150;
const initialBirdPosition =  {x:15, y:config.height/2}

let pipeVerticalgDistanceRange = [100, 250];
const pipeHorizontalDistanceRange = [400,500]; //distance beteen pipes
let pipeHorizontalDistance = 0;

const PIPES_TO_RENDER = 4;

//  ----------------------- Phaser methods --------------------
function preload () {
  // .load.resource(resourceFutureId, path)
  this.load.image('sky', 'assets/sky.png');
  this.load.image('birdSquare', 'assets/bird.png');

  this.load.image('pipe', 'assets/pipe.png');
}

function create () {
  
  
  this.add.image(0,0, 'sky').setOrigin(0,0); 

  bird = this.physics.add.sprite(initialBirdPosition.x, initialBirdPosition.y, 'birdSquare').setOrigin(0.5,0.5) // initializing object with physics
  bird.body.velocity.x = 100
  bird.body.gravity.y = 400

  pipes = this.physics.add.group();

  for (let index = 0; index < PIPES_TO_RENDER; index++) {
    const upperPipe = pipes.create(0, 0, 'pipe').setOrigin(0,1)
    const lowerPipe = pipes.create(0, 0, 'pipe').setOrigin(0,0)

    placePipe(upperPipe, lowerPipe);
  }

  pipes.setVelocityX(-200);

  // keyboard events
  this.input.keyboard.on('keydown-SPACE', flap);
  
}

//if y bird position is smotller than 0 or greater thant the canvas height, launch a lost alert
function update(time, delta) {

  // repeat feature -> if bird gets out from the screen, take it back to the start position
  if ((bird.body.y >= config.height) || bird.body.y < 0) restartPlayerPosition();
  // if (bird.body.y >= config.height) bird.body.y = bird.height/2
  // if (bird.body.y <= 0) bird.body.y = config.height - bird.height  

  // bounce feature (move back and forth) -> bounce in the walls
  if (bird.body.x >= config.width-bird.width) bird.body.velocity.x = -VELOCITY
  if (bird.body.x < 0) bird.body.velocity.x = VELOCITY
  
  // reduce aceleration 
  if (bird.body.velocity.y > 400) bird.body.velocity.y = 0

  recyclePipes(); 
}

//  ----------------------- --------------------

function flap() {
  bird.body.velocity.y = -flapVelocity
}

// let rightMostX =0 
function placePipe(uPipe, lPipe) {
  let rightMostX = getRightMostPipe();

  let pipeVerticalDistance = Phaser.Math.Between(...pipeVerticalgDistanceRange); //destructuring vector values
  let pipeVerticalPosition = Phaser.Math.Between(0 + 30,config.height - 30 - pipeVerticalDistance); //lo pone entre un poquito despues de 0, y un poquito antes del final (asegurando que haya al menos un vertical distance suficiente; Y ASEGURANDO que el otro pipe tambien se muestre almenos en 30 px, eso lo hace el primer 30 de la resta)

  let pipeHorizontalDistance = Phaser.Math.Between(...pipeHorizontalDistanceRange)

  uPipe.x = rightMostX +  pipeHorizontalDistance; // al del antggerior pipe le sumo el valor del rango 
  uPipe.y = pipeVerticalPosition;

  lPipe.x = uPipe.x
  lPipe.y = uPipe.y+pipeVerticalDistance //top el del de arriba, pero con un espacio vertical
}

function restartPlayerPosition(params) {
  bird.x = initialBirdPosition.x
  bird.y = initialBirdPosition.y
  bird.body.velocity.y = 0
}

function getRightMostPipe() {
  let rightMostX = 0; //default value
  
  pipes.getChildren().forEach(pipe => {
    rightMostX = Math.max(pipe.x, rightMostX); // da el mayor de ellos
  });

  return rightMostX;
}

function recyclePipes() {
  // since it need tocheck in every render, will be called in every update
  const tempPipes = [];
  pipes.getChildren().forEach((pipe) => {
    if (pipe.getBounds().right <= 0) {
      tempPipes.push(pipe);
      if (tempPipes.length === 2) placePipe(...tempPipes); 
    }
  })
}

new Phaser.Game(config);